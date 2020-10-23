namespace Chia

open Microsoft.WindowsAzure.Storage.Table
open System.Threading.Tasks
open System
open FSharp.Control.Tasks.ContextInsensitive
open Infrastructure
module CreateTable =
    let deleteTable tableName (azConnection:AzAccount) =
        printfn "Try to delete %s" tableName
        task {
            let client = azConnection.StorageAccount.CreateCloudTableClient()
            let table = client.GetTableReference tableName
            let msg = sprintf "Got TableReference to delete %A" table
            Log.logFinished(msg,AzureInfrastucture,Delete,AzureTable,azConnection.FileWriterConfig)
            // Azure will temporarily lock table names after deleting and can take some time before the table name is made available again.
            let rec deleteTableSafe() = async {
                    try
                        let! x = table.DeleteIfExistsAsync() |> Async.AwaitTask
                        return x
                    with
                    | _ ->
                        do! Task.Delay 5000 |> Async.AwaitTask
                        return! deleteTableSafe() }

            return! deleteTableSafe()
            }

    let getTable tableName (azConnection:AzAccount) =
        task {
            let client = azConnection.StorageAccount.CreateCloudTableClient()

            let table =
                try
                    client.GetTableReference tableName
                with exn ->
                    let msg =
                        sprintf "Could not get TableReference %s" exn.Message
                    Log.logCritical(msg,AzureFunction,Create,AzureTable,exn,azConnection.FileWriterConfig)
                    failwith msg
            let msg = sprintf "Got TableReference %A" table
            Log.logFinished(msg,AzureInfrastucture,Create,AzureTable,azConnection.FileWriterConfig)
            // Azure will temporarily lock table names after deleting and can take some time before the table name is made available again.
            let rec createTableSafe() =
                task {
                    try
                        let! _ = table.CreateIfNotExistsAsync()
                        ()
                    with _ ->
                        do! Task.Delay 5000
                        return! createTableSafe()
                }
            do! createTableSafe()
            return table
        }
        |> Async.AwaitTask
        |> Async.RunSynchronously

    let getTableReference tableName (azConnection:AzAccount) =
        let client = azConnection.StorageAccount.CreateCloudTableClient()
        client.GetTableReference tableName

    let inline getProperty (propName : string) (entity : DynamicTableEntity) =
        try
            entity.Properties.[propName]
        with exn ->
            failwithf "Could not get property %s for entity %s %s. Message: %s"
                propName entity.PartitionKey entity.RowKey exn.Message

    let inline getOptionalProperty (propName : string)
               (entity : DynamicTableEntity) =
        match entity.Properties.TryGetValue propName with
        | true, v -> Some v
        | _ -> None

    let inline getBoolProperty (propName : string) (entity : DynamicTableEntity) =
        let prop = getProperty propName entity
        try
            prop.BooleanValue.Value
        with exn ->
            failwithf
                "Could not get boolean value of property %s for entity %s %s. Message: %s"
                propName entity.PartitionKey entity.RowKey exn.Message

    let inline getStringProperty (propName : string)
               (entity : DynamicTableEntity) =
        let prop = getProperty propName entity
        try
            prop.StringValue
        with exn ->
            failwithf
                "Could not get string value of property %s for entity %s %s. Message: %s"
                propName entity.PartitionKey entity.RowKey exn.Message

    let inline getOptionalBoolProperty (propName : string)
               (entity : DynamicTableEntity) =
        try
            getOptionalProperty propName entity
            |> Option.map (fun prop -> prop.BooleanValue.Value)
        with exn ->
            failwithf
                "Could not get bool value of property %s for entity %s %s. Message: %s"
                propName entity.PartitionKey entity.RowKey exn.Message

    let inline getOptionalStringProperty (propName : string)
               (entity : DynamicTableEntity) =
        try
            getOptionalProperty propName entity
            |> Option.map (fun prop -> prop.StringValue)
        // |> Option.defaultValue ""
        with exn ->
            failwithf
                "Could not get string value of property %s for entity %s %s. Message: %s"
                propName entity.PartitionKey entity.RowKey exn.Message

    let inline getDateTimeOffsetProperty (propName : string)
               (entity : DynamicTableEntity) =
        let prop = getProperty propName entity
        try
            prop.DateTimeOffsetValue.Value
        with exn ->
            failwithf
                "Could not get DateTimeOffset value of property %s for entity %s %s. Message: %s"
                propName entity.PartitionKey entity.RowKey exn.Message

    let inline getOptionalDateTimeOffsetProperty (propName : string)
               (entity : DynamicTableEntity) =
        try
            getOptionalProperty propName entity
            |> Option.map (fun prop -> prop.DateTimeOffsetValue.Value)
        with exn ->
            failwithf
                "Could not get DateTimeOffset value of property %s for entity %s %s. Message: %s"
                propName entity.PartitionKey entity.RowKey exn.Message

    let inline getIntProperty (propName : string) (entity : DynamicTableEntity) =
        let prop = getProperty propName entity
        try
            prop.Int32Value.Value
        with exn ->
            failwithf
                "Could not get Int32 value of property %s for entity %s %s. Message: %s"
                propName entity.PartitionKey entity.RowKey exn.Message

    let inline getBigIntProperty (propName : string)
               (entity : DynamicTableEntity) =
        let prop = getProperty propName entity
        try
            prop.Int64Value.Value
        with exn ->
            failwithf
                "Could not get Int64 value of property %s for entity %s %s. Message: %s"
                propName entity.PartitionKey entity.RowKey exn.Message

    let inline getOptionalIntProperty (propName : string)
               (entity : DynamicTableEntity) =
        try
            getOptionalProperty propName entity
            |> Option.map (fun prop -> prop.Int32Value.Value)
        with exn ->
            failwithf
                "Could not get Int32 value of property %s for entity %s %s. Message: %s"
                propName entity.PartitionKey entity.RowKey exn.Message

    let inline getDoubleProperty (propName : string)
               (entity : DynamicTableEntity) =
        let prop = getProperty propName entity
        try
            prop.DoubleValue.Value
        with exn ->
            failwithf
                "Could not get Double value of property %s for entity %s %s. Message: %s"
                propName entity.PartitionKey entity.RowKey exn.Message

    let inline getOptionalDoubleProperty (propName : string)
               (entity : DynamicTableEntity) =
        try
            getOptionalProperty propName entity
            |> Option.map (fun prop -> prop.DoubleValue.Value)
        with exn ->
            failwithf
                "Could not get Double value of property %s for entity %s %s. Message: %s"
                propName entity.PartitionKey entity.RowKey exn.Message

    let setStringProperty propertyName value (entity : DynamicTableEntity) =
        entity.Properties.[propertyName] <- EntityProperty.GeneratePropertyForString
                                                value
        entity

    let setIntProperty propertyName value (entity : DynamicTableEntity) =
        entity.Properties.[propertyName] <- EntityProperty.GeneratePropertyForInt
                                                (Nullable value)
        entity

    let setBigIntProperty propertyName value (entity : DynamicTableEntity) =
        entity.Properties.[propertyName] <- EntityProperty.GeneratePropertyForLong
                                                (Nullable value)
        entity

    let setDateTimeOffsetProperty propertyName value
        (entity : DynamicTableEntity) =
        entity.Properties.[propertyName] <- EntityProperty.GeneratePropertyForDateTimeOffset
                                                (Nullable value)
        entity

    let setDoubleProperty propertyName value (entity : DynamicTableEntity) =
        entity.Properties.[propertyName] <- EntityProperty.GeneratePropertyForDouble
                                                (Nullable value)
        entity

    let setBoolProperty propertyName value (entity : DynamicTableEntity) =
        entity.Properties.[propertyName] <- EntityProperty.GeneratePropertyForBool
                                                (Nullable value)
        entity

    let setOptionalDoubleProperty propertyName value
        (entity : DynamicTableEntity) =
        match value with
        | Some x -> setDoubleProperty propertyName x entity
        | None -> entity

    let setOptionalIntProperty propertyName value (entity : DynamicTableEntity) =
        match value with
        | Some x -> setIntProperty propertyName x entity
        | None -> entity

    let setOptionalStringProperty propertyName value
        (entity : DynamicTableEntity) =
        match value with
        | Some x -> setStringProperty propertyName x entity
        | None -> entity

    let setOptionalBoolProperty propertyName value (entity : DynamicTableEntity) =
        match value with
        | Some x -> setBoolProperty propertyName x entity
        | None -> entity

    let setOptionalDateTimeProperty propertyName value
        (entity : DynamicTableEntity) =
        match value with
        | Some x -> setDateTimeOffsetProperty propertyName x entity
        | None -> entity
