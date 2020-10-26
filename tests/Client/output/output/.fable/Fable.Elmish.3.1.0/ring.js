import { Union as Types_Union } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Types.js";
import { class_type as Reflection_class_type, union_type as Reflection_union_type, int32_type as Reflection_int32_type, array_type as Reflection_array_type } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Reflection.js";
import { fill as Array_fill } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Array.js";
import { comparePrimitives as Util_comparePrimitives, max as Util_max } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Util.js";
import { some as Option_some } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Option.js";
import { rangeNumber as Seq_rangeNumber, singleton as Seq_singleton, collect as Seq_collect, take as Seq_take, skip as Seq_skip, append as Seq_append, delay as Seq_delay } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Seq.js";

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
    return Reflection_union_type("Elmish.RingState`1", [gen0], RingState$1, () => [[["wx", Reflection_array_type(gen0)], ["ix", Reflection_int32_type]], [["rw", Reflection_array_type(gen0)], ["wix", Reflection_int32_type], ["rix", Reflection_int32_type]]]);
}

export class RingBuffer$1 {
    constructor(size) {
        this.state = (new RingState$1(0, Array_fill(new Array(Util_max(Util_comparePrimitives, size, 10)), 0, Util_max(Util_comparePrimitives, size, 10), null), 0));
    }
}

export function RingBuffer$1$reflection(gen0) {
    return Reflection_class_type("Elmish.RingBuffer`1", [gen0], RingBuffer$1);
}

export function RingBuffer$1_$ctor_Z524259A4(size) {
    return new RingBuffer$1(size);
}

export function RingBuffer$1__Pop(__) {
    const matchValue = __.state;
    if (matchValue.tag === 1) {
        const wix = matchValue.fields[1] | 0;
        const rix = matchValue.fields[2] | 0;
        const items = matchValue.fields[0];
        const rix$0027 = ((rix + 1) % items.length) | 0;
        const matchValue_1 = rix$0027 === wix;
        if (matchValue_1) {
            __.state = (new RingState$1(0, items, wix));
        }
        else {
            __.state = (new RingState$1(1, items, wix, rix$0027));
        }
        return Option_some(items[rix]);
    }
    else {
        return void 0;
    }
}

export function RingBuffer$1__Push_2B595(__, item) {
    let items_2;
    const matchValue = __.state;
    if (matchValue.tag === 1) {
        const wix_1 = matchValue.fields[1] | 0;
        const rix = matchValue.fields[2] | 0;
        const items_1 = matchValue.fields[0];
        items_1[wix_1] = item;
        const wix$0027 = ((wix_1 + 1) % items_1.length) | 0;
        const matchValue_1 = wix$0027 === rix;
        if (matchValue_1) {
            __.state = (new RingState$1(1, (items_2 = items_1, (RingBuffer$1__doubleSize(__, rix, items_2))), items_1.length, 0));
        }
        else {
            __.state = (new RingState$1(1, items_1, wix$0027, rix));
        }
    }
    else {
        const ix = matchValue.fields[1] | 0;
        const items = matchValue.fields[0];
        items[ix] = item;
        const wix = ((ix + 1) % items.length) | 0;
        __.state = (new RingState$1(1, items, wix, ix));
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

