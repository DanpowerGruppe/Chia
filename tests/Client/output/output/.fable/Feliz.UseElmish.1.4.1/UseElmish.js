import { Union as Types_Union } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Types.js";
import { class_type as Reflection_class_type, union_type as Reflection_union_type, int32_type as Reflection_int32_type, array_type as Reflection_array_type } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Reflection.js";
import { fill as Array_fill } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Array.js";
import { isDisposable as Util_isDisposable, comparePrimitives as Util_comparePrimitives, max as Util_max } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Util.js";
import { toArray as Option_toArray, value as Option_value, some as Option_some } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Option.js";
import { iterate as Seq_iterate, rangeNumber as Seq_rangeNumber, singleton as Seq_singleton, collect as Seq_collect, take as Seq_take, skip as Seq_skip, append as Seq_append, delay as Seq_delay } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Seq.js";
import { React_useMemo_CF4EA67 as React_React_useMemo_CF4EA67, React_useEffect_3A5B6456 as React_React_useEffect_3A5B6456, React_useEffect_Z101E1A95 as React_React_useEffect_Z101E1A95, React_useEffect_Z5234A374 as React_React_useEffect_Z5234A374, React_useCallbackRef_7C4B0DD6 as React_React_useCallbackRef_7C4B0DD6, React_createDisposable_3A5B6456 as React_React_createDisposable_3A5B6456, React_useEffectOnce_Z5ECA432F as React_React_useEffectOnce_Z5ECA432F, Feliz_React__React_useState_Static_1505 as React_Feliz_React__React_useState_Static_1505, React_useRef_1505 as React_React_useRef_1505 } from "../Feliz.1.16.0/React.js";
import { isCancellationRequested as Async_isCancellationRequested, cancel as Async_cancel, createCancellationToken as Async_createCancellationToken } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Async.js";
import { promise as PromiseImpl_promise } from "../Fable.Promise.2.1.0/PromiseImpl.js";
import { PromiseBuilder__While_2044D34 as Promise_PromiseBuilder__While_2044D34, PromiseBuilder__Delay_62FBFDE1 as Promise_PromiseBuilder__Delay_62FBFDE1, PromiseBuilder__Run_212F1D4B as Promise_PromiseBuilder__Run_212F1D4B } from "../Fable.Promise.2.1.0/Promise.js";
import { iterate as List_iterate } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/List.js";

export class RingState$1 extends Types_Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["Writable", "ReadWritable"];
    }
}

export function RingState$1$reflection(gen0) {
    return Reflection_union_type("Feliz.UseElmish.RingState`1", [gen0], RingState$1, () => [[["wx", Reflection_array_type(gen0)], ["ix", Reflection_int32_type]], [["rw", Reflection_array_type(gen0)], ["wix", Reflection_int32_type], ["rix", Reflection_int32_type]]]);
}

export class RingBuffer$1 {
    constructor(size) {
        this.state = (new RingState$1(0, Array_fill(new Array(Util_max(Util_comparePrimitives, size, 10)), 0, Util_max(Util_comparePrimitives, size, 10), null), 0));
    }
}

export function RingBuffer$1$reflection(gen0) {
    return Reflection_class_type("Feliz.UseElmish.RingBuffer`1", [gen0], RingBuffer$1);
}

export function RingBuffer$1_$ctor_Z524259A4(size) {
    return new RingBuffer$1(size);
}

export function RingBuffer$1__Pop(_) {
    const matchValue = _.state;
    if (matchValue.tag === 1) {
        const wix = matchValue.fields[1] | 0;
        const rix = matchValue.fields[2] | 0;
        const items = matchValue.fields[0];
        const rix$0027 = ((rix + 1) % items.length) | 0;
        const matchValue_1 = rix$0027 === wix;
        if (matchValue_1) {
            _.state = (new RingState$1(0, items, wix));
        }
        else {
            _.state = (new RingState$1(1, items, wix, rix$0027));
        }
        return Option_some(items[rix]);
    }
    else {
        return void 0;
    }
}

