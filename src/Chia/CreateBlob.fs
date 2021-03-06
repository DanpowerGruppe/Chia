namespace Chia

module CreateBlob =
    open Microsoft.WindowsAzure.Storage
    open System
    open Microsoft.WindowsAzure.Storage.Blob
    open FSharp.Control.Tasks.ContextInsensitive
    open FileWriter
    open Infrastructure
    open System.Threading.Tasks
    let getContainer (connection : CloudStorageAccount,containerName) =
        let blobClient = connection.CreateCloudBlobClient()
        let container = blobClient.GetContainerReference containerName
        container.CreateIfNotExistsAsync() |> ignore
        container

    let deleteContainer (azConnection:AzAccount,containerName) =
        printfn "Try to Delete %s" containerName
        task {
            let blobClient = azConnection.StorageAccount.CreateCloudBlobClient()
            let container = blobClient.GetContainerReference containerName
            let msg = sprintf "Got ContainerReference to Delete %A" containerName
            Log.logFinished(msg,AzureInfrastucture,Delete,BlobTable,azConnection.FileWriterConfig)
            // Azure will temporarily lock table names after deleting and can take some time before the table name is made available again.
            let rec deleteContainerSafe() = async {
                    try
                        let! _ = container.DeleteIfExistsAsync() |> Async.AwaitTask
                        ()
                    with
                    | _ ->
                        do! Task.Delay 5000 |> Async.AwaitTask
                        return! deleteContainerSafe() }

            do! deleteContainerSafe()
            }

    let getBlobs (container : CloudBlobContainer) =
        let rec listBlobs results token =
            async {
                let! r = container.ListBlobsSegmentedAsync
                             (null, true, BlobListingDetails.None, Nullable<int>(), token, null, null)
                         |> Async.AwaitTask
                let results = r.Results |> Seq.append results
                if isNull r.ContinuationToken then return results
                else return! listBlobs results r.ContinuationToken
            }
        async {
            let! exists = container.ExistsAsync() |> Async.AwaitTask
            if exists then return! listBlobs Seq.empty null
            else return Seq.empty
        }


    let getSingleBlob (container : CloudBlobContainer) blobName =
        container.GetBlockBlobReference(blobName)

    type BlobLoggingInfo =
        { FileName : string
          Status : Result<obj, exn>
          Container : CloudBlobContainer }

    // constructor
    let initBlobLogger (connection : CloudStorageAccount,containerName) fileName status =
        let blobClient = connection.CreateCloudBlobClient()
        let container = blobClient.GetContainerReference containerName
        container.CreateIfNotExistsAsync() |> ignore
        { FileName = fileName
          Status = status
          Container = container }

    let logToAppendBlob (loggingInfo : BlobLoggingInfo) logTxt =
        task {
            let date = DateTime.Now.ToString("yyyy-MM-dd")
            let appendBlob = loggingInfo.Container.GetAppendBlobReference(sprintf "%s/%s.txt" date loggingInfo.FileName)
            let! exists = loggingInfo.Container.ExistsAsync() |> Async.AwaitTask
            if not exists then do! appendBlob.CreateOrReplaceAsync()
            let logMsg = logContent loggingInfo.Status logTxt
            do! appendBlob.AppendTextAsync logMsg
        }
