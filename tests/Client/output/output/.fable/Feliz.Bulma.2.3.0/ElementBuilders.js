import { cons as List_cons, choose as List_choose } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/List.js";
import { toString as Types_toString } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Types.js";
import { mkAttr as Interop_mkAttr } from "../Feliz.1.14.1/Interop.js";
import { join as String_join } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/String.js";

export function Helpers_combineClasses(cn, xs) {
    let x;
    const xs_1 = xs;
    const list = xs_1;
    x = List_choose((arg) => {
        let v, k;
        let _arg1;
        const value = arg;
        _arg1 = value;
        if (v = _arg1[1], (k = _arg1[0], k === "className")) {
            const v_1 = _arg1[1];
            const k_1 = _arg1[0];
            return Types_toString(v_1);
        }
        else {
            return void 0;
        }
    }, list);
    const arg00 = List_cons(cn, x);
    return Interop_mkAttr("className", String_join(" ", arg00));
}

