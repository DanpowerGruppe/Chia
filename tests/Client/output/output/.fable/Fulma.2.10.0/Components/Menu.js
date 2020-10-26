import { Common_GenericOptions__AddCaseName_1505 as Common_Common_GenericOptions__AddCaseName_1505, Common_GenericOptions__AddModifiers_5BB435D5 as Common_Common_GenericOptions__AddModifiers_5BB435D5, Common_GenericOptions__AddClass_Z721C83C5 as Common_Common_GenericOptions__AddClass_Z721C83C5, Common_GenericOptions__AddProps_416C4D0B as Common_Common_GenericOptions__AddProps_416C4D0B, Common_GenericOptions__AddProp_7BFEDA81 as Common_Common_GenericOptions__AddProp_7BFEDA81, Modifier_IModifier$reflection as Common_Modifier_IModifier$reflection, Common_parseOptions as Common_Common_parseOptions, Common_GenericOptions_Parse_9AE2F7C as Common_Common_GenericOptions_Parse_9AE2F7C, Common_GenericOptions__ToReactElement_Z6D3CD4B7 as Common_Common_GenericOptions__ToReactElement_Z6D3CD4B7 } from "../Common.js";
import * as react from "react";
import { keyValueList as MapUtil_keyValueList } from "../../../../.fable/fable-library.3.0.0-nagareyama-beta-003/MapUtil.js";
import { Union as Types_Union } from "../../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Types.js";
import { union_type as Reflection_union_type, lambda_type as Reflection_lambda_type, unit_type as Reflection_unit_type, string_type as Reflection_string_type, list_type as Reflection_list_type, class_type as Reflection_class_type, bool_type as Reflection_bool_type } from "../../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Reflection.js";
import { HTMLAttr as Fable$002EReact$002EProps_HTMLAttr, DOMAttr as Fable$002EReact$002EProps_DOMAttr } from "../../Fable.React.7.0.1/Fable.React.Props.js";

export function menu(options, children) {
    return Common_Common_GenericOptions__ToReactElement_Z6D3CD4B7(Common_Common_GenericOptions_Parse_9AE2F7C(options, Common_Common_parseOptions, "menu"), (props, children_1) => react.createElement("aside", MapUtil_keyValueList(props, 1, true), ...children_1), children);
}

export function label(options, children) {
    return Common_Common_GenericOptions__ToReactElement_Z6D3CD4B7(Common_Common_GenericOptions_Parse_9AE2F7C(options, Common_Common_parseOptions, "menu-label"), (props, children_1) => react.createElement("p", MapUtil_keyValueList(props, 1, true), ...children_1), children);
}

export function list(options, children) {
    return Common_Common_GenericOptions__ToReactElement_Z6D3CD4B7(Common_Common_GenericOptions_Parse_9AE2F7C(options, Common_Common_parseOptions, "menu-list"), (props, children_1) => react.createElement("ul", MapUtil_keyValueList(props, 1, true), ...children_1), children);
}

export class Item_Option extends Types_Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["is-active", "Props", "CustomClass", "OnClick", "Href", "Modifiers"];
    }
}

export function Item_Option$reflection() {
    return Reflection_union_type("Fulma.Menu.Item.Option", [], Item_Option, () => [[["Item", Reflection_bool_type]], [["Item", Reflection_list_type(Reflection_class_type("Fable.React.Props.IHTMLProp"))]], [["Item", Reflection_string_type]], [["Item", Reflection_lambda_type(Reflection_class_type("Browser.Types.MouseEvent"), Reflection_unit_type)]], [["Item", Reflection_string_type]], [["Item", Reflection_list_type(Common_Modifier_IModifier$reflection())]]]);
}

function Item_generateAnchor(options, children) {
    const parseOptions = (result, option) => {
        switch (option.tag) {
            case 3: {
                const cb = option.fields[0];
                const arg00 = new Fable$002EReact$002EProps_DOMAttr(40, cb);
                return Common_Common_GenericOptions__AddProp_7BFEDA81(result, arg00);
            }
            case 4: {
                const href = option.fields[0];
                const arg00_1 = new Fable$002EReact$002EProps_HTMLAttr(94, href);
                return Common_Common_GenericOptions__AddProp_7BFEDA81(result, arg00_1);
            }
            case 1: {
                const props = option.fields[0];
                return Common_Common_GenericOptions__AddProps_416C4D0B(result, props);
            }
            case 2: {
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
    return Common_Common_GenericOptions__ToReactElement_Z6D3CD4B7(Common_Common_GenericOptions_Parse_9AE2F7C(options, parseOptions), (props_1, children_1) => react.createElement("a", MapUtil_keyValueList(props_1, 1, true), ...children_1), children);
}

export function Item_li(options, children) {
    const children_1 = [Item_generateAnchor(options, children)];
    return react.createElement("li", {}, ...children_1);
}

export function Item_a(options, children) {
    return Item_generateAnchor(options, children);
}

