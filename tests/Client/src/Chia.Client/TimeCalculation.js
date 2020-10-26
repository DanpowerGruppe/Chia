import { addYears as Date_addYears, date as Date_date, addDays as Date_addDays, daysInMonth as Date_daysInMonth, month as Date_month, year as Date_year, create as Date_create, utcNow as Date_utcNow, toString as Date_toString, addMonths as Date_addMonths, now as Date_now } from "../../.fable/fable-library.3.0.0-nagareyama-beta-003/Date.js";
import { parse as Int32_parse } from "../../.fable/fable-library.3.0.0-nagareyama-beta-003/Int32.js";
import { toString as Types_toString } from "../../.fable/fable-library.3.0.0-nagareyama-beta-003/Types.js";
import { printf as String_printf, toText as String_toText } from "../../.fable/fable-library.3.0.0-nagareyama-beta-003/String.js";
import { Time_TimeFilters as Domain_Time_TimeFilters } from "../Shared/Domain.js";

export const Month_startmonthCustom = (() => {
    let arg00;
    let copyOfStruct_1;
    let copyOfStruct = Date_now();
    copyOfStruct_1 = Date_addMonths(copyOfStruct, -8);
    arg00 = Date_toString(copyOfStruct_1, "yyyy0MM");
    return Int32_parse(arg00, 511, false, 32) | 0;
})();

export const Month_endmonthCustom = (() => {
    let arg00;
    let copyOfStruct_1;
    let copyOfStruct = Date_now();
    copyOfStruct_1 = Date_addMonths(copyOfStruct, -7);
    arg00 = Date_toString(copyOfStruct_1, "yyyy0MM");
    return Int32_parse(arg00, 511, false, 32) | 0;
})();

export const Month_currentMonth = (() => {
    let arg00;
    let copyOfStruct = Date_utcNow();
    arg00 = Date_toString(copyOfStruct, "yyyy0MM");
    return Int32_parse(arg00, 511, false, 32) | 0;
})();

export const Month_startmonth = (() => {
    let arg00;
    let copyOfStruct_1;
    let copyOfStruct = Date_now();
    copyOfStruct_1 = Date_addMonths(copyOfStruct, -1);
    arg00 = Date_toString(copyOfStruct_1, "yyyy0MM");
    return Int32_parse(arg00, 511, false, 32) | 0;
})();

export const Month_endmonth = (() => {
    let arg00;
    let copyOfStruct = Date_now();
    arg00 = Date_toString(copyOfStruct, "yyyy0MM");
    return Int32_parse(arg00, 511, false, 32) | 0;
})();

export const Month_startmonthStr = (() => {
    let copyOfStruct_1;
    let copyOfStruct = Date_now();
    copyOfStruct_1 = Date_addMonths(copyOfStruct, -1);
    return Date_toString(copyOfStruct_1, "dd/MM/yyyy");
})();

export const Month_endmonthStr = (() => {
    let copyOfStruct, copyOfStruct_2, copyOfStruct_1, copyOfStruct_3, copyOfStruct_5, copyOfStruct_4;
    let copyOfStruct_6 = Date_create((copyOfStruct = Date_now(), Date_year(copyOfStruct)), (copyOfStruct_2 = (copyOfStruct_1 = Date_now(), Date_addMonths(copyOfStruct_1, -1)), Date_month(copyOfStruct_2)), Date_daysInMonth((copyOfStruct_3 = Date_now(), Date_year(copyOfStruct_3)), (copyOfStruct_5 = (copyOfStruct_4 = Date_now(), Date_addMonths(copyOfStruct_4, -1)), Date_month(copyOfStruct_5))));
    return Date_toString(copyOfStruct_6, "dd/MM/yyyy");
})();

export const Week_startweek = (() => {
    let arg00;
    let copyOfStruct_1;
    let copyOfStruct = Date_now();
    copyOfStruct_1 = Date_addDays(copyOfStruct, -7);
    arg00 = Date_toString(copyOfStruct_1, "yyyy0MMdd");
    return Int32_parse(arg00, 511, false, 32) | 0;
})();

