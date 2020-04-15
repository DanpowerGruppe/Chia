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
let devStatus = Development
let fileWriterInfo = initFileWriter devStatus "dp" "TestChia" Local ""
let storageConnString = createNewOrTakeExistingInfrastruture fileWriterInfo WestEurope
let connected =
    let connection = AzureConnection storageConnString
    connection.Connect()

[<Literal>]
let TestTable = "TestTable"
[<Tests>]
let simpleTest =
  testList "Chia" [
    testCase "FileWriterInfo" <| fun () ->
        Expect.isNotEmpty fileWriterInfo.ProjectName.Value "FileWriter"
    testCase "Create Infrastructure" <| fun () ->
        Expect.isNotEmpty storageConnString "StorageAccount"
    testCase "Create Table" <| fun () ->
        let testTable = getTable TestTable fileWriterInfo connected
        Expect.isNotEmpty testTable.Name "TableName"
    testCase "ReportIntervall should be equal" <| fun () ->
      let expected = "monatlich"
      Expect.equal expected (matchReportIntervall Monthly) "monatlich = monatlich"
  ]
