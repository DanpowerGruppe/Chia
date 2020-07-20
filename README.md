# Chia - HelperFunctions for reporting

[![Build Status](https://dev.azure.com/DanpowerEnergyData/Chia/_apis/build/status/DanpowerGruppe.Chia?branchName=master)](https://dev.azure.com/DanpowerEnergyData/Chia/_build/latest?definitionId=4&branchName=master)

## Available Packages:

| Library  | Version |
| ------------- | ------------- |
| Chia  | [![nuget - Chia](https://img.shields.io/nuget/v/Chia.svg?colorB=green)](https://www.nuget.org/packages/Chia/) |
| Chia.Client  | [![nuget - ChiaClient](https://img.shields.io/nuget/v/Chia.Client.svg?colorB=green)](https://www.nuget.org/packages/Chia.Client/)  |
| Chia.NetStandard  | [![nuget - ChiaNetStandard](https://img.shields.io/nuget/v/Chia.NetStandard.svg?colorB=green)](https://www.nuget.org/packages/Chia.NetStandard)  |


Chia contains HelperFunctions for reporting. Chia contains some Azure Storage functions, logging features and some excel utils.

## FileWriter

Initialize your FileWriter instant with `initFileWriter`.
If you want to log to ApplicationInsight you have to create a new Application Insight resource in Azure and set your ApplicationInsights key.

```fs
open Chia.Domain.Logging
open Chia.Domain.Config
open Chia.InitBuilder
let devStatus = getDevStatusFromEnv  /// Get your devStatus from you enviroment variable. For example pass in an enviroment variable in Fake --> '-e devStatus=Productive
let fileWriterConfig =
    initWriter {
        devStatus Development
        companyInitials "dp"
        projectName "TestChia"
        devOption (Azure "aiKey")
```

## Infrastructure

Chia now can help you to set up your Azure infractruture by using Chia on top of Farmer. You simply create a new FileWriter and then Chia will create a fresh Azure storageaccount in your prefered location. Chia will connect to your storage account and you don't need to add you storage account at all.
Here is an example:

```fs
open Chia.Infrastructure
open Chia.FileWriter
open Chia.Domain.Config
open Chia.Domain.Logging
open Farmer
let devStatus = Development
let fileWriterConfig =
    initWriter {
        devStatus Development
        companyInitials "dp"
        projectName "TestChia"
        devOption (Azure "aiKey")
let azAccount = azConnection fileWriterConfig Location.WestEurope
```

## Know issues

Currently Chia doesn't support F# projects which are using TypeProviders. There gonna cause issues with Farmer.

## Log

Once you set configured your filewriter you can now log to Application Insight or just to a local file

There are three many log functions. `logStarting`, `logFinished` and `logCritical`.

The log function is using categories for clustering events in ApplicationInsights. This will help you to get the most out of the ApplicationInsight dashboard and LogAnalytics.

If you want to log a information that a process is starting you can use `logStarting` like this:

```fs
Log.logStarting("Starting to get Data",LocalServer,Get,AzureTable,fileWriterConfig)
```

If a process finished as expected use `logFinished`:

```fs
Log.logFinished("Finisehd receiving Data",LocalServer,Get,AzureTable,fileWriterConfig)
```

If a process crashed unexpected use can track the error message with `logCritical`:

```fs
try
    let trySomething = unsafe ()
with
| exn ->
    let msg = sprintf  "Your error message: %s" exn.Message
    Log.logCritical (msg,LocalService,LocalServer,Get,AzureTable,exn,fileWriterConfig)
    failwith msg
```

The logger uses following clusters.

```fs
Log.logStarting("UsefullMessage",Source,Operation,Destination,filewriterInfo)
```

Here are the implemented descriminated unions:

```fs
type Source =
| LocalService
| LocalServer
| AzureFunction
| AzureInfrastucture
| PiServer
| Client
| SPSCommunication

type Operation =
| Upload
| Download
| Insert
| Query
| Create
| Delete
| Calculation
| Post
| Get
| Restart
| Stop

type Destination =
| AzureTable
| QueueTable
| BlobTable
| SqlTable
| LocalStorage
| EventHub
```

## CreateTable

Helper to create a Azure table:

First connect to your storage account:
```fs
open Chia.CreateTable
let connected =
    let connection = AzureConnection StorageAccount.storageConnString
    connection.Connect()
```
Now you can create your Azure table like this:

```fs
let azureTable = getTable "TableName" fileWriterConfigAzure connected
```

## CreateBlob

Helper to create a Azure blobs:

First create your blob container:

```fs
open Chia.CreateBlob
let containerInfo = {   StorageConnString = StorageConnString = StorageAccount.storageConnString
                        ContainerName = "ContainerName"}
let myContainer = getContainer containerInfo
```

Now you can get a list of all you blobs in the container like this:

```fs
let blobItems = getBlobs myContainer
```

## GetTableEntry

Helper to query a Azure tables:

With the GetTableEntry module you can easily query Azure Tables.

Get just on single tableValue like this:
```fs
let! value = getValue (request.PartKey, request.RowKey) azureTable
```

Get all values in a table by using a table mapper.
First you have to define you mapper:

```fs
type Mapper = {
    PartKey : string
    RowKey : Ids.SortableRowKey
}

let mapper (entity : DynamicTableEntity) : Mapper =
    { PartyKey = entity.PartitionKey
      RowKey = SortableRowKey entity.RowKey

let! values = getValues mapper azureTable
```

You can also get all values by one rowKey like this:

```fs
let valuesByRowKey = getValuesByRowKey rowKey mapper azureTable
```

If you want to create more complex queries you can just parse in a TableQuery Filter.

First define your filter:

```fs
let filter partKey = TableQuery.GenerateFilterCondition("PartitionKey", QueryComparisons.Equal, partKey)
let filteredValues partKey = getValuesWithFilter (filter partKey) azureTable
```

## PostToQueue

You can use Chia to sent out a AzureQueue message like this:

```fs
open Chia.PostToQueue
open Chia.CreateTable


let connected =
    let connection = AzureConnection StorageAccount.storageConnString
    connection.Connect()

[<Literal>]
let SendMail = "sendmail-queue"

let sendQueue = getQueue connected SendMail fileWriterConfig
```

## RedisCache

Helper to create or directly query a RedisCache:

To create or read a Redis values with a Redis Key you first have to create a Redis cache info:

```fs
let cacheInfo : RedisCache = {
    Cache = Redis.cache
    Key = key
    FileWriterInfo = fileWriterConfig }
```

To deserialze your Redis values to your pass in a System.Text.Json mapper.
You also should pass in a task to receive your data. The function tries to find the cache in Redis. If there is no Redis cache it will create a new cache by executing you task. The following example showes how to reveice a a Plant array directly out of Redis or creates a new cache if theres no existing cache and returns the Plant array.

```fs
let! plants = tryGetCachedData JsonSerializer.Parse<Plant[]> cacheInfo getPlants
```

## EventHub

You can use Chia to sent out a event to Azure Event Hubs like this:

```fs
open Chia.EventHubs

let eventHubClient = getEventHubClient "EventHubSASConnectionString"

type Data = int

let data = 100

do! pushEvent (eventHubClient,data,fileWriterConfigAzure)
do! pushSingleEvent (eventHubClient,data,fileWriterConfigAzure)

```

## ExcelUtils

Mini Helper to start and ExcelApp using the EPPlus package:

Start your excel app like this:

```fs
let excelPackage = startExcelApp ()
```

## Example for a bigger TableMapper

If you want to map your data from Azure to your specific domain types you could do it like this.

```fs
open Chia.CreateTable

type Address =
    { LocationId : Ids.LocationId
      PostalCode : string
      StreetNr : int option
      Additions : string option
      Street : string option
      Location : string option
      Country : string option
      FedState : string option }

let mapAddress (entity : DynamicTableEntity) : Address =
    { LocationId = LocationId (entity.PartitionKey |> int64)
      PostalCode = entity.RowKey
      StreetNr = getOptionalIntProperty "StreetNr" entity
      Street = getOptionalStringProperty "Street" entity
      Additions = getOptionalStringProperty "Additions" entity
      Location = getOptionalStringProperty "Location" entity
      Country = getOptionalStringProperty "Country" entity
      FedState = getOptionalStringProperty "FedState" entity }
```