export const Week_endweek = (() => {
    let arg00;
    let copyOfStruct = Date_now();
    arg00 = Date_toString(copyOfStruct, "yyyy0MMdd");
    return Int32_parse(arg00, 511, false, 32) | 0;
})();

export const Week_lastWeekStr = (() => {
    let copyOfStruct_1;
    let copyOfStruct = Date_now();
    copyOfStruct_1 = Date_addDays(copyOfStruct, -7);
    return Date_toString(copyOfStruct_1, "dd/MM/yyyy");
})();

export const Day_startday = (() => {
    let arg00;
    let copyOfStruct_1;
    let copyOfStruct = Date_now();
    copyOfStruct_1 = Date_addDays(copyOfStruct, -1);
    arg00 = Date_toString(copyOfStruct_1, "yyyy0MMdd");
    return Int32_parse(arg00, 511, false, 32) | 0;
})();

export const Day_endday = (() => {
    let arg00;
    let copyOfStruct = Date_now();
    arg00 = Date_toString(copyOfStruct, "yyyy0MMdd");
    return Int32_parse(arg00, 511, false, 32) | 0;
})();

export const Day_lastDayStr = (() => {
    let copyOfStruct_1;
    let copyOfStruct = Date_now();
    copyOfStruct_1 = Date_addDays(copyOfStruct, -1);
    return Date_toString(copyOfStruct_1, "dd/MM/yyyy");
})();

export const dateCustom = (() => {
    let copyOfStruct_1;
    let copyOfStruct = Date_now();
    copyOfStruct_1 = Date_addMonths(copyOfStruct, -8);
    return Date_date(copyOfStruct_1);
})();

export const dayCustom = (() => {
    let copyOfStruct = dateCustom;
    return Types_toString(copyOfStruct);
})();

export const weekCustom = "KW 9";

export const monthCustom = (() => {
    let copyOfStruct = dateCustom;
    return Date_toString(copyOfStruct, "MMMM");
})();

export const Quarter_date = (() => {
    let copyOfStruct_1;
    let copyOfStruct = Date_now();
    copyOfStruct_1 = Date_addMonths(copyOfStruct, -1);
    return Date_date(copyOfStruct_1);
})();

export const Quarter_day = (() => {
    let copyOfStruct = Quarter_date;
    return Types_toString(copyOfStruct);
})();

export const Quarter_week = "KW 9";

export const Quarter_month = (() => {
    let copyOfStruct = Quarter_date;
    return Date_toString(copyOfStruct, "MMMM");
})();

export const Quarter_monthInt = (() => {
    let arg00;
    let copyOfStruct = Quarter_date;
    arg00 = Date_toString(copyOfStruct, "MM");
    return Int32_parse(arg00, 511, false, 32) | 0;
})();

export const Quarter_lastquarterdate = (() => {
    let copyOfStruct = Quarter_date;
    return Date_addMonths(copyOfStruct, -3);
})();

export const Quarter_lastquarter = ~(~(((() => {
    let copyOfStruct = Quarter_lastquarterdate;
    return Date_month(copyOfStruct) | 0;
})() + 2) / 3));

export const Quarter_quarter = ~(~(((() => {
    let copyOfStruct = Quarter_date;
    return Date_month(copyOfStruct) | 0;
})() + 2) / 3));

export const Quarter_quarterString = (() => {
    const arg10 = Quarter_quarter | 0;
    const clo1 = String_toText(String_printf("%i. Quartal"));
    return clo1(arg10);
})();

export const Quarter_quarterStartMonth = (3 * Quarter_quarter) - 2;

export const Quarter_quarterStartDate = Date_create((() => {
    let copyOfStruct = Quarter_date;
    return Date_year(copyOfStruct) | 0;
})(), Quarter_quarterStartMonth, 1);

export const Quarter_quarterLastDate = (() => {
    let copyOfStruct_1;
    let copyOfStruct = Quarter_quarterStartDate;
    copyOfStruct_1 = Date_addMonths(copyOfStruct, 3);
    return Date_addDays(copyOfStruct_1, -1);
})();

