import { Union as Types_Union } from "../../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Types.js";
import { Common_GenericOptions__AddProp_7BFEDA81 as Common_Common_GenericOptions__AddProp_7BFEDA81, Color_ofColor as Common_Color_ofColor, Common_parseOptions as Common_Common_parseOptions, Common_GenericOptions_Parse_9AE2F7C as Common_Common_GenericOptions_Parse_9AE2F7C, Common_GenericOptions__ToReactElement_Z6D3CD4B7 as Common_Common_GenericOptions__ToReactElement_Z6D3CD4B7, Common_GenericOptions__AddModifiers_5BB435D5 as Common_Common_GenericOptions__AddModifiers_5BB435D5, Common_GenericOptions__AddClass_Z721C83C5 as Common_Common_GenericOptions__AddClass_Z721C83C5, Common_GenericOptions__AddProps_416C4D0B as Common_Common_GenericOptions__AddProps_416C4D0B, Common_GenericOptions__AddCaseName_1505 as Common_Common_GenericOptions__AddCaseName_1505, Modifier_IModifier$reflection as Common_Modifier_IModifier$reflection, Color_IColor$reflection as Common_Color_IColor$reflection } from "../Common.js";
import { lambda_type as Reflection_lambda_type, unit_type as Reflection_unit_type, bool_type as Reflection_bool_type, union_type as Reflection_union_type, string_type as Reflection_string_type, list_type as Reflection_list_type, class_type as Reflection_class_type } from "../../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Reflection.js";
import * as react from "react";
import { keyValueList as MapUtil_keyValueList } from "../../../../.fable/fable-library.3.0.0-nagareyama-beta-003/MapUtil.js";
import { DOMAttr as Fable$002EReact$002EProps_DOMAttr } from "../../Fable.React.7.0.1/Fable.React.Props.js";

export class Option extends Types_Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["Color", "has-shadow", "is-transparent", "is-fixed-top", "is-fixed-bottom", "is-spaced", "Props", "CustomClass", "Modifiers"];
    }
}

export function Option$reflection() {
    return Reflection_union_type("Fulma.Navbar.Option", [], Option, () => [[["Item", Common_Color_IColor$reflection()]], [], [], [], [], [], [["Item", Reflection_list_type(Reflection_class_type("Fable.React.Props.IHTMLProp"))]], [["Item", Reflection_string_type]], [["Item", Reflection_list_type(Common_Modifier_IModifier$reflection())]]]);
}

export class Menu_Option extends Types_Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["is-active", "Props", "CustomClass", "Modifiers"];
    }
}

export function Menu_Option$reflection() {
    return Reflection_union_type("Fulma.Navbar.Menu.Option", [], Menu_Option, () => [[["Item", Reflection_bool_type]], [["Item", Reflection_list_type(Reflection_class_type("Fable.React.Props.IHTMLProp"))]], [["Item", Reflection_string_type]], [["Item", Reflection_list_type(Common_Modifier_IModifier$reflection())]]]);
}

export class Burger_Option extends Types_Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["is-active", "OnClick", "Props", "CustomClass", "Modifiers"];
    }
}

export function Burger_Option$reflection() {
    return Reflection_union_type("Fulma.Navbar.Burger.Option", [], Burger_Option, () => [[["Item", Reflection_bool_type]], [["Item", Reflection_lambda_type(Reflection_class_type("Browser.Types.MouseEvent"), Reflection_unit_type)]], [["Item", Reflection_list_type(Reflection_class_type("Fable.React.Props.IHTMLProp"))]], [["Item", Reflection_string_type]], [["Item", Reflection_list_type(Common_Modifier_IModifier$reflection())]]]);
}

export class Item_Option extends Types_Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["is-tab", "is-active", "is-hoverable", "has-dropdown", "is-expanded", "Props", "CustomClass", "Modifiers"];
    }
}

export function Item_Option$reflection() {
    return Reflection_union_type("Fulma.Navbar.Item.Option", [], Item_Option, () => [[], [["Item", Reflection_bool_type]], [], [], [], [["Item", Reflection_list_type(Reflection_class_type("Fable.React.Props.IHTMLProp"))]], [["Item", Reflection_string_type]], [["Item", Reflection_list_type(Common_Modifier_IModifier$reflection())]]]);
}

