namespace Chia

open Microsoft.WindowsAzure.Storage.Table
open FSharp.Control.Tasks.ContextInsensitive

module GetTableEntry =
    [<System.Obsolete("This API is obsolete. Please use AzureTackle instead: https://github.com/tforkmann/AzureTackle")>]
    let oneValue (partKey, rowKey) mapper (table: CloudTable) =
        task {
            let query = TableOperation.Retrieve(partKey, rowKey)
            let! r = table.ExecuteAsync(query)
            let result = r.Result :?> DynamicTableEntity

            if isNull result
            then return None
            else return Some(result |> mapper)
        }

    let getResultsRecursivly (filter: string option) (table: CloudTable) =
        task {
            let rec getResults token =
                task {
                    let query =
                        match filter with
                        | Some f -> TableQuery().Where(f)
                        | None -> TableQuery()

                    let! result = table.ExecuteQuerySegmentedAsync(query, token)
                    let token = result.ContinuationToken
                    let result = result |> Seq.toList

                    if isNull token then
                        return result
                    else
                        let! others = getResults token
                        return result @ others
                }

            return! getResults null
        }

    [<System.Obsolete("This API is obsolete. Please use AzureTackle instead: https://github.com/tforkmann/AzureTackle")>]
    let oneValueByRowKey (rowKey: string) mapper (table: CloudTable) =
        task {
            let filter =
                Some(TableQuery.GenerateFilterCondition("RowKey", QueryComparisons.Equal, rowKey))

            let! results = getResultsRecursivly filter table

            return results
                   |> List.tryHead
                   |> Option.map mapper
        }

    [<System.Obsolete("This API is obsolete. Please use AzureTackle instead: https://github.com/tforkmann/AzureTackle")>]
    let getValues mapper (table: CloudTable) =
        task {
            let! results = getResultsRecursivly None table
            return [| for result in results -> result |> mapper |]
        }

    [<System.Obsolete("This API is obsolete. Please use AzureTackle instead: https://github.com/tforkmann/AzureTackle")>]
    let getValuesByRowKey (rowKey: Ids.SortableRowKey) mapper (table: CloudTable) =
        task {
            let filter =
                Some(TableQuery.GenerateFilterCondition("RowKey", QueryComparisons.Equal, rowKey.GetValue))

            let! results = getResultsRecursivly filter table
            return [| for result in results -> result |> mapper |]
        }

    [<System.Obsolete("This API is obsolete. Please use AzureTackle instead: https://github.com/tforkmann/AzureTackle")>]
    let getValuesByPartitionKey (partKey: string) mapper (table: CloudTable) =
        task {
            let filter =
                Some(TableQuery.GenerateFilterCondition("PartitionKey", QueryComparisons.Equal, partKey))

            let! results = getResultsRecursivly filter table
            return [| for result in results -> result |> mapper|]
        }

    [<System.Obsolete("This API is obsolete. Please use AzureTackle instead: https://github.com/tforkmann/AzureTackle")>]
    let getValuesWithFilter filter mapper (table: CloudTable) =
        task {
            try
                let! results = getResultsRecursivly filter table
                return Ok [| for result in results -> result |> mapper |]
            with exn -> return Error exn
        }
