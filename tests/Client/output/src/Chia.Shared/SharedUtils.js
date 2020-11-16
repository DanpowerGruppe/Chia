import { join } from "../../.fable/fable-library.3.0.0-nagareyama-rc-007/String.js";
import { toString } from "../../.fable/fable-library.3.0.0-nagareyama-rc-007/Types.js";
import { Ids_SortableRowKeyModule_toDate } from "./Shared.js";
import { toString as toString_1 } from "../../.fable/fable-library.3.0.0-nagareyama-rc-007/Date.js";

export function joinString(s) {
    return join(";", s);
}

export function createPartKey(latitude, longitude) {
    return ((toString(latitude)) + "-") + (toString(longitude));
}

export function getNiceDateString(sortableRowKey) {
    let date;
    date = Ids_SortableRowKeyModule_toDate(sortableRowKey);
    return toString_1(date, "dd.MM.yyyy HH:mm");
}

