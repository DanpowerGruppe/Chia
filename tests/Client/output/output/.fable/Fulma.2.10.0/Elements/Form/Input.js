import { Union as Types_Union } from "../../../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Types.js";
import { list_type as Reflection_list_type, lambda_type as Reflection_lambda_type, unit_type as Reflection_unit_type, class_type as Reflection_class_type, bool_type as Reflection_bool_type, string_type as Reflection_string_type, union_type as Reflection_union_type } from "../../../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Reflection.js";
import { Common_GenericOptions_Parse_9AE2F7C as Common_Common_GenericOptions_Parse_9AE2F7C, Common_GenericOptions__ToReactElement_Z46A53D36 as Common_Common_GenericOptions__ToReactElement_Z46A53D36, Common_GenericOptions__AddModifiers_5BB435D5 as Common_Common_GenericOptions__AddModifiers_5BB435D5, Common_GenericOptions__AddProps_416C4D0B as Common_Common_GenericOptions__AddProps_416C4D0B, Common_GenericOptions__AddProp_7BFEDA81 as Common_Common_GenericOptions__AddProp_7BFEDA81, Color_ofColor as Common_Color_ofColor, Common_GenericOptions__AddClass_Z721C83C5 as Common_Common_GenericOptions__AddClass_Z721C83C5, Reflection_getCaseName as Common_Reflection_getCaseName, Common_GenericOptions__AddCaseName_1505 as Common_Common_GenericOptions__AddCaseName_1505, Modifier_IModifier$reflection as Common_Modifier_IModifier$reflection, Color_IColor$reflection as Common_Color_IColor$reflection, Size_ISize$reflection as Common_Size_ISize$reflection } from "../../Common.js";
import { DOMAttr as Fable$002EReact$002EProps_DOMAttr, Prop as Fable$002EReact$002EProps_Prop, HTMLAttr as Fable$002EReact$002EProps_HTMLAttr } from "../../../Fable.React.7.0.1/Fable.React.Props.js";
import { equals as Util_equals } from "../../../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Util.js";
import * as react from "react";
import { keyValueList as MapUtil_keyValueList } from "../../../../../.fable/fable-library.3.0.0-nagareyama-beta-003/MapUtil.js";

export class IInputType extends Types_Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["Text", "Password", "DatetimeLocal", "Date", "Month", "Time", "Week", "Number", "Email", "Url", "Search", "Tel", "ColorType"];
    }
}

export function IInputType$reflection() {
    return Reflection_union_type("Fulma.Input.IInputType", [], IInputType, () => [[], [], [], [], [], [], [], [], [], [], [], [], []]);
}

export class Option extends Types_Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["Size", "Type", "Color", "Id", "Disabled", "IsReadOnly", "is-static", "is-rounded", "Value", "Key", "DefaultValue", "ValueOrDefault", "Placeholder", "OnChange", "Ref", "Props", "CustomClass", "Modifiers"];
    }
}

export function Option$reflection() {
    return Reflection_union_type("Fulma.Input.Option", [], Option, () => [[["Item", Common_Size_ISize$reflection()]], [["Item", IInputType$reflection()]], [["Item", Common_Color_IColor$reflection()]], [["Item", Reflection_string_type]], [["Item", Reflection_bool_type]], [["Item", Reflection_bool_type]], [["Item", Reflection_bool_type]], [], [["Item", Reflection_string_type]], [["Item", Reflection_string_type]], [["Item", Reflection_string_type]], [["Item", Reflection_string_type]], [["Item", Reflection_string_type]], [["Item", Reflection_lambda_type(Reflection_class_type("Browser.Types.Event"), Reflection_unit_type)]], [["Item", Reflection_lambda_type(Reflection_class_type("Browser.Types.Element"), Reflection_unit_type)]], [["Item", Reflection_list_type(Reflection_class_type("Fable.React.Props.IHTMLProp"))]], [["Item", Reflection_string_type]], [["Item", Reflection_list_type(Common_Modifier_IModifier$reflection())]]]);
}

function ofType(typ) {
    switch (typ.tag) {
        case 1: {
            return "password";
        }
        case 2: {
            return "datetime-local";
        }
        case 3: {
            return "date";
        }
        case 4: {
            return "month";
        }
        case 5: {
            return "time";
        }
        case 6: {
            return "week";
        }
        case 7: {
            return "number";
        }
        case 8: {
            return "email";
        }
        case 9: {
            return "url";
        }
        case 10: {
            return "search";
        }
        case 11: {
            return "tel";
        }
        case 12: {
            return "color";
        }
        default: {
            return "text";
        }
    }
}

