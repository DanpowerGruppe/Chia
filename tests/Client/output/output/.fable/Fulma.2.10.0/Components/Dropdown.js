import { Union as Types_Union } from "../../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Types.js";
import { union_type as Reflection_union_type, string_type as Reflection_string_type, list_type as Reflection_list_type, class_type as Reflection_class_type, bool_type as Reflection_bool_type } from "../../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Reflection.js";
import { Common_GenericOptions__ToReactElement_Z46A53D36 as Common_Common_GenericOptions__ToReactElement_Z46A53D36, Common_parseOptions as Common_Common_parseOptions, Common_GenericOptions_Parse_9AE2F7C as Common_Common_GenericOptions_Parse_9AE2F7C, Common_GenericOptions__ToReactElement_Z6D3CD4B7 as Common_Common_GenericOptions__ToReactElement_Z6D3CD4B7, Common_GenericOptions__AddModifiers_5BB435D5 as Common_Common_GenericOptions__AddModifiers_5BB435D5, Common_GenericOptions__AddClass_Z721C83C5 as Common_Common_GenericOptions__AddClass_Z721C83C5, Common_GenericOptions__AddProps_416C4D0B as Common_Common_GenericOptions__AddProps_416C4D0B, Common_GenericOptions__AddCaseName_1505 as Common_Common_GenericOptions__AddCaseName_1505, Modifier_IModifier$reflection as Common_Modifier_IModifier$reflection } from "../Common.js";
import * as react from "react";
import { keyValueList as MapUtil_keyValueList } from "../../../../.fable/fable-library.3.0.0-nagareyama-beta-003/MapUtil.js";

export class Option extends Types_Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["is-active", "is-hoverable", "is-right", "is-up", "Props", "CustomClass", "Modifiers"];
    }
}

export function Option$reflection() {
    return Reflection_union_type("Fulma.Dropdown.Option", [], Option, () => [[["Item", Reflection_bool_type]], [], [], [], [["Item", Reflection_list_type(Reflection_class_type("Fable.React.Props.IHTMLProp"))]], [["Item", Reflection_string_type]], [["Item", Reflection_list_type(Common_Modifier_IModifier$reflection())]]]);
}

export function dropdown(options, children) {
    const parseOptions = (result, option) => {
        switch (option.tag) {
            case 2: {
                return Common_Common_GenericOptions__AddCaseName_1505(result, option);
            }
            case 1: {
                return Common_Common_GenericOptions__AddCaseName_1505(result, option);
            }
            case 3: {
                return Common_Common_GenericOptions__AddCaseName_1505(result, option);
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
    return Common_Common_GenericOptions__ToReactElement_Z6D3CD4B7(Common_Common_GenericOptions_Parse_9AE2F7C(options, parseOptions, "dropdown"), (props_1, children_1) => react.createElement("div", MapUtil_keyValueList(props_1, 1, true), ...children_1), children);
}

export function menu(options, children) {
    return Common_Common_GenericOptions__ToReactElement_Z6D3CD4B7(Common_Common_GenericOptions_Parse_9AE2F7C(options, Common_Common_parseOptions, "dropdown-menu"), (props, children_1) => react.createElement("div", MapUtil_keyValueList(props, 1, true), ...children_1), children);
}

export function content(options, children) {
    return Common_Common_GenericOptions__ToReactElement_Z6D3CD4B7(Common_Common_GenericOptions_Parse_9AE2F7C(options, Common_Common_parseOptions, "dropdown-content"), (props, children_1) => react.createElement("div", MapUtil_keyValueList(props, 1, true), ...children_1), children);
}

export function divider(options) {
    return Common_Common_GenericOptions__ToReactElement_Z46A53D36(Common_Common_GenericOptions_Parse_9AE2F7C(options, Common_Common_parseOptions, "dropdown-divider"), (props) => react.createElement("hr", MapUtil_keyValueList(props, 1, true)));
}

export function trigger(options, children) {
    return Common_Common_GenericOptions__ToReactElement_Z6D3CD4B7(Common_Common_GenericOptions_Parse_9AE2F7C(options, Common_Common_parseOptions, "dropdown-trigger"), (props, children_1) => react.createElement("div", MapUtil_keyValueList(props, 1, true), ...children_1), children);
}

export class Item_Option extends Types_Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["is-active", "Props", "CustomClass", "Modifiers"];
    }
}

export function Item_Option$reflection() {
    return Reflection_union_type("Fulma.Dropdown.Item.Option", [], Item_Option, () => [[["Item", Reflection_bool_type]], [["Item", Reflection_list_type(Reflection_class_type("Fable.React.Props.IHTMLProp"))]], [["Item", Reflection_string_type]], [["Item", Reflection_list_type(Common_Modifier_IModifier$reflection())]]]);
}

export function Item_item(element, options, children) {
    const parseOptions = (result, option) => {
        switch (option.tag) {
            case 1: {
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
    return Common_Common_GenericOptions__ToReactElement_Z6D3CD4B7(Common_Common_GenericOptions_Parse_9AE2F7C(options, parseOptions, "dropdown-item"), element, children);
}

export function Item_div(x, y) {
    return Item_item((props, children) => react.createElement("div", MapUtil_keyValueList(props, 1, true), ...children), x, y);
}

export function Item_a(x, y) {
    return Item_item((props, children) => react.createElement("a", MapUtil_keyValueList(props, 1, true), ...children), x, y);
}

export function Item_button(x, y) {
    return Item_item((props, children) => react.createElement("button", MapUtil_keyValueList(props, 1, true), ...children), x, y);
}

