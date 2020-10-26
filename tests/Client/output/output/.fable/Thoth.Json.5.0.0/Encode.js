import { toString as Decimal_toString } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Decimal.js";
import { mapIndexed as Seq_mapIndexed, map as Seq_map, fold as Seq_fold, getEnumerator as Seq_getEnumerator } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Seq.js";
import { empty as Map_empty, map as Map_map, tryFind as Map_tryFind, add as Map_add, toList as Map_toList } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Map.js";
import { toString as BigInt_toString } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/BigInt.js";
import { toString as Date_toString } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Date.js";
import { toString as TimeSpan_toString } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/TimeSpan.js";
import { comparePrimitives as Util_comparePrimitives, Lazy as Util_Lazy, mapCurriedArgs as Util_mapCurriedArgs, uncurry as Util_uncurry } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Util.js";
import { defaultArg as Option_defaultArg, defaultArgWith as Option_defaultArgWith, map as Option_map, some as Option_some } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Option.js";
import { toString as Types_toString, FSharpRef as Types_FSharpRef } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Types.js";
import { class_type as Reflection_class_type, getGenerics as Reflection_getGenerics, getGenericTypeDefinition as Reflection_getGenericTypeDefinition, getTupleFields as Reflection_getTupleFields, getTupleElements as Reflection_getTupleElements, isTuple as Reflection_isTuple, isGenericType as Reflection_isGenericType, getEnumUnderlyingType as Reflection_getEnumUnderlyingType, isEnum as Reflection_isEnum, getElementType as Reflection_getElementType, isArray as Reflection_isArray, getUnionCaseFields as Reflection_getUnionCaseFields, getUnionFields as Reflection_getUnionFields, isUnion as Reflection_isUnion, getRecordField as Reflection_getRecordField, name as Reflection_name, getRecordElements as Reflection_getRecordElements, isRecord as Reflection_isRecord, fullName as Reflection_fullName } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Reflection.js";
import { fill as Array_fill, map as Array_map } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Array.js";
import { Util_CachedEncoders as Types_Util_CachedEncoders, Util_Cache$1__GetOrAdd_43981464 as Types_Util_Cache$1__GetOrAdd_43981464, CaseStrategy as Types_CaseStrategy, Util_Casing_convert as Types_Util_Casing_convert } from "./Types.js";
import { toFail as String_toFail, printf as String_printf, toText as String_toText } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/String.js";

export function guid(value) {
    return value;
}

export function decimal(value) {
    const value_1 = Decimal_toString(value);
    return value_1;
}

export const nil = null;

export function object(values) {
    const o = {};
    const enumerator = Seq_getEnumerator(values);
    try {
        while (enumerator["System.Collections.IEnumerator.MoveNext"]()) {
            const forLoopVar = enumerator["System.Collections.Generic.IEnumerator`1.get_Current"]();
            const value = forLoopVar[1];
            const key = forLoopVar[0];
            o[key] = value;
        }
    }
    finally {
        enumerator.Dispose();
    }
    return o;
}

export function list(values) {
    return Array.from(values);
}

export function seq(values) {
    return Array.from(values);
}

export function dict(values) {
    let values_1;
    const table = values;
    values_1 = Map_toList(table);
    return object(values_1);
}

export function bigint(value) {
    return BigInt_toString(value);
}

export function datetimeOffset(value) {
    const value_1 = Date_toString(value, "O", {});
    return value_1;
}

export function timespan(value) {
    const value_1 = TimeSpan_toString(value);
    return value_1;
}

export function sbyte(value) {
    return String(value);
}

export function byte(value) {
    return String(value);
}

export function int16(value) {
    return String(value);
}

export function uint16(value) {
    return String(value);
}

export function int64(value) {
    return String(value);
}

export function uint64(value) {
    return String(value);
}

export function unit() {
    return null;
}

export function tuple2(enc1, enc2, v1, v2) {
    return [enc1(v1), enc2(v2)];
}

export function tuple3(enc1, enc2, enc3, v1, v2, v3) {
    return [enc1(v1), enc2(v2), enc3(v3)];
}

