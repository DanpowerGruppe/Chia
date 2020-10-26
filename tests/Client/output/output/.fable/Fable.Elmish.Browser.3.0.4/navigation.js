import { Union as Types_Union } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Types.js";
import { union_type as Reflection_union_type, class_type as Reflection_class_type } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Reflection.js";
import { ofArray as List_ofArray, singleton as List_singleton } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/List.js";
import { Cmd_batch as cmd_Cmd_batch, Cmd_map as cmd_Cmd_map } from "../Fable.Elmish.3.1.0/cmd.js";
import { ProgramModule_map as program_ProgramModule_map } from "../Fable.Elmish.3.1.0/program.js";

export class Navigable$1 extends Types_Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["Change", "UserMsg"];
    }
}

export function Navigable$1$reflection(gen0) {
    return Reflection_union_type("Elmish.Navigation.Navigable`1", [gen0], Navigable$1, () => [[["Item", Reflection_class_type("Browser.Types.Location")]], [["Item", gen0]]]);
}

export function Navigation_modifyUrl(newUrl) {
    return List_singleton((_arg1) => {
        history.replaceState(void 0, "", newUrl);
    });
}

export function Navigation_newUrl(newUrl) {
    return List_singleton((_arg1) => {
        history.pushState(void 0, "", newUrl);
        const ev = new CustomEvent("NavigatedEvent");
        const value = window.dispatchEvent(ev);
        void value;
    });
}

export function Navigation_jump(n) {
    return List_singleton((_arg1) => {
        history.go(n);
    });
}

let ProgramModule_Internal_onChangeRef = (_arg1) => {
    throw (new Error("`onChangeRef` has not been initialized.\nPlease make sure you used Elmish.Navigation.Program.Internal.subscribe"));
};

export function ProgramModule_Internal_subscribe(dispatch) {
    let lastLocation = void 0;
    const onChange = (_arg1) => {
        let href;
        let value;
        let pattern_matching_result;
        if (lastLocation != null) {
            if (href = lastLocation, href === window.location.href) {
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
                value = (void 0);
                break;
            }
            case 1: {
                lastLocation = window.location.href;
                value = dispatch(new Navigable$1(0, window.location));
                break;
            }
        }
        return void 0;
    };
    ProgramModule_Internal_onChangeRef = onChange;
    window.addEventListener("popstate", (arg10) => {
        ProgramModule_Internal_onChangeRef(arg10);
    });
    window.addEventListener("hashchange", (arg10_1) => {
        ProgramModule_Internal_onChangeRef(arg10_1);
    });
    window.addEventListener("NavigatedEvent", (arg10_2) => {
        ProgramModule_Internal_onChangeRef(arg10_2);
    });
}

export function ProgramModule_Internal_unsubscribe() {
    window.removeEventListener("popstate", (arg10) => {
        ProgramModule_Internal_onChangeRef(arg10);
    });
    window.removeEventListener("hashchange", (arg10_1) => {
        ProgramModule_Internal_onChangeRef(arg10_1);
    });
    window.removeEventListener("NavigatedEvent", (arg10_2) => {
        ProgramModule_Internal_onChangeRef(arg10_2);
    });
}

export function ProgramModule_Internal_toNavigableWith(parser, urlUpdate, program, onLocationChange) {
    const map = (tupledArg) => {
        let cmd_1;
        const model = tupledArg[0];
        const cmd = tupledArg[1];
        return [model, (cmd_1 = cmd, (cmd_Cmd_map((arg0) => (new Navigable$1(1, arg0)), cmd_1)))];
    };
    const update = (userUpdate, msg, model_1) => {
        let userMsg, location;
        return map((msg.tag === 1) ? (userMsg = msg.fields[0], userUpdate(userMsg, model_1)) : (location = msg.fields[0], urlUpdate(parser(location), model_1)));
    };
    const subs = (userSubscribe, model_2) => {
        let cmd_2;
        return cmd_Cmd_batch(List_ofArray([List_singleton(onLocationChange), (cmd_2 = userSubscribe(model_2), (cmd_Cmd_map((arg0_1) => (new Navigable$1(1, arg0_1)), cmd_2)))]));
    };
    const init = (userInit, unitVar1) => map(userInit(parser(window.location)));
    const setState = (userSetState, model_3, dispatch) => userSetState(model_3, (arg) => {
        let arg0_2;
        return dispatch((arg0_2 = arg, (new Navigable$1(1, arg0_2))));
    });
    const view = (userView, model_4, dispatch_1) => userView(model_4, (arg_1) => {
        let arg0_3;
        return dispatch_1((arg0_3 = arg_1, (new Navigable$1(1, arg0_3))));
    });
    const program_1 = program;
    return program_ProgramModule_map(init, update, view, setState, subs, program_1);
}

export function ProgramModule_toNavigable(parser, urlUpdate, program) {
    return ProgramModule_Internal_toNavigableWith(parser, urlUpdate, program, (dispatch) => {
        ProgramModule_Internal_subscribe(dispatch);
    });
}

