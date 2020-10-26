import { Union as Types_Union } from "../../../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Types.js";
import { Common_GenericOptions_Parse_9AE2F7C as Common_Common_GenericOptions_Parse_9AE2F7C, Common_GenericOptions__ToReactElement_Z6D3CD4B7 as Common_Common_GenericOptions__ToReactElement_Z6D3CD4B7, Common_GenericOptions__AddModifiers_5BB435D5 as Common_Common_GenericOptions__AddModifiers_5BB435D5, Common_GenericOptions__AddProps_416C4D0B as Common_Common_GenericOptions__AddProps_416C4D0B, Common_GenericOptions__AddProp_7BFEDA81 as Common_Common_GenericOptions__AddProp_7BFEDA81, Common_GenericOptions__AddCaseName_1505 as Common_Common_GenericOptions__AddCaseName_1505, Color_ofColor as Common_Color_ofColor, Common_GenericOptions__AddClass_Z721C83C5 as Common_Common_GenericOptions__AddClass_Z721C83C5, Reflection_getCaseName as Common_Reflection_getCaseName, Modifier_IModifier$reflection as Common_Modifier_IModifier$reflection, Color_IColor$reflection as Common_Color_IColor$reflection, Size_ISize$reflection as Common_Size_ISize$reflection } from "../../Common.js";
import { union_type as Reflection_union_type, lambda_type as Reflection_lambda_type, unit_type as Reflection_unit_type, list_type as Reflection_list_type, class_type as Reflection_class_type, string_type as Reflection_string_type, bool_type as Reflection_bool_type } from "../../../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Reflection.js";
import { DOMAttr as Fable$002EReact$002EProps_DOMAttr, Prop as Fable$002EReact$002EProps_Prop, HTMLAttr as Fable$002EReact$002EProps_HTMLAttr } from "../../../Fable.React.7.0.1/Fable.React.Props.js";
import { equals as Util_equals } from "../../../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Util.js";
import * as react from "react";
import { keyValueList as MapUtil_keyValueList } from "../../../../../.fable/fable-library.3.0.0-nagareyama-beta-003/MapUtil.js";

export class Option extends Types_Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["Size", "is-fullwidth", "is-inline", "is-loading", "is-focused", "is-active", "IsReadOnly", "Color", "Id", "Disabled", "Value", "DefaultValue", "ValueOrDefault", "Placeholder", "Props", "OnChange", "Ref", "CustomClass", "has-fixed-size", "Modifiers"];
    }
}

export function Option$reflection() {
    return Reflection_union_type("Fulma.Textarea.Option", [], Option, () => [[["Item", Common_Size_ISize$reflection()]], [], [], [["Item", Reflection_bool_type]], [["Item", Reflection_bool_type]], [["Item", Reflection_bool_type]], [["Item", Reflection_bool_type]], [["Item", Common_Color_IColor$reflection()]], [["Item", Reflection_string_type]], [["Item", Reflection_bool_type]], [["Item", Reflection_string_type]], [["Item", Reflection_string_type]], [["Item", Reflection_string_type]], [["Item", Reflection_string_type]], [["Item", Reflection_list_type(Reflection_class_type("Fable.React.Props.IHTMLProp"))]], [["Item", Reflection_lambda_type(Reflection_class_type("Browser.Types.Event"), Reflection_unit_type)]], [["Item", Reflection_lambda_type(Reflection_class_type("Browser.Types.Element"), Reflection_unit_type)]], [["Item", Reflection_string_type]], [], [["Item", Reflection_list_type(Common_Modifier_IModifier$reflection())]]]);
}

