namespace Chia

open Microsoft.ApplicationInsights
open Domain

module LogBuilder =
    open Chia
    open Chia.InitBuilder
    open System
    open Microsoft.ApplicationInsights.DataContracts

    type LogMsg =
        { Source: Source
          Operation: Operation
          Destination: Destination
          Process: Process
          SeverityLevel: SeverityLevel
          TimeSpan: TimeSpan
          Message: string
          FileWriterConfig: FileWriterConfig option }

    type LogBuilder() =
        member _.Yield _ =
            { Source = NoSource
              Operation = NoOperation
              Destination = NoDestination
              Process = NoProcess
              SeverityLevel = SeverityLevel.Information
              TimeSpan = TimeSpan.Zero
              Message = ""
              FileWriterConfig = None }

        member _.Run state =
            match state.FileWriterConfig with
            | Some _ -> state
            | None -> state

        /// Sets the companyInitials of the FileWriter instance.
        [<CustomOperation "fileWriterConfig">]
        member _.FileWriterConfig(state: LogMsg, fileWriterConfig) =
            { state with
                  FileWriterConfig = Some fileWriterConfig }
        /// Sets the devstatus of the FileWriter instance.
        [<CustomOperation "source">]
        member _.Source(state: LogMsg, source) = { state with Source = source }

        /// Sets the projectanme of the FileWriter instance.
        [<CustomOperation "operation">]
        member _.Operation(state: LogMsg, operation) = { state with Operation = operation }

        /// Sets the name of the SKU/Tier of the FileWriter instance.
        [<CustomOperation "destination">]
        member _.Destination(state: LogMsg, destination) = { state with Destination = destination }

        /// Sets the name of the SKU/Tier of the FileWriter instance.
        [<CustomOperation "processInfo">]
        member _.Process(state: LogMsg, processInfo) = { state with Process = processInfo }
        /// Sets the name of the SKU/Tier of the FileWriter instance.
        [<CustomOperation "timeSpan">]
        member _.TimeSpan(state: LogMsg, timeSpan) = { state with TimeSpan = timeSpan }
        /// Sets the name of the SKU/Tier of the FileWriter instance.
        [<CustomOperation "severityLevel">]
        member _.SeverityLevel(state: LogMsg, severityLevel) =
            { state with
                  SeverityLevel = severityLevel }
        /// Sets the name of the SKU/Tier of the FileWriter instance.
        [<CustomOperation "message">]
        member _.Message(state: LogMsg, message) = { state with Message = message }

    let log = LogBuilder()
