import { Record as Types_Record } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Types.js";
import { array_type as Reflection_array_type, record_type as Reflection_record_type, option_type as Reflection_option_type, lambda_type as Reflection_lambda_type, obj_type as Reflection_obj_type, string_type as Reflection_string_type, int32_type as Reflection_int32_type, bool_type as Reflection_bool_type } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Reflection.js";

export class Options$1 extends Types_Record {
    constructor(remote, port, hostname, secure, getActionType) {
        super();
        this.remote = remote;
        this.port = (port | 0);
        this.hostname = hostname;
        this.secure = secure;
        this.getActionType = getActionType;
    }
}

export function Options$1$reflection(gen0) {
    return Reflection_record_type("Fable.Import.RemoteDev.Options`1", [gen0], Options$1, () => [["remote", Reflection_bool_type], ["port", Reflection_int32_type], ["hostname", Reflection_string_type], ["secure", Reflection_bool_type], ["getActionType", Reflection_option_type(Reflection_lambda_type(gen0, Reflection_obj_type))]]);
}

export class Action extends Types_Record {
    constructor(type, fields) {
        super();
        this.type = type;
        this.fields = fields;
    }
}

export function Action$reflection() {
    return Reflection_record_type("Fable.Import.RemoteDev.Action", [], Action, () => [["type", Reflection_string_type], ["fields", Reflection_array_type(Reflection_obj_type)]]);
}

export class LiftedState extends Types_Record {
    constructor(actionsById, computedStates, currentStateIndex, nextActionId) {
        super();
        this.actionsById = actionsById;
        this.computedStates = computedStates;
        this.currentStateIndex = (currentStateIndex | 0);
        this.nextActionId = (nextActionId | 0);
    }
}

export function LiftedState$reflection() {
    return Reflection_record_type("Fable.Import.RemoteDev.LiftedState", [], LiftedState, () => [["actionsById", Reflection_array_type(Action$reflection())], ["computedStates", Reflection_array_type(Reflection_obj_type)], ["currentStateIndex", Reflection_int32_type], ["nextActionId", Reflection_int32_type]]);
}

export class Payload extends Types_Record {
    constructor(nextLiftedState, type) {
        super();
        this.nextLiftedState = nextLiftedState;
        this.type = type;
    }
}

export function Payload$reflection() {
    return Reflection_record_type("Fable.Import.RemoteDev.Payload", [], Payload, () => [["nextLiftedState", LiftedState$reflection()], ["type", Reflection_string_type]]);
}

export class Msg extends Types_Record {
    constructor(state, action, type, payload) {
        super();
        this.state = state;
        this.action = action;
        this.type = type;
        this.payload = payload;
    }
}

export function Msg$reflection() {
    return Reflection_record_type("Fable.Import.RemoteDev.Msg", [], Msg, () => [["state", Reflection_string_type], ["action", Reflection_obj_type], ["type", Reflection_string_type], ["payload", Payload$reflection()]]);
}

