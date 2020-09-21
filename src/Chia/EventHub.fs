namespace Chia

open FSharp.Control.Tasks.ContextInsensitive
open Chia
open FileWriter
open Microsoft.Azure.EventHubs
module EventHub =
    let getEventHubClient eventHubConnectionString = EventHubClient.CreateFromConnectionString(eventHubConnectionString)

    let pushSingleEvent (eventHubClient:EventHubClient,record: 'a,partitionKey) =
        task {
            let messageAsText = Newtonsoft.Json.JsonConvert.SerializeObject record
            use event = new EventData(System.Text.Encoding.UTF8.GetBytes(messageAsText))
            do! eventHubClient.SendAsync(event, partitionKey)
        }
    let pushEvent (eventHubClient:EventHubClient,data: 'a,fileWriterInfo) =
        task {
            try
                Log.logStarting ("UploadingEvents", LocalServer, Upload, EventHub, fileWriterInfo)
                let batch = eventHubClient.CreateBatch()
                for x in data do
                    let messageAsText = Newtonsoft.Json.JsonConvert.SerializeObject x
                    use event = new EventData(System.Text.Encoding.UTF8.GetBytes(messageAsText))
                    batch.TryAdd event |> ignore

                do! eventHubClient.SendAsync batch
                Log.logFinished ("Finished UploadingEvents", AzureFunction, Upload, EventHub, fileWriterInfo)
            with
            | exn ->  Log.logCritical ("Push Event failed", AzureFunction, Upload, EventHub,exn, fileWriterInfo)
        }
