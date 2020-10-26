import { Union as Types_Union } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Types.js";
import { bool_type as Reflection_bool_type, union_type as Reflection_union_type, list_type as Reflection_list_type, class_type as Reflection_class_type, string_type as Reflection_string_type } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Reflection.js";
import { Color_ofColor as Common_Color_ofColor, Color_IColor$reflection as Common_Color_IColor$reflection, Common_parseOptions as Common_Common_parseOptions, Common_GenericOptions_Parse_9AE2F7C as Common_Common_GenericOptions_Parse_9AE2F7C, Common_GenericOptions__ToReactElement_Z6D3CD4B7 as Common_Common_GenericOptions__ToReactElement_Z6D3CD4B7, Common_GenericOptions__AddProps_416C4D0B as Common_Common_GenericOptions__AddProps_416C4D0B, Common_GenericOptions__AddCaseName_1505 as Common_Common_GenericOptions__AddCaseName_1505, Common_GenericOptions__AddClass_Z721C83C5 as Common_Common_GenericOptions__AddClass_Z721C83C5 } from "../Fulma.2.10.0/Common.js";
import * as react from "react";
import { keyValueList as MapUtil_keyValueList } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/MapUtil.js";

export class Option extends Types_Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["CustomClass", "Props", "is-large"];
    }
}

export function Option$reflection() {
    return Reflection_union_type("Fulma.Extensions.Wikiki.Calendar.Option", [], Option, () => [[["Item", Reflection_string_type]], [["Item", Reflection_list_type(Reflection_class_type("Fable.React.Props.IHTMLProp"))]], []]);
}

export function calendar(options, children) {
    const parseOptions = (result, option) => {
        switch (option.tag) {
            case 0: {
                const customClass = option.fields[0];
                return Common_Common_GenericOptions__AddClass_Z721C83C5(result, customClass);
            }
            case 2: {
                return Common_Common_GenericOptions__AddCaseName_1505(result, option);
            }
            default: {
                const props = option.fields[0];
                return Common_Common_GenericOptions__AddProps_416C4D0B(result, props);
            }
        }
    };
    return Common_Common_GenericOptions__ToReactElement_Z6D3CD4B7(Common_Common_GenericOptions_Parse_9AE2F7C(options, parseOptions, "calendar"), (props_1, children_1) => react.createElement("div", MapUtil_keyValueList(props_1, 1, true), ...children_1), children);
}

export function header(options, children) {
    return Common_Common_GenericOptions__ToReactElement_Z6D3CD4B7(Common_Common_GenericOptions_Parse_9AE2F7C(options, Common_Common_parseOptions, "calendar-header"), (props, children_1) => react.createElement("div", MapUtil_keyValueList(props, 1, true), ...children_1), children);
}

export function body(options, children) {
    return Common_Common_GenericOptions__ToReactElement_Z6D3CD4B7(Common_Common_GenericOptions_Parse_9AE2F7C(options, Common_Common_parseOptions, "calendar-body"), (props, children_1) => react.createElement("div", MapUtil_keyValueList(props, 1, true), ...children_1), children);
}

export function events(options, children) {
    return Common_Common_GenericOptions__ToReactElement_Z6D3CD4B7(Common_Common_GenericOptions_Parse_9AE2F7C(options, Common_Common_parseOptions, "calendar-events"), (props, children_1) => react.createElement("div", MapUtil_keyValueList(props, 1, true), ...children_1), children);
}

export class Date_Option extends Types_Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["CustomClass", "Props", "is-disabled", "range-start", "calendar-range", "range-end"];
    }
}

export function Date_Option$reflection() {
    return Reflection_union_type("Fulma.Extensions.Wikiki.Calendar.Date.Option", [], Date_Option, () => [[["Item", Reflection_string_type]], [["Item", Reflection_list_type(Reflection_class_type("Fable.React.Props.IHTMLProp"))]], [["Item", Reflection_bool_type]], [], [], []]);
}

export class Date_Item_Option extends Types_Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["CustomClass", "Props", "is-today", "is-active"];
    }
}

export function Date_Item_Option$reflection() {
    return Reflection_union_type("Fulma.Extensions.Wikiki.Calendar.Date.Item.Option", [], Date_Item_Option, () => [[["Item", Reflection_string_type]], [["Item", Reflection_list_type(Reflection_class_type("Fable.React.Props.IHTMLProp"))]], [["Item", Reflection_bool_type]], [["Item", Reflection_bool_type]]]);
}

