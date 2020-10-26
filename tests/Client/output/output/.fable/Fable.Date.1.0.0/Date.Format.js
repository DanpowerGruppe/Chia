import { getCharAtIndex as String_getCharAtIndex, substring as String_substring, padLeft as String_padLeft, printf as String_printf, toFail as String_toFail } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/String.js";
import { int32ToString as Util_int32ToString, comparePrimitives as Util_comparePrimitives, max as Util_max } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Util.js";
import { replace as RegExp_replace } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/RegExp.js";
import { year as Date_year, second as Date_second, month as Date_month, minute as Date_minute, hour as Date_hour, dayOfWeek as Date_dayOfWeek, day as Date_day } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Date.js";

export function fromDayOfWeek(local, day) {
    switch (day) {
        case 0: {
            return local.Sunday;
        }
        case 1: {
            return local.Monday;
        }
        case 2: {
            return local.Tuesday;
        }
        case 3: {
            return local.Wednesday;
        }
        case 4: {
            return local.Thursday;
        }
        case 5: {
            return local.Friday;
        }
        case 6: {
            return local.Saturday;
        }
        default: {
            const x = day | 0;
            const arg10 = x | 0;
            const clo1 = String_toFail(String_printf("Not a valid day of week: %A"));
            return clo1(arg10);
        }
    }
}

export function mod12(x) {
    if ((x === 12) ? true : (x === 0)) {
        return 12;
    }
    else {
        return (x % 12) | 0;
    }
}

export function fromMonth(local, month) {
    switch (month) {
        case 1: {
            return local.January;
        }
        case 2: {
            return local.February;
        }
        case 3: {
            return local.March;
        }
        case 4: {
            return local.April;
        }
        case 5: {
            return local.May;
        }
        case 6: {
            return local.June;
        }
        case 7: {
            return local.July;
        }
        case 8: {
            return local.August;
        }
        case 9: {
            return local.September;
        }
        case 10: {
            return local.October;
        }
        case 11: {
            return local.November;
        }
        case 12: {
            return local.December;
        }
        default: {
            const x = month | 0;
            const arg10 = x | 0;
            const clo1 = String_toFail(String_printf("Not a valid month rank: %i"));
            return clo1(arg10);
        }
    }
}

export const padWith = (c) => ((arg) => {
    let x;
    const value = arg;
    x = value;
    return String_padLeft(x, 2, c);
});

export function takeLastChars(count, str) {
    return String_substring(str, Util_max(Util_comparePrimitives, 0, str.length - count));
}

export function localFormat(local, formatString, date) {
    return RegExp_replace(formatString, "(d{1,4})|(h{1,2})|(H{1,2})|(m{1,2})|(M{1,4})|(s{1,2})|(t{1,2})|(y{1,5})|(\\\\.?)", (token) => {
        let x_2, x_8, x_7, x_12, x_16, x_20, x_24, str_1, x_28;
        const symbol = token[0];
        if (((symbol || "").indexOf("\\") === 0) ? ((symbol || "").length === 2) : false) {
            return String_substring(symbol || "", 1);
        }
        else {
            const matchValue = symbol || "";
            switch (matchValue) {
                case "d": {
                    const x = Date_day(date) | 0;
                    return Util_int32ToString(x);
                }
                case "dd": {
                    return padWith("0")((x_2 = (Date_day(date) | 0), (Util_int32ToString(x_2))));
                }
                case "ddd": {
                    const day = Date_dayOfWeek(date) | 0;
                    return fromDayOfWeek(local.Date.AbbreviatedDays, day);
                }
                case "dddd": {
                    const day_1 = Date_dayOfWeek(date) | 0;
                    return fromDayOfWeek(local.Date.Days, day_1);
                }
                case "h": {
                    let x_5;
                    const x_4 = Date_hour(date) | 0;
                    x_5 = mod12(x_4);
                    return Util_int32ToString(x_5);
                }
                case "hh": {
                    return padWith("0")((x_8 = ((x_7 = (Date_hour(date) | 0), (mod12(x_7))) | 0), (Util_int32ToString(x_8))));
                }
                case "H": {
                    const x_10 = Date_hour(date) | 0;
                    return Util_int32ToString(x_10);
                }
                case "HH": {
                    return padWith("0")((x_12 = (Date_hour(date) | 0), (Util_int32ToString(x_12))));
                }
                case "m": {
                    const x_14 = Date_minute(date) | 0;
                    return Util_int32ToString(x_14);
                }
                case "mm": {
                    return padWith("0")((x_16 = (Date_minute(date) | 0), (Util_int32ToString(x_16))));
                }
                case "M": {
                    const x_18 = Date_month(date) | 0;
                    return Util_int32ToString(x_18);
                }
                case "MM": {
                    return padWith("0")((x_20 = (Date_month(date) | 0), (Util_int32ToString(x_20))));
                }
                case "MMM": {
                    const month = Date_month(date) | 0;
                    return fromMonth(local.Date.AbbreviatedMonths, month);
                }
                case "MMMM": {
                    const month_1 = Date_month(date) | 0;
                    return fromMonth(local.Date.Months, month_1);
                }
                case "s": {
                    const x_22 = Date_second(date) | 0;
                    return Util_int32ToString(x_22);
                }
                case "ss": {
                    return padWith("0")((x_24 = (Date_second(date) | 0), (Util_int32ToString(x_24))));
                }
                case "t": {
                    try {
                        return (Date_hour(date) < 12) ? String_substring(local.Time.AM, 0, 1) : String_substring(local.Time.PM, 0, 1);
                    }
                    catch (matchValue_1) {
                        return "";
                    }
                }
                case "tt": {
                    return (Date_hour(date) < 12) ? local.Time.AM : local.Time.PM;
                }
                case "y": {
                    let year;
                    let str;
                    const x_26 = Date_year(date) | 0;
                    str = Util_int32ToString(x_26);
                    year = takeLastChars(2, str);
                    return (String_getCharAtIndex(year, 0) === "0") ? String_substring(year, 1) : year;
                }
                case "yy": {
                    return padWith("0")((str_1 = (x_28 = (Date_year(date) | 0), (Util_int32ToString(x_28))), (takeLastChars(2, str_1))));
                }
                case "yyy": {
                    let arg;
                    const x_30 = Date_year(date) | 0;
                    arg = Util_int32ToString(x_30);
                    let x_32;
                    const value = arg;
                    x_32 = value;
                    return String_padLeft(x_32, 3, "0");
                }
                case "yyyy": {
                    let arg_1;
                    const x_33 = Date_year(date) | 0;
                    arg_1 = Util_int32ToString(x_33);
                    let x_35;
                    const value_1 = arg_1;
                    x_35 = value_1;
                    return String_padLeft(x_35, 4, "0");
                }
                case "yyyyy": {
                    let arg_2;
                    const x_36 = Date_year(date) | 0;
                    arg_2 = Util_int32ToString(x_36);
                    let x_38;
                    const value_2 = arg_2;
                    x_38 = value_2;
                    return String_padLeft(x_38, 5, "0");
                }
                default: {
                    const t = matchValue;
                    const arg10 = t;
                    const clo1 = String_toFail(String_printf("The token %s is not implemented. Please report it"));
                    return clo1(arg10);
                }
            }
        }
    });
}

