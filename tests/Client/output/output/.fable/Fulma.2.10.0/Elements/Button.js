import { Union as Types_Union } from "../../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Types.js";
import { Common_GenericOptions_Parse_9AE2F7C as Common_Common_GenericOptions_Parse_9AE2F7C, Common_GenericOptions__ToReactElement_Z6D3CD4B7 as Common_Common_GenericOptions__ToReactElement_Z6D3CD4B7, Common_GenericOptions__AddModifiers_5BB435D5 as Common_Common_GenericOptions__AddModifiers_5BB435D5, Common_GenericOptions__AddProps_416C4D0B as Common_Common_GenericOptions__AddProps_416C4D0B, Common_GenericOptions__AddProp_7BFEDA81 as Common_Common_GenericOptions__AddProp_7BFEDA81, Common_GenericOptions__AddCaseName_1505 as Common_Common_GenericOptions__AddCaseName_1505, Reflection_getCaseName as Common_Reflection_getCaseName, Common_GenericOptions__AddClass_Z721C83C5 as Common_Common_GenericOptions__AddClass_Z721C83C5, Color_ofColor as Common_Color_ofColor, Modifier_IModifier$reflection as Common_Modifier_IModifier$reflection, Size_ISize$reflection as Common_Size_ISize$reflection, Color_IColor$reflection as Common_Color_IColor$reflection } from "../Common.js";
import { union_type as Reflection_union_type, string_type as Reflection_string_type, lambda_type as Reflection_lambda_type, unit_type as Reflection_unit_type, list_type as Reflection_list_type, class_type as Reflection_class_type, bool_type as Reflection_bool_type } from "../../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Reflection.js";
import { DOMAttr as Fable$002EReact$002EProps_DOMAttr, HTMLAttr as Fable$002EReact$002EProps_HTMLAttr } from "../../Fable.React.7.0.1/Fable.React.Props.js";
import * as react from "react";
import { keyValueList as MapUtil_keyValueList } from "../../../../.fable/fable-library.3.0.0-nagareyama-beta-003/MapUtil.js";
import { singleton as List_singleton, empty as List_empty, cons as List_cons, map as List_map, exists as List_exists } from "../../../../.fable/fable-library.3.0.0-nagareyama-beta-003/List.js";

export class Option extends Types_Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["Color", "Size", "is-fullwidth", "is-link", "is-outlined", "is-inverted", "is-text", "is-rounded", "is-expanded", "is-hovered", "is-focused", "is-active", "is-loading", "is-static", "is-light", "Disabled", "Props", "OnClick", "CustomClass", "Modifiers"];
    }
}

export function Option$reflection() {
    return Reflection_union_type("Fulma.Button.Option", [], Option, () => [[["Item", Common_Color_IColor$reflection()]], [["Item", Common_Size_ISize$reflection()]], [], [], [], [], [], [], [], [["Item", Reflection_bool_type]], [["Item", Reflection_bool_type]], [["Item", Reflection_bool_type]], [["Item", Reflection_bool_type]], [["Item", Reflection_bool_type]], [], [["Item", Reflection_bool_type]], [["Item", Reflection_list_type(Reflection_class_type("Fable.React.Props.IHTMLProp"))]], [["Item", Reflection_lambda_type(Reflection_class_type("Browser.Types.MouseEvent"), Reflection_unit_type)]], [["Item", Reflection_string_type]], [["Item", Reflection_list_type(Common_Modifier_IModifier$reflection())]]]);
}

