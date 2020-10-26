import { Promise_PromiseBuilder__Run_212F1D4B as Promise_Promise_PromiseBuilder__Run_212F1D4B, Promise_PromiseBuilder__Delay_62FBFDE1 as Promise_Promise_PromiseBuilder__Delay_62FBFDE1, PromiseImpl_promise as Promise_PromiseImpl_promise } from "../../Promise.js";
import { class_type as Reflection_class_type } from "../../../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Reflection.js";
import { Choice as Option_Choice } from "../../../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Option.js";
import { equals as Util_equals } from "../../../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Util.js";
import { getEnumerator as Seq_getEnumerator } from "../../../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Seq.js";

export function empty() {
    throw 1;
}

export function singleton(v) {
    throw 1;
}

export function append(seq1, seq2) {
    const builder$0040 = Promise_PromiseImpl_promise;
    throw 1;
}

export class PromiseSeqBuilder {
    constructor() {
    }
}

export function PromiseSeqBuilder$reflection() {
    return Reflection_class_type("Fable.PowerPack.PromiseSeqModule.PromiseSeqBuilder", void 0, PromiseSeqBuilder);
}

export function PromiseSeqBuilder_$ctor() {
    return new PromiseSeqBuilder();
}

export function PromiseSeqBuilder__Yield_1505(x, v) {
    return singleton(v);
}

export function PromiseSeqBuilder__Return(x) {
    return empty();
}

export function PromiseSeqBuilder__YieldFrom_1505(x, s) {
    return s;
}

export function PromiseSeqBuilder__Zero(x) {
    return empty();
}

export function PromiseSeqBuilder__Bind_38DAB843(x, inp, body) {
    throw 1;
}

export function PromiseSeqBuilder__Combine_541DA560(x, seq1, seq2) {
    return append(seq1, seq2);
}

export function PromiseSeqBuilder__While_Z3B1A9DA5(x, gd, seq) {
    if (gd()) {
        return PromiseSeqBuilder__Combine_541DA560(x, seq, PromiseSeqBuilder__Delay_3689BAF1(x, () => PromiseSeqBuilder__While_Z3B1A9DA5(x, gd, seq)));
    }
    else {
        return PromiseSeqBuilder__Zero(x);
    }
}

export function PromiseSeqBuilder__Delay_3689BAF1(x, f) {
    return Promise_Promise_PromiseBuilder__Delay_62FBFDE1(Promise_PromiseImpl_promise, (() => {
        throw 1;
    })());
}

export const promiseSeq = PromiseSeqBuilder_$ctor();

export function tryNext(input) {
    const builder$0040 = Promise_PromiseImpl_promise;
    return Promise_Promise_PromiseBuilder__Run_212F1D4B(builder$0040, Promise_Promise_PromiseBuilder__Delay_62FBFDE1(builder$0040, () => (Promise_Promise_PromiseBuilder__Delay_62FBFDE1(builder$0040, () => {
        throw 1;
    }).catch(((_arg2) => {
        const e = _arg2;
        return Promise.resolve((new Option_Choice(1, e)));
    })))));
}

export function tryWith(input, handler) {
    const builder$0040 = promiseSeq;
    return PromiseSeqBuilder__Delay_3689BAF1(builder$0040, () => PromiseSeqBuilder__Bind_38DAB843(builder$0040, tryNext(input), (_arg1) => {
        const v = _arg1;
        if (v.tag === 1) {
            const rest = v.fields[0];
            return PromiseSeqBuilder__YieldFrom_1505(builder$0040, handler(rest));
        }
        else if (v.fields[0].tag === 1) {
            const h = v.fields[0].fields[0];
            const t = v.fields[0].fields[1];
            return PromiseSeqBuilder__Combine_541DA560(builder$0040, PromiseSeqBuilder__Yield_1505(builder$0040, h), PromiseSeqBuilder__Delay_3689BAF1(builder$0040, () => PromiseSeqBuilder__YieldFrom_1505(builder$0040, (() => {
                throw 1;
            })())));
        }
        else {
            return PromiseSeqBuilder__Zero(builder$0040);
        }
    }));
}

export function tryFinally(input, compensation) {
    const builder$0040 = promiseSeq;
    return PromiseSeqBuilder__Delay_3689BAF1(builder$0040, () => PromiseSeqBuilder__Bind_38DAB843(builder$0040, tryNext(input), (_arg1) => {
        const v = _arg1;
        if (v.tag === 1) {
            const e = v.fields[0];
            compensation();
            return PromiseSeqBuilder__YieldFrom_1505(builder$0040, (() => {
                throw e;
            })());
        }
        else if (v.fields[0].tag === 1) {
            const h = v.fields[0].fields[0];
            const t = v.fields[0].fields[1];
            return PromiseSeqBuilder__Combine_541DA560(builder$0040, PromiseSeqBuilder__Yield_1505(builder$0040, h), PromiseSeqBuilder__Delay_3689BAF1(builder$0040, () => PromiseSeqBuilder__YieldFrom_1505(builder$0040, (() => {
                throw 1;
            })())));
        }
        else {
            compensation();
            return PromiseSeqBuilder__Zero(builder$0040);
        }
    }));
}

export function collect(f, input) {
    const builder$0040 = promiseSeq;
    throw 1;
}

export function PromiseSeqBuilder__TryFinally_2026222D(x, body, compensation) {
    return tryFinally(body, compensation);
}

