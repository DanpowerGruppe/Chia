import { Union as Types_Union } from "../../../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Types.js";
import { union_type as Reflection_union_type, list_type as Reflection_list_type, class_type as Reflection_class_type, string_type as Reflection_string_type } from "../../../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Reflection.js";
import { Common_GenericOptions__ToReactElement_Z46A53D36 as Common_Common_GenericOptions__ToReactElement_Z46A53D36, Common_GenericOptions__AddProp_7BFEDA81 as Common_Common_GenericOptions__AddProp_7BFEDA81, Common_GenericOptions__AddModifiers_5BB435D5 as Common_Common_GenericOptions__AddModifiers_5BB435D5, Common_GenericOptions__AddClass_Z721C83C5 as Common_Common_GenericOptions__AddClass_Z721C83C5, Common_GenericOptions__AddProps_416C4D0B as Common_Common_GenericOptions__AddProps_416C4D0B, Common_parseOptions as Common_Common_parseOptions, Common_GenericOptions_Parse_9AE2F7C as Common_Common_GenericOptions_Parse_9AE2F7C, Common_GenericOptions__ToReactElement_Z6D3CD4B7 as Common_Common_GenericOptions__ToReactElement_Z6D3CD4B7, Modifier_IModifier$reflection as Common_Modifier_IModifier$reflection } from "../../Common.js";
import * as react from "react";
import { keyValueList as MapUtil_keyValueList } from "../../../../../.fable/fable-library.3.0.0-nagareyama-beta-003/MapUtil.js";
import { HTMLAttr as Fable$002EReact$002EProps_HTMLAttr } from "../../../Fable.React.7.0.1/Fable.React.Props.js";
import { singleton as List_singleton } from "../../../../../.fable/fable-library.3.0.0-nagareyama-beta-003/List.js";

export class Input_Option extends Types_Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["CustomClass", "Props", "Name", "Modifiers"];
    }
}

export function Input_Option$reflection() {
    return Reflection_union_type("Fulma.Radio.Input.Option", [], Input_Option, () => [[["Item", Reflection_string_type]], [["Item", Reflection_list_type(Reflection_class_type("Fable.React.Props.IHTMLProp"))]], [["Item", Reflection_string_type]], [["Item", Reflection_list_type(Common_Modifier_IModifier$reflection())]]]);
}

export function radio(options, children) {
    return Common_Common_GenericOptions__ToReactElement_Z6D3CD4B7(Common_Common_GenericOptions_Parse_9AE2F7C(options, Common_Common_parseOptions, "radio"), (props, children_1) => react.createElement("label", MapUtil_keyValueList(props, 1, true), ...children_1), children);
}

export function input(options) {
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
                const name = option.fields[0];
                const arg00 = new Fable$002EReact$002EProps_HTMLAttr(123, name);
                return Common_Common_GenericOptions__AddProp_7BFEDA81(result, arg00);
            }
        }
    };
    return Common_Common_GenericOptions__ToReactElement_Z46A53D36(Common_Common_GenericOptions_Parse_9AE2F7C(options, parseOptions, "radio", List_singleton(new Fable$002EReact$002EProps_HTMLAttr(159, "radio"))), (props_1) => react.createElement("input", MapUtil_keyValueList(props_1, 1, true)));
}

