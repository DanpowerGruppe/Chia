import { toFail as String_toFail, printf as String_printf, toText as String_toText, join as String_join } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/String.js";
import { int16ToString as Util_int16ToString, curry as Util_curry, mapCurriedArgs as Util_mapCurriedArgs, compare as Util_compare, comparePrimitives as Util_comparePrimitives, int32ToString as Util_int32ToString, uncurry as Util_uncurry, partialApply as Util_partialApply } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Util.js";
import { map as Option_map, mapOk as Option_mapOk, defaultArg as Option_defaultArg, some as Option_some, Result as Option_Result } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Option.js";
import { Util_CachedDecoders as Types_Util_CachedDecoders, Util_Cache$1__GetOrAdd_43981464 as Types_Util_Cache$1__GetOrAdd_43981464, CaseStrategy as Types_CaseStrategy, Util_Casing_convert as Types_Util_Casing_convert, ErrorReason as Types_ErrorReason } from "./Types.js";
import { tryParse as Guid_tryParse } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Guid.js";
import { toString as Types_toString, FSharpRef as Types_FSharpRef } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Types.js";
import { tryParse as Int32_tryParse } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Int32.js";
import { tryParse as Long_tryParse, fromInt as Long_fromInt, fromNumber as Long_fromNumber, toNumber as Long_toNumber, fromBits as Long_fromBits } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Long.js";
import { parse as BigInt_parse, fromInt32 as BigInt_fromInt32 } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/BigInt.js";
import { tryParse as Decimal_tryParse } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Decimal.js";
import Decimal from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Decimal.js";
import { toUniversalTime as Date_toUniversalTime, tryParse as Date_tryParse, minValue as Date_minValue } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Date.js";
import { tryParse as DateOffset_tryParse, minValue as DateOffset_minValue } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/DateOffset.js";
import { tryParse as TimeSpan_tryParse } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/TimeSpan.js";
import { ofArray as List_ofArray, map as List_map, length as List_length, singleton as List_singleton, append as List_append, ofSeq as List_ofSeq, reverse as List_reverse, empty as List_empty, fold as List_fold, tryLast as List_tryLast, cons as List_cons } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/List.js";
import { map as Array_map, tryFind as Array_tryFind, foldBack2 as Array_foldBack2, foldBack as Array_foldBack, fill as Array_fill, fold as Array_fold } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Array.js";
import { contains as Seq_contains, fold as Seq_fold, reverse as Seq_reverse, append as Seq_append } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Seq.js";
import { empty as Map_empty, map as Map_map, tryFind as Map_tryFind, add as Map_add, ofSeq as Map_ofSeq, ofList as Map_ofList } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Map.js";
import { getGenerics as Reflection_getGenerics, getGenericTypeDefinition as Reflection_getGenericTypeDefinition, makeTuple as Reflection_makeTuple, getTupleElements as Reflection_getTupleElements, isTuple as Reflection_isTuple, isGenericType as Reflection_isGenericType, parseEnum as Reflection_parseEnum, getEnumValues as Reflection_getEnumValues, getEnumUnderlyingType as Reflection_getEnumUnderlyingType, isEnum as Reflection_isEnum, getElementType as Reflection_getElementType, isArray as Reflection_isArray, isUnion as Reflection_isUnion, makeRecord as Reflection_makeRecord, getRecordElements as Reflection_getRecordElements, isRecord as Reflection_isRecord, fullName as Reflection_fullName, getUnionCaseFields as Reflection_getUnionCaseFields, makeUnion as Reflection_makeUnion, name as Reflection_name, getUnionCases as Reflection_getUnionCases, class_type as Reflection_class_type } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Reflection.js";
import { ofSeq as Set_ofSeq } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Set.js";

export function Helpers_isUndefined(o) {
    return (typeof o) === "undefined";
}

function genericMsg(msg, value_1, newLine) {
    try {
        return ((("Expecting " + msg) + " but instead got:") + (newLine ? "\n" : " ")) + (JSON.stringify(value_1, null, 4) + '');
    }
    catch (matchValue) {
        return (("Expecting " + msg) + " but decoder failed. Couldn\u0027t report given value due to circular structure.") + (newLine ? "\n" : " ");
    }
}

function errorToString(path, error) {
    let reason_1;
    switch (error.tag) {
        case 2: {
            const value_2 = error.fields[1];
            const msg_1 = error.fields[0];
            reason_1 = genericMsg(msg_1, value_2, true);
            break;
        }
        case 1: {
            const value_3 = error.fields[1];
            const reason = error.fields[2];
            const msg_2 = error.fields[0];
            reason_1 = ((genericMsg(msg_2, value_3, false) + "\nReason: ") + reason);
            break;
        }
        case 3: {
            const value_4 = error.fields[1];
            const msg_3 = error.fields[0];
            reason_1 = genericMsg(msg_3, value_4, true);
            break;
        }
        case 4: {
            const value_5 = error.fields[1];
            const msg_4 = error.fields[0];
            const fieldName = error.fields[2];
            reason_1 = (genericMsg(msg_4, value_5, true) + (("\nNode `" + fieldName) + "` is unkown."));
            break;
        }
        case 5: {
            const value_6 = error.fields[1];
            const msg_5 = error.fields[0];
            reason_1 = ((("Expecting " + msg_5) + ".\n") + (JSON.stringify(value_6, null, 4) + ''));
            break;
        }
        case 7: {
            const messages = error.fields[0];
            reason_1 = ("The following errors were found:\n\n" + String_join("\n\n", messages));
            break;
        }
        case 6: {
            const msg_6 = error.fields[0];
            reason_1 = ("The following `failure` occurred with the decoder: " + msg_6);
            break;
        }
        default: {
            const value_1 = error.fields[1];
            const msg = error.fields[0];
            reason_1 = genericMsg(msg, value_1, false);
        }
    }
    if (error.tag === 7) {
        return reason_1;
    }
    else {
        return (("Error at: `" + path) + "`\n") + reason_1;
    }
}

export function fromValue(path, decoder, value_1) {
    let matchValue;
    const arg00 = path;
    const arg10 = value_1;
    const clo1 = Util_partialApply(1, decoder, [arg00]);
    matchValue = clo1(arg10);
    if (matchValue.tag === 1) {
        const error = matchValue.fields[0];
        return new Option_Result(1, errorToString(error[0], error[1]));
    }
    else {
        const success = matchValue.fields[0];
        return new Option_Result(0, success);
    }
}

export function fromString(decoder, value_1) {
    let ex;
    try {
        const json = JSON.parse(value_1);
        return fromValue("$", decoder, json);
    }
    catch (matchValue) {
        if (ex = matchValue, ex instanceof SyntaxError) {
            const ex_1 = matchValue;
            return new Option_Result(1, "Given an invalid JSON: " + ex_1.message);
        }
        else {
            throw matchValue;
        }
    }
}

export function unsafeFromString(decoder, value_1) {
    const matchValue = fromString(decoder, value_1);
    if (matchValue.tag === 1) {
        const msg = matchValue.fields[0];
        throw (new Error(msg));
    }
    else {
        const x = matchValue.fields[0];
        return x;
    }
}

export function decodeValue(path, decoder) {
    const decoder_1 = decoder;
    return (value_1) => fromValue(path, decoder_1, value_1);
}

export function decodeString(decoder) {
    const decoder_1 = decoder;
    return (value_1) => fromString(decoder_1, value_1);
}

export function string(path, value_1) {
    if ((typeof value_1) === "string") {
        return new Option_Result(0, value_1);
    }
    else {
        const arg0 = [path, new Types_ErrorReason(0, "a string", value_1)];
        return new Option_Result(1, arg0);
    }
}

export function guid(path, value_1) {
    if ((typeof value_1) === "string") {
        let matchValue;
        let outArg = "00000000-0000-0000-0000-000000000000";
        matchValue = [Guid_tryParse(value_1, new Types_FSharpRef(() => outArg, (v) => {
            outArg = v;
        })), outArg];
        if (matchValue[0]) {
            const x = matchValue[1];
            return new Option_Result(0, x);
        }
        else {
            const arg0 = [path, new Types_ErrorReason(0, "a guid", value_1)];
            return new Option_Result(1, arg0);
        }
    }
    else {
        const arg0_1 = [path, new Types_ErrorReason(0, "a guid", value_1)];
        return new Option_Result(1, arg0_1);
    }
}

export function unit(path, value_1) {
    if (value_1 == null) {
        return new Option_Result(0, void 0);
    }
    else {
        const arg0 = [path, new Types_ErrorReason(0, "null", value_1)];
        return new Option_Result(1, arg0);
    }
}

export const sbyte = (path) => ((value_2) => {
    let value_1;
    const name_1 = "a sbyte";
    const path_1 = path;
    const value_3 = value_2;
    if ((typeof value_3) === "number") {
        const value_4 = value_3;
        if (isFinite(value_4) && Math.floor(value_4) === value_4) {
            if ((-128 <= value_4) ? (value_4 <= 127) : false) {
                return new Option_Result(0, (value_1 = value_4, ((value_1 + 0x80 & 0xFF) - 0x80)));
            }
            else {
                const arg0 = [path_1, new Types_ErrorReason(1, name_1, value_4, "Value was either too large or too small for " + name_1)];
                return new Option_Result(1, arg0);
            }
        }
        else {
            const arg0_1 = [path_1, new Types_ErrorReason(1, name_1, value_4, "Value is not an integral value")];
            return new Option_Result(1, arg0_1);
        }
    }
    else if ((typeof value_3) === "string") {
        let matchValue;
        const arg00 = value_3;
        let outArg = 0;
        matchValue = [Int32_tryParse(arg00, 511, false, 8, new Types_FSharpRef(() => outArg, (v) => {
            outArg = v;
        })), outArg];
        if (matchValue[0]) {
            const x = matchValue[1] | 0;
            return new Option_Result(0, x);
        }
        else {
            const arg0_2 = [path_1, new Types_ErrorReason(0, name_1, value_3)];
            return new Option_Result(1, arg0_2);
        }
    }
    else {
        const arg0_3 = [path_1, new Types_ErrorReason(0, name_1, value_3)];
        return new Option_Result(1, arg0_3);
    }
});

export const byte = (path) => ((value_2) => {
    let value_1;
    const name_1 = "a byte";
    const path_1 = path;
    const value_3 = value_2;
    if ((typeof value_3) === "number") {
        const value_4 = value_3;
        if (isFinite(value_4) && Math.floor(value_4) === value_4) {
            if ((0 <= value_4) ? (value_4 <= 255) : false) {
                return new Option_Result(0, (value_1 = value_4, (value_1 & 0xFF)));
            }
            else {
                const arg0 = [path_1, new Types_ErrorReason(1, name_1, value_4, "Value was either too large or too small for " + name_1)];
                return new Option_Result(1, arg0);
            }
        }
        else {
            const arg0_1 = [path_1, new Types_ErrorReason(1, name_1, value_4, "Value is not an integral value")];
            return new Option_Result(1, arg0_1);
        }
    }
    else if ((typeof value_3) === "string") {
        let matchValue;
        const arg00 = value_3;
        let outArg = 0;
        matchValue = [Int32_tryParse(arg00, 511, true, 8, new Types_FSharpRef(() => outArg, (v) => {
            outArg = v;
        })), outArg];
        if (matchValue[0]) {
            const x = matchValue[1];
            return new Option_Result(0, x);
        }
        else {
            const arg0_2 = [path_1, new Types_ErrorReason(0, name_1, value_3)];
            return new Option_Result(1, arg0_2);
        }
    }
    else {
        const arg0_3 = [path_1, new Types_ErrorReason(0, name_1, value_3)];
        return new Option_Result(1, arg0_3);
    }
});

