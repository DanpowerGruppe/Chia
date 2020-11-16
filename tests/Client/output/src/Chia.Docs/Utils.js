import { class_type } from "../../.fable/fable-library.3.0.0-nagareyama-rc-007/Reflection.js";
import { reactElement, reactApi, mkAttr } from "../../.fable/Feliz.1.17.0/Interop.fs.js";
import { empty, singleton, ofArray } from "../../.fable/fable-library.3.0.0-nagareyama-rc-007/List.js";
import react$002Dhighlight from "react-highlight";
import { createObj } from "../../.fable/fable-library.3.0.0-nagareyama-rc-007/Util.js";
import { printf, toText } from "../../.fable/fable-library.3.0.0-nagareyama-rc-007/String.js";

export class Highlight {
    constructor() {
    }
}

export function Highlight$reflection() {
    return class_type("Utils.Highlight", void 0, Highlight);
}

export function code(c) {
    const properties = ofArray([mkAttr("className", "fsharp"), mkAttr("children", c)]);
    return reactApi.createElement(react$002Dhighlight, createObj(properties));
}

export function fixDocsView(fileName, client) {
    let xs, value, clo1, clo2, value_1;
    const area = client ? "ChiaClient" : "Chia";
    const children = singleton((xs = ofArray([(value = (clo1 = toText(printf("https://github.com/DanpowerGruppe/Chia/tree/master/src/docs/views/%s/%s.fs")), clo2 = clo1(area), clo2(fileName)), mkAttr("href", value)), (value_1 = (("Fix docs file " + fileName) + " here"), mkAttr("children", value_1))]), reactElement("a", createObj(xs))));
    return reactElement("div", createObj(singleton(["children", reactApi.Children.toArray(Array.from(children))])));
}

export function installationView(packageName) {
    let s, clo1, xs, elms, xs_2, clo1_1, xs_3;
    const children_1 = ofArray([(s = (clo1 = toText(printf("%s - Installation")), clo1(packageName)), (xs = ofArray([mkAttr("className", "title is-1"), mkAttr("children", s)]), reactElement("h1", createObj(xs)))), reactElement("hr", createObj(empty())), (elms = ofArray([(xs_2 = ofArray([mkAttr("className", "title is-4"), mkAttr("children", "Use Paket")]), reactElement("h4", createObj(xs_2))), code((clo1_1 = toText(printf("paket add %s")), clo1_1(packageName)))]), (xs_3 = ofArray([mkAttr("className", "content"), mkAttr("children", reactApi.Children.toArray(Array.from(elms)))]), reactElement("div", createObj(xs_3))))]);
    return reactElement("div", createObj(singleton(["children", reactApi.Children.toArray(Array.from(children_1))])));
}

