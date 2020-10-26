import { Union as Types_Union } from "../../../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Types.js";
import { union_type as Reflection_union_type, list_type as Reflection_list_type, class_type as Reflection_class_type, string_type as Reflection_string_type } from "../../../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Reflection.js";
import { Reflection_getCaseName as Common_Reflection_getCaseName, Common_GenericOptions__AddModifiers_5BB435D5 as Common_Common_GenericOptions__AddModifiers_5BB435D5, Common_GenericOptions__AddClass_Z721C83C5 as Common_Common_GenericOptions__AddClass_Z721C83C5, Common_GenericOptions__AddProps_416C4D0B as Common_Common_GenericOptions__AddProps_416C4D0B, Common_GenericOptions__AddCaseName_1505 as Common_Common_GenericOptions__AddCaseName_1505, Common_parseOptions as Common_Common_parseOptions, Common_GenericOptions_Parse_9AE2F7C as Common_Common_GenericOptions_Parse_9AE2F7C, Common_GenericOptions__ToReactElement_Z6D3CD4B7 as Common_Common_GenericOptions__ToReactElement_Z6D3CD4B7, Size_ISize$reflection as Common_Size_ISize$reflection, Modifier_IModifier$reflection as Common_Modifier_IModifier$reflection } from "../../Common.js";
import * as react from "react";
import { keyValueList as MapUtil_keyValueList } from "../../../../../.fable/fable-library.3.0.0-nagareyama-beta-003/MapUtil.js";

export class Option extends Types_Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["has-addons", "has-addons-centered", "has-addons-right", "has-addons-fullwidth", "is-grouped", "is-grouped-centered", "is-grouped-right", "is-grouped-multiline", "is-horizontal", "is-expanded", "CustomClass", "Props", "Modifiers"];
    }
}

export function Option$reflection() {
    return Reflection_union_type("Fulma.Field.Option", [], Option, () => [[], [], [], [], [], [], [], [], [], [], [["Item", Reflection_string_type]], [["Item", Reflection_list_type(Reflection_class_type("Fable.React.Props.IHTMLProp"))]], [["Item", Reflection_list_type(Common_Modifier_IModifier$reflection())]]]);
}

export class Label_Option extends Types_Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["Size", "is-normal", "CustomClass", "Props", "Modifiers"];
    }
}

export function Label_Option$reflection() {
    return Reflection_union_type("Fulma.Field.Label.Option", [], Label_Option, () => [[["Item", Common_Size_ISize$reflection()]], [], [["Item", Reflection_string_type]], [["Item", Reflection_list_type(Reflection_class_type("Fable.React.Props.IHTMLProp"))]], [["Item", Reflection_list_type(Common_Modifier_IModifier$reflection())]]]);
}

export function body(options, children) {
    return Common_Common_GenericOptions__ToReactElement_Z6D3CD4B7(Common_Common_GenericOptions_Parse_9AE2F7C(options, Common_Common_parseOptions, "field-body"), (props, children_1) => react.createElement("div", MapUtil_keyValueList(props, 1, true), ...children_1), children);
}

export function label(options, children) {
    const parseOptions = (result, option) => {
        switch (option.tag) {
            case 1: {
                return Common_Common_GenericOptions__AddCaseName_1505(result, option);
            }
            case 3: {
                const props = option.fields[0];
                return Common_Common_GenericOptions__AddProps_416C4D0B(result, props);
            }
            case 2: {
                const customClass = option.fields[0];
                return Common_Common_GenericOptions__AddClass_Z721C83C5(result, customClass);
            }
            case 4: {
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
    return Common_Common_GenericOptions__ToReactElement_Z6D3CD4B7(Common_Common_GenericOptions_Parse_9AE2F7C(options, parseOptions, "field-label"), (props_1, children_1) => react.createElement("div", MapUtil_keyValueList(props_1, 1, true), ...children_1), children);
}

export function fieldView(element, options, children) {
    const parseOptions = (result, option) => {
        switch (option.tag) {
            case 2: {
                return Common_Common_GenericOptions__AddCaseName_1505(Common_Common_GenericOptions__AddClass_Z721C83C5(result, "has-addons"), option);
            }
            case 3: {
                return Common_Common_GenericOptions__AddCaseName_1505(Common_Common_GenericOptions__AddClass_Z721C83C5(result, "has-addons"), option);
            }
            case 5: {
                return Common_Common_GenericOptions__AddCaseName_1505(Common_Common_GenericOptions__AddClass_Z721C83C5(result, "is-grouped"), option);
            }
            case 6: {
                return Common_Common_GenericOptions__AddCaseName_1505(Common_Common_GenericOptions__AddClass_Z721C83C5(result, "is-grouped"), option);
            }
            case 7: {
                return Common_Common_GenericOptions__AddCaseName_1505(Common_Common_GenericOptions__AddClass_Z721C83C5(result, "is-grouped"), option);
            }
            case 0:
            case 4:
            case 8:
            case 9: {
                return Common_Common_GenericOptions__AddCaseName_1505(result, option);
            }
            case 11: {
                const props = option.fields[0];
                return Common_Common_GenericOptions__AddProps_416C4D0B(result, props);
            }
            case 10: {
                const customClass = option.fields[0];
                return Common_Common_GenericOptions__AddClass_Z721C83C5(result, customClass);
            }
            case 12: {
                const modifiers = option.fields[0];
                return Common_Common_GenericOptions__AddModifiers_5BB435D5(result, modifiers);
            }
            default: {
                return Common_Common_GenericOptions__AddCaseName_1505(Common_Common_GenericOptions__AddClass_Z721C83C5(result, "has-addons"), option);
            }
        }
    };
    return Common_Common_GenericOptions__ToReactElement_Z6D3CD4B7(Common_Common_GenericOptions_Parse_9AE2F7C(options, parseOptions, "field"), element, children);
}

export function div(x, y) {
    return fieldView((props, children) => react.createElement("div", MapUtil_keyValueList(props, 1, true), ...children), x, y);
}

export function p(x, y) {
    return fieldView((props, children) => react.createElement("p", MapUtil_keyValueList(props, 1, true), ...children), x, y);
}

