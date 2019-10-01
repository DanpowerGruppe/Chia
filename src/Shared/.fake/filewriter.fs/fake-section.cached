namespace Chia

open System
open System.IO
open Domain.Logging
open Domain.Config
open Microsoft.ApplicationInsights
open Microsoft.ApplicationInsights.Extensibility.PerfCounterCollector.QuickPulse
open Microsoft.ApplicationInsights.Extensibility
open FSharp.Control.Tasks.ContextInsensitive
open System.Threading.Tasks

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
    let config = TelemetryConfiguration.CreateDefault()
    let client = TelemetryClient(config)

    ///Get the relative log path for a code structure like this: src/Project/***.fsproj
    let getLogPath fileWriterInfo =
        match fileWriterInfo.MasterStatus with
        | Development -> @".\..\..\logs\"
        | Productive -> @"C:\logs\"

    let logPath fileWriterInfo =
        Path.Combine
            (getLogPath fileWriterInfo, fileWriterInfo.ProjectName.Value + @"\")
    let logArchivPath fileWriterInfo =
        Path.Combine(logPath fileWriterInfo, "Archiv" + @"\")

    let cachePath fileWriterInfo =
        match fileWriterInfo.MasterStatus with
        | Development ->
            Path.Combine
                (@".\..\..\..\..\cache\", fileWriterInfo.ProjectName.Value + @"\")
        | Productive ->
            Path.Combine(@".\..\..\..\cache\", fileWriterInfo.ProjectName.Value + @"\")

    let testPath fileWriterInfo =
        match fileWriterInfo.MasterStatus with
        | Development ->
            Path.Combine
                (@".\..\..\..\..\tests\", fileWriterInfo.ProjectName.Value + @"\")
        | Productive ->
            Path.Combine(@".\..\..\..\tests\", fileWriterInfo.ProjectName.Value + @"\")

    let miniLogFile (dt : DateTime, fileWriterInfo) =
        let year = dt.Year
        let day = dt.Day
        let month = dt.Month
        let hour = dt.Hour
        let min = dt.Minute
        let logPath = logPath fileWriterInfo
        logPath + (sprintf "log_%i%i%i%i%i.txt" year day month hour min)

    let activateTSL() =
        Net.ServicePointManager.SecurityProtocol <-
                                    Net.ServicePointManager.SecurityProtocol
                                    ||| Net.SecurityProtocolType.Tls11
                                    ||| Net.SecurityProtocolType.Tls12

    let logContent status (logTxt : string) =
        sprintf "%O: %s - %s" DateTime.Now (match status with
                                                | Ok _ -> "Ok"
                                                | Error _ -> "Error")
                (match status with
                 | Ok _ -> logTxt
                 | Error er -> er.ToString())

    let writeLog (status : Result<_, exn>) fileWriterInfo (logTxt : string) =
        let date = DateTime.Now
        let file = miniLogFile (date, fileWriterInfo)
        match status with
        | Error exn -> client.TrackException exn
        | Ok _ -> client.TrackEvent logTxt
        let logTxt =
            sprintf "%O: %s - %s" DateTime.Now (match status with
                                                | Ok _ -> "Ok"
                                                | Error _ -> "Error")
                (match status with
                 | Ok _ -> logTxt
                 | Error er -> er.ToString())
        printfn "Msg %s" logTxt
        let status =
            match status with
            | Error _ -> "Error"
            | Ok _ -> "Ok"
        try
            File.AppendAllText
                (file,
                 date.Date.ToString() + ";" + status + ";" + logTxt
                 + Environment.NewLine)
        with exn ->
            printfn "Couldn't write LogFile: %s" exn.Message
            failwithf "Couldn't write LogFile: %s" exn.Message

    let moveOldLogFiles fileWriterInfo =
        let destinationDirectory =
            Path.GetFullPath(logArchivPath fileWriterInfo)
        let sourceDirectoryRoot = Path.GetFullPath(logPath fileWriterInfo)
        let searchPattern = @"*.txt"
        let getFileName sourceFile = FileInfo(sourceFile).Name
        let getLogFiles =
            Directory.GetFiles
                (sourceDirectoryRoot, searchPattern,
                 SearchOption.TopDirectoryOnly)

        let getDestinationFileName sourceFile destinationDirectory =
            let destinationPath =
                Path.Combine(destinationDirectory, getFileName sourceFile)
            printfn "DestPath %s" destinationPath
            destinationPath

        let copyLogFiles sourceFile destinationDirectory =
            File.Copy
                (sourceFile,
                 getDestinationFileName sourceFile destinationDirectory, true)
            |> ignore
        let deleteOldLogFiles sourceFile = File.Delete sourceFile
        getLogFiles
        |> Array.iter (fun logFile ->
               printfn "File: %s" logFile
               copyLogFiles logFile destinationDirectory
               deleteOldLogFiles logFile)

    let logOk fileWriterInfo =
        if fileWriterInfo.DevOption = Local then writeLog (Ok()) fileWriterInfo
        else printfn "Running On Azure %s"

    let logError exn fileWriterInfo =
        if fileWriterInfo.DevOption = Local then
            moveOldLogFiles fileWriterInfo
            writeLog (Error exn) fileWriterInfo
        else printfn "Running On Azure %s"

    let logWithTiming fnName fileWriterInfo fn =
        let sw = Diagnostics.Stopwatch.StartNew()
        let res = fn()
        logOk fileWriterInfo
            (sprintf "Time taken to run %s: %O" fnName sw.Elapsed)
        res

    let logWithTimingTask fnName fileWriterInfo (fn : unit -> Task<'a>) =
        task {
            printfn "Starting LogTiming %s" fnName
            let sw = Diagnostics.Stopwatch.StartNew()
            let! res = fn()
            logOk fileWriterInfo
                (sprintf "Time taken to run %s: %O" fnName sw.Elapsed)
            return res
        }

    let printLogFileTotalTime (stopWatch : Diagnostics.Stopwatch) name
        fileWriterInfo () =
        printfn "Creating log file: %s" name
        let duration = stopWatch.Elapsed.TotalSeconds
        stopWatch.Stop()
        let logPath = logPath fileWriterInfo
        let path =
            logPath
            + (sprintf "log_%s_%s.txt" name (DateTime.Now.ToString("yyyyMMdd")))

        let log =
            sprintf "Total elapsed time: %fs\n\n\n" duration
        File.AppendAllText(path, log)
        printfn "Finished log file: %s" name

    let printArray name array fileWriterInfo () =
        let projDir = Path.Combine(Environment.CurrentDirectory, @"..\..\")
        if not (Directory.Exists(projDir + "logs")) then
            Directory.CreateDirectory(projDir + "logs") |> ignore
        let logPath = logPath fileWriterInfo
        let path = logPath + (sprintf "logs_query_%s.txt" name)

        let log =
            sprintf "Array: %A\n" array
        File.AppendAllText(path, log)

    ///Printing query duration to logfile dsadsa
    let printLogFile (stopWatch : Diagnostics.Stopwatch) query querynr func name
        par length () =
        printfn "Creating log file: %s" name
        let duration = stopWatch.Elapsed.TotalSeconds
        stopWatch.Restart()
        let projDir = Path.Combine(Environment.CurrentDirectory, @"..\..\")
        if not (Directory.Exists(projDir + "logs")) then
            Directory.CreateDirectory(projDir + "logs") |> ignore
        let path =
            Path.Combine(Environment.CurrentDirectory, @"..\..\")
            + (sprintf "logs\\log_%s_%s.txt" name
                   (DateTime.Now.ToString("yyyyMMdd")))
        printfn "writing to logfile %s" path
        let printlog query (duration : float) func par length =
            let log =
                sprintf
                    "Query: %s ; Function: %s ; Duration: %fs ; Paramaters: %s ; Length: %i\n"
                    query func duration par length
            File.AppendAllText(path, log)
        if querynr = 1 then
            let log =
                sprintf "Logfile for %s\n" name
            File.AppendAllText(path, log)
            printlog query duration func par length
        else printlog query duration func par length
        printfn "Finished log file: %s" name

module ApplicationInsights =
    let startAI key =
        let config = TelemetryConfiguration.CreateDefault()
        config.InstrumentationKey <- key
        let mutable processor : QuickPulseTelemetryProcessor = null
        config.TelemetryProcessorChainBuilder.Use(fun next ->
              processor <- QuickPulseTelemetryProcessor next
              processor :> _).Build()
        let quickPulse = new QuickPulseTelemetryModule()
        quickPulse.Initialize config
        quickPulse.RegisterTelemetryProcessor processor