export const int16 = (path) => ((value_2) => {
    let value_1;
    const name_1 = "an int16";
    const path_1 = path;
    const value_3 = value_2;
    if ((typeof value_3) === "number") {
        const value_4 = value_3;
        if (isFinite(value_4) && Math.floor(value_4) === value_4) {
            if ((-32768 <= value_4) ? (value_4 <= 32767) : false) {
                return new Option_Result(0, (value_1 = value_4, ((value_1 + 0x8000 & 0xFFFF) - 0x8000)));
            }
            else {
                const arg0 = [path_1, new Types_ErrorReason(1, name_1, value_4, "Value was either too large or too small for " + name_1)];
                return new Option_Result(1, arg0);
            }
        }
        else {
            const arg0_1 = [path_1, new Types_ErrorReason(1, name_1, value_4, "Value is not an integral value")];
            return new Option_Result(1, arg0_1);
        }
    }
    else if ((typeof value_3) === "string") {
        let matchValue;
        const arg00 = value_3;
        let outArg = 0;
        matchValue = [Int32_tryParse(arg00, 511, false, 16, new Types_FSharpRef(() => outArg, (v) => {
            outArg = v;
        })), outArg];
        if (matchValue[0]) {
            const x = matchValue[1] | 0;
            return new Option_Result(0, x);
        }
        else {
            const arg0_2 = [path_1, new Types_ErrorReason(0, name_1, value_3)];
            return new Option_Result(1, arg0_2);
        }
    }
    else {
        const arg0_3 = [path_1, new Types_ErrorReason(0, name_1, value_3)];
        return new Option_Result(1, arg0_3);
    }
});

export const uint16 = (path) => ((value_2) => {
    let value_1;
    const name_1 = "an uint16";
    const path_1 = path;
    const value_3 = value_2;
    if ((typeof value_3) === "number") {
        const value_4 = value_3;
        if (isFinite(value_4) && Math.floor(value_4) === value_4) {
            if ((0 <= value_4) ? (value_4 <= 65535) : false) {
                return new Option_Result(0, (value_1 = value_4, (value_1 & 0xFFFF)));
            }
            else {
                const arg0 = [path_1, new Types_ErrorReason(1, name_1, value_4, "Value was either too large or too small for " + name_1)];
                return new Option_Result(1, arg0);
            }
        }
        else {
            const arg0_1 = [path_1, new Types_ErrorReason(1, name_1, value_4, "Value is not an integral value")];
            return new Option_Result(1, arg0_1);
        }
    }
    else if ((typeof value_3) === "string") {
        let matchValue;
        const arg00 = value_3;
        let outArg = 0;
        matchValue = [Int32_tryParse(arg00, 511, true, 16, new Types_FSharpRef(() => outArg, (v) => {
            outArg = v;
        })), outArg];
        if (matchValue[0]) {
            const x = matchValue[1];
            return new Option_Result(0, x);
        }
        else {
            const arg0_2 = [path_1, new Types_ErrorReason(0, name_1, value_3)];
            return new Option_Result(1, arg0_2);
        }
    }
    else {
        const arg0_3 = [path_1, new Types_ErrorReason(0, name_1, value_3)];
        return new Option_Result(1, arg0_3);
    }
});

export const int = (path) => ((value_2) => {
    let value_1;
    const name_1 = "an int";
    const path_1 = path;
    const value_3 = value_2;
    if ((typeof value_3) === "number") {
        const value_4 = value_3;
        if (isFinite(value_4) && Math.floor(value_4) === value_4) {
            if ((-2147483648 <= value_4) ? (value_4 <= 2147483647) : false) {
                return new Option_Result(0, (value_1 = value_4, (~(~value_1))));
            }
            else {
                const arg0 = [path_1, new Types_ErrorReason(1, name_1, value_4, "Value was either too large or too small for " + name_1)];
                return new Option_Result(1, arg0);
            }
        }
        else {
            const arg0_1 = [path_1, new Types_ErrorReason(1, name_1, value_4, "Value is not an integral value")];
            return new Option_Result(1, arg0_1);
        }
    }
    else if ((typeof value_3) === "string") {
        let matchValue;
        const arg00 = value_3;
        let outArg = 0;
        matchValue = [Int32_tryParse(arg00, 511, false, 32, new Types_FSharpRef(() => outArg, (v) => {
            outArg = v;
        })), outArg];
        if (matchValue[0]) {
            const x = matchValue[1] | 0;
            return new Option_Result(0, x);
        }
        else {
            const arg0_2 = [path_1, new Types_ErrorReason(0, name_1, value_3)];
            return new Option_Result(1, arg0_2);
        }
    }
    else {
        const arg0_3 = [path_1, new Types_ErrorReason(0, name_1, value_3)];
        return new Option_Result(1, arg0_3);
    }
});

export const uint32 = (path) => ((value_2) => {
    let value_1;
    const name_1 = "an uint32";
    const path_1 = path;
    const value_3 = value_2;
    if ((typeof value_3) === "number") {
        const value_4 = value_3;
        if (isFinite(value_4) && Math.floor(value_4) === value_4) {
            if ((0 <= value_4) ? (value_4 <= 4294967295) : false) {
                return new Option_Result(0, (value_1 = value_4, (value_1 >>> 0)));
            }
            else {
                const arg0 = [path_1, new Types_ErrorReason(1, name_1, value_4, "Value was either too large or too small for " + name_1)];
                return new Option_Result(1, arg0);
            }
        }
        else {
            const arg0_1 = [path_1, new Types_ErrorReason(1, name_1, value_4, "Value is not an integral value")];
            return new Option_Result(1, arg0_1);
        }
    }
    else if ((typeof value_3) === "string") {
        let matchValue;
        const arg00 = value_3;
        let outArg = 0;
        matchValue = [Int32_tryParse(arg00, 511, true, 32, new Types_FSharpRef(() => outArg, (v) => {
            outArg = v;
        })), outArg];
        if (matchValue[0]) {
            const x = matchValue[1];
            return new Option_Result(0, x);
        }
        else {
            const arg0_2 = [path_1, new Types_ErrorReason(0, name_1, value_3)];
            return new Option_Result(1, arg0_2);
        }
    }
    else {
        const arg0_3 = [path_1, new Types_ErrorReason(0, name_1, value_3)];
        return new Option_Result(1, arg0_3);
    }
});

export const int64 = (() => {
    const min = Long_fromBits(0, 2147483648, false);
    const max = Long_fromBits(4294967295, 2147483647, false);
    return (path) => ((value_2) => {
        let value_1;
        const name_1 = "an int64";
        const path_1 = path;
        const value_3 = value_2;
        if ((typeof value_3) === "number") {
            const value_4 = value_3;
            if (isFinite(value_4) && Math.floor(value_4) === value_4) {
                if ((Long_toNumber(min) <= value_4) ? (value_4 <= Long_toNumber(max)) : false) {
                    return new Option_Result(0, (value_1 = value_4, (Long_fromNumber(value_1, false))));
                }
                else {
                    const arg0 = [path_1, new Types_ErrorReason(1, name_1, value_4, "Value was either too large or too small for " + name_1)];
                    return new Option_Result(1, arg0);
                }
            }
            else {
                const arg0_1 = [path_1, new Types_ErrorReason(1, name_1, value_4, "Value is not an integral value")];
                return new Option_Result(1, arg0_1);
            }
        }
        else if ((typeof value_3) === "string") {
            let matchValue;
            const arg00 = value_3;
            let outArg = Long_fromInt(0);
            matchValue = [Long_tryParse(arg00, 511, false, 64, new Types_FSharpRef(() => outArg, (v) => {
                outArg = v;
            })), outArg];
            if (matchValue[0]) {
                const x = matchValue[1];
                return new Option_Result(0, x);
            }
            else {
                const arg0_2 = [path_1, new Types_ErrorReason(0, name_1, value_3)];
                return new Option_Result(1, arg0_2);
            }
        }
        else {
            const arg0_3 = [path_1, new Types_ErrorReason(0, name_1, value_3)];
            return new Option_Result(1, arg0_3);
        }
    });
})();

export const uint64 = (() => {
    const min = Long_fromBits(0, 0, true);
    const max = Long_fromBits(4294967295, 4294967295, true);
    return (path) => ((value_2) => {
        let value_1;
        const name_1 = "an uint64";
        const path_1 = path;
        const value_3 = value_2;
        if ((typeof value_3) === "number") {
            const value_4 = value_3;
            if (isFinite(value_4) && Math.floor(value_4) === value_4) {
                if ((Long_toNumber(min) <= value_4) ? (value_4 <= Long_toNumber(max)) : false) {
                    return new Option_Result(0, (value_1 = value_4, (Long_fromNumber(value_1, true))));
                }
                else {
                    const arg0 = [path_1, new Types_ErrorReason(1, name_1, value_4, "Value was either too large or too small for " + name_1)];
                    return new Option_Result(1, arg0);
                }
            }
            else {
                const arg0_1 = [path_1, new Types_ErrorReason(1, name_1, value_4, "Value is not an integral value")];
                return new Option_Result(1, arg0_1);
            }
        }
        else if ((typeof value_3) === "string") {
            let matchValue;
            const arg00 = value_3;
            let outArg = Long_fromInt(0);
            matchValue = [Long_tryParse(arg00, 511, true, 64, new Types_FSharpRef(() => outArg, (v) => {
                outArg = v;
            })), outArg];
            if (matchValue[0]) {
                const x = matchValue[1];
                return new Option_Result(0, x);
            }
            else {
                const arg0_2 = [path_1, new Types_ErrorReason(0, name_1, value_3)];
                return new Option_Result(1, arg0_2);
            }
        }
        else {
            const arg0_3 = [path_1, new Types_ErrorReason(0, name_1, value_3)];
            return new Option_Result(1, arg0_3);
        }
    });
})();

export function bigint(path, value_1) {
    if ((typeof value_1) === "number") {
        let arg0;
        const arg00 = value_1 | 0;
        arg0 = BigInt_fromInt32(arg00);
        return new Option_Result(0, arg0);
    }
    else if ((typeof value_1) === "string") {
        try {
            const arg0_1 = BigInt_parse(value_1);
            return new Option_Result(0, arg0_1);
        }
        catch (matchValue) {
            const arg0_2 = [path, new Types_ErrorReason(0, "a bigint", value_1)];
            return new Option_Result(1, arg0_2);
        }
    }
    else {
        const arg0_3 = [path, new Types_ErrorReason(0, "a bigint", value_1)];
        return new Option_Result(1, arg0_3);
    }
}

export function bool(path, value_1) {
    if ((typeof value_1) === "boolean") {
        return new Option_Result(0, value_1);
    }
    else {
        const arg0 = [path, new Types_ErrorReason(0, "a boolean", value_1)];
        return new Option_Result(1, arg0);
    }
}

export function float(path, value_1) {
    if ((typeof value_1) === "number") {
        return new Option_Result(0, value_1);
    }
    else {
        const arg0 = [path, new Types_ErrorReason(0, "a float", value_1)];
        return new Option_Result(1, arg0);
    }
}

