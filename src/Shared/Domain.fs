namespace Chia

open System

[<AutoOpen>]
module Domain =

    module Logging =
        type DevOption =
            | Local
            | Azure
            | LocalAndAzure

    module Config =

        type DevStatus =
            | Development
            | Test
            | PreProductive
            | Productive
            member this.GetValue =
                match this with
                | Development -> "dev"
                | Test -> "test"
                | PreProductive -> "preprod"
                | Productive -> "prod"

        let tryGetEnv key =
            match Environment.GetEnvironmentVariable key with
            | x when String.IsNullOrWhiteSpace x -> None
            | x -> Some x

        let matchEnvironVarToDeployStatus environVar =
            match environVar with
            | Some "Development" -> Development
            | Some "Test" -> Test
            | Some "PreProductive" -> PreProductive
            | Some "Productive" -> Productive
            | environVar ->
                printfn "unmatched EnvironVar %A, please choose between Test and Productive " environVar
                failwithf "unmatched EnvironVar %A, please choose between Test and Productive " environVar

        let getDevStatusFromEnv = tryGetEnv "status" |> matchEnvironVarToDeployStatus

    module Time =

        type ReportIntervall =
            | Dayly
            | Weekly
            | Monthly
            | Quarterly
            | Halfyearly
            | Yearly

        type TimeFilters =
            { StartDate: string
              StartDateLeavingPlants: string
              EndDate: string
              EndDateLeavingPlants: string
              EndDateMinusOneDay: string option
              StartVuPeriode: int
              EndVuPeriode: int
              EndVuPeriodeLast: int option
              EndVuPeriodeQuotes: int }

        type TimeSpans =
            | Year
            | Halfyear
            | Quarter
            | Month
            | Week
            | Day

        type Aggregation =
            | Accumulated
            | Explicit

    module Ids =
        type ReportId =
            | ReportId of reportId: int
            member this.GetValue = (fun (ReportId id) -> id) this
            member this.GetValueAsString = (fun (ReportId id) -> string id) this


        type SortableRowKey =
            | SortableRowKey of string
            member this.GetValue = (fun (SortableRowKey id) -> id) this

        module SortableRowKey =
            let toRowKey (dateTime: DateTime) =
                String.Format("{0:D19}", DateTime.MaxValue.Ticks - dateTime.Ticks) |> SortableRowKey
            let toDate (SortableRowKey ticks) = DateTime(DateTime.MaxValue.Ticks - int64 ticks)
