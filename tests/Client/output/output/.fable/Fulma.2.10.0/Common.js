import { record_type as Reflection_record_type, list_type as Reflection_list_type, class_type as Reflection_class_type, bool_type as Reflection_bool_type, string_type as Reflection_string_type, union_type as Reflection_union_type, getCaseTag as Reflection_getCaseTag_1, getCaseName as Reflection_getCaseName_1 } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Reflection.js";
import { Record as Types_Record, toString as Types_toString, Union as Types_Union } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Types.js";
import { structuralHash as Util_structuralHash, int32ToString as Util_int32ToString } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Util.js";
import { defaultArg as Option_defaultArg, some as Option_some } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Option.js";
import { contains as List_contains, filter as List_filter, append as List_append, empty as List_empty, fold as List_fold, cons as List_cons } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/List.js";
import { join as String_join } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/String.js";
import { HTMLAttr as Fable$002EReact$002EProps_HTMLAttr } from "../Fable.React.7.0.1/Fable.React.Props.js";
import * as react from "react";
import { keyValueList as MapUtil_keyValueList } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/MapUtil.js";

export function Reflection_getCaseName(case$) {
    return Reflection_getCaseName_1(case$);
}

export function Reflection_getCaseTag(case$) {
    return Reflection_getCaseTag_1(case$);
}

export class Screen extends Types_Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["All", "desktop", "tablet", "mobile", "widescreen", "touch", "fullhd"];
    }
}

export function Screen$reflection() {
    return Reflection_union_type("Fulma.Screen", [], Screen, () => [[], [], [], [], [], [], []]);
}

export function Screen_ToString_2D2414B4(screen) {
    switch (screen.tag) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6: {
            return "-" + Reflection_getCaseName(screen);
        }
        default: {
            return "";
        }
    }
}

export class Color_IColor extends Types_Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["is-black", "is-dark", "is-light", "is-white", "is-primary", "is-info", "is-success", "is-warning", "is-danger", "is-link", "is-black-bis", "is-black-ter", "is-grey-darker", "is-grey-dark", "is-grey", "is-grey-light", "is-grey-lighter", "is-white-ter", "is-white-bis", "IsCustomColor", "NoColor"];
    }
}

export function Color_IColor$reflection() {
    return Reflection_union_type("Fulma.Color.IColor", [], Color_IColor, () => [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [["Item", Reflection_string_type]], []]);
}

export function Color_ofColor(level) {
    switch (level.tag) {
        case 19: {
            const color = level.fields[0];
            return "is-" + color;
        }
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
        case 12:
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
        case 18: {
            return Reflection_getCaseName(level);
        }
        default: {
            return "";
        }
    }
}

export class Size_ISize extends Types_Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["is-small", "is-medium", "is-large"];
    }
}

export function Size_ISize$reflection() {
    return Reflection_union_type("Fulma.Size.ISize", [], Size_ISize, () => [[], [], []]);
}

export class TextSize_Option extends Types_Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["Is1", "Is2", "Is3", "Is4", "Is5", "Is6", "Is7"];
    }
}

export function TextSize_Option$reflection() {
    return Reflection_union_type("Fulma.TextSize.Option", [], TextSize_Option, () => [[], [], [], [], [], [], []]);
}

export function TextSize_Option_ToString_Z2E0B9453(x) {
    const value = (Reflection_getCaseTag(x) + 1) | 0;
    return Util_int32ToString(value);
}

export class TextAlignment_Option extends Types_Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["has-text-centered", "has-text-justified", "has-text-left", "has-text-right"];
    }
}

export function TextAlignment_Option$reflection() {
    return Reflection_union_type("Fulma.TextAlignment.Option", [], TextAlignment_Option, () => [[], [], [], []]);
}

export class TextWeight_Option extends Types_Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["has-text-weight-light", "has-text-weight-normal", "has-text-weight-semibold", "has-text-weight-bold", "has-text-weight-medium"];
    }
}

export function TextWeight_Option$reflection() {
    return Reflection_union_type("Fulma.TextWeight.Option", [], TextWeight_Option, () => [[], [], [], [], []]);
}

export class TextTransform_Option extends Types_Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["is-capitalized", "is-lowercase", "is-uppercase", "is-italic"];
    }
}