export const Quarter_startquarterCustom = (() => {
    let arg00;
    let copyOfStruct_1;
    let copyOfStruct = Date_now();
    copyOfStruct_1 = Date_addMonths(copyOfStruct, -4);
    arg00 = Date_toString(copyOfStruct_1, "yyyy0MM");
    return Int32_parse(arg00, 511, false, 32) | 0;
})();

export const Quarter_endquarterCustom = (() => {
    let arg00;
    let copyOfStruct_1;
    let copyOfStruct = Date_now();
    copyOfStruct_1 = Date_addMonths(copyOfStruct, -1);
    arg00 = Date_toString(copyOfStruct_1, "yyyy0MM");
    return Int32_parse(arg00, 511, false, 32) | 0;
})();

export const Quarter_dateTimeQuarterYear = ((() => {
    let copyOfStruct = Date_now();
    return Date_month(copyOfStruct) | 0;
})() < 4) ? (() => {
    let copyOfStruct_2;
    let copyOfStruct_1 = Date_now();
    copyOfStruct_2 = Date_addYears(copyOfStruct_1, -1);
    return Date_year(copyOfStruct_2) | 0;
})() : (() => {
    let copyOfStruct_3 = Date_now();
    return Date_year(copyOfStruct_3) | 0;
})();

export const Quarter_endquarterQuotes = (() => {
    let arg00;
    let copyOfStruct = Date_now();
    arg00 = Date_toString(copyOfStruct, "yyyy0MM");
    return Int32_parse(arg00, 511, false, 32) | 0;
})();

export function Quarter_calcEndQuarterStr(itter, year) {
    const arg10 = Date_daysInMonth(year, itter * 3) | 0;
    const arg20 = (itter * 3) | 0;
    const arg30 = year | 0;
    const clo1 = String_toText(String_printf("%i.%i.%i"));
    const clo2 = clo1(arg10);
    const clo3 = clo2(arg20);
    return clo3(arg30);
}

export function Quarter_calcStartQuarterFirstDayStr(itter, year) {
    const arg10 = 1;
    const arg20 = (((itter - 1) * 3) + 1) | 0;
    const arg30 = year | 0;
    const clo1 = String_toText(String_printf("%i.%i.%i"));
    const clo2 = clo1(arg10);
    const clo3 = clo2(arg20);
    return clo3(arg30);
}

export function Quarter_calcEndQuarter(itter, year) {
    let arg00;
    let copyOfStruct_1;
    let copyOfStruct = Date_create(year, itter * 3, 1);
    copyOfStruct_1 = Date_addMonths(copyOfStruct, 1);
    arg00 = Date_toString(copyOfStruct_1, "yyyy0MM");
    return Int32_parse(arg00, 511, false, 32) | 0;
}

export function Quarter_calcEndQuarterNextYear(itter, year) {
    let arg00;
    let copyOfStruct_1;
    let copyOfStruct = Date_create(year, itter * 3, 1);
    copyOfStruct_1 = Date_addMonths(copyOfStruct, 1);
    arg00 = Date_toString(copyOfStruct_1, "yyyy0MM");
    return Int32_parse(arg00, 511, false, 32) | 0;
}

export function Quarter_calcEndQuarterStrNextYear(itter, year) {
    const arg10 = Date_daysInMonth(year, itter * 3) | 0;
    const arg20 = (itter * 3) | 0;
    const arg30 = year | 0;
    const clo1 = String_toText(String_printf("%i.%i.%i"));
    const clo2 = clo1(arg10);
    const clo3 = clo2(arg20);
    return clo3(arg30);
}

export function Quarter_startquarterStr(year) {
    let copyOfStruct = Date_create(year, 1, 1);
    return Date_toString(copyOfStruct, "dd/MM/yyyy");
}

export function Quarter_startquarterStrExp(year) {
    let copyOfStruct = Date_create(year, ((Quarter_quarter - 1) * 3) + 1, 1);
    return Date_toString(copyOfStruct, "dd/MM/yyyy");
}

