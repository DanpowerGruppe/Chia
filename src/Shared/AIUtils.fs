namespace Chia
    module AIUtils =

        open Microsoft.ApplicationInsights.DataContracts
        open Chia
        open FileWriter

        let eventMsg name props (fileWriterInfo:FileWriterInfo) =
            match fileWriterInfo.Client with
            | Some client ->
                let event  = EventTelemetry ()
                event.Name <- name
                for key,value in props do
                    event.Properties.Add(key, value)
                client.TrackEvent (event)
            | None ->
                printfn "please parse in a AIKey"
                failwithf "please parse in a AIKey"
        let errorMsg error props (fileWriterInfo:FileWriterInfo) =
            match fileWriterInfo.Client with
            | Some client ->
                let props = props |> dict
                client.TrackException (error,props)
            | None ->
                printfn "please parse in a AIKey"
                failwithf "please parse in a AIKey"
