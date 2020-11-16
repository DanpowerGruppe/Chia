import { reactElement, reactApi, mkAttr } from "../../../../.fable/Feliz.1.17.0/Interop.fs.js";
import { singleton, empty, ofArray } from "../../../../.fable/fable-library.3.0.0-nagareyama-rc-007/List.js";
import { createObj } from "../../../../.fable/fable-library.3.0.0-nagareyama-rc-007/Util.js";
import { fixDocsView, code } from "../../Utils.js";

export const overview = (() => {
    let xs, xs_1, elms_2, xs_3;
    const children_3 = ofArray([(xs = ofArray([mkAttr("className", "title is-1"), mkAttr("children", reactApi.Children.toArray(["Chia.AIUtils "]))]), reactElement("h1", createObj(xs))), (xs_1 = ofArray([mkAttr("className", "subtitle is-2"), mkAttr("children", reactApi.Children.toArray(["Helper for ApplicationInsights"]))]), reactElement("h2", createObj(xs_1))), reactElement("hr", createObj(empty())), (elms_2 = ofArray([reactElement("p", createObj(singleton(["children", ["Use the AI helper to post a EventTelemetry"]]))), code("\r\n                open Chia\r\n                open FileWriter\r\n                open Microsoft.ApplicationInsights.DataContracts\r\n                eventMsg \"FTP files uploaded\"\r\n                    [ \"Files\", missingFiles |\u003e Set.toList |\u003e sprintf \"%A\"\r\n                      \"ExistingFiles\", existingFiles |\u003e Seq.length |\u003e sprintf \"%i\" ] fileWriterInfo\r\n                "), reactElement("p", createObj(singleton(["children", ["Use the AI helper to track an exception"]]))), code("\r\n                open Chia\r\n                open FileWriter\r\n                open Microsoft.ApplicationInsights.DataContracts\r\n                errorMsg (exn \"NoAttachmentError\")\r\n                    [ \"Mail\", details.Mail\r\n                      \"EmailAddress\", details.EmailAddress\r\n                      \"Subject\", details.Subject ] fileWriterInfo\r\n                ")]), (xs_3 = ofArray([mkAttr("className", "content"), mkAttr("children", reactApi.Children.toArray(Array.from(elms_2)))]), reactElement("div", createObj(xs_3)))), fixDocsView("ChiaAIUtils", false)]);
    return reactElement("div", createObj(singleton(["children", reactApi.Children.toArray(Array.from(children_3))])));
})();

