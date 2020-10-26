import { Union as Types_Union } from "../../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Types.js";
import { list_type as Reflection_list_type, class_type as Reflection_class_type, string_type as Reflection_string_type, union_type as Reflection_union_type } from "../../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Reflection.js";
import { Common_GenericOptions_Parse_9AE2F7C as Common_Common_GenericOptions_Parse_9AE2F7C, Common_GenericOptions__ToReactElement_Z6D3CD4B7 as Common_Common_GenericOptions__ToReactElement_Z6D3CD4B7, Common_GenericOptions__AddModifiers_5BB435D5 as Common_Common_GenericOptions__AddModifiers_5BB435D5, Common_GenericOptions__AddClass_Z721C83C5 as Common_Common_GenericOptions__AddClass_Z721C83C5, Common_GenericOptions__AddProps_416C4D0B as Common_Common_GenericOptions__AddProps_416C4D0B, Common_GenericOptions__AddCaseName_1505 as Common_Common_GenericOptions__AddCaseName_1505, Modifier_IModifier$reflection as Common_Modifier_IModifier$reflection, Reflection_getCaseName as Common_Reflection_getCaseName } from "../Common.js";
import * as react from "react";
import { keyValueList as MapUtil_keyValueList } from "../../../../.fable/fable-library.3.0.0-nagareyama-beta-003/MapUtil.js";
import { cons as List_cons } from "../../../../.fable/fable-library.3.0.0-nagareyama-beta-003/List.js";

export class ISize extends Types_Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["is-1", "is-2", "is-3", "is-4", "is-5", "is-6", "is-7", "is-8", "is-9", "is-10", "is-11", "is-12"];
    }
}

export function ISize$reflection() {
    return Reflection_union_type("Fulma.Tile.ISize", [], ISize, () => [[], [], [], [], [], [], [], [], [], [], [], []]);
}

export function ISize_ToString_Z15E9EFF2(x) {
    return Common_Reflection_getCaseName(x);
}

export class Option extends Types_Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["Size", "CustomClass", "Props", "is-child", "is-ancestor", "is-parent", "is-vertical", "Modifiers"];
    }
}

export function Option$reflection() {
    return Reflection_union_type("Fulma.Tile.Option", [], Option, () => [[["Item", ISize$reflection()]], [["Item", Reflection_string_type]], [["Item", Reflection_list_type(Reflection_class_type("Fable.React.Props.IHTMLProp"))]], [], [], [], [], [["Item", Reflection_list_type(Common_Modifier_IModifier$reflection())]]]);
}

export function tile(options, children) {
    const parseOptions = (result, option) => {
        switch (option.tag) {
            case 3:
            case 4:
            case 5:
            case 6: {
                return Common_Common_GenericOptions__AddCaseName_1505(result, option);
            }
            case 2: {
                const props = option.fields[0];
                return Common_Common_GenericOptions__AddProps_416C4D0B(result, props);
            }
            case 1: {
                const customClass = option.fields[0];
                return Common_Common_GenericOptions__AddClass_Z721C83C5(result, customClass);
            }
            case 7: {
                const modifiers = option.fields[0];
                return Common_Common_GenericOptions__AddModifiers_5BB435D5(result, modifiers);
            }
            default: {
                const size = option.fields[0];
                const arg00 = ISize_ToString_Z15E9EFF2(size);
                return Common_Common_GenericOptions__AddClass_Z721C83C5(result, arg00);
            }
        }
    };
    return Common_Common_GenericOptions__ToReactElement_Z6D3CD4B7(Common_Common_GenericOptions_Parse_9AE2F7C(options, parseOptions, "tile"), (props_1, children_1) => react.createElement("div", MapUtil_keyValueList(props_1, 1, true), ...children_1), children);
}

export function parent(options, children) {
    return tile(List_cons(new Option(5), options), children);
}

export function child(options, children) {
    return tile(List_cons(new Option(3), options), children);
}

export function ancestor(options, children) {
    return tile(List_cons(new Option(4), options), children);
}

