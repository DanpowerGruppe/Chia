namespace Chia.Client

module FileWriter =
    type ProjectName =
        | ProjectName of string
        member this.Value = (fun (ProjectName name) -> name) this

    type FileWriterInfo =
        { MasterStatus : Config.DevStatus
          ProjectName : ProjectName
          DevOption : Logging.DevOption }

    // constructor
    let initFileWriter masterStatus projectName devOption =
        { MasterStatus = masterStatus
          ProjectName = ProjectName projectName
          DevOption = devOption }

    let masterStatus info = info.MasterStatus
    let projectName info = info.ProjectName
