namespace Chia

open StackExchange.Redis
open FSharp.Control.Tasks.ContextInsensitive
open System.Threading.Tasks
module RedisCache =
    type RedisCache =
        | RedisCache of string
        member this.Connect() =
            match this with
            | RedisCache connectionString ->
                let client = ConnectionMultiplexer.Connect(connectionString)
                try
                    client.GetDatabase()
                with
                | exn ->
                    printfn "Could not connect to Cache database: %s" exn.Message
                    failwithf "Could not connect to Cache database: %s" exn.Message

module RedisHelpers =
    open Newtonsoft.Json
    open FileWriterTypes
    open Chia.FileWriter

    type RedisCache =
        {
          Cache : IDatabase
          Key : string
          FileWriterInfo : FileWriterInfo }
    type RedisCacheData =
        {
          Cache : IDatabase
          Key : string
          FileWriterInfo : FileWriterInfo }

    let inline (!>) (x : ^a) : ^b = ((^a or ^b) : (static member op_Implicit : ^a -> ^b) x)
    /// Setting a value - need to convert both arguments:
    let setString (data:'a, cacheData : RedisCacheData) =
        task {
            let redisKey : RedisKey = !> cacheData.Key

            let redisValue : RedisValue =
                try
                    let json = data |> JsonConvert.SerializeObject
                    !> json
                with exn ->
                    printfn "Error %s" exn.Message
                    let msg = sprintf "Error : Exception %s InnerException : %s" exn.Message exn.InnerException.Message
                    logError exn cacheData.FileWriterInfo msg
                    failwith msg
            cacheData.Cache.StringSet(redisKey, redisValue) |> ignore
        }
    /// Save Cache and Return Data
    let saveCacheAndReturnData (data:'a,cacheData : RedisCacheData) =
        task {
            let! _ = setString (data,cacheData)
            return data

        }
    /// Getting a value - need to convert argument and result:
    let getCachedValue (jsonConverter:string->'a) (cache : RedisCache) =
        task {
            let redisKey : RedisKey = !> cache.Key
            let value = cache.Cache.StringGet(redisKey)
            return value.ToString() |> jsonConverter
        }
    ///Try getting cached data if not create a new cache
    let tryGetCachedData (jsonConverter:string->'a) (cache : RedisCache) (getDataTask: unit -> Task<'a>) =
        task {
            try
                let! cachedData = getCachedValue jsonConverter cache
                return cachedData
            with
            | _ ->
                let! data = getDataTask ()
                let redisCacheData =
                    { Cache = cache.Cache
                      Key = cache.Key
                      FileWriterInfo = cache.FileWriterInfo }
                let! data = saveCacheAndReturnData (data,redisCacheData)
                return data
        }
