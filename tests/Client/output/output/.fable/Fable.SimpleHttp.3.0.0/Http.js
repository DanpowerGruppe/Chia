import { fromContinuations as Async_fromContinuations } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Async.js";
import { HttpResponse as Types_HttpResponse, ResponseContent as Types_ResponseContent, HttpRequest as Types_HttpRequest, BodyContent as Types_BodyContent, HttpMethod as Types_HttpMethod, Header as Types_Header } from "./Types.js";
import { ofArray as List_ofArray, singleton as List_singleton, append as List_append, empty as List_empty } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/List.js";
import { ofArray as Map_ofArray, empty as Map_empty } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Map.js";
import { comparePrimitives as Util_comparePrimitives } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Util.js";
import { join as String_join, split as String_split, isNullOrEmpty as String_isNullOrEmpty } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/String.js";
import { choose as Array_choose } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Array.js";
import { getEnumerator as Seq_getEnumerator } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Seq.js";
import { some as Option_some } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Option.js";
import { singleton as AsyncBuilder_singleton } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/AsyncBuilder.js";

export function FileReader_readBlobAsText(blob) {
    const arg00 = (tupledArg) => {
        const resolve = tupledArg[0];
        const reader = new FileReader();
        reader.onload = ((_arg1) => {
            if (reader.readyState === 2) {
                resolve(reader.result);
            }
        });
        reader.readAsText(blob);
    };
    return Async_fromContinuations(arg00);
}

export function FileReader_readFileAsText(file) {
    const arg00 = (tupledArg) => {
        const resolve = tupledArg[0];
        const reader = new FileReader();
        reader.onload = ((_arg1) => {
            if (reader.readyState === 2) {
                resolve(reader.result);
            }
        });
        reader.readAsText(file);
    };
    return Async_fromContinuations(arg00);
}

export function FormData_append(key, value, form) {
    form.append(key, value);
    return form;
}

export function FormData_appendFile(key, file, form) {
    form.append(key, file);
    return form;
}

export function FormData_appendNamedFile(key, fileName, file, form) {
    form.append(key, file, fileName);
    return form;
}

export function FormData_appendBlob(key, blob, form) {
    form.append(key, blob);
    return form;
}

export function FormData_appendNamedBlob(key, fileName, blob, form) {
    form.append(key, blob, fileName);
    return form;
}

export function Headers_contentType(value) {
    return new Types_Header(0, "Content-Type", value);
}

export function Headers_accept(value) {
    return new Types_Header(0, "Accept", value);
}

export function Headers_acceptCharset(value) {
    return new Types_Header(0, "Accept-Charset", value);
}

export function Headers_acceptEncoding(value) {
    return new Types_Header(0, "Accept-Encoding", value);
}

export function Headers_acceptLanguage(value) {
    return new Types_Header(0, "Accept-Language", value);
}

export function Headers_acceptDateTime(value) {
    return new Types_Header(0, "Accept-Datetime", value);
}

export function Headers_authorization(value) {
    return new Types_Header(0, "Authorization", value);
}

export function Headers_cacheControl(value) {
    return new Types_Header(0, "Cache-Control", value);
}

export function Headers_connection(value) {
    return new Types_Header(0, "Connection", value);
}

export function Headers_cookie(value) {
    return new Types_Header(0, "Cookie", value);
}

export function Headers_contentMD5(value) {
    return new Types_Header(0, "Content-MD5", value);
}

export function Headers_date(value) {
    return new Types_Header(0, "Date", value);
}

export function Headers_expect(value) {
    return new Types_Header(0, "Expect", value);
}

export function Headers_ifMatch(value) {
    return new Types_Header(0, "If-Match", value);
}

export function Headers_ifModifiedSince(value) {
    return new Types_Header(0, "If-Modified-Since", value);
}

export function Headers_ifNoneMatch(value) {
    return new Types_Header(0, "If-None-Match", value);
}

export function Headers_ifRange(value) {
    return new Types_Header(0, "If-Range", value);
}

export function Headers_IfUnmodifiedSince(value) {
    return new Types_Header(0, "If-Unmodified-Since", value);
}

export function Headers_maxForwards(value) {
    return new Types_Header(0, "Max-Forwards", value);
}

export function Headers_origin(value) {
    return new Types_Header(0, "Origin", value);
}

export function Headers_pragma(value) {
    return new Types_Header(0, "Pragma", value);
}

export function Headers_proxyAuthorization(value) {
    return new Types_Header(0, "Proxy-Authorization", value);
}

export function Headers_range(value) {
    return new Types_Header(0, "Range", value);
}

