module Server.Tests

open Expecto
open Chia
open TimeCalculation.Utils
open Infrastructure
open Farmer
open CreateTable
open TableStorage
open PostToQueue
open GetTableEntry
open InitBuilder
open Shared.Time
open Shared.Config
open Shared.Logging
open Shared.Ids
open Microsoft.WindowsAzure.Storage.Table
open System
open Chia.Shared.Config.EnviromentHelper


let fileWriterConfig =
    initWriter {
        devStatus Development
        companyInitials "dp"
        projectName "TestChia"
        devOption (Azure "aiKey")
    }

let azAccount =
    azConnection fileWriterConfig Location.WestEurope

[<Literal>]
let TestTable = "TestTable"

type TestData =
    { PartKey: string
      RowKey: SortableRowKey
      Date: DateTimeOffset
      Value: float
      Text: string }

[<Tests>]
let simpleTest =
    testList
        "Chia"
        [ testCase "Enviroment should be Devlopment"
          <| fun () ->
            let actual = getDevStatusFromEnv
            let expected = Development
            Expect.equal actual expected "Enviroment is Development"
          testCase "FileWriterConfig"
          <| fun () -> Expect.isNotEmpty fileWriterConfig.ProjectName.Value "FileWriter"
          testCase "FileWriterConfigLocal"
          <| fun () ->
            let fileWriterConfigLocal =
                initWriter {
                    devStatus getDevStatusFromEnv
                    companyInitials "dp"
                    projectName "TestChia"
                    devOption Local
                }
            Expect.isNotEmpty fileWriterConfigLocal.ProjectName.Value "FileWriter"
          testCase "Create Table"
          <| fun () ->
              let testTable = getTable TestTable azAccount
              Expect.isNotEmpty testTable.Name "TableName"
          testTask "Delete Table" {
              let! _ = deleteTable TestTable azAccount
              Expect.isNotEmpty "Deleted" "Deleted Table" //Needs to be fixed
          }
          testTask "Insert test data to table and read data from the table" {
              let testTable = getTable TestTable azAccount

              let testData =
                  { PartKey = "PartKey"
                    RowKey = DateTime.UtcNow |> SortableRowKey.toRowKey
                    Date = DateTime.UtcNow |> DateTimeOffset
                    Value = 0.2
                    Text = "isWorking" }

              let tableMapper (testData: TestData) =
                  DynamicTableEntity(testData.PartKey, testData.RowKey.GetValue)
                  |> setDateTimeOffsetProperty "Date" testData.Date
                  |> setDoubleProperty "Value" testData.Value
                  |> setStringProperty "Text" testData.Text

              let! _ = saveData tableMapper testTable fileWriterConfig testData

              let mapTestData entity: TestData =
                  { Date = getDateTimeOffsetProperty "Date" entity
                    PartKey = entity.PartitionKey
                    RowKey = SortableRowKey entity.RowKey
                    Text = getStringProperty "Text" entity
                    Value = getDoubleProperty "Value" entity }

              let! values = getValues mapTestData testTable

              let data = values |> Array.head
              Expect.equal data testData "Insert test data is the same the readed testdata"
          }
          testTask "Insert test data as batch to table and read data from the table" {
              let testTable = getTable TestTable azAccount

              let testData =
                  [| { PartKey = "PartKey"
                       RowKey = DateTime.UtcNow |> SortableRowKey.toRowKey
                       Date = DateTime.UtcNow |> DateTimeOffset
                       Value = 0.2
                       Text = "isWorking" } |]

              let tableMapper (testData: TestData) =
                  DynamicTableEntity(testData.PartKey, testData.RowKey.GetValue)
                  |> setDateTimeOffsetProperty "Date" testData.Date
                  |> setDoubleProperty "Value" testData.Value
                  |> setStringProperty "Text" testData.Text

              let! _ = saveDataArrayBatch tableMapper testTable fileWriterConfig testData

              let mapTestData entity: TestData =
                  { Date = getDateTimeOffsetProperty "Date" entity
                    PartKey = entity.PartitionKey
                    RowKey = SortableRowKey entity.RowKey
                    Text = getStringProperty "Text" entity
                    Value = getDoubleProperty "Value" entity }

              let! values = getValues mapTestData testTable

              let data = values |> Array.head
              Expect.equal data testData.[0] "Insert test data is the same the readed testdata"
          }
          testTask "Insert test data as batch to table and read data from the table" {
              let testTable = getTable TestTable azAccount

              let testData =
                  [| { PartKey = "PartKey"
                       RowKey = DateTime.UtcNow |> SortableRowKey.toRowKey
                       Date = DateTime.UtcNow |> DateTimeOffset
                       Value = 0.2
                       Text = "isWorking" } |]

              let tableMapper (testData: TestData) =
                  DynamicTableEntity(testData.PartKey, testData.RowKey.GetValue)
                  |> setDateTimeOffsetProperty "Date" testData.Date
                  |> setDoubleProperty "Value" testData.Value
                  |> setStringProperty "Text" testData.Text

              let! _ = saveDataArrayBatch tableMapper testTable fileWriterConfig testData

              let mapTestData entity: TestData =
                  { Date = getDateTimeOffsetProperty "Date" entity
                    PartKey = entity.PartitionKey
                    RowKey = SortableRowKey entity.RowKey
                    Text = getStringProperty "Text" entity
                    Value = getDoubleProperty "Value" entity }

              let! values = oneValueByRowKey (DateTime.UtcNow |> SortableRowKey.toRowKey) mapTestData testTable

              Expect.equal values (testData |> Array.tryHead) "Insert test data is the same the readed testdata"
          }
          testTask "PostToQueue" {
              let testQueue = getQueue azAccount "test-queue-msg"
              let content = [ "Data1"; "Data2" ]
              do! postToQueue testQueue content
          }
          testCase "ReportIntervall should be equal"
          <| fun () ->
              let expected = "monatlich"
              Expect.equal expected (matchReportIntervall Monthly) "monatlich = monatlich"
          testCase "Write a starting log"
          <| fun () ->
              Log.logStarting ("Starting to get Data", LocalServer, Get, AzureTable, fileWriterConfig)
              Expect.isNotEmpty "Deleted" "Deleted Table"
          testCase "Write a error log"
          <| fun () ->
              let error =
                  try
                      1 / 0 |> ignore
                      Ok "Ok"
                  with exn ->
                      let msg =
                          sprintf "Your error message: %s" exn.Message

                      Log.logCritical (msg, LocalService, Get, AzureTable, exn, fileWriterConfig)
                      Error "Error"

              Expect.isError error "Show write error log" ]

let config =
    { defaultConfig with
          runInParallel = false }

[<EntryPoint>]
let main argv = runTestsInAssembly config argv
