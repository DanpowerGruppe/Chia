namespace Goji

open Microsoft.WindowsAzure.Storage
open FSharp.Control.Tasks.ContextInsensitive
open Microsoft.WindowsAzure.Storage.Queue
open CreateTable
open TriggerNames
open FileWriter
open Goji.Logging

    module PostToQueue = 

        type AzureConnection = 
            | AzureConnection of string
            member this.Connect() =
                match this with
                | AzureConnection connectionString -> CloudStorageAccount.Parse connectionString
        let getQueue (connection:CloudStorageAccount) queueName = 
            try 
                task {
                    let queueClient = 
                        try 
                            connection.CreateCloudQueueClient()
                        with exn ->
                            let msg =  sprintf "Could not create CloudQueueClient. Message: %s. InnerMessage: %s" exn.Message exn.InnerException.Message
                            logError exn Local msg
                            failwith msg            
                    let queue = 
                        try 
                            queueClient.GetQueueReference queueName
                        with exn ->
                            let msg =  sprintf "Could not get Queue Reference. Message: %s. InnerMessage: %s" exn.Message exn.InnerException.Message
                            logError exn Local msg
                            failwith msg      
                    let! _q = 
                        try
                            queue.CreateAsync()
                        with exn ->
                            let msg =  sprintf "Could not createIfNotExistisAsync Queue. Message: %s. InnerMessage: %s" exn.Message exn.InnerException.Message
                            logError exn Local msg
                            failwith msg            
                    return queue
                }
                |> Async.AwaitTask
                |> Async.RunSynchronously
            with 
            |exn ->
                let msg =  sprintf "Could not get Queue. Message: %s. InnerMessage: %s" exn.Message exn.InnerException.Message
                logError exn Local msg
                failwith msg        
        let postToQueue (queue:CloudQueue) msg = task {
            let message = CloudQueueMessage(Newtonsoft.Json.JsonConvert.SerializeObject msg)
            do! queue.AddMessageAsync(message)
        }            
        let GojiReportsQueue = getQueue connected GojiReports  
        let ecalationLvlHighQueue = getQueue connected EscalationLvlHigh
        let ecalationLvlLowQueue = getQueue connected EscalationLvlLow
        let sendReport = getQueue connected SendReport
