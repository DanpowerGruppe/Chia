import { ProgramModule_runWith, ProgramModule_map, ProgramModule_withConsoleTrace, ProgramModule_mkProgram } from "../../.fable/Fable.Elmish.3.1.0/program.fs.js";
import { update as update_1, init as init_1 } from "./State.js";
import { view as view_2 } from "./View.js";
import { Program_Internal_withReactBatchedUsing } from "../../.fable/Fable.Elmish.React.3.0.1/react.fs.js";
import { lazyView2With } from "../../.fable/Fable.Elmish.HMR.4.0.1/common.fs.js";
import { Program_withDebuggerUsing, Debugger_ConnectionOptions, Debugger_showWarning, Debugger_showError } from "../../.fable/Fable.Elmish.Debugger.3.2.0/debugger.fs.js";
import { empty as empty_1, cons, singleton, ofArray } from "../../.fable/fable-library.3.0.0-nagareyama-rc-007/List.js";
import { newGuid } from "../../.fable/fable-library.3.0.0-nagareyama-rc-007/Guid.js";
import { add } from "../../.fable/fable-library.3.0.0-nagareyama-rc-007/Map.js";
import { Auto_generateEncoder_Z127D9D79, uint64, int64, decimal } from "../../.fable/Thoth.Json.5.0.0/Encode.fs.js";
import { fromValue, Auto_generateDecoder_7848D058, uint64 as uint64_1, int64 as int64_1, decimal as decimal_1 } from "../../.fable/Thoth.Json.5.0.0/Decode.fs.js";
import { empty } from "../../.fable/Thoth.Json.5.0.0/Extra.fs.js";
import { ExtraCoders } from "../../.fable/Thoth.Json.5.0.0/Types.fs.js";
import { Model$reflection } from "./Domain.js";
import { createObj, uncurry } from "../../.fable/fable-library.3.0.0-nagareyama-rc-007/Util.js";
import { getCaseFields, getCaseName as getCaseName_1, isUnion } from "../../.fable/fable-library.3.0.0-nagareyama-rc-007/Reflection.js";
import { join } from "../../.fable/fable-library.3.0.0-nagareyama-rc-007/String.js";
import { Options$1 } from "../../.fable/Fable.Elmish.Debugger.3.2.0/Fable.Import.RemoteDev.fs.js";
import { connectViaExtension } from "remotedev";
import { Internal_saveState, Model$1, Msg$1, Internal_tryRestoreState } from "../../.fable/Fable.Elmish.HMR.4.0.1/hmr.fs.js";
import { value as value_9 } from "../../.fable/fable-library.3.0.0-nagareyama-rc-007/Option.js";
import { Cmd_batch, Cmd_none, Cmd_map } from "../../.fable/Fable.Elmish.3.1.0/cmd.fs.js";

