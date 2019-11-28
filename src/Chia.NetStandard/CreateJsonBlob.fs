namespace Chia

    module CreateJsonBlob =

        open FSharp.Control.Tasks.ContextInsensitive
        open System.IO
        open FileWriter
        open Microsoft.WindowsAzure.Storage.Blob
        open System
        open Logger
        type JsonBlobInfo = {
                Date : DateTime
                DataName : string
                FileWriterInfo : FileWriterInfo
                Container : CloudBlobContainer option
            }

        module Local =
            let saveDataToJsonFile (data:'a,jsonInfo:JsonBlobInfo) = task {
                try
                    LogInfo.LocalService.Incomplete.Upload.BlobTable jsonInfo.FileWriterInfo
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
                            LogCritical.LocalService.Incomplete.Calculation.LocalStorage exn jsonInfo.FileWriterInfo
                            failwith msg
                    LogInfo.LocalService.Finished.Calculation.LocalStorage jsonInfo.FileWriterInfo
                    File.WriteAllText(path,json) |> ignore
                    LogInfo.LocalService.Finished.Create.BlobTable jsonInfo.FileWriterInfo
                with
                | exn ->
                    let msg = sprintf "Error Msg: Exception %s InnerException : %s" exn.Message exn.InnerException.Message
                    LogCritical.LocalService.Incomplete.Insert.LocalStorage exn jsonInfo.FileWriterInfo
                    failwith msg
            }
            let readJsonFile (blobId,fileWriterInfo) = task {
                LogInfo.LocalService.Starting.Create.LocalStorage fileWriterInfo
                let sourceDirectoryRoot = Path.GetFullPath(cachePath fileWriterInfo)
                let path = sourceDirectoryRoot + (sprintf "%s.json" blobId )
                let txt = File.ReadAllText(path)
                LogInfo.LocalService.Finished.Download.LocalStorage fileWriterInfo
                let data =
                    try
                        Newtonsoft.Json.JsonConvert.DeserializeObject<'a> txt
                    with
                    | exn ->
                        let msg = sprintf "Error : Exception %s InnerException : %s" exn.Message exn.InnerException.Message
                        LogCritical.LocalService.Incomplete.Calculation.LocalStorage exn fileWriterInfo
                        failwith msg
                return data

            }
        module Azure =
            ///Function to save Json Blobs
            let saveDataToJsonBlob (data,jsonInfo:JsonBlobInfo) (container:CloudBlobContainer) = task {
                LogInfo.AzureFunction.Starting.Upload.BlobTable jsonInfo.FileWriterInfo
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
                        LogCritical.AzureFunction.Incomplete.Calculation.BlobTable exn jsonInfo.FileWriterInfo
                        failwith msg
                let writer = new StreamWriter(ms)
                writer.Write(json)
                writer.Flush()
                ms.Position <- int64 0
                printfn "Memory Stream Length %i" ms.Length
                do! blobBlock.UploadFromStreamAsync(ms)
                LogInfo.AzureFunction.Finished.Create.BlobTable jsonInfo.FileWriterInfo
            }

            let getDataFromJsonBlob (mapper: string -> 'a) (jsonBlobInfo:JsonBlobInfo) = task {
                LogInfo.AzureFunction.Starting.Download.BlobTable jsonBlobInfo.FileWriterInfo
                let dateStr = jsonBlobInfo.Date.ToString("yyyyMMdd")
                let blobId = dateStr + "_" + jsonBlobInfo.DataName
                let blockBlob = jsonBlobInfo.Container.Value.GetBlockBlobReference(blobId)

                let! txt = blockBlob.DownloadTextAsync()
                return txt |> mapper
            }