export function input(options) {
    const parseOptions = (result, option) => {
        switch (option.tag) {
            case 7: {
                return Common_Common_GenericOptions__AddCaseName_1505(result, option);
            }
            case 0: {
                const size = option.fields[0];
                const arg00 = Common_Reflection_getCaseName(size);
                return Common_Common_GenericOptions__AddClass_Z721C83C5(result, arg00);
            }
            case 2: {
                const color_1 = option.fields[0];
                const arg00_1 = Common_Color_ofColor(color_1);
                return Common_Common_GenericOptions__AddClass_Z721C83C5(result, arg00_1);
            }
            case 1: {
                const type$0027 = option.fields[0];
                const arg00_2 = new Fable$002EReact$002EProps_HTMLAttr(159, ofType(type$0027));
                return Common_Common_GenericOptions__AddProp_7BFEDA81(result, arg00_2);
            }
            case 3: {
                const id = option.fields[0];
                const arg00_3 = new Fable$002EReact$002EProps_HTMLAttr(99, id);
                return Common_Common_GenericOptions__AddProp_7BFEDA81(result, arg00_3);
            }
            case 4: {
                const disabled = option.fields[0];
                const arg00_4 = new Fable$002EReact$002EProps_HTMLAttr(79, disabled);
                return Common_Common_GenericOptions__AddProp_7BFEDA81(result, arg00_4);
            }
            case 5: {
                const state_1 = option.fields[0];
                const arg00_5 = new Fable$002EReact$002EProps_HTMLAttr(132, state_1);
                return Common_Common_GenericOptions__AddProp_7BFEDA81(result, arg00_5);
            }
            case 8: {
                const value = option.fields[0];
                const arg00_6 = new Fable$002EReact$002EProps_HTMLAttr(161, value);
                return Common_Common_GenericOptions__AddProp_7BFEDA81(result, arg00_6);
            }
            case 10: {
                const defaultValue = option.fields[0];
                const arg00_7 = new Fable$002EReact$002EProps_HTMLAttr(1, defaultValue);
                return Common_Common_GenericOptions__AddProp_7BFEDA81(result, arg00_7);
            }
            case 11: {
                const valueOrDefault = option.fields[0];
                let arg00_8;
                const arg0 = (e) => {
                    let value_2, value_1;
                    if ((value_2 = (value_1 = e, (value_1 == null)), (!value_2)) ? (!Util_equals(e.value, valueOrDefault)) : false) {
                        e.value = valueOrDefault;
                    }
                };
                arg00_8 = (new Fable$002EReact$002EProps_Prop(1, arg0));
                return Common_Common_GenericOptions__AddProp_7BFEDA81(result, arg00_8);
            }
            case 12: {
                const placeholder = option.fields[0];
                const arg00_9 = new Fable$002EReact$002EProps_HTMLAttr(128, placeholder);
                return Common_Common_GenericOptions__AddProp_7BFEDA81(result, arg00_9);
            }
            case 13: {
                const cb = option.fields[0];
                const arg00_10 = new Fable$002EReact$002EProps_DOMAttr(9, cb);
                return Common_Common_GenericOptions__AddProp_7BFEDA81(result, arg00_10);
            }
            case 14: {
                const ref = option.fields[0];
                const arg00_11 = new Fable$002EReact$002EProps_Prop(1, ref);
                return Common_Common_GenericOptions__AddProp_7BFEDA81(result, arg00_11);
            }
            case 15: {
                const props = option.fields[0];
                return Common_Common_GenericOptions__AddProps_416C4D0B(result, props);
            }
            case 16: {
                const customClass = option.fields[0];
                return Common_Common_GenericOptions__AddClass_Z721C83C5(result, customClass);
            }
            case 17: {
                const modifiers = option.fields[0];
                return Common_Common_GenericOptions__AddModifiers_5BB435D5(result, modifiers);
            }
            case 9: {
                const k = option.fields[0];
                const arg00_12 = new Fable$002EReact$002EProps_Prop(0, k);
                return Common_Common_GenericOptions__AddProp_7BFEDA81(result, arg00_12);
            }
            default: {
                const state = option.fields[0];
                if (state) {
                    return Common_Common_GenericOptions__AddCaseName_1505(result, option);
                }
                else {
                    return result;
                }
            }
        }
    };
    return Common_Common_GenericOptions__ToReactElement_Z46A53D36(Common_Common_GenericOptions_Parse_9AE2F7C(options, parseOptions, "input"), (props_1) => react.createElement("input", MapUtil_keyValueList(props_1, 1, true)));
}

