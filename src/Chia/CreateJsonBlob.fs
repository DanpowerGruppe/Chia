namespace Chia

module CreateJsonBlob =
    open FSharp.Control.Tasks.ContextInsensitive
    open System.IO
    open Chia.InitBuilder
    open Microsoft.WindowsAzure.Storage.Blob
    open System.Threading.Tasks
    open System
    open System.Text.Json
    open Chia.FileWriter
    type JsonBlobInfo = {
                Date : DateTime
                DataName : string
                FileWriterConfig : FileWriterConfig
                Container : CloudBlobContainer option
            }

    let getBlobId (jsonInfo : JsonBlobInfo) =
        let dateStr = jsonInfo.Date.ToString("yyyyMMdd")
        dateStr + "_" + jsonInfo.DataName
    module Local =

        let saveDataToJsonFile (data:'a,jsonInfo : JsonBlobInfo) =
            task {
                try
                    Log.logStarting("DataToJsonBlob",LocalService,Upload,BlobTable,jsonInfo.FileWriterConfig)
                    let sourceDirectoryRoot = Path.GetFullPath(cachePath jsonInfo.FileWriterConfig)
                    let blobId = getBlobId jsonInfo
                    let path = sourceDirectoryRoot + (sprintf "%s.json" blobId)
                    Log.logStarting(sprintf "Path: %s" path,LocalService,Create,BlobTable,jsonInfo.FileWriterConfig)
                    // printfn "Data: %A" data
                    let json =
                        try
                            JsonSerializer.Serialize data
                        with exn ->
                            printfn "Error %s" exn.Message
                            let msg =
                                sprintf "Error : Exception %s InnerException : %s" exn.Message
                                    exn.InnerException.Message
                            Log.logCritical("JsonConvert",LocalService,Calculation,LocalStorage,exn,jsonInfo.FileWriterConfig)
                            failwith msg
                    Log.logFinished("GotJson",LocalService,Calculation,LocalStorage,jsonInfo.FileWriterConfig)
                    do! File.WriteAllTextAsync(path, json)
                    Log.logFinished("JsonCache",LocalService,Create,BlobTable,jsonInfo.FileWriterConfig)
                with exn ->
                    let msg =
                        sprintf "Error Msg: Exception %s InnerException : %s" exn.Message exn.InnerException.Message
                    Log.logCritical("SaveDataToJson",LocalService,Insert,LocalStorage,exn,jsonInfo.FileWriterConfig)
                    failwith msg
            }

        let readJsonFile (jsonInfo : JsonBlobInfo, mapper: string -> 'a) =
            task {
                let blobId = getBlobId jsonInfo
                Log.logStarting("ReadJsonData",LocalService,Create,LocalStorage,jsonInfo.FileWriterConfig)

                let sourceDirectoryRoot = Path.GetFullPath(cachePath jsonInfo.FileWriterConfig)
                let path = sourceDirectoryRoot + (sprintf "%s.json" blobId)
                let! txt = File.ReadAllTextAsync(path)
                Log.logFinished("GotText",LocalService,Download,LocalStorage,jsonInfo.FileWriterConfig)
                // logOk jsonInfo.FileWriterConfig "Got txt"
                let data =
                    try
                        txt |> mapper
                    with exn ->
                        let msg =
                            sprintf "Error : Exception %s InnerException : %s" exn.Message exn.InnerException.Message
                        Log.logCritical ("ReadJsonFile",LocalService,Calculation,LocalStorage,exn,jsonInfo.FileWriterConfig)
                        // logError exn jsonInfo.FileWriterConfig msg
                        failwith msg
                return data
            }
        let getCachedData (jsonInfo : JsonBlobInfo,mapper: string -> 'a) (getDataTask: unit -> Task<'a>) =
            task {
            try
                Log.logStarting("ReadCachedData",LocalService,Download,LocalStorage,jsonInfo.FileWriterConfig)
                // logOk jsonInfo.FileWriterConfig "Trying to read cached data"
                let! cachedData = readJsonFile (jsonInfo,mapper)
                Log.logFinished ("GotCachedData",LocalService,Download,LocalStorage,jsonInfo.FileWriterConfig)
                // logOk jsonInfo.FileWriterConfig "Got CachedData"
                return cachedData
            with
            | exn ->
                Log.logCritical ("GetCachedData",LocalService,Download,LocalStorage,exn,jsonInfo.FileWriterConfig)
                let! data = getDataTask ()
                do! saveDataToJsonFile (data,jsonInfo)
                return data
            }
    module Azure =

        ///Function to save Json Blobs
        let saveDataToJsonBlob (data:'a,jsonInfo : JsonBlobInfo) (container : CloudBlobContainer) =
            task {
                Log.logStarting ("ExportDataAsJsonBlob",AzureFunction,Upload,BlobTable,jsonInfo.FileWriterConfig)
                let blobId = getBlobId jsonInfo
                let blobBlock = container.GetBlockBlobReference(blobId)
                blobBlock.Properties.ContentType <- "application/json"
                use ms = new MemoryStream()
                printfn "Got Memory Stream"
                let json =
                    try
                        Newtonsoft.Json.JsonConvert.SerializeObject data
                    with exn ->
                        let msg =
                            sprintf "Error : Exception %s InnerException : %s" exn.Message exn.InnerException.Message
                        Log.logCritical (msg,AzureFunction,Calculation,BlobTable,exn,jsonInfo.FileWriterConfig)
                        failwith msg
                let writer = new StreamWriter(ms)
                writer.Write(json)
                writer.Flush()
                ms.Position <- int64 0
                printfn "Memory Stream Length %i" ms.Length
                do! blobBlock.UploadFromStreamAsync(ms)
                Log.logFinished ("JsonCache",AzureFunction,Create,BlobTable,jsonInfo.FileWriterConfig)
            }

        let getDataFromJsonBlob (mapper: string -> 'a) (jsonInfo : JsonBlobInfo) =
            task {
                Log.logStarting("DataFromJsonBlob",AzureFunction,Download,BlobTable,jsonInfo.FileWriterConfig)
                let blobId = getBlobId jsonInfo
                let blockBlob = jsonInfo.Container.Value.GetBlockBlobReference(blobId)
                let! txt = blockBlob.DownloadTextAsync()
                return txt |> mapper
            }
