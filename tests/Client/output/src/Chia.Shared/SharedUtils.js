import { join as String_join } from "../../.fable/fable-library.3.0.0-nagareyama-beta-003/String.js";
import { toString as Types_toString } from "../../.fable/fable-library.3.0.0-nagareyama-beta-003/Types.js";
import { Ids_SortableRowKeyModule_toDate as Shared_Ids_SortableRowKeyModule_toDate } from "./Shared.js";
import { toString as Date_toString } from "../../.fable/fable-library.3.0.0-nagareyama-beta-003/Date.js";

export function joinString(s) {
    return String_join(";", s);
}

export function createPartKey(latitude, longitude) {
    let value, value_1;
    return ((value = latitude, (Types_toString(value))) + "-") + (value_1 = longitude, (Types_toString(value_1)));
}

export function getNiceDateString(sortableRowKey) {
    let date;
    const arg00$0040 = sortableRowKey;
    date = Shared_Ids_SortableRowKeyModule_toDate(arg00$0040);
    return Date_toString(date, "dd.MM.yyyy HH:mm");
}

