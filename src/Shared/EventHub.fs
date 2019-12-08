namespace Chia

open System
open System.IO
open Microsoft.ApplicationInsights
open Microsoft.ApplicationInsights.Extensibility.PerfCounterCollector.QuickPulse
open Microsoft.ApplicationInsights.Extensibility
open FSharp.Control.Tasks.ContextInsensitive
open System.Threading.Tasks
open Domain
open Logging
open Config
open System.Collections.Generic
open Microsoft.Azure.EventHubs 
module EventHub =
    let getEventHubClient eventHubConnectionString = EventHubClient.CreateFromConnectionString(eventHubConnectionString)

    let pushSingleEvent (record: Reading) phase =
        task {
            let eventHubClient =
                match phase with
                | Minute -> getEventHubClient eventHubConnectionStringMinute
                | FifteenMinutes -> getEventHubClient eventHubConnectionStringFifteenMinutes
                | Hourly -> getEventHubClient eventHubConnectionStringHourly
                | Daily -> getEventHubClient eventHubConnectionStringDaily
                | _ -> failwithf "unmatched Phase"

            let messageAsText = Newtonsoft.Json.JsonConvert.SerializeObject record
            use event = new EventData(System.Text.Encoding.UTF8.GetBytes(messageAsText))
            do! eventHubClient.SendAsync(event, record.MeterId.GetValue)
        }
    let pushEvent (data: Reading []) (phase: Phase) =
        task {
            try
                Log.logStarting ("UploadingEvents", LocalServer, Upload, EventHub, fileWriterInfo)
                let eventHubClient =
                    match phase with
                    | Minute -> getEventHubClient eventHubConnectionStringMinute
                    | FifteenMinutes -> getEventHubClient eventHubConnectionStringFifteenMinutes
                    | Hourly -> getEventHubClient eventHubConnectionStringHourly
                    | Daily -> getEventHubClient eventHubConnectionStringDaily
                    | _ -> failwithf "unmatched Phase"

                let batch = eventHubClient.CreateBatch()
                for x in data do
                    let messageAsText = Newtonsoft.Json.JsonConvert.SerializeObject x
                    use event = new EventData(System.Text.Encoding.UTF8.GetBytes(messageAsText))
                    batch.TryAdd event |> ignore

                do! eventHubClient.SendAsync batch
                Log.logFinished ("Finished Upload", AzureFunction, Upload, EventHub, fileWriterInfo)
            with
            | exn ->  Log.logCritical ("Push Event failed", AzureFunction, Upload, EventHub,exn, fileWriterInfo)
        }