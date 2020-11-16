import { Toastr_warning, Toastr_success, Toastr_error, Toastr_showCloseButton, Toastr_hideEasing, Toastr_timeout, Toastr_position, Toastr_title, Toastr_message } from "../../.fable/Elmish.Toastr.2.1.0/Elmish.Toastr.fs.js";

export function toast(title, message) {
    let msg_4;
    let msg_3;
    let msg_2;
    let msg_1;
    const msg = Toastr_message(message);
    msg_1 = Toastr_title(title, msg);
    msg_2 = Toastr_position("toast-top-right", msg_1);
    msg_3 = Toastr_timeout(3000, msg_2);
    msg_4 = Toastr_hideEasing("swing", msg_3);
    return Toastr_showCloseButton(msg_4);
}

export function errorToast(title, message) {
    const msg = toast(title, message);
    return Toastr_error(msg);
}

export function successToast(title, message) {
    const msg = toast(title, message);
    return Toastr_success(msg);
}

export function warningToast(title, message) {
    const msg = toast(title, message);
    return Toastr_warning(msg);
}

