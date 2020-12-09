namespace Chia

open Microsoft.WindowsAzure.Storage.Table
open FSharp.Control.Tasks.ContextInsensitive
open TableReflection
module GetTableEntry =

    let oneValue<'a> (partKey,rowKey) (table : CloudTable) =
        task {
            let query = TableOperation.Retrieve(partKey, rowKey)
            let! r = table.ExecuteAsync(query)
            let result = r.Result :?> DynamicTableEntity
            if isNull result then return None
            else return Some(result |> buildRecordFromEntityNoCache<'a>)
        }

    let oneValueByRowKey<'a> (rowKey:string) (table : CloudTable) =
        task {
            let rec getResults token =
                task {
                    let! result = table.ExecuteQuerySegmentedAsync
                                      (TableQuery()
                                           .Where(TableQuery.GenerateFilterCondition
                                                      ("RowKey", QueryComparisons.Equal, rowKey)), token)
                    let token = result.ContinuationToken
                    let result = result |> Seq.toList
                    if isNull token then return result
                    else
                        let! others = getResults token
                        return result @ others
                }
            let! results = getResults null
            return  results |> List.tryHead |> Option.map buildRecordFromEntityNoCache<'a>
        }

    let getValues<'a> (table : CloudTable) =
        task {
            let rec getResults token =
                task {
                    let! result = table.ExecuteQuerySegmentedAsync(TableQuery(), token)
                    let token = result.ContinuationToken
                    let result = result |> Seq.toList
                    if isNull token then return result
                    else
                        let! others = getResults token
                        return result @ others
                }
            let! results = getResults null
            return [| for result in results -> result |> buildRecordFromEntityNoCache<'a> |]
        }

    let getValuesByRowKey<'a> (rowKey : Ids.SortableRowKey) (table : CloudTable) =
        task {
            let rec getResults token =
                task {
                    let! result = table.ExecuteQuerySegmentedAsync
                                      (TableQuery()
                                           .Where(TableQuery.GenerateFilterCondition
                                                      ("RowKey", QueryComparisons.Equal, rowKey.GetValue)), token)
                    let token = result.ContinuationToken
                    let result = result |> Seq.toList
                    if isNull token then return result
                    else
                        let! others = getResults token
                        return result @ others
                }
            let! results = getResults null
            return [| for result in results -> result |> buildRecordFromEntityNoCache<'a> |]
        }
    let getValuesByPartitionKey<'a> (partKey : string) (table : CloudTable) =
        task {
            let rec getResults token =
                task {
                    let! result = table.ExecuteQuerySegmentedAsync
                                      (TableQuery()
                                           .Where(TableQuery.GenerateFilterCondition
                                                      ("PartitionKey", QueryComparisons.Equal, partKey)), token)
                    let token = result.ContinuationToken
                    let result = result |> Seq.toList
                    if isNull token then return result
                    else
                        let! others = getResults token
                        return result @ others
                }
            let! results = getResults null
            return [| for result in results -> result |> buildRecordFromEntityNoCache<'a> |]
        }

    let getValuesWithFilter<'a> filter (table : CloudTable) =
        task {
            let rec getResults token =
                task {
                    let! result = table.ExecuteQuerySegmentedAsync(TableQuery().Where(filter), token)
                    let token = result.ContinuationToken
                    let result = result |> Seq.toList
                    if isNull token then return result
                    else
                        let! others = getResults token
                        return result @ others
                }
            let! results = getResults null
            return [| for result in results -> result |> buildRecordFromEntityNoCache<'a> |]
        }
