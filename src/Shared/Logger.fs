namespace Chia

module Log =
    open Chia.FileWriter
    open Microsoft.ApplicationInsights.DataContracts
    open System
    open Chia
    // type LoggerInfo = {
    //     Source : Source
    //     SeverityLevel : SeverityLevel
    //     Operation : Operation
    //     Destination : Destination
    //     TimeSpan : TimeSpan
    //     Process : Process
    //     FileWriterInfo : string
    // }
    type Logger () =
        member _.Yield _ =
            {   Source = Source.LocalService
                SeverityLevel = SeverityLevel.Information
                Operation = Operation.Start
                Destination = Destination.LocalStorage
                TimeSpan = TimeSpan.Zero
                Process = Process.Starting
                FileWriterInfo = None
                Message = ""
            }
        member __.Run(state) = state
        /// Sets the FileWriter of the Logger.
        [<CustomOperation("fileWriterInfo")>]
        member __.FileWriterInfo(state, fileWriterInfo) = { state with FileWriterInfo = Some fileWriterInfo }
        /// Sets the SeverityLevel of the Logger.
        [<CustomOperation "severityLevel">]
        member __.SeverityLevel(state, severityLevel) = { state with SeverityLevel = severityLevel }
    let log = Logger ()
    let x = log {
        do ()
        fileWriterInfo info
        severityLevel SeverityLevel.Information
    }




    let logFinished (msg,source,operation,destination, info) =
        logOk msg SeverityLevel.Information source Finished operation destination TimeSpan.Zero info
    let logStarting (msg,source,operation,destination, info) =
        logOk msg SeverityLevel.Information source Starting operation destination TimeSpan.Zero info
    let logCritical (msg,source,operation,destination,exn,info) =
        logError exn msg SeverityLevel.Critical source Incomplete operation destination TimeSpan.Zero info
    let logError (msg,source,operation,destination,exn,info) =
        logError exn msg SeverityLevel.Error source Incomplete operation destination TimeSpan.Zero info
    let logInformation (msg,source,operation,destination,info) =
        logOk msg SeverityLevel.Information source Information operation destination TimeSpan.Zero info