export function Quarter_endquarterStr(year) {
    let copyOfStruct_1, copyOfStruct, copyOfStruct_2, copyOfStruct_4, copyOfStruct_3;
    let copyOfStruct_5 = Date_create(year, (copyOfStruct_1 = (copyOfStruct = Date_now(), Date_addMonths(copyOfStruct, -1)), Date_month(copyOfStruct_1)), Date_daysInMonth((copyOfStruct_2 = Date_now(), Date_year(copyOfStruct_2)), (copyOfStruct_4 = (copyOfStruct_3 = Date_now(), Date_addMonths(copyOfStruct_3, -1)), Date_month(copyOfStruct_4))));
    return Date_toString(copyOfStruct_5, "dd/MM/yyyy");
}

export function Quarter_startquarterStrLeavingPlants(year) {
    let copyOfStruct = Date_create(year - 1, 12, 31);
    return Date_toString(copyOfStruct, "dd/MM/yyyy");
}

export function Quarter_endquarterStrLeavingPlants(year) {
    let copyOfStruct_1, copyOfStruct, copyOfStruct_3, copyOfStruct_2;
    let copyOfStruct_4 = Date_create(year, (copyOfStruct_1 = (copyOfStruct = Date_now(), Date_addMonths(copyOfStruct, -1)), Date_month(copyOfStruct_1)), Date_daysInMonth(year, (copyOfStruct_3 = (copyOfStruct_2 = Date_now(), Date_addMonths(copyOfStruct_2, -1)), Date_month(copyOfStruct_3))) - 1);
    return Date_toString(copyOfStruct_4, "dd/MM/yyyy");
}

export function Quarter_startquarter(year) {
    let arg00;
    let copyOfStruct = Date_create(year, 1, 1);
    arg00 = Date_toString(copyOfStruct, "yyyy0MM");
    return Int32_parse(arg00, 511, false, 32) | 0;
}

export function Quarter_startquarterExp(year) {
    let arg00;
    let copyOfStruct = Date_create(year, ((Quarter_quarter - 1) * 3) + 1, 1);
    arg00 = Date_toString(copyOfStruct, "yyyy0MM");
    return Int32_parse(arg00, 511, false, 32) | 0;
}

export function Quarter_endquarter(year) {
    let copyOfStruct, copyOfStruct_1, copyOfStruct_3, copyOfStruct_4;
    if (Quarter_monthInt === 12) {
        let arg00;
        let copyOfStruct_2 = Date_create(year, (copyOfStruct = Date_now(), Date_month(copyOfStruct)), Date_daysInMonth(year, (copyOfStruct_1 = Date_now(), Date_month(copyOfStruct_1))));
        arg00 = Date_toString(copyOfStruct_2, "yyyy013");
        return Int32_parse(arg00, 511, false, 32) | 0;
    }
    else {
        let arg00_1;
        let copyOfStruct_5 = Date_create(year, (copyOfStruct_3 = Date_now(), Date_month(copyOfStruct_3)), Date_daysInMonth(year, (copyOfStruct_4 = Date_now(), Date_month(copyOfStruct_4))));
        arg00_1 = Date_toString(copyOfStruct_5, "yyyy0MM");
        return Int32_parse(arg00_1, 511, false, 32) | 0;
    }
}

export function Quarter_endquarterNextYear(year) {
    let copyOfStruct, copyOfStruct_1, copyOfStruct_3, copyOfStruct_4;
    if (Quarter_monthInt === 12) {
        let arg00;
        let copyOfStruct_2 = Date_create(year, (copyOfStruct = Date_now(), Date_month(copyOfStruct)), Date_daysInMonth(year, (copyOfStruct_1 = Date_now(), Date_month(copyOfStruct_1))));
        arg00 = Date_toString(copyOfStruct_2, "yyyy013");
        return Int32_parse(arg00, 511, false, 32) | 0;
    }
    else {
        let arg00_1;
        let copyOfStruct_5 = Date_create(year, (copyOfStruct_3 = Date_now(), Date_month(copyOfStruct_3)), Date_daysInMonth(year, (copyOfStruct_4 = Date_now(), Date_month(copyOfStruct_4))));
        arg00_1 = Date_toString(copyOfStruct_5, "yyyy0MM");
        return Int32_parse(arg00_1, 511, false, 32) | 0;
    }
}

