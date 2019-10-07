namespace Chia

open StackExchange.Redis

module RedisCache =
    type RedisCache =
        | RedisCache of string
        member this.Connect() =
            match this with
            | RedisCache connectionString ->
                let client = lazy (ConnectionMultiplexer.Connect(connectionString))
                client.Value.GetDatabase()

module RedisHelpers =
    open Newtonsoft.Json
    open Chia.FileWriter

    type RedisCacheData =
        { Key : string
          Data : obj
          FileWriterInfo : FileWriterInfo }

    let inline (!>) (x : ^a) : ^b = ((^a or ^b) : (static member op_Implicit : ^a -> ^b) x)

    // Setting a value - need to convert both arguments:
    let setString (cache : IDatabase, data : RedisCacheData) =
        let redisKey : RedisKey = !>data.Key

        let redisValue : RedisValue =
            try
                let json = data |> JsonConvert.SerializeObject
                !>json
            with exn ->
                printfn "Error %s" exn.Message
                let msg = sprintf "Error : Exception %s InnerException : %s" exn.Message exn.InnerException.Message
                logError exn data.FileWriterInfo msg
                failwith msg
        cache.StringSet(redisKey, redisValue) |> ignore

    // Getting a value - need to convert argument and result:
    let getString (cache : IDatabase, key : string) =
        let redisKey : RedisKey = !>key
        let value = cache.StringGet(redisKey) |> (!>)
        value |> JsonConvert.DeserializeObject<'a>
