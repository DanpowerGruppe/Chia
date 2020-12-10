"(PartitionKey eq 'partition1') and (Date ge datetime'2013-08-31T14:15:14Z' and Date lt datetime'2013-08-31T14:19:10Z')"

[ "PartitionKey eq 'partition1'"
  "Date ge datetime'2013-08-31T14:15:14Z'"
  "Date lt datetime'2013-08-31T14:19:10Z'" ]
|> List.fold (fun r s -> if r = "" then r + s else r + " and " + s) ""

let appendFilters filters =

    filters
    |> List.fold (fun r s -> if r = "" then r + s else r + " and " + s) ""

[ "PartitionKey eq 'partition1'"
  "Date ge datetime'2013-08-31T14:15:14Z'"
  "Date lt datetime'2013-08-31T14:19:10Z'" ] |> appendFilters
// type AzureFilter =
//     static member string(field:string,value: string) = TableQuery.GenerateFilterCondition (field, QueryComparisons.Equal, value)

// type TableProps =
//     { Filters: AzureFilter list }


// let filter (props: TableProps) =
//     props.Filters
//     |> List.map ()

// [<RequireQualifiedAccess>]
// module AzureTable =
//     open GetTableEntry
//     type TableProps =
//         private { Filters: AzureFilter list }




//     let (props: TableProps) =
//         let filter =
//             props.Filters
//             |> List.map (fun filter ->
//                 TableQuery.CombineFilters
