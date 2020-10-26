import { Union as Types_Union, Record as Types_Record } from "../../.fable/fable-library.3.0.0-nagareyama-beta-003/Types.js";
import { defaultPage as Router_defaultPage, Page$reflection as Router_Page$reflection } from "./Router.js";
import { union_type as Reflection_union_type, string_type as Reflection_string_type, record_type as Reflection_record_type, bool_type as Reflection_bool_type } from "../../.fable/fable-library.3.0.0-nagareyama-beta-003/Reflection.js";

export class Model extends Types_Record {
    constructor(CurrentPage, ShowQuickView, ShowLoader) {
        super();
        this.CurrentPage = CurrentPage;
        this.ShowQuickView = ShowQuickView;
        this.ShowLoader = ShowLoader;
    }
}

export function Model$reflection() {
    return Reflection_record_type("Domain.Model", [], Model, () => [["CurrentPage", Router_Page$reflection()], ["ShowQuickView", Reflection_bool_type], ["ShowLoader", Reflection_bool_type]]);
}

export const ModelModule_init = new Model(Router_defaultPage, false, false);

export class Msg extends Types_Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["UrlChanged", "ToggleLoader", "SentToast"];
    }
}

export function Msg$reflection() {
    return Reflection_union_type("Domain.Msg", [], Msg, () => [[["Item", Router_Page$reflection()]], [], [["Item", Reflection_string_type]]]);
}

