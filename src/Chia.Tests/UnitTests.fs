module UnitTests

open Expecto
open Chia.TimeCalculation.Utils
open Chia.Domain.Time
open Chia.Infrastructure
open Chia.FileWriter
open Chia.Domain.Config
open Chia.Domain.Logging
open Farmer
open Chia.CreateTable
open Chia.TableStorage
open Microsoft.WindowsAzure.Storage.Table
open Chia.Domain.Ids
open System
open Chia.PostToQueue
open Chia.GetTableEntry
open Chia.InitBuilder

let fileWriterConfig = initWriter {
    devStatus Development
    companyInitials "dp"
    projectName "TestChia"
    devOption (Azure "aiKey")
}
let azAccount = azConnection fileWriterConfig Location.WestEurope
[<Literal>]
let TestTable = "TestTable"

type TestData = {
  PartKey : string
  RowKey :  SortableRowKey
  Date : DateTimeOffset
  Value : float
  Text : string
}

[<Tests>]
let simpleTest =
  testList "Chia" [
    testCase "FileWriterConfig" <| fun () ->
        Expect.isNotEmpty fileWriterConfig.ProjectName.Value "FileWriter"
    testCase "Create Table" <| fun () ->
        let testTable = getTable TestTable azAccount
        Expect.isNotEmpty testTable.Name "TableName"
    testTask "Delete Table" {
        let! deleted = deleteTable TestTable azAccount
        Expect.isTrue deleted "Deleted Table"
    }
    testTask "Insert test data to table and read data from the table" {
        let testTable = getTable TestTable azAccount
        let testData =  {
          PartKey = "PartKey"
          RowKey = DateTime.Now |> SortableRowKey.toRowKey
          Date = DateTimeOffset.Now
          Value = 0.2
          Text = "isWorking"
        }

        let tableMapper (testData: TestData) =
          DynamicTableEntity(testData.PartKey, testData.RowKey.GetValue)
          |> setDateTimeOffsetProperty "Date" testData.Date
          |> setDoubleProperty "Value" testData.Value
          |> setStringProperty "Text" testData.Text

        let! _ = saveData tableMapper testTable fileWriterConfig testData
        let mapTestData entity : TestData =
              { Date = getDateTimeOffsetProperty "Date" entity
                PartKey = entity.PartitionKey
                RowKey = SortableRowKey entity.RowKey
                Text = getStringProperty "Text" entity
                Value = getDoubleProperty "Value" entity }
        let! values = getValues mapTestData testTable
        let data =
            values
            |> Array.head
        Expect.equal data testData "Insert test data is the same the readed testdata"
    }
    testTask "PostToQueue" {
      let testQueue = getQueue azAccount "test-queue-msg"
      let content = ["Data1";"Data2"]
      do! postToQueue testQueue content
    }
    testCase "ReportIntervall should be equal" <| fun () ->
      let expected = "monatlich"
      Expect.equal expected (matchReportIntervall Monthly) "monatlich = monatlich"
  ]
