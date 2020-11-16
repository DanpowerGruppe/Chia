import { reactElement, reactApi, mkAttr } from "../../../../.fable/Feliz.1.17.0/Interop.fs.js";
import { empty, singleton, ofArray } from "../../../../.fable/fable-library.3.0.0-nagareyama-rc-007/List.js";
import { createObj } from "../../../../.fable/fable-library.3.0.0-nagareyama-rc-007/Util.js";
import { fixDocsView, code } from "../../Utils.js";

export const overview = (() => {
    let xs, elms_1, xs_1, xs_2, elms_2, xs_4;
    const children_3 = ofArray([(xs = ofArray([mkAttr("className", "title is-1"), mkAttr("children", reactApi.Children.toArray(["Chia.EventHub"]))]), reactElement("h1", createObj(xs))), (elms_1 = ofArray([(xs_1 = singleton(mkAttr("children", "Helper for Azure Event Hub")), reactElement("a", createObj(xs_1))), " extension for Feliz.Bulma"]), (xs_2 = ofArray([mkAttr("className", "subtitle is-2"), mkAttr("children", reactApi.Children.toArray(Array.from(elms_1)))]), reactElement("h2", createObj(xs_2)))), reactElement("hr", createObj(empty())), (elms_2 = ofArray([reactElement("p", createObj(singleton(["children", ["You can use Chia to sent out a event to Azure Event Hubs like this:"]]))), code("\r\n                open Chia.EventHubs\r\n\r\n                let eventHubClient = getEventHubClient \"EventHubSASConnectionString\"\r\n\r\n                type Data = int\r\n\r\n                let data = 100\r\n\r\n                do! pushEvent (eventHubClient,data,fileWriterInfoAzure)\r\n                do! pushSingleEvent (eventHubClient,data,fileWriterInfoAzure)")]), (xs_4 = ofArray([mkAttr("className", "content"), mkAttr("children", reactApi.Children.toArray(Array.from(elms_2)))]), reactElement("div", createObj(xs_4)))), fixDocsView("ChiaEventHub", false)]);
    return reactElement("div", createObj(singleton(["children", reactApi.Children.toArray(Array.from(children_3))])));
})();

