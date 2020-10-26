import { some as Option_some } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Option.js";
import { Union as Types_Union } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Types.js";
import { union_type as Reflection_union_type, int32_type as Reflection_int32_type, string_type as Reflection_string_type } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Reflection.js";
import { singleton as List_singleton, ofArray as List_ofArray } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/List.js";
import { extractState as remotedev_extractState } from "remotedev";
import { ProgramModule_mapErrorHandler as program_ProgramModule_mapErrorHandler, ProgramModule_map as program_ProgramModule_map, ProgramModule_setState as program_ProgramModule_setState } from "../Fable.Elmish.3.1.0/program.js";
import { last as Array_last } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Array.js";
import { Cmd_batch as cmd_Cmd_batch } from "../Fable.Elmish.3.1.0/cmd.js";
import { curry as Util_curry, uncurry as Util_uncurry } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Util.js";

export function Debugger_showError(msgs) {
    console.error(Option_some("[ELMISH DEBUGGER]"), ...Array.from(msgs));
}

export function Debugger_showWarning(msgs) {
    console.warn(Option_some("[ELMISH DEBUGGER]"), ...Array.from(msgs));
}

export class Debugger_ConnectionOptions extends Types_Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["ViaExtension", "Remote", "Secure"];
    }
}

export function Debugger_ConnectionOptions$reflection() {
    return Reflection_union_type("Elmish.Debug.Debugger.ConnectionOptions", [], Debugger_ConnectionOptions, () => [[], [["address", Reflection_string_type], ["port", Reflection_int32_type]], [["address", Reflection_string_type], ["port", Reflection_int32_type]]]);
}

export function Program_withDebuggerUsing(deflater, inflater, connection, program) {
    const init = (userInit, a) => {
        const patternInput = userInit(a);
        const model = patternInput[0];
        const cmd = patternInput[1];
        connection.init(deflater(model), void 0);
        return [model, cmd];
    };
    const update = (userUpdate, msg, model_1) => {
        const patternInput_1 = userUpdate(msg, model_1);
        const model$0027 = patternInput_1[0];
        const cmd_1 = patternInput_1[1];
        connection.send(msg, deflater(model$0027));
        return [model$0027, cmd_1];
    };
    const subscribe = (userSubscribe, model_2) => {
        const sub = (dispatch) => {
            let value;
            const arg00 = (_arg1) => {
                let msg_1;
                if (msg_1 = _arg1, msg_1.type === "DISPATCH") {
                    const msg_2 = _arg1;
                    try {
                        const matchValue = msg_2.payload.type;
                        switch (matchValue) {
                            case "JUMP_TO_ACTION":
                            case "JUMP_TO_STATE": {
                                const state = inflater(remotedev_extractState(msg_2));
                                program_ProgramModule_setState(program)(state)(dispatch);
                                break;
                            }
                            case "IMPORT_STATE": {
                                let state_1;
                                const array = msg_2.payload.nextLiftedState.computedStates;
                                state_1 = Array_last(array);
                                const state_2 = inflater(state_1.state);
                                program_ProgramModule_setState(program)(state_2)(dispatch);
                                connection.send(null, msg_2.payload.nextLiftedState);
                                break;
                            }
                            default: {
                            }
                        }
                    }
                    catch (ex) {
                        Debugger_showError(List_ofArray(["Unable to process monitor command", ex.message, msg_2]));
                    }
                }
            };
            value = connection.subscribe(arg00);
            void value;
        };
        return cmd_Cmd_batch(List_ofArray([List_singleton(sub), userSubscribe(model_2)]));
    };
    const onError = (userOnError, tupledArg) => {
        const text = tupledArg[0];
        const ex_1 = tupledArg[1];
        userOnError([text, ex_1]);
        connection.error(text + ex_1.message);
    };
    let program_2;
    const program_1 = program;
    program_2 = program_ProgramModule_map(init, update, Util_uncurry(3, (x) => Util_curry(2, x)), Util_uncurry(3, (x_1) => Util_curry(2, x_1)), subscribe, program_1);
    return program_ProgramModule_mapErrorHandler(onError, program_2);
}

