import { State as Types_State } from "./Types.js";
import { addMonths as Date_addMonths, addDays as Date_addDays, dayOfWeek as Date_dayOfWeek, create as Date_create, year as Date_year, day as Date_day, utcNow as Date_utcNow, month as Date_month } from "../../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Date.js";
import { op_UnaryNegation_Int32 as Int32_op_UnaryNegation_Int32 } from "../../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Int32.js";
import { ofArray as List_ofArray, singleton as List_singleton, empty as List_empty, map as List_map, append as List_append, splitAt as List_splitAt, ofSeq as List_ofSeq } from "../../../../.fable/fable-library.3.0.0-nagareyama-beta-003/List.js";
import { empty as Seq_empty, append as Seq_append, singleton as Seq_singleton, collect as Seq_collect, delay as Seq_delay, rangeNumber as Seq_rangeNumber } from "../../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Seq.js";
import { printf as String_printf, toFail as String_toFail } from "../../../../.fable/fable-library.3.0.0-nagareyama-beta-003/String.js";
import { body as Calendar_body, header as Calendar_header, Nav_right as Calendar_Nav_right, Nav_left as Calendar_Nav_left, Nav_nav as Calendar_Nav_nav, Option as Calendar_Option, calendar as Calendar_calendar, Date_Item_Option as Calendar_Date_Item_Option, Date_item as Calendar_Date_item, Date_Option as Calendar_Date_Option, Date_date as Calendar_Date_date } from "../../Fulma.Extensions.Wikiki.Calendar.2.0.1/Calendar.js";
import { HTMLAttr as Fable$002EReact$002EProps_HTMLAttr, DOMAttr as Fable$002EReact$002EProps_DOMAttr } from "../../Fable.React.7.0.1/Fable.React.Props.js";
import { int32ToString as Util_int32ToString } from "../../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Util.js";
import { box$0027 as Box_box$0027 } from "../../Fulma.2.10.0/Elements/Box.js";
import { Common_GenericOption as Common_Common_GenericOption } from "../../Fulma.2.10.0/Common.js";
import { keyValueList as MapUtil_keyValueList } from "../../../../.fable/fable-library.3.0.0-nagareyama-beta-003/MapUtil.js";
import { a as Button_a, Option as Button_Option, button as Button_button } from "../../Fulma.2.10.0/Elements/Button.js";
import { icon as Icon_icon } from "../../Fulma.2.10.0/Elements/Icon.js";
import { Fa_IconOption as FontAwesome_Fa_IconOption, Fa_i as FontAwesome_Fa_i } from "../../Fable.FontAwesome.2.0.0/FontAwesome.js";
import { localFormat as Date$002EFormat_localFormat } from "../../Fable.Date.1.0.0/Date.Format.js";
import * as react from "react";
import { Option as Field_Option, div as Field_div, body as Field_body } from "../../Fulma.2.10.0/Elements/Form/Field.js";
import { Option as Control_Option, p as Control_p } from "../../Fulma.2.10.0/Elements/Form/Control.js";
import { IInputType as Input_IInputType, Option as Input_Option, input as Input_input } from "../../Fulma.2.10.0/Elements/Form/Input.js";

export function isCalendarDisplayed(state) {
    if (state.InputFocused) {
        return !(state.AutoClose ? state.ForceClose : false);
    }
    else {
        return false;
    }
}

export function onFocus(config, state, currentDate, dispatch) {
    if (!isCalendarDisplayed(state)) {
        dispatch(config.OnChange([new Types_State(state.Today, true, state.ReferenceDate, state.AutoClose, false, state.TitleFormat, state.ShowDeleteButton), currentDate]));
    }
}

export function onChange(config, state, currentDate, dispatch) {
    return dispatch(config.OnChange([state, currentDate]));
}

export function onDeleteClick(config, state, currentDate, dispatch) {
    if (currentDate != null) {
        dispatch(config.OnChange([state, void 0]));
    }
}

