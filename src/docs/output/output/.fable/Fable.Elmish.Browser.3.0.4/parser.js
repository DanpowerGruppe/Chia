import { FSharpRef as Types_FSharpRef, Record as Types_Record } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-002/Types.js";
import { record_type as Reflection_record_type, class_type as Reflection_class_type, list_type as Reflection_list_type, string_type as Reflection_string_type } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-002/Reflection.js";
import { ofArray as List_ofArray, collect as List_collect, map as List_map, singleton as List_singleton, cons as List_cons, empty as List_empty } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-002/List.js";
import { some as Option_some, bind as Option_bind, Result as Option_Result } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-002/Option.js";
import { tryParse as Int32_tryParse } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-002/Int32.js";
import { empty as Map_empty, ofSeq as Map_ofSeq, tryFind as Map_tryFind } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-002/Map.js";
import { substring as String_substring, split as String_split } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-002/String.js";
import { equalsWith as Array_equalsWith } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-002/Array.js";
import { comparePrimitives as Util_comparePrimitives } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-002/Util.js";
import { ofFunc as prelude_ofFunc, tuple as prelude_tuple } from "./prelude.js";
import { choose as Seq_choose, map as Seq_map } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-002/Seq.js";

export class State$1 extends Types_Record {
    constructor(visited, unvisited, args, value) {
        super();
        this.visited = visited;
        this.unvisited = unvisited;
        this.args = args;
        this.value = value;
    }
}

export function State$1$reflection(gen0) {
    return Reflection_record_type("Elmish.UrlParser.State`1", [gen0], State$1, () => [["visited", Reflection_list_type(Reflection_string_type)], ["unvisited", Reflection_list_type(Reflection_string_type)], ["args", Reflection_class_type("Microsoft.FSharp.Collections.FSharpMap`2", [Reflection_string_type, Reflection_string_type])], ["value", gen0]]);
}

export function StateModule_mkState(visited, unvisited, args, value) {
    return new State$1(visited, unvisited, args, value);
}

export function StateModule_map(f, _arg1) {
    const visited = _arg1.visited;
    const value = _arg1.value;
    const unvisited = _arg1.unvisited;
    const args = _arg1.args;
    return new State$1(visited, unvisited, args, f(value));
}

export function custom(tipe, stringToSomething) {
    const inner = (_arg1) => {
        const visited = _arg1.visited;
        const value = _arg1.value;
        const unvisited = _arg1.unvisited;
        const args = _arg1.args;
        if (unvisited.tail != null) {
            const rest = unvisited.tail;
            const next = unvisited.head;
            const matchValue = stringToSomething(next);
            if (matchValue.tag === 1) {
                const msg = matchValue.fields[0];
                return List_empty();
            }
            else {
                const nextValue = matchValue.fields[0];
                return List_singleton(StateModule_mkState(List_cons(next, visited), rest, args, value(nextValue)));
            }
        }
        else {
            return List_empty();
        }
    };
    return inner;
}

export function str(state) {
    return custom("string", (arg0) => (new Option_Result(0, arg0)))(state);
}

export function i32(state) {
    return custom("i32", (arg) => {
        let _arg1;
        const arg00 = arg;
        let outArg = 0;
        _arg1 = [Int32_tryParse(arg00, 511, false, 32, new Types_FSharpRef(() => outArg, (v) => {
            outArg = v;
        })), outArg];
        if (_arg1[0]) {
            const value = _arg1[1] | 0;
            return new Option_Result(0, value);
        }
        else {
            return new Option_Result(1, "Can\u0027t parse int");
        }
    })(state);
}

export function s(str_1) {
    const inner = (_arg1) => {
        const visited = _arg1.visited;
        const value = _arg1.value;
        const unvisited = _arg1.unvisited;
        const args = _arg1.args;
        if (unvisited.tail != null) {
            const rest = unvisited.tail;
            const next = unvisited.head;
            if (next === str_1) {
                return List_singleton(StateModule_mkState(List_cons(next, visited), rest, args, value));
            }
            else {
                return List_empty();
            }
        }
        else {
            return List_empty();
        }
    };
    return inner;
}

export function map(subValue, parse_1) {
    const inner = (_arg1) => {
        const visited = _arg1.visited;
        const value = _arg1.value;
        const unvisited = _arg1.unvisited;
        const args = _arg1.args;
        const list = parse_1(new State$1(visited, unvisited, args, subValue));
        return List_map((arg10$0040) => StateModule_map(value, arg10$0040), list);
    };
    return inner;
}

