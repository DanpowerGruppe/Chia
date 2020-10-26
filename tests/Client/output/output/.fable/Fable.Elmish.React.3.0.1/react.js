import * as react$002Ddom from "react-dom";
import { uncurry as Util_uncurry } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Util.js";
import { ProgramModule_withSetState as program_ProgramModule_withSetState, ProgramModule_view as program_ProgramModule_view } from "../Fable.Elmish.3.1.0/program.js";
import { Common_lazyView2With as common_Common_lazyView2With } from "./common.js";

export function Program_Internal_withReactBatchedUsing(lazyView2With, placeholderId, program) {
    let lastRequest = void 0;
    const setState = (model, dispatch) => {
        if (lastRequest != null) {
            const r = lastRequest;
            window.cancelAnimationFrame(r);
        }
        lastRequest = window.requestAnimationFrame((_arg1) => {
            react$002Ddom.render(lazyView2With((x, y) => (x === y), Util_uncurry(2, program_ProgramModule_view(program)), model, dispatch), document.getElementById(placeholderId));
        });
    };
    const program_1 = program;
    return program_ProgramModule_withSetState(setState, program_1);
}

export function Program_Internal_withReactSynchronousUsing(lazyView2With, placeholderId, program) {
    const setState = (model, dispatch) => {
        react$002Ddom.render(lazyView2With((x, y) => (x === y), Util_uncurry(2, program_ProgramModule_view(program)), model, dispatch), document.getElementById(placeholderId));
    };
    const program_1 = program;
    return program_ProgramModule_withSetState(setState, program_1);
}

export function Program_Internal_withReactHydrateUsing(lazyView2With, placeholderId, program) {
    const setState = (model, dispatch) => {
        react$002Ddom.hydrate(lazyView2With((x, y) => (x === y), Util_uncurry(2, program_ProgramModule_view(program)), model, dispatch), document.getElementById(placeholderId));
    };
    const program_1 = program;
    return program_ProgramModule_withSetState(setState, program_1);
}

export function Program_withReactBatched(placeholderId, program) {
    return Program_Internal_withReactBatchedUsing(common_Common_lazyView2With, placeholderId, program);
}

export function Program_withReactSynchronous(placeholderId, program) {
    return Program_Internal_withReactSynchronousUsing(common_Common_lazyView2With, placeholderId, program);
}

export function Program_withReact(placeholderId, program) {
    return Program_Internal_withReactBatchedUsing(common_Common_lazyView2With, placeholderId, program);
}

export function Program_withReactUnoptimized(placeholderId, program) {
    return Program_Internal_withReactSynchronousUsing(common_Common_lazyView2With, placeholderId, program);
}

export function Program_withReactHydrate(placeholderId, program) {
    return Program_Internal_withReactHydrateUsing(common_Common_lazyView2With, placeholderId, program);
}

