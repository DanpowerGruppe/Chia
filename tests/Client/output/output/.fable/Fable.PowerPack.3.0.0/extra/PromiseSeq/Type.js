import { Union as Types_Union } from "../../../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Types.js";
import { union_type as Reflection_union_type, obj_type as Reflection_obj_type } from "../../../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Reflection.js";

export class PromiseSeqInner$1 extends Types_Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["Nil", "Cons"];
    }
}

export function PromiseSeqInner$1$reflection(gen0) {
    return Reflection_union_type("Fable.PowerPack.PromiseSeqInner`1", [gen0], PromiseSeqInner$1, () => [[], [["Item1", gen0], ["Item2", Reflection_obj_type]]]);
}