(function () {
    let program_5;
    let program_3;
    let program_1;
    const program = ProgramModule_mkProgram(init_1, update_1, view_2);
    program_1 = ProgramModule_withConsoleTrace(program);
    program_3 = Program_Internal_withReactBatchedUsing(lazyView2With, "elmish-app", program_1);
    const program_4 = program_3;
    try {
        let patternInput;
        try {
            let coders;
            let extra_6;
            let extra_3;
            extra_3 = (new ExtraCoders((() => {
                let copyOfStruct = newGuid();
                return copyOfStruct;
            })(), (() => add("System.Decimal", [decimal, (path) => ((value_1) => decimal_1(path, value_1))], empty.Coders))()));
            extra_6 = (new ExtraCoders((() => {
                let copyOfStruct_1 = newGuid();
                return copyOfStruct_1;
            })(), (() => add("System.Int64", [int64, int64_1], extra_3.Coders))()));
            coders = (new ExtraCoders((() => {
                let copyOfStruct_2 = newGuid();
                return copyOfStruct_2;
            })(), (() => add("System.UInt64", [uint64, uint64_1], extra_6.Coders))()));
            const encoder_3 = Auto_generateEncoder_Z127D9D79(void 0, coders, void 0, {
                ResolveType: Model$reflection,
            });
            const decoder_3 = Auto_generateDecoder_7848D058(void 0, coders, {
                ResolveType: Model$reflection,
            });
            const deflate = (x) => {
                try {
                    return encoder_3(x);
                }
                catch (er) {
                    Debugger_showWarning(singleton(er.message));
                    return x;
                }
            };
            const inflate = (x_1) => {
                const matchValue = fromValue("$", uncurry(2, decoder_3), x_1);
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
            Debugger_showWarning(singleton(er_2.message));
            patternInput = [(value_7) => value_7, (_arg1) => {
                throw (new Error("Cannot inflate model"));
            }];
        }
        const inflater = patternInput[1];
        const deflater = patternInput[0];
        let connection;
        const opt = new Debugger_ConnectionOptions(0);
        const makeMsgObj = (tupledArg) => {
            const case$ = tupledArg[0];
            const fields = tupledArg[1];
            return createObj(ofArray([["type", case$], ["msg", fields]]));
        };
        const getCase = (x_3) => {
            if (isUnion(x_3)) {
                const getCaseName = (acc_mut, x_4_mut) => {
                    getCaseName:
                    while (true) {
                        const acc = acc_mut, x_4 = x_4_mut;
                        const acc_1 = cons(getCaseName_1(x_4), acc);
                        const fields_1 = getCaseFields(x_4);
                        if ((fields_1.length === 1) ? isUnion(fields_1[0]) : false) {
                            acc_mut = acc_1;
                            x_4_mut = fields_1[0];
                            continue getCaseName;
                        }
                        else {
                            return makeMsgObj([(join("/", acc_1)), fields_1]);
                        }
                        break;
                    }
                };
                return getCaseName(empty_1(), x_3);
            }
            else {
                return makeMsgObj(["NOT-AN-F#-UNION", x_3]);
            }
        };
        const fallback = new Options$1(true, 443, "remotedev.io", true, getCase);
        let options;
        switch (opt.tag) {
            case 1: {
                const port = opt.fields[1] | 0;
                const address = opt.fields[0];
                const inputRecord_1 = fallback;
                options = (new Options$1(inputRecord_1.remote, port, address, false, inputRecord_1.getActionType));
                break;
            }
            case 2: {
                const port_1 = opt.fields[1] | 0;
                const address_1 = opt.fields[0];
                const inputRecord_2 = fallback;
                options = (new Options$1(inputRecord_2.remote, port_1, address_1, inputRecord_2.secure, inputRecord_2.getActionType));
                break;
            }
            default: {
                options = (new Options$1(false, 8000, "localhost", false, fallback.getActionType));
            }
        }
        connection = connectViaExtension(options);
        program_5 = Program_withDebuggerUsing(deflater, inflater, connection, program_4);
    }
    catch (ex) {
        Debugger_showError(ofArray(["Unable to connect to the monitor, continuing w/o debugger", ex.message]));
        program_5 = program_4;
    }
    let hmrState = null;
    const hot = module.hot;
    if (!(hot == null)) {
        window.Elmish_HMR_Count = ((window.Elmish_HMR_Count == null) ? 0 : (window.Elmish_HMR_Count + 1));
        const value_8 = hot.accept();
        void undefined;
        const matchValue_1 = Internal_tryRestoreState(hot);
        if (matchValue_1 == null) {
        }
        else {
            const previousState = value_9(matchValue_1);
            hmrState = previousState;
        }
    }
    const map = (tupledArg_1) => {
        const model_1 = tupledArg_1[0];
        const cmd = tupledArg_1[1];
        return [model_1, (Cmd_map((arg0) => (new Msg$1(0, arg0)), cmd))];
    };
    const mapUpdate = (update, msg_1, model_2) => {
        let msg_2, userModel, patternInput_1, newModel, cmd_2;
        const patternInput_2 = map((msg_1.tag === 1) ? [new Model$1(0), Cmd_none()] : (msg_2 = msg_1.fields[0], (model_2.tag === 1) ? (userModel = model_2.fields[0], (patternInput_1 = update(msg_2, userModel), (newModel = patternInput_1[0], (cmd_2 = patternInput_1[1], [new Model$1(1, newModel), cmd_2])))) : [model_2, Cmd_none()]));
        const newModel_1 = patternInput_2[0];
        const cmd_3 = patternInput_2[1];
        hmrState = newModel_1;
        return [newModel_1, cmd_3];
    };
    const createModel = (tupledArg_2) => {
        const model_3 = tupledArg_2[0];
        const cmd_4 = tupledArg_2[1];
        return [new Model$1(1, model_3), cmd_4];
    };
    const mapInit = (init) => {
        if (hmrState == null) {
            return (arg_2) => createModel((map(init(arg_2))));
        }
        else {
            return (_arg1_1) => [hmrState, Cmd_none()];
        }
    };
    const mapSetState = (setState, model_4, dispatch_2) => {
        if (model_4.tag === 1) {
            const userModel_1 = model_4.fields[0];
            setState(userModel_1, (arg_3) => dispatch_2((new Msg$1(0, arg_3))));
        }
    };
    let hmrSubscription;
    const handler = (dispatch_3) => {
        if (!(hot == null)) {
            hot.dispose((data) => {
                Internal_saveState(data, hmrState);
                return dispatch_3(new Msg$1(1));
            });
        }
    };
    hmrSubscription = singleton(handler);
    const mapSubscribe = (subscribe, model_5) => {
        let cmd_5;
        if (model_5.tag === 1) {
            const userModel_2 = model_5.fields[0];
            return Cmd_batch(ofArray([(cmd_5 = subscribe(userModel_2), (Cmd_map((arg0_2) => (new Msg$1(0, arg0_2)), cmd_5))), hmrSubscription]));
        }
        else {
            return Cmd_none();
        }
    };
    const mapView = (view_1, model_6, dispatch_4) => {
        if (model_6.tag === 1) {
            const userModel_3 = model_6.fields[0];
            return view_1(userModel_3, (arg_4) => dispatch_4((new Msg$1(0, arg_4))));
        }
        else {
            throw (new Error("\nYour are using HMR and this Elmish application has been marked as inactive.\n\nYou should not see this message\n                    "));
        }
    };
    let program_9;
    program_9 = ProgramModule_map(uncurry(2, mapInit), mapUpdate, mapView, mapSetState, mapSubscribe, program_5);
    ProgramModule_runWith(void 0, program_9);
})();