export function tuple4(enc1, enc2, enc3, enc4, v1, v2, v3, v4) {
    return [enc1(v1), enc2(v2), enc3(v3), enc4(v4)];
}

export function tuple5(enc1, enc2, enc3, enc4, enc5, v1, v2, v3, v4, v5) {
    return [enc1(v1), enc2(v2), enc3(v3), enc4(v4), enc5(v5)];
}

export function tuple6(enc1, enc2, enc3, enc4, enc5, enc6, v1, v2, v3, v4, v5, v6) {
    return [enc1(v1), enc2(v2), enc3(v3), enc4(v4), enc5(v5), enc6(v6)];
}

export function tuple7(enc1, enc2, enc3, enc4, enc5, enc6, enc7, v1, v2, v3, v4, v5, v6, v7) {
    return [enc1(v1), enc2(v2), enc3(v3), enc4(v4), enc5(v5), enc6(v6), enc7(v7)];
}

export function tuple8(enc1, enc2, enc3, enc4, enc5, enc6, enc7, enc8, v1, v2, v3, v4, v5, v6, v7, v8) {
    return [enc1(v1), enc2(v2), enc3(v3), enc4(v4), enc5(v5), enc6(v6), enc7(v7), enc8(v8)];
}

export function Enum_byte(value) {
    const value_1 = value;
    return byte(value_1);
}

export function Enum_sbyte(value) {
    const value_1 = value;
    return sbyte(value_1);
}

export function Enum_int16(value) {
    const value_1 = value;
    return int16(value_1);
}

export function Enum_uint16(value) {
    const value_1 = value;
    return uint16(value_1);
}

export function Enum_int(value) {
    const value_1 = value;
    return value_1;
}

export function Enum_uint32(value) {
    const value_1 = value;
    return value_1;
}

export function datetime(value) {
    const value_1 = Date_toString(value, "O", {});
    return value_1;
}

export function toString(space, value) {
    return JSON.stringify(value, Util_uncurry(2, null), Option_some(space));
}

export function option(encoder) {
    return (arg) => {
        let option_2;
        const option_1 = arg;
        option_2 = Option_map(encoder, option_1);
        return Option_defaultArgWith(option_2, () => nil);
    };
}

function autoEncodeRecordsAndUnions(extra, caseStrategy, skipNullField, t) {
    const encoderRef = new Types_FSharpRef(null);
    let extra_1;
    const table = extra;
    const key = Reflection_fullName(t);
    extra_1 = Map_add(key, encoderRef, table);
    let encoder;
    if (Reflection_isRecord(t, true)) {
        let setters;
        const array_1 = Reflection_getRecordElements(t, true);
        setters = Array_map((fi) => {
            const targetKey = Types_Util_Casing_convert(caseStrategy, Reflection_name(fi));
            const encode_1 = autoEncoder(extra_1, caseStrategy, skipNullField, fi[1]);
            return (source) => ((target) => {
                const value = Reflection_getRecordField(source, fi);
                if ((!skipNullField) ? true : (skipNullField ? (!(value == null)) : false)) {
                    target[targetKey]=encode_1(value);
                }
                return target;
            });
        }, array_1);
        encoder = ((source_1) => {
            const state = {};
            const source_2 = setters;
            return Seq_fold(Util_uncurry(2, Util_mapCurriedArgs((target_1) => ((set$) => set$(source_1, target_1)), [0, [0, 2]])), state, source_2);
        });
    }
    else if (Reflection_isUnion(t, true)) {
        encoder = ((value_1) => {
            const patternInput = Reflection_getUnionFields(value_1, t, true);
            const info = patternInput[0];
            const fields = patternInput[1];
            const matchValue = fields.length | 0;
            if (matchValue === 0) {
                const value_2 = Reflection_name(info);
                return value_2;
            }
            else {
                const len = matchValue | 0;
                const fieldTypes = Reflection_getUnionCaseFields(info);
                const target_2 = Array_fill(new Array(len + 1), 0, len + 1, null);
                const value_3 = Reflection_name(info);
                target_2[0] = value_3;
                for (let i = 1; i <= len; i++) {
                    const encode_2 = autoEncoder(extra_1, caseStrategy, skipNullField, fieldTypes[i - 1][1]);
                    target_2[i] = encode_2(fields[i - 1]);
                }
                return target_2;
            }
        });
    }
    else {
        let message;
        const arg10 = Reflection_fullName(t);
        const clo1 = String_toText(String_printf("Cannot generate auto encoder for %s. Please pass an extra encoder."));
        message = clo1(arg10);
        throw (new Error(message));
    }
    encoderRef.contents = encoder;
    return encoder;
}