export const Halfyear_halfyear = (() => {
    let month, month_2;
    let thismonth;
    let copyOfStruct_1;
    let copyOfStruct = Date_now();
    copyOfStruct_1 = Date_date(copyOfStruct);
    thismonth = Date_month(copyOfStruct_1);
    if (month = (thismonth | 0), month < 6) {
        const month_1 = thismonth | 0;
        return "1. Halbjahr";
    }
    else if (month_2 = (thismonth | 0), month_2 > 6) {
        const month_3 = thismonth | 0;
        return "2. Halbjahr";
    }
    else {
        return "Halbjahr nicht richtig";
    }
})();

export const Halfyear_dateTimeHalfMonth = ((() => {
    let copyOfStruct = Date_now();
    return Date_month(copyOfStruct) | 0;
})() < 7) ? 7 : 1;

export const Halfyear_dateTimeHalfYear = ((() => {
    let copyOfStruct = Date_now();
    return Date_month(copyOfStruct) | 0;
})() < 7) ? ((() => {
    let copyOfStruct_1 = Date_now();
    return Date_year(copyOfStruct_1) | 0;
})() - 1) : (() => {
    let copyOfStruct_2 = Date_now();
    return Date_year(copyOfStruct_2) | 0;
})();

export const Halfyear_starthalfyear = (() => {
    let arg00;
    let copyOfStruct = Date_create(Halfyear_dateTimeHalfYear, Halfyear_dateTimeHalfMonth, 1);
    arg00 = Date_toString(copyOfStruct, "yyyy0MM");
    return Int32_parse(arg00, 511, false, 32) | 0;
})();

export const Halfyear_starthalfyearStr = (() => {
    let copyOfStruct = Date_create(Halfyear_dateTimeHalfYear, Halfyear_dateTimeHalfMonth, 1);
    return Date_toString(copyOfStruct, "dd/MM/yyyy");
})();

export const Halfyear_endhalfyear = (() => {
    let arg00;
    let copyOfStruct_1;
    let copyOfStruct = Date_create(Halfyear_dateTimeHalfYear, Halfyear_dateTimeHalfMonth, 1);
    copyOfStruct_1 = Date_addMonths(copyOfStruct, 6);
    arg00 = Date_toString(copyOfStruct_1, "yyyy0MM");
    return Int32_parse(arg00, 511, false, 32) | 0;
})();

export const Halfyear_endhalfyearStr = (() => {
    let copyOfStruct_1;
    let copyOfStruct = Date_create(Halfyear_dateTimeHalfYear, Halfyear_dateTimeHalfMonth, 1);
    copyOfStruct_1 = Date_addMonths(copyOfStruct, 6);
    return Date_toString(copyOfStruct_1, "dd/MM/yyyy");
})();

export const Halfyear_endhalfyearQuotes = (() => {
    let arg00;
    let copyOfStruct_1;
    let copyOfStruct = Date_create(Halfyear_dateTimeHalfYear, Halfyear_dateTimeHalfMonth, 1);
    copyOfStruct_1 = Date_addMonths(copyOfStruct, 6);
    arg00 = Date_toString(copyOfStruct_1, "yyyy0MM");
    return Int32_parse(arg00, 511, false, 32) | 0;
})();

export const Year_lastyearStr = (() => {
    let copyOfStruct_1, copyOfStruct;
    let copyOfStruct_2 = Date_create((copyOfStruct_1 = (copyOfStruct = Date_now(), Date_addYears(copyOfStruct, -2)), Date_year(copyOfStruct_1)), 1, 1);
    return Date_toString(copyOfStruct_2, "yyyy");
})();

export const Year_yearStr = (() => {
    let copyOfStruct_1, copyOfStruct;
    let copyOfStruct_2 = Date_create((copyOfStruct_1 = (copyOfStruct = Date_now(), Date_addYears(copyOfStruct, -1)), Date_year(copyOfStruct_1)), 1, 1);
    return Date_toString(copyOfStruct_2, "yyyy");
})();