export function Item_item(element, options, children) {
    const parseOptions = (result, option) => {
        switch (option.tag) {
            case 4:
            case 0:
            case 2:
            case 3: {
                return Common_Common_GenericOptions__AddCaseName_1505(result, option);
            }
            case 5: {
                const props = option.fields[0];
                return Common_Common_GenericOptions__AddProps_416C4D0B(result, props);
            }
            case 6: {
                const customClass = option.fields[0];
                return Common_Common_GenericOptions__AddClass_Z721C83C5(result, customClass);
            }
            case 7: {
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
    return Common_Common_GenericOptions__ToReactElement_Z6D3CD4B7(Common_Common_GenericOptions_Parse_9AE2F7C(options, parseOptions, "navbar-item"), element, children);
}

export function Item_div(x, y) {
    return Item_item((props, children) => react.createElement("div", MapUtil_keyValueList(props, 1, true), ...children), x, y);
}

export function Item_a(x, y) {
    return Item_item((props, children) => react.createElement("a", MapUtil_keyValueList(props, 1, true), ...children), x, y);
}

export class Link_Option extends Types_Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["is-active", "is-arrowless", "Props", "CustomClass", "Modifiers"];
    }
}

export function Link_Option$reflection() {
    return Reflection_union_type("Fulma.Navbar.Link.Option", [], Link_Option, () => [[["Item", Reflection_bool_type]], [], [["Item", Reflection_list_type(Reflection_class_type("Fable.React.Props.IHTMLProp"))]], [["Item", Reflection_string_type]], [["Item", Reflection_list_type(Common_Modifier_IModifier$reflection())]]]);
}

export function Link_link(element, options, children) {
    const parseOptions = (result, option) => {
        switch (option.tag) {
            case 1: {
                return Common_Common_GenericOptions__AddCaseName_1505(result, option);
            }
            case 2: {
                const props = option.fields[0];
                return Common_Common_GenericOptions__AddProps_416C4D0B(result, props);
            }
            case 3: {
                const customClass = option.fields[0];
                return Common_Common_GenericOptions__AddClass_Z721C83C5(result, customClass);
            }
            case 4: {
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
    return Common_Common_GenericOptions__ToReactElement_Z6D3CD4B7(Common_Common_GenericOptions_Parse_9AE2F7C(options, parseOptions, "navbar-link"), element, children);
}

export function Link_div(x, y) {
    return Link_link((props, children) => react.createElement("div", MapUtil_keyValueList(props, 1, true), ...children), x, y);
}

export function Link_a(x, y) {
    return Link_link((props, children) => react.createElement("a", MapUtil_keyValueList(props, 1, true), ...children), x, y);
}

export class Dropdown_Option extends Types_Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["is-active", "is-boxed", "is-right", "Props", "CustomClass", "Modifiers"];
    }
}

export function Dropdown_Option$reflection() {
    return Reflection_union_type("Fulma.Navbar.Dropdown.Option", [], Dropdown_Option, () => [[["Item", Reflection_bool_type]], [], [], [["Item", Reflection_list_type(Reflection_class_type("Fable.React.Props.IHTMLProp"))]], [["Item", Reflection_string_type]], [["Item", Reflection_list_type(Common_Modifier_IModifier$reflection())]]]);
}

export function Dropdown_dropdown(element, options, children) {
    const parseOptions = (result, option) => {
        switch (option.tag) {
            case 1:
            case 2: {
                return Common_Common_GenericOptions__AddCaseName_1505(result, option);
            }
            case 3: {
                const props = option.fields[0];
                return Common_Common_GenericOptions__AddProps_416C4D0B(result, props);
            }
            case 4: {
                const customClass = option.fields[0];
                return Common_Common_GenericOptions__AddClass_Z721C83C5(result, customClass);
            }
            case 5: {
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
    return Common_Common_GenericOptions__ToReactElement_Z6D3CD4B7(Common_Common_GenericOptions_Parse_9AE2F7C(options, parseOptions, "navbar-dropdown"), element, children);
}

export function Dropdown_div(x, y) {
    return Dropdown_dropdown((props, children) => react.createElement("div", MapUtil_keyValueList(props, 1, true), ...children), x, y);
}

export function Dropdown_a(x, y) {
    return Dropdown_dropdown((props, children) => react.createElement("a", MapUtil_keyValueList(props, 1, true), ...children), x, y);
}

export function Brand_brand(element, options, children) {
    return Common_Common_GenericOptions__ToReactElement_Z6D3CD4B7(Common_Common_GenericOptions_Parse_9AE2F7C(options, Common_Common_parseOptions, "navbar-brand"), element, children);
}

export function Brand_div(x, y) {
    return Brand_brand((props, children) => react.createElement("div", MapUtil_keyValueList(props, 1, true), ...children), x, y);
}

export function Brand_a(x, y) {
    return Brand_brand((props, children) => react.createElement("a", MapUtil_keyValueList(props, 1, true), ...children), x, y);
}

export function Start_start(element, options, children) {
    return Common_Common_GenericOptions__ToReactElement_Z6D3CD4B7(Common_Common_GenericOptions_Parse_9AE2F7C(options, Common_Common_parseOptions, "navbar-start"), element, children);
}

export function Start_div(x, y) {
    return Start_start((props, children) => react.createElement("div", MapUtil_keyValueList(props, 1, true), ...children), x, y);
}

export function Start_a(x, y) {
    return Start_start((props, children) => react.createElement("a", MapUtil_keyValueList(props, 1, true), ...children), x, y);
}

export function End_end(element, options, children) {
    return Common_Common_GenericOptions__ToReactElement_Z6D3CD4B7(Common_Common_GenericOptions_Parse_9AE2F7C(options, Common_Common_parseOptions, "navbar-end"), element, children);
}

export function End_div(x, y) {
    return End_end((props, children) => react.createElement("div", MapUtil_keyValueList(props, 1, true), ...children), x, y);
}

export function End_a(x, y) {
    return End_end((props, children) => react.createElement("a", MapUtil_keyValueList(props, 1, true), ...children), x, y);
}

export function navbar(options, children) {
    const parseOptions = (result, option) => {
        switch (option.tag) {
            case 3:
            case 4:
            case 2:
            case 5: {
                return Common_Common_GenericOptions__AddCaseName_1505(result, option);
            }
            case 0: {
                const color = option.fields[0];
                const arg00 = Common_Color_ofColor(color);
                return Common_Common_GenericOptions__AddClass_Z721C83C5(result, arg00);
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
    return Common_Common_GenericOptions__ToReactElement_Z6D3CD4B7(Common_Common_GenericOptions_Parse_9AE2F7C(options, parseOptions, "navbar"), (props_1, children_1) => react.createElement("nav", MapUtil_keyValueList(props_1, 1, true), ...children_1), children);
}

export function menu(options, children) {
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
    return Common_Common_GenericOptions__ToReactElement_Z6D3CD4B7(Common_Common_GenericOptions_Parse_9AE2F7C(options, parseOptions, "navbar-menu"), (props_1, children_1) => react.createElement("div", MapUtil_keyValueList(props_1, 1, true), ...children_1), children);
}

export function burger(options, children) {
    const parseOptions = (result, option) => {
        switch (option.tag) {
            case 1: {
                const cb = option.fields[0];
                const arg00 = new Fable$002EReact$002EProps_DOMAttr(40, cb);
                return Common_Common_GenericOptions__AddProp_7BFEDA81(result, arg00);
            }
            case 2: {
                const props = option.fields[0];
                return Common_Common_GenericOptions__AddProps_416C4D0B(result, props);
            }
            case 3: {
                const customClass = option.fields[0];
                return Common_Common_GenericOptions__AddClass_Z721C83C5(result, customClass);
            }
            case 4: {
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
    return Common_Common_GenericOptions__ToReactElement_Z6D3CD4B7(Common_Common_GenericOptions_Parse_9AE2F7C(options, parseOptions, "navbar-burger"), (props_1, children_1) => react.createElement("div", MapUtil_keyValueList(props_1, 1, true), ...children_1), children);
}

export function content(options, children) {
    return Common_Common_GenericOptions__ToReactElement_Z6D3CD4B7(Common_Common_GenericOptions_Parse_9AE2F7C(options, Common_Common_parseOptions, "navbar-content"), (props, children_1) => react.createElement("div", MapUtil_keyValueList(props, 1, true), ...children_1), children);
}

export function divider(options, children) {
    return Common_Common_GenericOptions__ToReactElement_Z6D3CD4B7(Common_Common_GenericOptions_Parse_9AE2F7C(options, Common_Common_parseOptions, "navbar-divider"), (props, children_1) => react.createElement("div", MapUtil_keyValueList(props, 1, true), ...children_1), children);
}

