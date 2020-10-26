import { Record as Types_Record } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Types.js";
import { array_type as Reflection_array_type, record_type as Reflection_record_type, class_type as Reflection_class_type, unit_type as Reflection_unit_type, lambda_type as Reflection_lambda_type, string_type as Reflection_string_type } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Reflection.js";
import { Component as react_Component } from "react";
import * as react from "react";

export class ReactiveComponents_Props$3 extends Types_Record {
    constructor(key, props, update, view, init) {
        super();
        this.key = key;
        this.props = props;
        this.update = update;
        this.view = view;
        this.init = init;
    }
}

export function ReactiveComponents_Props$3$reflection(gen0, gen1, gen2) {
    return Reflection_record_type("Fable.React.ReactiveComponents.Props`3", [gen0, gen1, gen2], ReactiveComponents_Props$3, () => [["key", Reflection_string_type], ["props", gen0], ["update", Reflection_lambda_type(gen2, Reflection_lambda_type(gen1, gen1))], ["view", Reflection_lambda_type(ReactiveComponents_Model$2$reflection(gen0, gen1), Reflection_lambda_type(Reflection_lambda_type(gen2, Reflection_unit_type), Reflection_class_type("Fable.React.ReactElement")))], ["init", Reflection_lambda_type(gen0, gen1)]]);
}

export class ReactiveComponents_State$1 extends Types_Record {
    constructor(value) {
        super();
        this.value = value;
    }
}

export function ReactiveComponents_State$1$reflection(gen0) {
    return Reflection_record_type("Fable.React.ReactiveComponents.State`1", [gen0], ReactiveComponents_State$1, () => [["value", gen0]]);
}

export class ReactiveComponents_Model$2 extends Types_Record {
    constructor(props, state, children) {
        super();
        this.props = props;
        this.state = state;
        this.children = children;
    }
}

export function ReactiveComponents_Model$2$reflection(gen0, gen1) {
    return Reflection_record_type("Fable.React.ReactiveComponents.Model`2", [gen0, gen1], ReactiveComponents_Model$2, () => [["props", gen0], ["state", gen1], ["children", Reflection_array_type(Reflection_class_type("Fable.React.ReactElement"))]]);
}

export class ReactiveComponents_ReactiveCom$3 extends react_Component {
    constructor(initProps) {
        super(initProps);
        this.state = (new ReactiveComponents_State$1(initProps.init(initProps.props)));
    }
    render() {
        const this$ = this;
        const model = new ReactiveComponents_Model$2((this$.props).props, (this$.state).value, Array.prototype.concat(this$.props.children || []));
        return (this$.props).view(model, (msg) => {
            const newState = (this$.props).update(msg, (this$.state).value);
            this$.setState(((_arg2, _arg1) => (new ReactiveComponents_State$1(newState))));
        });
    }
}

export function ReactiveComponents_ReactiveCom$3$reflection(gen0, gen1, gen2) {
    return Reflection_class_type("Fable.React.ReactiveComponents.ReactiveCom`3", [gen0, gen1, gen2], ReactiveComponents_ReactiveCom$3, Reflection_class_type("Fable.React.Component`2", [ReactiveComponents_Props$3$reflection(gen0, gen1, gen2), ReactiveComponents_State$1$reflection(gen1)]));
}

export function ReactiveComponents_ReactiveCom$3_$ctor_79C32B49(initProps) {
    return new ReactiveComponents_ReactiveCom$3(initProps);
}

export function ReactiveComponentsHelpers_reactiveCom(init, update, view, key, props, children) {
    const props_1 = new ReactiveComponents_Props$3(key, props, update, view, init);
    let comp;
    const value = ReactiveComponents_ReactiveCom$3;
    comp = value;
    return react.createElement(comp, props_1, ...children);
}

