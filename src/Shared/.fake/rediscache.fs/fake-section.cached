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
                let client = lazy (ConnectionMultiplexer.Connect(connectionString))
                client.Value.GetDatabase()

module RedisHelpers =
    open Newtonsoft.Json
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
          Data : obj
          FileWriterInfo : FileWriterInfo }

    let inline (!>) (x : ^a) : ^b = ((^a or ^b) : (static member op_Implicit : ^a -> ^b) x)
    // Setting a value - need to convert both arguments:
    let setString (cacheData : RedisCacheData) =
        task {
            let redisKey : RedisKey = !> cacheData.Key

            let redisValue : RedisValue =
                try
                    let json = cacheData.Data |> JsonConvert.SerializeObject
                    !> json
                with exn ->
                    printfn "Error %s" exn.Message
                    let msg = sprintf "Error : Exception %s InnerException : %s" exn.Message exn.InnerException.Message
                    logError exn cacheData.FileWriterInfo msg
                    failwith msg
            cacheData.Cache.StringSet(redisKey, redisValue) |> ignore
        }
    // Save Cache and Return Data
    let saveCacheAndReturnData (cacheData : RedisCacheData) =
        task {
            let! _ = setString cacheData
            return cacheData.Data

        }
    // Getting a value - need to convert argument and result:
    let getCachedValue (cache : RedisCache) =
        task {
            let redisKey : RedisKey = !> cache.Key
            let value = cache.Cache.StringGet(redisKey) |> (!>)
            return value |> JsonConvert.DeserializeObject<'a>
        }
    //Try getting cached data if not create a new cache
    let tryGetCachedData (cache : RedisCache) (getDataTask: Task<obj>) =
        task {
            try
                let! cachedData = getCachedValue cache
                return cachedData
            with
            | _ ->
                let! getData = getDataTask
                let redisCacheData =
                    { Cache = cache.Cache
                      Key = cache.Key
                      Data = getData
                      FileWriterInfo = cache.FileWriterInfo }
                let! data = saveCacheAndReturnData redisCacheData
                return data
        }
