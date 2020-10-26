import { class_type as Reflection_class_type } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Reflection.js";
import { defaultArg as Option_defaultArg, some as Option_some } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Option.js";
import { int32ToString as Util_int32ToString, curry as Util_curry } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Util.js";
import { ReactElementTypeModule_memoWith as Fable$002EReact$002EHelpers_ReactElementTypeModule_memoWith } from "./Fable.React.Helpers.js";
import * as react from "react";

export class Cache {
    constructor() {
    }
}

export function Cache$reflection() {
    return Reflection_class_type("Fable.React.Cache", void 0, Cache);
}

export function Cache_$ctor() {
    return new Cache();
}

(() => {
    const cache = new Map();
    if (typeof module === 'object' && module.hot) {
    module.hot.addStatusHandler(status => {
    if (status === 'apply') (() => {
        cache.clear();
    })();
    });
    };
    Cache.cache = cache;
})();

export function Cache_GetOrAdd_Z3AD3E68D(key, valueFactory) {
    if (Cache.cache.has(key)) {
        return Cache.cache.get(key);
    }
    else {
        const v = valueFactory(key);
        const value = Cache.cache.set(key, Option_some(v));
        void value;
        return v;
    }
}

export class FunctionComponent {
    constructor() {
    }
}

export function FunctionComponent$reflection() {
    return Reflection_class_type("Fable.React.FunctionComponent", void 0, FunctionComponent);
}

export function FunctionComponent_Of_Z5A158BBF(render, displayName, memoizeWith, withKey, __callingMemberName, __callingSourceFile, __callingSourceLine) {
    const prepareRenderFunction = (_arg1) => {
        const displayName_1 = Option_defaultArg(displayName, __callingMemberName);
        render.displayName = displayName_1;
        let elemType;
        if (Util_curry(2, memoizeWith) == null) {
            const value = render;
            elemType = value;
        }
        else {
            const areEqual = memoizeWith;
            const areEqual_1 = (x, y) => {
                if (!(typeof module === 'object' && module.hot && module.hot.status() === 'apply')) {
                    return areEqual(x, y);
                }
                else {
                    return false;
                }
            };
            const memoElement = Fable$002EReact$002EHelpers_ReactElementTypeModule_memoWith(areEqual_1, render);
            memoElement.displayName = (("Memo(" + displayName_1) + ")");
            elemType = memoElement;
        }
        return (props) => {
            let props_1;
            if (withKey == null) {
                props_1 = props;
            }
            else {
                const f_1 = withKey;
                props.key = f_1(props);
                props_1 = props;
            }
            return react.createElement(elemType, props_1);
        };
    };
    const cacheKey = (__callingSourceFile + "#L") + Util_int32ToString(__callingSourceLine);
    return Cache_GetOrAdd_Z3AD3E68D(cacheKey, prepareRenderFunction);
}

