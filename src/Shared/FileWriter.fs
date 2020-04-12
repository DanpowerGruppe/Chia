namespace Chia

open System
open System.IO
open Microsoft.ApplicationInsights
open Microsoft.ApplicationInsights.Extensibility.PerfCounterCollector.QuickPulse
open Microsoft.ApplicationInsights.Extensibility
open FSharp.Control.Tasks.ContextInsensitive
open System.Threading.Tasks
open Domain
open Logging
open Config
open System.Collections.Generic

module ApplicationInsights =
    let startAIAndGetClient key =
        let config = new TelemetryConfiguration(InstrumentationKey = key)
        let client = TelemetryClient(config)
        client.InstrumentationKey <- key
        let mutable processor: QuickPulseTelemetryProcessor = null
        config.TelemetryProcessorChainBuilder.Use(fun next ->
              processor <- QuickPulseTelemetryProcessor next
              processor :> _).Build()
        let quickPulse = new QuickPulseTelemetryModule()
        quickPulse.Initialize config
        quickPulse.RegisterTelemetryProcessor processor
        client


module FileWriter =
    open ApplicationInsights
    open Microsoft.ApplicationInsights.DataContracts
    type ProjectName =
        | ProjectName of string
        member this.Value = (fun (ProjectName name) -> name) this


    type FileWriterInfo =
        { DevStatus: Config.DevStatus
          ProjectName: ProjectName
          DevOption: Logging.DevOption
          Client: TelemetryClient option }
    // constructor
    let initFileWriter masterStatus projectName devOption aiKey =
        match devOption with
        | Local ->
            { DevStatus = masterStatus
              ProjectName = ProjectName projectName
              DevOption = devOption
              Client = None }
        | Azure ->
            { DevStatus = masterStatus
              ProjectName = ProjectName projectName
              DevOption = devOption
              Client = startAIAndGetClient aiKey |> Some }
        | LocalAndAzure ->
            { DevStatus = masterStatus
              ProjectName = ProjectName projectName
              DevOption = devOption
              Client = startAIAndGetClient aiKey |> Some }

    let masterStatus info = info.DevStatus
    let projectName info = info.ProjectName

    // type Source =
    //     | Source of string
    //     member this.Value = (fun (Source name) -> name) this
    type Source =
        | LocalService
        | LocalServer
        | AzureFunction
        | AzureInfrastucture
        | PiServer
        | Client
        | SPSCommunication
        member this.GetValue =
            match this with
            | LocalService -> "LocalService"
            | LocalServer -> "LocalServer"
            | PiServer -> "PiServer"
            | Client -> "Client"
            | AzureFunction -> "AzureFunction"
            | AzureInfrastucture -> "AzureInfrastucture"
            | SPSCommunication -> "SPSCommunication"

    type Operation =
        | Upload
        | Download
        | Insert
        | Query
        | Create
        | Delete
        | Calculation
        | Restart
        | Start
        | Stop
        | Update
        | Post
        | Get
        member this.GetValue =
            match this with
            | Upload -> "Upload"
            | Download -> "Download"
            | Insert -> "Insert"
            | Query -> "Query"
            | Create -> "Create"
            | Delete -> "Delete"
            | Calculation -> "Calculation"
            | Restart -> "Restart"
            | Start -> "Start"
            | Stop -> "Stop"
            | Post -> "Post"
            | Get -> "Get"
            | Update -> "Update"

    type Destination =
        | AzureTable
        | QueueTable
        | BlobTable
        | SqlTable
        | LocalStorage
        | EventHub
        member this.GetValue =
            match this with
            | AzureTable -> "AzureTable"
            | QueueTable -> "QueueTable"
            | BlobTable -> "BlobTable"
            | SqlTable -> "SqlTable"
            | LocalStorage -> "LocalStorage"
            | EventHub -> "EventHub"

    type Process =
        | Finished
        | Information
        | Incomplete
        | Starting
        member this.GetValue =
            match this with
            | Finished -> "Finished"
            | Incomplete -> "Incomplete"
            | Starting -> "Starting"
            | Information -> "Information"

    type LogMsg =
        { Source: Source
          Operation: Operation
          Destination: Destination
          Process: Process
          SeverityLevel: SeverityLevel
          TimeSpan: TimeSpan
          Message : string }


    type Trace =
        { Msg: string
          Dict: IDictionary<string, string> }
    ///Get the relative log path for a code structure like this: src/Project/***.fsproj
    let getLogPath fileWriterInfo =
        match fileWriterInfo.DevStatus with
        | Development -> @".\..\..\logs\"
        | Test
        | PreProductive
        | Productive -> @"C:\logs\"

    let logPath fileWriterInfo =
        let path = Path.Combine(getLogPath fileWriterInfo, fileWriterInfo.ProjectName.Value + @"\")
        if not(Directory.Exists(path)) then
            Directory.CreateDirectory(path) |> ignore
        path
    let logArchivPath fileWriterInfo =
        let archivPath = Path.Combine(logPath fileWriterInfo, "Archiv" + @"\")
        if not(Directory.Exists(archivPath)) then
                Directory.CreateDirectory(archivPath) |> ignore
        archivPath
    let cachePath fileWriterInfo =
        match fileWriterInfo.DevStatus with
        | Development -> Path.Combine(@".\..\..\cache\", fileWriterInfo.ProjectName.Value + @"\")
        | Test
        | PreProductive
        | Productive -> Path.Combine(@"C:\cache\", fileWriterInfo.ProjectName.Value + @"\")

    let testPath fileWriterInfo =
        match fileWriterInfo.DevStatus with
        | Development -> Path.Combine(@".\..\..\..\..\tests\", fileWriterInfo.ProjectName.Value + @"\")
        | Test
        | PreProductive
        | Productive -> Path.Combine(@".\..\..\..\tests\", fileWriterInfo.ProjectName.Value + @"\")

    let miniLogFile (dt: DateTime,logMsg, fileWriterInfo) =
        let year = dt.Year
        let day = dt.Day
        let month = dt.Month
        let hour = dt.Hour
        let min = dt.Minute
        let logPath = logPath fileWriterInfo
        logPath + (sprintf "log_%s_%s_%s_%s_%i%i%i%i%i.txt" logMsg.Source.GetValue logMsg.Process.GetValue logMsg.Operation.GetValue logMsg.Destination.GetValue year day month hour min)

    let activateTSL() =
        Net.ServicePointManager.SecurityProtocol <-
            Net.ServicePointManager.SecurityProtocol ||| Net.SecurityProtocolType.Tls11
            ||| Net.SecurityProtocolType.Tls12

    let logContent status (logTxt: string) =
        sprintf "%O: %s - %s" DateTime.Now
            (match status with
             | Ok _ -> "Ok"
             | Error _ -> "Error")
            (match status with
             | Ok _ -> logTxt
             | Error er -> er.ToString())

    let getClient (fileWriterInfo: FileWriterInfo) =
        match fileWriterInfo.Client with
        | Some x -> x
        | None ->
            printfn "No Client"
            failwithf "No Client"
    let printMsg logMsg =
        printfn "Msg: %s; SeverityLevel: %A; %s; %s; %s; %s" logMsg.Message logMsg.SeverityLevel logMsg.Source.GetValue logMsg.Process.GetValue logMsg.Operation.GetValue logMsg.Destination.GetValue
    let trackTrace fileWriterInfo logMsg =
        let client = getClient fileWriterInfo
        // let operation = client.StartOperation<RequestTelemetry>(logMsg.Operation.GetValue)
        // operation.Telemetry.ResponseCode <- "200"
        // client.StopOperation(operation)
        printMsg logMsg
        let traceTelemetry = TraceTelemetry()
        traceTelemetry.Properties.Add("Process", logMsg.Process.GetValue)
        traceTelemetry.Properties.Add("Destination", logMsg.Destination.GetValue)
        // traceTelemetry.Properties.Add("TimeSpan", logMsg.TimeSpan.ToString("O"))
        traceTelemetry.Context.Operation.Name <- logMsg.Operation.GetValue
        traceTelemetry.Context.Cloud.RoleName <- logMsg.Source.GetValue
        traceTelemetry.SeverityLevel <- logMsg.SeverityLevel |> Nullable
        traceTelemetry.Message <- logMsg.Message
        client.TrackTrace traceTelemetry

    let trackMetric fileWriterInfo logMsg =
        let client = getClient fileWriterInfo
        printMsg logMsg
        let metricTelemetry = MetricTelemetry(Name = logMsg.Source.GetValue)
        metricTelemetry.Properties.Add("Message", logMsg.Message)
        metricTelemetry.Properties.Add("Process", logMsg.Process.GetValue)
        metricTelemetry.Properties.Add("Destination", logMsg.Destination.GetValue)
        // metricTelemetry.Properties.Add("TimeSpan", logMsg.TimeSpan.ToString("O"))
        metricTelemetry.Context.Operation.Name <- logMsg.Operation.GetValue
        metricTelemetry.Context.Cloud.RoleName <- logMsg.Source.GetValue
        client.TrackMetric metricTelemetry

    let trackError fileWriterInfo logMsg exn =
        let client = getClient fileWriterInfo
        printMsg logMsg
        let exceptionTelemetry = ExceptionTelemetry(exn)
        exceptionTelemetry.Properties.Add("Process", logMsg.Process.GetValue)
        exceptionTelemetry.Properties.Add("Destination", logMsg.Destination.GetValue)
        // exceptionTelemetry.Properties.Add("TimeSpan", logMsg.TimeSpan.ToString("O"))
        exceptionTelemetry.Context.Operation.Name <- logMsg.Operation.GetValue
        exceptionTelemetry.Context.Cloud.RoleName <- logMsg.Source.GetValue
        exceptionTelemetry.SeverityLevel <- logMsg.SeverityLevel |> Nullable
        exceptionTelemetry.Message <- logMsg.Message
        client.TrackException(exceptionTelemetry)

    let getLogTxt status logMsg =

        let msg =
            sprintf "Msg: %s; SeverityLevel: %A; %s; %s; %s; %s" logMsg.Message logMsg.SeverityLevel logMsg.Source.GetValue logMsg.Process.GetValue logMsg.Operation.GetValue logMsg.Destination.GetValue
        sprintf "%O: %s - %s - %O" DateTime.Now
            (match status with
             | Ok _ -> "Ok"
             | Error _ -> "Error")
            (match status with
             | Ok _ -> msg
             | Error er -> er.ToString()) logMsg.TimeSpan

    let writeLog (status: Result<_, exn>) message severity source processMsg operation destination timeSpan fileWriterInfo =
        let devOption = fileWriterInfo.DevOption

        let logMsg =
            { Source = source
              Operation = operation
              Destination = destination
              Process = processMsg
              SeverityLevel = severity
              TimeSpan = timeSpan
              Message = message }

        let date = DateTime.Now
        let file = miniLogFile (date,logMsg, fileWriterInfo)
        let logTxt = getLogTxt status logMsg
        match devOption with
        | Azure ->
            match status with
            | Error exn -> trackError fileWriterInfo logMsg exn
            | Ok _ -> trackTrace fileWriterInfo logMsg
        | Local ->
            printfn "Msg %s" logTxt
            let status =
                match status with
                | Error _ -> "Error"
                | Ok _ -> "Ok"
            try
                let logPath = logPath fileWriterInfo
                if not (Directory.Exists(logPath)) then Directory.CreateDirectory(logPath) |> ignore
                File.AppendAllText(file, date.Date.ToString() + ";" + status + ";" + logTxt + Environment.NewLine)
            with exn ->
                printfn "Couldn't write LogFile: %s" exn.Message
                failwithf "Couldn't write LogFile: %s" exn.Message
        | LocalAndAzure ->
            printfn "Msg %s" logTxt
            match status with
            | Error exn -> trackError fileWriterInfo logMsg exn
            | Ok _ -> trackTrace fileWriterInfo logMsg
            let status =
                match status with
                | Error _ -> "Error"
                | Ok _ -> "Ok"
            try
                let logPath = logPath fileWriterInfo
                if not (Directory.Exists(logPath)) then Directory.CreateDirectory(logPath) |> ignore
                File.AppendAllText(file, date.Date.ToString() + ";" + status + ";" + logTxt + Environment.NewLine)
            with exn ->
                printfn "Couldn't write LogFile: %s" exn.Message
                failwithf "Couldn't write LogFile: %s" exn.Message

    let moveOldLogFiles fileWriterInfo =
        let destinationDirectory = Path.GetFullPath(logArchivPath fileWriterInfo)
        let sourceDirectoryRoot = Path.GetFullPath(logPath fileWriterInfo)
        let searchPattern = @"*.txt"
        let getFileName sourceFile = FileInfo(sourceFile).Name
        let getLogFiles = Directory.GetFiles(sourceDirectoryRoot, searchPattern, SearchOption.TopDirectoryOnly)

        let getDestinationFileName sourceFile destinationDirectory =
            let destinationPath = Path.Combine(destinationDirectory, getFileName sourceFile)
            printfn "DestPath %s" destinationPath
            destinationPath

        let copyLogFiles sourceFile destinationDirectory =
            File.Copy(sourceFile, getDestinationFileName sourceFile destinationDirectory, true) |> ignore
        let deleteOldLogFiles sourceFile = File.Delete sourceFile
        getLogFiles
        |> Array.iter (fun logFile ->
            printfn "File: %s" logFile
            copyLogFiles logFile destinationDirectory
            deleteOldLogFiles logFile)

    let logOk = writeLog (Ok())
    let logError exn = writeLog (Error exn)

    let logWithTimingTask (fn: unit -> Task<'a>) message severity source processMsg operation destination timeSpan fileWriterInfo =
        task {
            let sw = Diagnostics.Stopwatch.StartNew()
            let! res = fn()
            writeLog (Ok()) message severity source processMsg operation destination timeSpan fileWriterInfo
            return res
        }

    let printLogFileTotalTime (stopWatch: Diagnostics.Stopwatch) name fileWriterInfo () =
        printfn "Creating log file: %s" name
        let duration = stopWatch.Elapsed.TotalSeconds
        stopWatch.Stop()
        let logPath = logPath fileWriterInfo
        let path = logPath + (sprintf "log_%s_%s.txt" name (DateTime.Now.ToString("yyyyMMdd")))

        let log =
            sprintf "Total elapsed time: %fs\n\n\n" duration
        File.AppendAllText(path, log)
        printfn "Finished log file: %s" name

    let printArray name array fileWriterInfo () =
        let projDir = Path.Combine(Environment.CurrentDirectory, @"..\..\")
        if not (Directory.Exists(projDir + "logs")) then Directory.CreateDirectory(projDir + "logs") |> ignore
        let logPath = logPath fileWriterInfo
        let path = logPath + (sprintf "logs_query_%s.txt" name)

        let log =
            sprintf "Array: %A\n" array
        File.AppendAllText(path, log)

    ///Printing query duration to logfile
    let printLogFile (stopWatch: Diagnostics.Stopwatch) query querynr func name par length () =
        printfn "Creating log file: %s" name
        let duration = stopWatch.Elapsed.TotalSeconds
        stopWatch.Restart()
        let projDir = Path.Combine(Environment.CurrentDirectory, @"..\..\")
        if not (Directory.Exists(projDir + "logs")) then Directory.CreateDirectory(projDir + "logs") |> ignore
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
            let log =
                sprintf "Logfile for %s\n" name
            File.AppendAllText(path, log)
            printlog query duration func par length
        else
            printlog query duration func par length
        printfn "Finished log file: %s" name
