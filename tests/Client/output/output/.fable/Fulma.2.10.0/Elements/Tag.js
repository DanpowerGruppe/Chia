import { Union as Types_Union } from "../../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Types.js";
import { Common_GenericOptions_Parse_9AE2F7C as Common_Common_GenericOptions_Parse_9AE2F7C, Common_GenericOptions__ToReactElement_Z6D3CD4B7 as Common_Common_GenericOptions__ToReactElement_Z6D3CD4B7, Common_GenericOptions__AddModifiers_5BB435D5 as Common_Common_GenericOptions__AddModifiers_5BB435D5, Common_GenericOptions__AddProps_416C4D0B as Common_Common_GenericOptions__AddProps_416C4D0B, Color_ofColor as Common_Color_ofColor, Common_GenericOptions__AddCaseName_1505 as Common_Common_GenericOptions__AddCaseName_1505, Common_GenericOptions__AddClass_Z721C83C5 as Common_Common_GenericOptions__AddClass_Z721C83C5, Reflection_getCaseName as Common_Reflection_getCaseName, Modifier_IModifier$reflection as Common_Modifier_IModifier$reflection, Color_IColor$reflection as Common_Color_IColor$reflection, Size_ISize$reflection as Common_Size_ISize$reflection } from "../Common.js";
import { union_type as Reflection_union_type, string_type as Reflection_string_type, list_type as Reflection_list_type, class_type as Reflection_class_type } from "../../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Reflection.js";
import { some as Option_some } from "../../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Option.js";
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
        return ["Size", "Color", "is-delete", "is-light", "Props", "CustomClass", "Modifiers"];
    }
}

export function Option$reflection() {
    return Reflection_union_type("Fulma.Tag.Option", [], Option, () => [[["Item", Common_Size_ISize$reflection()]], [["Item", Common_Color_IColor$reflection()]], [], [], [["Item", Reflection_list_type(Reflection_class_type("Fable.React.Props.IHTMLProp"))]], [["Item", Reflection_string_type]], [["Item", Reflection_list_type(Common_Modifier_IModifier$reflection())]]]);
}

export function tag(options, children) {
    const parseOptions = (result, option) => {
        let pattern_matching_result, size, color, props, customClass, modifiers;
        if (option.tag === 2) {
            pattern_matching_result = 2;
        }
        else if (option.tag === 3) {
            pattern_matching_result = 2;
        }
        else if (option.tag === 1) {
            pattern_matching_result = 3;
            color = option.fields[0];
        }
        else if (option.tag === 4) {
            pattern_matching_result = 4;
            props = option.fields[0];
        }
        else if (option.tag === 5) {
            pattern_matching_result = 5;
            customClass = option.fields[0];
        }
        else if (option.tag === 6) {
            pattern_matching_result = 6;
            modifiers = option.fields[0];
        }
        else if (option.fields[0].tag === 0) {
            pattern_matching_result = 0;
        }
        else {
            pattern_matching_result = 1;
            size = option.fields[0];
        }
        switch (pattern_matching_result) {
            case 0: {
                console.warn(Option_some("`is-small` is not a valid size for the tag element"));
                return result;
            }
            case 1: {
                const arg00 = Common_Reflection_getCaseName(size);
                return Common_Common_GenericOptions__AddClass_Z721C83C5(result, arg00);
            }
            case 2: {
                return Common_Common_GenericOptions__AddCaseName_1505(result, option);
            }
            case 3: {
                const arg00_1 = Common_Color_ofColor(color);
                return Common_Common_GenericOptions__AddClass_Z721C83C5(result, arg00_1);
            }
            case 4: {
                return Common_Common_GenericOptions__AddProps_416C4D0B(result, props);
            }
            case 5: {
                return Common_Common_GenericOptions__AddClass_Z721C83C5(result, customClass);
            }
            case 6: {
                return Common_Common_GenericOptions__AddModifiers_5BB435D5(result, modifiers);
            }
        }
    };
    return Common_Common_GenericOptions__ToReactElement_Z6D3CD4B7(Common_Common_GenericOptions_Parse_9AE2F7C(options, parseOptions, "tag"), (props_1, children_1) => react.createElement("span", MapUtil_keyValueList(props_1, 1, true), ...children_1), children);
}

export function delete$(options, children) {
    return tag(List_cons(new Option(2), options), children);
}

export class List_Option extends Types_Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["has-addons", "is-centered", "is-right", "are-small", "are-medium", "are-large", "Props", "CustomClass", "Modifiers"];
    }
}

export function List_Option$reflection() {
    return Reflection_union_type("Fulma.Tag.List.Option", [], List_Option, () => [[], [], [], [], [], [], [["Item", Reflection_list_type(Reflection_class_type("Fable.React.Props.IHTMLProp"))]], [["Item", Reflection_string_type]], [["Item", Reflection_list_type(Common_Modifier_IModifier$reflection())]]]);
}

export function list(options, children) {
    const parseOptions = (result, option) => {
        switch (option.tag) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5: {
                return Common_Common_GenericOptions__AddCaseName_1505(result, option);
            }
            case 6: {
                const props = option.fields[0];
                return Common_Common_GenericOptions__AddProps_416C4D0B(result, props);
            }
            case 7: {
                const customClass = option.fields[0];
                return Common_Common_GenericOptions__AddClass_Z721C83C5(result, customClass);
            }
            case 8: {
                const modifiers = option.fields[0];
                return Common_Common_GenericOptions__AddModifiers_5BB435D5(result, modifiers);
            }
            default: {
                return Common_Common_GenericOptions__AddCaseName_1505(result, option);
            }
        }
    };
    return Common_Common_GenericOptions__ToReactElement_Z6D3CD4B7(Common_Common_GenericOptions_Parse_9AE2F7C(options, parseOptions, "tags"), (props_1, children_1) => react.createElement("div", MapUtil_keyValueList(props_1, 1, true), ...children_1), children);
}

