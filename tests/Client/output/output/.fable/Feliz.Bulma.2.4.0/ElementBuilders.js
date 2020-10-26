import { empty as List_empty, cons as List_cons, fold as List_fold, reverse as List_reverse } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/List.js";
import { uncurry as Util_uncurry } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Util.js";
import { toString as Types_toString } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Types.js";
import { mkAttr as Interop_mkAttr } from "../Feliz.1.16.0/Interop.js";
import { join as String_join } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/String.js";

export function Helpers_extractClasses(xs) {
    let list_1;
    const list = xs;
    list_1 = List_reverse(list);
    return List_fold(Util_uncurry(2, (tupledArg) => {
        const classes = tupledArg[0];
        const props = tupledArg[1];
        return (x) => {
            let v, k;
            const matchValue = x;
            if (v = matchValue[1], (k = matchValue[0], k === "className")) {
                const v_1 = matchValue[1];
                const k_1 = matchValue[0];
                return [List_cons(Types_toString(v_1), classes), props];
            }
            else {
                return [classes, List_cons(x, props)];
            }
        };
    }), [List_empty(), List_empty()], list_1);
}

export function Helpers_combineClasses(cn, xs) {
    let arg00;
    let tupledArg;
    const xs_1 = xs;
    tupledArg = Helpers_extractClasses(xs_1);
    const classes = tupledArg[0];
    const props = tupledArg[1];
    return List_cons((arg00 = List_cons(cn, classes), (Interop_mkAttr("className", String_join(" ", arg00)))), props);
}

