import { Union as Types_Union } from "../../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Types.js";
import { Common_GenericOptions__AddCaseName_1505 as Common_Common_GenericOptions__AddCaseName_1505, Common_GenericOptions_Parse_9AE2F7C as Common_Common_GenericOptions_Parse_9AE2F7C, Common_GenericOptions__ToReactElement_Z6D3CD4B7 as Common_Common_GenericOptions__ToReactElement_Z6D3CD4B7, Reflection_getCaseName as Common_Reflection_getCaseName, Common_GenericOptions__AddModifiers_5BB435D5 as Common_Common_GenericOptions__AddModifiers_5BB435D5, Common_GenericOptions__AddClass_Z721C83C5 as Common_Common_GenericOptions__AddClass_Z721C83C5, Common_GenericOptions__AddProps_416C4D0B as Common_Common_GenericOptions__AddProps_416C4D0B, Modifier_IModifier$reflection as Common_Modifier_IModifier$reflection, Size_ISize$reflection as Common_Size_ISize$reflection } from "../Common.js";
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
        return ["Size", "CustomClass", "Props", "Modifiers"];
    }
}

export function Option$reflection() {
    return Reflection_union_type("Fulma.Content.Option", [], Option, () => [[["Item", Common_Size_ISize$reflection()]], [["Item", Reflection_string_type]], [["Item", Reflection_list_type(Reflection_class_type("Fable.React.Props.IHTMLProp"))]], [["Item", Reflection_list_type(Common_Modifier_IModifier$reflection())]]]);
}

export function content(options, children) {
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
                const size = option.fields[0];
                const arg00 = Common_Reflection_getCaseName(size);
                return Common_Common_GenericOptions__AddClass_Z721C83C5(result, arg00);
            }
        }
    };
    return Common_Common_GenericOptions__ToReactElement_Z6D3CD4B7(Common_Common_GenericOptions_Parse_9AE2F7C(options, parseOptions, "content"), (props_1, children_1) => react.createElement("div", MapUtil_keyValueList(props_1, 1, true), ...children_1), children);
}

export class Ol_Option extends Types_Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["is-lower-roman", "is-upper-roman", "is-lower-alpha", "is-upper-alpha", "CustomClass", "Modifiers", "Props"];
    }
}

export function Ol_Option$reflection() {
    return Reflection_union_type("Fulma.Content.Ol.Option", [], Ol_Option, () => [[], [], [], [], [["Item", Reflection_string_type]], [["Item", Reflection_list_type(Common_Modifier_IModifier$reflection())]], [["Item", Reflection_list_type(Reflection_class_type("Fable.React.Props.IHTMLProp"))]]]);
}

export function Ol_ol(options, children) {
    const parseOptions = (result, option) => {
        switch (option.tag) {
            case 1:
            case 2:
            case 3: {
                return Common_Common_GenericOptions__AddCaseName_1505(result, option);
            }
            case 6: {
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
                return Common_Common_GenericOptions__AddCaseName_1505(result, option);
            }
        }
    };
    return Common_Common_GenericOptions__ToReactElement_Z6D3CD4B7(Common_Common_GenericOptions_Parse_9AE2F7C(options, parseOptions), (props_1, children_1) => react.createElement("ol", MapUtil_keyValueList(props_1, 1, true), ...children_1), children);
}

