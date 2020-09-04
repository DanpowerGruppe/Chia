namespace Chia

open Microsoft.ApplicationInsights
open Domain

module InitBuilder =
    open Chia.ApplicationInsights
    open Chia.Domain.Logging
    open Domain.Config

    type FileWriterConfig =
        { DevStatus: Config.DevStatus
          CompanyInitials: string option
          ProjectName: string option
          DevOption: DevOption
          Client: TelemetryClient option }

    type InitWriterBuilder() =
        member _.Yield _ =
            { DevStatus = Development
              CompanyInitials = None
              ProjectName = None
              DevOption = Local
              Client = None }

        member _.Run state = state

        /// Sets the devstatus of the FileWriter instance.
        [<CustomOperation "devStatus">]
        member _.DevStatus(state: FileWriterConfig, devStatus) = { state with DevStatus = devStatus }

        /// Sets the companyInitials of the FileWriter instance.
        [<CustomOperation "companyInitials">]
        member _.CompanyInitials(state: FileWriterConfig, companyInitials) =
            { state with
                  CompanyInitials = Some companyInitials }

        /// Sets the projectanme of the FileWriter instance.
        [<CustomOperation "projectName">]
        member _.ProjectName(state: FileWriterConfig, projectName:string) =
            { state with
                  ProjectName = Some (projectName.ToLower()) }

        /// Sets the name of the SKU/Tier of the FileWriter instance.
        [<CustomOperation "devOption">]
        member _.DevOption(state: FileWriterConfig, devOption) =
            match devOption with
            | Local -> { state with DevOption = devOption }
            | _ ->
                { state with
                      DevOption = devOption
                      Client = startAIAndGetClient devOption |> Some }


    let initWriter = InitWriterBuilder()
