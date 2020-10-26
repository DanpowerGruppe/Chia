import { Union as Types_Union } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Types.js";
import { union_type as Reflection_union_type, class_type as Reflection_class_type } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Reflection.js";
import { React_useCallback_93353E as React_React_useCallback_93353E, React_useCallbackRef_7C4B0DD6 as React_React_useCallbackRef_7C4B0DD6, React_useEffect_Z101E1A95 as React_React_useEffect_Z101E1A95, React_createDisposable_3A5B6456 as React_React_createDisposable_3A5B6456, React_useEffectOnce_Z5ECA432F as React_React_useEffectOnce_Z5ECA432F, React_useRef_1505 as React_React_useRef_1505, Feliz_React__React_useState_Static_1505 as React_Feliz_React__React_useState_Static_1505 } from "../Feliz.1.16.0/React.js";
import { ignore as Async_ignore, parallel as Async_parallel, isCancellationRequested as Async_isCancellationRequested, startImmediate as Async_startImmediate, cancel as Async_cancel, createCancellationToken as Async_createCancellationToken } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Async.js";
import { singleton as AsyncBuilder_singleton } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/AsyncBuilder.js";
import { some as Option_some } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Option.js";
import { toList as Map_toList, add as Map_add, empty as Map_empty } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Map.js";
import { compare as Util_compare } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Util.js";
import { ofSeq as List_ofSeq } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/List.js";
import { singleton as Seq_singleton, collect as Seq_collect, delay as Seq_delay } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Seq.js";

export class Deferred$1 extends Types_Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["HasNotStartedYet", "InProgress", "Resolved", "Failed"];
    }
}

export function Deferred$1$reflection(gen0) {
    return Reflection_union_type("Feliz.UseDeferred.Deferred`1", [gen0], Deferred$1, () => [[], [], [["Item", gen0]], [["Item", Reflection_class_type("System.Exception")]]]);
}

export function Deferred_hasNotStartedYet(_arg1) {
    if (_arg1.tag === 0) {
        return true;
    }
    else {
        return false;
    }
}

export function Deferred_resolved(_arg1) {
    if (_arg1.tag === 2) {
        return true;
    }
    else {
        return false;
    }
}

export function Deferred_inProgress(_arg1) {
    if (_arg1.tag === 1) {
        return true;
    }
    else {
        return false;
    }
}

export function Deferred_map(transform, deferred) {
    switch (deferred.tag) {
        case 1: {
            return new Deferred$1(1);
        }
        case 3: {
            const error = deferred.fields[0];
            return new Deferred$1(3, error);
        }
        case 2: {
            const value = deferred.fields[0];
            try {
                return new Deferred$1(2, transform(value));
            }
            catch (error_1) {
                return new Deferred$1(3, error_1);
            }
        }
        default: {
            return new Deferred$1(0);
        }
    }
}

export function Deferred_iter(perform, deferred) {
    if (deferred.tag === 2) {
        const value = deferred.fields[0];
        perform(value);
    }
}

export function Deferred_exists(predicate, _arg1) {
    if (_arg1.tag === 2) {
        const value = _arg1.fields[0];
        return predicate(value);
    }
    else {
        return false;
    }
}

export function Deferred_bind(transform, deferred) {
    switch (deferred.tag) {
        case 1: {
            return new Deferred$1(1);
        }
        case 3: {
            const error = deferred.fields[0];
            return new Deferred$1(3, error);
        }
        case 2: {
            const value = deferred.fields[0];
            try {
                return transform(value);
            }
            catch (error_1) {
                return new Deferred$1(3, error_1);
            }
        }
        default: {
            return new Deferred$1(0);
        }
    }
}

