import { toString as Types_toString, Union as Types_Union } from "../../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Types.js";
import { class_type as Reflection_class_type, union_type as Reflection_union_type, string_type as Reflection_string_type } from "../../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Reflection.js";
import { value as Option_value, some as Option_some, defaultArg as Option_defaultArg } from "../../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Option.js";
import { promiseSeq as Extensions_promiseSeq } from "./PromiseSeq/Extensions.js";
import { PromiseSeqBuilder__Zero as Module_PromiseSeqBuilder__Zero, PromiseSeqBuilder__YieldFrom_1505 as Module_PromiseSeqBuilder__YieldFrom_1505, PromiseSeqBuilder__Yield_1505 as Module_PromiseSeqBuilder__Yield_1505, PromiseSeqBuilder__Combine_541DA560 as Module_PromiseSeqBuilder__Combine_541DA560, PromiseSeqBuilder__Bind_38DAB843 as Module_PromiseSeqBuilder__Bind_38DAB843, PromiseSeqBuilder__Delay_3689BAF1 as Module_PromiseSeqBuilder__Delay_3689BAF1 } from "./PromiseSeq/Module.js";

export class DBKeyMethod$2 extends Types_Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["KeyPath", "AutoIncrement"];
    }
}

export function DBKeyMethod$2$reflection(gen0, gen1) {
    return Reflection_union_type("Fable.PowerPack.Experimental.IndexedDB.DBKeyMethod`2", [gen0, gen1], DBKeyMethod$2, () => [[["Item", Reflection_string_type]], []]);
}

export class DBCursorDirection extends Types_Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["Next", "NextUnique", "Prev", "PrevUnique"];
    }
    ToString() {
        const dir = this;
        switch (dir.tag) {
            case 1: {
                return "nextunique";
            }
            case 2: {
                return "prev";
            }
            case 3: {
                return "prevunique";
            }
            default: {
                return "next";
            }
        }
    }
    toString() {
        return this.ToString();
    }
}

export function DBCursorDirection$reflection() {
    return Reflection_union_type("Fable.PowerPack.Experimental.IndexedDB.DBCursorDirection", [], DBCursorDirection, () => [[], [], [], []]);
}

export function DBCursorDirection_get_Default() {
    return new DBCursorDirection(0);
}

export function openCursor(index, keyCursor, range, direction, step) {
    const direction_1 = Types_toString(Option_defaultArg(direction, DBCursorDirection_get_Default()));
    const step_1 = Option_defaultArg(step, 1);
    let request;
    if (keyCursor) {
        if (range == null) {
            request = index.openKeyCursor(void 0, direction_1);
        }
        else {
            const range_2 = range;
            request = index.openKeyCursor(range_2, direction_1);
        }
    }
    else if (range == null) {
        request = index.openCursor(void 0, direction_1);
    }
    else {
        const range_1 = range;
        request = index.openCursor(range_1, direction_1);
    }
    const cursorSeq = () => {
        const builder$0040 = Extensions_promiseSeq;
        return Module_PromiseSeqBuilder__Delay_3689BAF1(builder$0040, () => Module_PromiseSeqBuilder__Bind_38DAB843(builder$0040, new Promise(((cont, _arg2) => {
            request.onsuccess = ((_arg1) => {
                request.onsuccess = null;
                if (request.result) {
                    const cursor = request.result;
                    cont(Option_some(cursor.value));
                    cursor.advance(step_1);
                }
                else {
                    cont(void 0);
                }
                return null;
            });
        })), (_arg1_1) => {
            const result = _arg1_1;
            if (result != null) {
                const r = Option_value(result);
                return Module_PromiseSeqBuilder__Combine_541DA560(builder$0040, Module_PromiseSeqBuilder__Yield_1505(builder$0040, r), Module_PromiseSeqBuilder__Delay_3689BAF1(builder$0040, () => Module_PromiseSeqBuilder__YieldFrom_1505(builder$0040, (() => {
                    throw 1;
                })())));
            }
            else {
                return Module_PromiseSeqBuilder__Zero(builder$0040);
            }
        }));
    };
    return cursorSeq();
}

