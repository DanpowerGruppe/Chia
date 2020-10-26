import { Union as Types_Union } from "../../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Types.js";
import { lambda_type as Reflection_lambda_type, unit_type as Reflection_unit_type, union_type as Reflection_union_type, string_type as Reflection_string_type, bool_type as Reflection_bool_type, list_type as Reflection_list_type, class_type as Reflection_class_type } from "../../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Reflection.js";
import { Common_parseOptions as Common_Common_parseOptions, Common_GenericOptions__AddProp_7BFEDA81 as Common_Common_GenericOptions__AddProp_7BFEDA81, Reflection_getCaseName as Common_Reflection_getCaseName, Common_GenericOptions_Parse_9AE2F7C as Common_Common_GenericOptions_Parse_9AE2F7C, Common_GenericOptions__ToReactElement_Z6D3CD4B7 as Common_Common_GenericOptions__ToReactElement_Z6D3CD4B7, Common_GenericOptions__AddCaseName_1505 as Common_Common_GenericOptions__AddCaseName_1505, Common_GenericOptions__AddModifiers_5BB435D5 as Common_Common_GenericOptions__AddModifiers_5BB435D5, Common_GenericOptions__AddClass_Z721C83C5 as Common_Common_GenericOptions__AddClass_Z721C83C5, Common_GenericOptions__AddProps_416C4D0B as Common_Common_GenericOptions__AddProps_416C4D0B, Size_ISize$reflection as Common_Size_ISize$reflection, Modifier_IModifier$reflection as Common_Modifier_IModifier$reflection } from "../Common.js";
import * as react from "react";
import { keyValueList as MapUtil_keyValueList } from "../../../../.fable/fable-library.3.0.0-nagareyama-beta-003/MapUtil.js";
import { some as Option_some } from "../../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Option.js";
import { DOMAttr as Fable$002EReact$002EProps_DOMAttr } from "../../Fable.React.7.0.1/Fable.React.Props.js";

export class Option extends Types_Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["Props", "is-active", "CustomClass", "Modifiers"];
    }
}

export function Option$reflection() {
    return Reflection_union_type("Fulma.Modal.Option", [], Option, () => [[["Item", Reflection_list_type(Reflection_class_type("Fable.React.Props.IHTMLProp"))]], [["Item", Reflection_bool_type]], [["Item", Reflection_string_type]], [["Item", Reflection_list_type(Common_Modifier_IModifier$reflection())]]]);
}

export class Close_Option extends Types_Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["Size", "OnClick", "Props", "CustomClass", "Modifiers"];
    }
}

export function Close_Option$reflection() {
    return Reflection_union_type("Fulma.Modal.Close.Option", [], Close_Option, () => [[["Item", Common_Size_ISize$reflection()]], [["Item", Reflection_lambda_type(Reflection_class_type("Browser.Types.MouseEvent"), Reflection_unit_type)]], [["Item", Reflection_list_type(Reflection_class_type("Fable.React.Props.IHTMLProp"))]], [["Item", Reflection_string_type]], [["Item", Reflection_list_type(Common_Modifier_IModifier$reflection())]]]);
}

export function modal(options, children) {
    const parseOptions = (result, option) => {
        switch (option.tag) {
            case 0: {
                const props = option.fields[0];
                return Common_Common_GenericOptions__AddProps_416C4D0B(result, props);
            }
            case 2: {
                const customClass = option.fields[0];
                return Common_Common_GenericOptions__AddClass_Z721C83C5(result, customClass);
            }
            case 3: {
                const modifiers = option.fields[0];
                return Common_Common_GenericOptions__AddModifiers_5BB435D5(result, modifiers);
            }
            default: {
                const state = option.fields[0];
                if (state) {
                    return Common_Common_GenericOptions__AddCaseName_1505(result, option);
                }
                else {
                    return result;
                }
            }
        }
    };
    return Common_Common_GenericOptions__ToReactElement_Z6D3CD4B7(Common_Common_GenericOptions_Parse_9AE2F7C(options, parseOptions, "modal"), (props_1, children_1) => react.createElement("div", MapUtil_keyValueList(props_1, 1, true), ...children_1), children);
}

