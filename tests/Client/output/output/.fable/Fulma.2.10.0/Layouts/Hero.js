import { Union as Types_Union } from "../../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Types.js";
import { Common_parseOptions as Common_Common_parseOptions, Common_GenericOptions_Parse_9AE2F7C as Common_Common_GenericOptions_Parse_9AE2F7C, Common_GenericOptions__ToReactElement_Z6D3CD4B7 as Common_Common_GenericOptions__ToReactElement_Z6D3CD4B7, Common_GenericOptions__AddModifiers_5BB435D5 as Common_Common_GenericOptions__AddModifiers_5BB435D5, Common_GenericOptions__AddProps_416C4D0B as Common_Common_GenericOptions__AddProps_416C4D0B, Common_GenericOptions__AddClass_Z721C83C5 as Common_Common_GenericOptions__AddClass_Z721C83C5, Color_ofColor as Common_Color_ofColor, Common_GenericOptions__AddCaseName_1505 as Common_Common_GenericOptions__AddCaseName_1505, Modifier_IModifier$reflection as Common_Modifier_IModifier$reflection, Color_IColor$reflection as Common_Color_IColor$reflection } from "../Common.js";
import { union_type as Reflection_union_type, list_type as Reflection_list_type, class_type as Reflection_class_type, string_type as Reflection_string_type } from "../../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Reflection.js";
import * as react from "react";
import { keyValueList as MapUtil_keyValueList } from "../../../../.fable/fable-library.3.0.0-nagareyama-beta-003/MapUtil.js";

export class Option extends Types_Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["is-bold", "is-medium", "is-large", "is-halfheight", "is-fullheight-with-navbar", "is-fullheight", "Color", "CustomClass", "Props", "Modifiers"];
    }
}

export function Option$reflection() {
    return Reflection_union_type("Fulma.Hero.Option", [], Option, () => [[], [], [], [], [], [], [["Item", Common_Color_IColor$reflection()]], [["Item", Reflection_string_type]], [["Item", Reflection_list_type(Reflection_class_type("Fable.React.Props.IHTMLProp"))]], [["Item", Reflection_list_type(Common_Modifier_IModifier$reflection())]]]);
}

export function hero(options, children) {
    const parseOptions = (result, option) => {
        switch (option.tag) {
            case 2:
            case 3:
            case 5:
            case 4:
            case 0: {
                return Common_Common_GenericOptions__AddCaseName_1505(result, option);
            }
            case 6: {
                const color = option.fields[0];
                const arg00 = Common_Color_ofColor(color);
                return Common_Common_GenericOptions__AddClass_Z721C83C5(result, arg00);
            }
            case 8: {
                const props = option.fields[0];
                return Common_Common_GenericOptions__AddProps_416C4D0B(result, props);
            }
            case 7: {
                const customClass = option.fields[0];
                return Common_Common_GenericOptions__AddClass_Z721C83C5(result, customClass);
            }
            case 9: {
                const modifiers = option.fields[0];
                return Common_Common_GenericOptions__AddModifiers_5BB435D5(result, modifiers);
            }
            default: {
                return Common_Common_GenericOptions__AddCaseName_1505(result, option);
            }
        }
    };
    return Common_Common_GenericOptions__ToReactElement_Z6D3CD4B7(Common_Common_GenericOptions_Parse_9AE2F7C(options, parseOptions, "hero"), (props_1, children_1) => react.createElement("div", MapUtil_keyValueList(props_1, 1, true), ...children_1), children);
}

export function head(options, children) {
    return Common_Common_GenericOptions__ToReactElement_Z6D3CD4B7(Common_Common_GenericOptions_Parse_9AE2F7C(options, Common_Common_parseOptions, "hero-head"), (props, children_1) => react.createElement("div", MapUtil_keyValueList(props, 1, true), ...children_1), children);
}

export function body(options, children) {
    return Common_Common_GenericOptions__ToReactElement_Z6D3CD4B7(Common_Common_GenericOptions_Parse_9AE2F7C(options, Common_Common_parseOptions, "hero-body"), (props, children_1) => react.createElement("div", MapUtil_keyValueList(props, 1, true), ...children_1), children);
}

export function foot(options, children) {
    return Common_Common_GenericOptions__ToReactElement_Z6D3CD4B7(Common_Common_GenericOptions_Parse_9AE2F7C(options, Common_Common_parseOptions, "hero-foot"), (props, children_1) => react.createElement("div", MapUtil_keyValueList(props, 1, true), ...children_1), children);
}

export function video(options, children) {
    return Common_Common_GenericOptions__ToReactElement_Z6D3CD4B7(Common_Common_GenericOptions_Parse_9AE2F7C(options, Common_Common_parseOptions, "hero-video"), (props, children_1) => react.createElement("div", MapUtil_keyValueList(props, 1, true), ...children_1), children);
}

export function buttons(options, children) {
    return Common_Common_GenericOptions__ToReactElement_Z6D3CD4B7(Common_Common_GenericOptions_Parse_9AE2F7C(options, Common_Common_parseOptions, "hero-buttons"), (props, children_1) => react.createElement("div", MapUtil_keyValueList(props, 1, true), ...children_1), children);
}

