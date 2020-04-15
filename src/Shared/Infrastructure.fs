namespace Chia

module Infrastructure =

    open Farmer
    open Farmer.Resources
    open Chia.FileWriter
    open Chia.CreateTable

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
        let outputs = deployment |> Deploy.execute resourceGroupName []
        match outputs with
        | Ok x ->
            match x.TryFind "storage_key" with
            | Some x -> x.ToString()
            | None -> failwithf "Cant find storage Key"
        | Error err -> failwithf "Error creating infrastructure for %s , exn : %A " resourceGroupName err

    let azConnection info area =
        let storageConnString = createNewOrTakeExistingInfrastruture info area
        let connected =
            let connection = AzureConnection storageConnString
            connection.Connect()
        connected
