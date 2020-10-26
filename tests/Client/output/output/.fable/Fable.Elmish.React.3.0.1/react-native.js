import { FSharpRef as Types_FSharpRef, Record as Types_Record } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Types.js";
import { obj_type as Reflection_obj_type, record_type as Reflection_record_type, lambda_type as Reflection_lambda_type, class_type as Reflection_class_type, unit_type as Reflection_unit_type } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Reflection.js";
import { createAtom as Util_createAtom } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Util.js";
import { Component as react_Component } from "react";
import { AppRegistry as react$002Dnative_AppRegistry } from "react-native";
import { ProgramModule_withSetState as program_ProgramModule_withSetState, ProgramModule_view as program_ProgramModule_view } from "../Fable.Elmish.3.1.0/program.js";

export class Components_AppState extends Types_Record {
    constructor(render, setState) {
        super();
        this.render = render;
        this.setState = setState;
    }
}

export function Components_AppState$reflection() {
    return Reflection_record_type("Elmish.ReactNative.Components.AppState", [], Components_AppState, () => [["render", Reflection_lambda_type(Reflection_unit_type, Reflection_class_type("Fable.React.ReactElement"))], ["setState", Reflection_lambda_type(Components_AppState$reflection(), Reflection_unit_type)]]);
}

export const Components_appState = Util_createAtom(void 0);

export class Components_App extends react_Component {
    constructor(props) {
        super(props);
        let setState, objectArg;
        const this$ = new Types_FSharpRef(null);
        this$.contents = this;
        this["init@15-2"] = 1;
        if (Components_appState() != null) {
            const state = Components_appState();
            Components_appState((setState = (objectArg = this$.contents, (arg00) => {
                this.state = arg00;
            }), new Components_AppState(state.render, setState)), true);
            this.state = state;
        }
        else {
            throw (new Error("was Elmish.ReactNative.Program.withReactNative called?"));
        }
    }
    componentDidMount() {
        let inputRecord;
        const this$ = this;
        Components_appState((inputRecord = Components_appState(), new Components_AppState(inputRecord.render, (s) => {
            this$.setState(((_arg2, _arg1) => s));
        })), true);
    }
    componentWillUnmount() {
        let inputRecord;
        const this$ = this;
        Components_appState((inputRecord = Components_appState(), new Components_AppState((this$.state).render, (value) => {
            void value;
        })), true);
    }
    render() {
        const this$ = this;
        return (this$.state).render();
    }
}

export function Components_App$reflection() {
    return Reflection_class_type("Elmish.ReactNative.Components.App", void 0, Components_App, Reflection_class_type("Fable.React.Component`2", [Reflection_obj_type, Components_AppState$reflection()]));
}

export function Components_App_$ctor_4E60E31B(props) {
    return new Components_App(props);
}

export function Program_withReactNative(appKey, program) {
    react$002Dnative_AppRegistry.registerComponent(appKey, () => Components_App);
    const setState = (m, d) => {
        if (Components_appState() != null) {
            const state = Components_appState();
            state.setState(new Components_AppState(() => program_ProgramModule_view(program)(m)(d), state.setState));
        }
        else {
            Components_appState(new Components_AppState(() => program_ProgramModule_view(program)(m)(d), (value) => {
                void value;
            }), true);
        }
    };
    const program_1 = program;
    return program_ProgramModule_withSetState(setState, program_1);
}

