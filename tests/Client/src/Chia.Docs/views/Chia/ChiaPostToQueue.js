import { reactElement as Interop_reactElement, reactApi as Interop_reactApi, mkAttr as Interop_mkAttr } from "../../../../.fable/Feliz.1.14.1/Interop.js";
import { singleton as List_singleton, empty as List_empty, ofArray as List_ofArray } from "../../../../.fable/fable-library.3.0.0-nagareyama-beta-003/List.js";
import { createObjDebug as Util_createObjDebug } from "../../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Util.js";
import { fixDocsView as Utils_fixDocsView, code as Utils_code } from "../../Utils.js";

export const overview = (() => {
    let xs, xs_1, elms_2, xs_3;
    const children_3 = List_ofArray([(xs = List_ofArray([Interop_mkAttr("className", "title is-1"), Interop_mkAttr("children", Interop_reactApi.Children.toArray(["Chia.PostToQueue"]))]), Interop_reactElement("h1", Util_createObjDebug(xs))), (xs_1 = List_ofArray([Interop_mkAttr("className", "subtitle is-2"), Interop_mkAttr("children", Interop_reactApi.Children.toArray(["Helper for Azure Queue messages"]))]), Interop_reactElement("h2", Util_createObjDebug(xs_1))), Interop_reactElement("hr", Util_createObjDebug(List_empty())), (elms_2 = List_ofArray([Interop_reactElement("p", Util_createObjDebug(List_singleton(["children", ["You can use Chia to sent out a Azure Queue message like this:"]]))), Utils_code("\r\n                open Chia.PostToQueue\r\n                open Chia.CreateTable\r\n                open Chia.Infrastructure\r\n\r\n                let azAccount = azConnection fileWriterInfo Location.WestEurope\r\n                let testQueue = getQueue azAccount \"test-queue-msg\"\r\n                let postToQueue = task {\r\n                  let content = [\"Data1\";\"Data2\"]\r\n                  do! postToQueue testQueue content\r\n                }")]), (xs_3 = List_ofArray([Interop_mkAttr("className", "content"), Interop_mkAttr("children", Interop_reactApi.Children.toArray(Array.from(elms_2)))]), Interop_reactElement("div", Util_createObjDebug(xs_3)))), Utils_fixDocsView("ChiaPostToQueue", false)]);
    return Interop_reactElement("div", Util_createObjDebug(List_singleton(["children", Interop_reactApi.Children.toArray(Array.from(children_3))])));
})();

