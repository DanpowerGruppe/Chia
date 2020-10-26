import { Union as Types_Union } from "../../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Types.js";
import { Common_GenericOptions__AddProp_7BFEDA81 as Common_Common_GenericOptions__AddProp_7BFEDA81, Common_parseOptions as Common_Common_parseOptions, Common_GenericOptions_Parse_9AE2F7C as Common_Common_GenericOptions_Parse_9AE2F7C, Common_GenericOptions__ToReactElement_Z6D3CD4B7 as Common_Common_GenericOptions__ToReactElement_Z6D3CD4B7, Common_GenericOptions__AddModifiers_5BB435D5 as Common_Common_GenericOptions__AddModifiers_5BB435D5, Common_GenericOptions__AddProps_416C4D0B as Common_Common_GenericOptions__AddProps_416C4D0B, Common_GenericOptions__AddClass_Z721C83C5 as Common_Common_GenericOptions__AddClass_Z721C83C5, Reflection_getCaseName as Common_Reflection_getCaseName, Common_GenericOptions__AddCaseName_1505 as Common_Common_GenericOptions__AddCaseName_1505, Modifier_IModifier$reflection as Common_Modifier_IModifier$reflection, Size_ISize$reflection as Common_Size_ISize$reflection } from "../Common.js";
import { bool_type as Reflection_bool_type, union_type as Reflection_union_type, list_type as Reflection_list_type, class_type as Reflection_class_type, string_type as Reflection_string_type } from "../../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Reflection.js";
import * as react from "react";
import { keyValueList as MapUtil_keyValueList } from "../../../../.fable/fable-library.3.0.0-nagareyama-beta-003/MapUtil.js";
import { DangerousHtml as Fable$002EReact$002EProps_DangerousHtml, DOMAttr as Fable$002EReact$002EProps_DOMAttr } from "../../Fable.React.7.0.1/Fable.React.Props.js";

export class Option extends Types_Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["is-centered", "is-right", "is-rounded", "Size", "CustomClass", "Props", "Modifiers"];
    }
}

export function Option$reflection() {
    return Reflection_union_type("Fulma.Pagination.Option", [], Option, () => [[], [], [], [["Item", Common_Size_ISize$reflection()]], [["Item", Reflection_string_type]], [["Item", Reflection_list_type(Reflection_class_type("Fable.React.Props.IHTMLProp"))]], [["Item", Reflection_list_type(Common_Modifier_IModifier$reflection())]]]);
}

export function pagination(options, children) {
    const parseOptions = (result, option) => {
        switch (option.tag) {
            case 1:
            case 2: {
                return Common_Common_GenericOptions__AddCaseName_1505(result, option);
            }
            case 3: {
                const size = option.fields[0];
                const arg00 = Common_Reflection_getCaseName(size);
                return Common_Common_GenericOptions__AddClass_Z721C83C5(result, arg00);
            }
            case 5: {
                const props = option.fields[0];
                return Common_Common_GenericOptions__AddProps_416C4D0B(result, props);
            }
            case 4: {
                const customClass = option.fields[0];
                return Common_Common_GenericOptions__AddClass_Z721C83C5(result, customClass);
            }
            case 6: {
                const modifiers = option.fields[0];
                return Common_Common_GenericOptions__AddModifiers_5BB435D5(result, modifiers);
            }
            default: {
                return Common_Common_GenericOptions__AddCaseName_1505(result, option);
            }
        }
    };
    return Common_Common_GenericOptions__ToReactElement_Z6D3CD4B7(Common_Common_GenericOptions_Parse_9AE2F7C(options, parseOptions, "pagination"), (props_1, children_1) => react.createElement("nav", MapUtil_keyValueList(props_1, 1, true), ...children_1), children);
}

export function Previous_previous(element, options, children) {
    return Common_Common_GenericOptions__ToReactElement_Z6D3CD4B7(Common_Common_GenericOptions_Parse_9AE2F7C(options, Common_Common_parseOptions, "pagination-previous"), element, children);
}

export function Previous_a(options, children) {
    return Previous_previous((props, children_1) => react.createElement("a", MapUtil_keyValueList(props, 1, true), ...children_1), options, children);
}

export function Previous_button(options, children) {
    return Previous_previous((props, children_1) => react.createElement("button", MapUtil_keyValueList(props, 1, true), ...children_1), options, children);
}

export function previous(options, children) {
    return Previous_button(options, children);
}

export function Next_next(element, options, children) {
    return Common_Common_GenericOptions__ToReactElement_Z6D3CD4B7(Common_Common_GenericOptions_Parse_9AE2F7C(options, Common_Common_parseOptions, "pagination-next"), element, children);
}

export function Next_a(options, children) {
    return Next_next((props, children_1) => react.createElement("a", MapUtil_keyValueList(props, 1, true), ...children_1), options, children);
}

export function Next_button(options, children) {
    return Next_next((props, children_1) => react.createElement("button", MapUtil_keyValueList(props, 1, true), ...children_1), options, children);
}

export function next(options, children) {
    return Next_button(options, children);
}

export class Link_Option extends Types_Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["is-current", "CustomClass", "Props", "Modifiers"];
    }
}

export function Link_Option$reflection() {
    return Reflection_union_type("Fulma.Pagination.Link.Option", [], Link_Option, () => [[["Item", Reflection_bool_type]], [["Item", Reflection_string_type]], [["Item", Reflection_list_type(Reflection_class_type("Fable.React.Props.IHTMLProp"))]], [["Item", Reflection_list_type(Common_Modifier_IModifier$reflection())]]]);
}

export function Link_link(element, options, children) {
    const parseOptions = (result, option) => {
        switch (option.tag) {
            case 2: {
                const props = option.fields[0];
                return Common_Common_GenericOptions__AddProps_416C4D0B(result, props);
            }
            case 1: {
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
    const children_1 = [Common_Common_GenericOptions__ToReactElement_Z6D3CD4B7(Common_Common_GenericOptions_Parse_9AE2F7C(options, parseOptions, "pagination-link"), element, children)];
    return react.createElement("li", {}, ...children_1);
}

export function Link_a(options, children) {
    return Link_link((props, children_1) => react.createElement("a", MapUtil_keyValueList(props, 1, true), ...children_1), options, children);
}

export function Link_button(options, children) {
    return Link_link((props, children_1) => react.createElement("button", MapUtil_keyValueList(props, 1, true), ...children_1), options, children);
}

export function link(options, children) {
    return Link_button(options, children);
}

export function ellipsis(options) {
    const children_3 = [Common_Common_GenericOptions__ToReactElement_Z6D3CD4B7(Common_Common_GenericOptions__AddProp_7BFEDA81(Common_Common_GenericOptions_Parse_9AE2F7C(options, Common_Common_parseOptions, "pagination-ellipsis"), new Fable$002EReact$002EProps_DOMAttr(0, new Fable$002EReact$002EProps_DangerousHtml("\u0026hellip;"))), (props, children) => react.createElement("span", MapUtil_keyValueList(props, 1, true), ...children))];
    return react.createElement("li", {}, ...children_3);
}

export function list(options, children) {
    return Common_Common_GenericOptions__ToReactElement_Z6D3CD4B7(Common_Common_GenericOptions_Parse_9AE2F7C(options, Common_Common_parseOptions, "pagination-list"), (props, children_1) => react.createElement("ul", MapUtil_keyValueList(props, 1, true), ...children_1), children);
}

