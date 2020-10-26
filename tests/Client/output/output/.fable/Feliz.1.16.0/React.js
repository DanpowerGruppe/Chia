import { useLayoutEffectWithDeps as ReactInterop_useLayoutEffectWithDeps_1, useLayoutEffect as ReactInterop_useLayoutEffect_1, useEffectWithDeps as ReactInterop_useEffectWithDeps_1, useEffect as ReactInterop_useEffect_1, useDebugValue as ReactInterop_useDebugValue } from "../../../.fable/Feliz.1.16.0/ReactInterop.js";
import { class_type as Reflection_class_type } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Reflection.js";
import { iterate as Seq_iterate } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Seq.js";
import { defaultArg as Option_defaultArg, toArray as Option_toArray } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Option.js";
import { reactApi as Interop_reactApi } from "./Interop.js";
import { createObjDebug as Util_createObjDebug, curry as Util_curry, uncurry as Util_uncurry } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Util.js";
import { useState as react_useState } from "react";
import * as react from "react";
import { singleton as List_singleton } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/List.js";

export const ReactInterop_useDebugValueWithFormatter = ReactInterop_useDebugValue;

export const ReactInterop_useEffect = ReactInterop_useEffect_1;

export const ReactInterop_useEffectWithDeps = ReactInterop_useEffectWithDeps_1;

export const ReactInterop_useLayoutEffect = ReactInterop_useLayoutEffect_1;

export const ReactInterop_useLayoutEffectWithDeps = ReactInterop_useLayoutEffectWithDeps_1;

export class Internal {
    constructor() {
    }
}

export function Internal$reflection() {
    return Reflection_class_type("Feliz.Internal", void 0, Internal);
}

export function Internal_$ctor() {
    return new Internal();
}

(() => {
})();

export function Internal_functionComponent_Z1B155329(renderElement, name, withKey) {
    const option = name;
    Seq_iterate((name_1) => {
        renderElement.displayName = name_1;
    }, Option_toArray(option));
    return (props) => {
        let props_2;
        const props_1 = props;
        props_2 = Internal_propsWithKey(withKey, props_1);
        return Interop_reactApi.createElement(renderElement, props_2);
    };
}

export function Internal_memo_Z603636D8(renderElement, name, areEqual, withKey) {
    const memoElementType = Interop_reactApi.memo(renderElement, Util_uncurry(2, Option_defaultArg(Util_curry(2, areEqual), null)));
    const option = name;
    Seq_iterate((name_1) => {
        renderElement.displayName = name_1;
    }, Option_toArray(option));
    return (props) => {
        let props_2;
        const props_1 = props;
        props_2 = Internal_propsWithKey(withKey, props_1);
        return Interop_reactApi.createElement(memoElementType, props_2);
    };
}

function Internal_propsWithKey(withKey, props) {
    if (withKey == null) {
        return props;
    }
    else {
        const f = withKey;
        props.key = f(props);
        return props;
    }
}

export class React {
    constructor() {
    }
}

export function React$reflection() {
    return Reflection_class_type("Feliz.React", void 0, React);
}

export function React_createDisposable_3A5B6456(dispose) {
    return {
        Dispose() {
            dispose();
        },
    };
}

export function React_useState_FCFD9EF(initializer) {
    return Interop_reactApi.useState(initializer);
}

export function React_useReducer_2B9E6EA0(update, initialState) {
    const arg00 = update;
    const arg10 = initialState;
    return Interop_reactApi.useReducer(arg00, arg10);
}

export function React_useEffect_Z5ECA432F(effect) {
    ReactInterop_useEffect(effect);
}

export function React_useEffect_Z5234A374(effect, dependencies) {
    ReactInterop_useEffectWithDeps(effect, dependencies);
}

export function React_useLayoutEffect_Z5ECA432F(effect) {
    ReactInterop_useLayoutEffect(effect);
}

export function React_useLayoutEffect_Z5234A374(effect, dependencies) {
    ReactInterop_useLayoutEffectWithDeps(effect, dependencies);
}

export function React_useLayoutEffect_3A5B6456(effect) {
    ReactInterop_useLayoutEffect((_arg1) => {
        effect();
        return React_createDisposable_3A5B6456(() => {
            void undefined;
        });
    });
}

