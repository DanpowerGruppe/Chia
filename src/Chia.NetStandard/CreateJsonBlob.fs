namespace Chia

    module CreateJsonBlob =

        open FSharp.Control.Tasks.ContextInsensitive
        open System.IO
        open InitBuilder
        open FileWriter
        open Microsoft.WindowsAzure.Storage.Blob
        open System
        type JsonBlobInfo = {
                Date : DateTime
                DataName : string
                FileWriterConfig : FileWriterConfig
                Container : CloudBlobContainer option
            }

        module Local =
            let saveDataToJsonFile (data:'a,jsonInfo:JsonBlobInfo) = task {
                try
                    Log.logStarting("ExportDataAsJsonBlob",LocalService,Upload,BlobTable,jsonInfo.FileWriterConfig)
                    let sourceDirectoryRoot = Path.GetFullPath(cachePath jsonInfo.FileWriterConfig)
                    let dateStr = jsonInfo.Date.ToString("yyyyMMdd")
                    let path = sourceDirectoryRoot + (sprintf "%s_%s.json" dateStr jsonInfo.DataName)
                    // printfn "Path: %s" path
                    // printfn "Data: %A" data
                    let json =
                        try
                            Newtonsoft.Json.JsonConvert.SerializeObject data
                        with
                        | exn ->
                            printfn "Error %s" exn.Message
                            let msg = sprintf "Error : Exception %s InnerException : %s" exn.Message exn.InnerException.Message
                            Log.logCritical ("JsonConvert",LocalService,Calculation,LocalStorage,exn,jsonInfo.FileWriterConfig)
                            failwith msg
                    Log.logFinished("GotJson",LocalService,Calculation,LocalStorage,jsonInfo.FileWriterConfig)
                    File.WriteAllText(path,json) |> ignore
                    Log.logFinished("DataToJson",LocalService,Create,BlobTable,jsonInfo.FileWriterConfig)
                with
                | exn ->
                    let msg = sprintf "Error Msg: Exception %s InnerException : %s" exn.Message exn.InnerException.Message
                    Log.logCritical("DataToJson",LocalService,Insert,LocalStorage,exn,jsonInfo.FileWriterConfig)
                    failwith msg
            }
            let readJsonFile (blobId,fileWriterInfo) = task {
                Log.logStarting("ReadJsonFile",LocalService,Create,LocalStorage,fileWriterInfo)
                let sourceDirectoryRoot = Path.GetFullPath(cachePath fileWriterInfo)
                let path = sourceDirectoryRoot + (sprintf "%s.json" blobId )
                let txt = File.ReadAllText(path)
                Log.logFinished("GotTxt",LocalService,Download,LocalStorage,fileWriterInfo)
                let data =
                    try
                        Newtonsoft.Json.JsonConvert.DeserializeObject<'a> txt
                    with
                    | exn ->
                        let msg = sprintf "Error : Exception %s InnerException : %s" exn.Message exn.InnerException.Message
                        Log.logCritical("ReadJsonFile",LocalService,Calculation,LocalStorage,exn,fileWriterInfo)
                        failwith msg
                return data

            }
        module Azure =
            ///Function to save Json Blobs
            let saveDataToJsonBlob (data,jsonInfo:JsonBlobInfo) (container:CloudBlobContainer) = task {
                Log.logStarting("SaveJsonBlob",AzureFunction,Upload,BlobTable,jsonInfo.FileWriterConfig)
                let dateStr = jsonInfo.Date.ToString("yyyyMMdd")
                let blobId = dateStr + "_" + jsonInfo.DataName
                let blobBlock = container.GetBlockBlobReference(blobId)
                blobBlock.Properties.ContentType <- "application/json"
                use ms = new MemoryStream()
                printfn "Got Memory Stream"
                let json =
                    try
                        Newtonsoft.Json.JsonConvert.SerializeObject data
                    with
                    | exn ->
                        let msg = sprintf "Error : Exception %s InnerException : %s" exn.Message exn.InnerException.Message
                        Log.logCritical("JsonConvert",AzureFunction,Calculation,BlobTable,exn,jsonInfo.FileWriterConfig)
                        failwith msg
                let writer = new StreamWriter(ms)
                writer.Write(json)
                writer.Flush()
                ms.Position <- int64 0
                printfn "Memory Stream Length %i" ms.Length
                do! blobBlock.UploadFromStreamAsync(ms)
                Log.logFinished("SaveJsonBlob",AzureFunction,Create,BlobTable,jsonInfo.FileWriterConfig)
            }

            let getDataFromJsonBlob (mapper: string -> 'a) (jsonBlobInfo:JsonBlobInfo) = task {
                Log.logStarting("GetJsonBlob",AzureFunction,Download,BlobTable,jsonBlobInfo.FileWriterConfig)
                let dateStr = jsonBlobInfo.Date.ToString("yyyyMMdd")
                let blobId = dateStr + "_" + jsonBlobInfo.DataName
                let blockBlob = jsonBlobInfo.Container.Value.GetBlockBlobReference(blobId)

                let! txt = blockBlob.DownloadTextAsync()
                return txt |> mapper
            }