export function float32(path, value_1) {
    if ((typeof value_1) === "number") {
        return new Option_Result(0, value_1);
    }
    else {
        const arg0 = [path, new Types_ErrorReason(0, "a float32", value_1)];
        return new Option_Result(1, arg0);
    }
}

export function decimal(path, value_1) {
    if ((typeof value_1) === "number") {
        let arg0;
        const value_2 = value_1;
        arg0 = (new Decimal(value_2));
        return new Option_Result(0, arg0);
    }
    else if ((typeof value_1) === "string") {
        let matchValue;
        let outArg = new Decimal(0);
        matchValue = [Decimal_tryParse(value_1, new Types_FSharpRef(() => outArg, (v) => {
            outArg = v;
        })), outArg];
        if (matchValue[0]) {
            const x = matchValue[1];
            return new Option_Result(0, x);
        }
        else {
            const arg0_1 = [path, new Types_ErrorReason(0, "a decimal", value_1)];
            return new Option_Result(1, arg0_1);
        }
    }
    else {
        const arg0_2 = [path, new Types_ErrorReason(0, "a decimal", value_1)];
        return new Option_Result(1, arg0_2);
    }
}

export function datetime(path, value_1) {
    if ((typeof value_1) === "string") {
        let matchValue;
        let outArg = Date_minValue();
        matchValue = [Date_tryParse(value_1, new Types_FSharpRef(() => outArg, (v) => {
            outArg = v;
        })), outArg];
        if (matchValue[0]) {
            const x = matchValue[1];
            const arg0 = Date_toUniversalTime(x);
            return new Option_Result(0, arg0);
        }
        else {
            const arg0_1 = [path, new Types_ErrorReason(0, "a datetime", value_1)];
            return new Option_Result(1, arg0_1);
        }
    }
    else {
        const arg0_2 = [path, new Types_ErrorReason(0, "a datetime", value_1)];
        return new Option_Result(1, arg0_2);
    }
}

export function datetimeOffset(path, value_1) {
    if ((typeof value_1) === "string") {
        let matchValue;
        let outArg = DateOffset_minValue();
        matchValue = [DateOffset_tryParse(value_1, new Types_FSharpRef(() => outArg, (v) => {
            outArg = v;
        })), outArg];
        if (matchValue[0]) {
            const x = matchValue[1];
            return new Option_Result(0, x);
        }
        else {
            const arg0 = [path, new Types_ErrorReason(0, "a datetimeoffset", value_1)];
            return new Option_Result(1, arg0);
        }
    }
    else {
        const arg0_1 = [path, new Types_ErrorReason(0, "a datetime", value_1)];
        return new Option_Result(1, arg0_1);
    }
}

export function timespan(path, value_1) {
    if ((typeof value_1) === "string") {
        let matchValue;
        let outArg = 0;
        matchValue = [TimeSpan_tryParse(value_1, new Types_FSharpRef(() => outArg, (v) => {
            outArg = v;
        })), outArg];
        if (matchValue[0]) {
            const x = matchValue[1];
            return new Option_Result(0, x);
        }
        else {
            const arg0 = [path, new Types_ErrorReason(0, "a timespan", value_1)];
            return new Option_Result(1, arg0);
        }
    }
    else {
        const arg0_1 = [path, new Types_ErrorReason(0, "a timespan", value_1)];
        return new Option_Result(1, arg0_1);
    }
}

function decodeMaybeNull(path, decoder, value_1) {
    let matchValue;
    const arg00 = path;
    const arg10 = value_1;
    const clo1 = Util_partialApply(1, decoder, [arg00]);
    matchValue = clo1(arg10);
    if (matchValue.tag === 1) {
        if (value_1 == null) {
            return new Option_Result(0, void 0);
        }
        else if (matchValue.tag === 1) {
            const er = matchValue.fields[0];
            return new Option_Result(1, er);
        }
        else {
            throw (new Error("The match cases were incomplete"));
        }
    }
    else {
        const v = matchValue.fields[0];
        return new Option_Result(0, Option_some(v));
    }
}

export function optional(fieldName, decoder, path, value_1) {
    if (value_1 === null ? false : (Object.getPrototypeOf(value_1 || false) === Object.prototype)) {
        const fieldValue = value_1[fieldName];
        if (Helpers_isUndefined(fieldValue)) {
            return new Option_Result(0, void 0);
        }
        else {
            return decodeMaybeNull((path + ".") + fieldName, decoder, fieldValue);
        }
    }
    else {
        return new Option_Result(1, [path, new Types_ErrorReason(2, "an object", value_1)]);
    }
}

function badPathError(fieldNames, currentPath, value_1) {
    let strings, option_1;
    const currentPath_1 = Option_defaultArg(currentPath, (strings = List_cons("$", fieldNames), (String_join(".", strings))));
    const msg = ("an object with path `" + String_join(".", fieldNames)) + "`";
    return new Option_Result(1, [currentPath_1, new Types_ErrorReason(4, msg, value_1, (option_1 = List_tryLast(fieldNames), (Option_defaultArg(option_1, ""))))]);
}

export function optionalAt(fieldNames, decoder, firstPath, firstValue) {
    let _arg1;
    const state = [firstPath, firstValue, void 0];
    const list_1 = fieldNames;
    _arg1 = List_fold(Util_uncurry(2, (tupledArg) => {
        const curPath = tupledArg[0];
        const curValue = tupledArg[1];
        const res = tupledArg[2];
        return (field_1) => {
            if (res == null) {
                if (curValue == null) {
                    return [curPath, curValue, new Option_Result(0, void 0)];
                }
                else if (curValue === null ? false : (Object.getPrototypeOf(curValue || false) === Object.prototype)) {
                    const curValue_1 = curValue[field_1];
                    return [(curPath + ".") + field_1, curValue_1, void 0];
                }
                else {
                    const res_1 = new Option_Result(1, [curPath, new Types_ErrorReason(2, "an object", curValue)]);
                    return [curPath, curValue, res_1];
                }
            }
            else {
                return [curPath, curValue, res];
            }
        };
    }), state, list_1);
    if (_arg1[2] == null) {
        const lastValue = _arg1[1];
        const lastPath = _arg1[0];
        if (Helpers_isUndefined(lastValue)) {
            return new Option_Result(0, void 0);
        }
        else {
            return decodeMaybeNull(lastPath, decoder, lastValue);
        }
    }
    else {
        const res_2 = _arg1[2];
        return res_2;
    }
}

export function field(fieldName, decoder, path, value_1) {
    if (value_1 === null ? false : (Object.getPrototypeOf(value_1 || false) === Object.prototype)) {
        const fieldValue = value_1[fieldName];
        if (Helpers_isUndefined(fieldValue)) {
            return new Option_Result(1, [path, new Types_ErrorReason(3, ("an object with a field named `" + fieldName) + "`", value_1)]);
        }
        else {
            return decoder((path + ".") + fieldName, fieldValue);
        }
    }
    else {
        return new Option_Result(1, [path, new Types_ErrorReason(2, "an object", value_1)]);
    }
}

export function at(fieldNames, decoder, firstPath, firstValue) {
    let _arg1;
    const state = [firstPath, firstValue, void 0];
    const list_1 = fieldNames;
    _arg1 = List_fold(Util_uncurry(2, (tupledArg) => {
        const curPath = tupledArg[0];
        const curValue = tupledArg[1];
        const res = tupledArg[2];
        return (field_1) => {
            if (res == null) {
                if (curValue == null) {
                    const res_1 = badPathError(fieldNames, curPath, firstValue);
                    return [curPath, curValue, res_1];
                }
                else if (curValue === null ? false : (Object.getPrototypeOf(curValue || false) === Object.prototype)) {
                    const curValue_1 = curValue[field_1];
                    if (Helpers_isUndefined(curValue_1)) {
                        const res_2 = badPathError(fieldNames, void 0, firstValue);
                        return [curPath, curValue_1, res_2];
                    }
                    else {
                        return [(curPath + ".") + field_1, curValue_1, void 0];
                    }
                }
                else {
                    const res_3 = new Option_Result(1, [curPath, new Types_ErrorReason(2, "an object", curValue)]);
                    return [curPath, curValue, res_3];
                }
            }
            else {
                return [curPath, curValue, res];
            }
        };
    }), state, list_1);
    if (_arg1[2] == null) {
        const lastValue = _arg1[1];
        const lastPath = _arg1[0];
        return decoder(lastPath, lastValue);
    }
    else {
        const res_4 = _arg1[2];
        return res_4;
    }
}

export function index(requestedIndex, decoder, path, value_1) {
    let copyOfStruct;
    const currentPath = ((path + ".[") + Util_int32ToString(requestedIndex)) + "]";
    if (Array.isArray(value_1)) {
        const vArray = value_1;
        if (requestedIndex < vArray.length) {
            return decoder(currentPath, vArray[requestedIndex]);
        }
        else {
            const msg = ((("a longer array. Need index `" + Util_int32ToString(requestedIndex)) + "` but there are only `") + (copyOfStruct = (vArray.length | 0), Util_int32ToString(copyOfStruct))) + "` entries";
            const arg0 = [currentPath, new Types_ErrorReason(5, msg, value_1)];
            return new Option_Result(1, arg0);
        }
    }
    else {
        const arg0_1 = [currentPath, new Types_ErrorReason(0, "an array", value_1)];
        return new Option_Result(1, arg0_1);
    }
}

export function option(decoder, path, value_1) {
    if (value_1 == null) {
        return new Option_Result(0, void 0);
    }
    else {
        const result = decoder(path, value_1);
        return Option_mapOk(Option_some, result);
    }
}

export function list(decoder, path, value_1) {
    if (Array.isArray(value_1)) {
        let i = -1;
        const tokens = value_1;
        let result;
        const state = new Option_Result(0, List_empty());
        const array_1 = tokens;
        result = Array_fold((acc, value_2) => {
            i = (i + 1);
            if (acc.tag === 0) {
                const acc_1 = acc.fields[0];
                const matchValue = decoder(((path + ".[") + Util_int32ToString(i)) + "]", value_2);
                if (matchValue.tag === 0) {
                    const value_3 = matchValue.fields[0];
                    return new Option_Result(0, List_cons(value_3, acc_1));
                }
                else {
                    const er = matchValue.fields[0];
                    return new Option_Result(1, er);
                }
            }
            else {
                return acc;
            }
        }, state, array_1);
        return Option_mapOk(List_reverse, result);
    }
    else {
        const arg0 = [path, new Types_ErrorReason(0, "a list", value_1)];
        return new Option_Result(1, arg0);
    }
}

export function seq(decoder, path, value_1) {
    if (Array.isArray(value_1)) {
        let i = -1;
        const tokens = value_1;
        let result;
        const state = new Option_Result(0, []);
        const array_1 = tokens;
        result = Array_fold((acc, value_2) => {
            i = (i + 1);
            if (acc.tag === 0) {
                const acc_1 = acc.fields[0];
                const matchValue = decoder(((path + ".[") + Util_int32ToString(i)) + "]", value_2);
                if (matchValue.tag === 0) {
                    const value_3 = matchValue.fields[0];
                    return new Option_Result(0, Seq_append([value_3], acc_1));
                }
                else {
                    const er = matchValue.fields[0];
                    return new Option_Result(1, er);
                }
            }
            else {
                return acc;
            }
        }, state, array_1);
        return Option_mapOk(Seq_reverse, result);
    }
    else {
        const arg0 = [path, new Types_ErrorReason(0, "a seq", value_1)];
        return new Option_Result(1, arg0);
    }
}

