import { Union as Types_Union } from "../../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Types.js";
import { Common_GenericOptions_Parse_9AE2F7C as Common_Common_GenericOptions_Parse_9AE2F7C, Common_GenericOptions__ToReactElement_Z6D3CD4B7 as Common_Common_GenericOptions__ToReactElement_Z6D3CD4B7, Common_GenericOptions__AddModifiers_5BB435D5 as Common_Common_GenericOptions__AddModifiers_5BB435D5, Common_GenericOptions__AddProps_416C4D0B as Common_Common_GenericOptions__AddProps_416C4D0B, Color_ofColor as Common_Color_ofColor, Common_GenericOptions__AddClass_Z721C83C5 as Common_Common_GenericOptions__AddClass_Z721C83C5, Reflection_getCaseName as Common_Reflection_getCaseName, Common_GenericOptions__AddProp_7BFEDA81 as Common_Common_GenericOptions__AddProp_7BFEDA81, Modifier_IModifier$reflection as Common_Modifier_IModifier$reflection, Color_IColor$reflection as Common_Color_IColor$reflection, Size_ISize$reflection as Common_Size_ISize$reflection } from "../Common.js";
import { union_type as Reflection_union_type, string_type as Reflection_string_type, int32_type as Reflection_int32_type, list_type as Reflection_list_type, class_type as Reflection_class_type } from "../../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Reflection.js";
import { HTMLAttr as Fable$002EReact$002EProps_HTMLAttr } from "../../Fable.React.7.0.1/Fable.React.Props.js";
import * as react from "react";
import { keyValueList as MapUtil_keyValueList } from "../../../../.fable/fable-library.3.0.0-nagareyama-beta-003/MapUtil.js";

export class Option extends Types_Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["Size", "Color", "Props", "Value", "Max", "CustomClass", "Modifiers"];
    }
}

export function Option$reflection() {
    return Reflection_union_type("Fulma.Progress.Option", [], Option, () => [[["Item", Common_Size_ISize$reflection()]], [["Item", Common_Color_IColor$reflection()]], [["Item", Reflection_list_type(Reflection_class_type("Fable.React.Props.IHTMLProp"))]], [["Item", Reflection_int32_type]], [["Item", Reflection_int32_type]], [["Item", Reflection_string_type]], [["Item", Reflection_list_type(Common_Modifier_IModifier$reflection())]]]);
}

export function progress(options, children) {
    const parseOptions = (result, option) => {
        switch (option.tag) {
            case 4: {
                const max = option.fields[0] | 0;
                const arg00_1 = new Fable$002EReact$002EProps_HTMLAttr(114, max);
                return Common_Common_GenericOptions__AddProp_7BFEDA81(result, arg00_1);
            }
            case 0: {
                const size = option.fields[0];
                const arg00_2 = Common_Reflection_getCaseName(size);
                return Common_Common_GenericOptions__AddClass_Z721C83C5(result, arg00_2);
            }
            case 1: {
                const color = option.fields[0];
                const arg00_3 = Common_Color_ofColor(color);
                return Common_Common_GenericOptions__AddClass_Z721C83C5(result, arg00_3);
            }
            case 2: {
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
                const value = option.fields[0] | 0;
                const arg00 = new Fable$002EReact$002EProps_HTMLAttr(161, value);
                return Common_Common_GenericOptions__AddProp_7BFEDA81(result, arg00);
            }
        }
    };
    return Common_Common_GenericOptions__ToReactElement_Z6D3CD4B7(Common_Common_GenericOptions_Parse_9AE2F7C(options, parseOptions, "progress"), (props_1, children_1) => react.createElement("progress", MapUtil_keyValueList(props_1, 1, true), ...children_1), children);
}

