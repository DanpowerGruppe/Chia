import { Union as Types_Union, Record as Types_Record } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Types.js";
import { union_type as Reflection_union_type, record_type as Reflection_record_type, class_type as Reflection_class_type, int32_type as Reflection_int32_type, string_type as Reflection_string_type } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Reflection.js";
import { remove as Map_remove, add as Map_add, tryFind as Map_tryFind, empty as Map_empty } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Map.js";
import { comparePrimitives as Util_comparePrimitives } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Util.js";
import { defaultArg as Option_defaultArg, map as Option_map } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Option.js";
import { Promise_PromiseBuilder__Delay_62FBFDE1 as Promise_Promise_PromiseBuilder__Delay_62FBFDE1, Promise_PromiseBuilder__Run_212F1D4B as Promise_Promise_PromiseBuilder__Run_212F1D4B, PromiseImpl_promise as Promise_PromiseImpl_promise } from "../Fable.PowerPack.3.0.0/Promise.js";
import { Cmd_none as cmd_Cmd_none, Cmd_OfFunc_result as cmd_Cmd_OfFunc_result, Cmd_OfPromise_either as cmd_Cmd_OfPromise_either } from "../Fable.Elmish.3.1.0/cmd.js";

export class State extends Types_Record {
    constructor(PendingMessages) {
        super();
        this.PendingMessages = PendingMessages;
    }
}

export function State$reflection() {
    return Reflection_record_type("Thoth.Elmish.Debouncer.State", [], State, () => [["PendingMessages", Reflection_class_type("Microsoft.FSharp.Collections.FSharpMap`2", [Reflection_string_type, Reflection_int32_type])]]);
}

export function create() {
    return new State(Map_empty({
        Compare: Util_comparePrimitives,
    }));
}

export class SelfMessage$1 extends Types_Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["Timeout", "OnError"];
    }
}

export function SelfMessage$1$reflection(gen0) {
    return Reflection_union_type("Thoth.Elmish.Debouncer.SelfMessage`1", [gen0], SelfMessage$1, () => [[["id", Reflection_string_type], ["appMsg", gen0]], [["Item", Reflection_class_type("System.Exception")]]]);
}

export function bounce(delay, id, msgToSend, currentState) {
    const counterInc = (arg) => {
        let option_1;
        const option = arg;
        option_1 = Option_map((y) => (1 + y), option);
        return Option_defaultArg(option_1, 1) | 0;
    };
    const delayedCmd = (_arg1) => {
        const builder$0040 = Promise_PromiseImpl_promise;
        return Promise_Promise_PromiseBuilder__Run_212F1D4B(builder$0040, Promise_Promise_PromiseBuilder__Delay_62FBFDE1(builder$0040, () => ((new Promise(resolve => setTimeout(resolve, (~(~delay))))).then((() => (Promise.resolve([id, msgToSend])))))));
    };
    let updatedState;
    const newCounter = counterInc(Map_tryFind(id, currentState.PendingMessages)) | 0;
    updatedState = (new State(Map_add(id, newCounter, currentState.PendingMessages)));
    return [updatedState, cmd_Cmd_OfPromise_either(delayedCmd, void 0, (tupledArg) => (new SelfMessage$1(0, tupledArg[0], tupledArg[1])), (arg0_1) => (new SelfMessage$1(1, arg0_1)))];
}

export function update(selfMessage, currentState) {
    let option;
    if (selfMessage.tag === 0) {
        const id = selfMessage.fields[0];
        const appMsg = selfMessage.fields[1];
        const remainingMessages = ((option = Map_tryFind(id, currentState.PendingMessages), (Option_defaultArg(option, 0))) - 1) | 0;
        if (remainingMessages === 0) {
            return [new State(Map_remove(id, currentState.PendingMessages)), cmd_Cmd_OfFunc_result(appMsg)];
        }
        else if (remainingMessages > 0) {
            return [new State(Map_add(id, remainingMessages, currentState.PendingMessages)), cmd_Cmd_none()];
        }
        else {
            console.warn("Invalid debouncer state: there was no state information for the supplier id");
            return [currentState, cmd_Cmd_none()];
        }
    }
    else {
        const error = selfMessage.fields[0];
        console.error(error.message);
        return [currentState, cmd_Cmd_none()];
    }
}