export function btnView(element, options, children) {
    const parseOptions = (result, option) => {
        let pattern_matching_result, state;
        switch (option.tag) {
            case 1: {
                pattern_matching_result = 1;
                break;
            }
            case 3:
            case 2:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 14: {
                pattern_matching_result = 2;
                break;
            }
            case 9: {
                pattern_matching_result = 3;
                state = option.fields[0];
                break;
            }
            case 10: {
                pattern_matching_result = 3;
                state = option.fields[0];
                break;
            }
            case 11: {
                pattern_matching_result = 3;
                state = option.fields[0];
                break;
            }
            case 12: {
                pattern_matching_result = 3;
                state = option.fields[0];
                break;
            }
            case 13: {
                pattern_matching_result = 3;
                state = option.fields[0];
                break;
            }
            case 15: {
                pattern_matching_result = 4;
                break;
            }
            case 17: {
                pattern_matching_result = 5;
                break;
            }
            case 16: {
                pattern_matching_result = 6;
                break;
            }
            case 18: {
                pattern_matching_result = 7;
                break;
            }
            case 19: {
                pattern_matching_result = 8;
                break;
            }
            default: pattern_matching_result = 0}
        switch (pattern_matching_result) {
            case 0: {
                const color = option.fields[0];
                const arg00 = Common_Color_ofColor(color);
                return Common_Common_GenericOptions__AddClass_Z721C83C5(result, arg00);
            }
            case 1: {
                const size = option.fields[0];
                const arg00_1 = Common_Reflection_getCaseName(size);
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
                const isDisabled = option.fields[0];
                const arg00_2 = new Fable$002EReact$002EProps_HTMLAttr(79, isDisabled);
                return Common_Common_GenericOptions__AddProp_7BFEDA81(result, arg00_2);
            }
            case 5: {
                const cb = option.fields[0];
                const arg00_3 = new Fable$002EReact$002EProps_DOMAttr(40, cb);
                return Common_Common_GenericOptions__AddProp_7BFEDA81(result, arg00_3);
            }
            case 6: {
                const props = option.fields[0];
                return Common_Common_GenericOptions__AddProps_416C4D0B(result, props);
            }
            case 7: {
                const customClass = option.fields[0];
                return Common_Common_GenericOptions__AddClass_Z721C83C5(result, customClass);
            }
            case 8: {
                const modifiers = option.fields[0];
                return Common_Common_GenericOptions__AddModifiers_5BB435D5(result, modifiers);
            }
        }
    };
    return Common_Common_GenericOptions__ToReactElement_Z6D3CD4B7(Common_Common_GenericOptions_Parse_9AE2F7C(options, parseOptions, "button"), element, children);
}

export function button(options, children) {
    return btnView((props, children_1) => react.createElement("button", MapUtil_keyValueList(props, 1, true), ...children_1), options, children);
}

export function span(options, children) {
    return btnView((props, children_1) => react.createElement("span", MapUtil_keyValueList(props, 1, true), ...children_1), options, children);
}

export function a(options, children) {
    return btnView((props, children_1) => react.createElement("a", MapUtil_keyValueList(props, 1, true), ...children_1), options, children);
}

export function Input_btnInput(typ, options) {
    let hasProps;
    const list_1 = options;
    hasProps = List_exists((opts) => {
        if (opts.tag === 16) {
            return true;
        }
        else {
            return false;
        }
    }, list_1);
    if (hasProps) {
        let newOptions;
        const list_2 = options;
        newOptions = List_map((opts_1) => {
            if (opts_1.tag === 16) {
                const props = opts_1.fields[0];
                return new Option(16, List_cons(new Fable$002EReact$002EProps_HTMLAttr(159, typ), props));
            }
            else {
                const forward = opts_1;
                return forward;
            }
        }, list_2);
        return btnView((options_1, _arg1) => react.createElement("input", MapUtil_keyValueList(options_1, 1, true)), newOptions, List_empty());
    }
    else {
        return btnView((options_2, _arg2) => react.createElement("input", MapUtil_keyValueList(options_2, 1, true)), List_cons(new Option(16, List_singleton(new Fable$002EReact$002EProps_HTMLAttr(159, typ))), options), List_empty());
    }
}

export function Input_reset(options) {
    return Input_btnInput("reset", options);
}

export function Input_submit(options) {
    return Input_btnInput("submit", options);
}

export class List_Option extends Types_Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["has-addons", "is-centered", "is-right", "are-small", "are-medium", "are-large", "Props", "CustomClass", "Modifiers"];
    }
}

export function List_Option$reflection() {
    return Reflection_union_type("Fulma.Button.List.Option", [], List_Option, () => [[], [], [], [], [], [], [["Item", Reflection_list_type(Reflection_class_type("Fable.React.Props.IHTMLProp"))]], [["Item", Reflection_string_type]], [["Item", Reflection_list_type(Common_Modifier_IModifier$reflection())]]]);
}

export function list(options, children) {
    const parseOptions = (result, option) => {
        switch (option.tag) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5: {
                return Common_Common_GenericOptions__AddCaseName_1505(result, option);
            }
            case 6: {
                const props = option.fields[0];
                return Common_Common_GenericOptions__AddProps_416C4D0B(result, props);
            }
            case 7: {
                const customClass = option.fields[0];
                return Common_Common_GenericOptions__AddClass_Z721C83C5(result, customClass);
            }
            case 8: {
                const modifiers = option.fields[0];
                return Common_Common_GenericOptions__AddModifiers_5BB435D5(result, modifiers);
            }
            default: {
                return Common_Common_GenericOptions__AddCaseName_1505(result, option);
            }
        }
    };
    return Common_Common_GenericOptions__ToReactElement_Z6D3CD4B7(Common_Common_GenericOptions_Parse_9AE2F7C(options, parseOptions, "buttons"), (props_1, children_1) => react.createElement("div", MapUtil_keyValueList(props_1, 1, true), ...children_1), children);
}

