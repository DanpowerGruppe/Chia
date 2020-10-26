import { reactElement as Interop_reactElement, reactApi as Interop_reactApi, mkAttr as Interop_mkAttr } from "../../../../output/.fable/Feliz.1.16.0/Interop.js";
import { singleton as List_singleton, empty as List_empty, ofArray as List_ofArray } from "../../../../.fable/fable-library.3.0.0-nagareyama-beta-003/List.js";
import { createObjDebug as Util_createObjDebug } from "../../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Util.js";
import { fixDocsView as Utils_fixDocsView, code as Utils_code } from "../../Utils.js";

export const overview = (() => {
    let xs, xs_1, elms_2, xs_3;
    const children_3 = List_ofArray([(xs = List_ofArray([Interop_mkAttr("className", "title is-1"), Interop_mkAttr("children", Interop_reactApi.Children.toArray(["Chia.ExcelUtils"]))]), Interop_reactElement("h1", Util_createObjDebug(xs))), (xs_1 = List_ofArray([Interop_mkAttr("className", "subtitle is-2"), Interop_mkAttr("children", Interop_reactApi.Children.toArray(["Mini Excel Helper"]))]), Interop_reactElement("h2", Util_createObjDebug(xs_1))), Interop_reactElement("hr", Util_createObjDebug(List_empty())), (elms_2 = List_ofArray([Interop_reactElement("p", Util_createObjDebug(List_singleton(["children", ["Mini Helper to start and ExcelApp using the EPPlus package."]]))), Interop_reactElement("p", Util_createObjDebug(List_singleton(["children", ["Start your excel app like this:"]]))), Utils_code("\r\n                let excelPackage = startExcelApp ()")]), (xs_3 = List_ofArray([Interop_mkAttr("className", "content"), Interop_mkAttr("children", Interop_reactApi.Children.toArray(Array.from(elms_2)))]), Interop_reactElement("div", Util_createObjDebug(xs_3)))), Utils_fixDocsView("ChiaExcelUtils", false)]);
    return Interop_reactElement("div", Util_createObjDebug(List_singleton(["children", Interop_reactApi.Children.toArray(Array.from(children_3))])));
})();