export function textarea(options, children) {
    const parseOptions = (result, option) => {
        let pattern_matching_result, state;
        switch (option.tag) {
            case 7: {
                pattern_matching_result = 1;
                break;
            }
            case 1:
            case 18:
            case 2: {
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
            case 8: {
                pattern_matching_result = 4;
                break;
            }
            case 9: {
                pattern_matching_result = 5;
                break;
            }
            case 6: {
                pattern_matching_result = 6;
                break;
            }
            case 10: {
                pattern_matching_result = 7;
                break;
            }
            case 11: {
                pattern_matching_result = 8;
                break;
            }
            case 12: {
                pattern_matching_result = 9;
                break;
            }
            case 13: {
                pattern_matching_result = 10;
                break;
            }
            case 15: {
                pattern_matching_result = 11;
                break;
            }
            case 16: {
                pattern_matching_result = 12;
                break;
            }
            case 14: {
                pattern_matching_result = 13;
                break;
            }
            case 17: {
                pattern_matching_result = 14;
                break;
            }
            case 19: {
                pattern_matching_result = 15;
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
                const color = option.fields[0];
                const arg00_1 = Common_Color_ofColor(color);
                return Common_Common_GenericOptions__AddClass_Z721C83C5(result, arg00_1);
            }
            case 2: {
                return Common_Common_GenericOptions__AddCaseName_1505(result, option);
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
                const id = option.fields[0];
                const arg00_2 = new Fable$002EReact$002EProps_HTMLAttr(99, id);
                return Common_Common_GenericOptions__AddProp_7BFEDA81(result, arg00_2);
            }
            case 5: {
                const disabled = option.fields[0];
                const arg00_3 = new Fable$002EReact$002EProps_HTMLAttr(79, disabled);
                return Common_Common_GenericOptions__AddProp_7BFEDA81(result, arg00_3);
            }
            case 6: {
                const state_1 = option.fields[0];
                const arg00_4 = new Fable$002EReact$002EProps_HTMLAttr(132, state_1);
                return Common_Common_GenericOptions__AddProp_7BFEDA81(result, arg00_4);
            }
            case 7: {
                const value = option.fields[0];
                const arg00_5 = new Fable$002EReact$002EProps_HTMLAttr(161, value);
                return Common_Common_GenericOptions__AddProp_7BFEDA81(result, arg00_5);
            }
            case 8: {
                const defaultValue = option.fields[0];
                const arg00_6 = new Fable$002EReact$002EProps_HTMLAttr(1, defaultValue);
                return Common_Common_GenericOptions__AddProp_7BFEDA81(result, arg00_6);
            }
            case 9: {
                const valueOrDefault = option.fields[0];
                let arg00_7;
                const arg0 = (e) => {
                    let value_2, value_1;
                    if ((value_2 = (value_1 = e, (value_1 == null)), (!value_2)) ? (!Util_equals(e.value, valueOrDefault)) : false) {
                        e.value = valueOrDefault;
                    }
                };
                arg00_7 = (new Fable$002EReact$002EProps_Prop(1, arg0));
                return Common_Common_GenericOptions__AddProp_7BFEDA81(result, arg00_7);
            }
            case 10: {
                const placeholder = option.fields[0];
                const arg00_8 = new Fable$002EReact$002EProps_HTMLAttr(128, placeholder);
                return Common_Common_GenericOptions__AddProp_7BFEDA81(result, arg00_8);
            }
            case 11: {
                const cb = option.fields[0];
                const arg00_9 = new Fable$002EReact$002EProps_DOMAttr(9, cb);
                return Common_Common_GenericOptions__AddProp_7BFEDA81(result, arg00_9);
            }
            case 12: {
                const ref = option.fields[0];
                const arg00_10 = new Fable$002EReact$002EProps_Prop(1, ref);
                return Common_Common_GenericOptions__AddProp_7BFEDA81(result, arg00_10);
            }
            case 13: {
                const props = option.fields[0];
                return Common_Common_GenericOptions__AddProps_416C4D0B(result, props);
            }
            case 14: {
                const customClass = option.fields[0];
                return Common_Common_GenericOptions__AddClass_Z721C83C5(result, customClass);
            }
            case 15: {
                const modifiers = option.fields[0];
                return Common_Common_GenericOptions__AddModifiers_5BB435D5(result, modifiers);
            }
        }
    };
    return Common_Common_GenericOptions__ToReactElement_Z6D3CD4B7(Common_Common_GenericOptions_Parse_9AE2F7C(options, parseOptions, "textarea"), (props_1, children_1) => react.createElement("textarea", MapUtil_keyValueList(props_1, 1, true), ...children_1), children);
}

