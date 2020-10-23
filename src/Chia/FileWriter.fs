namespace Chia

open System
open System.IO
open Microsoft.ApplicationInsights
open FSharp.Control.Tasks.ContextInsensitive
open System.Threading.Tasks
open Shared
open Logging
open Config
open System.Collections.Generic
open InitBuilder

module FileWriter =
    open Microsoft.ApplicationInsights.DataContracts
    open LogBuilder

    type Trace =
        { Msg: string
          Dict: IDictionary<string, string> }
    ///Get the relative log path for a code structure like this: src/Project/***.fsproj
    let getLogPath fileWriterConfig =
        match fileWriterConfig.DevStatus with
        | Development -> @".\..\..\logs\"
        | Test
        | PreProductive
        | Productive -> @"C:\logs\"

    let logPath fileWriterConfig =
        match fileWriterConfig.DevOption with
        | Local ->
            let path =
                Path.Combine
                    (getLogPath fileWriterConfig,
                     fileWriterConfig.CompanyInitials.Value,
                     fileWriterConfig.ProjectName.Value + @"\")

            if not (Directory.Exists(path))
            then Directory.CreateDirectory(path) |> ignore
            path
        | _ ->
            printfn "should not log"
            failwithf "should not log"

    let logArchivPath fileWriterConfig =
        let archivPath =
            Path.Combine(logPath fileWriterConfig, "Archiv" + @"\")

        if not (Directory.Exists(archivPath))
        then Directory.CreateDirectory(archivPath) |> ignore
        archivPath

    let cachePath fileWriterConfig =
        match fileWriterConfig.DevStatus with
        | Development -> Path.Combine(@".\..\..\cache\", fileWriterConfig.ProjectName.Value + @"\")
        | Test
        | PreProductive
        | Productive -> Path.Combine(@"C:\cache\", fileWriterConfig.ProjectName.Value + @"\")

    let testPath fileWriterConfig =
        match fileWriterConfig.DevStatus with
        | Development -> Path.Combine(@".\..\..\..\..\tests\", fileWriterConfig.ProjectName.Value + @"\")
        | Test
        | PreProductive
        | Productive -> Path.Combine(@".\..\..\..\tests\", fileWriterConfig.ProjectName.Value + @"\")

    let matchInfo logMsg =
        match logMsg.FileWriterConfig with
        | Some info -> info
        | None -> failwithf "Please initialize FileWriterConfig with the constructor initFileWriter"

    let miniLogFile (dt: DateTime, logMsg) =
        let year = dt.Year
        let day = dt.Day
        let month = dt.Month
        let hour = dt.Hour
        let min = dt.Minute
        let logPath = logPath (matchInfo logMsg)
        logPath
        + (sprintf
            "log_%s_%s_%s_%s_%i%i%i%i%i.txt"
               logMsg.Source.Value
               logMsg.Process.Value
               logMsg.Operation.Value
               logMsg.Destination.Value
               year
               day
               month
               hour
               min)

    let activateTSL () =
        Net.ServicePointManager.SecurityProtocol <-
            Net.ServicePointManager.SecurityProtocol
            ||| Net.SecurityProtocolType.Tls11
            ||| Net.SecurityProtocolType.Tls12

    let logContent status (logTxt: string) =
        sprintf
            "%O: %s - %s"
            DateTime.Now
            (match status with
             | Ok _ -> "Ok"
             | Error _ -> "Error")
            (match status with
             | Ok _ -> logTxt
             | Error er -> er.ToString())

    let getClient (fileWriterConfig: FileWriterConfig) =
        match fileWriterConfig.Client with
        | Some x -> x
        | None ->
            printfn "No Client - please add an AiKey to your initWriter"
            failwithf "No Client - please add an AiKey to your initWriter"

    let printMsg logMsg =
        printfn
            "Msg: %s; SeverityLevel: %A; %s; %s; %s; %s"
            logMsg.Message
            logMsg.SeverityLevel
            logMsg.Source.Value
            logMsg.Process.Value
            logMsg.Operation.Value
            logMsg.Destination.Value

    let trackTrace logMsg =
        let client = getClient (matchInfo logMsg)
        // let operation = client.StartOperation<RequestTelemetry>(logMsg.Operation.GetValue)
        // operation.Telemetry.ResponseCode <- "200"
        // client.StopOperation(operation)
        printMsg logMsg
        let traceTelemetry = TraceTelemetry()
        traceTelemetry.Properties.Add("Process", logMsg.Process.Value)
        traceTelemetry.Properties.Add("Destination", logMsg.Destination.Value)
        // traceTelemetry.Properties.Add("TimeSpan", logMsg.TimeSpan.ToString("O"))
        traceTelemetry.Context.Operation.Name <- logMsg.Operation.Value
        traceTelemetry.Context.Cloud.RoleName <- logMsg.Source.Value
        traceTelemetry.SeverityLevel <- logMsg.SeverityLevel |> Nullable
        traceTelemetry.Message <- logMsg.Message
        client.TrackTrace traceTelemetry

    let trackMetric logMsg =
        let client = getClient (matchInfo logMsg)
        printMsg logMsg

        let metricTelemetry =
            MetricTelemetry(Name = logMsg.Source.Value)

        metricTelemetry.Properties.Add("Message", logMsg.Message)
        metricTelemetry.Properties.Add("Process", logMsg.Process.Value)
        metricTelemetry.Properties.Add("Destination", logMsg.Destination.Value)
        // metricTelemetry.Properties.Add("TimeSpan", logMsg.TimeSpan.ToString("O"))
        metricTelemetry.Context.Operation.Name <- logMsg.Operation.Value
        metricTelemetry.Context.Cloud.RoleName <- logMsg.Source.Value
        client.TrackMetric metricTelemetry

    let trackError logMsg exn =
        let client = getClient (matchInfo logMsg)
        printMsg logMsg
        let exceptionTelemetry = ExceptionTelemetry(exn)
        exceptionTelemetry.Properties.Add("Process", logMsg.Process.Value)
        exceptionTelemetry.Properties.Add("Destination", logMsg.Destination.Value)
        // exceptionTelemetry.Properties.Add("TimeSpan", logMsg.TimeSpan.ToString("O"))
        exceptionTelemetry.Context.Operation.Name <- logMsg.Operation.Value
        exceptionTelemetry.Context.Cloud.RoleName <- logMsg.Source.Value
        exceptionTelemetry.SeverityLevel <- logMsg.SeverityLevel |> Nullable
        exceptionTelemetry.Message <- logMsg.Message
        client.TrackException(exceptionTelemetry)

    let getLogTxt status logMsg =

        let msg =
            sprintf
                "Msg: %s; SeverityLevel: %A; %s; %s; %s; %s"
                logMsg.Message
                logMsg.SeverityLevel
                logMsg.Source.Value
                logMsg.Process.Value
                logMsg.Operation.Value
                logMsg.Destination.Value

        sprintf
            "%O: %s - %s - %O"
            DateTime.Now
            (match status with
             | Ok _ -> "Ok"
             | Error _ -> "Error")
            (match status with
             | Ok _ -> msg
             | Error er -> er.ToString())
            logMsg.TimeSpan

    let writeLog (status: Result<_, exn>) logMsg =
        try
            let fileWriterConfig =

                match logMsg.FileWriterConfig with
                | Some x -> x
                | _ -> failwithf "you have to assign a filewriterconfig first"

            let devOption = fileWriterConfig.DevOption


            let date = DateTime.Now
            let logTxt = getLogTxt status logMsg
            match devOption with
            | Azure _ ->
                match status with
                | Error exn -> trackError logMsg exn
                | Ok _ -> trackTrace logMsg
            | Local ->
                let file = miniLogFile (date, logMsg)
                printfn "Msg %s" logTxt

                let status =
                    match status with
                    | Error _ -> "Error"
                    | Ok _ -> "Ok"

                try
                    let logPath = logPath fileWriterConfig
                    if not (Directory.Exists(logPath))
                    then Directory.CreateDirectory(logPath) |> ignore
                    File.AppendAllText
                        (file,
                         date.Date.ToString()
                         + ";"
                         + status
                         + ";"
                         + logTxt
                         + Environment.NewLine)
                with exn ->
                    printfn "Couldn't write LogFile: %s" exn.Message
                    failwithf "Couldn't write LogFile: %s" exn.Message
            | LocalAndAzure _ ->
                printfn "Msg %s" logTxt
                let file = miniLogFile (date, logMsg)
                match status with
                | Error exn -> trackError logMsg exn
                | Ok _ -> trackTrace logMsg

                let status =
                    match status with
                    | Error _ -> "Error"
                    | Ok _ -> "Ok"

                try
                    let logPath = logPath fileWriterConfig
                    if not (Directory.Exists(logPath))
                    then Directory.CreateDirectory(logPath) |> ignore
                    File.AppendAllText
                        (file,
                         date.Date.ToString()
                         + ";"
                         + status
                         + ";"
                         + logTxt
                         + Environment.NewLine)
                with exn ->
                    printfn "Couldn't write LogFile: %s" exn.Message
                    failwithf "Couldn't write LogFile: %s" exn.Message
        with exn -> failwithf "Couldn't write log: %s" exn.Message


    let moveOldLogFiles fileWriterConfig =
        let destinationDirectory =
            Path.GetFullPath(logArchivPath fileWriterConfig)

        let sourceDirectoryRoot =
            Path.GetFullPath(logPath fileWriterConfig)

        let searchPattern = @"*.txt"
        let getFileName sourceFile = FileInfo(sourceFile).Name

        let getLogFiles =
            Directory.GetFiles(sourceDirectoryRoot, searchPattern, SearchOption.TopDirectoryOnly)

        let getDestinationFileName sourceFile destinationDirectory =
            let destinationPath =
                Path.Combine(destinationDirectory, getFileName sourceFile)

            printfn "DestPath %s" destinationPath
            destinationPath

        let copyLogFiles sourceFile destinationDirectory =
            File.Copy(sourceFile, getDestinationFileName sourceFile destinationDirectory, true)
            |> ignore

        let deleteOldLogFiles sourceFile = File.Delete sourceFile
        getLogFiles
        |> Array.iter (fun logFile ->
            printfn "File: %s" logFile
            copyLogFiles logFile destinationDirectory
            deleteOldLogFiles logFile)

    let logOk = writeLog (Ok())
    let logError exn = writeLog (Error exn)

    let logWithTimingTask (fn: unit -> Task<'a>) logMsg =
        task {
            let sw = Diagnostics.Stopwatch.StartNew()
            let! res = fn ()
            writeLog (Ok()) logMsg
            return res
        }

    let printLogFileTotalTime (stopWatch: Diagnostics.Stopwatch) name fileWriterConfig () =
        printfn "Creating log file: %s" name
        let duration = stopWatch.Elapsed.TotalSeconds
        stopWatch.Stop()
        let logPath = logPath fileWriterConfig

        let path =
            logPath
            + (sprintf "log_%s_%s.txt" name (DateTime.Now.ToString("yyyyMMdd")))

        let log =
            sprintf "Total elapsed time: %fs\n\n\n" duration

        File.AppendAllText(path, log)
        printfn "Finished log file: %s" name

    let printArray name array fileWriterConfig () =
        let projDir =
            Path.Combine(Environment.CurrentDirectory, @"..\..\")

        if not (Directory.Exists(projDir + "logs")) then
            Directory.CreateDirectory(projDir + "logs")
            |> ignore
        let logPath = logPath fileWriterConfig

        let path =
            logPath + (sprintf "logs_query_%s.txt" name)

        let log = sprintf "Array: %A\n" array
        File.AppendAllText(path, log)

    ///Printing query duration to logfile
    let printLogFile (stopWatch: Diagnostics.Stopwatch) query querynr func name par length () =
        printfn "Creating log file: %s" name
        let duration = stopWatch.Elapsed.TotalSeconds
        stopWatch.Restart()

        let projDir =
            Path.Combine(Environment.CurrentDirectory, @"..\..\")

        if not (Directory.Exists(projDir + "logs")) then
            Directory.CreateDirectory(projDir + "logs")
            |> ignore

        let path =
            projDir
            + (sprintf "logs\\log_%s_%s.txt" name (DateTime.Now.ToString("yyyyMMdd")))

        printfn "writing to logfile %s" path

        let printlog query (duration: float) func par length =
            let log =
                sprintf "Query: %s ; Function: %s ; Duration: %fs ; Paramaters: %s ; Length: %i\n" query func duration
                    par length

            File.AppendAllText(path, log)

        if querynr = 1 then
            let log = sprintf "Logfile for %s\n" name
            File.AppendAllText(path, log)
            printlog query duration func par length
        else
            printlog query duration func par length
        printfn "Finished log file: %s" name
