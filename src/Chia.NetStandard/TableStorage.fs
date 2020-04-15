namespace Chia

    module TableStorage =

        open Microsoft.WindowsAzure.Storage.Table
        open FSharp.Control.Tasks.ContextInsensitive
        open Domain.Logging
        open FileWriter

        let saveDataArrayBatch mapper (table:CloudTable) info (messages:'a [] ) = task {
            let entities =
                messages
                |> Array.map mapper
            let batchOperation =
                try
                    TableBatchOperation ()
                with
                | exn -> failwithf "Couldn't Open New Table operation. Message: %s" exn.Message
            try
                entities
                |> Array.iter batchOperation.InsertOrReplace
            with
                | exn ->    printfn  "Couldn't Add Entity Message: %s" exn.Message
                            failwithf  "Couldn't Add Entity Message: %s" exn.Message
            try
                table.ExecuteBatchAsync(batchOperation) |> ignore
            with
                | exn ->
                    let msg = sprintf  "Couldn't Add Entity Message: %s" exn.Message
                    logError exn info msg
                    failwith msg

            ()
        }