export function calendar(config, state, currentDate, dispatch) {
    let s_2, children;
    const isCurrentMonth = (date) => (Date_month(state.ReferenceDate) === Date_month(date));
    const isToday = (dateToCompare) => {
        const d = Date_utcNow();
        if ((Date_day(dateToCompare) === Date_day(d)) ? (Date_month(dateToCompare) === Date_month(d)) : false) {
            return Date_year(dateToCompare) === Date_year(d);
        }
        else {
            return false;
        }
    };
    const isSelected = (dateToCompare_1) => {
        if (currentDate == null) {
            return false;
        }
        else {
            const date_1 = currentDate;
            if ((Date_day(date_1) === Date_day(dateToCompare_1)) ? (Date_month(date_1) === Date_month(dateToCompare_1)) : false) {
                return Date_year(date_1) === Date_year(dateToCompare_1);
            }
            else {
                return false;
            }
        }
    };
    let firstDateCalendar;
    const firstOfMonth = Date_create(Date_year(state.ReferenceDate), Date_month(state.ReferenceDate), 1);
    const weekOffset = (((7 + Date_dayOfWeek(firstOfMonth)) - config.Local.Date.FirstDayOfTheWeek) % 7) | 0;
    firstDateCalendar = Date_addDays(firstOfMonth, Int32_op_UnaryNegation_Int32(weekOffset));
    let header;
    let list_1;
    let tupledArg;
    const list = List_ofSeq(Seq_rangeNumber(0, 1, 6));
    const index = Date_dayOfWeek(firstDateCalendar) | 0;
    tupledArg = List_splitAt(index, list);
    const first = tupledArg[0];
    const second = tupledArg[1];
    list_1 = List_append(second, first);
    header = List_map((intDayOfWeek) => {
        const dayOfWeek = intDayOfWeek | 0;
        let name;
        switch (dayOfWeek) {
            case 0: {
                name = config.Local.Date.AbbreviatedDays.Sunday;
                break;
            }
            case 1: {
                name = config.Local.Date.AbbreviatedDays.Monday;
                break;
            }
            case 2: {
                name = config.Local.Date.AbbreviatedDays.Tuesday;
                break;
            }
            case 3: {
                name = config.Local.Date.AbbreviatedDays.Wednesday;
                break;
            }
            case 4: {
                name = config.Local.Date.AbbreviatedDays.Thursday;
                break;
            }
            case 5: {
                name = config.Local.Date.AbbreviatedDays.Friday;
                break;
            }
            case 6: {
                name = config.Local.Date.AbbreviatedDays.Saturday;
                break;
            }
            default: {
                const x = dayOfWeek | 0;
                const arg10 = x | 0;
                const clo1 = String_toFail(String_printf("not a valid day of week: %A"));
                name = clo1(arg10);
            }
        }
        return Calendar_Date_date(List_empty(), List_singleton(name));
    }, list_1);
    let body;
    const source = Seq_delay(() => Seq_collect((dayRank) => {
        let s_1, copyOfStruct;
        const date_2 = Date_addDays(firstDateCalendar, dayRank);
        return Seq_singleton(Calendar_Date_date(List_singleton(new Calendar_Date_Option(2, !isCurrentMonth(date_2))), List_singleton(Calendar_Date_item(List_ofArray([new Calendar_Date_Item_Option(2, isToday(date_2)), new Calendar_Date_Item_Option(3, isSelected(date_2)), new Calendar_Date_Item_Option(1, List_singleton(new Fable$002EReact$002EProps_DOMAttr(40, (_arg1) => {
            const newState = new Types_State(state.Today, state.InputFocused, state.ReferenceDate, state.AutoClose, true, state.TitleFormat, state.ShowDeleteButton);
            onChange(config, newState, date_2, dispatch);
        })))]), List_singleton((s_1 = (copyOfStruct = (Date_day(date_2) | 0), Util_int32ToString(copyOfStruct)), s_1))))));
    }, Seq_rangeNumber(0, 1, 41)));
    body = List_ofSeq(source);
    return Box_box$0027(List_singleton(new Common_Common_GenericOption(1, List_singleton(["style", MapUtil_keyValueList(config.DatePickerStyle, 1, true)]))), List_singleton(Calendar_calendar(List_singleton(new Calendar_Option(1, List_singleton(new Fable$002EReact$002EProps_DOMAttr(51, (ev) => {
        ev.preventDefault();
    })))), List_ofArray([Calendar_Nav_nav(List_empty(), List_ofArray([Calendar_Nav_left(List_empty(), List_singleton(Button_button(List_ofArray([new Button_Option(3), new Button_Option(17, (_arg2) => {
        let newState_1;
        const ReferenceDate = Date_addMonths(state.ReferenceDate, -1);
        newState_1 = (new Types_State(state.Today, state.InputFocused, ReferenceDate, state.AutoClose, false, state.TitleFormat, state.ShowDeleteButton));
        onChange(config, newState_1, currentDate, dispatch);
    })]), List_singleton(Icon_icon(List_empty(), List_singleton(FontAwesome_Fa_i(List_singleton(new FontAwesome_Fa_IconOption(11, "fas fa-chevron-left")), []))))))), (s_2 = Date$002EFormat_localFormat(config.Local, "MMMM yyyy", state.ReferenceDate), s_2), Calendar_Nav_right(List_empty(), List_singleton(Button_button(List_ofArray([new Button_Option(3), new Button_Option(17, (_arg3) => {
        let newState_2;
        const ReferenceDate_1 = Date_addMonths(state.ReferenceDate, 1);
        newState_2 = (new Types_State(state.Today, state.InputFocused, ReferenceDate_1, state.AutoClose, false, state.TitleFormat, state.ShowDeleteButton));
        onChange(config, newState_2, currentDate, dispatch);
    })]), List_singleton(Icon_icon(List_empty(), List_singleton(FontAwesome_Fa_i(List_singleton(new FontAwesome_Fa_IconOption(11, "fas fa-chevron-right")), [])))))))])), (children = [Calendar_header(List_empty(), header), Calendar_body(List_empty(), body)], react.createElement("div", {}, ...children))]))));
}

