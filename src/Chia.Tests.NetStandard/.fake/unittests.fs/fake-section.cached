module UnitTests

open Expecto
open Chia.TimeCalculation.Utils
open Chia.Domain.Time

[<Tests>]
let simpleTest =
  testCase "ReportIntervall should be equal" <| fun () ->
    let expected = "monatlich"
    Expect.equal expected (matchReportIntervall Monthly) "monatlich = monatlich"
