import { reactElement as Interop_reactElement, reactApi as Interop_reactApi, mkAttr as Interop_mkAttr } from "../../output/.fable/Feliz.1.14.1/Interop.js";
import { singleton as List_singleton, empty as List_empty, ofArray as List_ofArray } from "../../.fable/fable-library.3.0.0-nagareyama-beta-002/List.js";
import { createObjDebug as Util_createObjDebug } from "../../.fable/fable-library.3.0.0-nagareyama-beta-002/Util.js";
import { fixDocsView as Utils_fixDocsView, code as Utils_code } from "../../Utils.js";

export const overview = (() => {
    let xs, xs_1, elms_2, xs_3;
    const children_3 = List_ofArray([(xs = List_ofArray([Interop_mkAttr("className", "title is-1"), Interop_mkAttr("children", Interop_reactApi.Children.toArray(["Chia.CreateBlob"]))]), Interop_reactElement("h1", Util_createObjDebug(xs))), (xs_1 = List_ofArray([Interop_mkAttr("className", "subtitle is-2"), Interop_mkAttr("children", Interop_reactApi.Children.toArray(["Helper to create a Azure blobs"]))]), Interop_reactElement("h2", Util_createObjDebug(xs_1))), Interop_reactElement("hr", Util_createObjDebug(List_empty())), (elms_2 = List_ofArray([Interop_reactElement("p", Util_createObjDebug(List_singleton(["children", ["First create your blob container"]]))), Utils_code("\r\n                open Chia.CreateBlob\r\n                let containerInfo = {   StorageConnString = StorageConnString = StorageAccount.storageConnString\r\n                                        ContainerName = \"ContainerName\"}\r\n                let myContainer = getContainer containerInfo"), Interop_reactElement("p", Util_createObjDebug(List_singleton(["children", ["Now you can get a list of all you blobs in the container like this:"]]))), Utils_code("\r\n                let blobItems = getBlobs myContainer")]), (xs_3 = List_ofArray([Interop_mkAttr("className", "content"), Interop_mkAttr("children", Interop_reactApi.Children.toArray(Array.from(elms_2)))]), Interop_reactElement("div", Util_createObjDebug(xs_3)))), Utils_fixDocsView("ChiaCreateBlob", false)]);
    return Interop_reactElement("div", Util_createObjDebug(List_singleton(["children", Interop_reactApi.Children.toArray(Array.from(children_3))])));
})();

