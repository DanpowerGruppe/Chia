import { class_type as Reflection_class_type } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Reflection.js";
import { render as react$002Ddom_render } from "react-dom";

export class ReactDOM {
    constructor() {
    }
}

export function ReactDOM$reflection() {
    return Reflection_class_type("Feliz.ReactDOM", void 0, ReactDOM);
}

export function ReactDOM_render_Z3D10464(element, container) {
    return react$002Ddom_render(element(), container);
}

export class ReactDOMServer {
    constructor() {
    }
}

export function ReactDOMServer$reflection() {
    return Reflection_class_type("Feliz.ReactDOMServer", void 0, ReactDOMServer);
}

