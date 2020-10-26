import { Result as Option_Result } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Option.js";
import { fromString as Decode_fromString } from "../Thoth.Json.5.0.0/Decode.js";
import { Auto_toString_5A41365E as Encode_Auto_toString_5A41365E } from "../Thoth.Json.5.0.0/Encode.js";

export function BrowserLocalStorage_load(decoder, key) {
    const o = localStorage.getItem(key);
    if (o == null) {
        const arg0 = "No item found in local storage with key " + key;
        return new Option_Result(1, arg0);
    }
    else {
        return Decode_fromString(decoder, o);
    }
}

export function BrowserLocalStorage_delete(key) {
    localStorage.removeItem(key);
}

export function BrowserLocalStorage_save(key, data) {
    localStorage.setItem(key, Encode_Auto_toString_5A41365E(0, data, void 0, void 0, void 0, {
        ResolveType: () => null,
    }));
}

export function BrowserSessionStorage_load(decoder, key) {
    const o = sessionStorage.getItem(key);
    if (o == null) {
        const arg0 = "No item found in local storage with key " + key;
        return new Option_Result(1, arg0);
    }
    else {
        return Decode_fromString(decoder, o);
    }
}

export function BrowserSessionStorage_delete(key) {
    sessionStorage.removeItem(key);
}

export function BrowserSessionStorage_save(key, data) {
    sessionStorage.setItem(key, Encode_Auto_toString_5A41365E(0, data, void 0, void 0, void 0, {
        ResolveType: () => null,
    }));
}

