import { cons as List_cons, ofArray as List_ofArray, empty as List_empty, fold as List_fold } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/List.js";
import { HTMLAttr as Fable$002EReact$002EProps_HTMLAttr } from "../Fable.React.7.0.1/Fable.React.Props.js";
import { Record as Types_Record, Union as Types_Union } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Types.js";
import { record_type as Reflection_record_type, bool_type as Reflection_bool_type, option_type as Reflection_option_type, list_type as Reflection_list_type, class_type as Reflection_class_type, string_type as Reflection_string_type, union_type as Reflection_union_type } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Reflection.js";
import * as react from "react";
import { keyValueList as MapUtil_keyValueList } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/MapUtil.js";

export function Helpers_classes(std, options, booleans) {
    let arg0, state_1, list_1;
    let std_1;
    const state = std;
    const list = options;
    std_1 = List_fold((complete, opt) => {
        if (opt == null) {
            return complete;
        }
        else {
            const name = opt;
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

export class Fa_ISize extends Types_Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["FaExtraSmall", "FaSmall", "FaLarge", "Fa2x", "Fa3x", "Fa4x", "Fa5x", "Fa6x", "Fa7x", "Fa8x", "Fa9x", "Fa10"];
    }
}

export function Fa_ISize$reflection() {
    return Reflection_union_type("Fable.FontAwesome.Fa.ISize", [], Fa_ISize, () => [[], [], [], [], [], [], [], [], [], [], [], []]);
}

export class Fa_IconOption extends Types_Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["Size", "Border", "PullLeft", "PullRight", "Inverse", "Rotate90", "Rotate180", "Rotate270", "FlipHorizontal", "FlipVertical", "IsLi", "Icon", "Spin", "Pulse", "Props", "CustomClass", "FixedWidth", "Stack1x", "Stack2x"];
    }
}

export function Fa_IconOption$reflection() {
    return Reflection_union_type("Fable.FontAwesome.Fa.IconOption", [], Fa_IconOption, () => [[["Item", Fa_ISize$reflection()]], [], [], [], [], [], [], [], [], [], [], [["Item", Reflection_string_type]], [], [], [["Item", Reflection_list_type(Reflection_class_type("Fable.React.Props.IHTMLProp"))]], [["Item", Reflection_string_type]], [], [], []]);
}

export function Fa_ofSize(size) {
    switch (size.tag) {
        case 1: {
            return "fa-sm";
        }
        case 2: {
            return "fa-lg";
        }
        case 3: {
            return "fa-2x";
        }
        case 4: {
            return "fa-3x";
        }
        case 5: {
            return "fa-4x";
        }
        case 6: {
            return "fa-5x";
        }
        case 7: {
            return "fa-6x";
        }
        case 8: {
            return "fa-7x";
        }
        case 9: {
            return "fa-8x";
        }
        case 10: {
            return "fa-9x";
        }
        case 11: {
            return "fa-10x";
        }
        default: {
            return "fa-xs";
        }
    }
}

export class Fa_IconOptions extends Types_Record {
    constructor(Icon, Size, Border, Pull, HaveSpin, HavePulse, Rotation, Flip, IsInverse, Props, FixedWidth, IsLi, StackSize, CustomClass) {
        super();
        this.Icon = Icon;
        this.Size = Size;
        this.Border = Border;
        this.Pull = Pull;
        this.HaveSpin = HaveSpin;
        this.HavePulse = HavePulse;
        this.Rotation = Rotation;
        this.Flip = Flip;
        this.IsInverse = IsInverse;
        this.Props = Props;
        this.FixedWidth = FixedWidth;
        this.IsLi = IsLi;
        this.StackSize = StackSize;
        this.CustomClass = CustomClass;
    }
}

export function Fa_IconOptions$reflection() {
    return Reflection_record_type("Fable.FontAwesome.Fa.IconOptions", [], Fa_IconOptions, () => [["Icon", Reflection_option_type(Reflection_string_type)], ["Size", Reflection_option_type(Reflection_string_type)], ["Border", Reflection_option_type(Reflection_string_type)], ["Pull", Reflection_option_type(Reflection_string_type)], ["HaveSpin", Reflection_bool_type], ["HavePulse", Reflection_bool_type], ["Rotation", Reflection_option_type(Reflection_string_type)], ["Flip", Reflection_option_type(Reflection_string_type)], ["IsInverse", Reflection_bool_type], ["Props", Reflection_list_type(Reflection_class_type("Fable.React.Props.IHTMLProp"))], ["FixedWidth", Reflection_bool_type], ["IsLi", Reflection_bool_type], ["StackSize", Reflection_option_type(Reflection_string_type)], ["CustomClass", Reflection_option_type(Reflection_string_type)]]);
}

export function Fa_IconOptions_get_Empty() {
    return new Fa_IconOptions(void 0, void 0, void 0, void 0, false, false, void 0, void 0, false, List_empty(), false, false, void 0, void 0);
}

