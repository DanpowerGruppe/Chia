namespace Chia

type Source =
    | LocalService
    | LocalServer
    | AzureFunction
    | AzureInfrastucture
    | PiServer
    | Client
    | SPSCommunication
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
    | CustomProcess of string
    member this.Value =
        match this with
        | CustomProcess s -> s
        | _ -> this.ToString().ToLower()
