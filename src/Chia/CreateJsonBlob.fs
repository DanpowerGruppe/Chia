namespace Chia

module CreateJsonBlob =
    open FSharp.Control.Tasks.ContextInsensitive
    open System.IO
    open FileWriter
    open Microsoft.WindowsAzure.Storage.Blob
    open System.Threading.Tasks
    open System
    type JsonBlobInfo = {
                Date : DateTime
                DataName : string
                FileWriterInfo : FileWriterInfo
                Container : CloudBlobContainer option
            }

    let getBlobId (jsonInfo : JsonBlobInfo) =
        let dateStr = jsonInfo.Date.ToString("yyyyMMdd")
        dateStr + "_" + jsonInfo.DataName
    module Local =

        let saveDataToJsonFile (data:'a,jsonInfo : JsonBlobInfo) =
            task {
                try
                    logOk jsonInfo.FileWriterInfo "Export Data as Json blob"
                    let sourceDirectoryRoot = Path.GetFullPath(cachePath jsonInfo.FileWriterInfo)
                    let blobId = getBlobId jsonInfo
                    let path = sourceDirectoryRoot + (sprintf "%s.json" blobId)
                    logOk jsonInfo.FileWriterInfo (sprintf "Path: %s" path)
                    // printfn "Data: %A" data
                    let json =
                        try
                            Newtonsoft.Json.JsonConvert.SerializeObject data
                        with exn ->
                            printfn "Error %s" exn.Message
                            let msg =
                                sprintf "Error : Exception %s InnerException : %s" exn.Message
                                    exn.InnerException.Message
                            logError exn jsonInfo.FileWriterInfo msg
                            failwith msg
                    logOk jsonInfo.FileWriterInfo "Got json"
                    do! File.WriteAllTextAsync(path, json)
                    logOk jsonInfo.FileWriterInfo "Finished Json Cache"
                with exn ->
                    let msg =
                        sprintf "Error Msg: Exception %s InnerException : %s" exn.Message exn.InnerException.Message
                    logError exn jsonInfo.FileWriterInfo msg
                    failwith msg
            }

        let readJsonFile (jsonInfo : JsonBlobInfo, mapper: string -> 'a) =
            task {
                let blobId = getBlobId jsonInfo
                logOk jsonInfo.FileWriterInfo (sprintf "Read Json Data %s" blobId)
                let sourceDirectoryRoot = Path.GetFullPath(cachePath jsonInfo.FileWriterInfo)
                let path = sourceDirectoryRoot + (sprintf "%s.json" blobId)
                let! txt = File.ReadAllTextAsync(path)
                logOk jsonInfo.FileWriterInfo "Got txt"
                let data =
                    try
                        txt |> mapper
                    with exn ->
                        let msg =
                            sprintf "Error : Exception %s InnerException : %s" exn.Message exn.InnerException.Message
                        logError exn jsonInfo.FileWriterInfo msg
                        failwith msg
                return data
            }
        let getCachedData (jsonInfo : JsonBlobInfo,mapper: string -> 'a) (getDataTask: unit -> Task<'a>) =
            task {
            try
                logOk jsonInfo.FileWriterInfo "Trying to read cached data"
                let! cachedData = readJsonFile (jsonInfo,mapper)
                logOk jsonInfo.FileWriterInfo "Got CachedData"
                return cachedData
            with
            | exn ->
                let msg = sprintf "Error : Exception %s InnerException : %s" exn.Message exn.InnerException.Message
                logError exn jsonInfo.FileWriterInfo msg
                let! data = getDataTask ()
                do! saveDataToJsonFile (data,jsonInfo)
                return data
            }
    module Azure =

        ///Function to save Json Blobs
        let saveDataToJsonBlob (data:'a,jsonInfo : JsonBlobInfo) (container : CloudBlobContainer) =
            task {
                logOk jsonInfo.FileWriterInfo "Export Data as Json blob"
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
                        logError exn jsonInfo.FileWriterInfo msg
                        failwith msg

                let writer = new StreamWriter(ms)
                writer.Write(json)
                writer.Flush()
                ms.Position <- int64 0
                printfn "Memory Stream Length %i" ms.Length
                do! blobBlock.UploadFromStreamAsync(ms)
                logOk jsonInfo.FileWriterInfo "Finished Json Cache"
            }

        let getDataFromJsonBlob (mapper: string -> 'a) (jsonInfo : JsonBlobInfo) =
            task {
                logOk jsonInfo.FileWriterInfo "Start Download Json blob"
                let blobId = getBlobId jsonInfo
                let blockBlob = jsonInfo.Container.Value.GetBlockBlobReference(blobId)
                let! txt = blockBlob.DownloadTextAsync()
                return txt |> mapper
            }
