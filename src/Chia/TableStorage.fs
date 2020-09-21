namespace Chia

module TableStorage =

    open Microsoft.WindowsAzure.Storage.Table
    open FSharp.Control.Tasks.ContextInsensitive
    open System.Threading.Tasks

    let saveData mapper (table: CloudTable) info (message: 'a) =
        task {
            let entity = mapper message
            let operation = TableOperation.InsertOrReplace entity
            try
                let! _ = table.ExecuteAsync operation
                return ()
            with exn ->
                let msg =
                    sprintf "Couldn't Add Entity Message: %s" exn.Message

                Log.logCritical (msg, LocalService, Insert, AzureTable, exn, info)
                failwithf "Couldn't Add Entity Message: %s" exn.Message
        }

    let saveDataArrayBatch mapper (table: CloudTable) info (messages: 'a []) =
        task {
            let chunkOperation chunk =
                task {
                    let batchOperation =
                            try
                                TableBatchOperation()
                            with exn -> failwithf "Couldn't Open New Table operation. Message: %s" exn.Message

                    try
                        chunk
                        |> Array.iter batchOperation.InsertOrReplace
                    with exn ->
                        printfn "Couldn't Add Entity Message: %s" exn.Message
                        failwithf "Couldn't Add Entity Message: %s" exn.Message
                    try
                        let! _ = table.ExecuteBatchAsync(batchOperation)
                        ()
                    with exn ->
                        let msg =
                            sprintf "Couldn't Add Entity Message: %s" exn.Message

                        Log.logCritical (msg, LocalService, Insert, AzureTable, exn, info)
                        failwith msg

                    ()
                    }
            let groupedEntities =
                messages
                |> Array.map mapper
                |> Array.groupBy (fun (e:DynamicTableEntity) -> e.PartitionKey)
            let!_ =
                groupedEntities
                |> Array.map (fun (_,entities) ->
                        let chunks = entities |> Array.distinctBy (fun x -> x.RowKey) |> Array.chunkBySize 100
                        chunks |> Array.map chunkOperation |> Task.WhenAll

                    )
                    |> Task.WhenAll
            ()
        }