export function array(decoder, path, value_1) {
    if (Array.isArray(value_1)) {
        let i = -1;
        const tokens = value_1;
        const arr = Array_fill(new Array(tokens.length), 0, tokens.length, null);
        const state = new Option_Result(0, arr);
        const array_1 = tokens;
        return Array_fold((acc, value_2) => {
            i = (i + 1);
            if (acc.tag === 0) {
                const acc_1 = acc.fields[0];
                const matchValue = decoder(((path + ".[") + Util_int32ToString(i)) + "]", value_2);
                if (matchValue.tag === 0) {
                    const value_3 = matchValue.fields[0];
                    acc_1[i] = value_3;
                    return new Option_Result(0, acc_1);
                }
                else {
                    const er = matchValue.fields[0];
                    return new Option_Result(1, er);
                }
            }
            else {
                return acc;
            }
        }, state, array_1);
    }
    else {
        const arg0 = [path, new Types_ErrorReason(0, "an array", value_1)];
        return new Option_Result(1, arg0);
    }
}

export function keys(path, value_1) {
    if (value_1 === null ? false : (Object.getPrototypeOf(value_1 || false) === Object.prototype)) {
        let arg0;
        const source = Object.keys(value_1);
        arg0 = List_ofSeq(source);
        return new Option_Result(0, arg0);
    }
    else {
        const arg0_1 = [path, new Types_ErrorReason(0, "an object", value_1)];
        return new Option_Result(1, arg0_1);
    }
}

export function keyValuePairs(decoder, path, value_1) {
    const matchValue = keys(path, value_1);
    if (matchValue.tag === 1) {
        const e = matchValue.fields[0];
        return new Option_Result(1, e);
    }
    else {
        const objectKeys = matchValue.fields[0];
        let result;
        const state = new Option_Result(0, List_empty());
        const list_1 = objectKeys;
        result = List_fold((acc, prop) => {
            if (acc.tag === 0) {
                const acc_1 = acc.fields[0];
                const matchValue_1 = decoder(path, value_1[prop]);
                if (matchValue_1.tag === 0) {
                    const value_2 = matchValue_1.fields[0];
                    const arg0 = List_cons([prop, value_2], acc_1);
                    return new Option_Result(0, arg0);
                }
                else {
                    const er = matchValue_1.fields[0];
                    return new Option_Result(1, er);
                }
            }
            else {
                return acc;
            }
        }, state, list_1);
        return Option_mapOk(List_reverse, result);
    }
}

export function oneOf(decoders, path, value_1) {
    const runner = (decoders_1_mut, errors_mut) => {
        runner:
        while (true) {
            const decoders_1 = decoders_1_mut, errors = errors_mut;
            if (decoders_1.tail == null) {
                const arg0 = [path, new Types_ErrorReason(7, errors)];
                return new Option_Result(1, arg0);
            }
            else {
                const tail = decoders_1.tail;
                const head = decoders_1.head;
                const matchValue = fromValue(path, Util_uncurry(2, head), value_1);
                if (matchValue.tag === 1) {
                    const error = matchValue.fields[0];
                    decoders_1_mut = tail;
                    errors_mut = List_append(errors, List_singleton(error));
                    continue runner;
                }
                else {
                    const v = matchValue.fields[0];
                    return new Option_Result(0, v);
                }
            }
            break;
        }
    };
    return runner(decoders, List_empty());
}

export function nil(output, path, value_1) {
    if (value_1 == null) {
        return new Option_Result(0, output);
    }
    else {
        const arg0 = [path, new Types_ErrorReason(0, "null", value_1)];
        return new Option_Result(1, arg0);
    }
}

export function value(_arg1, v) {
    return new Option_Result(0, v);
}

export function succeed(output, _arg2, _arg1) {
    return new Option_Result(0, output);
}

export function fail(msg, path, _arg1) {
    const arg0 = [path, new Types_ErrorReason(6, msg)];
    return new Option_Result(1, arg0);
}

export function andThen(cb, decoder, path, value_1) {
    const matchValue = decoder(path, value_1);
    if (matchValue.tag === 0) {
        const result = matchValue.fields[0];
        return cb(result, path, value_1);
    }
    else {
        const error = matchValue.fields[0];
        return new Option_Result(1, error);
    }
}

export function all(decoders, path, value_1) {
    const runner = (decoders_1_mut, values_mut) => {
        runner:
        while (true) {
            const decoders_1 = decoders_1_mut, values = values_mut;
            if (decoders_1.tail == null) {
                return new Option_Result(0, values);
            }
            else {
                const tail = decoders_1.tail;
                const decoder = decoders_1.head;
                const matchValue = decoder(path)(value_1);
                if (matchValue.tag === 1) {
                    const error = matchValue.fields[0];
                    return new Option_Result(1, error);
                }
                else {
                    const value_2 = matchValue.fields[0];
                    decoders_1_mut = tail;
                    values_mut = List_append(values, List_singleton(value_2));
                    continue runner;
                }
            }
            break;
        }
    };
    return runner(decoders, List_empty());
}

export function map(ctor, d1, path, value_1) {
    const matchValue = d1(path, value_1);
    if (matchValue.tag === 1) {
        const er = matchValue.fields[0];
        return new Option_Result(1, er);
    }
    else {
        const v1 = matchValue.fields[0];
        return new Option_Result(0, ctor(v1));
    }
}

export function map2(ctor, d1, d2, path, value_1) {
    const matchValue = [d1(path, value_1), d2(path, value_1)];
    const copyOfStruct = matchValue[0];
    if (copyOfStruct.tag === 1) {
        const er = copyOfStruct.fields[0];
        return new Option_Result(1, er);
    }
    else {
        const copyOfStruct_1 = matchValue[1];
        if (copyOfStruct_1.tag === 1) {
            const er_1 = copyOfStruct_1.fields[0];
            return new Option_Result(1, er_1);
        }
        else {
            const v1 = copyOfStruct.fields[0];
            const v2 = copyOfStruct_1.fields[0];
            return new Option_Result(0, ctor(v1, v2));
        }
    }
}

export function map3(ctor, d1, d2, d3, path, value_1) {
    const matchValue = [d1(path, value_1), d2(path, value_1), d3(path, value_1)];
    const copyOfStruct = matchValue[0];
    if (copyOfStruct.tag === 1) {
        const er = copyOfStruct.fields[0];
        return new Option_Result(1, er);
    }
    else {
        const copyOfStruct_1 = matchValue[1];
        if (copyOfStruct_1.tag === 1) {
            const er_1 = copyOfStruct_1.fields[0];
            return new Option_Result(1, er_1);
        }
        else {
            const copyOfStruct_2 = matchValue[2];
            if (copyOfStruct_2.tag === 1) {
                const er_2 = copyOfStruct_2.fields[0];
                return new Option_Result(1, er_2);
            }
            else {
                const v1 = copyOfStruct.fields[0];
                const v2 = copyOfStruct_1.fields[0];
                const v3 = copyOfStruct_2.fields[0];
                return new Option_Result(0, ctor(v1, v2, v3));
            }
        }
    }
}

export function map4(ctor, d1, d2, d3, d4, path, value_1) {
    const matchValue = [d1(path, value_1), d2(path, value_1), d3(path, value_1), d4(path, value_1)];
    const copyOfStruct = matchValue[0];
    if (copyOfStruct.tag === 1) {
        const er = copyOfStruct.fields[0];
        return new Option_Result(1, er);
    }
    else {
        const copyOfStruct_1 = matchValue[1];
        if (copyOfStruct_1.tag === 1) {
            const er_1 = copyOfStruct_1.fields[0];
            return new Option_Result(1, er_1);
        }
        else {
            const copyOfStruct_2 = matchValue[2];
            if (copyOfStruct_2.tag === 1) {
                const er_2 = copyOfStruct_2.fields[0];
                return new Option_Result(1, er_2);
            }
            else {
                const copyOfStruct_3 = matchValue[3];
                if (copyOfStruct_3.tag === 1) {
                    const er_3 = copyOfStruct_3.fields[0];
                    return new Option_Result(1, er_3);
                }
                else {
                    const v1 = copyOfStruct.fields[0];
                    const v2 = copyOfStruct_1.fields[0];
                    const v3 = copyOfStruct_2.fields[0];
                    const v4 = copyOfStruct_3.fields[0];
                    return new Option_Result(0, ctor(v1, v2, v3, v4));
                }
            }
        }
    }
}

export function map5(ctor, d1, d2, d3, d4, d5, path, value_1) {
    const matchValue = [d1(path, value_1), d2(path, value_1), d3(path, value_1), d4(path, value_1), d5(path, value_1)];
    const copyOfStruct = matchValue[0];
    if (copyOfStruct.tag === 1) {
        const er = copyOfStruct.fields[0];
        return new Option_Result(1, er);
    }
    else {
        const copyOfStruct_1 = matchValue[1];
        if (copyOfStruct_1.tag === 1) {
            const er_1 = copyOfStruct_1.fields[0];
            return new Option_Result(1, er_1);
        }
        else {
            const copyOfStruct_2 = matchValue[2];
            if (copyOfStruct_2.tag === 1) {
                const er_2 = copyOfStruct_2.fields[0];
                return new Option_Result(1, er_2);
            }
            else {
                const copyOfStruct_3 = matchValue[3];
                if (copyOfStruct_3.tag === 1) {
                    const er_3 = copyOfStruct_3.fields[0];
                    return new Option_Result(1, er_3);
                }
                else {
                    const copyOfStruct_4 = matchValue[4];
                    if (copyOfStruct_4.tag === 1) {
                        const er_4 = copyOfStruct_4.fields[0];
                        return new Option_Result(1, er_4);
                    }
                    else {
                        const v1 = copyOfStruct.fields[0];
                        const v2 = copyOfStruct_1.fields[0];
                        const v3 = copyOfStruct_2.fields[0];
                        const v4 = copyOfStruct_3.fields[0];
                        const v5 = copyOfStruct_4.fields[0];
                        return new Option_Result(0, ctor(v1, v2, v3, v4, v5));
                    }
                }
            }
        }
    }
}

export function map6(ctor, d1, d2, d3, d4, d5, d6, path, value_1) {
    const matchValue = [d1(path, value_1), d2(path, value_1), d3(path, value_1), d4(path, value_1), d5(path, value_1), d6(path, value_1)];
    const copyOfStruct = matchValue[0];
    if (copyOfStruct.tag === 1) {
        const er = copyOfStruct.fields[0];
        return new Option_Result(1, er);
    }
    else {
        const copyOfStruct_1 = matchValue[1];
        if (copyOfStruct_1.tag === 1) {
            const er_1 = copyOfStruct_1.fields[0];
            return new Option_Result(1, er_1);
        }
        else {
            const copyOfStruct_2 = matchValue[2];
            if (copyOfStruct_2.tag === 1) {
                const er_2 = copyOfStruct_2.fields[0];
                return new Option_Result(1, er_2);
            }
            else {
                const copyOfStruct_3 = matchValue[3];
                if (copyOfStruct_3.tag === 1) {
                    const er_3 = copyOfStruct_3.fields[0];
                    return new Option_Result(1, er_3);
                }
                else {
                    const copyOfStruct_4 = matchValue[4];
                    if (copyOfStruct_4.tag === 1) {
                        const er_4 = copyOfStruct_4.fields[0];
                        return new Option_Result(1, er_4);
                    }
                    else {
                        const copyOfStruct_5 = matchValue[5];
                        if (copyOfStruct_5.tag === 1) {
                            const er_5 = copyOfStruct_5.fields[0];
                            return new Option_Result(1, er_5);
                        }
                        else {
                            const v1 = copyOfStruct.fields[0];
                            const v2 = copyOfStruct_1.fields[0];
                            const v3 = copyOfStruct_2.fields[0];
                            const v4 = copyOfStruct_3.fields[0];
                            const v5 = copyOfStruct_4.fields[0];
                            const v6 = copyOfStruct_5.fields[0];
                            return new Option_Result(0, ctor(v1, v2, v3, v4, v5, v6));
                        }
                    }
                }
            }
        }
    }
}

