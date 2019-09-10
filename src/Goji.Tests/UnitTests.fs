module UnitTests

open Expecto
open Goji
open GojiTests


let testReport = 
    report {
        sheetInsert testSheetInsert
        testReportData expectoTests
        worksheetList testWorkSheets
        logSuccess "Finished QuarterlyReportExternal"
    }

[<Tests>]
let tests =
  printfn "Starting Tests"  
  testTask "Report should be executed" {
       do! testReport     
    }
