import { Union as Types_Union } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Types.js";
import { union_type as Reflection_union_type } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Reflection.js";
import { some as Option_some } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Option.js";

export class Internal_Platform extends Types_Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["Browser", "ReactNative"];
    }
}

export function Internal_Platform$reflection() {
    return Reflection_union_type("Elmish.HMR.Program.Internal.Platform", [], Internal_Platform, () => [[], []]);
}

export const Internal_platform = (() => {
    const matchValue = window.navigator.product;
    return (matchValue === "ReactNative") ? (new Internal_Platform(1)) : (new Internal_Platform(0));
})();

export function Internal_tryRestoreState(hot) {
    if (Internal_platform.tag === 0) {
        const data = hot.data;
        if ((!(data == null)) ? (!(data.hmrState == null)) : false) {
            return Option_some(data.hmrState);
        }
        else {
            return void 0;
        }
    }
    else {
        const hmrState = window.react_native_elmish_hmr_state;
        if (!(hmrState == null)) {
            return Option_some(hmrState);
        }
        else {
            return void 0;
        }
    }
}

export function Internal_saveState(data, hmrState) {
    if (Internal_platform.tag === 0) {
        data.hmrState = hmrState;
    }
    else {
        window.react_native_elmish_hmr_state = hmrState;
    }
}

export class Msg$1 extends Types_Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["UserMsg", "Stop"];
    }
}

export function Msg$1$reflection(gen0) {
    return Reflection_union_type("Elmish.HMR.Program.Msg`1", [gen0], Msg$1, () => [[["Item", gen0]], []]);
}

export class Model$1 extends Types_Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["Inactive", "Active"];
    }
}

export function Model$1$reflection(gen0) {
    return Reflection_union_type("Elmish.HMR.Program.Model`1", [gen0], Model$1, () => [[], [["Item", gen0]]]);
}