export function RingBuffer$1__Push_2B595(_, item) {
    let items_2;
    const matchValue = _.state;
    if (matchValue.tag === 1) {
        const wix_1 = matchValue.fields[1] | 0;
        const rix = matchValue.fields[2] | 0;
        const items_1 = matchValue.fields[0];
        items_1[wix_1] = item;
        const wix$0027 = ((wix_1 + 1) % items_1.length) | 0;
        const matchValue_1 = wix$0027 === rix;
        if (matchValue_1) {
            _.state = (new RingState$1(1, (items_2 = items_1, (RingBuffer$1__doubleSize(_, rix, items_2))), items_1.length, 0));
        }
        else {
            _.state = (new RingState$1(1, items_1, wix$0027, rix));
        }
    }
    else {
        const ix = matchValue.fields[1] | 0;
        const items = matchValue.fields[0];
        items[ix] = item;
        const wix = ((ix + 1) % items.length) | 0;
        _.state = (new RingState$1(1, items, wix, ix));
    }
}

function RingBuffer$1__doubleSize(this$, ix, items) {
    const source_2 = Seq_delay(() => {
        let source;
        return Seq_append((source = items, (Seq_skip(ix, source))), Seq_delay(() => {
            let source_1;
            return Seq_append((source_1 = items, (Seq_take(ix, source_1))), Seq_delay(() => Seq_collect((matchValue) => Seq_singleton(null), Seq_rangeNumber(0, 1, items.length))));
        }));
    });
    return Array.from(source_2);
}

export function Feliz_React__React_useElmish_Static_17DC4F1D(init, update, dependencies) {
    const state = React_React_useRef_1505(init[0]);
    const ring = React_React_useRef_1505(RingBuffer$1_$ctor_Z524259A4(10));
    const patternInput = React_Feliz_React__React_useState_Static_1505(init[0]);
    const setChildState = patternInput[1];
    const childState = patternInput[0];
    let token_1;
    const cts = React_React_useRef_1505(Async_createCancellationToken());
    const token = React_React_useRef_1505(cts.current);
    React_React_useEffectOnce_Z5ECA432F(() => React_React_createDisposable_3A5B6456(() => {
        Async_cancel(cts.current);
    }));
    token_1 = token;
    const setChildState_1 = () => {
        const value = setTimeout(() => {
            let copyOfStruct;
            if (!(copyOfStruct = token_1.current, Async_isCancellationRequested(copyOfStruct))) {
                setChildState(state.current);
            }
        }, 0) | 0;
        void value;
    };
    const dispatch = (msg) => {
        let pr;
        const builder$0040 = PromiseImpl_promise;
        pr = Promise_PromiseBuilder__Run_212F1D4B(builder$0040, Promise_PromiseBuilder__Delay_62FBFDE1(builder$0040, () => {
            let nextMsg = Option_some(msg);
            return Promise_PromiseBuilder__While_2044D34(builder$0040, () => {
                let copyOfStruct_1;
                return (nextMsg != null) ? (!(copyOfStruct_1 = token_1.current, Async_isCancellationRequested(copyOfStruct_1))) : false;
            }, Promise_PromiseBuilder__Delay_62FBFDE1(builder$0040, () => {
                const msg_1 = Option_value(nextMsg);
                const patternInput_1 = update(msg_1, state.current);
                const state$0027 = patternInput_1[0];
                const cmd$0027 = patternInput_1[1];
                const list = cmd$0027;
                List_iterate((sub) => {
                    sub(dispatch);
                }, list);
                nextMsg = RingBuffer$1__Pop(ring.current);
                state.current = state$0027;
                setChildState_1();
                return Promise.resolve();
            }));
        }));
        pr.then();
    };
    const dispatch_1 = React_React_useCallbackRef_7C4B0DD6(dispatch);
    React_React_useEffect_Z5234A374(() => React_React_createDisposable_3A5B6456(() => {
        let disposable;
        let option;
        const record = state.current;
        const matchValue = record;
        option = (Util_isDisposable(matchValue) ? (disposable = matchValue, disposable) : (void 0));
        Seq_iterate((o) => {
            o.Dispose();
        }, Option_toArray(option));
    }), dependencies);
    React_React_useEffect_Z101E1A95(() => {
        state.current = init[0];
        setChildState_1();
        const list_1 = init[1];
        List_iterate((sub_1) => {
            sub_1(dispatch_1);
        }, list_1);
    }, dependencies);
    React_React_useEffect_3A5B6456(() => {
        const option_1 = RingBuffer$1__Pop(ring.current);
        Seq_iterate(dispatch_1, Option_toArray(option_1));
    });
    return [childState, dispatch_1];
}

export function Feliz_React__React_useElmish_Static_645B1FB7(init, update, dependencies) {
    const init_1 = React_React_useMemo_CF4EA67(init, dependencies);
    return Feliz_React__React_useElmish_Static_17DC4F1D(init_1, update, dependencies);
}