export function TextTransform_Option$reflection() {
    return Reflection_union_type("Fulma.TextTransform.Option", [], TextTransform_Option, () => [[], [], [], []]);
}

export class Display_Option extends Types_Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["block", "flex", "inline", "inline-block", "inline-flex"];
    }
}

export function Display_Option$reflection() {
    return Reflection_union_type("Fulma.Display.Option", [], Display_Option, () => [[], [], [], [], []]);
}

export function Display_toDisplayClass(screen, display) {
    const display_1 = Reflection_getCaseName(display);
    const screen_1 = Screen_ToString_2D2414B4(screen);
    return ("is-" + display_1) + screen_1;
}

export function Display_toDisplayOnlyClass(screen, display) {
    switch (screen.tag) {
        case 2:
        case 1:
        case 4: {
            const display_1 = Reflection_getCaseName(display);
            const screen_1 = Screen_ToString_2D2414B4(screen);
            return (("is-" + display_1) + screen_1) + "-only";
        }
        default: {
            const x = screen;
            console.warn(Option_some("Screen `%s` does not support display only." + Types_toString(x)));
            return "";
        }
    }
}

export class Spacing_TypeAndDirection extends Types_Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["mt", "mr", "mb", "ml", "my", "mx", "pt", "pr", "pb", "pl", "py", "px"];
    }
}

export function Spacing_TypeAndDirection$reflection() {
    return Reflection_union_type("Fulma.Spacing.TypeAndDirection", [], Spacing_TypeAndDirection, () => [[], [], [], [], [], [], [], [], [], [], [], []]);
}

export class Spacing_Amount extends Types_Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["0", "1", "2", "3", "4", "5", "6"];
    }
}

export function Spacing_Amount$reflection() {
    return Reflection_union_type("Fulma.Spacing.Amount", [], Spacing_Amount, () => [[], [], [], [], [], [], []]);
}

export function Spacing_toSpacingClass(typ, amount) {
    const typ_1 = Reflection_getCaseName(typ);
    const amount_1 = Reflection_getCaseName(amount);
    return (typ_1 + "-") + amount_1;
}

export function Modifier_ofBackground(level) {
    switch (level.tag) {
        case 19: {
            const color = level.fields[0];
            return "has-background-" + color;
        }
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
        case 12:
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
        case 18: {
            return "has-background-" + Reflection_getCaseName(level).slice(3, Reflection_getCaseName(level).length);
        }
        default: {
            return "";
        }
    }
}

export function Modifier_ofText(level) {
    switch (level.tag) {
        case 19: {
            const color = level.fields[0];
            return "has-text-" + color;
        }
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
        case 12:
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
        case 18: {
            return "has-text-" + Reflection_getCaseName(level).slice(3, Reflection_getCaseName(level).length);
        }
        default: {
            return "";
        }
    }
}

export function Modifier_ofInvisible(screen) {
    return "is-invisible" + Screen_ToString_2D2414B4(screen);
}

export function Modifier_ofHidden(screen) {
    return "is-hidden" + Screen_ToString_2D2414B4(screen);
}

export function Modifier_ofInvisibleOnly(screen) {
    switch (screen.tag) {
        case 2:
        case 1:
        case 4: {
            return ("is-invisible" + Screen_ToString_2D2414B4(screen)) + "-only";
        }
        default: {
            const x = screen;
            console.warn(Option_some("Screen `%s` does not support `is-invisible-xxx-only`." + Types_toString(x)));
            return "";
        }
    }
}

export function Modifier_ofHiddenOnly(screen) {
    switch (screen.tag) {
        case 2:
        case 1:
        case 4: {
            return ("is-hidden" + Screen_ToString_2D2414B4(screen)) + "-only";
        }
        default: {
            const x = screen;
            console.warn(Option_some("Screen `%s` does not support `is-hidden-xxx-only`." + Types_toString(x)));
            return "";
        }
    }
}

export class Modifier_IModifier extends Types_Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["BackgroundColor", "TextColor", "TextWeight", "TextSize", "TextSizeOnly", "TextAlignment", "TextAlignmentOnly", "TextTransform", "Display", "DisplayOnly", "is-clearfix", "is-pulled-left", "is-pulled-right", "is-marginless", "is-paddingless", "is-overlay", "is-clipped", "is-radiusless", "is-shadowless", "is-unselectable", "is-relative", "IsInvisible", "IsHidden", "IsInvisibleOnly", "IsHiddenOnly", "IsSrOnly", "IsScreenReaderOnly", "Spacing"];
    }
}