export function PromiseSeqBuilder__TryWith_Z5E022AD1(x, body, handler) {
    return tryWith(body, handler);
}

export function PromiseSeqBuilder__Using_Z3647408D(x, resource, binder) {
    return tryFinally(binder(resource), () => {
        if (!Util_equals(resource, null)) {
            let copyOfStruct = resource;
            copyOfStruct.Dispose();
        }
    });
}

export function PromiseSeqBuilder__For_35817564(x, seq, action) {
    let cur = null;
    const enum$ = Seq_getEnumerator(seq);
    return PromiseSeqBuilder__While_Z3B1A9DA5(x, () => {
        throw 1;
        return !(() => {
            throw 1;
        })();
    }, PromiseSeqBuilder__Delay_3689BAF1(x, () => action((() => {
        throw 1;
    })())));
}

export function PromiseSeqBuilder__For_65B53893(x, seq, action) {
    return collect(action, seq);
}

export function Fable_PowerPack_Promise_PromiseBuilder__PromiseBuilder_For_Z18855C08(x, seq, action) {
    throw 1;
}

export function mapAsync(f, input) {
    const builder$0040 = promiseSeq;
    throw 1;
}

export function chooseAsync(f, input) {
    const builder$0040 = promiseSeq;
    throw 1;
}

export function filterAsync(f, input) {
    const builder$0040 = promiseSeq;
    return PromiseSeqBuilder__Delay_3689BAF1(builder$0040, () => PromiseSeqBuilder__For_65B53893(builder$0040, input, (_arg1) => {
        const v = _arg1;
        return PromiseSeqBuilder__Bind_38DAB843(builder$0040, f(v), (_arg2) => {
            const b = _arg2;
            return b ? PromiseSeqBuilder__Yield_1505(builder$0040, v) : PromiseSeqBuilder__Zero(builder$0040);
        });
    }));
}

export function lastOrDefault(def, input) {
    const builder$0040 = Promise_PromiseImpl_promise;
    return Promise_Promise_PromiseBuilder__Run_212F1D4B(builder$0040, Promise_Promise_PromiseBuilder__Delay_62FBFDE1(builder$0040, () => {
        throw 1;
    }));
}

export function firstOrDefault(def, input) {
    const builder$0040 = Promise_PromiseImpl_promise;
    return Promise_Promise_PromiseBuilder__Run_212F1D4B(builder$0040, Promise_Promise_PromiseBuilder__Delay_62FBFDE1(builder$0040, () => {
        throw 1;
    }));
}

export function scanAsync(f, state, input) {
    const builder$0040 = promiseSeq;
    return PromiseSeqBuilder__Delay_3689BAF1(builder$0040, () => {
        throw 1;
    });
}

export function iterAsync(f, input) {
    const builder$0040 = Promise_PromiseImpl_promise;
    return Promise_Promise_PromiseBuilder__Run_212F1D4B(builder$0040, Promise_Promise_PromiseBuilder__Delay_62FBFDE1(builder$0040, () => Fable_PowerPack_Promise_PromiseBuilder__PromiseBuilder_For_Z18855C08(builder$0040, input, (_arg1) => {
        const itm = _arg1;
        return f(itm).then((() => (Promise.resolve(undefined))));
    })));
}

export function pairwise(input) {
    const builder$0040 = promiseSeq;
    return PromiseSeqBuilder__Delay_3689BAF1(builder$0040, () => {
        throw 1;
    });
}

export function foldAsync(f, state, input) {
    let input_2;
    const input_1 = input;
    input_2 = scanAsync(f, state, input_1);
    return lastOrDefault(state, input_2);
}

export function fold(f, state, input) {
    return foldAsync((st, v) => {
        const arg00 = f(st, v);
        return Promise.resolve(arg00);
    }, state, input);
}

export function scan(f, state, input) {
    return scanAsync((st, v) => {
        const arg00 = f(st, v);
        return Promise.resolve(arg00);
    }, state, input);
}

export function map(f, input) {
    return mapAsync((arg) => {
        const arg00 = f(arg);
        return Promise.resolve(arg00);
    }, input);
}

export function iter(f, input) {
    return iterAsync((arg) => {
        const arg00 = f(arg);
        return Promise.resolve(undefined);
    }, input);
}

export function choose(f, input) {
    return chooseAsync((arg) => {
        const arg00 = f(arg);
        return Promise.resolve(arg00);
    }, input);
}

export function filter(f, input) {
    return filterAsync((arg) => {
        const arg00 = f(arg);
        return Promise.resolve(arg00);
    }, input);
}

export function takeWhileAsync(p, input) {
    const builder$0040 = Promise_PromiseImpl_promise;
    throw 1;
}

export function skipWhileAsync(p, input) {
    const builder$0040 = Promise_PromiseImpl_promise;
    throw 1;
}

export function takeWhile(p, input) {
    return takeWhileAsync((arg) => {
        const arg00 = p(arg);
        return Promise.resolve(arg00);
    }, input);
}

export function skipWhile(p, input) {
    return skipWhileAsync((arg) => {
        const arg00 = p(arg);
        return Promise.resolve(arg00);
    }, input);
}

export function take(count, input) {
    const builder$0040 = Promise_PromiseImpl_promise;
    throw 1;
}

export function skip(count, input) {
    const builder$0040 = Promise_PromiseImpl_promise;
    throw 1;
}

