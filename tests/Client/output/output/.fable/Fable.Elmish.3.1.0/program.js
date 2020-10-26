import { Record as Types_Record } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Types.js";
import { record_type as Reflection_record_type, class_type as Reflection_class_type, string_type as Reflection_string_type, tuple_type as Reflection_tuple_type, list_type as Reflection_list_type, lambda_type as Reflection_lambda_type, unit_type as Reflection_unit_type } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Reflection.js";
import { Cmd_exec as cmd_Cmd_exec, Cmd_batch as cmd_Cmd_batch, Cmd_none as cmd_Cmd_none } from "./cmd.js";
import { Log_toConsole as prelude_Log_toConsole, Log_onError as prelude_Log_onError } from "./prelude.js";
import { curry as Util_curry, partialApply as Util_partialApply, uncurry as Util_uncurry } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Util.js";
import { ofArray as List_ofArray } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/List.js";
import { RingBuffer$1__Pop as ring_RingBuffer$1__Pop, RingBuffer$1__Push_2B595 as ring_RingBuffer$1__Push_2B595, RingBuffer$1_$ctor_Z524259A4 as ring_RingBuffer$1_$ctor_Z524259A4 } from "./ring.js";
import { value as Option_value, some as Option_some } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Option.js";
import { printf as String_printf, toText as String_toText } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/String.js";

export class Program$4 extends Types_Record {
    constructor(init, update, subscribe, view, setState, onError, syncDispatch) {
        super();
        this.init = init;
        this.update = update;
        this.subscribe = subscribe;
        this.view = view;
        this.setState = setState;
        this.onError = onError;
        this.syncDispatch = syncDispatch;
    }
}

export function Program$4$reflection(gen0, gen1, gen2, gen3) {
    return Reflection_record_type("Elmish.Program`4", [gen0, gen1, gen2, gen3], Program$4, () => [["init", Reflection_lambda_type(gen0, Reflection_tuple_type(gen1, Reflection_list_type(Reflection_lambda_type(Reflection_lambda_type(gen2, Reflection_unit_type), Reflection_unit_type))))], ["update", Reflection_lambda_type(gen2, Reflection_lambda_type(gen1, Reflection_tuple_type(gen1, Reflection_list_type(Reflection_lambda_type(Reflection_lambda_type(gen2, Reflection_unit_type), Reflection_unit_type)))))], ["subscribe", Reflection_lambda_type(gen1, Reflection_list_type(Reflection_lambda_type(Reflection_lambda_type(gen2, Reflection_unit_type), Reflection_unit_type)))], ["view", Reflection_lambda_type(gen1, Reflection_lambda_type(Reflection_lambda_type(gen2, Reflection_unit_type), gen3))], ["setState", Reflection_lambda_type(gen1, Reflection_lambda_type(Reflection_lambda_type(gen2, Reflection_unit_type), Reflection_unit_type))], ["onError", Reflection_lambda_type(Reflection_tuple_type(Reflection_string_type, Reflection_class_type("System.Exception")), Reflection_unit_type)], ["syncDispatch", Reflection_lambda_type(Reflection_lambda_type(gen2, Reflection_unit_type), Reflection_lambda_type(gen2, Reflection_unit_type))]]);
}

export function ProgramModule_mkProgram(init, update, view) {
    return new Program$4(init, update, (_arg1) => cmd_Cmd_none(), view, (model, arg) => {
        const value = view(model, arg);
        void value;
    }, (tupledArg) => {
        prelude_Log_onError(tupledArg[0], tupledArg[1]);
    }, Util_uncurry(2, (x) => x));
}

export function ProgramModule_mkSimple(init, update, view) {
    return new Program$4((arg) => {
        const state = init(arg);
        return [state, cmd_Cmd_none()];
    }, (msg, arg_1) => {
        const state_1 = update(msg, arg_1);
        return [state_1, cmd_Cmd_none()];
    }, (_arg1) => cmd_Cmd_none(), view, (model, arg_2) => {
        const value = view(model, arg_2);
        void value;
    }, (tupledArg) => {
        prelude_Log_onError(tupledArg[0], tupledArg[1]);
    }, Util_uncurry(2, (x) => x));
}

export function ProgramModule_withSubscription(subscribe, program) {
    const sub = (model) => cmd_Cmd_batch(List_ofArray([program.subscribe(model), subscribe(model)]));
    return new Program$4(program.init, program.update, sub, program.view, program.setState, program.onError, program.syncDispatch);
}

