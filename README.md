# Chia - HelperFunctions for reporting

[![nuget - Chia](https://img.shields.io/nuget/v/Chia.svg?colorB=green)](https://www.nuget.org/packages/Chia/)
[![nuget - ChiaClient](https://img.shields.io/nuget/v/Chia.Client.svg?colorB=green)](https://www.nuget.org/packages/Chia.Client/)

Chia contains HelperFunctions for reporting. Chia contains some Azure Storage functions, logging features and some excel utils.

## FileWriter

Initialize your FileWriter instant with `initFileWriter`:

```fs
open Chia.Domain.Logging
open Chia.Domain.Config
open Chia.FileWriter
let devStatus = Development
let fileWriterInfo = initFileWriter devStatus "ProjectName" Local
let fileWriterInfoAzure = initFileWriter devStatus "PIvy" Azure
```

You can now use an `logOk` and `logError` like this:

```fs
logOk fileWriterInfo ("Something went ok!")
```

```fs
try
    let trySomething = unsafe ()
with
| exn ->
    let msg = sprintf  "Your error message: %s" exn.Message
    logError exn fileWriterInfo msg  //or use fileWriterInfoAzure for logging to Azure
    failwith msg
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
let azureTable = getTable "TableName" fileWriterInfoAzure connected
```

## CreateBlob

Helper to create a Azure blobs:

First create your blob container:

```fs
open Chia.CreateBlob
let myContainer = getContainer (storageConnString,"ContainerName")
```

Now you can get a list of all you blobs in the container like this:

```fs
let blobItems = getBlobs myContainer
```
