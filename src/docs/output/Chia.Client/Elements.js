import { Option as Image_Option, image as Image_image } from "../output/.fable/Fulma.2.10.0/Elements/Image.js";
import { ofArray as List_ofArray, item as List_item, indexed as List_indexed, ofSeq as List_ofSeq, cons as List_cons, map as List_map, empty as List_empty, singleton as List_singleton } from "../.fable/fable-library.3.0.0-nagareyama-beta-002/List.js";
import * as react from "react";
import { Record as Types_Record } from "../.fable/fable-library.3.0.0-nagareyama-beta-002/Types.js";
import { tuple_type as Reflection_tuple_type, record_type as Reflection_record_type, string_type as Reflection_string_type } from "../.fable/fable-library.3.0.0-nagareyama-beta-002/Reflection.js";
import { Size_ISize as Common_Size_ISize, Color_IColor as Common_Color_IColor, Modifier_IModifier as Common_Modifier_IModifier, TextAlignment_Option$reflection as Common_TextAlignment_Option$reflection, Screen$reflection as Common_Screen$reflection } from "../output/.fable/Fulma.2.10.0/Common.js";
import { select as Select_select } from "../output/.fable/Fulma.2.10.0/Elements/Form/Select.js";
import { some as Option_some } from "../.fable/fable-library.3.0.0-nagareyama-beta-002/Option.js";
import { singleton as Seq_singleton, collect as Seq_collect, delay as Seq_delay } from "../.fable/fable-library.3.0.0-nagareyama-beta-002/Seq.js";
import { HTMLAttr as Fable$002EReact$002EProps_HTMLAttr } from "../output/.fable/Fable.React.7.0.1/Fable.React.Props.js";
import { int32ToString as Util_int32ToString } from "../.fable/fable-library.3.0.0-nagareyama-beta-002/Util.js";
import { keyValueList as MapUtil_keyValueList } from "../.fable/fable-library.3.0.0-nagareyama-beta-002/MapUtil.js";
import { parse as Int32_parse } from "../.fable/fable-library.3.0.0-nagareyama-beta-002/Int32.js";
import { Browser_Types_Event__Event_get_Value as Fable$002EReact$002EExtensions_Browser_Types_Event__Event_get_Value } from "../output/.fable/Fable.React.7.0.1/Fable.React.Extensions.js";
import { Option as Control_Option, div as Control_div } from "../output/.fable/Fulma.2.10.0/Elements/Form/Control.js";
import { Option as Label_Option, label as Label_label } from "../output/.fable/Fulma.2.10.0/Elements/Form/Label.js";
import { printf as String_printf, toText as String_toText } from "../.fable/fable-library.3.0.0-nagareyama-beta-002/String.js";
import { Option as Notification_Option, notification as Notification_notification } from "../output/.fable/Fulma.2.10.0/Elements/Notification.js";
import { Option as Button_Option, button as Button_button } from "../output/.fable/Fulma.2.10.0/Elements/Button.js";
import { Item_a as Menu_Item_a, Item_Option as Menu_Item_Option, Item_li as Menu_Item_li } from "../output/.fable/Fulma.2.10.0/Components/Menu.js";
import { Option as Icon_Option, icon as Icon_icon } from "../output/.fable/Fulma.2.10.0/Elements/Icon.js";
import { Fa_i as FontAwesome_Fa_i } from "../output/.fable/Fable.FontAwesome.2.0.0/FontAwesome.js";
import { IInputType as Input_IInputType, Option as Input_Option, input as Input_input } from "../output/.fable/Fulma.2.10.0/Elements/Form/Input.js";

export function Elements_spinner(pathToPic) {
    return Image_image(List_singleton(new Image_Option(6)), List_singleton(react.createElement("img", {
        src: pathToPic,
    })));
}

export class Types_Selection$1 extends Types_Record {
    constructor(Value, Text$) {
        super();
        this.Value = Value;
        this.Text = Text$;
    }
}

export function Types_Selection$1$reflection(gen0) {
    return Reflection_record_type("Chia.Types.Selection`1", [gen0], Types_Selection$1, () => [["Value", gen0], ["Text", Reflection_string_type]]);
}

export class Types_SelectionInformation extends Types_Record {
    constructor(Label, DefaultDataLabel, NoDataLabel, Alignment) {
        super();
        this.Label = Label;
        this.DefaultDataLabel = DefaultDataLabel;
        this.NoDataLabel = NoDataLabel;
        this.Alignment = Alignment;
    }
}

export function Types_SelectionInformation$reflection() {
    return Reflection_record_type("Chia.Types.SelectionInformation", [], Types_SelectionInformation, () => [["Label", Reflection_string_type], ["DefaultDataLabel", Reflection_string_type], ["NoDataLabel", Reflection_string_type], ["Alignment", Reflection_tuple_type(Common_Screen$reflection(), Common_TextAlignment_Option$reflection())]]);
}