export function Fa_toIconOptions(faOptions) {
    const parseOptions = (result, option) => {
        let arg0_1;
        switch (option.tag) {
            case 1: {
                return new Fa_IconOptions(result.Icon, result.Size, "fa-border", result.Pull, result.HaveSpin, result.HavePulse, result.Rotation, result.Flip, result.IsInverse, result.Props, result.FixedWidth, result.IsLi, result.StackSize, result.CustomClass);
            }
            case 2: {
                return new Fa_IconOptions(result.Icon, result.Size, result.Border, "fa-pull-left", result.HaveSpin, result.HavePulse, result.Rotation, result.Flip, result.IsInverse, result.Props, result.FixedWidth, result.IsLi, result.StackSize, result.CustomClass);
            }
            case 3: {
                return new Fa_IconOptions(result.Icon, result.Size, result.Border, "fa-pull-right", result.HaveSpin, result.HavePulse, result.Rotation, result.Flip, result.IsInverse, result.Props, result.FixedWidth, result.IsLi, result.StackSize, result.CustomClass);
            }
            case 4: {
                return new Fa_IconOptions(result.Icon, result.Size, result.Border, result.Pull, result.HaveSpin, result.HavePulse, result.Rotation, result.Flip, true, result.Props, result.FixedWidth, result.IsLi, result.StackSize, result.CustomClass);
            }
            case 11: {
                const faIcon = option.fields[0];
                return new Fa_IconOptions((arg0_1 = faIcon, (arg0_1)), result.Size, result.Border, result.Pull, result.HaveSpin, result.HavePulse, result.Rotation, result.Flip, result.IsInverse, result.Props, result.FixedWidth, result.IsLi, result.StackSize, result.CustomClass);
            }
            case 5: {
                let Rotation;
                const arg0_2 = "fa-rotate-90";
                Rotation = arg0_2;
                return new Fa_IconOptions(result.Icon, result.Size, result.Border, result.Pull, result.HaveSpin, result.HavePulse, Rotation, result.Flip, result.IsInverse, result.Props, result.FixedWidth, result.IsLi, result.StackSize, result.CustomClass);
            }
            case 6: {
                let Rotation_1;
                const arg0_3 = "fa-rotate-180";
                Rotation_1 = arg0_3;
                return new Fa_IconOptions(result.Icon, result.Size, result.Border, result.Pull, result.HaveSpin, result.HavePulse, Rotation_1, result.Flip, result.IsInverse, result.Props, result.FixedWidth, result.IsLi, result.StackSize, result.CustomClass);
            }
            case 7: {
                let Rotation_2;
                const arg0_4 = "fa-rotate-270";
                Rotation_2 = arg0_4;
                return new Fa_IconOptions(result.Icon, result.Size, result.Border, result.Pull, result.HaveSpin, result.HavePulse, Rotation_2, result.Flip, result.IsInverse, result.Props, result.FixedWidth, result.IsLi, result.StackSize, result.CustomClass);
            }
            case 8: {
                let Rotation_3;
                const arg0_5 = "fa-flip-horizontal";
                Rotation_3 = arg0_5;
                return new Fa_IconOptions(result.Icon, result.Size, result.Border, result.Pull, result.HaveSpin, result.HavePulse, Rotation_3, result.Flip, result.IsInverse, result.Props, result.FixedWidth, result.IsLi, result.StackSize, result.CustomClass);
            }
            case 9: {
                let Rotation_4;
                const arg0_6 = "fa-flip-vertical";
                Rotation_4 = arg0_6;
                return new Fa_IconOptions(result.Icon, result.Size, result.Border, result.Pull, result.HaveSpin, result.HavePulse, Rotation_4, result.Flip, result.IsInverse, result.Props, result.FixedWidth, result.IsLi, result.StackSize, result.CustomClass);
            }
            case 12: {
                return new Fa_IconOptions(result.Icon, result.Size, result.Border, result.Pull, true, result.HavePulse, result.Rotation, result.Flip, result.IsInverse, result.Props, result.FixedWidth, result.IsLi, result.StackSize, result.CustomClass);
            }
            case 13: {
                return new Fa_IconOptions(result.Icon, result.Size, result.Border, result.Pull, result.HaveSpin, true, result.Rotation, result.Flip, result.IsInverse, result.Props, result.FixedWidth, result.IsLi, result.StackSize, result.CustomClass);
            }
            case 14: {
                const props = option.fields[0];
                return new Fa_IconOptions(result.Icon, result.Size, result.Border, result.Pull, result.HaveSpin, result.HavePulse, result.Rotation, result.Flip, result.IsInverse, props, result.FixedWidth, result.IsLi, result.StackSize, result.CustomClass);
            }
            case 16: {
                return new Fa_IconOptions(result.Icon, result.Size, result.Border, result.Pull, result.HaveSpin, result.HavePulse, result.Rotation, result.Flip, result.IsInverse, result.Props, true, result.IsLi, result.StackSize, result.CustomClass);
            }
            case 10: {
                return new Fa_IconOptions(result.Icon, result.Size, result.Border, result.Pull, result.HaveSpin, result.HavePulse, result.Rotation, result.Flip, result.IsInverse, result.Props, result.FixedWidth, true, result.StackSize, result.CustomClass);
            }
            case 15: {
                const customClass = option.fields[0];
                return new Fa_IconOptions(result.Icon, result.Size, result.Border, result.Pull, result.HaveSpin, result.HavePulse, result.Rotation, result.Flip, result.IsInverse, result.Props, result.FixedWidth, result.IsLi, result.StackSize, customClass);
            }
            case 17: {
                return new Fa_IconOptions(result.Icon, result.Size, result.Border, result.Pull, result.HaveSpin, result.HavePulse, result.Rotation, result.Flip, result.IsInverse, result.Props, result.FixedWidth, result.IsLi, "fa-stack-1x", result.CustomClass);
            }
            case 18: {
                return new Fa_IconOptions(result.Icon, result.Size, result.Border, result.Pull, result.HaveSpin, result.HavePulse, result.Rotation, result.Flip, result.IsInverse, result.Props, result.FixedWidth, result.IsLi, "fa-stack-2x", result.CustomClass);
            }
            default: {
                const s = option.fields[0];
                let Size;
                const arg0 = Fa_ofSize(s);
                Size = arg0;
                return new Fa_IconOptions(result.Icon, Size, result.Border, result.Pull, result.HaveSpin, result.HavePulse, result.Rotation, result.Flip, result.IsInverse, result.Props, result.FixedWidth, result.IsLi, result.StackSize, result.CustomClass);
            }
        }
    };
    const list = faOptions;
    const state = Fa_IconOptions_get_Empty();
    return List_fold(parseOptions, state, list);
}