export function Headers_referer(value) {
    return new Types_Header(0, "Referer", value);
}

export function Headers_userAgent(value) {
    return new Types_Header(0, "User-Agent", value);
}

export function Headers_create(key, value) {
    return new Types_Header(0, key, value);
}

const Http_defaultRequest = new Types_HttpRequest("", new Types_HttpMethod(0), List_empty(), false, void 0, void 0, new Types_BodyContent(0));

const Http_emptyResponse = new Types_HttpResponse(0, "", "", Map_empty({
    Compare: Util_comparePrimitives,
}), new Types_ResponseContent(0, ""));

function Http_splitAt(delimiter, input) {
    if (String_isNullOrEmpty(input)) {
        return [input];
    }
    else {
        return String_split(input, [delimiter], null, 0);
    }
}

function Http_serializeMethod(_arg1) {
    switch (_arg1.tag) {
        case 1: {
            return "POST";
        }
        case 3: {
            return "PATCH";
        }
        case 2: {
            return "PUT";
        }
        case 4: {
            return "DELETE";
        }
        case 6: {
            return "OPTIONS";
        }
        case 5: {
            return "HEAD";
        }
        default: {
            return "GET";
        }
    }
}

export function Http_request(url) {
    return new Types_HttpRequest(url, Http_defaultRequest.method, Http_defaultRequest.headers, Http_defaultRequest.withCredentials, Http_defaultRequest.overridenMimeType, Http_defaultRequest.overridenResponseType, Http_defaultRequest.content);
}

export function Http_method(httpVerb, req) {
    return new Types_HttpRequest(req.url, httpVerb, req.headers, req.withCredentials, req.overridenMimeType, req.overridenResponseType, req.content);
}

export function Http_header(singleHeader, req) {
    const headers = List_append(req.headers, List_singleton(singleHeader));
    return new Types_HttpRequest(req.url, req.method, headers, req.withCredentials, req.overridenMimeType, req.overridenResponseType, req.content);
}

export function Http_headers(values, req) {
    const headers = List_append(req.headers, values);
    return new Types_HttpRequest(req.url, req.method, headers, req.withCredentials, req.overridenMimeType, req.overridenResponseType, req.content);
}

export function Http_withCredentials(enabled, req) {
    return new Types_HttpRequest(req.url, req.method, req.headers, enabled, req.overridenMimeType, req.overridenResponseType, req.content);
}

export function Http_overrideMimeType(value, req) {
    return new Types_HttpRequest(req.url, req.method, req.headers, req.withCredentials, value, req.overridenResponseType, req.content);
}

export function Http_overrideResponseType(value, req) {
    return new Types_HttpRequest(req.url, req.method, req.headers, req.withCredentials, req.overridenMimeType, value, req.content);
}

export function Http_content(bodyContent, req) {
    return new Types_HttpRequest(req.url, req.method, req.headers, req.withCredentials, req.overridenMimeType, req.overridenResponseType, bodyContent);
}