export function Modifier_IModifier$reflection() {
    return Reflection_union_type("Fulma.Modifier.IModifier", [], Modifier_IModifier, () => [[["Item", Color_IColor$reflection()]], [["Item", Color_IColor$reflection()]], [["Item", TextWeight_Option$reflection()]], [["Item1", Screen$reflection()], ["Item2", TextSize_Option$reflection()]], [["Item1", Screen$reflection()], ["Item2", TextSize_Option$reflection()]], [["Item1", Screen$reflection()], ["Item2", TextAlignment_Option$reflection()]], [["Item1", Screen$reflection()], ["Item2", TextAlignment_Option$reflection()]], [["Item", TextTransform_Option$reflection()]], [["Item1", Screen$reflection()], ["Item2", Display_Option$reflection()]], [["Item1", Screen$reflection()], ["Item2", Display_Option$reflection()]], [], [], [], [], [], [], [], [], [], [], [], [["Item1", Screen$reflection()], ["Item2", Reflection_bool_type]], [["Item1", Screen$reflection()], ["Item2", Reflection_bool_type]], [["Item1", Screen$reflection()], ["Item2", Reflection_bool_type]], [["Item1", Screen$reflection()], ["Item2", Reflection_bool_type]], [], [], [["Item1", Spacing_TypeAndDirection$reflection()], ["Item2", Spacing_Amount$reflection()]]]);
}

export function Modifier_parseModifiers(options) {
    const parseOptions = (result, option) => {
        let screen_3, x, screen_7, x_1;
        switch (option.tag) {
            case 1: {
                const color_1 = option.fields[0];
                return List_cons(Modifier_ofText(color_1), result);
            }
            case 2: {
                const textWeight = option.fields[0];
                return List_cons(Reflection_getCaseName(textWeight), result);
            }
            case 3: {
                const size = option.fields[1];
                const screen = option.fields[0];
                return List_cons(("is-size-" + TextSize_Option_ToString_Z2E0B9453(size)) + Screen_ToString_2D2414B4(screen), result);
            }
            case 4: {
                const size_2 = option.fields[1];
                const screen_2 = option.fields[0];
                return List_cons((screen_3 = screen_2, (screen_3.tag === 2) ? ((("is-size-" + TextSize_Option_ToString_Z2E0B9453(size_2)) + Screen_ToString_2D2414B4(screen_3)) + "-only") : ((screen_3.tag === 1) ? ((("is-size-" + TextSize_Option_ToString_Z2E0B9453(size_2)) + Screen_ToString_2D2414B4(screen_3)) + "-only") : ((screen_3.tag === 4) ? ((("is-size-" + TextSize_Option_ToString_Z2E0B9453(size_2)) + Screen_ToString_2D2414B4(screen_3)) + "-only") : (x = screen_3, (console.warn(Option_some("Screen `%s` does not support `is-size-xxx-only`." + Types_toString(x))), ""))))), result);
            }
            case 5: {
                const size_4 = option.fields[1];
                const screen_4 = option.fields[0];
                return List_cons(Reflection_getCaseName(size_4) + Screen_ToString_2D2414B4(screen_4), result);
            }
            case 6: {
                const size_5 = option.fields[1];
                const screen_6 = option.fields[0];
                return List_cons((screen_7 = screen_6, (screen_7.tag === 2) ? ((Reflection_getCaseName(size_5) + Screen_ToString_2D2414B4(screen_7)) + "-only") : ((screen_7.tag === 1) ? ((Reflection_getCaseName(size_5) + Screen_ToString_2D2414B4(screen_7)) + "-only") : ((screen_7.tag === 4) ? ((Reflection_getCaseName(size_5) + Screen_ToString_2D2414B4(screen_7)) + "-only") : (x_1 = screen_7, (console.warn(Option_some("Screen `%s` does not support `is-size-xxx-only`." + Types_toString(x_1))), ""))))), result);
            }
            case 7: {
                const transform = option.fields[0];
                return List_cons(Reflection_getCaseName(transform), result);
            }
            case 8: {
                const screen_8 = option.fields[0];
                const display = option.fields[1];
                return List_cons(Display_toDisplayClass(screen_8, display), result);
            }
            case 9: {
                const screen_9 = option.fields[0];
                const display_1 = option.fields[1];
                return List_cons(Display_toDisplayOnlyClass(screen_9, display_1), result);
            }
            case 21: {
                const screen_10 = option.fields[0];
                const b = option.fields[1];
                if (b) {
                    return List_cons(Modifier_ofInvisible(screen_10), result);
                }
                else {
                    return result;
                }
            }
            case 23: {
                const screen_11 = option.fields[0];
                const b_1 = option.fields[1];
                if (b_1) {
                    return List_cons(Modifier_ofInvisibleOnly(screen_11), result);
                }
                else {
                    return result;
                }
            }
            case 22: {
                const screen_12 = option.fields[0];
                const b_2 = option.fields[1];
                if (b_2) {
                    return List_cons(Modifier_ofHidden(screen_12), result);
                }
                else {
                    return result;
                }
            }
            case 24: {
                const screen_13 = option.fields[0];
                const b_3 = option.fields[1];
                if (b_3) {
                    return List_cons(Modifier_ofHiddenOnly(screen_13), result);
                }
                else {
                    return result;
                }
            }
            case 25:
            case 26: {
                return List_cons("is-sr-only", result);
            }
            case 10:
            case 11:
            case 12:
            case 13:
            case 14:
            case 15:
            case 16:
            case 17:
            case 18:
            case 19:
            case 20: {
                return List_cons(Reflection_getCaseName(option), result);
            }
            case 27: {
                const typ = option.fields[0];
                const amount = option.fields[1];
                return List_cons(Spacing_toSpacingClass(typ, amount), result);
            }
            default: {
                const color = option.fields[0];
                return List_cons(Modifier_ofBackground(color), result);
            }
        }
    };
    const list = options;
    return List_fold(parseOptions, List_empty(), list);
}