export function Fa_displayIcon(baseElement, baseClass, opts, children) {
    const classes = Helpers_classes(baseClass, List_ofArray([opts.Icon, opts.Size, opts.Border, opts.Pull, opts.Rotation, opts.Flip, opts.CustomClass, opts.StackSize]), List_ofArray([["fa-fw", opts.FixedWidth], ["fa-li", opts.IsLi], ["fa-pulse", opts.HavePulse], ["fa-spin", opts.HaveSpin], ["fa-inverse", opts.IsInverse]]));
    return baseElement(List_cons(classes, opts.Props), children);
}

export function Fa_ul(props, children) {
    return react.createElement("ul", {
        className: "fa-ul",
    }, ...children);
}

export function Fa_ol(props, children) {
    return react.createElement("ol", {
        className: "fa-ul",
    }, ...children);
}

export function Fa_i(faOptions, children) {
    const opts = Fa_toIconOptions(faOptions);
    return Fa_displayIcon((props, children_1) => react.createElement("i", MapUtil_keyValueList(props, 1, true), ...children_1), "", opts, children);
}

export function Fa_span(faOptions, children) {
    const opts = Fa_toIconOptions(faOptions);
    return Fa_displayIcon((props, children_1) => react.createElement("span", MapUtil_keyValueList(props, 1, true), ...children_1), "", opts, children);
}

export class Fa_Stack_Option extends Types_Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["Size", "CustomClass", "Props"];
    }
}

export function Fa_Stack_Option$reflection() {
    return Reflection_union_type("Fable.FontAwesome.Fa.Stack.Option", [], Fa_Stack_Option, () => [[["Item", Fa_ISize$reflection()]], [["Item", Reflection_string_type]], [["Item", Reflection_list_type(Reflection_class_type("Fable.React.Props.IHTMLProp"))]]]);
}

export class Fa_Stack_Options extends Types_Record {
    constructor(Size, Props, CustomClass) {
        super();
        this.Size = Size;
        this.Props = Props;
        this.CustomClass = CustomClass;
    }
}

export function Fa_Stack_Options$reflection() {
    return Reflection_record_type("Fable.FontAwesome.Fa.Stack.Options", [], Fa_Stack_Options, () => [["Size", Reflection_option_type(Reflection_string_type)], ["Props", Reflection_list_type(Reflection_class_type("Fable.React.Props.IHTMLProp"))], ["CustomClass", Reflection_option_type(Reflection_string_type)]]);
}

export function Fa_Stack_Options_get_Empty() {
    return new Fa_Stack_Options(void 0, List_empty(), void 0);
}

export function Fa_stack(options, children) {
    const parseOption = (result, opt) => {
        let arg0;
        switch (opt.tag) {
            case 1: {
                const customClass = opt.fields[0];
                return new Fa_Stack_Options(result.Size, result.Props, customClass);
            }
            case 2: {
                const props = opt.fields[0];
                return new Fa_Stack_Options(result.Size, props, result.CustomClass);
            }
            default: {
                const size = opt.fields[0];
                return new Fa_Stack_Options((arg0 = Fa_ofSize(size), (arg0)), result.Props, result.CustomClass);
            }
        }
    };
    let opts;
    const list = options;
    const state = Fa_Stack_Options_get_Empty();
    opts = List_fold(parseOption, state, list);
    const classes = Helpers_classes("fa-stack", List_ofArray([opts.Size, opts.CustomClass]), List_empty());
    return react.createElement("span", MapUtil_keyValueList(List_cons(classes, opts.Props), 1, true), ...children);
}

