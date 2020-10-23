namespace Chia

module ApplicationInsights =
    open Shared.Logging
    open Microsoft.ApplicationInsights
    open Microsoft.ApplicationInsights.Extensibility.PerfCounterCollector.QuickPulse
    open Microsoft.ApplicationInsights.Extensibility

    let startAIAndGetClient (devOption: DevOption) =
        match devOption with
        | Azure key ->
            let config =
                new TelemetryConfiguration(InstrumentationKey = key)

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
        | _ ->
            printfn "if you want to use ApplicationsInsights you have to add an aiKey"
            failwithf "if you want to use ApplicationsInsights you have to add an aiKey"
