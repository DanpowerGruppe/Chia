import * as react from "react";
import { equals as Util_equals, uncurry as Util_uncurry } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Util.js";
import { fold as Seq_fold, choose as Seq_choose } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Seq.js";
import { isNullOrEmpty as String_isNullOrEmpty } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/String.js";
import { HTMLAttr as Fable$002EReact$002EProps_HTMLAttr } from "./Fable.React.Props.js";

export function ReactElementTypeModule_memo(render) {
    return react.memo(render, Util_uncurry(2, null));
}

export function ReactElementTypeModule_memoWith(areEqual, render) {
    return react.memo(render, areEqual);
}

export function Helpers_equalsButFunctions(x, y) {
    if (x === y) {
        return true;
    }
    else if ((typeof x === 'object' && !x[Symbol.iterator]) ? (!(y == null)) : false) {
        const keys = Object.keys(x);
        const length = keys.length | 0;
        let i = 0;
        let result = true;
        while ((i < length) ? result : false) {
            const key = keys[i];
            i = (i + 1);
            const xValue = x[key];
            result = ((typeof xValue === 'function') ? true : Util_equals(xValue, y[key]));
        }
        return result;
    }
    else {
        return Util_equals(x, y);
    }
}

export function Helpers_memoEqualsButFunctions(x, y) {
    if (x === y) {
        return true;
    }
    else if ((typeof x === 'object' && !x[Symbol.iterator]) ? (!(y == null)) : false) {
        const keys = Object.keys(x);
        const length = keys.length | 0;
        let i = 0;
        let result = true;
        while ((i < length) ? result : false) {
            const key = keys[i];
            i = (i + 1);
            const xValue = x[key];
            result = ((typeof xValue === 'function') ? true : (xValue === y[key]));
        }
        return result;
    }
    else {
        return false;
    }
}

export function Helpers_memoBuilder(name, render) {
    render.displayName = name;
    const memoType = ReactElementTypeModule_memo(render);
    return (props) => react.createElement(memoType, props);
}

export function Helpers_memoBuilderWith(name, areEqual, render) {
    render.displayName = name;
    const memoType = ReactElementTypeModule_memoWith(areEqual, render);
    return (props) => react.createElement(memoType, props);
}

export function Helpers_opt(o) {
    const o_1 = o;
    if (o_1 == null) {
        return null;
    }
    else {
        const o_2 = o_1;
        return o_2;
    }
}

export const Helpers_nothing = null;

export function Helpers_classBaseList(baseClass, classes) {
    let arg0;
    let source_1;
    const source = classes;
    source_1 = Seq_choose((tupledArg) => {
        const name = tupledArg[0];
        const condition = tupledArg[1];
        if (condition ? (!String_isNullOrEmpty(name)) : false) {
            return name;
        }
        else {
            return void 0;
        }
    }, source);
    arg0 = Seq_fold((state, name_1) => ((state + " ") + name_1), baseClass, source_1);
    return new Fable$002EReact$002EProps_HTMLAttr(64, arg0);
}

export function Helpers_classList(classes) {
    return Helpers_classBaseList("", classes);
}

