namespace Chia


module TimeCalculation =
    open Shared.Time
    open System

    module Month =
        let startmonthCustom =
            DateTime.Now.AddMonths(-8).ToString("yyyy0MM")
            |> Convert.ToInt32 //eigentlich -1

        let endmonthCustom =
            DateTime.Now.AddMonths(-7).ToString("yyyy0MM")
            |> Convert.ToInt32 //eigentlich DateTime.Now

        let currentMonth =
            DateTime.UtcNow.ToString("yyyy0MM")
            |> Convert.ToInt32

        let startmonth =
            DateTime.Now.AddMonths(-1).ToString("yyyy0MM")
            |> Convert.ToInt32

        let endmonth =
            DateTime.Now.ToString("yyyy0MM")
            |> Convert.ToInt32

        let startmonthStr =
            DateTime.Now.AddMonths(-1).ToString("dd/MM/yyyy")

        let endmonthStr =
            DateTime(DateTime.Now.Year,
                     DateTime.Now.AddMonths(-1).Month,
                     DateTime.DaysInMonth(DateTime.Now.Year, DateTime.Now.AddMonths(-1).Month)).ToString("dd/MM/yyyy")

    module Week =
        let startweek =
            DateTime.Now.AddDays(-7.0).ToString("yyyy0MMdd")
            |> Convert.ToInt32

        let endweek =
            DateTime.Now.ToString("yyyy0MMdd")
            |> Convert.ToInt32

        let lastWeekStr =
            DateTime.Now.AddDays(-7.0).ToString("dd/MM/yyyy")

    module Day =
        let startday =
            DateTime.Now.AddDays(-1.0).ToString("yyyy0MMdd")
            |> Convert.ToInt32

        let endday =
            DateTime.Now.ToString("yyyy0MMdd")
            |> Convert.ToInt32

        let lastDayStr =
            DateTime.Now.AddDays(-1.0).ToString("dd/MM/yyyy")
    //Calculate TimeCustom
    let dateCustom = DateTime.Now.AddMonths(-8).Date
    let dayCustom = dateCustom.ToString()
    let weekCustom = "KW 9"
    let monthCustom = dateCustom.ToString("MMMM")

    module Quarter =

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

        let quarterStartDate =
            DateTime(date.Year, quarterStartMonth, 1)

        let quarterLastDate =
            quarterStartDate.AddMonths(3).AddDays(-1.0)

        let startquarterCustom =
            DateTime.Now.AddMonths(-4).ToString("yyyy0MM")
            |> Convert.ToInt32

        let endquarterCustom =
            DateTime.Now.AddMonths(-1).ToString("yyyy0MM")
            |> Convert.ToInt32

        let dateTimeQuarterYear =
            if DateTime.Now.Month < 4 then DateTime.Now.AddYears(-1).Year else DateTime.Now.Year


        let endquarterQuotes =
            DateTime.Now.ToString("yyyy0MM")
            |> Convert.ToInt32

        let calcEndQuarterStr itter year =
            sprintf "%i.%i.%i" (DateTime.DaysInMonth(year, ((itter) * 3))) ((itter) * 3) year

        let calcStartQuarterFirstDayStr itter year =
            sprintf "%i.%i.%i" 1 ((itter - 1) * 3 + 1) year

        let calcEndQuarter itter year =
            DateTime(year, itter * 3, 1).AddMonths(1).ToString("yyyy0MM")
            |> Convert.ToInt32

        let calcEndQuarterNextYear itter year =
            DateTime(year, itter * 3, 1).AddMonths(1).ToString("yyyy0MM")
            |> Convert.ToInt32

        let calcEndQuarterStrNextYear itter year =
            sprintf "%i.%i.%i" (DateTime.DaysInMonth(year, ((itter) * 3))) ((itter) * 3) year

        let startquarterStr year =
            DateTime(year, 1, 1).ToString("dd/MM/yyyy")

        let startquarterStrExp year =
            DateTime(year, (quarter - 1) * 3 + 1, 1).ToString("dd/MM/yyyy")

        let endquarterStr year =
            DateTime(year,
                     DateTime.Now.AddMonths(-1).Month,
                     DateTime.DaysInMonth(DateTime.Now.Year, DateTime.Now.AddMonths(-1).Month)).ToString("dd/MM/yyyy")

        let startquarterStrLeavingPlants year =
            DateTime(year - 1, 12, 31).ToString("dd/MM/yyyy")

        let endquarterStrLeavingPlants year =
            DateTime(year,
                     DateTime.Now.AddMonths(-1).Month,
                     DateTime.DaysInMonth(year, DateTime.Now.AddMonths(-1).Month)
                     - 1).ToString("dd/MM/yyyy")

        let startquarter year =
            DateTime(year, 1, 1).ToString("yyyy0MM")
            |> Convert.ToInt32

        let startquarterExp year =
            DateTime(year, (quarter - 1) * 3 + 1, 1).ToString("yyyy0MM")
            |> Convert.ToInt32

        let endquarter year =
            if monthInt = 12 then
                DateTime(year, DateTime.Now.Month, DateTime.DaysInMonth(year, DateTime.Now.Month)).ToString("yyyy013")
                |> Convert.ToInt32
            else
                DateTime(year, DateTime.Now.Month, DateTime.DaysInMonth(year, DateTime.Now.Month)).ToString("yyyy0MM")
                |> Convert.ToInt32

        let endquarterNextYear year =
            if monthInt = 12 then
                DateTime(year, DateTime.Now.Month, DateTime.DaysInMonth(year, DateTime.Now.Month)).ToString("yyyy013")
                |> Convert.ToInt32
            else
                DateTime(year, DateTime.Now.Month, DateTime.DaysInMonth(year, DateTime.Now.Month)).ToString("yyyy0MM")
                |> Convert.ToInt32

    module Halfyear =
        let halfyear =
            let thismonth = DateTime.Now.Date.Month
            match thismonth with
            | month when month < 6 -> "1. Halbjahr"
            | month when month > 6 -> "2. Halbjahr"
            | _ -> "Halbjahr nicht richtig"

        let dateTimeHalfMonth = if DateTime.Now.Month < 7 then 7 else 1

        let dateTimeHalfYear =
            if DateTime.Now.Month < 7 then DateTime.Now.Year - 1 else DateTime.Now.Year

        let starthalfyear =
            DateTime(dateTimeHalfYear, dateTimeHalfMonth, 1).ToString("yyyy0MM")
            |> Convert.ToInt32

        let starthalfyearStr =
            DateTime(dateTimeHalfYear, dateTimeHalfMonth, 1).ToString("dd/MM/yyyy")

        let endhalfyear =
            DateTime(dateTimeHalfYear, dateTimeHalfMonth, 1).AddMonths(6).ToString("yyyy0MM")
            |> Convert.ToInt32

        let endhalfyearStr =
            DateTime(dateTimeHalfYear, dateTimeHalfMonth, 1).AddMonths(6).ToString("dd/MM/yyyy")

        let endhalfyearQuotes =
            DateTime(dateTimeHalfYear, dateTimeHalfMonth, 1).AddMonths(6).ToString("yyyy0MM")
            |> Convert.ToInt32 //Need to be fixed!

    module Year =
        open Quarter

        let lastyearStr =
            DateTime(DateTime.Now.AddYears(-2).Year, 1, 1).ToString("yyyy")

        let yearStr =
            DateTime(DateTime.Now.AddYears(-1).Year, 1, 1).ToString("yyyy")

        let thisyearStr =
            DateTime(DateTime.Now.Year, 1, 1).ToString("yyyy")

        let lastyearVuPeriode =
            DateTime.Now.AddYears(-1).ToString("yyyy001")
            |> Convert.ToInt32

        let yearVuPeriode =
            DateTime.Now.ToString("yyyy001")
            |> Convert.ToInt32

        let dateTimeYear = DateTime.Now.AddYears(-1).Year

        let lastyear =
            DateTime(DateTime.Now.AddYears(-2).Year, 1, 1).ToString("yyyy")

        let year =
            DateTime(DateTime.Now.AddYears(-1).Year, 1, 1).ToString("yyyy")

        let thisyear =
            DateTime(DateTime.Now.Year, 1, 1).ToString("yyyy")

        let lastyearint =
            DateTime.Now.AddYears(-1).ToString("yyyy001")
            |> Convert.ToInt32

        let yearint =
            DateTime.Now.ToString("yyyy001")
            |> Convert.ToInt32

        let startthisyear =
            DateTime(DateTime.Now.Year, 1, 1).ToString("yyyy0MM")
            |> Convert.ToInt32

        let endthisyear =
            DateTime(dateTimeQuarterYear + 1, 1, 1).ToString("yyyy0MM")
            |> Convert.ToInt32

        let endthisyearStr =
            if DateTime.Now.Month < 4
            then DateTime(DateTime.Now.Year - 1, 12, 31).ToString("dd/MM/yyyy")
            else DateTime(DateTime.Now.Year, 12, 31).ToString("dd/MM/yyyy")

        let lastYearQuarterNr = 4

        let workingHours =
            quarter * 2160 |> System.Convert.ToDouble

        let startyearStrLeavingPlants year =
            DateTime(year, 1, 1).ToString("dd/MM/yyyy")

        let endyearStrLeavingPlants year =
            DateTime(year, 1, 1).ToString("dd/MM/yyyy")

        let endyearStr year =
            if DateTime.Now.Month < 4
            then DateTime(year - 1, 12, 31).ToString("dd/MM/yyyy")
            else DateTime(year, 12, 31).ToString("dd/MM/yyyy")

        let startyearstring year =
            DateTime(year, 1, 1).ToString("dd/MM/yyyy") //"01/01/2016"

        let endyearstring year =
            DateTime(year, 12, 31).ToString("dd/MM/yyyy")

        let endyearQuotes year =
            DateTime(year + 1, 1, 1).ToString("yyyy0MM")
            |> Convert.ToInt32 //Needs to be fixed

        let startyear year =
            DateTime(year, 1, 1).ToString("yyyy0MM")
            |> Convert.ToInt32

        let endyear year =
            DateTime(year + 1, 1, 1).ToString("yyyy0MM")
            |> Convert.ToInt32

    module TimeFilter =
        open Quarter
        open Year
        open Halfyear

        let getTimeFilter (reportIntervall: ReportIntervall) aggregation year fileWriterInfo =
            try
                match reportIntervall with
                | Quarterly ->
                    { StartDate =
                          match aggregation with
                          | Accumulated -> startquarterStr year
                          | Explicit -> startquarterStrExp year
                      StartDateLeavingPlants = startquarterStrLeavingPlants year
                      EndDate = endquarterStr year
                      EndDateLeavingPlants = endquarterStrLeavingPlants year
                      EndDateMinusOneDay = Some(endyearStr year)
                      StartVuPeriode =
                          match aggregation with
                          | Accumulated -> startquarter year
                          | Explicit -> startquarterExp year
                      EndVuPeriode = endquarter year
                      EndVuPeriodeLast = Some(endyear year)
                      EndVuPeriodeQuotes = endquarterQuotes }
                | Halfyearly ->
                    { StartDate = starthalfyearStr
                      EndDate = endhalfyearStr
                      StartDateLeavingPlants = "None"
                      EndDateMinusOneDay = None
                      EndDateLeavingPlants = "None"
                      StartVuPeriode = starthalfyear
                      EndVuPeriode = endhalfyear
                      EndVuPeriodeLast = Some(endyear year)
                      EndVuPeriodeQuotes = endhalfyearQuotes }
                | Yearly ->
                    { StartDate = startyearstring year
                      EndDate = endyearstring year
                      StartDateLeavingPlants = "None"
                      EndDateMinusOneDay = None
                      EndDateLeavingPlants = "None"
                      StartVuPeriode = startyear year
                      EndVuPeriode = endyear year
                      EndVuPeriodeLast = None
                      EndVuPeriodeQuotes = endyearQuotes year }
                | _ ->
                    printfn "Unmatched ReportIntervall"
                    failwith "Unmatched ReportIntervall"
            with exn ->
                let msg =
                    sprintf "Couldn't get timeFilter %s" exn.Message

                Log.logCritical (msg, LocalService, Create, LocalStorage, exn, fileWriterInfo)

                // logError exn fileWriterInfo msg
                failwith msg

        let thisYear = DateTime.Now.Year

        let parseAzureDateTimeFromVuPeriode (vuPeriode: string) =
            DateTime.ParseExact(vuPeriode, "yyyy" + vuPeriode.[4..6], System.Globalization.CultureInfo.CurrentCulture)
                    .ToString("yyyy'-'MM'-'dd'T'HH':'mm':'ss'.'fff'Z'")
            |> DateTimeOffset.Parse

    module Utils =
        let matchReportIntervall (intervall: ReportIntervall) =
            match intervall with
            | Daily -> "täglich"
            | Weekly -> "wöchentlich"
            | Monthly -> "monatlich"
            | Quarterly -> "quartalsweise"
            | Halfyearly -> "halbjährlich"
            | Yearly -> "jährlich"