export function React_useLayoutEffect_Z101E1A95(effect, dependencies) {
    ReactInterop_useLayoutEffectWithDeps((_arg2) => {
        effect();
        return React_createDisposable_3A5B6456(() => {
            void undefined;
        });
    }, dependencies);
}

export function React_useEffectOnce_3A5B6456(effect) {
    React_useEffect_Z101E1A95(effect, []);
}

export function React_useEffectOnce_Z5ECA432F(effect) {
    React_useEffect_Z5234A374(effect, []);
}

export function React_useEffectOnce_6E825304(effect) {
    React_useEffect_Z5234A374(() => {
        const disposeOption = effect();
        return {
            Dispose() {
                const option = disposeOption;
                Seq_iterate((d) => {
                    let copyOfStruct = d;
                    copyOfStruct.Dispose();
                }, Option_toArray(option));
            },
        };
    }, []);
}

export function React_useEffect_3A5B6456(effect) {
    ReactInterop_useEffect((_arg3) => {
        effect();
        return React_createDisposable_3A5B6456(() => {
            void undefined;
        });
    });
}

export function React_useEffect_Z101E1A95(effect, dependencies) {
    ReactInterop_useEffectWithDeps((_arg4) => {
        effect();
        return React_createDisposable_3A5B6456(() => {
            void undefined;
        });
    }, dependencies);
}

export function React_useDebugValue_Z721C83C5(value) {
    ReactInterop_useDebugValueWithFormatter(value, (x) => x);
}

export function React_useDebugValue_77A55D6D(value, formatter) {
    ReactInterop_useDebugValueWithFormatter(value, formatter);
}

export function React_useCallback_93353E(callbackFunction, dependencies) {
    const arg00 = callbackFunction;
    const arg10 = Option_defaultArg(dependencies, []);
    return Interop_reactApi.useCallback(arg00, arg10);
}

export function React_useRef_1505(initialValue) {
    return Interop_reactApi.useRef(initialValue);
}

export function React_useInputRef() {
    return React_useRef_1505(void 0);
}

export function React_useButtonRef() {
    return React_useRef_1505(void 0);
}

export function React_useElementRef() {
    return React_useRef_1505(void 0);
}

export function React_useMemo_CF4EA67(createFunction, dependencies) {
    const arg00 = createFunction;
    const arg10 = Option_defaultArg(dependencies, []);
    return Interop_reactApi.useMemo(arg00, arg10);
}

export function React_functionComponent_2F9D7239(render, withKey) {
    return Internal_functionComponent_Z1B155329(render, void 0, withKey);
}

export function React_functionComponent_Z4C5FE1BE(name, render, withKey) {
    return Internal_functionComponent_Z1B155329(render, name, withKey);
}

export function React_functionComponent_19A12FB2(render, withKey) {
    return Internal_functionComponent_Z1B155329((arg) => {
        const arg00 = render(arg);
        return react.createElement(react.Fragment, {}, ...arg00);
    }, void 0, withKey);
}

export function React_functionComponent_2E1DD889(name, render, withKey) {
    return Internal_functionComponent_Z1B155329((arg) => {
        const arg00 = render(arg);
        return react.createElement(react.Fragment, {}, ...arg00);
    }, name, withKey);
}

export function React_memo_62A0F746(render, withKey, areEqual) {
    return Internal_memo_Z603636D8(render, void 0, areEqual, withKey);
}

export function React_memo_6648A89D(name, render, withKey, areEqual) {
    return Internal_memo_Z603636D8(render, name, areEqual, withKey);
}

export function React_memo_C2C6BED(render, withKey, areEqual) {
    return Internal_memo_Z603636D8((arg) => {
        const arg00 = render(arg);
        return react.createElement(react.Fragment, {}, ...arg00);
    }, void 0, areEqual, withKey);
}

export function React_memo_Z4FCC584A(name, render, withKey, areEqual) {
    return Internal_memo_Z603636D8((arg) => {
        const arg00 = render(arg);
        return react.createElement(react.Fragment, {}, ...arg00);
    }, name, areEqual, withKey);
}

