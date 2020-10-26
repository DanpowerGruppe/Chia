import { Union as Types_Union } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Types.js";
import { class_type as Reflection_class_type, union_type as Reflection_union_type, obj_type as Reflection_obj_type, int32_type as Reflection_int32_type, string_type as Reflection_string_type } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Reflection.js";
import { int32ToString as Util_int32ToString } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Util.js";
import { keyValueList as MapUtil_keyValueList } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/MapUtil.js";
import { Promise_result as Promise_Promise_result } from "./Promise.js";
import { fromString as Decode_fromString } from "../Thoth.Json.5.0.0/Decode.js";
import { Result as Option_Result } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Option.js";
import { Auto_toString_5A41365E as Encode_Auto_toString_5A41365E } from "../Thoth.Json.5.0.0/Encode.js";
import { singleton as List_singleton, append as List_append, ofArray as List_ofArray } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/List.js";

export class Fetch_types_HttpRequestHeaders extends Types_Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["Accept", "Accept-Charset", "Accept-Encoding", "Accept-Language", "Accept-Datetime", "Authorization", "Cache-Control", "Connection", "Cookie", "Content-Length", "Content-MD5", "Content-Type", "Date", "Expect", "Forwarded", "From", "Host", "If-Match", "If-Modified-Since", "If-None-Match", "If-Range", "If-Unmodified-Since", "Max-Forwards", "Origin", "Pragma", "Proxy-Authorization", "Range", "Referer", "SOAPAction", "TE", "User-Agent", "Upgrade", "Via", "Warning", "X-Requested-With", "DNT", "X-Forwarded-For", "X-Forwarded-Host", "X-Forwarded-Proto", "Front-End-Https", "X-Http-Method-Override", "X-ATT-DeviceId", "X-Wap-Profile", "Proxy-Connection", "X-UIDH", "X-Csrf-Token", "Custom"];
    }
}

export function Fetch_types_HttpRequestHeaders$reflection() {
    return Reflection_union_type("Fable.PowerPack.Fetch.Fetch_types.HttpRequestHeaders", [], Fetch_types_HttpRequestHeaders, () => [[["Item", Reflection_string_type]], [["Item", Reflection_string_type]], [["Item", Reflection_string_type]], [["Item", Reflection_string_type]], [["Item", Reflection_string_type]], [["Item", Reflection_string_type]], [["Item", Reflection_string_type]], [["Item", Reflection_string_type]], [["Item", Reflection_string_type]], [["Item", Reflection_string_type]], [["Item", Reflection_string_type]], [["Item", Reflection_string_type]], [["Item", Reflection_string_type]], [["Item", Reflection_string_type]], [["Item", Reflection_string_type]], [["Item", Reflection_string_type]], [["Item", Reflection_string_type]], [["Item", Reflection_string_type]], [["Item", Reflection_string_type]], [["Item", Reflection_string_type]], [["Item", Reflection_string_type]], [["Item", Reflection_string_type]], [["Item", Reflection_int32_type]], [["Item", Reflection_string_type]], [["Item", Reflection_string_type]], [["Item", Reflection_string_type]], [["Item", Reflection_string_type]], [["Item", Reflection_string_type]], [["Item", Reflection_string_type]], [["Item", Reflection_string_type]], [["Item", Reflection_string_type]], [["Item", Reflection_string_type]], [["Item", Reflection_string_type]], [["Item", Reflection_string_type]], [["Item", Reflection_string_type]], [["Item", Reflection_string_type]], [["Item", Reflection_string_type]], [["Item", Reflection_string_type]], [["Item", Reflection_string_type]], [["Item", Reflection_string_type]], [["Item", Reflection_string_type]], [["Item", Reflection_string_type]], [["Item", Reflection_string_type]], [["Item", Reflection_string_type]], [["Item", Reflection_string_type]], [["Item", Reflection_string_type]], [["key", Reflection_string_type], ["value", Reflection_obj_type]]]);
}

export class Fetch_types_RequestProperties extends Types_Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["Method", "Headers", "Body", "Mode", "Credentials", "Cache"];
    }
}

export function Fetch_types_RequestProperties$reflection() {
    return Reflection_union_type("Fable.PowerPack.Fetch.Fetch_types.RequestProperties", [], Fetch_types_RequestProperties, () => [[["Item", Reflection_string_type]], [["Item", Reflection_class_type("Fable.PowerPack.Fetch.Fetch_types.IHttpRequestHeaders")]], [["Item", Reflection_obj_type]], [["Item", Reflection_string_type]], [["Item", Reflection_string_type]], [["Item", Reflection_string_type]]]);
}

function errorString(response) {
    return (((Util_int32ToString(response.status) + " ") + (response.statusText)) + " for URL ") + (response.url);
}

export function fetch$(url, init) {
    const pr = fetch(url, MapUtil_keyValueList(init, 1, true));
    return pr.then(((response) => {
        if (response.ok) {
            return response;
        }
        else {
            const message = errorString(response);
            throw (new Error(message));
        }
    }));
}

export function tryFetch(url, init) {
    const a = fetch$(url, init);
    return Promise_Promise_result(a);
}

export function fetchAs(url, decoder, init) {
    const pr_1 = fetch(url, MapUtil_keyValueList(init, 1, true));
    return pr_1.then(((response) => {
        if (!(response.ok)) {
            const message = errorString(response);
            throw (new Error(message));
        }
        else {
            const pr = response.text();
            return pr.then(((res) => {
                const matchValue = Decode_fromString(decoder, res);
                if (matchValue.tag === 1) {
                    const error = matchValue.fields[0];
                    throw (new Error(error));
                }
                else {
                    const successValue = matchValue.fields[0];
                    return successValue;
                }
            }));
        }
    }));
}

export function tryFetchAs(url, decoder, init) {
    const pr_1 = fetch(url, MapUtil_keyValueList(init, 1, true));
    return pr_1.then(((response) => {
        if (!(response.ok)) {
            let a;
            const arg0 = errorString(response);
            a = (new Option_Result(1, arg0));
            return Promise.resolve(a);
        }
        else {
            const pr = response.text();
            return pr.then(((value) => Decode_fromString(decoder, value)));
        }
    }));
}

function sendRecord(url, record, properties, httpMethod) {
    const defaultProps = List_ofArray([new Fetch_types_RequestProperties(0, httpMethod), new Fetch_types_RequestProperties(1, {
        ["Content-Type"]: "application/json",
    }), new Fetch_types_RequestProperties(2, Encode_Auto_toString_5A41365E(0, record, void 0, void 0, void 0, {
        ResolveType: () => null,
    }))]);
    const init = List_append(defaultProps, properties);
    return fetch$(url, init);
}

export function postRecord(url, record, properties) {
    return sendRecord(url, record, properties, "POST");
}

export function tryPostRecord(url, record, properties) {
    const a = postRecord(url, record, properties);
    return Promise_Promise_result(a);
}

export function putRecord(url, record, properties) {
    return sendRecord(url, record, properties, "PUT");
}

export function tryPutRecord(url, record, properties) {
    const a = putRecord(url, record, properties);
    return Promise_Promise_result(a);
}

export function patchRecord(url, record, properties) {
    return sendRecord(url, record, properties, "PATCH");
}

export function tryOptionsRequest(url) {
    const a = fetch$(url, List_singleton(new Fetch_types_RequestProperties(0, "OPTIONS")));
    return Promise_Promise_result(a);
}

