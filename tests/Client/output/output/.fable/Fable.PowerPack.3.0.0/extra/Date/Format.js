import { getCharAtIndex as String_getCharAtIndex, substring as String_substring, padLeft as String_padLeft, printf as String_printf, toFail as String_toFail } from "../../../../../.fable/fable-library.3.0.0-nagareyama-beta-003/String.js";
import { toString as Types_toString } from "../../../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Types.js";
import { comparePrimitives as Util_comparePrimitives, max as Util_max } from "../../../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Util.js";
import { replace as RegExp_replace } from "../../../../../.fable/fable-library.3.0.0-nagareyama-beta-003/RegExp.js";
import { year as Date_year, second as Date_second, month as Date_month, minute as Date_minute, hour as Date_hour, dayOfWeek as Date_dayOfWeek, day as Date_day } from "../../../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Date.js";

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

export function toString(x) {
    return Types_toString(x);
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
        let x_1, x_5, x_4, x_7, x_9, x_11, x_13, str_1, x_15;
        const symbol = token[0];
        if (((symbol || "").indexOf("\\") === 0) ? ((symbol || "").length === 2) : false) {
            return String_substring(symbol || "", 1);
        }
        else {
            const matchValue = symbol || "";
            switch (matchValue) {
                case "d": {
                    const x = Date_day(date) | 0;
                    return toString(x);
                }
                case "dd": {
                    return padWith("0")((x_1 = (Date_day(date) | 0), (toString(x_1))));
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
                    let x_3;
                    const x_2 = Date_hour(date) | 0;
                    x_3 = mod12(x_2);
                    return toString(x_3);
                }
                case "hh": {
                    return padWith("0")((x_5 = ((x_4 = (Date_hour(date) | 0), (mod12(x_4))) | 0), (toString(x_5))));
                }
                case "H": {
                    const x_6 = Date_hour(date) | 0;
                    return toString(x_6);
                }
                case "HH": {
                    return padWith("0")((x_7 = (Date_hour(date) | 0), (toString(x_7))));
                }
                case "m": {
                    const x_8 = Date_minute(date) | 0;
                    return toString(x_8);
                }
                case "mm": {
                    return padWith("0")((x_9 = (Date_minute(date) | 0), (toString(x_9))));
                }
                case "M": {
                    const x_10 = Date_month(date) | 0;
                    return toString(x_10);
                }
                case "MM": {
                    return padWith("0")((x_11 = (Date_month(date) | 0), (toString(x_11))));
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
                    const x_12 = Date_second(date) | 0;
                    return toString(x_12);
                }
                case "ss": {
                    return padWith("0")((x_13 = (Date_second(date) | 0), (toString(x_13))));
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
                    const x_14 = Date_year(date) | 0;
                    str = toString(x_14);
                    year = takeLastChars(2, str);
                    return (String_getCharAtIndex(year, 0) === "0") ? String_substring(year, 1) : year;
                }
                case "yy": {
                    return padWith("0")((str_1 = (x_15 = (Date_year(date) | 0), (toString(x_15))), (takeLastChars(2, str_1))));
                }
                case "yyy": {
                    let arg;
                    const x_16 = Date_year(date) | 0;
                    arg = toString(x_16);
                    let x_17;
                    const value = arg;
                    x_17 = value;
                    return String_padLeft(x_17, 3, "0");
                }
                case "yyyy": {
                    let arg_1;
                    const x_18 = Date_year(date) | 0;
                    arg_1 = toString(x_18);
                    let x_19;
                    const value_1 = arg_1;
                    x_19 = value_1;
                    return String_padLeft(x_19, 4, "0");
                }
                case "yyyyy": {
                    let arg_2;
                    const x_20 = Date_year(date) | 0;
                    arg_2 = toString(x_20);
                    let x_21;
                    const value_2 = arg_2;
                    x_21 = value_2;
                    return String_padLeft(x_21, 5, "0");
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

