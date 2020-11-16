import { reactElement, reactApi, mkAttr } from "../../../../.fable/Feliz.1.17.0/Interop.fs.js";
import { singleton, empty, ofArray } from "../../../../.fable/fable-library.3.0.0-nagareyama-rc-007/List.js";
import { createObj } from "../../../../.fable/fable-library.3.0.0-nagareyama-rc-007/Util.js";
import { fixDocsView, code } from "../../Utils.js";

export const overview = (() => {
    let xs, xs_1, elms_2, xs_3;
    const children_3 = ofArray([(xs = ofArray([mkAttr("className", "title is-1"), mkAttr("children", reactApi.Children.toArray(["Chia.PostToQueue"]))]), reactElement("h1", createObj(xs))), (xs_1 = ofArray([mkAttr("className", "subtitle is-2"), mkAttr("children", reactApi.Children.toArray(["Helper for Azure Queue messages"]))]), reactElement("h2", createObj(xs_1))), reactElement("hr", createObj(empty())), (elms_2 = ofArray([reactElement("p", createObj(singleton(["children", ["You can use Chia to sent out a Azure Queue message like this:"]]))), code("\r\n                open Chia.PostToQueue\r\n                open Chia.CreateTable\r\n                open Chia.Infrastructure\r\n\r\n                let azAccount = azConnection fileWriterInfo Location.WestEurope\r\n                let testQueue = getQueue azAccount \"test-queue-msg\"\r\n                let postToQueue = task {\r\n                  let content = [\"Data1\";\"Data2\"]\r\n                  do! postToQueue testQueue content\r\n                }")]), (xs_3 = ofArray([mkAttr("className", "content"), mkAttr("children", reactApi.Children.toArray(Array.from(elms_2)))]), reactElement("div", createObj(xs_3)))), fixDocsView("ChiaPostToQueue", false)]);
    return reactElement("div", createObj(singleton(["children", reactApi.Children.toArray(Array.from(children_3))])));
})();

