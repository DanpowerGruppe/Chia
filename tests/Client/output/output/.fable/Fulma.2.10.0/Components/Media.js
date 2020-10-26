import { Union as Types_Union } from "../../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Types.js";
import { Common_parseOptions as Common_Common_parseOptions, Common_GenericOptions_Parse_9AE2F7C as Common_Common_GenericOptions_Parse_9AE2F7C, Common_GenericOptions__ToReactElement_Z6D3CD4B7 as Common_Common_GenericOptions__ToReactElement_Z6D3CD4B7, Common_GenericOptions__AddModifiers_5BB435D5 as Common_Common_GenericOptions__AddModifiers_5BB435D5, Common_GenericOptions__AddProps_416C4D0B as Common_Common_GenericOptions__AddProps_416C4D0B, Common_GenericOptions__AddClass_Z721C83C5 as Common_Common_GenericOptions__AddClass_Z721C83C5, Reflection_getCaseName as Common_Reflection_getCaseName, Modifier_IModifier$reflection as Common_Modifier_IModifier$reflection, Size_ISize$reflection as Common_Size_ISize$reflection } from "../Common.js";
import { union_type as Reflection_union_type, string_type as Reflection_string_type, list_type as Reflection_list_type, class_type as Reflection_class_type } from "../../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Reflection.js";
import { some as Option_some } from "../../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Option.js";
import * as react from "react";
import { keyValueList as MapUtil_keyValueList } from "../../../../.fable/fable-library.3.0.0-nagareyama-beta-003/MapUtil.js";

export class Option extends Types_Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["Size", "Props", "CustomClass", "Modifiers"];
    }
}

export function Option$reflection() {
    return Reflection_union_type("Fulma.Media.Option", [], Option, () => [[["Item", Common_Size_ISize$reflection()]], [["Item", Reflection_list_type(Reflection_class_type("Fable.React.Props.IHTMLProp"))]], [["Item", Reflection_string_type]], [["Item", Reflection_list_type(Common_Modifier_IModifier$reflection())]]]);
}

export function media(options, children) {
    const parseOptions = (result, option) => {
        let pattern_matching_result, size, props, customClass, modifiers;
        if (option.tag === 1) {
            pattern_matching_result = 2;
            props = option.fields[0];
        }
        else if (option.tag === 2) {
            pattern_matching_result = 3;
            customClass = option.fields[0];
        }
        else if (option.tag === 3) {
            pattern_matching_result = 4;
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
                console.warn(Option_some("`is-small` and `is-medium` are not valid sizes for the media component"));
                return result;
            }
            case 1: {
                const arg00 = Common_Reflection_getCaseName(size);
                return Common_Common_GenericOptions__AddClass_Z721C83C5(result, arg00);
            }
            case 2: {
                return Common_Common_GenericOptions__AddProps_416C4D0B(result, props);
            }
            case 3: {
                return Common_Common_GenericOptions__AddClass_Z721C83C5(result, customClass);
            }
            case 4: {
                return Common_Common_GenericOptions__AddModifiers_5BB435D5(result, modifiers);
            }
        }
    };
    return Common_Common_GenericOptions__ToReactElement_Z6D3CD4B7(Common_Common_GenericOptions_Parse_9AE2F7C(options, parseOptions, "media"), (props_1, children_1) => react.createElement("article", MapUtil_keyValueList(props_1, 1, true), ...children_1), children);
}

export function left(options, children) {
    return Common_Common_GenericOptions__ToReactElement_Z6D3CD4B7(Common_Common_GenericOptions_Parse_9AE2F7C(options, Common_Common_parseOptions, "media-left"), (props, children_1) => react.createElement("div", MapUtil_keyValueList(props, 1, true), ...children_1), children);
}

export function right(options, children) {
    return Common_Common_GenericOptions__ToReactElement_Z6D3CD4B7(Common_Common_GenericOptions_Parse_9AE2F7C(options, Common_Common_parseOptions, "media-right"), (props, children_1) => react.createElement("div", MapUtil_keyValueList(props, 1, true), ...children_1), children);
}

export function content(options, children) {
    return Common_Common_GenericOptions__ToReactElement_Z6D3CD4B7(Common_Common_GenericOptions_Parse_9AE2F7C(options, Common_Common_parseOptions, "media-content"), (props, children_1) => react.createElement("div", MapUtil_keyValueList(props, 1, true), ...children_1), children);
}

