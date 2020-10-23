namespace Chia

[<RequireQualifiedAccess>]
module Log =
    open FileWriter
    open Microsoft.ApplicationInsights.DataContracts
    open LogBuilder

    let logFinished (msg, sources, operations, destinations, info) =
        log {
            fileWriterConfig info
            severityLevel SeverityLevel.Information
            source sources
            operation operations
            destination destinations
            processInfo Finished
            message msg
        }
        |> logOk

    let logStarting (msg, sources, operations, destinations, info) =
        log {
            fileWriterConfig info
            severityLevel SeverityLevel.Information
            source sources
            operation operations
            destination destinations
            processInfo Starting
            message msg
        }
        |> logOk

    let logCritical (msg, sources, operations, destinations, exn, info) =
        log {
            fileWriterConfig info
            severityLevel SeverityLevel.Critical
            source sources
            operation operations
            destination destinations
            processInfo Incomplete
            message msg
        }
        |> logError exn

    let logError (msg, sources, operations, destinations, exn, info) =
        log {
            fileWriterConfig info
            severityLevel SeverityLevel.Error
            source sources
            operation operations
            destination destinations
            processInfo Incomplete
            message msg
        }
        |> logError exn

    let logInformation (msg, sources, operations, destinations, info) =
        log {
            fileWriterConfig info
            severityLevel SeverityLevel.Information
            source sources
            operation operations
            destination destinations
            processInfo Information
            message msg
        }
        |> logOk