export function root(config, state, currentDate, dispatch) {
    let dateTxt;
    if (currentDate == null) {
        dateTxt = "";
    }
    else {
        const date = currentDate;
        dateTxt = Date$002EFormat_localFormat(config.Local, config.Local.Date.DefaultFormat, date);
    }
    const children = List_ofSeq(Seq_delay(() => Seq_append(Seq_singleton(Field_body(List_empty(), List_singleton(Field_div(state.ShowDeleteButton ? List_singleton(new Field_Option(0)) : List_empty(), List_ofSeq(Seq_delay(() => Seq_append(Seq_singleton(Control_p(List_singleton(new Control_Option(3)), List_singleton(Input_input(List_ofArray([new Input_Option(1, new Input_IInputType(0)), new Input_Option(15, List_ofArray([new Fable$002EReact$002EProps_HTMLAttr(161, dateTxt), new Fable$002EReact$002EProps_DOMAttr(7, (_arg1) => {
        onFocus(config, state, currentDate, dispatch);
    }), new Fable$002EReact$002EProps_DOMAttr(40, (_arg2) => {
        onFocus(config, state, currentDate, dispatch);
    }), new Fable$002EReact$002EProps_DOMAttr(8, (_arg3) => {
        const newState = new Types_State(state.Today, false, state.ReferenceDate, state.AutoClose, state.ForceClose, state.TitleFormat, state.ShowDeleteButton);
        onChange(config, newState, currentDate, dispatch);
    })]))]))))), Seq_delay(() => (state.ShowDeleteButton ? Seq_singleton(Control_p(List_empty(), List_singleton(Button_a(List_singleton(new Button_Option(17, (_arg4) => {
        onDeleteClick(config, state, currentDate, dispatch);
    })), List_singleton(Icon_icon(List_empty(), List_singleton(FontAwesome_Fa_i(List_singleton(new FontAwesome_Fa_IconOption(11, "fas fa-times")), [])))))))) : Seq_empty()))))))))), Seq_delay(() => (isCalendarDisplayed(state) ? Seq_singleton(calendar(config, state, currentDate, dispatch)) : Seq_empty())))));
    return react.createElement("div", {}, ...children);
}