export function countAllAsync(x) {
    return new Promise(((cont, econt) => {
        const request = x.count();
        request.onerror = ((_arg1) => econt(new Error(request.error.name)));
        request.onsuccess = ((_arg2) => cont(request.result));
    }));
}

export function countKeyAsync(indexKey, x) {
    return new Promise(((cont, econt) => {
        const request = x.count(Option_some(indexKey));
        request.onerror = ((_arg1) => econt(new Error(request.error.name)));
        request.onsuccess = ((_arg2) => cont(request.result));
    }));
}

export function countRangeAsync(indexKeyRange, x) {
    return new Promise(((cont, econt) => {
        const request = x.count(Option_some(indexKeyRange));
        request.onerror = ((_arg1) => econt(new Error(request.error.name)));
        request.onsuccess = ((_arg2) => cont(request.result));
    }));
}

export function getAsync(indexKey, x) {
    return new Promise(((cont, econt) => {
        const request = x.get(indexKey);
        request.onerror = ((_arg1) => econt(new Error(request.error.name)));
        request.onsuccess = ((_arg2) => cont(request.result));
    }));
}

export function getFirstAsync(indexKeyRange, x) {
    return new Promise(((cont, econt) => {
        const request = x.get(indexKeyRange);
        request.onerror = ((_arg1) => econt(new Error(request.error.name)));
        request.onsuccess = ((_arg2) => cont(request.result));
    }));
}

export function getKeyAsync(indexKey, x) {
    return new Promise(((cont, econt) => {
        const request = x.getKey(indexKey);
        request.onerror = ((_arg1) => econt(new Error(request.error.name)));
        request.onsuccess = ((_arg2) => cont(request.result));
    }));
}

export function getKeyFirstAsync(indexKeyRange, x) {
    return new Promise(((cont, econt) => {
        const request = x.getKey(indexKeyRange);
        request.onerror = ((_arg1) => econt(new Error(request.error.name)));
        request.onsuccess = ((_arg2) => cont(request.result));
    }));
}

export function Fable_Import_Browser_IDBObjectStore__IDBObjectStore_getAsync_4E60E31B(x, key) {
    return new Promise(((cont, econt) => {
        const request = x.get(key);
        request.onerror = ((_arg1) => econt(new Error(request.error.name)));
        request.onsuccess = ((_arg2) => cont(request.result));
    }));
}

export function Fable_Import_Browser_IDBObjectStore__IDBObjectStore_openCursorAsync_281BC71E(x, range, direction, step) {
    return openCursor(x, false, range, direction, step);
}

export function Fable_Import_Browser_IDBObjectStore__IDBObjectStore_addAsync_1505(x, item) {
    return new Promise(((cont, econt) => {
        const request = x.add(item);
        request.onerror = ((_arg3) => econt(new Error(request.error.name)));
        request.onsuccess = ((_arg4) => cont(request.result));
    }));
}

export function Fable_Import_Browser_IDBObjectStore__IDBObjectStore_deleteAsync_4E60E31B(x, key) {
    return new Promise(((cont, econt) => {
        const request = x.delete(key);
        request.onerror = ((_arg5) => econt(new Error(request.error.name)));
        request.onsuccess = ((_arg6) => cont());
    }));
}

export function Fable_Import_Browser_IDBObjectStore__IDBObjectStore_clearAsync(x) {
    return new Promise(((cont, econt) => {
        const request = x.clear();
        request.onerror = ((_arg7) => econt(new Error(request.error.name)));
        request.onsuccess = ((_arg8) => cont());
    }));
}

export function Fable_Import_Browser_IDBObjectStore__IDBObjectStore_putAsync_1505(x, item) {
    return new Promise(((cont, econt) => {
        const request = x.put(item);
        request.onerror = ((_arg9) => econt(new Error(request.error.name)));
        request.onsuccess = ((_arg10) => cont(request.result));
    }));
}

export class IndexedDB$1 {
    constructor() {
    }
}

export function IndexedDB$1$reflection(gen0) {
    return Reflection_class_type("Fable.PowerPack.Experimental.IndexedDB.IndexedDB`1", [gen0], IndexedDB$1);
}

export function IndexedDB$1_$ctor() {
    return new IndexedDB$1();
}