export const Year_thisyearStr = (() => {
    let copyOfStruct;
    let copyOfStruct_1 = Date_create((copyOfStruct = Date_now(), Date_year(copyOfStruct)), 1, 1);
    return Date_toString(copyOfStruct_1, "yyyy");
})();

export const Year_lastyearVuPeriode = (() => {
    let arg00;
    let copyOfStruct_1;
    let copyOfStruct = Date_now();
    copyOfStruct_1 = Date_addYears(copyOfStruct, -1);
    arg00 = Date_toString(copyOfStruct_1, "yyyy001");
    return Int32_parse(arg00, 511, false, 32) | 0;
})();

export const Year_yearVuPeriode = (() => {
    let arg00;
    let copyOfStruct = Date_now();
    arg00 = Date_toString(copyOfStruct, "yyyy001");
    return Int32_parse(arg00, 511, false, 32) | 0;
})();

export const Year_dateTimeYear = (() => {
    let copyOfStruct_1;
    let copyOfStruct = Date_now();
    copyOfStruct_1 = Date_addYears(copyOfStruct, -1);
    return Date_year(copyOfStruct_1) | 0;
})();

export const Year_lastyear = (() => {
    let copyOfStruct_1, copyOfStruct;
    let copyOfStruct_2 = Date_create((copyOfStruct_1 = (copyOfStruct = Date_now(), Date_addYears(copyOfStruct, -2)), Date_year(copyOfStruct_1)), 1, 1);
    return Date_toString(copyOfStruct_2, "yyyy");
})();

export const Year_year = (() => {
    let copyOfStruct_1, copyOfStruct;
    let copyOfStruct_2 = Date_create((copyOfStruct_1 = (copyOfStruct = Date_now(), Date_addYears(copyOfStruct, -1)), Date_year(copyOfStruct_1)), 1, 1);
    return Date_toString(copyOfStruct_2, "yyyy");
})();

export const Year_thisyear = (() => {
    let copyOfStruct;
    let copyOfStruct_1 = Date_create((copyOfStruct = Date_now(), Date_year(copyOfStruct)), 1, 1);
    return Date_toString(copyOfStruct_1, "yyyy");
})();

export const Year_lastyearint = (() => {
    let arg00;
    let copyOfStruct_1;
    let copyOfStruct = Date_now();
    copyOfStruct_1 = Date_addYears(copyOfStruct, -1);
    arg00 = Date_toString(copyOfStruct_1, "yyyy001");
    return Int32_parse(arg00, 511, false, 32) | 0;
})();

export const Year_yearint = (() => {
    let arg00;
    let copyOfStruct = Date_now();
    arg00 = Date_toString(copyOfStruct, "yyyy001");
    return Int32_parse(arg00, 511, false, 32) | 0;
})();

export const Year_startthisyear = (() => {
    let copyOfStruct;
    let arg00;
    let copyOfStruct_1 = Date_create((copyOfStruct = Date_now(), Date_year(copyOfStruct)), 1, 1);
    arg00 = Date_toString(copyOfStruct_1, "yyyy0MM");
    return Int32_parse(arg00, 511, false, 32) | 0;
})();

export const Year_endthisyear = (() => {
    let arg00;
    let copyOfStruct = Date_create(Quarter_dateTimeQuarterYear + 1, 1, 1);
    arg00 = Date_toString(copyOfStruct, "yyyy0MM");
    return Int32_parse(arg00, 511, false, 32) | 0;
})();

export const Year_endthisyearStr = ((() => {
    let copyOfStruct = Date_now();
    return Date_month(copyOfStruct) | 0;
})() < 4) ? (() => {
    let copyOfStruct_1;
    let copyOfStruct_2 = Date_create((copyOfStruct_1 = Date_now(), Date_year(copyOfStruct_1)) - 1, 12, 31);
    return Date_toString(copyOfStruct_2, "dd/MM/yyyy");
})() : (() => {
    let copyOfStruct_3;
    let copyOfStruct_4 = Date_create((copyOfStruct_3 = Date_now(), Date_year(copyOfStruct_3)), 12, 31);
    return Date_toString(copyOfStruct_4, "dd/MM/yyyy");
})();

