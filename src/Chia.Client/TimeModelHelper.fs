namespace Chia.Client


module TimeModelHelper =

    open System
    open Chia.Client.Domain.Time

    type Selection<'a> = { Value: 'a; Text: string }

    let initTimeSpanSelection: Selection<ReportIntervall> list =
        [ { Value = Monthly; Text = "Monatlich" }
          { Value = Dayly; Text = "Täglich" } ]

    let initDateTo, initDateFrom =
        let today =
            DateTime(DateTime.Now.Year, DateTime.Now.Month, DateTime.Now.Day).AddDays(1.)

        printfn "today %A" today
        Some today, Some(today.AddDays(-1.0))

    let initTimeModel =
        printfn "DateTimeOffset %A" (initDateFrom.Value |> DateTimeOffset)
        { ReportIntervall = Dayly
          DateStart = initDateFrom.Value |> DateTimeOffset
          DateEnd = initDateTo.Value |> DateTimeOffset }

    let queryTimeModel (timeModel: TimeModel) =
        //Use UniversalTime
        { timeModel with
              DateStart = timeModel.DateStart.ToUniversalTime()
              DateEnd = timeModel.DateEnd.ToUniversalTime() }
