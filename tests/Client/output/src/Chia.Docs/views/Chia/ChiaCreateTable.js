import { reactElement, reactApi, mkAttr } from "../../../../.fable/Feliz.1.17.0/Interop.fs.js";
import { singleton, empty, ofArray } from "../../../../.fable/fable-library.3.0.0-nagareyama-rc-007/List.js";
import { createObj } from "../../../../.fable/fable-library.3.0.0-nagareyama-rc-007/Util.js";
import { fixDocsView, code } from "../../Utils.js";

export const overview = (() => {
    let xs, xs_1, elms_2, xs_3, elms_3, xs_5;
    const children_4 = ofArray([(xs = ofArray([mkAttr("className", "title is-1"), mkAttr("children", reactApi.Children.toArray(["Chia.CreateTable"]))]), reactElement("h1", createObj(xs))), (xs_1 = ofArray([mkAttr("className", "subtitle is-2"), mkAttr("children", reactApi.Children.toArray(["Create your Azure tables by using Chia"]))]), reactElement("h2", createObj(xs_1))), reactElement("hr", createObj(empty())), (elms_2 = ofArray([reactElement("p", createObj(singleton(["children", ["Create and get a reference to your Azure table like this:"]]))), code("\r\n                open Chia.CreateTable\r\n                let testTable = getTable \"TestTable\" azAccount ")]), (xs_3 = ofArray([mkAttr("className", "content"), mkAttr("children", reactApi.Children.toArray(Array.from(elms_2)))]), reactElement("div", createObj(xs_3)))), reactElement("hr", createObj(empty())), (elms_3 = ofArray([reactElement("p", createObj(singleton(["children", ["Safely delete to your Azure table like this:"]]))), code("\r\n                open Chia.CreateTable\r\n                let isDeleted = task {\r\n                    let! testTable = deleteTable \"TestTable\" azAccount\r\n                    return textTable\r\n                } ")]), (xs_5 = ofArray([mkAttr("className", "content"), mkAttr("children", reactApi.Children.toArray(Array.from(elms_3)))]), reactElement("div", createObj(xs_5)))), fixDocsView("ChiaCreateTable", false)]);
    return reactElement("div", createObj(singleton(["children", reactApi.Children.toArray(Array.from(children_4))])));
})();

