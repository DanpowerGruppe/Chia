import { Union as Types_Union } from "../../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Types.js";
import { union_type as Reflection_union_type, string_type as Reflection_string_type, list_type as Reflection_list_type, class_type as Reflection_class_type } from "../../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Reflection.js";
import { Common_parseOptions as Common_Common_parseOptions, Common_GenericOptions_Parse_9AE2F7C as Common_Common_GenericOptions_Parse_9AE2F7C, Common_GenericOptions__ToReactElement_Z6D3CD4B7 as Common_Common_GenericOptions__ToReactElement_Z6D3CD4B7, Common_GenericOptions__AddCaseName_1505 as Common_Common_GenericOptions__AddCaseName_1505, Common_GenericOptions__AddModifiers_5BB435D5 as Common_Common_GenericOptions__AddModifiers_5BB435D5, Common_GenericOptions__AddClass_Z721C83C5 as Common_Common_GenericOptions__AddClass_Z721C83C5, Common_GenericOptions__AddProps_416C4D0B as Common_Common_GenericOptions__AddProps_416C4D0B, Modifier_IModifier$reflection as Common_Modifier_IModifier$reflection } from "../Common.js";
import * as react from "react";
import { keyValueList as MapUtil_keyValueList } from "../../../../.fable/fable-library.3.0.0-nagareyama-beta-003/MapUtil.js";

export class Level_Option extends Types_Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["Props", "is-mobile", "CustomClass", "Modifiers"];
    }
}

export function Level_Option$reflection() {
    return Reflection_union_type("Fulma.Level.Level.Option", [], Level_Option, () => [[["Item", Reflection_list_type(Reflection_class_type("Fable.React.Props.IHTMLProp"))]], [], [["Item", Reflection_string_type]], [["Item", Reflection_list_type(Common_Modifier_IModifier$reflection())]]]);
}

export class Item_Option extends Types_Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["Props", "has-text-centered", "CustomClass", "Modifiers"];
    }
}

export function Item_Option$reflection() {
    return Reflection_union_type("Fulma.Level.Item.Option", [], Item_Option, () => [[["Item", Reflection_list_type(Reflection_class_type("Fable.React.Props.IHTMLProp"))]], [], [["Item", Reflection_string_type]], [["Item", Reflection_list_type(Common_Modifier_IModifier$reflection())]]]);
}

export function level(options, children) {
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
                return Common_Common_GenericOptions__AddCaseName_1505(result, option);
            }
        }
    };
    return Common_Common_GenericOptions__ToReactElement_Z6D3CD4B7(Common_Common_GenericOptions_Parse_9AE2F7C(options, parseOptions, "level"), (props_1, children_1) => react.createElement("nav", MapUtil_keyValueList(props_1, 1, true), ...children_1), children);
}

export function left(options, children) {
    return Common_Common_GenericOptions__ToReactElement_Z6D3CD4B7(Common_Common_GenericOptions_Parse_9AE2F7C(options, Common_Common_parseOptions, "level-left"), (props, children_1) => react.createElement("div", MapUtil_keyValueList(props, 1, true), ...children_1), children);
}

export function right(options, children) {
    return Common_Common_GenericOptions__ToReactElement_Z6D3CD4B7(Common_Common_GenericOptions_Parse_9AE2F7C(options, Common_Common_parseOptions, "level-right"), (props, children_1) => react.createElement("div", MapUtil_keyValueList(props, 1, true), ...children_1), children);
}

export function item(options, children) {
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
                return Common_Common_GenericOptions__AddCaseName_1505(result, option);
            }
        }
    };
    return Common_Common_GenericOptions__ToReactElement_Z6D3CD4B7(Common_Common_GenericOptions_Parse_9AE2F7C(options, parseOptions, "level-item"), (props_1, children_1) => react.createElement("div", MapUtil_keyValueList(props_1, 1, true), ...children_1), children);
}

export function heading(options, children) {
    return Common_Common_GenericOptions__ToReactElement_Z6D3CD4B7(Common_Common_GenericOptions_Parse_9AE2F7C(options, Common_Common_parseOptions, "heading"), (props, children_1) => react.createElement("p", MapUtil_keyValueList(props, 1, true), ...children_1), children);
}

export function title(options, children) {
    return Common_Common_GenericOptions__ToReactElement_Z6D3CD4B7(Common_Common_GenericOptions_Parse_9AE2F7C(options, Common_Common_parseOptions, "title"), (props, children_1) => react.createElement("p", MapUtil_keyValueList(props, 1, true), ...children_1), children);
}

