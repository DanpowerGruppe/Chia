import { Union as Types_Union } from "../../../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Types.js";
import { union_type as Reflection_union_type, bool_type as Reflection_bool_type, list_type as Reflection_list_type, class_type as Reflection_class_type, string_type as Reflection_string_type } from "../../../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Reflection.js";
import { Common_GenericOptions__ToReactElement_Z46A53D36 as Common_Common_GenericOptions__ToReactElement_Z46A53D36, Common_parseOptions as Common_Common_parseOptions, Common_GenericOptions_Parse_9AE2F7C as Common_Common_GenericOptions_Parse_9AE2F7C, Common_GenericOptions__ToReactElement_Z6D3CD4B7 as Common_Common_GenericOptions__ToReactElement_Z6D3CD4B7, Common_GenericOptions__AddModifiers_5BB435D5 as Common_Common_GenericOptions__AddModifiers_5BB435D5, Common_GenericOptions__AddProps_416C4D0B as Common_Common_GenericOptions__AddProps_416C4D0B, Color_ofColor as Common_Color_ofColor, Common_GenericOptions__AddCaseName_1505 as Common_Common_GenericOptions__AddCaseName_1505, Common_GenericOptions__AddClass_Z721C83C5 as Common_Common_GenericOptions__AddClass_Z721C83C5, Reflection_getCaseName as Common_Reflection_getCaseName, Modifier_IModifier$reflection as Common_Modifier_IModifier$reflection, Color_IColor$reflection as Common_Color_IColor$reflection, Size_ISize$reflection as Common_Size_ISize$reflection } from "../../Common.js";
import * as react from "react";
import { keyValueList as MapUtil_keyValueList } from "../../../../../.fable/fable-library.3.0.0-nagareyama-beta-003/MapUtil.js";
import { HTMLAttr as Fable$002EReact$002EProps_HTMLAttr } from "../../../Fable.React.7.0.1/Fable.React.Props.js";
import { singleton as List_singleton } from "../../../../../.fable/fable-library.3.0.0-nagareyama-beta-003/List.js";

export class Option extends Types_Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["CustomClass", "Props", "Size", "is-focused", "is-active", "is-hovered", "is-fullwidth", "is-centered", "is-right", "is-boxed", "has-name", "is-empty", "Color", "Modifiers"];
    }
}

export function Option$reflection() {
    return Reflection_union_type("Fulma.File.Option", [], Option, () => [[["Item", Reflection_string_type]], [["Item", Reflection_list_type(Reflection_class_type("Fable.React.Props.IHTMLProp"))]], [["Item", Common_Size_ISize$reflection()]], [["Item", Reflection_bool_type]], [["Item", Reflection_bool_type]], [["Item", Reflection_bool_type]], [], [], [], [], [], [["Item", Reflection_bool_type]], [["Item", Common_Color_IColor$reflection()]], [["Item", Reflection_list_type(Common_Modifier_IModifier$reflection())]]]);
}

export function file(options, children) {
    const parseOptions = (result, option) => {
        let pattern_matching_result, state;
        switch (option.tag) {
            case 6:
            case 7:
            case 8:
            case 9:
            case 10: {
                pattern_matching_result = 1;
                break;
            }
            case 12: {
                pattern_matching_result = 2;
                break;
            }
            case 3: {
                pattern_matching_result = 3;
                state = option.fields[0];
                break;
            }
            case 4: {
                pattern_matching_result = 3;
                state = option.fields[0];
                break;
            }
            case 5: {
                pattern_matching_result = 3;
                state = option.fields[0];
                break;
            }
            case 11: {
                pattern_matching_result = 3;
                state = option.fields[0];
                break;
            }
            case 1: {
                pattern_matching_result = 4;
                break;
            }
            case 0: {
                pattern_matching_result = 5;
                break;
            }
            case 13: {
                pattern_matching_result = 6;
                break;
            }
            default: pattern_matching_result = 0}
        switch (pattern_matching_result) {
            case 0: {
                const size = option.fields[0];
                const arg00 = Common_Reflection_getCaseName(size);
                return Common_Common_GenericOptions__AddClass_Z721C83C5(result, arg00);
            }
            case 1: {
                return Common_Common_GenericOptions__AddCaseName_1505(result, option);
            }
            case 2: {
                const color = option.fields[0];
                const arg00_1 = Common_Color_ofColor(color);
                return Common_Common_GenericOptions__AddClass_Z721C83C5(result, arg00_1);
            }
            case 3: {
                if (state) {
                    return Common_Common_GenericOptions__AddCaseName_1505(result, option);
                }
                else {
                    return result;
                }
            }
            case 4: {
                const props = option.fields[0];
                return Common_Common_GenericOptions__AddProps_416C4D0B(result, props);
            }
            case 5: {
                const customClass = option.fields[0];
                return Common_Common_GenericOptions__AddClass_Z721C83C5(result, customClass);
            }
            case 6: {
                const modifiers = option.fields[0];
                return Common_Common_GenericOptions__AddModifiers_5BB435D5(result, modifiers);
            }
        }
    };
    return Common_Common_GenericOptions__ToReactElement_Z6D3CD4B7(Common_Common_GenericOptions_Parse_9AE2F7C(options, parseOptions, "file"), (props_1, children_1) => react.createElement("div", MapUtil_keyValueList(props_1, 1, true), ...children_1), children);
}

export function cta(options, children) {
    return Common_Common_GenericOptions__ToReactElement_Z6D3CD4B7(Common_Common_GenericOptions_Parse_9AE2F7C(options, Common_Common_parseOptions, "file-cta"), (props, children_1) => react.createElement("span", MapUtil_keyValueList(props, 1, true), ...children_1), children);
}

export function name(options, children) {
    return Common_Common_GenericOptions__ToReactElement_Z6D3CD4B7(Common_Common_GenericOptions_Parse_9AE2F7C(options, Common_Common_parseOptions, "file-name"), (props, children_1) => react.createElement("span", MapUtil_keyValueList(props, 1, true), ...children_1), children);
}

export function icon(options, children) {
    return Common_Common_GenericOptions__ToReactElement_Z6D3CD4B7(Common_Common_GenericOptions_Parse_9AE2F7C(options, Common_Common_parseOptions, "file-icon"), (props, children_1) => react.createElement("span", MapUtil_keyValueList(props, 1, true), ...children_1), children);
}

export function label(options, children) {
    return Common_Common_GenericOptions__ToReactElement_Z6D3CD4B7(Common_Common_GenericOptions_Parse_9AE2F7C(options, Common_Common_parseOptions, "file-label"), (props, children_1) => react.createElement("label", MapUtil_keyValueList(props, 1, true), ...children_1), children);
}

export function input(options) {
    return Common_Common_GenericOptions__ToReactElement_Z46A53D36(Common_Common_GenericOptions_Parse_9AE2F7C(options, Common_Common_parseOptions, "file-input", List_singleton(new Fable$002EReact$002EProps_HTMLAttr(159, "file"))), (props) => react.createElement("input", MapUtil_keyValueList(props, 1, true)));
}

