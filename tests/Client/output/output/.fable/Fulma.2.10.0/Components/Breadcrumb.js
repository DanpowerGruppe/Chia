import { Union as Types_Union } from "../../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Types.js";
import { Common_GenericOptions_Parse_9AE2F7C as Common_Common_GenericOptions_Parse_9AE2F7C, Common_GenericOptions__ToReactElement_Z6D3CD4B7 as Common_Common_GenericOptions__ToReactElement_Z6D3CD4B7, Reflection_getCaseName as Common_Reflection_getCaseName, Common_GenericOptions__AddModifiers_5BB435D5 as Common_Common_GenericOptions__AddModifiers_5BB435D5, Common_GenericOptions__AddClass_Z721C83C5 as Common_Common_GenericOptions__AddClass_Z721C83C5, Common_GenericOptions__AddProps_416C4D0B as Common_Common_GenericOptions__AddProps_416C4D0B, Common_GenericOptions__AddCaseName_1505 as Common_Common_GenericOptions__AddCaseName_1505, Modifier_IModifier$reflection as Common_Modifier_IModifier$reflection, Size_ISize$reflection as Common_Size_ISize$reflection } from "../Common.js";
import { bool_type as Reflection_bool_type, union_type as Reflection_union_type, string_type as Reflection_string_type, list_type as Reflection_list_type, class_type as Reflection_class_type } from "../../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Reflection.js";
import * as react from "react";
import { keyValueList as MapUtil_keyValueList } from "../../../../.fable/fable-library.3.0.0-nagareyama-beta-003/MapUtil.js";
import { singleton as List_singleton } from "../../../../.fable/fable-library.3.0.0-nagareyama-beta-003/List.js";

export class Option extends Types_Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["is-centered", "is-right", "has-arrow-separator", "has-bullet-separator", "has-dot-separator", "has-succeeds-separator", "Size", "Props", "CustomClass", "Modifiers"];
    }
}

export function Option$reflection() {
    return Reflection_union_type("Fulma.Breadcrumb.Option", [], Option, () => [[], [], [], [], [], [], [["Item", Common_Size_ISize$reflection()]], [["Item", Reflection_list_type(Reflection_class_type("Fable.React.Props.IHTMLProp"))]], [["Item", Reflection_string_type]], [["Item", Reflection_list_type(Common_Modifier_IModifier$reflection())]]]);
}

export function breadcrumb(options, children) {
    const parseOptions = (result, option) => {
        switch (option.tag) {
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5: {
                return Common_Common_GenericOptions__AddCaseName_1505(result, option);
            }
            case 7: {
                const props = option.fields[0];
                return Common_Common_GenericOptions__AddProps_416C4D0B(result, props);
            }
            case 8: {
                const customClass = option.fields[0];
                return Common_Common_GenericOptions__AddClass_Z721C83C5(result, customClass);
            }
            case 9: {
                const modifiers = option.fields[0];
                return Common_Common_GenericOptions__AddModifiers_5BB435D5(result, modifiers);
            }
            default: {
                const size = option.fields[0];
                const arg00 = Common_Reflection_getCaseName(size);
                return Common_Common_GenericOptions__AddClass_Z721C83C5(result, arg00);
            }
        }
    };
    return Common_Common_GenericOptions__ToReactElement_Z6D3CD4B7(Common_Common_GenericOptions_Parse_9AE2F7C(options, parseOptions, "breadcrumb"), (props_1, children_1) => react.createElement("nav", MapUtil_keyValueList(props_1, 1, true), ...children_1), List_singleton(react.createElement("ul", {}, ...children)));
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
    return Reflection_union_type("Fulma.Breadcrumb.Item.Option", [], Item_Option, () => [[["Item", Reflection_bool_type]], [["Item", Reflection_list_type(Reflection_class_type("Fable.React.Props.IHTMLProp"))]], [["Item", Reflection_string_type]], [["Item", Reflection_list_type(Common_Modifier_IModifier$reflection())]]]);
}

export function item(options, children) {
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
    return Common_Common_GenericOptions__ToReactElement_Z6D3CD4B7(Common_Common_GenericOptions_Parse_9AE2F7C(options, parseOptions), (props_1, children_1) => react.createElement("li", MapUtil_keyValueList(props_1, 1, true), ...children_1), children);
}

