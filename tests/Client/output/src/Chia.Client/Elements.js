import { Option, image } from "../../.fable/Fulma.2.10.0/Elements/Image.fs.js";
import { ofArray, item, indexed, ofSeq, cons, map, empty, singleton } from "../../.fable/fable-library.3.0.0-nagareyama-rc-007/List.js";
import * as react from "react";
import { Record } from "../../.fable/fable-library.3.0.0-nagareyama-rc-007/Types.js";
import { tuple_type, record_type, string_type } from "../../.fable/fable-library.3.0.0-nagareyama-rc-007/Reflection.js";
import { Size_ISize, Color_IColor, Modifier_IModifier, TextAlignment_Option$reflection, Screen$reflection } from "../../.fable/Fulma.2.10.0/Common.fs.js";
import { select as select_1 } from "../../.fable/Fulma.2.10.0/Elements/Form/Select.fs.js";
import { some } from "../../.fable/fable-library.3.0.0-nagareyama-rc-007/Option.js";
import { singleton as singleton_1, collect, delay } from "../../.fable/fable-library.3.0.0-nagareyama-rc-007/Seq.js";
import { HTMLAttr } from "../../.fable/Fable.React.7.0.1/Fable.React.Props.fs.js";
import { int32ToString } from "../../.fable/fable-library.3.0.0-nagareyama-rc-007/Util.js";
import { keyValueList } from "../../.fable/fable-library.3.0.0-nagareyama-rc-007/MapUtil.js";
import { parse } from "../../.fable/fable-library.3.0.0-nagareyama-rc-007/Int32.js";
import { Browser_Types_Event__Event_get_Value } from "../../.fable/Fable.React.7.0.1/Fable.React.Extensions.fs.js";
import { Option as Option_5, div } from "../../.fable/Fulma.2.10.0/Elements/Form/Control.fs.js";
import { Option as Option_1, label as label_1 } from "../../.fable/Fulma.2.10.0/Elements/Form/Label.fs.js";
import { printf, toText } from "../../.fable/fable-library.3.0.0-nagareyama-rc-007/String.js";
import { Option as Option_2, notification } from "../../.fable/Fulma.2.10.0/Elements/Notification.fs.js";
import { Option as Option_3, button } from "../../.fable/Fulma.2.10.0/Elements/Button.fs.js";
import { Item_a, Item_Option, Item_li } from "../../.fable/Fulma.2.10.0/Components/Menu.fs.js";
import { Option as Option_4, icon as icon_1 } from "../../.fable/Fulma.2.10.0/Elements/Icon.fs.js";
import { Fa_i } from "../../.fable/Fable.FontAwesome.2.0.0/FontAwesome.fs.js";
import { IInputType, Option as Option_6, input } from "../../.fable/Fulma.2.10.0/Elements/Form/Input.fs.js";

export function Elements_spinner(pathToPic) {
    return image(singleton(new Option(6)), singleton(react.createElement("img", {
        src: pathToPic,
    })));
}

export class Types_Selection$1 extends Record {
    constructor(Value, Text$) {
        super();
        this.Value = Value;
        this.Text = Text$;
    }
}

export function Types_Selection$1$reflection(gen0) {
    return record_type("Chia.Types.Selection`1", [gen0], Types_Selection$1, () => [["Value", gen0], ["Text", string_type]]);
}

export class Types_SelectionInformation extends Record {
    constructor(Label, DefaultDataLabel, NoDataLabel, Alignment) {
        super();
        this.Label = Label;
        this.DefaultDataLabel = DefaultDataLabel;
        this.NoDataLabel = NoDataLabel;
        this.Alignment = Alignment;
    }
}

export function Types_SelectionInformation$reflection() {
    return record_type("Chia.Types.SelectionInformation", [], Types_SelectionInformation, () => [["Label", string_type], ["DefaultDataLabel", string_type], ["NoDataLabel", string_type], ["Alignment", tuple_type(Screen$reflection(), TextAlignment_Option$reflection())]]);
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
            return select_1(empty(), singleton((children_2 = [react.createElement("option", {
                value: "",
            }, noDataMsg)], react.createElement("select", {}, ...children_2))));
        }
        case 1: {
            if (data != null) {
                const data_3 = data;
                let data_4;
                let x_1;
                x_1 = map((x) => [some(x.Value), x.Text], data_3);
                data_4 = cons([void 0, placeholder], x_1);
                return select_1(empty(), singleton((children_10 = ofSeq(delay(() => collect((matchValue) => {
                    let props_8;
                    const text = matchValue[1][1];
                    const i = matchValue[0] | 0;
                    return singleton_1((props_8 = [new HTMLAttr(161, int32ToString(i))], react.createElement("option", keyValueList(props_8, 1), text)));
                }, indexed(data_4)))), react.createElement("select", {
                    onChange: (ev) => {
                        dispatch(msg(item(parse(Browser_Types_Event__Event_get_Value(ev), 511, false, 32), data_4)[0]));
                    },
                }, ...children_10))));
            }
            else {
                return select_1(empty(), singleton((children_6 = [react.createElement("option", {
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
    return div(empty(), ofArray([label_1(singleton(new Option_1(4, singleton((tupledArg = selectionInformation.Alignment, (new Modifier_IModifier(5, tupledArg[0], tupledArg[1])))))), singleton(selectionInformation.Label)), select]));
}

export function Export_getExcelLinkByGuid(api, guid) {
    const clo1 = toText(printf("%s/%s"));
    const clo2 = clo1(api);
    return clo2(guid);
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
            return notification(ofArray([new Option_2(0, new Color_IColor(6)), new Option_2(3, singleton(["style", {
                marginTop: "20px",
            }]))]), singleton((children_6 = [(children_2 = [react.createElement("i", {
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
            return notification(ofArray([new Option_2(0, new Color_IColor(8)), new Option_2(3, singleton(["style", {
                marginTop: "20px",
            }]))]), singleton("Erstellung des Berichts gescheitert"));
        }
    }
}

export function Export_exportButton(reqMsg, dispatch) {
    return button(singleton(new Option_3(17, (ev) => {
        dispatch(reqMsg);
    })), singleton("Exportieren"));
}

export function Error_showErrorClass(err) {
    if (err == null) {
        return react.createElement("div", {});
    }
    else {
        const err_1 = err;
        return notification(ofArray([new Option_2(0, new Color_IColor(8)), new Option_2(3, singleton(["style", {
            marginTop: "20px",
        }]))]), singleton(err_1.message));
    }
}

export function Menu_menuItem(label, icon, isActive, msg, dispatch) {
    return Item_li(ofArray([new Item_Option(0, isActive), new Item_Option(3, (ev) => {
        dispatch(msg(label));
    })]), ofArray([icon_1(singleton(new Option_4(0, new Size_ISize(0))), singleton(Fa_i(singleton(icon), []))), label]));
}

export function Menu_subMenu(label, isActive, children) {
    const children_3 = [Item_a(singleton(new Item_Option(0, isActive)), singleton(label)), react.createElement("ul", {}, ...children)];
    return react.createElement("li", {}, ...children_3);
}

export function Search_searchBar(placeholder, msg, dispatch) {
    return div(singleton(new Option_5(1)), ofArray([input(ofArray([new Option_6(1, new IInputType(0)), new Option_6(12, placeholder), new Option_6(13, (t) => {
        dispatch(msg(Browser_Types_Event__Event_get_Value(t)));
    })])), icon_1(singleton(new Option_4(1)), singleton(react.createElement("i", {
        className: "fa fa-search",
    })))]));
}