export function Http_send(req) {
    const arg00 = (tupledArg) => {
        const resolve = tupledArg[0];
        const reject = tupledArg[1];
        const xhr = new XMLHttpRequest();
        xhr.open(Http_serializeMethod(req.method), req.url);
        xhr.onreadystatechange = (() => {
            let responseText, matchValue_1, statusCode, responseType, content, matchValue_2, elements, array, input;
            if (xhr.readyState === 4) {
                resolve((responseText = (matchValue_1 = xhr.responseType, (matchValue_1 === "") ? xhr.responseText : ((matchValue_1 === "text") ? xhr.responseText : "")), (statusCode = (xhr.status | 0), (responseType = xhr.responseType, (content = (matchValue_2 = xhr.responseType, (matchValue_2 === "") ? (new Types_ResponseContent(0, xhr.responseText)) : ((matchValue_2 === "text") ? (new Types_ResponseContent(0, xhr.responseText)) : ((matchValue_2 === "arraybuffer") ? (new Types_ResponseContent(2, xhr.response)) : ((matchValue_2 === "blob") ? (new Types_ResponseContent(1, xhr.response)) : (new Types_ResponseContent(3, xhr.response)))))), new Types_HttpResponse(statusCode, responseText, responseType, (elements = (array = (input = xhr.getAllResponseHeaders(), (Http_splitAt("\r\n", input))), (Array_choose((headerLine) => {
                    const parts = Http_splitAt(":", headerLine);
                    const matchValue_3 = List_ofArray(parts);
                    if (matchValue_3.tail != null) {
                        const rest = matchValue_3.tail;
                        const key = matchValue_3.head;
                        return [key.toLocaleLowerCase(), String_join(":", rest).trim()];
                    }
                    else {
                        const otherwise = matchValue_3;
                        return void 0;
                    }
                }, array))), (Map_ofArray(elements, {
                    Compare: Util_comparePrimitives,
                }))), content))))));
            }
        });
        const enumerator = Seq_getEnumerator(req.headers);
        try {
            while (enumerator["System.Collections.IEnumerator.MoveNext"]()) {
                const forLoopVar = enumerator["System.Collections.Generic.IEnumerator`1.get_Current"]();
                const value = forLoopVar.fields[1];
                const key_1 = forLoopVar.fields[0];
                xhr.setRequestHeader(key_1, value);
            }
        }
        finally {
            enumerator.Dispose();
        }
        xhr.withCredentials = req.withCredentials;
        const matchValue_4 = req.overridenMimeType;
        if (matchValue_4 == null) {
        }
        else {
            const mimeType = matchValue_4;
            xhr.overrideMimeType(mimeType);
        }
        const matchValue_5 = req.overridenResponseType;
        if (matchValue_5 == null) {
        }
        else if (matchValue_5.tag === 1) {
            xhr.responseType = "blob";
        }
        else if (matchValue_5.tag === 2) {
            xhr.responseType = "arraybuffer";
        }
        else {
            xhr.responseType = "text";
        }
        const matchValue_6 = [req.method, req.content];
        if (matchValue_6[0].tag === 0) {
            xhr.send(Option_some(void 0));
        }
        else if (matchValue_6[1].tag === 1) {
            const value_1 = matchValue_6[1].fields[0];
            xhr.send(Option_some(value_1));
        }
        else if (matchValue_6[1].tag === 3) {
            const formData = matchValue_6[1].fields[0];
            xhr.send(Option_some(formData));
        }
        else if (matchValue_6[1].tag === 2) {
            const blob = matchValue_6[1].fields[0];
            xhr.send(Option_some(blob));
        }
        else {
            xhr.send(Option_some(void 0));
        }
    };
    return Async_fromContinuations(arg00);
}

export function Http_get(url) {
    const builder$0040 = AsyncBuilder_singleton;
    return builder$0040.Delay(() => {
        let req_1, req;
        return builder$0040.Bind((req_1 = (req = Http_request(url), (Http_method(new Types_HttpMethod(0), req))), (Http_send(req_1))), (_arg1) => {
            const response = _arg1;
            return builder$0040.Return([response.statusCode, response.responseText]);
        });
    });
}

export function Http_put(url, data) {
    const builder$0040 = AsyncBuilder_singleton;
    return builder$0040.Delay(() => {
        let req_2, req_1, req;
        return builder$0040.Bind((req_2 = (req_1 = (req = Http_request(url), (Http_method(new Types_HttpMethod(2), req))), (Http_content(new Types_BodyContent(1, data), req_1))), (Http_send(req_2))), (_arg1) => {
            const response = _arg1;
            return builder$0040.Return([response.statusCode, response.responseText]);
        });
    });
}

export function Http_delete(url) {
    const builder$0040 = AsyncBuilder_singleton;
    return builder$0040.Delay(() => {
        let req_1, req;
        return builder$0040.Bind((req_1 = (req = Http_request(url), (Http_method(new Types_HttpMethod(4), req))), (Http_send(req_1))), (_arg1) => {
            const response = _arg1;
            return builder$0040.Return([response.statusCode, response.responseText]);
        });
    });
}

export function Http_patch(url, data) {
    const builder$0040 = AsyncBuilder_singleton;
    return builder$0040.Delay(() => {
        let req_2, req_1, req;
        return builder$0040.Bind((req_2 = (req_1 = (req = Http_request(url), (Http_method(new Types_HttpMethod(3), req))), (Http_content(new Types_BodyContent(1, data), req_1))), (Http_send(req_2))), (_arg1) => {
            const response = _arg1;
            return builder$0040.Return([response.statusCode, response.responseText]);
        });
    });
}

export function Http_post(url, data) {
    const builder$0040 = AsyncBuilder_singleton;
    return builder$0040.Delay(() => {
        let req_2, req_1, req;
        return builder$0040.Bind((req_2 = (req_1 = (req = Http_request(url), (Http_method(new Types_HttpMethod(1), req))), (Http_content(new Types_BodyContent(1, data), req_1))), (Http_send(req_2))), (_arg1) => {
            const response = _arg1;
            return builder$0040.Return([response.statusCode, response.responseText]);
        });
    });
}

