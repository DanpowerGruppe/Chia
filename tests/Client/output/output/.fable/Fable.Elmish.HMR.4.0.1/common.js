import { Record as Types_Record } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Types.js";
import { int32_type as Reflection_int32_type, record_type as Reflection_record_type, bool_type as Reflection_bool_type, lambda_type as Reflection_lambda_type, class_type as Reflection_class_type, unit_type as Reflection_unit_type } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Reflection.js";
import { Component as react_Component } from "react";
import * as react from "react";
import { equalArrays as Util_equalArrays, equals as Util_equals } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Util.js";

export class LazyProps$1 extends Types_Record {
    constructor(model, render, equal) {
        super();
        this.model = model;
        this.render = render;
        this.equal = equal;
    }
}

export function LazyProps$1$reflection(gen0) {
    return Reflection_record_type("Elmish.HMR.Common.LazyProps`1", [gen0], LazyProps$1, () => [["model", gen0], ["render", Reflection_lambda_type(Reflection_unit_type, Reflection_class_type("Fable.React.ReactElement"))], ["equal", Reflection_lambda_type(gen0, Reflection_lambda_type(gen0, Reflection_bool_type))]]);
}

export class LazyState extends Types_Record {
    constructor(HMRCount) {
        super();
        this.HMRCount = (HMRCount | 0);
    }
}

export function LazyState$reflection() {
    return Reflection_record_type("Elmish.HMR.Common.LazyState", [], LazyState, () => [["HMRCount", Reflection_int32_type]]);
}

export class Components_LazyView$1 extends react_Component {
    constructor(props) {
        super(props);
        const hmrCount = ((window.Elmish_HMR_Count == null) ? 0 : window.Elmish_HMR_Count) | 0;
        this.state = (new LazyState(hmrCount));
    }
    shouldComponentUpdate(nextProps, _nextState) {
        const this$ = this;
        const hot = module.hot;
        if (hot == null) {
            const value = (this$.props).equal((this$.props).model, nextProps.model);
            return !value;
        }
        else {
            const currentHmrCount = window.Elmish_HMR_Count | 0;
            if (currentHmrCount > (this$.state).HMRCount) {
                this$.setState(((_prevState, _props) => (new LazyState(currentHmrCount))));
                return true;
            }
            else {
                const value_1 = (this$.props).equal((this$.props).model, nextProps.model);
                return !value_1;
            }
        }
    }
    render() {
        const this$ = this;
        return (this$.props).render();
    }
}

export function Components_LazyView$1$reflection(gen0) {
    return Reflection_class_type("Elmish.HMR.Common.Components.LazyView`1", [gen0], Components_LazyView$1, Reflection_class_type("Fable.React.Component`2", [LazyProps$1$reflection(gen0), LazyState$reflection()]));
}

export function Components_LazyView$1_$ctor_7D66F9C0(props) {
    return new Components_LazyView$1(props);
}

export function lazyViewWith(equal, view, state) {
    const props = new LazyProps$1(state, () => view(state), equal);
    let comp;
    const value = Components_LazyView$1;
    comp = value;
    return react.createElement(comp, props);
}

export function lazyView2With(equal, view, state, dispatch) {
    const props = new LazyProps$1(state, () => view(state, dispatch), equal);
    let comp;
    const value = Components_LazyView$1;
    comp = value;
    return react.createElement(comp, props);
}

export function lazyView3With(equal, view, state1, state2, dispatch) {
    const props = new LazyProps$1([state1, state2], () => view(state1, state2, dispatch), equal);
    let comp;
    const value = Components_LazyView$1;
    comp = value;
    return react.createElement(comp, props);
}

export function lazyView2(view) {
    return (state) => ((dispatch) => lazyView2With(Util_equals, view, state, dispatch));
}

export function lazyView3(view) {
    return (state1) => ((state2) => ((dispatch) => lazyView3With(Util_equalArrays, view, state1, state2, dispatch)));
}

