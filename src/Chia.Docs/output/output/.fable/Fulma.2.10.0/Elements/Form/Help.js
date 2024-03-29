import { Union as Types_Union } from "../../../../../.fable/fable-library.3.0.0-nagareyama-beta-002/Types.js";
import { union_type as Reflection_union_type, list_type as Reflection_list_type, class_type as Reflection_class_type, string_type as Reflection_string_type } from "../../../../../.fable/fable-library.3.0.0-nagareyama-beta-002/Reflection.js";
import { Common_GenericOptions_Parse_9AE2F7C as Common_Common_GenericOptions_Parse_9AE2F7C, Common_GenericOptions__ToReactElement_Z6D3CD4B7 as Common_Common_GenericOptions__ToReactElement_Z6D3CD4B7, Color_ofColor as Common_Color_ofColor, Common_GenericOptions__AddModifiers_5BB435D5 as Common_Common_GenericOptions__AddModifiers_5BB435D5, Common_GenericOptions__AddClass_Z721C83C5 as Common_Common_GenericOptions__AddClass_Z721C83C5, Common_GenericOptions__AddProps_416C4D0B as Common_Common_GenericOptions__AddProps_416C4D0B, Modifier_IModifier$reflection as Common_Modifier_IModifier$reflection, Color_IColor$reflection as Common_Color_IColor$reflection } from "../../Common.js";
import * as react from "react";
import { keyValueList as MapUtil_keyValueList } from "../../../../../.fable/fable-library.3.0.0-nagareyama-beta-002/MapUtil.js";

export class Option extends Types_Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["CustomClass", "Props", "Color", "Modifiers"];
    }
}

export function Option$reflection() {
    return Reflection_union_type("Fulma.Help.Option", [], Option, () => [[["Item", Reflection_string_type]], [["Item", Reflection_list_type(Reflection_class_type("Fable.React.Props.IHTMLProp"))]], [["Item", Common_Color_IColor$reflection()]], [["Item", Reflection_list_type(Common_Modifier_IModifier$reflection())]]]);
}

export function help(options, children) {
    const parseOptions = (result, option) => {
        switch (option.tag) {
            case 1: {
                const props = option.fields[0];
                return Common_Common_GenericOptions__AddProps_416C4D0B(result, props);
            }
            case 0: {
                const customClass = option.fields[0];
                return Common_Common_GenericOptions__AddClass_Z721C83C5(result, customClass);
            }
            case 3: {
                const modifiers = option.fields[0];
                return Common_Common_GenericOptions__AddModifiers_5BB435D5(result, modifiers);
            }
            default: {
                const color = option.fields[0];
                const arg00 = Common_Color_ofColor(color);
                return Common_Common_GenericOptions__AddClass_Z721C83C5(result, arg00);
            }
        }
    };
    return Common_Common_GenericOptions__ToReactElement_Z6D3CD4B7(Common_Common_GenericOptions_Parse_9AE2F7C(options, parseOptions, "help"), (props_1, children_1) => react.createElement("p", MapUtil_keyValueList(props_1, 1, true), ...children_1), children);
}