function autoEncoder(extra, caseStrategy, skipNullField, t) {
    let clo1;
    const fullname = Reflection_fullName(t);
    const matchValue = Map_tryFind(fullname, extra);
    if (matchValue == null) {
        if (Reflection_isArray(t)) {
            let encoder;
            const t_1 = Reflection_getElementType(t);
            encoder = autoEncoder(extra, caseStrategy, skipNullField, t_1);
            return (value) => {
                let values;
                const source = value;
                values = Seq_map(encoder, source);
                return seq(values);
            };
        }
        else if (Reflection_isEnum(t)) {
            const enumType = Reflection_fullName(Reflection_getEnumUnderlyingType(t));
            if (enumType === "System.SByte") {
                return sbyte;
            }
            else if (enumType === "System.Byte") {
                return byte;
            }
            else if (enumType === "System.Int16") {
                return int16;
            }
            else if (enumType === "System.UInt16") {
                return uint16;
            }
            else if (enumType === "System.Int32") {
                return (value_5) => value_5;
            }
            else if (enumType === "System.UInt32") {
                return (value_7) => value_7;
            }
            else {
                return (clo1 = String_toFail(String_printf("Cannot generate auto encoder for %s.\nThoth.Json.Net only support the folluwing enum types:\n- sbyte\n- byte\n- int16\n- uint16\n- int\n- uint32\nIf you can\u0027t use one of these types, please pass an extra encoder.\n                    ")), (arg10) => {
                    const clo2 = clo1(arg10);
                    return clo2;
                })(Reflection_fullName(t));
            }
        }
        else if (Reflection_isGenericType(t)) {
            if (Reflection_isTuple(t)) {
                let encoders;
                const array_1 = Reflection_getTupleElements(t);
                encoders = Array_map((t_2) => autoEncoder(extra, caseStrategy, skipNullField, t_2), array_1);
                return (value_9) => {
                    let values_1;
                    const source_1 = Reflection_getTupleFields(value_9);
                    values_1 = Seq_mapIndexed((i, x) => encoders[i](x), source_1);
                    return seq(values_1);
                };
            }
            else {
                const fullname_1 = Reflection_fullName(Reflection_getGenericTypeDefinition(t));
                if (fullname_1 === "Microsoft.FSharp.Core.FSharpOption`1[System.Object]") {
                    const encoder_2 = new Util_Lazy(() => {
                        let d_6;
                        let encoder_1;
                        const t_3 = Reflection_getGenerics(t)[0];
                        encoder_1 = autoEncoder(extra, caseStrategy, skipNullField, t_3);
                        d_6 = option(encoder_1);
                        return d_6;
                    });
                    return (value_10) => {
                        if (value_10 == null) {
                            return nil;
                        }
                        else {
                            return encoder_2.Value(value_10);
                        }
                    };
                }
                else if ((fullname_1 === "Microsoft.FSharp.Collections.FSharpList`1[System.Object]") ? true : (fullname_1 === "Microsoft.FSharp.Collections.FSharpSet`1[System.Object]")) {
                    let encoder_3;
                    const t_4 = Reflection_getGenerics(t)[0];
                    encoder_3 = autoEncoder(extra, caseStrategy, skipNullField, t_4);
                    return (value_11) => {
                        let values_2;
                        const source_2 = value_11;
                        values_2 = Seq_map(encoder_3, source_2);
                        return seq(values_2);
                    };
                }
                else if (fullname_1 === "Microsoft.FSharp.Collections.FSharpMap`2[System.Object,System.Object]") {
                    const keyType = Reflection_getGenerics(t)[0];
                    let valueEncoder;
                    const t_5 = Reflection_getGenerics(t)[1];
                    valueEncoder = autoEncoder(extra, caseStrategy, skipNullField, t_5);
                    if ((Reflection_fullName(keyType) === "System.String") ? true : (Reflection_fullName(keyType) === "System.Guid")) {
                        return (value_12) => {
                            const state = {};
                            const source_3 = value_12;
                            return Seq_fold((target, _arg1) => {
                                const activePatternResult17043 = _arg1;
                                const v_1 = activePatternResult17043[1];
                                const k = activePatternResult17043[0];
                                target[k]=valueEncoder(v_1);
                                return target;
                            }, state, source_3);
                        };
                    }
                    else {
                        let keyEncoder;
                        const t_6 = keyType;
                        const clo4 = autoEncoder(extra, caseStrategy, skipNullField, t_6);
                        keyEncoder = (clo4);
                        return (value_13) => {
                            let values_4;
                            const source_4 = value_13;
                            values_4 = Seq_map((_arg2) => {
                                const activePatternResult17047 = _arg2;
                                const v_2 = activePatternResult17047[1];
                                const k_1 = activePatternResult17047[0];
                                const values_3 = [keyEncoder(k_1), valueEncoder(v_2)];
                                return values_3;
                            }, source_4);
                            return seq(values_4);
                        };
                    }
                }
                else {
                    return autoEncodeRecordsAndUnions(extra, caseStrategy, skipNullField, t);
                }
            }
        }
        else if (fullname === "System.Boolean") {
            return (value_14) => value_14;
        }
        else if (fullname === "Microsoft.FSharp.Core.Unit") {
            return unit;
        }
        else if (fullname === "System.String") {
            return (value_16) => value_16;
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
            return (value_22) => value_22;
        }
        else if (fullname === "System.UInt32") {
            return (value_24) => value_24;
        }
        else if (fullname === "System.Double") {
            return (value_26) => value_26;
        }
        else if (fullname === "System.Single") {
            return (value_28) => value_28;
        }
        else if (fullname === "System.DateTime") {
            return datetime;
        }
        else if (fullname === "System.DateTimeOffset") {
            return datetimeOffset;
        }
        else if (fullname === "System.TimeSpan") {
            return timespan;
        }
        else if (fullname === "System.Guid") {
            return guid;
        }
        else if (fullname === "System.Object") {
            return (x_1) => x_1;
        }
        else {
            return autoEncodeRecordsAndUnions(extra, caseStrategy, skipNullField, t);
        }
    }
    else {
        const encoderRef = matchValue;
        return (v) => encoderRef.contents(v);
    }
}

