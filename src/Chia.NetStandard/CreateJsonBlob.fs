namespace Chia

    module CreateJsonBlob =

        open FSharp.Control.Tasks.ContextInsensitive
        open System.IO
        open FileWriter
        open Microsoft.WindowsAzure.Storage.Blob
        open System
        type JsonBlobInfo = {
                Date : DateTime
                DataName : string
                FileWriterInfo : FileWriterInfo
                Container : CloudBlobContainer option
            }

        module Local =
            let saveDataToJsonFile (data:'a,jsonInfo:JsonBlobInfo) = task {
                try
                    logOk jsonInfo.FileWriterInfo "Export Data as Json blob"
                    let sourceDirectoryRoot = Path.GetFullPath(cachePath jsonInfo.FileWriterInfo)
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
                            logError exn jsonInfo.FileWriterInfo msg
                            failwith msg
                    logOk jsonInfo.FileWriterInfo "Got json"
                    File.WriteAllText(path,json) |> ignore
                    logOk jsonInfo.FileWriterInfo "Finished Json Cache"
                with
                | exn ->
                    let msg = sprintf "Error Msg: Exception %s InnerException : %s" exn.Message exn.InnerException.Message
                    logError exn jsonInfo.FileWriterInfo msg
                    failwith msg
            }
            let readJsonFile (blobId,fileWriterInfo) = task {
                logOk fileWriterInfo (sprintf "Read Json Data %s" blobId)
                let sourceDirectoryRoot = Path.GetFullPath(cachePath fileWriterInfo)
                let path = sourceDirectoryRoot + (sprintf "%s.json" blobId )
                let txt = File.ReadAllText(path)
                logOk fileWriterInfo "Got txt"
                let data =
                    try
                        Newtonsoft.Json.JsonConvert.DeserializeObject<'a> txt
                    with
                    | exn ->
                        let msg = sprintf "Error : Exception %s InnerException : %s" exn.Message exn.InnerException.Message
                        logError exn fileWriterInfo msg
                        failwith msg
                return data

            }
        module Azure =
            ///Function to save Json Blobs
            let saveDataToJsonBlob (data,jsonInfo:JsonBlobInfo) (container:CloudBlobContainer) = task {
                logOk jsonInfo.FileWriterInfo "Export Data as Json blob"
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

            let getDataFromJsonBlob (mapper: string -> 'a) (jsonBlobInfo:JsonBlobInfo) = task {
                logOk jsonBlobInfo.FileWriterInfo "Start Download Json blob"
                let dateStr = jsonBlobInfo.Date.ToString("yyyyMMdd")
                let blobId = dateStr + "_" + jsonBlobInfo.DataName
                let blockBlob = jsonBlobInfo.Container.Value.GetBlockBlobReference(blobId)

                let! txt = blockBlob.DownloadTextAsync()
                return txt |> mapper
            }

