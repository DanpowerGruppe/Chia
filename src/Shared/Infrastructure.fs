namespace Chia

module Infrastructure =

    open Farmer
    open Farmer.Builders
    open Farmer.CoreTypes
    open Chia.FileWriter
    open Microsoft.WindowsAzure.Storage

    let buildEnvironment (info: FileWriterInfo) area =
        let storageAccountName =
            info.CompanyInitials.Value + "-" + info.ProjectName.Value + "-" + info.DevStatus.GetValue
        let storageAccount = storageAccount { name storageAccountName }
        let resourceGroupName =
            info.CompanyInitials.Value + "-" + info.ProjectName.Value + "-" + info.DevStatus.GetValue

        let deployment =
            arm {
                location area
                add_resource storageAccount
                output "storage_key" storageAccount.Key
            }
        deployment, resourceGroupName

    let createNewOrTakeExistingInfrastruture info area =
        let deployment, resourceGroupName: Deployment * string = buildEnvironment info area
        let outputs = deployment |> Deploy.tryExecute resourceGroupName []
        match outputs with
        | Ok x ->
            match x.TryFind "storage_key" with
            | Some x -> x.ToString()
            | None -> failwithf "Cant find storage Key"
        | Error err -> failwithf "Error creating infrastructure for %s , exn : %A " resourceGroupName err

    type AzureConnection =
        | AzureConnection of string
        member this.Connect() =
            match this with
            | AzureConnection connectionString -> CloudStorageAccount.Parse connectionString

    type AzAccount =
        { StorageAccount: CloudStorageAccount
          FileWriterInfo: FileWriterInfo }

    let azConnection info area =
        let storageConnString = createNewOrTakeExistingInfrastruture info area

        let connected =
            let connection = AzureConnection storageConnString
            connection.Connect()
        { StorageAccount = connected
          FileWriterInfo = info }
    let azConnectionExisting info storageConnString =
        try

            let connected =
                let connection = AzureConnection storageConnString
                connection.Connect()
            { StorageAccount = connected
              FileWriterInfo = info }
        with
        | exn -> failwithf "Can not connect to azure storage account: %s" exn.Message