export function oneOf(parsers, state) {
    return List_collect((parser) => parser(state), parsers);
}

export function top(state) {
    return List_singleton(state);
}

export function customParam(key, func) {
    const inner = (_arg1) => {
        const visited = _arg1.visited;
        const value = _arg1.value;
        const unvisited = _arg1.unvisited;
        const args = _arg1.args;
        return List_singleton(StateModule_mkState(visited, unvisited, args, value(func(Map_tryFind(key, args)))));
    };
    return inner;
}

export function stringParam(name) {
    return customParam(name, (x) => x);
}

export const intParamHelp = (option) => Option_bind((value) => {
    let matchValue;
    let outArg = 0;
    matchValue = [Int32_tryParse(value, 511, false, 32, new Types_FSharpRef(() => outArg, (v) => {
        outArg = v;
    })), outArg];
    if (matchValue[0]) {
        const x = matchValue[1] | 0;
        return x;
    }
    else {
        return void 0;
    }
}, option);

export function intParam(name) {
    return customParam(name, intParamHelp);
}

export function parseHelp(states_mut) {
    parseHelp:
    while (true) {
        const states = states_mut;
        if (states.tail != null) {
            const state = states.head;
            const rest = states.tail;
            const matchValue = state.unvisited;
            let pattern_matching_result;
            if (matchValue.tail != null) {
                if (matchValue.head === "") {
                    if (matchValue.tail.tail == null) {
                        pattern_matching_result = 1;
                    }
                    else {
                        pattern_matching_result = 2;
                    }
                }
                else {
                    pattern_matching_result = 2;
                }
            }
            else {
                pattern_matching_result = 0;
            }
            switch (pattern_matching_result) {
                case 0: {
                    return Option_some(state.value);
                }
                case 1: {
                    return Option_some(state.value);
                }
                case 2: {
                    states_mut = rest;
                    continue parseHelp;
                }
            }
        }
        else {
            return void 0;
        }
        break;
    }
}

export function splitUrl(url) {
    let matchValue;
    const array = url.split("/");
    matchValue = List_ofArray(array);
    let pattern_matching_result, segments, segments_1;
    if (matchValue.tail != null) {
        if (matchValue.head === "") {
            pattern_matching_result = 0;
            segments = matchValue.tail;
        }
        else {
            pattern_matching_result = 1;
            segments_1 = matchValue;
        }
    }
    else {
        pattern_matching_result = 1;
        segments_1 = matchValue;
    }
    switch (pattern_matching_result) {
        case 0: {
            return segments;
        }
        case 1: {
            return segments_1;
        }
    }
}

export function parse(parser, url, args) {
    const states = parser(new State$1(List_empty(), splitUrl(url), args, (x) => x));
    return parseHelp(states);
}

export function toKeyValuePair(segment) {
    const matchValue = String_split(segment, ["="], null, 0);
    if ((!Array_equalsWith(Util_comparePrimitives, matchValue, null)) ? (matchValue.length === 2) : false) {
        const value = matchValue[1];
        const key = matchValue[0];
        return prelude_tuple(prelude_ofFunc(decodeURIComponent, key), prelude_ofFunc(decodeURIComponent, value));
    }
    else {
        return void 0;
    }
}

export function parseParams(querystring) {
    if (querystring.length > 1) {
        let elements;
        let source_1;
        const source = String_split(String_substring(querystring, 1), ["\u0026"], null, 0);
        source_1 = Seq_map(toKeyValuePair, source);
        elements = Seq_choose((x) => x, source_1);
        return Map_ofSeq(elements, {
            Compare: Util_comparePrimitives,
        });
    }
    else {
        return Map_empty({
            Compare: Util_comparePrimitives,
        });
    }
}

export function parsePath(parser, location) {
    return parse(parser, location.pathname, parseParams(location.search));
}

export function parseHash(parser, location) {
    let patternInput;
    const hash = (location.hash.length > 1) ? String_substring(location.hash, 1) : "";
    if (hash.indexOf("?") >= 0) {
        const h = String_substring(hash, 0, hash.indexOf("?"));
        patternInput = [h, String_substring(hash, h.length)];
    }
    else {
        patternInput = [hash, "?"];
    }
    const search = patternInput[1];
    const hash_1 = patternInput[0];
    return parse(parser, hash_1, parseParams(search));
}

