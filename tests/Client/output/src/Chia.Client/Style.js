import { Toastr_warning as Elmish$002EToastr_Toastr_warning, Toastr_success as Elmish$002EToastr_Toastr_success, Toastr_error as Elmish$002EToastr_Toastr_error, Toastr_showCloseButton as Elmish$002EToastr_Toastr_showCloseButton, Toastr_hideEasing as Elmish$002EToastr_Toastr_hideEasing, Toastr_timeout as Elmish$002EToastr_Toastr_timeout, Toastr_position as Elmish$002EToastr_Toastr_position, Toastr_title as Elmish$002EToastr_Toastr_title, Toastr_message as Elmish$002EToastr_Toastr_message } from "../../output/.fable/Elmish.Toastr.2.1.0/Elmish.Toastr.js";

export function toast(title, message) {
    let msg_4;
    let msg_3;
    let msg_2;
    let msg_1;
    const msg = Elmish$002EToastr_Toastr_message(message);
    msg_1 = Elmish$002EToastr_Toastr_title(title, msg);
    msg_2 = Elmish$002EToastr_Toastr_position("toast-top-right", msg_1);
    msg_3 = Elmish$002EToastr_Toastr_timeout(3000, msg_2);
    msg_4 = Elmish$002EToastr_Toastr_hideEasing("swing", msg_3);
    return Elmish$002EToastr_Toastr_showCloseButton(msg_4);
}

export function errorToast(title, message) {
    const msg = toast(title, message);
    return Elmish$002EToastr_Toastr_error(msg);
}

export function successToast(title, message) {
    const msg = toast(title, message);
    return Elmish$002EToastr_Toastr_success(msg);
}

export function warningToast(title, message) {
    const msg = toast(title, message);
    return Elmish$002EToastr_Toastr_warning(msg);
}

