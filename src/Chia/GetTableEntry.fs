namespace Chia

open Microsoft.WindowsAzure.Storage.Table
open FSharp.Control.Tasks.ContextInsensitive

module GetTableEntry =

    let oneValue (partKey,rowKey) mapper (table : CloudTable) =
        task {
            let query = TableOperation.Retrieve(partKey, rowKey)
            let! r = table.ExecuteAsync(query)
            let result = r.Result :?> DynamicTableEntity
            if isNull result then return None
            else return Some(mapper result)
        }

    let oneValueByRowKey (rowKey:string) mapper (table : CloudTable) =
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
            return  results |> List.tryHead |> Option.map mapper
        }

    let getValues mapper (table : CloudTable) =
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
            return [| for result in results -> mapper result |]
        }

    let getValuesByRowKey (rowKey : Ids.SortableRowKey) mapper (table : CloudTable) =
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
            return [| for result in results -> mapper result |]
        }

    let getValuesWithFilter filter mapper (table : CloudTable) =
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
            return [| for result in results -> mapper result |]
        }
