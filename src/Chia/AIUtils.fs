namespace Chia

module AIUtils =

    open Microsoft.ApplicationInsights.DataContracts
    open InitBuilder

    let eventMsg name props (fileWriterConfig: FileWriterConfig) =
        match fileWriterConfig.Client with
        | Some client ->
            let event = EventTelemetry()
            event.Name <- name
            for key, value in props do
                event.Properties.Add(key, value)
            client.TrackEvent(event)
        | None ->
            printfn "please parse in a AIKey"
            failwithf "please parse in a AIKey"

    let errorMsg error props (fileWriterConfig: FileWriterConfig) =
        match fileWriterConfig.Client with
        | Some client ->
            let props = props |> dict
            client.TrackException(error, props)
        | None ->
            printfn "please parse in a AIKey"
            failwithf "please parse in a AIKey"
