import { Union as Types_Union } from "../../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Types.js";
import { list_type as Reflection_list_type, class_type as Reflection_class_type, string_type as Reflection_string_type, union_type as Reflection_union_type } from "../../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Reflection.js";
import { Common_GenericOptions_Parse_9AE2F7C as Common_Common_GenericOptions_Parse_9AE2F7C, Common_GenericOptions__ToReactElement_Z6D3CD4B7 as Common_Common_GenericOptions__ToReactElement_Z6D3CD4B7, Common_GenericOptions__AddModifiers_5BB435D5 as Common_Common_GenericOptions__AddModifiers_5BB435D5, Common_GenericOptions__AddProps_416C4D0B as Common_Common_GenericOptions__AddProps_416C4D0B, Screen_ToString_2D2414B4 as Common_Screen_ToString_2D2414B4, Common_GenericOptions__AddClass_Z721C83C5 as Common_Common_GenericOptions__AddClass_Z721C83C5, Common_GenericOptions__AddCaseName_1505 as Common_Common_GenericOptions__AddCaseName_1505, Modifier_IModifier$reflection as Common_Modifier_IModifier$reflection, Screen$reflection as Common_Screen$reflection, Reflection_getCaseName as Common_Reflection_getCaseName } from "../Common.js";
import { contains as List_contains } from "../../../../.fable/fable-library.3.0.0-nagareyama-beta-003/List.js";
import { structuralHash as Util_structuralHash } from "../../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Util.js";
import { printf as String_printf, toText as String_toText } from "../../../../.fable/fable-library.3.0.0-nagareyama-beta-003/String.js";
import { some as Option_some } from "../../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Option.js";
import * as react from "react";
import { keyValueList as MapUtil_keyValueList } from "../../../../.fable/fable-library.3.0.0-nagareyama-beta-003/MapUtil.js";

export class ISize extends Types_Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["is-1", "is-2", "is-3", "is-4", "is-5", "is-6", "is-7", "is-8"];
    }
}

export function ISize$reflection() {
    return Reflection_union_type("Fulma.Columns.ISize", [], ISize, () => [[], [], [], [], [], [], [], []]);
}

export function ISize_ToString_2283FB3F(x) {
    return Common_Reflection_getCaseName(x);
}

export class Option extends Types_Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["is-centered", "is-vcentered", "is-multiline", "is-gapless", "is-grid", "is-mobile", "is-desktop", "IsGap", "IsGapOnly", "CustomClass", "Props", "Modifiers"];
    }
}

export function Option$reflection() {
    return Reflection_union_type("Fulma.Columns.Option", [], Option, () => [[], [], [], [], [], [], [], [["Item1", Common_Screen$reflection()], ["Item2", ISize$reflection()]], [["Item1", Common_Screen$reflection()], ["Item2", ISize$reflection()]], [["Item", Reflection_string_type]], [["Item", Reflection_list_type(Reflection_class_type("Fable.React.Props.IHTMLProp"))]], [["Item", Reflection_list_type(Common_Modifier_IModifier$reflection())]]]);
}

