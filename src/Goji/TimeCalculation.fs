namespace Goji
open Goji
module TimeCalculation =
    open Domain.Time
    open System
    
    //Month calculation
    let startmonthCustom =
        DateTime.Now.AddMonths(-8).ToString("yyyy0MM") |> Convert.ToInt32 //eigentlich -1
    let endmonthCustom =
        DateTime.Now.AddMonths(-7).ToString("yyyy0MM") |> Convert.ToInt32 //eigentlich DateTime.Now
    let currentMonth = DateTime.UtcNow.ToString("yyyy0MM") |> Convert.ToInt32
    let startmonth =
        DateTime.Now.AddMonths(-1).ToString("yyyy0MM") |> Convert.ToInt32
    let endmonth = DateTime.Now.ToString("yyyy0MM") |> Convert.ToInt32
    let startmonthStr = DateTime.Now.AddMonths(-1).ToString("dd/MM/yyyy")
    let endmonthStr =
        DateTime(DateTime.Now.Year, DateTime.Now.AddMonths(-1).Month, DateTime.DaysInMonth(DateTime.Now.Year, DateTime.Now.AddMonths(-1).Month))
            .ToString("dd/MM/yyyy")
    //Week calculation
    let startweek =
        DateTime.Now.AddDays(-7.0).ToString("yyyy0MMdd") |> Convert.ToInt32
    let endweek = DateTime.Now.ToString("yyyy0MMdd") |> Convert.ToInt32
    let lastWeekStr = DateTime.Now.AddDays(-7.0).ToString("dd/MM/yyyy")
    //Day calculation
    let startday =
        DateTime.Now.AddDays(-1.0).ToString("yyyy0MMdd") |> Convert.ToInt32
    let endday = DateTime.Now.ToString("yyyy0MMdd") |> Convert.ToInt32
    let lastDayStr = DateTime.Now.AddDays(-1.0).ToString("dd/MM/yyyy")
    //Calculate TimeCustom
    let dateCustom = DateTime.Now.AddMonths(-8).Date
    let dayCustom = dateCustom.ToString()
    let weekCustom = "KW 9"
    let monthCustom = dateCustom.ToString("MMMM")
    //Calculate Quarter
    let date = DateTime.Now.AddMonths(-1).Date
    let day = date.ToString()
    let week = "KW 9" // what the hell is this?
    let month = date.ToString("MMMM")
    let monthInt = date.ToString("MM") |> Convert.ToInt32
    let lastquarterdate = (date.AddMonths(-3))
    let lastquarter = (lastquarterdate.Month + 2) / 3
    let quarter = (date.Month + 2) / 3
    let quarterString = sprintf "%i. Quartal" quarter
    let quarterStartMonth = 3 * quarter - 2
    let quarterStartDate = DateTime(date.Year, quarterStartMonth, 1)
    let quarterLastDate = quarterStartDate.AddMonths(3).AddDays(-1.0)
    //Quarter calculation
    let startquarterCustom =
        DateTime.Now.AddMonths(-4).ToString("yyyy0MM") |> Convert.ToInt32 //eigentlich -3
    let endquarterCustom =
        DateTime.Now.AddMonths(-1).ToString("yyyy0MM") |> Convert.ToInt32 //eigentlich DateTime.Now

    let dateTimeQuarterYear =
        if DateTime.Now.Month < 4 then DateTime.Now.AddYears(-1).Year
        else DateTime.Now.Year

    let startquarterStr =
        DateTime(dateTimeQuarterYear, 1, 1).ToString("dd/MM/yyyy")
    let startquarterStrExp =
        DateTime(dateTimeQuarterYear, (quarter - 1) * 3 + 1, 1)
            .ToString("dd/MM/yyyy")
    let endquarterStr =
        DateTime(dateTimeQuarterYear, DateTime.Now.AddMonths(-1).Month, DateTime.DaysInMonth(DateTime.Now.Year, DateTime.Now.AddMonths(-1).Month))
            .ToString("dd/MM/yyyy")
    let startquarterStrLeavingPlants =
        DateTime(dateTimeQuarterYear, 12, 31).ToString("dd/MM/yyyy")
    let endquarterStrLeavingPlants =
        DateTime(dateTimeQuarterYear, DateTime.Now.AddMonths(-1).Month, DateTime.DaysInMonth(dateTimeQuarterYear, DateTime.Now.AddMonths(-1).Month) - 1)
            .ToString("dd/MM/yyyy")
    let startyearStrLeavingPlants =
        DateTime(dateTimeQuarterYear, 1, 1).ToString("dd/MM/yyyy")
    let endyearStrLeavingPlants =
        DateTime(dateTimeQuarterYear, 1, 1).ToString("dd/MM/yyyy")
    let startquarter =
        DateTime(dateTimeQuarterYear, 1, 1).ToString("yyyy0MM")
        |> Convert.ToInt32
    let startquarterExp =
        DateTime(dateTimeQuarterYear, (quarter - 1) * 3 + 1, 1)
            .ToString("yyyy0MM") |> Convert.ToInt32

    let endquarter =
        if monthInt = 12 then
            DateTime(dateTimeQuarterYear, DateTime.Now.Month, DateTime.DaysInMonth(dateTimeQuarterYear, DateTime.Now.Month))
                .ToString("yyyy013") |> Convert.ToInt32
        else
            DateTime(dateTimeQuarterYear, DateTime.Now.AddMonths(-1).Month, DateTime.DaysInMonth(dateTimeQuarterYear, DateTime.Now.AddMonths(-1).Month))
                .ToString("yyyy0MM") |> Convert.ToInt32

    let endthisyear =
        DateTime(dateTimeQuarterYear + 1, 1, 1).ToString("yyyy0MM")
        |> Convert.ToInt32
    let endquarterQuotes = DateTime.Now.ToString("yyyy0MM") |> Convert.ToInt32
    let calcEndQuarterStr itter =
        sprintf "%i.%i.%i"
            (DateTime.DaysInMonth(dateTimeQuarterYear, ((itter) * 3)))
            ((itter) * 3) dateTimeQuarterYear
    let calcStartQuarterFirstDayStr itter =
        sprintf "%i.%i.%i" 1 ((itter - 1) * 3 + 1) dateTimeQuarterYear
    let calcEndQuarter itter =
        DateTime(dateTimeQuarterYear, itter * 3, 1).AddMonths(1)
            .ToString("yyyy0MM") |> Convert.ToInt32

    let halfyear =
        let thismonth = DateTime.Now.Date.Month
        match thismonth with
        | month when month < 6 -> "1. Halbjahr"
        | month when month > 6 -> "2. Halbjahr"
        | _ -> "Halbjahr nicht richtig"

    let dateTimeYear = DateTime.Now.AddYears(-1).Year
    //Year calculation
    let lastyear =
        DateTime(DateTime.Now.AddYears(-2).Year, 1, 1).ToString("yyyy")
    let year = DateTime(DateTime.Now.AddYears(-1).Year, 1, 1).ToString("yyyy")
    let thisyear = DateTime(DateTime.Now.Year, 1, 1).ToString("yyyy")
    let lastyearint =
        DateTime.Now.AddYears(-1).ToString("yyyy001") |> Convert.ToInt32
    let yearint = DateTime.Now.ToString("yyyy001") |> Convert.ToInt32
    let startyear =
        DateTime(dateTimeYear, 1, 1).ToString("yyyy0MM") |> Convert.ToInt32
    let endyear =
        DateTime(dateTimeYear + 1, 1, 1).ToString("yyyy0MM") |> Convert.ToInt32
    let endyearQuotes =
        DateTime(dateTimeYear + 1, 1, 1).ToString("yyyy0MM") |> Convert.ToInt32 //Needs to be fixed
    let startthisyear =
        DateTime(DateTime.Now.Year, 1, 1).ToString("yyyy0MM") |> Convert.ToInt32

    let endthisyearStr =
        if DateTime.Now.Month < 4 then
            DateTime(DateTime.Now.Year - 1, 12, 31).ToString("dd/MM/yyyy")
        else DateTime(DateTime.Now.Year, 12, 31).ToString("dd/MM/yyyy")

    let startyearstring = DateTime(dateTimeYear, 1, 1).ToString("dd/MM/yyyy") //"01/01/2016"
    let endyearstring = DateTime(dateTimeYear, 12, 31).ToString("dd/MM/yyyy")
    let lastYearQuarterNr = 4
    let workingHours = quarter * 2160 |> System.Convert.ToDouble

    //Halfyear calculation
    let dateTimeHalfMonth =
        if DateTime.Now.Month < 7 then 7
        else 1

    let dateTimeHalfYear =
        if DateTime.Now.Month < 7 then DateTime.Now.Year - 1
        else DateTime.Now.Year

    let starthalfyear =
        DateTime(dateTimeHalfYear, dateTimeHalfMonth, 1).ToString("yyyy0MM")
        |> Convert.ToInt32
    let starthalfyearStr =
        DateTime(dateTimeHalfYear, dateTimeHalfMonth, 1).ToString("dd/MM/yyyy")
    let endhalfyear =
        DateTime(dateTimeHalfYear, dateTimeHalfMonth, 1).AddMonths(6)
            .ToString("yyyy0MM") |> Convert.ToInt32
    let endhalfyearStr =
        DateTime(dateTimeHalfYear, dateTimeHalfMonth, 1).AddMonths(6)
            .ToString("dd/MM/yyyy")
    let endhalfyearQuotes =
        DateTime(dateTimeHalfYear, dateTimeHalfMonth, 1).AddMonths(6)
            .ToString("yyyy0MM") |> Convert.ToInt32 //Need to be fixed!

    type Aggregation =
        | Accumulated
        | Explicit

    let timeFilter (reportIntervall : ReportIntervall) aggregation =
        match reportIntervall with
        | Quarterly ->
            { StartDate =
                  match aggregation with
                  | Accumulated -> startquarterStr
                  | Explicit -> startquarterStrExp
              EndDate = endquarterStr
              EndDateMinusOneDay = Some endthisyearStr
              StartVuPeriode =
                  match aggregation with
                  | Accumulated -> startquarter
                  | Explicit -> startquarterExp
              EndVuPeriode = endquarter
              EndVuPeriodeLast = Some endthisyear
              EndVuPeriodeQuotes = endquarterQuotes }
        | Monthly ->
            { StartDate = startmonthStr
              EndDate = endmonthStr
              EndDateMinusOneDay = None
              StartVuPeriode = startmonth
              EndVuPeriode = endmonth
              EndVuPeriodeLast = Some endmonth
              EndVuPeriodeQuotes = endmonth }
        | Halfyearly ->
            { StartDate = starthalfyearStr
              EndDate = endhalfyearStr
              EndDateMinusOneDay = None
              StartVuPeriode = starthalfyear
              EndVuPeriode = endhalfyear
              EndVuPeriodeLast = Some endthisyear
              EndVuPeriodeQuotes = endhalfyearQuotes }
        | Yearly ->
            { StartDate = startyearstring
              EndDate = endyearstring
              EndDateMinusOneDay = None
              StartVuPeriode = startyear
              EndVuPeriode = endyear
              EndVuPeriodeLast = None
              EndVuPeriodeQuotes = endyearQuotes }
        | _ ->
            printfn "Unmatched ReportIntervall"
            failwith "Unmatched ReportIntervall"
    let matchReportIntervall (intervall:ReportIntervall) =
        match intervall with
        | Dayly -> "täglich"
        | Weekly -> "wöchentlich"
        | Monthly -> "monatlich"
        | Quarterly -> "quartalsweise"
        | Halfyearly -> "halbjährlich"
        | Yearly -> "jährlich"