export function map7(ctor, d1, d2, d3, d4, d5, d6, d7, path, value_1) {
    const matchValue = [d1(path, value_1), d2(path, value_1), d3(path, value_1), d4(path, value_1), d5(path, value_1), d6(path, value_1), d7(path, value_1)];
    const copyOfStruct = matchValue[0];
    if (copyOfStruct.tag === 1) {
        const er = copyOfStruct.fields[0];
        return new Option_Result(1, er);
    }
    else {
        const copyOfStruct_1 = matchValue[1];
        if (copyOfStruct_1.tag === 1) {
            const er_1 = copyOfStruct_1.fields[0];
            return new Option_Result(1, er_1);
        }
        else {
            const copyOfStruct_2 = matchValue[2];
            if (copyOfStruct_2.tag === 1) {
                const er_2 = copyOfStruct_2.fields[0];
                return new Option_Result(1, er_2);
            }
            else {
                const copyOfStruct_3 = matchValue[3];
                if (copyOfStruct_3.tag === 1) {
                    const er_3 = copyOfStruct_3.fields[0];
                    return new Option_Result(1, er_3);
                }
                else {
                    const copyOfStruct_4 = matchValue[4];
                    if (copyOfStruct_4.tag === 1) {
                        const er_4 = copyOfStruct_4.fields[0];
                        return new Option_Result(1, er_4);
                    }
                    else {
                        const copyOfStruct_5 = matchValue[5];
                        if (copyOfStruct_5.tag === 1) {
                            const er_5 = copyOfStruct_5.fields[0];
                            return new Option_Result(1, er_5);
                        }
                        else {
                            const copyOfStruct_6 = matchValue[6];
                            if (copyOfStruct_6.tag === 1) {
                                const er_6 = copyOfStruct_6.fields[0];
                                return new Option_Result(1, er_6);
                            }
                            else {
                                const v1 = copyOfStruct.fields[0];
                                const v2 = copyOfStruct_1.fields[0];
                                const v3 = copyOfStruct_2.fields[0];
                                const v4 = copyOfStruct_3.fields[0];
                                const v5 = copyOfStruct_4.fields[0];
                                const v6 = copyOfStruct_5.fields[0];
                                const v7 = copyOfStruct_6.fields[0];
                                return new Option_Result(0, ctor(v1, v2, v3, v4, v5, v6, v7));
                            }
                        }
                    }
                }
            }
        }
    }
}

