namespace Chia

module Infrastructure =

    open Farmer
    open Farmer.Builders
    open Farmer.Arm
    open InitBuilder
    open Microsoft.WindowsAzure.Storage

    let buildEnvironment (info: FileWriterConfig) area =
        let storageName =
            info.CompanyInitials.Value
            + info.ProjectName.Value
            + info.DevStatus.GetValue

        let storageAccount = storageAccount { name storageName }

        let resourceGroupConfig =
            arm {
                location area
                add_resource storageAccount
                output "storage_key" storageAccount.Key
            }

        resourceGroupConfig, storageName

    let createNewOrTakeExistingInfrastruture info area =
        let resourceGroupConfig, resourceGroupName: ResourceGroupConfig * string = buildEnvironment info area

        let outputs =
            resourceGroupConfig
            |> Deploy.tryExecute resourceGroupName []

        match outputs with
        | Ok x ->
            match x.TryFind "storage_key" with
            | Some x -> x.ToString()
            | None -> failwithf "Can't find storage Key"
        | Error err -> failwithf "Error creating infrastructure for %s , exn : %A " resourceGroupName err

    type AzureConnection =
        | AzureConnection of string
        member this.Connect() =
            match this with
            | AzureConnection connectionString -> CloudStorageAccount.Parse connectionString

    type AzAccount =
        { StorageAccount: CloudStorageAccount
          FileWriterConfig: FileWriterConfig }

    let azConnection info area =
        let storageConnString =
            createNewOrTakeExistingInfrastruture info area

        let connected =
            let connection = AzureConnection storageConnString
            connection.Connect()

        { StorageAccount = connected
          FileWriterConfig = info }

    let azConnectionExisting info storageConnString =
        try

            let connected =
                let connection = AzureConnection storageConnString
                connection.Connect()

            { StorageAccount = connected
              FileWriterConfig = info }
        with
        | exn -> failwithf "Can not connect to azure storage account: %s" exn.Message