function makeExtra(extra) {
    if (extra != null) {
        const e = extra;
        return Map_map((_arg2, tupledArg) => {
            const enc = tupledArg[0];
            return new Types_FSharpRef(enc);
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
    return Reflection_class_type("Thoth.Json.Encode.Auto", void 0, Auto);
}

export function Auto_generateEncoderCached_Z127D9D79(caseStrategy, extra, skipNullField, resolver) {
    const t = resolver.ResolveType();
    const caseStrategy_1 = Option_defaultArg(caseStrategy, new Types_CaseStrategy(0));
    const skipNullField_1 = Option_defaultArg(skipNullField, true);
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
    const d = Types_Util_Cache$1__GetOrAdd_43981464(Types_Util_CachedEncoders, key, () => autoEncoder(makeExtra(extra), caseStrategy_1, skipNullField_1, t));
    return d;
}

export function Auto_generateEncoder_Z127D9D79(caseStrategy, extra, skipNullField, resolver) {
    const caseStrategy_1 = Option_defaultArg(caseStrategy, new Types_CaseStrategy(0));
    const skipNullField_1 = Option_defaultArg(skipNullField, true);
    let d;
    const t = resolver.ResolveType();
    const extra_1 = makeExtra(extra);
    d = autoEncoder(extra_1, caseStrategy_1, skipNullField_1, t);
    return d;
}

export function Auto_toString_5A41365E(space, value, caseStrategy, extra, skipNullField, resolver) {
    const encoder = Auto_generateEncoder_Z127D9D79(caseStrategy, extra, skipNullField, resolver);
    const value_1 = encoder(value);
    return toString(space, value_1);
}

export function encode(space, value) {
    return toString(space, value);
}

