import { class_type as Reflection_class_type } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Reflection.js";
import { Result as Option_Result, bindOk as Option_bindOk } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Option.js";

export function unwrapResult(a) {
    if (a.tag === 1) {
        const b = a.fields[0];
        throw b;
    }
    else {
        const a_1 = a.fields[0];
        return a_1;
    }
}

export class ResultBuilder {
    constructor() {
    }
}

export function ResultBuilder$reflection() {
    return Reflection_class_type("Fable.PowerPack.Result.ResultBuilder", void 0, ResultBuilder);
}

export function ResultBuilder_$ctor() {
    return new ResultBuilder();
}

export function ResultBuilder__Bind_764BA1D3(this$, m, f) {
    return Option_bindOk(f, m);
}

export function ResultBuilder__Return_1505(this$, a) {
    return new Option_Result(0, a);
}

export function ResultBuilder__ReturnFrom_1505(this$, m) {
    return m;
}

export function ResultBuilder__Zero(this$) {
    return ResultBuilder__Return_1505(this$);
}

export function ResultBuilder__Combine_Z57BB8787(this$, left, right) {
    return ResultBuilder__Bind_764BA1D3(this$, left, () => right);
}

export const result = ResultBuilder_$ctor();

