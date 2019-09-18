module UnitTests

open Expecto
open Goji.TimeCalculation
open Goji.Domain.Time

[<Tests>]
let simpleTest =
  testCase "ReportIntervall should be equal" <| fun () ->
    let expected = "monatlich"
    Expect.equal expected (matchReportIntervall Monthly) "monatlich = monatlich"