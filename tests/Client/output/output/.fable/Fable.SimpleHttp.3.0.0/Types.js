import { Record as Types_Record, Union as Types_Union } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Types.js";
import { int32_type as Reflection_int32_type, obj_type as Reflection_obj_type, record_type as Reflection_record_type, option_type as Reflection_option_type, bool_type as Reflection_bool_type, list_type as Reflection_list_type, class_type as Reflection_class_type, string_type as Reflection_string_type, union_type as Reflection_union_type } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Reflection.js";

export class HttpMethod extends Types_Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["GET", "POST", "PUT", "PATCH", "DELETE", "HEAD", "OPTIONS"];
    }
}

export function HttpMethod$reflection() {
    return Reflection_union_type("Fable.SimpleHttp.HttpMethod", [], HttpMethod, () => [[], [], [], [], [], [], []]);
}

export class Header extends Types_Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["Header"];
    }
}

export function Header$reflection() {
    return Reflection_union_type("Fable.SimpleHttp.Header", [], Header, () => [[["Item1", Reflection_string_type], ["Item2", Reflection_string_type]]]);
}

export class BodyContent extends Types_Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["Empty", "Text", "Binary", "Form"];
    }
}

export function BodyContent$reflection() {
    return Reflection_union_type("Fable.SimpleHttp.BodyContent", [], BodyContent, () => [[], [["Item", Reflection_string_type]], [["Item", Reflection_class_type("Browser.Types.Blob")]], [["Item", Reflection_class_type("Browser.Types.FormData")]]]);
}

export class ResponseTypes extends Types_Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["Text", "Blob", "ArrayBuffer"];
    }
}

export function ResponseTypes$reflection() {
    return Reflection_union_type("Fable.SimpleHttp.ResponseTypes", [], ResponseTypes, () => [[], [], []]);
}

export class HttpRequest extends Types_Record {
    constructor(url, method, headers, withCredentials, overridenMimeType, overridenResponseType, content) {
        super();
        this.url = url;
        this.method = method;
        this.headers = headers;
        this.withCredentials = withCredentials;
        this.overridenMimeType = overridenMimeType;
        this.overridenResponseType = overridenResponseType;
        this.content = content;
    }
}

export function HttpRequest$reflection() {
    return Reflection_record_type("Fable.SimpleHttp.HttpRequest", [], HttpRequest, () => [["url", Reflection_string_type], ["method", HttpMethod$reflection()], ["headers", Reflection_list_type(Header$reflection())], ["withCredentials", Reflection_bool_type], ["overridenMimeType", Reflection_option_type(Reflection_string_type)], ["overridenResponseType", Reflection_option_type(ResponseTypes$reflection())], ["content", BodyContent$reflection()]]);
}

export class ResponseContent extends Types_Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["Text", "Blob", "ArrayBuffer", "Unknown"];
    }
}

export function ResponseContent$reflection() {
    return Reflection_union_type("Fable.SimpleHttp.ResponseContent", [], ResponseContent, () => [[["Item", Reflection_string_type]], [["Item", Reflection_class_type("Browser.Types.Blob")]], [["Item", Reflection_class_type("Fable.Core.JS.ArrayBuffer")]], [["Item", Reflection_obj_type]]]);
}

export class HttpResponse extends Types_Record {
    constructor(statusCode, responseText, responseType, responseHeaders, content) {
        super();
        this.statusCode = (statusCode | 0);
        this.responseText = responseText;
        this.responseType = responseType;
        this.responseHeaders = responseHeaders;
        this.content = content;
    }
}

export function HttpResponse$reflection() {
    return Reflection_record_type("Fable.SimpleHttp.HttpResponse", [], HttpResponse, () => [["statusCode", Reflection_int32_type], ["responseText", Reflection_string_type], ["responseType", Reflection_string_type], ["responseHeaders", Reflection_class_type("Microsoft.FSharp.Collections.FSharpMap`2", [Reflection_string_type, Reflection_string_type])], ["content", ResponseContent$reflection()]]);
}

