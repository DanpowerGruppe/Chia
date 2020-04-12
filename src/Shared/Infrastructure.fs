namespace Chia
module Infrastructure =

    open Farmer
    open Farmer.Resources
    open Chia.FileWriter

    let buildEnvironment (info: FileWriterInfo) area =
        let projectName = info.ProjectName.Value
        let storageAccount = storageAccount { name (projectName + info.DevStatus.GetValue) }

        let deployment =
            arm {
                location area
                add_resource storageAccount
            }
        deployment, projectName + info.DevStatus.GetValue, storageAccount.Key

    let createNewOrTakeExistingInfrastruture info area =
        let deployment, resourceGroupName, storageAccountKey = buildEnvironment info area
        deployment |> Deploy.quick resourceGroupName
        storageAccountKey.Value
