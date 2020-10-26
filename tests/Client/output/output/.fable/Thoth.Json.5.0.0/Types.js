import { FSharpRef as Types_FSharpRef, Record as Types_Record, Union as Types_Union } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Types.js";
import { record_type as Reflection_record_type, class_type as Reflection_class_type, tuple_type as Reflection_tuple_type, lambda_type as Reflection_lambda_type, union_type as Reflection_union_type, list_type as Reflection_list_type, obj_type as Reflection_obj_type, string_type as Reflection_string_type } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Reflection.js";
import { Result as Option_Result } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Option.js";
import { addToDict as MapUtil_addToDict, tryGetValue as MapUtil_tryGetValue } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/MapUtil.js";
import { replace as RegExp_replace } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/RegExp.js";

export class ErrorReason extends Types_Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["BadPrimitive", "BadPrimitiveExtra", "BadType", "BadField", "BadPath", "TooSmallArray", "FailMessage", "BadOneOf"];
    }
}

export function ErrorReason$reflection() {
    return Reflection_union_type("Thoth.Json.ErrorReason", [], ErrorReason, () => [[["Item1", Reflection_string_type], ["Item2", Reflection_obj_type]], [["Item1", Reflection_string_type], ["Item2", Reflection_obj_type], ["Item3", Reflection_string_type]], [["Item1", Reflection_string_type], ["Item2", Reflection_obj_type]], [["Item1", Reflection_string_type], ["Item2", Reflection_obj_type]], [["Item1", Reflection_string_type], ["Item2", Reflection_obj_type], ["Item3", Reflection_string_type]], [["Item1", Reflection_string_type], ["Item2", Reflection_obj_type]], [["Item", Reflection_string_type]], [["Item", Reflection_list_type(Reflection_string_type)]]]);
}

export class CaseStrategy extends Types_Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["PascalCase", "CamelCase", "SnakeCase"];
    }
}

export function CaseStrategy$reflection() {
    return Reflection_union_type("Thoth.Json.CaseStrategy", [], CaseStrategy, () => [[], [], []]);
}

export class ExtraCoders extends Types_Record {
    constructor(Hash, Coders) {
        super();
        this.Hash = Hash;
        this.Coders = Coders;
    }
}

export function ExtraCoders$reflection() {
    return Reflection_record_type("Thoth.Json.ExtraCoders", [], ExtraCoders, () => [["Hash", Reflection_string_type], ["Coders", Reflection_class_type("Microsoft.FSharp.Collections.FSharpMap`2", [Reflection_string_type, Reflection_tuple_type(Reflection_lambda_type(Reflection_obj_type, Reflection_obj_type), Reflection_lambda_type(Reflection_string_type, Reflection_lambda_type(Reflection_obj_type, Reflection_union_type("Microsoft.FSharp.Core.FSharpResult`2", [Reflection_obj_type, Reflection_tuple_type(Reflection_string_type, ErrorReason$reflection())], Option_Result, () => [[["ResultValue", Reflection_obj_type]], [["ErrorValue", Reflection_tuple_type(Reflection_string_type, ErrorReason$reflection())]]]))))])]]);
}

export class Util_Cache$1 {
    constructor() {
        this.cache = (new Map([]));
    }
}

export function Util_Cache$1$reflection(gen0) {
    return Reflection_class_type("Thoth.Json.Util.Cache`1", [gen0], Util_Cache$1);
}

export function Util_Cache$1_$ctor() {
    return new Util_Cache$1();
}

export function Util_Cache$1__GetOrAdd_43981464(__, key, factory) {
    let matchValue;
    let outArg = null;
    matchValue = [MapUtil_tryGetValue(__.cache, key, new Types_FSharpRef(() => outArg, (v) => {
        outArg = v;
    })), outArg];
    if (matchValue[0]) {
        const x = matchValue[1];
        return x;
    }
    else {
        const x_1 = factory();
        MapUtil_addToDict(__.cache, key, x_1);
        return x_1;
    }
}

export const Util_CachedEncoders = Util_Cache$1_$ctor();

export const Util_CachedDecoders = Util_Cache$1_$ctor();

export function Util_Casing_lowerFirst(str) {
    return str.slice(void 0, 0 + 1).toLowerCase() + str.slice(1, str.length);
}

export function Util_Casing_convert(caseStrategy, fieldName) {
    switch (caseStrategy.tag) {
        case 2: {
            return RegExp_replace(Util_Casing_lowerFirst(fieldName), "[A-Z]", "_$0").toLowerCase();
        }
        case 0: {
            return fieldName;
        }
        default: {
            return Util_Casing_lowerFirst(fieldName);
        }
    }
}

