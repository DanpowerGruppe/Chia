namespace Goji
    open System
    module Domain = 
        module Logging = 
          type DevOption =
            | Local
            | Azure
        module Config =

            type DevStatus =
            | Productive
            | Development

            let masterStatus = Development
        module Time = 

            type ReportIntervall =
                | Dayly
                | Weekly
                | Monthly
                | Quarterly
                | Halfyearly
                | Yearly

            type TimeFilters =
                { StartDate : string
                  EndDate : string
                  EndDateMinusOneDay : string option
                  StartVuPeriode : int
                  EndVuPeriode : int
                  EndVuPeriodeLast : int option
                  EndVuPeriodeQuotes : int }

            type TimeSpans =
                | Year
                | Halfyear
                | Quarter
                | Month
                | Week
                | Day
        module Ids =
            type ReportId =
                | ReportId of reportId : int
                member this.GetValue = (fun (ReportId id) -> id) this
                member this.GetValueAsString = (fun (ReportId id) -> string id) this


            type SortableRowKey =
                | SortableRowKey of string
                member this.GetValue = (fun (SortableRowKey id) -> id) this
        module SortableRowKey =
            let toRowKey (dateTime : DateTime) =
                String.Format("{0:D19}", DateTime.MaxValue.Ticks - dateTime.Ticks) |> Ids.SortableRowKey
            let toDate (Ids.SortableRowKey ticks) = DateTime(DateTime.MaxValue.Ticks - int64 ticks)    