export function React_createContext_1AE444D8(name, defaultValue) {
    const contextObject = Interop_reactApi.createContext(Option_defaultArg(defaultValue, void 0));
    const option = name;
    Seq_iterate((name_1) => {
        contextObject.displayName = name_1;
    }, Option_toArray(option));
    return contextObject;
}

export function React_contextProvider_34D9BBBD(contextObject, contextValue, child) {
    return Interop_reactApi.createElement(contextObject.Provider, Util_createObjDebug(List_singleton(["value", contextValue])), child);
}

export function React_contextProvider_138D2F56(contextObject, contextValue, children) {
    return Interop_reactApi.createElement(contextObject.Provider, Util_createObjDebug(List_singleton(["value", contextValue])), ...children);
}

export function React_contextConsumer_Z68910595(contextObject, render) {
    return Interop_reactApi.createElement(contextObject.Consumer, null, render);
}

export function React_contextConsumer_56D53A40(contextObject, render) {
    return Interop_reactApi.createElement(contextObject.Consumer, null, (arg) => {
        const arg00 = render(arg);
        return react.createElement(react.Fragment, {}, ...arg00);
    });
}

export function React_useContext_37FA55CF(contextObject) {
    return Interop_reactApi.useContext(contextObject);
}

export function React_useCallbackRef_7C4B0DD6(callback) {
    const lastRenderCallbackRef = React_useRef_1505(callback);
    const callbackRef = React_useCallback_93353E((arg) => lastRenderCallbackRef.current(arg), []);
    React_useLayoutEffect_3A5B6456(() => {
        lastRenderCallbackRef.current = callback;
    });
    return callbackRef;
}

export const React_useStateWithUpdater_1505 = react_useState;

export function React_forwardRef_3790D881(render) {
    const forwardRefType = Interop_reactApi.forwardRef((props, ref) => render([props, ref]));
    return (tupledArg) => {
        let o;
        const props_1 = tupledArg[0];
        const ref_1 = tupledArg[1];
        return Interop_reactApi.createElement(forwardRefType, (o = {
            props: props_1,
            ref: ref_1,
        }, (Object.assign({}, o))));
    };
}

export function React_forwardRef_7DC3DB1A(name, render) {
    const forwardRefType = Interop_reactApi.forwardRef((props, ref) => render([props, ref]));
    render.displayName = name;
    return (tupledArg) => {
        let o;
        const props_1 = tupledArg[0];
        const ref_1 = tupledArg[1];
        return Interop_reactApi.createElement(forwardRefType, (o = {
            props: props_1,
            ref: ref_1,
        }, (Object.assign({}, o))));
    };
}

export function React_strictMode_6E3A73D(children) {
    return Interop_reactApi.createElement(Interop_reactApi.StrictMode, void 0, ...children);
}

export function React_lazy$0027_4712D3AE(dynamicImport, props) {
    return Interop_reactApi.createElement(Interop_reactApi.lazy((() => dynamicImport)), props);
}

export function React_lazy$0027_Z3D8450FC(dynamicImport, props) {
    return Interop_reactApi.createElement(Interop_reactApi.lazy(dynamicImport), props);
}

export function React_suspense_6E3A73D(children) {
    let o;
    return Interop_reactApi.createElement(Interop_reactApi.Suspense, (o = {
        fallback: null,
    }, (Object.assign({}, o))), ...children);
}

export function React_suspense_Z3796A576(children, fallback) {
    let o;
    return Interop_reactApi.createElement(Interop_reactApi.Suspense, (o = {
        fallback: fallback,
    }, (Object.assign({}, o))), ...children);
}

export function React_useImperativeHandle_596DDC25(ref, createHandle) {
    const arg00 = ref;
    const arg10 = createHandle;
    Interop_reactApi.useImperativeHandle(arg00, arg10);
}

export function React_useImperativeHandle_Z12F09548(ref, createHandle, dependencies) {
    const arg00 = ref;
    const arg10 = createHandle;
    const arg20 = dependencies;
    Interop_reactApi.useImperativeHandle(arg00, arg10, arg20);
}

export function Feliz_React__React_useState_Static_1505(initial) {
    return Interop_reactApi.useState(initial);
}

