import * as toastr$002Emin from "toastr/build/toastr.min.css";
import { Record as Types_Record } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Types.js";
import { record_type as Reflection_record_type, option_type as Reflection_option_type, lambda_type as Reflection_lambda_type, unit_type as Reflection_unit_type, class_type as Reflection_class_type, string_type as Reflection_string_type } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Reflection.js";
import { clear as toastr_clear, remove as toastr_remove, options as toastr_options, warning as toastr_warning, info as toastr_info, error as toastr_error, success as toastr_success } from "toastr";
import { singleton as List_singleton } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/List.js";


export class Toastr_ToastrMsg$1 extends Types_Record {
    constructor(Message, Title, Options, Dispatcher) {
        super();
        this.Message = Message;
        this.Title = Title;
        this.Options = Options;
        this.Dispatcher = Dispatcher;
    }
}

export function Toastr_ToastrMsg$1$reflection(gen0) {
    return Reflection_record_type("Elmish.Toastr.Toastr.ToastrMsg`1", [gen0], Toastr_ToastrMsg$1, () => [["Message", Reflection_string_type], ["Title", Reflection_string_type], ["Options", Reflection_class_type("Elmish.Toastr.ToastrOptions")], ["Dispatcher", Reflection_option_type(Reflection_lambda_type(gen0, Reflection_unit_type))]]);
}

export function Toastr_defaultMsg() {
    return new Toastr_ToastrMsg$1("", "", {}, void 0);
}

const Toastr_successToastWithTitle = toastr_success;

const Toastr_errorToastWithTitle = toastr_error;

const Toastr_infoToastWithTitle = toastr_info;

const Toastr_warningToastWithTitle = toastr_warning;

export function Toastr_message(msg) {
    const inputRecord = Toastr_defaultMsg();
    return new Toastr_ToastrMsg$1(msg, inputRecord.Title, inputRecord.Options, inputRecord.Dispatcher);
}

export function Toastr_title(title, msg) {
    return new Toastr_ToastrMsg$1(msg.Message, title, msg.Options, msg.Dispatcher);
}

export function Toastr_timeout(timeout, msg) {
    const options = msg.Options;
    options.timeOut=timeout;
    return msg;
}

export function Toastr_position(pos, msg) {
    const options = msg.Options;
    options.positionClass=pos;
    return msg;
}

export function Toastr_extendedTimout(t, msg) {
    const options = msg.Options;
    options.extendedTimeOut=t;
    return msg;
}

export function Toastr_onClick(nextMsg, msg) {
    const options = msg.Options;
    options.onclick = (() => {
        const matchValue = msg.Dispatcher;
        if (matchValue == null) {
        }
        else {
            const dispatcher = matchValue;
            dispatcher(nextMsg);
        }
    });
    return msg;
}

export function Toastr_onShown(nextMsg, msg) {
    const options = msg.Options;
    options.onShown = (() => {
        const matchValue = msg.Dispatcher;
        if (matchValue == null) {
        }
        else {
            const dispatcher = matchValue;
            dispatcher(nextMsg);
        }
    });
    return msg;
}

export function Toastr_tapToDismiss(msg) {
    const options = msg.Options;
    options.tapToDismiss = true;
    return msg;
}

export function Toastr_onHidden(nextMsg, msg) {
    const options = msg.Options;
    options.onHidden = (() => {
        const matchValue = msg.Dispatcher;
        if (matchValue == null) {
        }
        else {
            const dispatcher = matchValue;
            dispatcher(nextMsg);
        }
    });
    return msg;
}

export function Toastr_showCloseButton(msg) {
    const options = msg.Options;
    options.closeButton = true;
    return msg;
}

export function Toastr_withProgressBar(msg) {
    const options = msg.Options;
    options.progressBar = true;
    return msg;
}

export function Toastr_closeButtonClicked(nextMsg, msg) {
    const options = msg.Options;
    options.onCloseClick = (() => {
        const matchValue = msg.Dispatcher;
        if (matchValue == null) {
        }
        else {
            const dispatcher = matchValue;
            dispatcher(nextMsg);
        }
    });
    return msg;
}

export function Toastr_hideEasing(e, msg) {
    const options = msg.Options;
    options.hideEasing = e;
    return msg;
}

let Toastr_options = toastr_options;

export function Toastr_overrideOptions(opts) {
    Toastr_options = (Object.assign({}, Toastr_options, opts));
}

const Toastr_remove = toastr_remove;

const Toastr_clear = toastr_clear;

export function Toastr_clearAll() {
    return List_singleton((_arg1) => {
        Toastr_clear();
    });
}

export function Toastr_removeAll() {
    return List_singleton((_arg1) => {
        Toastr_remove();
    });
}

export function Toastr_success(msg) {
    return List_singleton((dispatch) => {
        msg.Dispatcher = dispatch;
        Toastr_successToastWithTitle(msg.Message, msg.Title, msg.Options);
    });
}

export function Toastr_error(msg) {
    return List_singleton((dispatch) => {
        msg.Dispatcher = dispatch;
        Toastr_errorToastWithTitle(msg.Message, msg.Title, msg.Options);
    });
}

export function Toastr_info(msg) {
    return List_singleton((dispatch) => {
        msg.Dispatcher = dispatch;
        Toastr_infoToastWithTitle(msg.Message, msg.Title, msg.Options);
    });
}

export function Toastr_warning(msg) {
    return List_singleton((dispatch) => {
        msg.Dispatcher = dispatch;
        Toastr_warningToastWithTitle(msg.Message, msg.Title, msg.Options);
    });
}

