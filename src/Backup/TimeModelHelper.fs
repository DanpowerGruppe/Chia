namespace Chia


module TimeModelHelper =

    open System
    open Shared.Time
    open Shared
    let initTimeSpanSelection: Selection<ReportIntervall> list =
        [ { Value = Monthly; Text = "Monatlich" }
          { Value = Daily; Text = "Täglich" } ]

    let initDateTo, initDateFrom =
        let today =
            DateTime(DateTime.Now.Year, DateTime.Now.Month, DateTime.Now.Day).AddDays(1.)

        printfn "today %A" today
        Some today, Some(today.AddDays(-1.0))

    let initTimeModel =
        printfn "DateTimeOffset %A" (initDateFrom.Value |> DateTimeOffset)
        { ReportIntervall = Daily
          DateStart = initDateFrom.Value |> DateTimeOffset
          DateEnd = initDateTo.Value |> DateTimeOffset }

    let queryTimeModel (timeModel: TimeModel) =
        //Use UniversalTime
        { timeModel with
              DateStart = timeModel.DateStart.ToUniversalTime()
              DateEnd = timeModel.DateEnd.ToUniversalTime() }
    let getDateTimeOffsetFromGermanTimeStyle (time: string) =
        try
            let splits =
                time.Split([| '.'; '/' |]) |> Array.map int

            DateTime(splits.[2], splits.[1], splits.[0])
            |> DateTimeOffset
        with _ ->
            let msg =
                sprintf "Datum ist in einem falschen Format (%s)" time

            raise (FormatException(msg))
    let inputToTimeModel (target: string) (text: DateTimeOffset) (timeModel: TimeModel) =
        match target with
        | "from" -> { timeModel with DateStart = text }
        | _ -> timeModel