export function Feliz_React__React_useDeferred_Static_2344FC52(operation, dependencies) {
    const patternInput = React_Feliz_React__React_useState_Static_1505(new Deferred$1(0));
    const setDeferred = patternInput[1];
    const deferred = patternInput[0];
    let token_1;
    const cts = React_React_useRef_1505(Async_createCancellationToken());
    const token = React_React_useRef_1505(cts.current);
    React_React_useEffectOnce_Z5ECA432F(() => React_React_createDisposable_3A5B6456(() => {
        Async_cancel(cts.current);
    }));
    token_1 = token;
    let executeOperation;
    const builder$0040 = AsyncBuilder_singleton;
    executeOperation = builder$0040.Delay(() => builder$0040.TryWith(builder$0040.Delay(() => {
        setDeferred(new Deferred$1(1));
        return builder$0040.Bind(operation, (_arg1) => {
            const output = _arg1;
            setDeferred(new Deferred$1(2, output));
            return builder$0040.Zero();
        });
    }), (_arg2) => {
        const error = _arg2;
        console.log(Option_some(error));
        setDeferred(new Deferred$1(3, error));
        return builder$0040.Zero();
    }));
    React_React_useEffect_Z101E1A95(() => {
        Async_startImmediate(executeOperation, token_1.current);
    }, dependencies);
    return deferred;
}

export function Feliz_React__React_useDeferredCallback_Static_7088D81D(operation, setDeferred) {
    const cancellationToken = React_React_useRef_1505(Async_createCancellationToken());
    const executeOperation = (arg) => {
        const builder$0040 = AsyncBuilder_singleton;
        return builder$0040.Delay(() => builder$0040.TryWith(builder$0040.Delay(() => {
            setDeferred(new Deferred$1(1));
            return builder$0040.Bind(operation(arg), (_arg3) => {
                const output = _arg3;
                setDeferred(new Deferred$1(2, output));
                return builder$0040.Zero();
            });
        }), (_arg4) => {
            const error = _arg4;
            console.log(Option_some(error));
            setDeferred(new Deferred$1(3, error));
            return builder$0040.Zero();
        }));
    };
    React_React_useEffectOnce_Z5ECA432F(() => React_React_createDisposable_3A5B6456(() => {
        Async_cancel(cancellationToken.current);
    }));
    const start = React_React_useCallbackRef_7C4B0DD6((arg_1) => {
        if (!Async_isCancellationRequested(cancellationToken.current)) {
            Async_startImmediate(executeOperation(arg_1), cancellationToken.current);
        }
    });
    return start;
}

export function Feliz_React__React_useDeferredParallel_Static_Z7E3F34D2(deferred, map) {
    const patternInput = React_Feliz_React__React_useState_Static_1505(Map_empty({
        Compare: Util_compare,
    }));
    const setData = patternInput[1];
    const data = patternInput[0];
    const addData = React_React_useCallbackRef_7C4B0DD6((tupledArg) => {
        const key = tupledArg[0];
        const value = tupledArg[1];
        setData(Map_add(key, value, data));
    });
    let token_1;
    const cts = React_React_useRef_1505(Async_createCancellationToken());
    const token = React_React_useRef_1505(cts.current);
    React_React_useEffectOnce_Z5ECA432F(() => React_React_createDisposable_3A5B6456(() => {
        Async_cancel(cts.current);
    }));
    token_1 = token;
    const mapKeyedOperatons = (operations) => List_ofSeq(Seq_delay(() => Seq_collect((matchValue) => {
        let builder$0040;
        const operation = matchValue[1];
        const key_1 = matchValue[0];
        return Seq_singleton((builder$0040 = AsyncBuilder_singleton, (builder$0040.Delay(() => builder$0040.TryWith(builder$0040.Delay(() => {
            addData([key_1, new Deferred$1(1)]);
            return builder$0040.Bind(operation, (_arg5) => {
                const output = _arg5;
                addData([key_1, new Deferred$1(2, output)]);
                return builder$0040.Zero();
            });
        }), (_arg6) => {
            const error = _arg6;
            console.log(Option_some(error));
            addData([key_1, new Deferred$1(3, error)]);
            return builder$0040.Zero();
        })))));
    }, operations)));
    const start = React_React_useCallback_93353E((operations_1) => {
        const value_1 = setTimeout(() => {
            let arg00;
            Async_startImmediate((arg00 = Async_parallel(mapKeyedOperatons(operations_1)), (Async_ignore(arg00))), token_1.current);
        }, 0) | 0;
        void value_1;
    });
    React_React_useEffect_Z101E1A95(() => {
        const deferred_1 = deferred;
        Deferred_iter((data_1) => {
            start(map(data_1));
        }, deferred_1);
    }, [deferred]);
    return Map_toList(data);
}

