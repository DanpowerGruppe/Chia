namespace Chia

    module CreateJsonBlob =

        open FSharp.Control.Tasks.ContextInsensitive
        open System.IO
        open FileWriter
        open Microsoft.WindowsAzure.Storage.Blob

        module Types =

            type JsonBlobInfo = {
                Guid : string
                DataName : string
                Data : obj
                FileWriterInfo : FileWriterInfo
            }
            type BlobInfo ={
                BlobId : string
                FileWriterInfo : FileWriterInfo
                Container : CloudBlobContainer
            }
        module Local =
            open Types
            let saveDataToJsonFile (jsonInfo:JsonBlobInfo) = task {
                try
                    logOk jsonInfo.FileWriterInfo "Export Data as Json blob"
                    let sourceDirectoryRoot = Path.GetFullPath(cachePath jsonInfo.FileWriterInfo)
                    let path = sourceDirectoryRoot + (sprintf "%s_%s.json" jsonInfo.Guid jsonInfo.DataName)
                    // printfn "Path: %s" path
                    // printfn "Data: %A" data
                    let json =
                        try
                            Newtonsoft.Json.JsonConvert.SerializeObject(jsonInfo.Data)
                        with
                        | exn ->
                            printfn "Error %s" exn.Message
                            let msg = sprintf "Error : Exception %s InnerException : %s" exn.Message exn.InnerException.Message
                            logError exn jsonInfo.FileWriterInfo msg
                            failwith msg
                    logOk jsonInfo.FileWriterInfo "Got json"
                    do! File.WriteAllTextAsync(path,json)
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
                let! txt = File.ReadAllTextAsync(path)
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
            open Types
            ///Function to save Json Blobs
            let saveDataToJsonBlob (jsonInfo:JsonBlobInfo) (container:CloudBlobContainer) = task {
                logOk jsonInfo.FileWriterInfo "Export Data as Json blob"
                let blobId = jsonInfo.Guid + "_" + jsonInfo.DataName
                let blobBlock = container.GetBlockBlobReference(blobId)
                blobBlock.Properties.ContentType <- "application/json"
                use ms = new MemoryStream()
                printfn "Got Memory Stream"
                let json =
                    try
                        Newtonsoft.Json.JsonConvert.SerializeObject(jsonInfo.Data)
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

            let getDataFromJsonBlob blobInfo = task {
                logOk blobInfo.FileWriterInfo "Start Download Json blob"
                let blockBlob = blobInfo.Container.GetBlockBlobReference(blobInfo.BlobId)

                let! txt = blockBlob.DownloadTextAsync()
                return Newtonsoft.Json.JsonConvert.DeserializeObject<'a> txt
            }

