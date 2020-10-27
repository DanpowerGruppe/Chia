import { join as String_join } from "../../.fable/fable-library.3.0.0-nagareyama-beta-003/String.js";
import { toString as Types_toString } from "../../.fable/fable-library.3.0.0-nagareyama-beta-003/Types.js";

export function joinString(s) {
    return String_join(";", s);
}

export function createPartKey(latitude, longitude) {
    let value, value_1;
    return ((value = latitude, (Types_toString(value))) + "-") + (value_1 = longitude, (Types_toString(value_1)));
}

export function getNiceDateString(sortableRowKey) {
    const date = (() => {
        throw 1;
    })()(sortableRowKey);
    throw 1;
}

