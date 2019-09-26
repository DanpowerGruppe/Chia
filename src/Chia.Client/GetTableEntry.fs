namespace Chia.Client

open Microsoft.WindowsAzure.Storage.Table
open FSharp.Control.Tasks.ContextInsensitive

module GetTableEntry =

    let getValues mapper (table:CloudTable) = task {
        let rec getResults token = task {
            let! result = table.ExecuteQuerySegmentedAsync(TableQuery(), token)
            let token = result.ContinuationToken
            let result = result |> Seq.toList
            if isNull token then
                return result
            else
                let! others = getResults token
                return result @ others }

        let! results = getResults null

        return [| for result in results -> mapper result |]
    }
