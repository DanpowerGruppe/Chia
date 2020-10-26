import { FSharpRef as Types_FSharpRef, Record as Types_Record } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Types.js";
import { lambda_type as Reflection_lambda_type, class_type as Reflection_class_type, record_type as Reflection_record_type, bool_type as Reflection_bool_type } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Reflection.js";
import { Component as react_Component } from "react";
import * as react from "react";

export class Components_HybridState extends Types_Record {
    constructor(isClient) {
        super();
        this.isClient = isClient;
    }
}

export function Components_HybridState$reflection() {
    return Reflection_record_type("Fable.React.Isomorphic.Components.HybridState", [], Components_HybridState, () => [["isClient", Reflection_bool_type]]);
}

export class Components_HybridProps$1 extends Types_Record {
    constructor(clientView, serverView, model) {
        super();
        this.clientView = clientView;
        this.serverView = serverView;
        this.model = model;
    }
}

export function Components_HybridProps$1$reflection(gen0) {
    return Reflection_record_type("Fable.React.Isomorphic.Components.HybridProps`1", [gen0], Components_HybridProps$1, () => [["clientView", Reflection_lambda_type(gen0, Reflection_class_type("Fable.React.ReactElement"))], ["serverView", Reflection_lambda_type(gen0, Reflection_class_type("Fable.React.ReactElement"))], ["model", gen0]]);
}

export class Components_HybridComponent$1 extends react_Component {
    constructor(initProps) {
        super(initProps);
        this.this = (new Types_FSharpRef(null));
        this.this.contents = this;
        this["init@12-1"] = 1;
        this.state = (new Components_HybridState(false));
    }
    componentDidMount() {
        const __ = this;
        __.this.contents.setState(((_arg2, _arg1) => (new Components_HybridState(true))));
    }
    render() {
        const x = this;
        return (x.state).isClient ? (x.props).clientView((x.props).model) : (x.props).serverView((x.props).model);
    }
}

export function Components_HybridComponent$1$reflection(gen0) {
    return Reflection_class_type("Fable.React.Isomorphic.Components.HybridComponent`1", [gen0], Components_HybridComponent$1, Reflection_class_type("Fable.React.Component`2", [Components_HybridProps$1$reflection(gen0), Components_HybridState$reflection()]));
}

export function Components_HybridComponent$1_$ctor_Z3CAAB1FA(initProps) {
    return new Components_HybridComponent$1(initProps);
}

export function isomorphicView(clientView, serverView, model) {
    const props = new Components_HybridProps$1(clientView, serverView, model);
    let comp;
    const value = Components_HybridComponent$1;
    comp = value;
    return react.createElement(comp, props);
}