export function Selections_basicSelect(data, placeholder, noDataMsg, msg, dispatch) {
    let children_2, children_10, children_6, data_1;
    let pattern_matching_result;
    if (data != null) {
        if (data_1 = data, data_1.tail == null) {
            pattern_matching_result = 0;
        }
        else {
            pattern_matching_result = 1;
        }
    }
    else {
        pattern_matching_result = 1;
    }
    switch (pattern_matching_result) {
        case 0: {
            return Select_select(List_empty(), List_singleton((children_2 = [react.createElement("option", {
                value: "",
            }, noDataMsg)], react.createElement("select", {}, ...children_2))));
        }
        case 1: {
            if (data != null) {
                const data_3 = data;
                let data_4;
                let x_1;
                const list = data_3;
                x_1 = List_map((x) => [Option_some(x.Value), x.Text], list);
                data_4 = List_cons([void 0, placeholder], x_1);
                return Select_select(List_empty(), List_singleton((children_10 = List_ofSeq(Seq_delay(() => Seq_collect((matchValue) => {
                    let props_8;
                    const text = matchValue[1][1];
                    const i = matchValue[0] | 0;
                    return Seq_singleton((props_8 = [new Fable$002EReact$002EProps_HTMLAttr(161, Util_int32ToString(i))], react.createElement("option", MapUtil_keyValueList(props_8, 1, true), text)));
                }, List_indexed(data_4)))), react.createElement("select", {
                    onChange: (ev) => {
                        dispatch(msg(List_item(Int32_parse(Fable$002EReact$002EExtensions_Browser_Types_Event__Event_get_Value(ev), 511, false, 32), data_4)[0]));
                    },
                }, ...children_10))));
            }
            else {
                return Select_select(List_empty(), List_singleton((children_6 = [react.createElement("option", {
                    value: "lade Daten",
                }, "lade Daten")], react.createElement("select", {
                    defaultValue: "lade Daten",
                }, ...children_6))));
            }
        }
    }
}

export function Selections_selectWithLabel(selectionInformation, data, msg, dispatch) {
    let tupledArg;
    const select = Selections_basicSelect(data, selectionInformation.DefaultDataLabel, selectionInformation.NoDataLabel, msg, dispatch);
    return Control_div(List_empty(), List_ofArray([Label_label(List_singleton(new Label_Option(4, List_singleton((tupledArg = selectionInformation.Alignment, (new Common_Modifier_IModifier(5, tupledArg[0], tupledArg[1])))))), List_singleton(selectionInformation.Label)), select]));
}

export function Export_getExcelLinkByGuid(api, guid) {
    const arg10 = api;
    const arg20 = guid;
    const clo1 = String_toText(String_printf("%s/%s"));
    const clo2 = clo1(arg10);
    return clo2(arg20);
}

export function Export_showExportClass(api, guid, setMsg, dispatch) {
    let children_6, children_2;
    if (guid == null) {
        return react.createElement("div", {});
    }
    else {
        const guid_1 = guid;
        if (guid_1 !== "failure") {
            const link = Export_getExcelLinkByGuid(guid_1, api);
            return Notification_notification(List_ofArray([new Notification_Option(0, new Common_Color_IColor(6)), new Notification_Option(3, List_singleton(["style", {
                marginTop: "20px",
            }]))]), List_singleton((children_6 = [(children_2 = [react.createElement("i", {
                className: "fa fa-table",
            })], react.createElement("span", {
                className: "sidebar-icon",
            }, ...children_2)), react.createElement("span", {
                className: "sidebar-title",
            }, " Bericht herunterladen")], react.createElement("a", {
                href: link,
                onClick: (e) => {
                    dispatch(setMsg(guid_1));
                },
            }, ...children_6))));
        }
        else {
            return Notification_notification(List_ofArray([new Notification_Option(0, new Common_Color_IColor(8)), new Notification_Option(3, List_singleton(["style", {
                marginTop: "20px",
            }]))]), List_singleton("Erstellung des Berichts gescheitert"));
        }
    }
}

export function Export_exportButton(reqMsg, dispatch) {
    return Button_button(List_singleton(new Button_Option(17, (ev) => {
        dispatch(reqMsg);
    })), List_singleton("Exportieren"));
}

export function Error_showErrorClass(err) {
    if (err == null) {
        return react.createElement("div", {});
    }
    else {
        const err_1 = err;
        return Notification_notification(List_ofArray([new Notification_Option(0, new Common_Color_IColor(8)), new Notification_Option(3, List_singleton(["style", {
            marginTop: "20px",
        }]))]), List_singleton(err_1.message));
    }
}

export function Menu_menuItem(label, icon, isActive, msg, dispatch) {
    return Menu_Item_li(List_ofArray([new Menu_Item_Option(0, isActive), new Menu_Item_Option(3, (ev) => {
        dispatch(msg(label));
    })]), List_ofArray([Icon_icon(List_singleton(new Icon_Option(0, new Common_Size_ISize(0))), List_singleton(FontAwesome_Fa_i(List_singleton(icon), []))), label]));
}

export function Menu_subMenu(label, isActive, children) {
    const children_3 = [Menu_Item_a(List_singleton(new Menu_Item_Option(0, isActive)), List_singleton(label)), react.createElement("ul", {}, ...children)];
    return react.createElement("li", {}, ...children_3);
}

export function Search_searchBar(placeholder, msg, dispatch) {
    return Control_div(List_singleton(new Control_Option(1)), List_ofArray([Input_input(List_ofArray([new Input_Option(1, new Input_IInputType(0)), new Input_Option(12, placeholder), new Input_Option(13, (t) => {
        dispatch(msg(Fable$002EReact$002EExtensions_Browser_Types_Event__Event_get_Value(t)));
    })])), Icon_icon(List_singleton(new Icon_Option(1)), List_singleton(react.createElement("i", {
        className: "fa fa-search",
    })))]));
}

