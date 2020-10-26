import { some as Option_some } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Option.js";
import Timer from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Timer.js";
import { add as Observable_add } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Observable.js";

export function Log_onError(text, ex) {
    console.error(Option_some(text), ex);
}

export function Log_toConsole(text, o) {
    console.log(Option_some(text), o);
}

export function Timer_delay(interval, callback) {
    let t;
    let returnVal = new Timer(interval);
    returnVal.AutoReset = false;
    t = returnVal;
    Observable_add(callback, t.Elapsed);
    t.Enabled = true;
    t.Start();
}

