namespace Chia

type Source =
    | LocalService
    | LocalServer
    | AzureFunction
    | AzureInfrastucture
    | PiServer
    | Client
    | SPSCommunication
    | NoSource
    | CustomSource of string
    member this.Value =
        match this with
        | CustomSource s -> s
        | _ -> this.ToString().ToLower()

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
    | NoOperation
    | CustomOperation of string
    member this.Value =
        match this with
        | CustomOperation s -> s
        | _ -> this.ToString().ToLower()

type Destination =
    | AzureTable
    | QueueTable
    | BlobTable
    | SqlTable
    | LocalStorage
    | EventHub
    | NoDestination
    | CustomDestination of string
    member this.Value =
        match this with
        | CustomDestination s -> s
        | _ -> this.ToString().ToLower()

type Process =
    | Finished
    | Information
    | Incomplete
    | Starting
    | NoProcess
    | CustomProcess of string
    member this.Value =
        match this with
        | CustomProcess s -> s
        | _ -> this.ToString().ToLower()
