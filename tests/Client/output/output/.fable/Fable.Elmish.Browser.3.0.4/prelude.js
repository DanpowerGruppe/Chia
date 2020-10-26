import { some as Option_some, value as Option_value } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Option.js";

export function tuple(a, b) {
    const matchValue = [a, b];
    let pattern_matching_result, a_1, b_1;
    if (matchValue[0] != null) {
        if (matchValue[1] != null) {
            pattern_matching_result = 0;
            a_1 = Option_value(matchValue[0]);
            b_1 = Option_value(matchValue[1]);
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
            return [a_1, b_1];
        }
        case 1: {
            return void 0;
        }
    }
}

export function ofFunc(f, arg) {
    try {
        return Option_some(f(arg));
    }
    catch (matchValue) {
        return void 0;
    }
}

