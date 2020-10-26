import { milliseconds as TimeSpan_milliseconds, seconds as TimeSpan_seconds, minutes as TimeSpan_minutes, hours as TimeSpan_hours } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/TimeSpan.js";
import { length as List_length, map as List_map, ofArray as List_ofArray } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/List.js";
import { join as String_join } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/String.js";
import { map as Seq_map } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Seq.js";

export function PropHelpers_createClockValue(duration) {
    let i_1;
    let res;
    let strings;
    const list = List_ofArray([TimeSpan_hours(duration), TimeSpan_minutes(duration), TimeSpan_seconds(duration)]);
    strings = List_map((i) => ((i < 10) ? ("0" + i) : i), list);
    res = String_join(":", strings);
    return (res + ".") + (i_1 = (TimeSpan_milliseconds(duration) | 0), ((i_1 < 10) ? ("0" + i_1) : i_1));
}

export function PropHelpers_createKeySplines(values) {
    let strings;
    const source = values;
    strings = Seq_map((tupledArg) => {
        const x1 = tupledArg[0];
        const y1 = tupledArg[1];
        const x2 = tupledArg[2];
        const y2 = tupledArg[3];
        return (((((x1 + " ") + y1) + " ") + x2) + " ") + y2;
    }, source);
    return String_join("; ", strings);
}

export function PropHelpers_createOnKey(key, handler, ev) {
    const patternInput = key;
    const shift = patternInput[2];
    const pressedKey = patternInput[0];
    const ctrl = patternInput[1];
    const matchValue = [ctrl, shift];
    let pattern_matching_result;
    if (matchValue[0]) {
        if (matchValue[1]) {
            if (((pressedKey.toLocaleLowerCase() === ev.key.toLocaleLowerCase()) ? ev.ctrlKey : false) ? ev.shiftKey : false) {
                pattern_matching_result = 0;
            }
            else {
                pattern_matching_result = 1;
            }
        }
        else {
            pattern_matching_result = 1;
        }
    }
    else {
        pattern_matching_result = 1;
    }
    switch (pattern_matching_result) {
        case 0: {
            handler(ev);
            break;
        }
        case 1: {
            let pattern_matching_result_1;
            if (matchValue[0]) {
                if (matchValue[1]) {
                    pattern_matching_result_1 = 1;
                }
                else if ((pressedKey.toLocaleLowerCase() === ev.key.toLocaleLowerCase()) ? ev.ctrlKey : false) {
                    pattern_matching_result_1 = 0;
                }
                else {
                    pattern_matching_result_1 = 1;
                }
            }
            else {
                pattern_matching_result_1 = 1;
            }
            switch (pattern_matching_result_1) {
                case 0: {
                    handler(ev);
                    break;
                }
                case 1: {
                    let pattern_matching_result_2;
                    if (matchValue[0]) {
                        pattern_matching_result_2 = 1;
                    }
                    else if (matchValue[1]) {
                        if ((pressedKey.toLocaleLowerCase() === ev.key.toLocaleLowerCase()) ? ev.shiftKey : false) {
                            pattern_matching_result_2 = 0;
                        }
                        else {
                            pattern_matching_result_2 = 1;
                        }
                    }
                    else {
                        pattern_matching_result_2 = 1;
                    }
                    switch (pattern_matching_result_2) {
                        case 0: {
                            handler(ev);
                            break;
                        }
                        case 1: {
                            let pattern_matching_result_3;
                            if (matchValue[0]) {
                                pattern_matching_result_3 = 1;
                            }
                            else if (matchValue[1]) {
                                pattern_matching_result_3 = 1;
                            }
                            else if (pressedKey.toLocaleLowerCase() === ev.key.toLocaleLowerCase()) {
                                pattern_matching_result_3 = 0;
                            }
                            else {
                                pattern_matching_result_3 = 1;
                            }
                            switch (pattern_matching_result_3) {
                                case 0: {
                                    handler(ev);
                                    break;
                                }
                                case 1: {
                                    break;
                                }
                            }
                            break;
                        }
                    }
                    break;
                }
            }
            break;
        }
    }
}

export function PropHelpers_createPointsFloat(coordinates) {
    let strings;
    const source = coordinates;
    strings = Seq_map((tupledArg) => {
        const x = tupledArg[0];
        const y = tupledArg[1];
        return (x + ",") + y;
    }, source);
    return String_join(" ", strings);
}

export function PropHelpers_createPointsInt(coordinates) {
    let strings;
    const source = coordinates;
    strings = Seq_map((tupledArg) => {
        const x = tupledArg[0] | 0;
        const y = tupledArg[1] | 0;
        return (x + ",") + y;
    }, source);
    return String_join(" ", strings);
}

export function PropHelpers_createSvgPathFloat(path) {
    let strings_2;
    const source_1 = path;
    strings_2 = Seq_map((tupledArg) => {
        const cmdType = tupledArg[0];
        const cmds = tupledArg[1];
        if (List_length(cmds) === 0) {
            return cmdType;
        }
        else {
            let res;
            let strings_1;
            const source = cmds;
            strings_1 = Seq_map((arg) => {
                let strings;
                const value = arg;
                strings = value;
                return String_join(",", strings);
            }, source);
            res = String_join(" ", strings_1);
            return (cmdType + " ") + res;
        }
    }, source_1);
    return String_join("\n", strings_2);
}

export function PropHelpers_createSvgPathInt(path) {
    let strings_2;
    const source_1 = path;
    strings_2 = Seq_map((tupledArg) => {
        const cmdType = tupledArg[0];
        const cmds = tupledArg[1];
        if (List_length(cmds) === 0) {
            return cmdType;
        }
        else {
            let res;
            let strings_1;
            const source = cmds;
            strings_1 = Seq_map((arg) => {
                let strings;
                const value = arg;
                strings = value;
                return String_join(",", strings);
            }, source);
            res = String_join(" ", strings_1);
            return (cmdType + " ") + res;
        }
    }, source_1);
    return String_join("\n", strings_2);
}

