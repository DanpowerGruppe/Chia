import { reactElement, reactApi, mkAttr } from "../../../../.fable/Feliz.1.17.0/Interop.fs.js";
import { singleton, empty, ofArray } from "../../../../.fable/fable-library.3.0.0-nagareyama-rc-007/List.js";
import { createObj } from "../../../../.fable/fable-library.3.0.0-nagareyama-rc-007/Util.js";
import { fixDocsView, code } from "../../Utils.js";

export const overview = (() => {
    let xs, xs_1, elms_2, xs_3;
    const children_3 = ofArray([(xs = ofArray([mkAttr("className", "title is-1"), mkAttr("children", reactApi.Children.toArray(["Chia.CreateBlob"]))]), reactElement("h1", createObj(xs))), (xs_1 = ofArray([mkAttr("className", "subtitle is-2"), mkAttr("children", reactApi.Children.toArray(["Helper to create a Azure blobs"]))]), reactElement("h2", createObj(xs_1))), reactElement("hr", createObj(empty())), (elms_2 = ofArray([reactElement("p", createObj(singleton(["children", ["First create your blob container"]]))), code("\r\n                open Chia.CreateBlob\r\n                let containerInfo = {   StorageConnString = StorageConnString = StorageAccount.storageConnString\r\n                                        ContainerName = \"ContainerName\"}\r\n                let myContainer = getContainer containerInfo"), reactElement("p", createObj(singleton(["children", ["Now you can get a list of all you blobs in the container like this:"]]))), code("\r\n                let blobItems = getBlobs myContainer")]), (xs_3 = ofArray([mkAttr("className", "content"), mkAttr("children", reactApi.Children.toArray(Array.from(elms_2)))]), reactElement("div", createObj(xs_3)))), fixDocsView("ChiaCreateBlob", false)]);
    return reactElement("div", createObj(singleton(["children", reactApi.Children.toArray(Array.from(children_3))])));
})();

