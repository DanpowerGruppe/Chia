import { reactElement as Interop_reactElement, reactApi as Interop_reactApi, mkAttr as Interop_mkAttr } from "../../output/.fable/Feliz.1.14.1/Interop.js";
import { singleton as List_singleton, empty as List_empty, ofArray as List_ofArray } from "../../.fable/fable-library.3.0.0-nagareyama-beta-002/List.js";
import { createObjDebug as Util_createObjDebug } from "../../.fable/fable-library.3.0.0-nagareyama-beta-002/Util.js";
import { fixDocsView as Utils_fixDocsView, code as Utils_code } from "../../Utils.js";

export const overview = (() => {
    let xs, elms_1, xs_1, xs_2;
    const children_2 = List_ofArray([(xs = List_ofArray([Interop_mkAttr("className", "title is-1"), Interop_mkAttr("children", Interop_reactApi.Children.toArray(["Chia.Client.PageFlexer"]))]), Interop_reactElement("h1", Util_createObjDebug(xs))), (elms_1 = List_ofArray([(xs_1 = List_ofArray([Interop_mkAttr("href", "https://css-tricks.com/snippets/css/a-guide-to-flexbox/"), Interop_mkAttr("children", "Flexbox")]), Interop_reactElement("a", Util_createObjDebug(xs_1))), " extension for Chia"]), (xs_2 = List_ofArray([Interop_mkAttr("className", "subtitle is-2"), Interop_mkAttr("children", Interop_reactApi.Children.toArray(Array.from(elms_1)))]), Interop_reactElement("h2", Util_createObjDebug(xs_2)))), Interop_reactElement("hr", Util_createObjDebug(List_empty())), Interop_reactElement("p", Util_createObjDebug(List_singleton(["children", ["Use PageFlexer like this"]]))), Utils_code("\r\n          pageFlexer [] [\r\n              Html.div\r\n                  [ Bulma.title.h1 [ Html.text \"Chia.Client.PageFlexer\" ]\r\n                    Bulma.subtitle.h2 ]]"), Utils_fixDocsView("ChiaPageFlexer", true)]);
    return Interop_reactElement("div", Util_createObjDebug(List_singleton(["children", Interop_reactApi.Children.toArray(Array.from(children_2))])));
})();

