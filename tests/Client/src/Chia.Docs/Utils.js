import { class_type as Reflection_class_type } from "../../.fable/fable-library.3.0.0-nagareyama-beta-003/Reflection.js";
import { reactElement as Interop_reactElement, reactApi as Interop_reactApi, mkAttr as Interop_mkAttr } from "../../.fable/Feliz.1.14.1/Interop.js";
import { empty as List_empty, singleton as List_singleton, ofArray as List_ofArray } from "../../.fable/fable-library.3.0.0-nagareyama-beta-003/List.js";
import react$002Dhighlight from "react-highlight";
import { createObjDebug as Util_createObjDebug } from "../../.fable/fable-library.3.0.0-nagareyama-beta-003/Util.js";
import { printf as String_printf, toText as String_toText } from "../../.fable/fable-library.3.0.0-nagareyama-beta-003/String.js";

export class Highlight {
    constructor() {
    }
}

export function Highlight$reflection() {
    return Reflection_class_type("Utils.Highlight", void 0, Highlight);
}

export function code(c) {
    const properties = List_ofArray([Interop_mkAttr("className", "fsharp"), Interop_mkAttr("children", c)]);
    return Interop_reactApi.createElement(react$002Dhighlight, Util_createObjDebug(properties));
}

export function fixDocsView(fileName, client) {
    let xs, value, arg10, arg20, clo1, clo2, value_1;
    const area = client ? "ChiaClient" : "Chia";
    const children = List_singleton((xs = List_ofArray([(value = (arg10 = area, arg20 = fileName, (clo1 = String_toText(String_printf("https://github.com/DanpowerGruppe/Chia/tree/master/src/docs/views/%s/%s.fs")), clo2 = clo1(arg10), clo2(arg20))), Interop_mkAttr("href", value)), (value_1 = (("Fix docs file " + fileName) + " here"), Interop_mkAttr("children", value_1))]), Interop_reactElement("a", Util_createObjDebug(xs))));
    return Interop_reactElement("div", Util_createObjDebug(List_singleton(["children", Interop_reactApi.Children.toArray(Array.from(children))])));
}

export function installationView(packageName) {
    let s, arg10, clo1, xs, elms, xs_2, arg10_1, clo1_1, xs_3;
    const children_1 = List_ofArray([(s = (arg10 = packageName, (clo1 = String_toText(String_printf("%s - Installation")), clo1(arg10))), (xs = List_ofArray([Interop_mkAttr("className", "title is-1"), Interop_mkAttr("children", s)]), Interop_reactElement("h1", Util_createObjDebug(xs)))), Interop_reactElement("hr", Util_createObjDebug(List_empty())), (elms = List_ofArray([(xs_2 = List_ofArray([Interop_mkAttr("className", "title is-4"), Interop_mkAttr("children", "Use Paket")]), Interop_reactElement("h4", Util_createObjDebug(xs_2))), code((arg10_1 = packageName, (clo1_1 = String_toText(String_printf("paket add %s")), clo1_1(arg10_1))))]), (xs_3 = List_ofArray([Interop_mkAttr("className", "content"), Interop_mkAttr("children", Interop_reactApi.Children.toArray(Array.from(elms)))]), Interop_reactElement("div", Util_createObjDebug(xs_3))))]);
    return Interop_reactElement("div", Util_createObjDebug(List_singleton(["children", Interop_reactApi.Children.toArray(Array.from(children_1))])));
}