export class Common_GenericOption extends Types_Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["CustomClass", "Props", "Modifiers"];
    }
}

export function Common_GenericOption$reflection() {
    return Reflection_union_type("Fulma.Common.GenericOption", [], Common_GenericOption, () => [[["Item", Reflection_string_type]], [["Item", Reflection_list_type(Reflection_class_type("Fable.React.Props.IHTMLProp"))]], [["Item", Reflection_list_type(Modifier_IModifier$reflection())]]]);
}

export class Common_GenericOptions extends Types_Record {
    constructor(Props, Classes, RemovedClasses) {
        super();
        this.Props = Props;
        this.Classes = Classes;
        this.RemovedClasses = RemovedClasses;
    }
}

export function Common_GenericOptions$reflection() {
    return Reflection_record_type("Fulma.Common.GenericOptions", [], Common_GenericOptions, () => [["Props", Reflection_list_type(Reflection_class_type("Fable.React.Props.IHTMLProp"))], ["Classes", Reflection_list_type(Reflection_string_type)], ["RemovedClasses", Reflection_list_type(Reflection_string_type)]]);
}

export function Common_GenericOptions_get_Empty() {
    return new Common_GenericOptions(List_empty(), List_empty(), List_empty());
}

export function Common_GenericOptions_Parse_9AE2F7C(options, parser, baseClass, baseProps) {
    let result;
    const list = options;
    const state = Common_GenericOptions_get_Empty();
    result = List_fold(parser, state, list);
    let result_1;
    if (baseClass == null) {
        result_1 = result;
    }
    else {
        const baseClass_1 = baseClass;
        result_1 = Common_GenericOptions__AddClass_Z721C83C5(result, baseClass_1);
    }
    if (baseProps == null) {
        return result_1;
    }
    else {
        const baseProps_1 = baseProps;
        return Common_GenericOptions__AddProps_416C4D0B(result_1, baseProps_1);
    }
}

export function Common_GenericOptions__AddProp_7BFEDA81(this$, prop) {
    return new Common_GenericOptions(List_cons(prop, this$.Props), this$.Classes, this$.RemovedClasses);
}

export function Common_GenericOptions__AddProps_416C4D0B(this$, props) {
    return new Common_GenericOptions(List_append(props, this$.Props), this$.Classes, this$.RemovedClasses);
}

