namespace Chia

open Microsoft.WindowsAzure.Storage
open FSharp.Control.Tasks.ContextInsensitive
open Microsoft.WindowsAzure.Storage.Queue
open FileWriter
open LogBuilder
open Microsoft.ApplicationInsights.DataContracts
open Chia.Infrastructure
    module PostToQueue =

        let logger = log {
            severityLevel SeverityLevel.Critical
            source Source.AzureInfrastucture
            operation Operation.Create
            destination Destination.QueueTable
        }
        let getQueue (azConnection:AzAccount) queueName =
            try
                task {
                    let queueClient =
                        try
                            azConnection.StorageAccount.CreateCloudQueueClient()
                        with exn ->
                            let msg =  sprintf "Could not create CloudQueueClient. Message: %s. InnerMessage: %s" exn.Message exn.InnerException.Message
                            // logError exn info msg
                            Log.logCritical(msg,AzureInfrastucture,Create,QueueTable,exn,azConnection.FileWriterConfig)

                            failwith msg
                    let queue =
                        try
                            queueClient.GetQueueReference queueName
                        with exn ->
                            let msg =  sprintf "Could not get Queue Reference. Message: %s. InnerMessage: %s" exn.Message exn.InnerException.Message
                            Log.logCritical(msg,AzureInfrastucture,Create,QueueTable,exn,azConnection.FileWriterConfig)
                            failwith msg
                    let! _q =
                        try
                            queue.CreateAsync()
                        with exn ->
                            let msg =  sprintf "Could not createIfNotExistisAsync Queue. Message: %s. InnerMessage: %s" exn.Message exn.InnerException.Message
                            Log.logCritical(msg,AzureInfrastucture,Create,QueueTable,exn,azConnection.FileWriterConfig)
                            failwith msg
                    return queue
                }
                |> Async.AwaitTask
                |> Async.RunSynchronously
            with
            |exn ->
                let msg =  sprintf "Could not get Queue. Message: %s. InnerMessage: %s" exn.Message exn.InnerException.Message
                Log.logCritical(msg,AzureInfrastucture,Create,QueueTable,exn,azConnection.FileWriterConfig)
                failwith msg
        let postToQueue (queue:CloudQueue) msg = task {
            let message = CloudQueueMessage(Newtonsoft.Json.JsonConvert.SerializeObject msg)
            do! queue.AddMessageAsync(message)
        }