export function columns(options, children) {
    const parseOptions = (result, option) => {
        let screen_4, size_4, x_2, msg, arg10, arg20, arg30, clo1, clo2, clo3, screen_5, size_5, x_3, msg_1, arg10_1, arg20_1, arg30_1, clo1_1, clo2_1, clo3_1;
        switch (option.tag) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6: {
                return Common_Common_GenericOptions__AddCaseName_1505(result, option);
            }
            case 7: {
                const size = option.fields[1];
                const screen = option.fields[0];
                if (!List_contains("is-variable", result.Classes, {
                    Equals: (x, y) => (x === y),
                    GetHashCode: Util_structuralHash,
                })) {
                    return Common_Common_GenericOptions__AddClass_Z721C83C5(Common_Common_GenericOptions__AddClass_Z721C83C5(result, "is-variable"), ISize_ToString_2283FB3F(size) + Common_Screen_ToString_2D2414B4(screen));
                }
                else {
                    return Common_Common_GenericOptions__AddClass_Z721C83C5(result, ISize_ToString_2283FB3F(size) + Common_Screen_ToString_2D2414B4(screen));
                }
            }
            case 8: {
                const size_3 = option.fields[1];
                const screen_3 = option.fields[0];
                if (!List_contains("is-variable", result.Classes, {
                    Equals: (x_1, y_1) => (x_1 === y_1),
                    GetHashCode: Util_structuralHash,
                })) {
                    return Common_Common_GenericOptions__AddClass_Z721C83C5(Common_Common_GenericOptions__AddClass_Z721C83C5(result, "is-variable"), (screen_4 = screen_3, (size_4 = size_3, (screen_4.tag === 2) ? ((ISize_ToString_2283FB3F(size_4) + Common_Screen_ToString_2D2414B4(screen_4)) + "-only") : ((screen_4.tag === 1) ? ((ISize_ToString_2283FB3F(size_4) + Common_Screen_ToString_2D2414B4(screen_4)) + "-only") : ((screen_4.tag === 4) ? ((ISize_ToString_2283FB3F(size_4) + Common_Screen_ToString_2D2414B4(screen_4)) + "-only") : (x_2 = screen_4, (msg = (arg10 = Common_Screen_ToString_2D2414B4(x_2), arg20 = ISize_ToString_2283FB3F(size_4), arg30 = Common_Screen_ToString_2D2414B4(x_2), (clo1 = String_toText(String_printf("Screen `%s` does not support `is-%s-%s-only`.")), clo2 = clo1(arg10), clo3 = clo2(arg20), clo3(arg30))), (console.warn(Option_some(msg)), ""))))))));
                }
                else {
                    return Common_Common_GenericOptions__AddClass_Z721C83C5(result, (screen_5 = screen_3, (size_5 = size_3, (screen_5.tag === 2) ? ((ISize_ToString_2283FB3F(size_5) + Common_Screen_ToString_2D2414B4(screen_5)) + "-only") : ((screen_5.tag === 1) ? ((ISize_ToString_2283FB3F(size_5) + Common_Screen_ToString_2D2414B4(screen_5)) + "-only") : ((screen_5.tag === 4) ? ((ISize_ToString_2283FB3F(size_5) + Common_Screen_ToString_2D2414B4(screen_5)) + "-only") : (x_3 = screen_5, (msg_1 = (arg10_1 = Common_Screen_ToString_2D2414B4(x_3), arg20_1 = ISize_ToString_2283FB3F(size_5), arg30_1 = Common_Screen_ToString_2D2414B4(x_3), (clo1_1 = String_toText(String_printf("Screen `%s` does not support `is-%s-%s-only`.")), clo2_1 = clo1_1(arg10_1), clo3_1 = clo2_1(arg20_1), clo3_1(arg30_1))), (console.warn(Option_some(msg_1)), ""))))))));
                }
            }
            case 10: {
                const props = option.fields[0];
                return Common_Common_GenericOptions__AddProps_416C4D0B(result, props);
            }
            case 9: {
                const customClass = option.fields[0];
                return Common_Common_GenericOptions__AddClass_Z721C83C5(result, customClass);
            }
            case 11: {
                const modifiers = option.fields[0];
                return Common_Common_GenericOptions__AddModifiers_5BB435D5(result, modifiers);
            }
            default: {
                return Common_Common_GenericOptions__AddCaseName_1505(result, option);
            }
        }
    };
    return Common_Common_GenericOptions__ToReactElement_Z6D3CD4B7(Common_Common_GenericOptions_Parse_9AE2F7C(options, parseOptions, "columns"), (props_1, children_1) => react.createElement("div", MapUtil_keyValueList(props_1, 1, true), ...children_1), children);
}

