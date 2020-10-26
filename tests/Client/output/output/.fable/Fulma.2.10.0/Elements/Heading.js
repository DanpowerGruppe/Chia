import { Union as Types_Union } from "../../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Types.js";
import { union_type as Reflection_union_type, list_type as Reflection_list_type, class_type as Reflection_class_type, string_type as Reflection_string_type } from "../../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Reflection.js";
import { Common_GenericOptions_Parse_9AE2F7C as Common_Common_GenericOptions_Parse_9AE2F7C, Common_GenericOptions__ToReactElement_Z6D3CD4B7 as Common_Common_GenericOptions__ToReactElement_Z6D3CD4B7, Common_GenericOptions__AddModifiers_5BB435D5 as Common_Common_GenericOptions__AddModifiers_5BB435D5, Common_GenericOptions__AddProps_416C4D0B as Common_Common_GenericOptions__AddProps_416C4D0B, Common_GenericOptions__RemoveClass_Z721C83C5 as Common_Common_GenericOptions__RemoveClass_Z721C83C5, Common_GenericOptions__AddClass_Z721C83C5 as Common_Common_GenericOptions__AddClass_Z721C83C5, Common_GenericOptions__AddCaseName_1505 as Common_Common_GenericOptions__AddCaseName_1505, Modifier_IModifier$reflection as Common_Modifier_IModifier$reflection } from "../Common.js";
import * as react from "react";
import { keyValueList as MapUtil_keyValueList } from "../../../../.fable/fable-library.3.0.0-nagareyama-beta-003/MapUtil.js";
import { cons as List_cons } from "../../../../.fable/fable-library.3.0.0-nagareyama-beta-003/List.js";

export class Option extends Types_Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["is-1", "is-2", "is-3", "is-4", "is-5", "is-6", "subtitle`", "is-spaced", "CustomClass", "Props", "Modifiers"];
    }
}

export function Option$reflection() {
    return Reflection_union_type("Fulma.Heading.Option", [], Option, () => [[], [], [], [], [], [], [], [], [["Item", Reflection_string_type]], [["Item", Reflection_list_type(Reflection_class_type("Fable.React.Props.IHTMLProp"))]], [["Item", Reflection_list_type(Common_Modifier_IModifier$reflection())]]]);
}

export function title(element, options, children) {
    const parseOptions = (result, option) => {
        switch (option.tag) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 7: {
                return Common_Common_GenericOptions__AddCaseName_1505(result, option);
            }
            case 6: {
                return Common_Common_GenericOptions__AddClass_Z721C83C5(Common_Common_GenericOptions__RemoveClass_Z721C83C5(result, "title"), "subtitle");
            }
            case 9: {
                const props = option.fields[0];
                return Common_Common_GenericOptions__AddProps_416C4D0B(result, props);
            }
            case 8: {
                const customClass = option.fields[0];
                return Common_Common_GenericOptions__AddClass_Z721C83C5(result, customClass);
            }
            case 10: {
                const modifiers = option.fields[0];
                return Common_Common_GenericOptions__AddModifiers_5BB435D5(result, modifiers);
            }
            default: {
                return Common_Common_GenericOptions__AddCaseName_1505(result, option);
            }
        }
    };
    return Common_Common_GenericOptions__ToReactElement_Z6D3CD4B7(Common_Common_GenericOptions_Parse_9AE2F7C(options, parseOptions, "title"), element, children);
}

export function h1(options) {
    return (children_3) => title((props, children) => react.createElement("h1", MapUtil_keyValueList(props, 1, true), ...children), List_cons(new Option(0), options), children_3);
}

export function h2(options) {
    return (children_3) => title((props, children) => react.createElement("h2", MapUtil_keyValueList(props, 1, true), ...children), List_cons(new Option(1), options), children_3);
}

export function h3(options) {
    return (children_3) => title((props, children) => react.createElement("h3", MapUtil_keyValueList(props, 1, true), ...children), List_cons(new Option(2), options), children_3);
}

export function h4(options) {
    return (children_3) => title((props, children) => react.createElement("h4", MapUtil_keyValueList(props, 1, true), ...children), List_cons(new Option(3), options), children_3);
}

export function h5(options) {
    return (children_3) => title((props, children) => react.createElement("h5", MapUtil_keyValueList(props, 1, true), ...children), List_cons(new Option(4), options), children_3);
}

export function h6(options) {
    return (children_3) => title((props, children) => react.createElement("h6", MapUtil_keyValueList(props, 1, true), ...children), List_cons(new Option(5), options), children_3);
}

export function p(opts, children) {
    return title((props, children_1) => react.createElement("p", MapUtil_keyValueList(props, 1, true), ...children_1), opts, children);
}

