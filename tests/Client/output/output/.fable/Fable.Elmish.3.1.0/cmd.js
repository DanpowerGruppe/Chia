import { singleton as List_singleton, concat as List_concat, map as List_map, empty as List_empty, iterate as List_iterate } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/List.js";
import { singleton as AsyncBuilder_singleton } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/AsyncBuilder.js";
import { startImmediate as Async_startImmediate, catchAsync as Async_catchAsync } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Async.js";
import { Timer_delay as prelude_Timer_delay } from "./prelude.js";

export function Cmd_exec(onError, dispatch, cmd) {
    const list = cmd;
    List_iterate((call) => {
        try {
            call(dispatch);
        }
        catch (ex) {
            onError(ex);
        }
    }, list);
}

export function Cmd_none() {
    return List_empty();
}

export function Cmd_map(f, cmd) {
    const list = cmd;
    return List_map((g) => ((arg_1) => {
        let dispatch;
        g((dispatch = arg_1, (arg) => {
            dispatch(f(arg));
        }));
    }), list);
}

export function Cmd_batch(cmds) {
    const lists = cmds;
    return List_concat(lists);
}

export function Cmd_ofSub(sub) {
    return List_singleton(sub);
}

export function Cmd_OfFunc_either(task, arg, ofSuccess, ofError) {
    const bind = (dispatch) => {
        try {
            const arg_1 = task(arg);
            return dispatch(ofSuccess(arg_1));
        }
        catch (x) {
            const arg_2 = x;
            return dispatch(ofError(arg_2));
        }
    };
    return List_singleton(bind);
}

export function Cmd_OfFunc_perform(task, arg, ofSuccess) {
    const bind = (dispatch) => {
        try {
            const arg_1 = task(arg);
            dispatch(ofSuccess(arg_1));
        }
        catch (x) {
        }
    };
    return List_singleton(bind);
}

export function Cmd_OfFunc_attempt(task, arg, ofError) {
    const bind = (dispatch) => {
        try {
            task(arg);
        }
        catch (x) {
            const arg_1 = x;
            dispatch(ofError(arg_1));
        }
    };
    return List_singleton(bind);
}

export function Cmd_OfFunc_result(msg) {
    return List_singleton((dispatch) => {
        dispatch(msg);
    });
}

export function Cmd_OfAsyncWith_either(start, task, arg, ofSuccess, ofError) {
    const bind = (dispatch) => {
        const builder$0040 = AsyncBuilder_singleton;
        return builder$0040.Delay(() => {
            let arg00;
            return builder$0040.Bind((arg00 = task(arg), (Async_catchAsync(arg00))), (_arg1) => {
                let x_1, x;
                const r = _arg1;
                dispatch((r.tag === 1) ? (x_1 = r.fields[0], ofError(x_1)) : (x = r.fields[0], ofSuccess(x)));
                return builder$0040.Zero();
            });
        });
    };
    return List_singleton((arg_1) => {
        start(bind(arg_1));
    });
}

export function Cmd_OfAsyncWith_perform(start, task, arg, ofSuccess) {
    const bind = (dispatch) => {
        const builder$0040 = AsyncBuilder_singleton;
        return builder$0040.Delay(() => {
            let arg00;
            return builder$0040.Bind((arg00 = task(arg), (Async_catchAsync(arg00))), (_arg1) => {
                const r = _arg1;
                if (r.tag === 0) {
                    const x = r.fields[0];
                    dispatch(ofSuccess(x));
                    return builder$0040.Zero();
                }
                else {
                    return builder$0040.Zero();
                }
            });
        });
    };
    return List_singleton((arg_1) => {
        start(bind(arg_1));
    });
}

export function Cmd_OfAsyncWith_attempt(start, task, arg, ofError) {
    const bind = (dispatch) => {
        const builder$0040 = AsyncBuilder_singleton;
        return builder$0040.Delay(() => {
            let arg00;
            return builder$0040.Bind((arg00 = task(arg), (Async_catchAsync(arg00))), (_arg1) => {
                const r = _arg1;
                if (r.tag === 1) {
                    const x = r.fields[0];
                    dispatch(ofError(x));
                    return builder$0040.Zero();
                }
                else {
                    return builder$0040.Zero();
                }
            });
        });
    };
    return List_singleton((arg_1) => {
        start(bind(arg_1));
    });
}

export function Cmd_OfAsyncWith_result(start, task) {
    const bind = (dispatch) => {
        const builder$0040 = AsyncBuilder_singleton;
        return builder$0040.Delay(() => builder$0040.Bind(task, (_arg1) => {
            const r = _arg1;
            dispatch(r);
            return builder$0040.Zero();
        }));
    };
    return List_singleton((arg) => {
        start(bind(arg));
    });
}

export function Cmd_OfAsync_start(x) {
    prelude_Timer_delay(0, (_arg1) => {
        Async_startImmediate(x);
    });
}

export function Cmd_OfPromise_either(task, arg, ofSuccess, ofError) {
    const bind = (dispatch) => {
        const value_1 = task(arg).then((arg_1) => dispatch(ofSuccess(arg_1))).catch((arg_3) => {
            let arg_2, value;
            return dispatch((arg_2 = arg_3, (ofError((value = arg_2, (value))))));
        });
        void value_1;
    };
    return List_singleton(bind);
}

export function Cmd_OfPromise_perform(task, arg, ofSuccess) {
    const bind = (dispatch) => {
        const value = task(arg).then((arg_1) => dispatch(ofSuccess(arg_1)));
        void value;
    };
    return List_singleton(bind);
}

export function Cmd_OfPromise_attempt(task, arg, ofError) {
    const bind = (dispatch) => {
        const value_1 = task(arg).catch((arg_2) => {
            let arg_1, value;
            dispatch((arg_1 = arg_2, (ofError((value = arg_1, (value))))));
        });
        void value_1;
    };
    return List_singleton(bind);
}

export function Cmd_OfPromise_result(task) {
    const bind = (dispatch) => {
        const value = task.then(dispatch);
        void value;
    };
    return List_singleton(bind);
}

export function Cmd_attemptFunc(task, arg, ofError) {
    return Cmd_OfFunc_attempt(task, arg, ofError);
}

