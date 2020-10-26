import { ProgramModule_runWith as program_ProgramModule_runWith, ProgramModule_map as program_ProgramModule_map, ProgramModule_withConsoleTrace as program_ProgramModule_withConsoleTrace, ProgramModule_mkProgram as program_ProgramModule_mkProgram } from "../../.fable/Fable.Elmish.3.1.0/program.js";
import { update as State_update, init as State_init } from "./State.js";
import { view as View_view } from "./View.js";
import { Program_Internal_withReactBatchedUsing as react_Program_Internal_withReactBatchedUsing } from "../../.fable/Fable.Elmish.React.3.0.1/react.js";
import { lazyView2With as common_lazyView2With } from "../../.fable/Fable.Elmish.HMR.4.0.1/common.js";
import { Program_withDebuggerUsing as debugger_Program_withDebuggerUsing, Debugger_ConnectionOptions as debugger_Debugger_ConnectionOptions, Debugger_showWarning as debugger_Debugger_showWarning, Debugger_showError as debugger_Debugger_showError } from "../../.fable/Fable.Elmish.Debugger.3.2.0/debugger.js";
import { empty as List_empty, cons as List_cons, singleton as List_singleton, ofArray as List_ofArray } from "../../.fable/fable-library.3.0.0-nagareyama-beta-003/List.js";
import { empty as Extra_empty } from "../../.fable/Thoth.Json.5.0.0/Extra.js";
import { newGuid as Guid_newGuid } from "../../.fable/fable-library.3.0.0-nagareyama-beta-003/Guid.js";
import { add as Map_add } from "../../.fable/fable-library.3.0.0-nagareyama-beta-003/Map.js";
import { Auto_generateEncoder_Z127D9D79 as Encode_Auto_generateEncoder_Z127D9D79, uint64 as Encode_uint64, int64 as Encode_int64, decimal as Encode_decimal } from "../../.fable/Thoth.Json.5.0.0/Encode.js";
import { fromValue as Decode_fromValue, Auto_generateDecoder_7848D058 as Decode_Auto_generateDecoder_7848D058, uint64 as Decode_uint64, int64 as Decode_int64, decimal as Decode_decimal } from "../../.fable/Thoth.Json.5.0.0/Decode.js";
import { ExtraCoders as Types_ExtraCoders } from "../../.fable/Thoth.Json.5.0.0/Types.js";
import { Model$reflection as Domain_Model$reflection } from "./Domain.js";
import { createObjDebug as Util_createObjDebug, uncurry as Util_uncurry } from "../../.fable/fable-library.3.0.0-nagareyama-beta-003/Util.js";
import { getCaseFields as Reflection_getCaseFields, getCaseName as Reflection_getCaseName, isUnion as Reflection_isUnion } from "../../.fable/fable-library.3.0.0-nagareyama-beta-003/Reflection.js";
import { join as String_join } from "../../.fable/fable-library.3.0.0-nagareyama-beta-003/String.js";
import { Options$1 as Fable$002EImport$002ERemoteDev_Options$1 } from "../../.fable/Fable.Elmish.Debugger.3.2.0/Fable.Import.RemoteDev.js";
import { connectViaExtension as remotedev_connectViaExtension } from "remotedev";
import { Internal_saveState as hmr_Internal_saveState, Model$1 as hmr_Model$1, Msg$1 as hmr_Msg$1, Internal_tryRestoreState as hmr_Internal_tryRestoreState } from "../../.fable/Fable.Elmish.HMR.4.0.1/hmr.js";
import { value as Option_value } from "../../.fable/fable-library.3.0.0-nagareyama-beta-003/Option.js";
import { Cmd_batch as cmd_Cmd_batch, Cmd_none as cmd_Cmd_none, Cmd_map as cmd_Cmd_map } from "../../.fable/Fable.Elmish.3.1.0/cmd.js";

