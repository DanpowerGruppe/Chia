import { Record as Types_Record } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Types.js";
import { obj_type as Reflection_obj_type, record_type as Reflection_record_type, bool_type as Reflection_bool_type, lambda_type as Reflection_lambda_type, class_type as Reflection_class_type, unit_type as Reflection_unit_type } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Reflection.js";
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
    return Reflection_record_type("Elmish.React.LazyProps`1", [gen0], LazyProps$1, () => [["model", gen0], ["render", Reflection_lambda_type(Reflection_unit_type, Reflection_class_type("Fable.React.ReactElement"))], ["equal", Reflection_lambda_type(gen0, Reflection_lambda_type(gen0, Reflection_bool_type))]]);
}

export class Components_LazyView$1 extends react_Component {
    constructor(props) {
        super(props);
    }
    shouldComponentUpdate(nextProps, _nextState) {
        const this$ = this;
        const value = (this$.props).equal((this$.props).model, nextProps.model);
        return !value;
    }
    render() {
        const this$ = this;
        return (this$.props).render();
    }
}

export function Components_LazyView$1$reflection(gen0) {
    return Reflection_class_type("Elmish.React.Components.LazyView`1", [gen0], Components_LazyView$1, Reflection_class_type("Fable.React.Component`2", [LazyProps$1$reflection(gen0), Reflection_obj_type]));
}

export function Components_LazyView$1_$ctor_Z7829D94B(props) {
    return new Components_LazyView$1(props);
}

export function Common_lazyViewWith(equal, view, state) {
    const props = new LazyProps$1(state, () => view(state), equal);
    let comp;
    const value = Components_LazyView$1;
    comp = value;
    return react.createElement(comp, props);
}

export function Common_lazyView2With(equal, view, state, dispatch) {
    const props = new LazyProps$1(state, () => view(state, dispatch), equal);
    let comp;
    const value = Components_LazyView$1;
    comp = value;
    return react.createElement(comp, props);
}

export function Common_lazyView3With(equal, view, state1, state2, dispatch) {
    const props = new LazyProps$1([state1, state2], () => view(state1, state2, dispatch), equal);
    let comp;
    const value = Components_LazyView$1;
    comp = value;
    return react.createElement(comp, props);
}

export function Common_lazyView(view) {
    return (state) => Common_lazyViewWith(Util_equals, view, state);
}

export function Common_lazyView2(view) {
    return (state) => ((dispatch) => Common_lazyView2With(Util_equals, view, state, dispatch));
}

export function Common_lazyView3(view) {
    return (state1) => ((state2) => ((dispatch) => Common_lazyView3With(Util_equalArrays, view, state1, state2, dispatch)));
}