export function Common_GenericOptions__AddClass_Z721C83C5(this$, cl) {
    return new Common_GenericOptions(this$.Props, List_cons(cl, this$.Classes), this$.RemovedClasses);
}

export function Common_GenericOptions__RemoveClass_Z721C83C5(this$, cl) {
    return new Common_GenericOptions(this$.Props, this$.Classes, List_cons(cl, this$.RemovedClasses));
}

export function Common_GenericOptions__AddCaseName_1505(this$, case$) {
    const arg00 = Reflection_getCaseName(case$);
    return Common_GenericOptions__AddClass_Z721C83C5(this$, arg00);
}

export function Common_GenericOptions__AddModifiers_5BB435D5(this$, modifiers) {
    let options;
    const Classes = List_append((options = modifiers, (Modifier_parseModifiers(options))), this$.Classes);
    return new Common_GenericOptions(this$.Props, Classes, this$.RemovedClasses);
}

export function Common_GenericOptions__ToReactElement_Z6D3CD4B7(this$, el, children) {
    let arg0, strings, list;
    const children_1 = Option_defaultArg(children, List_empty());
    const classes = (arg0 = (strings = (list = this$.Classes, (List_filter((cls) => (!List_contains(cls, this$.RemovedClasses, {
        Equals: (x, y) => (x === y),
        GetHashCode: Util_structuralHash,
    })), list))), (String_join(" ", strings))), (new Fable$002EReact$002EProps_HTMLAttr(64, arg0)));
    return el(List_cons(classes, this$.Props), children_1);
}

export function Common_GenericOptions__ToReactElement_Z46A53D36(this$, el) {
    let arg0, strings, list;
    const classes = (arg0 = (strings = (list = this$.Classes, (List_filter((cls) => (!List_contains(cls, this$.RemovedClasses, {
        Equals: (x, y) => (x === y),
        GetHashCode: Util_structuralHash,
    })), list))), (String_join(" ", strings))), (new Fable$002EReact$002EProps_HTMLAttr(64, arg0)));
    return el(List_cons(classes, this$.Props));
}

export function Common_parseOptions(result, option) {
    switch (option.tag) {
        case 0: {
            const customClass = option.fields[0];
            return Common_GenericOptions__AddClass_Z721C83C5(result, customClass);
        }
        case 2: {
            const modifiers = option.fields[0];
            return Common_GenericOptions__AddModifiers_5BB435D5(result, modifiers);
        }
        default: {
            const props = option.fields[0];
            return Common_GenericOptions__AddProps_416C4D0B(result, props);
        }
    }
}

export function Common_Helpers_classes(std, options, booleans) {
    let arg0, state_1, list_1;
    let std_1;
    const state = std;
    const list = options;
    std_1 = List_fold((complete, option) => {
        if (option == null) {
            return complete;
        }
        else {
            const name = option;
            return (complete + " ") + name;
        }
    }, state, list);
    return arg0 = (state_1 = std_1, list_1 = booleans, (List_fold((complete_1, tupledArg) => {
        const name_1 = tupledArg[0];
        const flag = tupledArg[1];
        if (flag) {
            return (complete_1 + " ") + name_1;
        }
        else {
            return complete_1;
        }
    }, state_1, list_1))), (new Fable$002EReact$002EProps_HTMLAttr(64, arg0));
}

export function Text_p(options, children) {
    return Common_GenericOptions__ToReactElement_Z6D3CD4B7(Common_GenericOptions_Parse_9AE2F7C(options, Common_parseOptions), (props, children_1) => react.createElement("p", MapUtil_keyValueList(props, 1, true), ...children_1), children);
}

export function Text_div(options, children) {
    return Common_GenericOptions__ToReactElement_Z6D3CD4B7(Common_GenericOptions_Parse_9AE2F7C(options, Common_parseOptions), (props, children_1) => react.createElement("div", MapUtil_keyValueList(props, 1, true), ...children_1), children);
}

export function Text_span(options, children) {
    return Common_GenericOptions__ToReactElement_Z6D3CD4B7(Common_GenericOptions_Parse_9AE2F7C(options, Common_parseOptions), (props, children_1) => react.createElement("span", MapUtil_keyValueList(props, 1, true), ...children_1), children);
}