export function ProgramModule_withConsoleTrace(program) {
    const traceInit = (arg) => {
        const patternInput = program.init(arg);
        const initModel = patternInput[0];
        const cmd = patternInput[1];
        prelude_Log_toConsole("Initial state:", initModel);
        return [initModel, cmd];
    };
    const traceUpdate = (msg, model) => {
        prelude_Log_toConsole("New message:", msg);
        const patternInput_1 = program.update(msg, model);
        const newModel = patternInput_1[0];
        const cmd_1 = patternInput_1[1];
        prelude_Log_toConsole("Updated state:", newModel);
        return [newModel, cmd_1];
    };
    return new Program$4(traceInit, traceUpdate, program.subscribe, program.view, program.setState, program.onError, program.syncDispatch);
}

export function ProgramModule_withTrace(trace, program) {
    const update = (msg, model) => {
        const patternInput = program.update(msg, model);
        const state = patternInput[0];
        const cmd = patternInput[1];
        trace(msg, state);
        return [state, cmd];
    };
    return new Program$4(program.init, update, program.subscribe, program.view, program.setState, program.onError, program.syncDispatch);
}

export function ProgramModule_withErrorHandler(onError, program) {
    return new Program$4(program.init, program.update, program.subscribe, program.view, program.setState, onError, program.syncDispatch);
}

export function ProgramModule_mapErrorHandler(map, program) {
    const onError = Util_partialApply(1, map, [program.onError]);
    return new Program$4(program.init, program.update, program.subscribe, program.view, program.setState, onError, program.syncDispatch);
}

export function ProgramModule_onError(program) {
    return program.onError;
}

export function ProgramModule_withSetState(setState, program) {
    return new Program$4(program.init, program.update, program.subscribe, program.view, setState, program.onError, program.syncDispatch);
}

export function ProgramModule_setState(program) {
    return Util_curry(2, program.setState);
}

export function ProgramModule_view(program) {
    return Util_curry(2, program.view);
}

export function ProgramModule_withSyncDispatch(syncDispatch, program) {
    return new Program$4(program.init, program.update, program.subscribe, program.view, program.setState, program.onError, syncDispatch);
}

export function ProgramModule_map(mapInit, mapUpdate, mapView, mapSetState, mapSubscribe, program) {
    const init = Util_partialApply(1, mapInit, [program.init]);
    const update = Util_partialApply(2, mapUpdate, [program.update]);
    const view = Util_partialApply(2, mapView, [program.view]);
    const setState = Util_partialApply(2, mapSetState, [program.setState]);
    return new Program$4(init, Util_uncurry(2, update), Util_partialApply(1, mapSubscribe, [program.subscribe]), Util_uncurry(2, view), Util_uncurry(2, setState), program.onError, Util_uncurry(2, (x) => x));
}

export function ProgramModule_runWith(arg, program) {
    const patternInput = program.init(arg);
    const model = patternInput[0];
    const cmd = patternInput[1];
    const rb = ring_RingBuffer$1_$ctor_Z524259A4(10);
    let reentered = false;
    let state = model;
    const dispatch = (msg) => {
        let arg10_1, clo1_1;
        if (reentered) {
            ring_RingBuffer$1__Push_2B595(rb, msg);
        }
        else {
            reentered = true;
            let nextMsg = Option_some(msg);
            while (nextMsg != null) {
                const msg_1 = Option_value(nextMsg);
                try {
                    const patternInput_1 = program.update(msg_1, state);
                    const model$0027 = patternInput_1[0];
                    const cmd$0027 = patternInput_1[1];
                    program.setState(model$0027, syncDispatch);
                    const cmd_1 = cmd$0027;
                    cmd_Cmd_exec((ex) => {
                        let arg10, clo1;
                        program.onError([(arg10 = msg_1, (clo1 = String_toText(String_printf("Error in command while handling: %A")), clo1(arg10))), ex]);
                    }, syncDispatch, cmd_1);
                    state = model$0027;
                }
                catch (ex_1) {
                    program.onError([(arg10_1 = msg_1, (clo1_1 = String_toText(String_printf("Unable to process the message: %A")), clo1_1(arg10_1))), ex_1]);
                }
                nextMsg = ring_RingBuffer$1__Pop(rb);
            }
            reentered = false;
        }
    };
    const syncDispatch = Util_partialApply(1, program.syncDispatch, [dispatch]);
    program.setState(model, syncDispatch);
    let sub;
    try {
        sub = program.subscribe(model);
    }
    catch (ex_2) {
        program.onError(["Unable to subscribe:", ex_2]);
        sub = cmd_Cmd_none();
    }
    const cmd_2 = cmd_Cmd_batch(List_ofArray([sub, cmd]));
    cmd_Cmd_exec((ex_3) => {
        program.onError(["Error intitializing:", ex_3]);
    }, syncDispatch, cmd_2);
}

export function ProgramModule_run(program) {
    ProgramModule_runWith(void 0, program);
}