(function () {
    let program_5;
    let program_3;
    let program_1;
    const program = program_ProgramModule_mkProgram(State_init, State_update, View_view);
    program_1 = program_ProgramModule_withConsoleTrace(program);
    program_3 = react_Program_Internal_withReactBatchedUsing(common_lazyView2With, "elmish-app", program_1);
    const program_4 = program_3;
    try {
        let patternInput;
        try {
            let coders;
            let extra_6;
            let extra_3;
            const extra = Extra_empty;
            extra_3 = (new Types_ExtraCoders((() => {
                let copyOfStruct = Guid_newGuid();
                return copyOfStruct;
            })(), (() => {
                const table = extra.Coders;
                return Map_add("System.Decimal", [Encode_decimal, (path) => ((value_1) => Decode_decimal(path, value_1))], table);
            })()));
            extra_6 = (new Types_ExtraCoders((() => {
                let copyOfStruct_1 = Guid_newGuid();
                return copyOfStruct_1;
            })(), (() => {
                const table_1 = extra_3.Coders;
                return Map_add("System.Int64", [Encode_int64, Decode_int64], table_1);
            })()));
            coders = (new Types_ExtraCoders((() => {
                let copyOfStruct_2 = Guid_newGuid();
                return copyOfStruct_2;
            })(), (() => {
                const table_2 = extra_6.Coders;
                return Map_add("System.UInt64", [Encode_uint64, Decode_uint64], table_2);
            })()));
            const encoder_3 = Encode_Auto_generateEncoder_Z127D9D79(void 0, coders, void 0, {
                ResolveType: Domain_Model$reflection,
            });
            const decoder_3 = Decode_Auto_generateDecoder_7848D058(void 0, coders, {
                ResolveType: Domain_Model$reflection,
            });
            const deflate = (x) => {
                try {
                    return encoder_3(x);
                }
                catch (er) {
                    debugger_Debugger_showWarning(List_singleton(er.message));
                    return x;
                }
            };
            const inflate = (x_1) => {
                const matchValue = Decode_fromValue("$", Util_uncurry(2, decoder_3), x_1);
                if (matchValue.tag === 1) {
                    const er_1 = matchValue.fields[0];
                    throw (new Error(er_1));
                }
                else {
                    const x_2 = matchValue.fields[0];
                    return x_2;
                }
            };
            patternInput = [deflate, inflate];
        }
        catch (er_2) {
            debugger_Debugger_showWarning(List_singleton(er_2.message));
            patternInput = [(value_7) => value_7, (_arg1) => {
                throw (new Error("Cannot inflate model"));
            }];
        }
        const inflater = patternInput[1];
        const deflater = patternInput[0];
        let connection;
        const opt = new debugger_Debugger_ConnectionOptions(0);
        const makeMsgObj = (tupledArg) => {
            const case$ = tupledArg[0];
            const fields = tupledArg[1];
            return Util_createObjDebug(List_ofArray([["type", case$], ["msg", fields]]));
        };
        const getCase = (x_3) => {
            if (Reflection_isUnion(x_3)) {
                const getCaseName = (acc_mut, x_4_mut) => {
                    let strings;
                    getCaseName:
                    while (true) {
                        const acc = acc_mut, x_4 = x_4_mut;
                        const acc_1 = List_cons(Reflection_getCaseName(x_4), acc);
                        const fields_1 = Reflection_getCaseFields(x_4);
                        if ((fields_1.length === 1) ? Reflection_isUnion(fields_1[0]) : false) {
                            acc_mut = acc_1;
                            x_4_mut = fields_1[0];
                            continue getCaseName;
                        }
                        else {
                            return makeMsgObj([(strings = acc_1, (String_join("/", strings))), fields_1]);
                        }
                        break;
                    }
                };
                return getCaseName(List_empty(), x_3);
            }
            else {
                return makeMsgObj(["NOT-AN-F#-UNION", x_3]);
            }
        };
        const fallback = new Fable$002EImport$002ERemoteDev_Options$1(true, 443, "remotedev.io", true, getCase);
        let options;
        switch (opt.tag) {
            case 1: {
                const port = opt.fields[1] | 0;
                const address = opt.fields[0];
                const inputRecord_1 = fallback;
                options = (new Fable$002EImport$002ERemoteDev_Options$1(inputRecord_1.remote, port, address, false, inputRecord_1.getActionType));
                break;
            }
            case 2: {
                const port_1 = opt.fields[1] | 0;
                const address_1 = opt.fields[0];
                const inputRecord_2 = fallback;
                options = (new Fable$002EImport$002ERemoteDev_Options$1(inputRecord_2.remote, port_1, address_1, inputRecord_2.secure, inputRecord_2.getActionType));
                break;
            }
            default: {
                options = (new Fable$002EImport$002ERemoteDev_Options$1(false, 8000, "localhost", false, fallback.getActionType));
            }
        }
        connection = remotedev_connectViaExtension(options);
        program_5 = debugger_Program_withDebuggerUsing(deflater, inflater, connection, program_4);
    }
    catch (ex) {
        debugger_Debugger_showError(List_ofArray(["Unable to connect to the monitor, continuing w/o debugger", ex.message]));
        program_5 = program_4;
    }
    let hmrState = null;
    const hot = module.hot;
    if (!(hot == null)) {
        window.Elmish_HMR_Count = ((window.Elmish_HMR_Count == null) ? 0 : (window.Elmish_HMR_Count + 1));
        const value_8 = hot.accept();
        void undefined;
        const matchValue_1 = hmr_Internal_tryRestoreState(hot);
        if (matchValue_1 == null) {
        }
        else {
            const previousState = Option_value(matchValue_1);
            hmrState = previousState;
        }
    }
    const map = (tupledArg_1) => {
        let cmd_1;
        const model_1 = tupledArg_1[0];
        const cmd = tupledArg_1[1];
        return [model_1, (cmd_1 = cmd, (cmd_Cmd_map((arg0) => (new hmr_Msg$1(0, arg0)), cmd_1)))];
    };
    const mapUpdate = (update, msg_1, model_2) => {
        let msg_2, userModel, patternInput_1, newModel, cmd_2;
        const patternInput_2 = map((msg_1.tag === 1) ? [new hmr_Model$1(0), cmd_Cmd_none()] : (msg_2 = msg_1.fields[0], (model_2.tag === 1) ? (userModel = model_2.fields[0], (patternInput_1 = update(msg_2, userModel), (newModel = patternInput_1[0], (cmd_2 = patternInput_1[1], [new hmr_Model$1(1, newModel), cmd_2])))) : [model_2, cmd_Cmd_none()]));
        const newModel_1 = patternInput_2[0];
        const cmd_3 = patternInput_2[1];
        hmrState = newModel_1;
        return [newModel_1, cmd_3];
    };
    const createModel = (tupledArg_2) => {
        const model_3 = tupledArg_2[0];
        const cmd_4 = tupledArg_2[1];
        return [new hmr_Model$1(1, model_3), cmd_4];
    };
    const mapInit = (init) => {
        if (hmrState == null) {
            return (arg_2) => {
                let arg_1;
                return createModel((arg_1 = arg_2, (map(init(arg_1)))));
            };
        }
        else {
            return (_arg1_1) => [hmrState, cmd_Cmd_none()];
        }
    };
    const mapSetState = (setState, model_4, dispatch_2) => {
        if (model_4.tag === 1) {
            const userModel_1 = model_4.fields[0];
            setState(userModel_1, (arg_3) => {
                let arg0_1;
                return dispatch_2((arg0_1 = arg_3, (new hmr_Msg$1(0, arg0_1))));
            });
        }
    };
    let hmrSubscription;
    const handler = (dispatch_3) => {
        if (!(hot == null)) {
            hot.dispose((data) => {
                hmr_Internal_saveState(data, hmrState);
                return dispatch_3(new hmr_Msg$1(1));
            });
        }
    };
    hmrSubscription = List_singleton(handler);
    const mapSubscribe = (subscribe, model_5) => {
        let cmd_5;
        if (model_5.tag === 1) {
            const userModel_2 = model_5.fields[0];
            return cmd_Cmd_batch(List_ofArray([(cmd_5 = subscribe(userModel_2), (cmd_Cmd_map((arg0_2) => (new hmr_Msg$1(0, arg0_2)), cmd_5))), hmrSubscription]));
        }
        else {
            return cmd_Cmd_none();
        }
    };
    const mapView = (view_1, model_6, dispatch_4) => {
        if (model_6.tag === 1) {
            const userModel_3 = model_6.fields[0];
            return view_1(userModel_3, (arg_4) => {
                let arg0_3;
                return dispatch_4((arg0_3 = arg_4, (new hmr_Msg$1(0, arg0_3))));
            });
        }
        else {
            const message = "\nYour are using HMR and this Elmish application has been marked as inactive.\n\nYou should not see this message\n                    ";
            throw (new Error(message));
        }
    };
    let program_9;
    const program_8 = program_5;
    program_9 = program_ProgramModule_map(Util_uncurry(2, mapInit), mapUpdate, mapView, mapSetState, mapSubscribe, program_8);
    program_ProgramModule_runWith(void 0, program_9);
})();