export function Date_date(options, children) {
    const parseOptions = (result, option) => {
        switch (option.tag) {
            case 5: {
                return Common_Common_GenericOptions__AddCaseName_1505(Common_Common_GenericOptions__AddClass_Z721C83C5(result, "calendar-range"), option);
            }
            case 4: {
                return Common_Common_GenericOptions__AddCaseName_1505(result, option);
            }
            case 2: {
                const state = option.fields[0];
                if (state) {
                    return Common_Common_GenericOptions__AddCaseName_1505(result, option);
                }
                else {
                    return result;
                }
            }
            case 1: {
                const props = option.fields[0];
                return Common_Common_GenericOptions__AddProps_416C4D0B(result, props);
            }
            case 0: {
                const customClass = option.fields[0];
                return Common_Common_GenericOptions__AddClass_Z721C83C5(result, customClass);
            }
            default: {
                return Common_Common_GenericOptions__AddCaseName_1505(Common_Common_GenericOptions__AddClass_Z721C83C5(result, "calendar-range"), option);
            }
        }
    };
    return Common_Common_GenericOptions__ToReactElement_Z6D3CD4B7(Common_Common_GenericOptions_Parse_9AE2F7C(options, parseOptions, "calendar-date"), (props_1, children_1) => react.createElement("div", MapUtil_keyValueList(props_1, 1, true), ...children_1), children);
}

export function Date_item(options, children) {
    const parseOptions = (result, option) => {
        switch (option.tag) {
            case 2: {
                const state_1 = option.fields[0];
                if (state_1) {
                    return Common_Common_GenericOptions__AddCaseName_1505(result, option);
                }
                else {
                    return result;
                }
            }
            case 1: {
                const props = option.fields[0];
                return Common_Common_GenericOptions__AddProps_416C4D0B(result, props);
            }
            case 0: {
                const customClass = option.fields[0];
                return Common_Common_GenericOptions__AddClass_Z721C83C5(result, customClass);
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
    return Common_Common_GenericOptions__ToReactElement_Z6D3CD4B7(Common_Common_GenericOptions_Parse_9AE2F7C(options, parseOptions, "date-item"), (props_1, children_1) => react.createElement("button", MapUtil_keyValueList(props_1, 1, true), ...children_1), children);
}

export class Event_Option extends Types_Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["CustomClass", "Props", "Color"];
    }
}

export function Event_Option$reflection() {
    return Reflection_union_type("Fulma.Extensions.Wikiki.Calendar.Event.Option", [], Event_Option, () => [[["Item", Reflection_string_type]], [["Item", Reflection_list_type(Reflection_class_type("Fable.React.Props.IHTMLProp"))]], [["Item", Common_Color_IColor$reflection()]]]);
}

export function event(options, children) {
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
            default: {
                const color = option.fields[0];
                const arg00 = Common_Color_ofColor(color);
                return Common_Common_GenericOptions__AddClass_Z721C83C5(result, arg00);
            }
        }
    };
    return Common_Common_GenericOptions__ToReactElement_Z6D3CD4B7(Common_Common_GenericOptions_Parse_9AE2F7C(options, parseOptions, "calendar-event"), (props_1, children_1) => react.createElement("div", MapUtil_keyValueList(props_1, 1, true), ...children_1), children);
}

export function Nav_nav(options, children) {
    return Common_Common_GenericOptions__ToReactElement_Z6D3CD4B7(Common_Common_GenericOptions_Parse_9AE2F7C(options, Common_Common_parseOptions, "calendar-nav"), (props, children_1) => react.createElement("div", MapUtil_keyValueList(props, 1, true), ...children_1), children);
}

export function Nav_left(options, children) {
    return Common_Common_GenericOptions__ToReactElement_Z6D3CD4B7(Common_Common_GenericOptions_Parse_9AE2F7C(options, Common_Common_parseOptions, "calendar-nav-left"), (props, children_1) => react.createElement("div", MapUtil_keyValueList(props, 1, true), ...children_1), children);
}

export function Nav_right(options, children) {
    return Common_Common_GenericOptions__ToReactElement_Z6D3CD4B7(Common_Common_GenericOptions_Parse_9AE2F7C(options, Common_Common_parseOptions, "calendar-nav-right"), (props, children_1) => react.createElement("div", MapUtil_keyValueList(props, 1, true), ...children_1), children);
}

