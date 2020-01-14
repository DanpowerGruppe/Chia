namespace Chia

module Log =

    open Chia.FileWriter
    open Microsoft.ApplicationInsights.DataContracts
    open System

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
