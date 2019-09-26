namespace Chia.Client

    module CreateBlob =

        open Microsoft.WindowsAzure.Storage
        open System
        open Microsoft.WindowsAzure.Storage.Blob

        let getContainer (storageConnString,containerName) =
            let blobClient = CloudStorageAccount.Parse(storageConnString).CreateCloudBlobClient ()
            let container = blobClient.GetContainerReference(containerName)
            container.CreateIfNotExistsAsync () |> ignore
            container

        let getBlobs (container:CloudBlobContainer) =
            let rec listBlobs results token =
                async {
                    let! r = container.ListBlobsSegmentedAsync(null, true, BlobListingDetails.None, Nullable<int>(), token, null, null) |> Async.AwaitTask
                    let results = r.Results |> Seq.append results
                    if isNull r.ContinuationToken then return results
                    else return! listBlobs results r.ContinuationToken }
            async {
                let! exists = container.ExistsAsync () |> Async.AwaitTask
                if exists then return! listBlobs Seq.empty null
                else return Seq.empty }