export function close(options, children) {
    const parseOptions = (result, option) => {
        let pattern_matching_result, size, cb, props, customClass, modifiers;
        if (option.tag === 1) {
            pattern_matching_result = 2;
            cb = option.fields[0];
        }
        else if (option.tag === 2) {
            pattern_matching_result = 3;
            props = option.fields[0];
        }
        else if (option.tag === 3) {
            pattern_matching_result = 4;
            customClass = option.fields[0];
        }
        else if (option.tag === 4) {
            pattern_matching_result = 5;
            modifiers = option.fields[0];
        }
        else if (option.fields[0].tag === 0) {
            pattern_matching_result = 0;
        }
        else if (option.fields[0].tag === 1) {
            pattern_matching_result = 0;
        }
        else {
            pattern_matching_result = 1;
            size = option.fields[0];
        }
        switch (pattern_matching_result) {
            case 0: {
                console.warn(Option_some("`is-small` and `is-medium` are not valid sizes for \u0027modal close\u0027"));
                return result;
            }
            case 1: {
                const arg00 = Common_Reflection_getCaseName(size);
                return Common_Common_GenericOptions__AddClass_Z721C83C5(result, arg00);
            }
            case 2: {
                const arg00_1 = new Fable$002EReact$002EProps_DOMAttr(40, cb);
                return Common_Common_GenericOptions__AddProp_7BFEDA81(result, arg00_1);
            }
            case 3: {
                return Common_Common_GenericOptions__AddProps_416C4D0B(result, props);
            }
            case 4: {
                return Common_Common_GenericOptions__AddClass_Z721C83C5(result, customClass);
            }
            case 5: {
                return Common_Common_GenericOptions__AddModifiers_5BB435D5(result, modifiers);
            }
        }
    };
    return Common_Common_GenericOptions__ToReactElement_Z6D3CD4B7(Common_Common_GenericOptions_Parse_9AE2F7C(options, parseOptions, "modal-close"), (props_1, children_1) => react.createElement("button", MapUtil_keyValueList(props_1, 1, true), ...children_1), children);
}

export function background(options, children) {
    return Common_Common_GenericOptions__ToReactElement_Z6D3CD4B7(Common_Common_GenericOptions_Parse_9AE2F7C(options, Common_Common_parseOptions, "modal-background"), (props, children_1) => react.createElement("div", MapUtil_keyValueList(props, 1, true), ...children_1), children);
}

export function content(options, children) {
    return Common_Common_GenericOptions__ToReactElement_Z6D3CD4B7(Common_Common_GenericOptions_Parse_9AE2F7C(options, Common_Common_parseOptions, "modal-content"), (props, children_1) => react.createElement("div", MapUtil_keyValueList(props, 1, true), ...children_1), children);
}

export function Card_card(options, children) {
    return Common_Common_GenericOptions__ToReactElement_Z6D3CD4B7(Common_Common_GenericOptions_Parse_9AE2F7C(options, Common_Common_parseOptions, "modal-card"), (props, children_1) => react.createElement("div", MapUtil_keyValueList(props, 1, true), ...children_1), children);
}

export function Card_head(options, children) {
    return Common_Common_GenericOptions__ToReactElement_Z6D3CD4B7(Common_Common_GenericOptions_Parse_9AE2F7C(options, Common_Common_parseOptions, "modal-card-head"), (props, children_1) => react.createElement("header", MapUtil_keyValueList(props, 1, true), ...children_1), children);
}

export function Card_foot(options, children) {
    return Common_Common_GenericOptions__ToReactElement_Z6D3CD4B7(Common_Common_GenericOptions_Parse_9AE2F7C(options, Common_Common_parseOptions, "modal-card-foot"), (props, children_1) => react.createElement("footer", MapUtil_keyValueList(props, 1, true), ...children_1), children);
}

export function Card_title(options, children) {
    return Common_Common_GenericOptions__ToReactElement_Z6D3CD4B7(Common_Common_GenericOptions_Parse_9AE2F7C(options, Common_Common_parseOptions, "modal-card-title"), (props, children_1) => react.createElement("div", MapUtil_keyValueList(props, 1, true), ...children_1), children);
}

export function Card_body(options, children) {
    return Common_Common_GenericOptions__ToReactElement_Z6D3CD4B7(Common_Common_GenericOptions_Parse_9AE2F7C(options, Common_Common_parseOptions, "modal-card-body"), (props, children_1) => react.createElement("section", MapUtil_keyValueList(props, 1, true), ...children_1), children);
}

