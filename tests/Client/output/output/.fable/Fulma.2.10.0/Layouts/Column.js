import { Union as Types_Union } from "../../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Types.js";
import { list_type as Reflection_list_type, class_type as Reflection_class_type, string_type as Reflection_string_type, union_type as Reflection_union_type } from "../../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Reflection.js";
import { Common_GenericOptions_Parse_9AE2F7C as Common_Common_GenericOptions_Parse_9AE2F7C, Common_GenericOptions__ToReactElement_Z6D3CD4B7 as Common_Common_GenericOptions__ToReactElement_Z6D3CD4B7, Common_GenericOptions__AddModifiers_5BB435D5 as Common_Common_GenericOptions__AddModifiers_5BB435D5, Common_GenericOptions__AddProps_416C4D0B as Common_Common_GenericOptions__AddProps_416C4D0B, Common_GenericOptions__AddClass_Z721C83C5 as Common_Common_GenericOptions__AddClass_Z721C83C5, Reflection_getCaseName as Common_Reflection_getCaseName, Modifier_IModifier$reflection as Common_Modifier_IModifier$reflection, Screen$reflection as Common_Screen$reflection } from "../Common.js";
import * as react from "react";
import { keyValueList as MapUtil_keyValueList } from "../../../../.fable/fable-library.3.0.0-nagareyama-beta-003/MapUtil.js";

export class ISize extends Types_Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["is-one-quarter", "is-one-third", "is-half", "is-two-thirds", "is-three-quarters", "is-1", "is-2", "is-3", "is-4", "is-5", "is-6", "is-7", "is-8", "is-9", "is-10", "is-11", "is-12", "is-narrow", "is-full", "is-one-fifth", "is-two-fifths", "is-three-fifths", "is-four-fifths"];
    }
}

export function ISize$reflection() {
    return Reflection_union_type("Fulma.Column.ISize", [], ISize, () => [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]);
}

export class Option extends Types_Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["Width", "Offset", "CustomClass", "Props", "Modifiers"];
    }
}

export function Option$reflection() {
    return Reflection_union_type("Fulma.Column.Option", [], Option, () => [[["Item1", Common_Screen$reflection()], ["Item2", ISize$reflection()]], [["Item1", Common_Screen$reflection()], ["Item2", ISize$reflection()]], [["Item", Reflection_string_type]], [["Item", Reflection_list_type(Reflection_class_type("Fable.React.Props.IHTMLProp"))]], [["Item", Reflection_list_type(Common_Modifier_IModifier$reflection())]]]);
}

function suffix(_arg1) {
    switch (_arg1.tag) {
        case 1: {
            return "-desktop";
        }
        case 2: {
            return "-tablet";
        }
        case 3: {
            return "-mobile";
        }
        case 4: {
            return "-widescreen";
        }
        case 6: {
            return "-fullhd";
        }
        case 5: {
            return "-touch";
        }
        default: {
            return "";
        }
    }
}

export function ofWidth(screen, size) {
    return Common_Reflection_getCaseName(size) + suffix(screen);
}

export function ofOffset(screen, offset) {
    const className = Common_Reflection_getCaseName(offset);
    return ("is-offset-" + className.slice(3, className.length)) + suffix(screen);
}

export function column(options, children) {
    const parseOptions = (result, option) => {
        switch (option.tag) {
            case 1: {
                const screen_1 = option.fields[0];
                const offset = option.fields[1];
                const arg00_1 = ofOffset(screen_1, offset);
                return Common_Common_GenericOptions__AddClass_Z721C83C5(result, arg00_1);
            }
            case 2: {
                const customClass = option.fields[0];
                return Common_Common_GenericOptions__AddClass_Z721C83C5(result, customClass);
            }
            case 3: {
                const props = option.fields[0];
                return Common_Common_GenericOptions__AddProps_416C4D0B(result, props);
            }
            case 4: {
                const modifiers = option.fields[0];
                return Common_Common_GenericOptions__AddModifiers_5BB435D5(result, modifiers);
            }
            default: {
                const width = option.fields[1];
                const screen = option.fields[0];
                const arg00 = ofWidth(screen, width);
                return Common_Common_GenericOptions__AddClass_Z721C83C5(result, arg00);
            }
        }
    };
    return Common_Common_GenericOptions__ToReactElement_Z6D3CD4B7(Common_Common_GenericOptions_Parse_9AE2F7C(options, parseOptions, "column"), (props_1, children_1) => react.createElement("div", MapUtil_keyValueList(props_1, 1, true), ...children_1), children);
}

