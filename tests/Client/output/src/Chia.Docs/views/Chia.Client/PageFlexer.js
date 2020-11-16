import { reactElement, reactApi, mkAttr } from "../../../../.fable/Feliz.1.17.0/Interop.fs.js";
import { singleton, empty, ofArray } from "../../../../.fable/fable-library.3.0.0-nagareyama-rc-007/List.js";
import { createObj } from "../../../../.fable/fable-library.3.0.0-nagareyama-rc-007/Util.js";
import { fixDocsView, code } from "../../Utils.js";

export const overview = (() => {
    let xs, elms_1, xs_1, xs_2;
    const children_2 = ofArray([(xs = ofArray([mkAttr("className", "title is-1"), mkAttr("children", reactApi.Children.toArray(["Chia.Client.PageFlexer"]))]), reactElement("h1", createObj(xs))), (elms_1 = ofArray([(xs_1 = ofArray([mkAttr("href", "https://css-tricks.com/snippets/css/a-guide-to-flexbox/"), mkAttr("children", "Flexbox")]), reactElement("a", createObj(xs_1))), " extension for Chia"]), (xs_2 = ofArray([mkAttr("className", "subtitle is-2"), mkAttr("children", reactApi.Children.toArray(Array.from(elms_1)))]), reactElement("h2", createObj(xs_2)))), reactElement("hr", createObj(empty())), reactElement("p", createObj(singleton(["children", ["Use PageFlexer like this"]]))), code("\r\n          pageFlexer [] [\r\n              Html.div\r\n                  [ Bulma.title.h1 [ Html.text \"Chia.Client.PageFlexer\" ]\r\n                    Bulma.subtitle.h2 ]]"), fixDocsView("ChiaPageFlexer", true)]);
    return reactElement("div", createObj(singleton(["children", reactApi.Children.toArray(Array.from(children_2))])));
})();

