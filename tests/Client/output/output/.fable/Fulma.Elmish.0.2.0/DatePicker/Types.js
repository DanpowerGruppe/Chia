import { Union as Types_Union, Record as Types_Record } from "../../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Types.js";
import { union_type as Reflection_union_type, list_type as Reflection_list_type, lambda_type as Reflection_lambda_type, tuple_type as Reflection_tuple_type, record_type as Reflection_record_type, string_type as Reflection_string_type, bool_type as Reflection_bool_type, option_type as Reflection_option_type, class_type as Reflection_class_type } from "../../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Reflection.js";
import { utcNow as Date_utcNow } from "../../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Date.js";
import { englishUK as Date$002ELocal_englishUK, Localization$reflection as Date$002ELocal_Localization$reflection } from "../../Fable.Date.1.0.0/Date.Local.js";
import { CSSProp as Fable$002EReact$002EProps_CSSProp, CSSProp$reflection as Fable$002EReact$002EProps_CSSProp$reflection } from "../../Fable.React.7.0.1/Fable.React.Props.js";
import { ofArray as List_ofArray } from "../../../../.fable/fable-library.3.0.0-nagareyama-beta-003/List.js";

export class State extends Types_Record {
    constructor(Today, InputFocused, ReferenceDate, AutoClose, ForceClose, TitleFormat, ShowDeleteButton) {
        super();
        this.Today = Today;
        this.InputFocused = InputFocused;
        this.ReferenceDate = ReferenceDate;
        this.AutoClose = AutoClose;
        this.ForceClose = ForceClose;
        this.TitleFormat = TitleFormat;
        this.ShowDeleteButton = ShowDeleteButton;
    }
}

export function State$reflection() {
    return Reflection_record_type("Fulma.Elmish.DatePicker.Types.State", [], State, () => [["Today", Reflection_option_type(Reflection_class_type("System.DateTime"))], ["InputFocused", Reflection_bool_type], ["ReferenceDate", Reflection_class_type("System.DateTime")], ["AutoClose", Reflection_bool_type], ["ForceClose", Reflection_bool_type], ["TitleFormat", Reflection_string_type], ["ShowDeleteButton", Reflection_bool_type]]);
}

export const defaultState = new State(void 0, false, Date_utcNow(), false, false, "", false);

export class Config$1 extends Types_Record {
    constructor(OnChange, Local, DatePickerStyle) {
        super();
        this.OnChange = OnChange;
        this.Local = Local;
        this.DatePickerStyle = DatePickerStyle;
    }
}

export function Config$1$reflection(gen0) {
    return Reflection_record_type("Fulma.Elmish.DatePicker.Types.Config`1", [gen0], Config$1, () => [["OnChange", Reflection_lambda_type(Reflection_tuple_type(State$reflection(), Reflection_option_type(Reflection_class_type("System.DateTime"))), gen0)], ["Local", Date$002ELocal_Localization$reflection()], ["DatePickerStyle", Reflection_list_type(Fable$002EReact$002EProps_CSSProp$reflection())]]);
}

export function defaultConfig(onChangeMsg) {
    return new Config$1(onChangeMsg, Date$002ELocal_englishUK, List_ofArray([new Fable$002EReact$002EProps_CSSProp(291, "absolute"), new Fable$002EReact$002EProps_CSSProp(249, "450px")]));
}

export class Msg extends Types_Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["NoOp"];
    }
}

export function Msg$reflection() {
    return Reflection_union_type("Fulma.Elmish.DatePicker.Types.Msg", [], Msg, () => [[]]);
}

export class Model extends Types_Record {
    constructor(CurrentDate) {
        super();
        this.CurrentDate = CurrentDate;
    }
}

export function Model$reflection() {
    return Reflection_record_type("Fulma.Elmish.DatePicker.Types.Model", [], Model, () => [["CurrentDate", Reflection_class_type("System.DateTime")]]);
}