export const Year_lastYearQuarterNr = 4;

export const Year_workingHours = (() => {
    const arg00 = (Quarter_quarter * 2160) | 0;
    return arg00;
})();

export function Year_startyearStrLeavingPlants(year) {
    let copyOfStruct = Date_create(year, 1, 1);
    return Date_toString(copyOfStruct, "dd/MM/yyyy");
}

export function Year_endyearStrLeavingPlants(year) {
    let copyOfStruct = Date_create(year, 1, 1);
    return Date_toString(copyOfStruct, "dd/MM/yyyy");
}

export function Year_endyearStr(year) {
    let copyOfStruct;
    if ((copyOfStruct = Date_now(), Date_month(copyOfStruct)) < 4) {
        let copyOfStruct_1 = Date_create(year - 1, 12, 31);
        return Date_toString(copyOfStruct_1, "dd/MM/yyyy");
    }
    else {
        let copyOfStruct_2 = Date_create(year, 12, 31);
        return Date_toString(copyOfStruct_2, "dd/MM/yyyy");
    }
}

export function Year_startyearstring(year) {
    let copyOfStruct = Date_create(year, 1, 1);
    return Date_toString(copyOfStruct, "dd/MM/yyyy");
}

export function Year_endyearstring(year) {
    let copyOfStruct = Date_create(year, 12, 31);
    return Date_toString(copyOfStruct, "dd/MM/yyyy");
}

export function Year_endyearQuotes(year) {
    let arg00;
    let copyOfStruct = Date_create(year + 1, 1, 1);
    arg00 = Date_toString(copyOfStruct, "yyyy0MM");
    return Int32_parse(arg00, 511, false, 32) | 0;
}

export function Year_startyear(year) {
    let arg00;
    let copyOfStruct = Date_create(year, 1, 1);
    arg00 = Date_toString(copyOfStruct, "yyyy0MM");
    return Int32_parse(arg00, 511, false, 32) | 0;
}

export function Year_endyear(year) {
    let arg00;
    let copyOfStruct = Date_create(year + 1, 1, 1);
    arg00 = Date_toString(copyOfStruct, "yyyy0MM");
    return Int32_parse(arg00, 511, false, 32) | 0;
}

export function TimeFilter_getTimeFilter(reportIntervall, aggregation, year) {
    switch (reportIntervall.tag) {
        case 3: {
            return new Domain_Time_TimeFilters((aggregation.tag === 1) ? Quarter_startquarterStrExp(year) : Quarter_startquarterStr(year), Quarter_startquarterStrLeavingPlants(year), Quarter_endquarterStr(year), Quarter_endquarterStrLeavingPlants(year), Year_endyearStr(year), (aggregation.tag === 1) ? Quarter_startquarterExp(year) : Quarter_startquarter(year), Quarter_endquarter(year), Year_endyear(year), Quarter_endquarterQuotes);
        }
        case 4: {
            return new Domain_Time_TimeFilters(Halfyear_starthalfyearStr, "None", Halfyear_endhalfyearStr, "None", void 0, Halfyear_starthalfyear, Halfyear_endhalfyear, Year_endyear(year), Halfyear_endhalfyearQuotes);
        }
        case 5: {
            const StartDate = Year_startyearstring(year);
            const EndDate = Year_endyearstring(year);
            return new Domain_Time_TimeFilters(StartDate, "None", EndDate, "None", void 0, Year_startyear(year), Year_endyear(year), void 0, Year_endyearQuotes(year));
        }
        default: {
            throw (new Error("Unmatched ReportIntervall"));
        }
    }
}

export const TimeFilter_thisYear = (() => {
    let copyOfStruct = Date_now();
    return Date_year(copyOfStruct) | 0;
})();

export function Utils_matchReportIntervall(intervall) {
    switch (intervall.tag) {
        case 1: {
            return "wöchentlich";
        }
        case 2: {
            return "monatlich";
        }
        case 3: {
            return "quartalsweise";
        }
        case 4: {
            return "halbjährlich";
        }
        case 5: {
            return "jährlich";
        }
        default: {
            return "täglich";
        }
    }
}

