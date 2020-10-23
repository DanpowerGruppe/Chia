namespace Chia


module IoTHub =

    open FSharp.Control.Tasks.ContextInsensitive
    open Microsoft.Azure.Devices.Client
    open Newtonsoft.Json

    type IoTHubDeviceClient =
        | IoTHubDeviceClient of string * string * string * TransportType
        member this.Connect() =
            match this with
            | IoTHubDeviceClient (deviceUri, deviceKey, deviceName, transportType) ->
                DeviceClient.Create
                    (deviceUri, DeviceAuthenticationWithRegistrySymmetricKey(deviceName, deviceKey), transportType)

    let pushMessage (deviceClient: DeviceClient, record: 'a) =
        task {
            let msgStr = record |> JsonConvert.SerializeObject

            use msg =
                new Message(System.Text.Encoding.UTF8.GetBytes(msgStr))

            do! deviceClient.SendEventAsync(msg)
        }
