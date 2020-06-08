namespace Chia

module TableStorage =

    open Microsoft.WindowsAzure.Storage.Table
    open FSharp.Control.Tasks.ContextInsensitive

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
            let entities = messages |> Array.map mapper

            let batchOperation =
                try
                    TableBatchOperation()
                with exn -> failwithf "Couldn't Open New Table operation. Message: %s" exn.Message

            try
                entities
                |> Array.iter (fun x -> batchOperation.Add(TableOperation.InsertOrReplace x))
            with exn ->
                printfn "Couldn't Add Entity Message: %s" exn.Message
                failwithf "Couldn't Add Entity Message: %s" exn.Message
            try
                let! _ = table.ExecuteBatchAsync(batchOperation)
                return ()
            with exn ->
                let msg =
                    sprintf "Couldn't Add Entity Message: %s" exn.Message

                Log.logCritical (msg, LocalService, Insert, AzureTable, exn, info)
                return failwith msg
            ()
        }