export function map8(ctor, d1, d2, d3, d4, d5, d6, d7, d8, path, value_1) {
    const matchValue = [d1(path, value_1), d2(path, value_1), d3(path, value_1), d4(path, value_1), d5(path, value_1), d6(path, value_1), d7(path, value_1), d8(path, value_1)];
    const copyOfStruct = matchValue[0];
    if (copyOfStruct.tag === 1) {
        const er = copyOfStruct.fields[0];
        return new Option_Result(1, er);
    }
    else {
        const copyOfStruct_1 = matchValue[1];
        if (copyOfStruct_1.tag === 1) {
            const er_1 = copyOfStruct_1.fields[0];
            return new Option_Result(1, er_1);
        }
        else {
            const copyOfStruct_2 = matchValue[2];
            if (copyOfStruct_2.tag === 1) {
                const er_2 = copyOfStruct_2.fields[0];
                return new Option_Result(1, er_2);
            }
            else {
                const copyOfStruct_3 = matchValue[3];
                if (copyOfStruct_3.tag === 1) {
                    const er_3 = copyOfStruct_3.fields[0];
                    return new Option_Result(1, er_3);
                }
                else {
                    const copyOfStruct_4 = matchValue[4];
                    if (copyOfStruct_4.tag === 1) {
                        const er_4 = copyOfStruct_4.fields[0];
                        return new Option_Result(1, er_4);
                    }
                    else {
                        const copyOfStruct_5 = matchValue[5];
                        if (copyOfStruct_5.tag === 1) {
                            const er_5 = copyOfStruct_5.fields[0];
                            return new Option_Result(1, er_5);
                        }
                        else {
                            const copyOfStruct_6 = matchValue[6];
                            if (copyOfStruct_6.tag === 1) {
                                const er_6 = copyOfStruct_6.fields[0];
                                return new Option_Result(1, er_6);
                            }
                            else {
                                const copyOfStruct_7 = matchValue[7];
                                if (copyOfStruct_7.tag === 1) {
                                    const er_7 = copyOfStruct_7.fields[0];
                                    return new Option_Result(1, er_7);
                                }
                                else {
                                    const v1 = copyOfStruct.fields[0];
                                    const v2 = copyOfStruct_1.fields[0];
                                    const v3 = copyOfStruct_2.fields[0];
                                    const v4 = copyOfStruct_3.fields[0];
                                    const v5 = copyOfStruct_4.fields[0];
                                    const v6 = copyOfStruct_5.fields[0];
                                    const v7 = copyOfStruct_6.fields[0];
                                    const v8 = copyOfStruct_7.fields[0];
                                    return new Option_Result(0, ctor(v1, v2, v3, v4, v5, v6, v7, v8));
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

export function dict(decoder) {
    let d1;
    const decoder_1 = decoder;
    d1 = ((path) => ((value_1) => keyValuePairs(decoder_1, path, value_1)));
    return (path_1) => ((value_2) => map((elements) => Map_ofList(elements, {
        Compare: Util_comparePrimitives,
    }), Util_uncurry(2, d1), path_1, value_2));
}

function unwrapWith(errors, path, decoder, value_1) {
    let matchValue;
    const arg00 = path;
    const arg10 = value_1;
    const clo1 = Util_partialApply(1, decoder, [arg00]);
    matchValue = clo1(arg10);
    if (matchValue.tag === 1) {
        const er = matchValue.fields[0];
        void (errors.push(er));
        return null;
    }
    else {
        const v = matchValue.fields[0];
        return v;
    }
}

export class Getters$1 {
    constructor(path, v) {
        this.errors = [];
        const _this = this;
        this.required = {
            Field(fieldName, decoder) {
                return unwrapWith(_this.errors, path, (path_1, value_1) => field(fieldName, decoder, path_1, value_1), v);
            },
            At(fieldNames, decoder_2) {
                return unwrapWith(_this.errors, path, (firstPath, firstValue) => at(fieldNames, decoder_2, firstPath, firstValue), v);
            },
            Raw(decoder_4) {
                return unwrapWith(_this.errors, path, decoder_4, v);
            },
        };
        const _this_1 = this;
        this.optional = {
            Field(fieldName_1, decoder_5) {
                return unwrapWith(_this_1.errors, path, (path_2, value_2) => optional(fieldName_1, decoder_5, path_2, value_2), v);
            },
            At(fieldNames_1, decoder_7) {
                return unwrapWith(_this_1.errors, path, (firstPath_1, firstValue_1) => optionalAt(fieldNames_1, decoder_7, firstPath_1, firstValue_1), v);
            },
            Raw(decoder_9) {
                let matchValue;
                const arg00 = path;
                const arg10 = v;
                const clo1 = Util_partialApply(1, decoder_9, [arg00]);
                matchValue = clo1(arg10);
                if (matchValue.tag === 1) {
                    const reason = matchValue.fields[0][1];
                    const error = matchValue.fields[0];
                    let pattern_matching_result, v_2;
                    switch (reason.tag) {
                        case 1: {
                            pattern_matching_result = 0;
                            v_2 = reason.fields[1];
                            break;
                        }
                        case 2: {
                            pattern_matching_result = 0;
                            v_2 = reason.fields[1];
                            break;
                        }
                        case 3:
                        case 4: {
                            pattern_matching_result = 1;
                            break;
                        }
                        case 5:
                        case 6:
                        case 7: {
                            pattern_matching_result = 2;
                            break;
                        }
                        default: {
                            pattern_matching_result = 0;
                            v_2 = reason.fields[1];
                        }
                    }
                    switch (pattern_matching_result) {
                        case 0: {
                            if (v_2 == null) {
                                return void 0;
                            }
                            else {
                                void (_this_1.errors.push(error));
                                return null;
                            }
                        }
                        case 1: {
                            return void 0;
                        }
                        case 2: {
                            void (_this_1.errors.push(error));
                            return null;
                        }
                    }
                }
                else {
                    const v_1 = matchValue.fields[0];
                    return Option_some(v_1);
                }
            },
        };
    }
    get Required() {
        const __ = this;
        return __.required;
    }
    get Optional() {
        const __ = this;
        return __.optional;
    }
}

export function Getters$1$reflection(gen0) {
    return Reflection_class_type("Thoth.Json.Decode.Getters`1", [gen0], Getters$1);
}

export function Getters$1_$ctor_4A51B60E(path, v) {
    return new Getters$1(path, v);
}

export function Getters$1__get_Errors(__) {
    return List_ofSeq(__.errors);
}

export function object(builder, path, v) {
    const getters = Getters$1_$ctor_4A51B60E(path, v);
    let result;
    const arg00 = getters;
    result = builder(arg00);
    const matchValue = Getters$1__get_Errors(getters);
    if (matchValue.tail != null) {
        const fst = matchValue.head;
        const errors = matchValue;
        if (List_length(errors) > 1) {
            const errors_1 = List_map((tupledArg) => errorToString(tupledArg[0], tupledArg[1]), errors);
            const arg0 = [path, new Types_ErrorReason(7, errors_1)];
            return new Option_Result(1, arg0);
        }
        else {
            return new Option_Result(1, fst);
        }
    }
    else {
        return new Option_Result(0, result);
    }
}

export function tuple2(decoder1, decoder2) {
    let decoder_3;
    const decoder = decoder1;
    decoder_3 = ((path) => ((value_1) => index(0, decoder, path, value_1)));
    return (path_3) => ((value_4) => andThen(Util_uncurry(3, (v1) => {
        let decoder_2;
        const decoder_1 = decoder2;
        decoder_2 = ((path_1) => ((value_2) => index(1, decoder_1, path_1, value_2)));
        return (path_2) => ((value_3) => andThen((v2, arg10$0040, arg20$0040) => succeed([v1, v2], arg10$0040, arg20$0040), Util_uncurry(2, decoder_2), path_2, value_3));
    }), Util_uncurry(2, decoder_3), path_3, value_4));
}

export function tuple3(decoder1, decoder2, decoder3) {
    let decoder_5;
    const decoder = decoder1;
    decoder_5 = ((path) => ((value_1) => index(0, decoder, path, value_1)));
    return (path_5) => ((value_6) => andThen(Util_uncurry(3, (v1) => {
        let decoder_4;
        const decoder_1 = decoder2;
        decoder_4 = ((path_1) => ((value_2) => index(1, decoder_1, path_1, value_2)));
        return (path_4) => ((value_5) => andThen(Util_uncurry(3, (v2) => {
            let decoder_3;
            const decoder_2 = decoder3;
            decoder_3 = ((path_2) => ((value_3) => index(2, decoder_2, path_2, value_3)));
            return (path_3) => ((value_4) => andThen((v3, arg10$0040, arg20$0040) => succeed([v1, v2, v3], arg10$0040, arg20$0040), Util_uncurry(2, decoder_3), path_3, value_4));
        }), Util_uncurry(2, decoder_4), path_4, value_5));
    }), Util_uncurry(2, decoder_5), path_5, value_6));
}

export function tuple4(decoder1, decoder2, decoder3, decoder4) {
    let decoder_7;
    const decoder = decoder1;
    decoder_7 = ((path) => ((value_1) => index(0, decoder, path, value_1)));
    return (path_7) => ((value_8) => andThen(Util_uncurry(3, (v1) => {
        let decoder_6;
        const decoder_1 = decoder2;
        decoder_6 = ((path_1) => ((value_2) => index(1, decoder_1, path_1, value_2)));
        return (path_6) => ((value_7) => andThen(Util_uncurry(3, (v2) => {
            let decoder_5;
            const decoder_2 = decoder3;
            decoder_5 = ((path_2) => ((value_3) => index(2, decoder_2, path_2, value_3)));
            return (path_5) => ((value_6) => andThen(Util_uncurry(3, (v3) => {
                let decoder_4;
                const decoder_3 = decoder4;
                decoder_4 = ((path_3) => ((value_4) => index(3, decoder_3, path_3, value_4)));
                return (path_4) => ((value_5) => andThen((v4, arg10$0040, arg20$0040) => succeed([v1, v2, v3, v4], arg10$0040, arg20$0040), Util_uncurry(2, decoder_4), path_4, value_5));
            }), Util_uncurry(2, decoder_5), path_5, value_6));
        }), Util_uncurry(2, decoder_6), path_6, value_7));
    }), Util_uncurry(2, decoder_7), path_7, value_8));
}

export function tuple5(decoder1, decoder2, decoder3, decoder4, decoder5) {
    let decoder_9;
    const decoder = decoder1;
    decoder_9 = ((path) => ((value_1) => index(0, decoder, path, value_1)));
    return (path_9) => ((value_10) => andThen(Util_uncurry(3, (v1) => {
        let decoder_8;
        const decoder_1 = decoder2;
        decoder_8 = ((path_1) => ((value_2) => index(1, decoder_1, path_1, value_2)));
        return (path_8) => ((value_9) => andThen(Util_uncurry(3, (v2) => {
            let decoder_7;
            const decoder_2 = decoder3;
            decoder_7 = ((path_2) => ((value_3) => index(2, decoder_2, path_2, value_3)));
            return (path_7) => ((value_8) => andThen(Util_uncurry(3, (v3) => {
                let decoder_6;
                const decoder_3 = decoder4;
                decoder_6 = ((path_3) => ((value_4) => index(3, decoder_3, path_3, value_4)));
                return (path_6) => ((value_7) => andThen(Util_uncurry(3, (v4) => {
                    let decoder_5;
                    const decoder_4 = decoder5;
                    decoder_5 = ((path_4) => ((value_5) => index(4, decoder_4, path_4, value_5)));
                    return (path_5) => ((value_6) => andThen((v5, arg10$0040, arg20$0040) => succeed([v1, v2, v3, v4, v5], arg10$0040, arg20$0040), Util_uncurry(2, decoder_5), path_5, value_6));
                }), Util_uncurry(2, decoder_6), path_6, value_7));
            }), Util_uncurry(2, decoder_7), path_7, value_8));
        }), Util_uncurry(2, decoder_8), path_8, value_9));
    }), Util_uncurry(2, decoder_9), path_9, value_10));
}

export function tuple6(decoder1, decoder2, decoder3, decoder4, decoder5, decoder6) {
    let decoder_11;
    const decoder = decoder1;
    decoder_11 = ((path) => ((value_1) => index(0, decoder, path, value_1)));
    return (path_11) => ((value_12) => andThen(Util_uncurry(3, (v1) => {
        let decoder_10;
        const decoder_1 = decoder2;
        decoder_10 = ((path_1) => ((value_2) => index(1, decoder_1, path_1, value_2)));
        return (path_10) => ((value_11) => andThen(Util_uncurry(3, (v2) => {
            let decoder_9;
            const decoder_2 = decoder3;
            decoder_9 = ((path_2) => ((value_3) => index(2, decoder_2, path_2, value_3)));
            return (path_9) => ((value_10) => andThen(Util_uncurry(3, (v3) => {
                let decoder_8;
                const decoder_3 = decoder4;
                decoder_8 = ((path_3) => ((value_4) => index(3, decoder_3, path_3, value_4)));
                return (path_8) => ((value_9) => andThen(Util_uncurry(3, (v4) => {
                    let decoder_7;
                    const decoder_4 = decoder5;
                    decoder_7 = ((path_4) => ((value_5) => index(4, decoder_4, path_4, value_5)));
                    return (path_7) => ((value_8) => andThen(Util_uncurry(3, (v5) => {
                        let decoder_6;
                        const decoder_5 = decoder6;
                        decoder_6 = ((path_5) => ((value_6) => index(5, decoder_5, path_5, value_6)));
                        return (path_6) => ((value_7) => andThen((v6, arg10$0040, arg20$0040) => succeed([v1, v2, v3, v4, v5, v6], arg10$0040, arg20$0040), Util_uncurry(2, decoder_6), path_6, value_7));
                    }), Util_uncurry(2, decoder_7), path_7, value_8));
                }), Util_uncurry(2, decoder_8), path_8, value_9));
            }), Util_uncurry(2, decoder_9), path_9, value_10));
        }), Util_uncurry(2, decoder_10), path_10, value_11));
    }), Util_uncurry(2, decoder_11), path_11, value_12));
}

export function tuple7(decoder1, decoder2, decoder3, decoder4, decoder5, decoder6, decoder7) {
    let decoder_13;
    const decoder = decoder1;
    decoder_13 = ((path) => ((value_1) => index(0, decoder, path, value_1)));
    return (path_13) => ((value_14) => andThen(Util_uncurry(3, (v1) => {
        let decoder_12;
        const decoder_1 = decoder2;
        decoder_12 = ((path_1) => ((value_2) => index(1, decoder_1, path_1, value_2)));
        return (path_12) => ((value_13) => andThen(Util_uncurry(3, (v2) => {
            let decoder_11;
            const decoder_2 = decoder3;
            decoder_11 = ((path_2) => ((value_3) => index(2, decoder_2, path_2, value_3)));
            return (path_11) => ((value_12) => andThen(Util_uncurry(3, (v3) => {
                let decoder_10;
                const decoder_3 = decoder4;
                decoder_10 = ((path_3) => ((value_4) => index(3, decoder_3, path_3, value_4)));
                return (path_10) => ((value_11) => andThen(Util_uncurry(3, (v4) => {
                    let decoder_9;
                    const decoder_4 = decoder5;
                    decoder_9 = ((path_4) => ((value_5) => index(4, decoder_4, path_4, value_5)));
                    return (path_9) => ((value_10) => andThen(Util_uncurry(3, (v5) => {
                        let decoder_8;
                        const decoder_5 = decoder6;
                        decoder_8 = ((path_5) => ((value_6) => index(5, decoder_5, path_5, value_6)));
                        return (path_8) => ((value_9) => andThen(Util_uncurry(3, (v6) => {
                            let decoder_7;
                            const decoder_6 = decoder7;
                            decoder_7 = ((path_6) => ((value_7) => index(6, decoder_6, path_6, value_7)));
                            return (path_7) => ((value_8) => andThen((v7, arg10$0040, arg20$0040) => succeed([v1, v2, v3, v4, v5, v6, v7], arg10$0040, arg20$0040), Util_uncurry(2, decoder_7), path_7, value_8));
                        }), Util_uncurry(2, decoder_8), path_8, value_9));
                    }), Util_uncurry(2, decoder_9), path_9, value_10));
                }), Util_uncurry(2, decoder_10), path_10, value_11));
            }), Util_uncurry(2, decoder_11), path_11, value_12));
        }), Util_uncurry(2, decoder_12), path_12, value_13));
    }), Util_uncurry(2, decoder_13), path_13, value_14));
}

export function tuple8(decoder1, decoder2, decoder3, decoder4, decoder5, decoder6, decoder7, decoder8) {
    let decoder_15;
    const decoder = decoder1;
    decoder_15 = ((path) => ((value_1) => index(0, decoder, path, value_1)));
    return (path_15) => ((value_16) => andThen(Util_uncurry(3, (v1) => {
        let decoder_14;
        const decoder_1 = decoder2;
        decoder_14 = ((path_1) => ((value_2) => index(1, decoder_1, path_1, value_2)));
        return (path_14) => ((value_15) => andThen(Util_uncurry(3, (v2) => {
            let decoder_13;
            const decoder_2 = decoder3;
            decoder_13 = ((path_2) => ((value_3) => index(2, decoder_2, path_2, value_3)));
            return (path_13) => ((value_14) => andThen(Util_uncurry(3, (v3) => {
                let decoder_12;
                const decoder_3 = decoder4;
                decoder_12 = ((path_3) => ((value_4) => index(3, decoder_3, path_3, value_4)));
                return (path_12) => ((value_13) => andThen(Util_uncurry(3, (v4) => {
                    let decoder_11;
                    const decoder_4 = decoder5;
                    decoder_11 = ((path_4) => ((value_5) => index(4, decoder_4, path_4, value_5)));
                    return (path_11) => ((value_12) => andThen(Util_uncurry(3, (v5) => {
                        let decoder_10;
                        const decoder_5 = decoder6;
                        decoder_10 = ((path_5) => ((value_6) => index(5, decoder_5, path_5, value_6)));
                        return (path_10) => ((value_11) => andThen(Util_uncurry(3, (v6) => {
                            let decoder_9;
                            const decoder_6 = decoder7;
                            decoder_9 = ((path_6) => ((value_7) => index(6, decoder_6, path_6, value_7)));
                            return (path_9) => ((value_10) => andThen(Util_uncurry(3, (v7) => {
                                let decoder_8;
                                const decoder_7 = decoder8;
                                decoder_8 = ((path_7) => ((value_8) => index(7, decoder_7, path_7, value_8)));
                                return (path_8) => ((value_9) => andThen((v8, arg10$0040, arg20$0040) => succeed([v1, v2, v3, v4, v5, v6, v7, v8], arg10$0040, arg20$0040), Util_uncurry(2, decoder_8), path_8, value_9));
                            }), Util_uncurry(2, decoder_9), path_9, value_10));
                        }), Util_uncurry(2, decoder_10), path_10, value_11));
                    }), Util_uncurry(2, decoder_11), path_11, value_12));
                }), Util_uncurry(2, decoder_12), path_12, value_13));
            }), Util_uncurry(2, decoder_13), path_13, value_14));
        }), Util_uncurry(2, decoder_14), path_14, value_15));
    }), Util_uncurry(2, decoder_15), path_15, value_16));
}

function toMap(xs) {
    return Map_ofSeq(xs, {
        Compare: Util_compare,
    });
}

function toSet(xs) {
    return Set_ofSeq(xs, {
        Compare: Util_compare,
    });
}

function autoObject(decoderInfos, path, value_1) {
    if (!(value_1 === null ? false : (Object.getPrototypeOf(value_1 || false) === Object.prototype))) {
        const arg0 = [path, new Types_ErrorReason(0, "an object", value_1)];
        return new Option_Result(1, arg0);
    }
    else {
        const array_1 = decoderInfos;
        const state = new Option_Result(0, List_empty());
        return Array_foldBack(Util_uncurry(2, (tupledArg) => {
            const name = tupledArg[0];
            const decoder = tupledArg[1];
            return (acc) => {
                if (acc.tag === 0) {
                    const result = acc.fields[0];
                    const result_1 = decoder((path + ".") + name)(value_1[name]);
                    return Option_mapOk((v) => List_cons(v, result), result_1);
                }
                else {
                    return acc;
                }
            };
        }), array_1, state);
    }
}

function autoObject2(keyDecoder, valueDecoder, path, value_1) {
    if (!(value_1 === null ? false : (Object.getPrototypeOf(value_1 || false) === Object.prototype))) {
        const arg0 = [path, new Types_ErrorReason(0, "an object", value_1)];
        return new Option_Result(1, arg0);
    }
    else {
        const state = new Option_Result(0, List_empty());
        const source = Object.keys(value_1);
        return Seq_fold((acc, name) => {
            if (acc.tag === 0) {
                const acc_1 = acc.fields[0];
                let matchValue;
                const arg00 = path;
                const arg10 = name;
                const clo1 = Util_partialApply(1, keyDecoder, [arg00]);
                matchValue = clo1(arg10);
                if (matchValue.tag === 0) {
                    const k = matchValue.fields[0];
                    const _arg1 = valueDecoder((path + ".") + name, value_1[name]);
                    if (_arg1.tag === 0) {
                        const v = _arg1.fields[0];
                        const arg0_1 = List_cons([k, v], acc_1);
                        return new Option_Result(0, arg0_1);
                    }
                    else {
                        const er_1 = _arg1.fields[0];
                        return new Option_Result(1, er_1);
                    }
                }
                else {
                    const er = matchValue.fields[0];
                    return new Option_Result(1, er);
                }
            }
            else {
                return acc;
            }
        }, state, source);
    }
}

function mixedArray(msg, decoders, path, values) {
    let arg0, arg10, arg20, arg30, clo1, clo2, clo3;
    if (decoders.length !== values.length) {
        const arg0_1 = [path, (arg0 = (arg10 = (decoders.length | 0), arg20 = msg, arg30 = (values.length | 0), (clo1 = String_toText(String_printf("Expected %i %s but got %i")), clo2 = clo1(arg10), clo3 = clo2(arg20), clo3(arg30))), (new Types_ErrorReason(6, arg0)))];
        return new Option_Result(1, arg0_1);
    }
    else {
        const array1 = values;
        const array2 = decoders;
        const state = new Option_Result(0, List_empty());
        return Array_foldBack2(Util_uncurry(3, Util_mapCurriedArgs((value_1) => ((decoder) => ((acc) => {
            if (acc.tag === 0) {
                const result = acc.fields[0];
                const result_1 = decoder(path, value_1);
                return Option_mapOk((v) => List_cons(v, result), result_1);
            }
            else {
                return acc;
            }
        })), [0, [0, 2], 0])), array1, array2, state);
    }
}

function makeUnion(extra, caseStrategy, t, name, path, values) {
    let uci;
    const array_1 = Reflection_getUnionCases(t, true);
    uci = Array_tryFind((x) => (Reflection_name(x) === name), array_1);
    if (uci != null) {
        const uci_1 = uci;
        if (values.length === 0) {
            const arg0_1 = Reflection_makeUnion(uci_1, [], true);
            return new Option_Result(0, arg0_1);
        }
        else {
            let decoders;
            const array_2 = Reflection_getUnionCaseFields(uci_1);
            decoders = Array_map((fi) => autoDecoder(extra, caseStrategy, false, fi[1]), array_2);
            const result = mixedArray("union fields", decoders, path, values);
            return Option_mapOk((values_1) => Reflection_makeUnion(uci_1, Array.from(values_1), true), result);
        }
    }
    else {
        const arg0 = [path, new Types_ErrorReason(6, (("Cannot find case " + name) + " in ") + Reflection_fullName(t))];
        return new Option_Result(1, arg0);
    }
}

function autoDecodeRecordsAndUnions(extra, caseStrategy, isOptional, t) {
    const decoderRef = new Types_FSharpRef(null);
    let extra_1;
    const table = extra;
    const key = Reflection_fullName(t);
    extra_1 = Map_add(key, decoderRef, table);
    let decoder;
    if (Reflection_isRecord(t, true)) {
        let decoders;
        const array_1 = Reflection_getRecordElements(t, true);
        decoders = Array_map((fi) => {
            const name = Types_Util_Casing_convert(caseStrategy, Reflection_name(fi));
            return [name, autoDecoder(extra_1, caseStrategy, false, fi[1])];
        }, array_1);
        decoder = ((path) => ((value_1) => {
            const result = autoObject(decoders, path, value_1);
            return Option_mapOk((xs) => Reflection_makeRecord(t, Array.from(xs), true), result);
        }));
    }
    else if (Reflection_isUnion(t, true)) {
        decoder = ((path_1) => ((value_2) => {
            if ((typeof value_2) === "string") {
                const name_1 = value_2;
                return makeUnion(extra_1, caseStrategy, t, name_1, path_1, []);
            }
            else if (Array.isArray(value_2)) {
                const values = value_2;
                let name_2;
                const o_4 = values[0];
                name_2 = o_4;
                return makeUnion(extra_1, caseStrategy, t, name_2, path_1, values.slice(1, values.length));
            }
            else {
                const arg0 = [path_1, new Types_ErrorReason(0, "a string or array", value_2)];
                return new Option_Result(1, arg0);
            }
        }));
    }
    else if (isOptional) {
        decoder = ((path_2) => ((value_3) => (new Option_Result(1, [path_2, new Types_ErrorReason(2, "an extra coder for " + Reflection_fullName(t), value_3)]))));
    }
    else {
        let message;
        const arg10 = Reflection_fullName(t);
        const clo1 = String_toText(String_printf("Cannot generate auto decoder for %s. Please pass an extra decoder."));
        message = clo1(arg10);
        throw (new Error(message));
    }
    decoderRef.contents = decoder;
    return decoder;
}

function autoDecoder(extra, caseStrategy, isOptional, t) {
    let clo1, decoder_15;
    const fullname = Reflection_fullName(t);
    const matchValue = Map_tryFind(fullname, extra);
    if (matchValue == null) {
        if (Reflection_isArray(t)) {
            let decoder;
            const t_1 = Reflection_getElementType(t);
            decoder = autoDecoder(extra, caseStrategy, false, t_1);
            const d = (path_1, value_2) => array(Util_uncurry(2, decoder), path_1, value_2);
            return Util_curry(2, d);
        }
        else if (Reflection_isEnum(t)) {
            const enumType = Reflection_fullName(Reflection_getEnumUnderlyingType(t));
            if (enumType === "System.SByte") {
                const d_2 = (path_2, value_4) => {
                    let value_3;
                    const t_2 = t;
                    const path_3 = path_2;
                    const value_5 = value_4;
                    const matchValue_1 = sbyte(path_3)(value_5);
                    if (matchValue_1.tag === 1) {
                        const msg = matchValue_1.fields[0];
                        return new Option_Result(1, msg);
                    }
                    else {
                        const enumValue = matchValue_1.fields[0] | 0;
                        let _arg1;
                        let source_1;
                        const source = Reflection_getEnumValues(t_2);
                        source_1 = source;
                        _arg1 = Seq_contains(enumValue, source_1);
                        if (_arg1) {
                            const arg0 = Reflection_parseEnum(t_2, (value_3 = (enumValue | 0), (value_3.toString())));
                            return new Option_Result(0, arg0);
                        }
                        else {
                            const arg0_1 = [path_3, new Types_ErrorReason(1, Reflection_fullName(t_2), value_5, "Unkown value provided for the enum")];
                            return new Option_Result(1, arg0_1);
                        }
                    }
                };
                return Util_curry(2, d_2);
            }
            else if (enumType === "System.Byte") {
                const d_4 = (path_4, value_7) => {
                    let value_6;
                    const t_3 = t;
                    const path_5 = path_4;
                    const value_8 = value_7;
                    const matchValue_2 = byte(path_5)(value_8);
                    if (matchValue_2.tag === 1) {
                        const msg_1 = matchValue_2.fields[0];
                        return new Option_Result(1, msg_1);
                    }
                    else {
                        const enumValue_1 = matchValue_2.fields[0];
                        let _arg1_1;
                        let source_3;
                        const source_2 = Reflection_getEnumValues(t_3);
                        source_3 = source_2;
                        _arg1_1 = Seq_contains(enumValue_1, source_3);
                        if (_arg1_1) {
                            const arg0_2 = Reflection_parseEnum(t_3, (value_6 = enumValue_1, (value_6.toString())));
                            return new Option_Result(0, arg0_2);
                        }
                        else {
                            const arg0_3 = [path_5, new Types_ErrorReason(1, Reflection_fullName(t_3), value_8, "Unkown value provided for the enum")];
                            return new Option_Result(1, arg0_3);
                        }
                    }
                };
                return Util_curry(2, d_4);
            }
            else if (enumType === "System.Int16") {
                const d_6 = (path_6, value_10) => {
                    let value_9;
                    const t_4 = t;
                    const path_7 = path_6;
                    const value_11 = value_10;
                    const matchValue_3 = int16(path_7)(value_11);
                    if (matchValue_3.tag === 1) {
                        const msg_2 = matchValue_3.fields[0];
                        return new Option_Result(1, msg_2);
                    }
                    else {
                        const enumValue_2 = matchValue_3.fields[0] | 0;
                        let _arg1_2;
                        let source_5;
                        const source_4 = Reflection_getEnumValues(t_4);
                        source_5 = source_4;
                        _arg1_2 = Seq_contains(enumValue_2, source_5);
                        if (_arg1_2) {
                            const arg0_4 = Reflection_parseEnum(t_4, (value_9 = (enumValue_2 | 0), (Util_int16ToString(value_9))));
                            return new Option_Result(0, arg0_4);
                        }
                        else {
                            const arg0_5 = [path_7, new Types_ErrorReason(1, Reflection_fullName(t_4), value_11, "Unkown value provided for the enum")];
                            return new Option_Result(1, arg0_5);
                        }
                    }
                };
                return Util_curry(2, d_6);
            }
            else if (enumType === "System.UInt16") {
                const d_8 = (path_8, value_13) => {
                    let value_12;
                    const t_5 = t;
                    const path_9 = path_8;
                    const value_14 = value_13;
                    const matchValue_4 = uint16(path_9)(value_14);
                    if (matchValue_4.tag === 1) {
                        const msg_3 = matchValue_4.fields[0];
                        return new Option_Result(1, msg_3);
                    }
                    else {
                        const enumValue_3 = matchValue_4.fields[0];
                        let _arg1_3;
                        let source_7;
                        const source_6 = Reflection_getEnumValues(t_5);
                        source_7 = source_6;
                        _arg1_3 = Seq_contains(enumValue_3, source_7);
                        if (_arg1_3) {
                            const arg0_6 = Reflection_parseEnum(t_5, (value_12 = enumValue_3, (value_12.toString())));
                            return new Option_Result(0, arg0_6);
                        }
                        else {
                            const arg0_7 = [path_9, new Types_ErrorReason(1, Reflection_fullName(t_5), value_14, "Unkown value provided for the enum")];
                            return new Option_Result(1, arg0_7);
                        }
                    }
                };
                return Util_curry(2, d_8);
            }
            else if (enumType === "System.Int32") {
                const d_10 = (path_10, value_16) => {
                    let value_15;
                    const t_6 = t;
                    const path_11 = path_10;
                    const value_17 = value_16;
                    const matchValue_5 = int(path_11)(value_17);
                    if (matchValue_5.tag === 1) {
                        const msg_4 = matchValue_5.fields[0];
                        return new Option_Result(1, msg_4);
                    }
                    else {
                        const enumValue_4 = matchValue_5.fields[0] | 0;
                        let _arg1_4;
                        let source_9;
                        const source_8 = Reflection_getEnumValues(t_6);
                        source_9 = source_8;
                        _arg1_4 = Seq_contains(enumValue_4, source_9);
                        if (_arg1_4) {
                            const arg0_8 = Reflection_parseEnum(t_6, (value_15 = (enumValue_4 | 0), (Util_int32ToString(value_15))));
                            return new Option_Result(0, arg0_8);
                        }
                        else {
                            const arg0_9 = [path_11, new Types_ErrorReason(1, Reflection_fullName(t_6), value_17, "Unkown value provided for the enum")];
                            return new Option_Result(1, arg0_9);
                        }
                    }
                };
                return Util_curry(2, d_10);
            }
            else if (enumType === "System.UInt32") {
                const d_12 = (path_12, value_19) => {
                    let value_18;
                    const t_7 = t;
                    const path_13 = path_12;
                    const value_20 = value_19;
                    const matchValue_6 = uint32(path_13)(value_20);
                    if (matchValue_6.tag === 1) {
                        const msg_5 = matchValue_6.fields[0];
                        return new Option_Result(1, msg_5);
                    }
                    else {
                        const enumValue_5 = matchValue_6.fields[0];
                        let _arg1_5;
                        let source_11;
                        const source_10 = Reflection_getEnumValues(t_7);
                        source_11 = source_10;
                        _arg1_5 = Seq_contains(enumValue_5, source_11);
                        if (_arg1_5) {
                            const arg0_10 = Reflection_parseEnum(t_7, (value_18 = enumValue_5, (value_18.toString())));
                            return new Option_Result(0, arg0_10);
                        }
                        else {
                            const arg0_11 = [path_13, new Types_ErrorReason(1, Reflection_fullName(t_7), value_20, "Unkown value provided for the enum")];
                            return new Option_Result(1, arg0_11);
                        }
                    }
                };
                return Util_curry(2, d_12);
            }
            else {
                return (clo1 = String_toFail(String_printf("Cannot generate auto decoder for %s.\nThoth.Json.Net only support the folluwing enum types:\n- sbyte\n- byte\n- int16\n- uint16\n- int\n- uint32\nIf you can\u0027t use one of these types, please pass an extra decoder.\n                    ")), (arg10) => {
                    const clo2 = clo1(arg10);
                    return (arg20) => {
                        const clo3 = clo2(arg20);
                        return clo3;
                    };
                })(Reflection_fullName(t));
            }
        }
        else if (Reflection_isGenericType(t)) {
            if (Reflection_isTuple(t)) {
                let decoders;
                const array_1 = Reflection_getTupleElements(t);
                decoders = Array_map((t_8) => autoDecoder(extra, caseStrategy, false, t_8), array_1);
                return (path_14) => ((value_21) => {
                    if (Array.isArray(value_21)) {
                        const result = mixedArray("tuple elements", decoders, path_14, value_21);
                        return Option_mapOk((xs) => Reflection_makeTuple(Array.from(xs), t), result);
                    }
                    else {
                        const arg0_12 = [path_14, new Types_ErrorReason(0, "an array", value_21)];
                        return new Option_Result(1, arg0_12);
                    }
                });
            }
            else {
                const fullname_1 = Reflection_fullName(Reflection_getGenericTypeDefinition(t));
                if (fullname_1 === "Microsoft.FSharp.Core.FSharpOption`1[System.Object]") {
                    let d_14;
                    let decoder_13;
                    const t_9 = Reflection_getGenerics(t)[0];
                    decoder_13 = autoDecoder(extra, caseStrategy, true, t_9);
                    d_14 = ((path_15) => ((value_22) => option(Util_uncurry(2, decoder_13), path_15, value_22)));
                    return d_14;
                }
                else if (fullname_1 === "Microsoft.FSharp.Collections.FSharpList`1[System.Object]") {
                    let d_16;
                    let decoder_14;
                    const t_10 = Reflection_getGenerics(t)[0];
                    decoder_14 = autoDecoder(extra, caseStrategy, false, t_10);
                    d_16 = ((path_16) => ((value_23) => list(Util_uncurry(2, decoder_14), path_16, value_23)));
                    return d_16;
                }
                else if (fullname_1 === "Microsoft.FSharp.Collections.FSharpMap`2[System.Object,System.Object]") {
                    let keyDecoder;
                    const t_11 = Reflection_getGenerics(t)[0];
                    keyDecoder = autoDecoder(extra, caseStrategy, false, t_11);
                    let valueDecoder;
                    const t_12 = Reflection_getGenerics(t)[1];
                    valueDecoder = autoDecoder(extra, caseStrategy, false, t_12);
                    let d1;
                    const decoders_1 = List_ofArray([(path_17) => ((value_24) => autoObject2(Util_uncurry(2, keyDecoder), Util_uncurry(2, valueDecoder), path_17, value_24)), (decoder_15 = tuple2(Util_uncurry(2, keyDecoder), Util_uncurry(2, valueDecoder)), (path_18) => ((value_25) => list(Util_uncurry(2, decoder_15), path_18, value_25)))]);
                    d1 = ((path_19) => ((value_26) => oneOf(decoders_1, path_19, value_26)));
                    return (path_20) => ((value_28) => map((ar) => {
                        const value_27 = toMap(ar);
                        return value_27;
                    }, Util_uncurry(2, d1), path_20, value_28));
                }
                else if (fullname_1 === "Microsoft.FSharp.Collections.FSharpSet`1[System.Object]") {
                    let decoder_16;
                    const t_13 = Reflection_getGenerics(t)[0];
                    decoder_16 = autoDecoder(extra, caseStrategy, false, t_13);
                    return (path_21) => ((value_29) => {
                        const matchValue_7 = array(Util_uncurry(2, decoder_16), path_21, value_29);
                        if (matchValue_7.tag === 0) {
                            const ar_1 = matchValue_7.fields[0];
                            let arg0_13;
                            const value_30 = toSet(ar_1);
                            arg0_13 = value_30;
                            return new Option_Result(0, arg0_13);
                        }
                        else {
                            const er = matchValue_7.fields[0];
                            return new Option_Result(1, er);
                        }
                    });
                }
                else {
                    return autoDecodeRecordsAndUnions(extra, caseStrategy, isOptional, t);
                }
            }
        }
        else if (fullname === "System.Boolean") {
            return (path_22) => ((value_31) => bool(path_22, value_31));
        }
        else if (fullname === "Microsoft.FSharp.Core.Unit") {
            return (path_23) => ((value_32) => unit(path_23, value_32));
        }
        else if (fullname === "System.String") {
            return (path_24) => ((value_33) => string(path_24, value_33));
        }
        else if (fullname === "System.SByte") {
            return sbyte;
        }
        else if (fullname === "System.Byte") {
            return byte;
        }
        else if (fullname === "System.Int16") {
            return int16;
        }
        else if (fullname === "System.UInt16") {
            return uint16;
        }
        else if (fullname === "System.Int32") {
            return int;
        }
        else if (fullname === "System.UInt32") {
            return uint32;
        }
        else if (fullname === "System.Double") {
            return (path_25) => ((value_34) => float(path_25, value_34));
        }
        else if (fullname === "System.Single") {
            return (path_26) => ((value_35) => float32(path_26, value_35));
        }
        else if (fullname === "System.DateTime") {
            return (path_27) => ((value_36) => datetime(path_27, value_36));
        }
        else if (fullname === "System.DateTimeOffset") {
            return (path_28) => ((value_37) => datetimeOffset(path_28, value_37));
        }
        else if (fullname === "System.TimeSpan") {
            return (path_29) => ((value_38) => timespan(path_29, value_38));
        }
        else if (fullname === "System.Guid") {
            return (path_30) => ((value_39) => guid(path_30, value_39));
        }
        else if (fullname === "System.Object") {
            return (_arg1_6) => ((v) => (new Option_Result(0, v)));
        }
        else {
            return autoDecodeRecordsAndUnions(extra, caseStrategy, isOptional, t);
        }
    }
    else {
        const decoderRef = matchValue;
        return (path) => ((value_1) => decoderRef.contents(path)(value_1));
    }
}

function makeExtra(extra) {
    if (extra != null) {
        const e = extra;
        return Map_map((_arg2, tupledArg) => {
            const dec = tupledArg[1];
            return new Types_FSharpRef(dec);
        }, e.Coders);
    }
    else {
        return Map_empty({
            Compare: Util_comparePrimitives,
        });
    }
}

export class Auto {
    constructor() {
    }
}

export function Auto$reflection() {
    return Reflection_class_type("Thoth.Json.Decode.Auto", void 0, Auto);
}

export function Auto_generateDecoderCached_7848D058(caseStrategy, extra, resolver) {
    const t = resolver.ResolveType();
    const caseStrategy_1 = Option_defaultArg(caseStrategy, new Types_CaseStrategy(0));
    let key;
    let y_1;
    const y = Reflection_fullName(t);
    const x = Types_toString(caseStrategy_1);
    y_1 = (x + y);
    let x_1;
    let option_2;
    const option_1 = extra;
    option_2 = Option_map((e) => e.Hash, option_1);
    x_1 = Option_defaultArg(option_2, "");
    key = (x_1 + y_1);
    const d = Types_Util_Cache$1__GetOrAdd_43981464(Types_Util_CachedDecoders, key, () => autoDecoder(makeExtra(extra), caseStrategy_1, false, t));
    return d;
}

export function Auto_generateDecoder_7848D058(caseStrategy, extra, resolver) {
    const caseStrategy_1 = Option_defaultArg(caseStrategy, new Types_CaseStrategy(0));
    let d;
    const t = resolver.ResolveType();
    const extra_1 = makeExtra(extra);
    d = autoDecoder(extra_1, caseStrategy_1, false, t);
    return d;
}

export function Auto_fromString_Z5CB6BD(json, caseStrategy, extra, resolver) {
    const decoder = Auto_generateDecoder_7848D058(caseStrategy, extra, resolver);
    return fromString(Util_uncurry(2, decoder), json);
}

export function Auto_unsafeFromString_Z5CB6BD(json, caseStrategy, extra, resolver) {
    const decoder = Auto_generateDecoder_7848D058(caseStrategy, extra, resolver);
    const matchValue = fromString(Util_uncurry(2, decoder), json);
    if (matchValue.tag === 1) {
        const msg = matchValue.fields[0];
        throw (new Error(msg));
    }
    else {
        const x = matchValue.fields[0];
        return x;
    }
}

