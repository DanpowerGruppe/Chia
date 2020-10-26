import { createObjDebug as Util_createObjDebug, equalsSafe as Util_equalsSafe } from "../../.fable/fable-library.3.0.0-nagareyama-beta-003/Util.js";
import { reactApi as Interop_reactApi, reactElement as Interop_reactElement, mkAttr as Interop_mkAttr } from "../../output/.fable/Feliz.1.16.0/Interop.js";
import { ofArray as List_ofArray, ofSeq as List_ofSeq, empty as List_empty, singleton as List_singleton } from "../../.fable/fable-library.3.0.0-nagareyama-beta-003/List.js";
import { singleton as Seq_singleton, append as Seq_append, delay as Seq_delay } from "../../.fable/fable-library.3.0.0-nagareyama-beta-003/Seq.js";
import { Msg as Domain_Msg } from "./Domain.js";
import { parseUrl as Router_parseUrl, Page as Router_Page, getHref as Router_getHref } from "./Router.js";
import { Helpers_combineClasses as ElementBuilders_Helpers_combineClasses } from "../../output/.fable/Feliz.Bulma.2.4.0/ElementBuilders.js";
import { overview as Chia_overview, installation as Chia_installation } from "./views/Chia/Chia.js";
import { overview as ChiaInitBuilder_overview } from "./views/Chia/ChiaInitBuilder.js";
import { overview as ChiaAIUtils_overview } from "./views/Chia/ChiaAIUtils.js";
import { overview as ChiaRedisCache_overview } from "./views/Chia/ChiaRedisCache.js";
import { overview as ChiaEventHub_overview } from "./views/Chia/ChiaEventHub.js";
import { overview as ChiaCreateXml_overview } from "./views/Chia/ChiaCreateXml.js";
import { overview as ChiaCreateTable_overview } from "./views/Chia/ChiaCreateTable.js";
import { overview as ChiaCreateBlob_overview } from "./views/Chia/ChiaCreateBlob.js";
import { overview as ChiaPostToQueue_overview } from "./views/Chia/ChiaPostToQueue.js";
import { overview as ChiaGetTableEntry_overview } from "./views/Chia/ChiaGetTableEntry.js";
import { overview as ChiaLogger_overview } from "./views/Chia/ChiaLogger.js";
import { overview as ChiaInfrastructure_overview } from "./views/Chia/ChiaInfrastructure.js";
import { overview as ChiaExcelUtils_overview } from "./views/Chia/ChiaExcelUtils.js";
import { overview as ChiaTableStorage_overview } from "./views/Chia/ChiaTableStorage.js";
import { installation as Client_installation, overview as Client_overview } from "./views/Chia.Client/Client.js";
import { overview as PageFlexer_overview } from "./views/Chia.Client/PageFlexer.js";
import { join as String_join } from "../../.fable/fable-library.3.0.0-nagareyama-beta-003/String.js";
import * as react from "react";
import { RouterModule_router as Router_RouterModule_router } from "../../output/.fable/Feliz.Router.3.2.0/Router.js";

export function menuPart(model, dispatch) {
    let xs_2, elms, xs_3, elms_1, xs_4, xs_5, elms_2, xs_6;
    const item = (t, p) => {
        let xs_1;
        const isActive = Util_equalsSafe(model.CurrentPage, p) ? List_singleton(Interop_mkAttr("className", "is-active")) : List_empty();
        const props = List_ofSeq(Seq_delay(() => Seq_append(isActive, Seq_delay(() => Seq_append(Seq_singleton(Interop_mkAttr("onClick", (_arg1) => {
            dispatch(new Domain_Msg(2, t));
        })), Seq_delay(() => Seq_append(Seq_singleton(Interop_mkAttr("children", t)), Seq_delay(() => {
            let value_2;
            return Seq_singleton((value_2 = Router_getHref(p), Interop_mkAttr("href", value_2)));
        }))))))));
        const children = List_singleton((xs_1 = ElementBuilders_Helpers_combineClasses("", props), Interop_reactElement("a", Util_createObjDebug(xs_1))));
        return Interop_reactElement("li", Util_createObjDebug(List_singleton(["children", Interop_reactApi.Children.toArray(Array.from(children))])));
    };
    const elms_3 = List_ofArray([(xs_2 = List_ofArray([Interop_mkAttr("className", "menu-label"), Interop_mkAttr("children", "Chia")]), Interop_reactElement("p", Util_createObjDebug(xs_2))), (elms = List_singleton(item("Overview", new Router_Page(0))), (xs_3 = List_ofArray([Interop_mkAttr("className", "menu-list"), Interop_mkAttr("children", Interop_reactApi.Children.toArray(Array.from(elms)))]), Interop_reactElement("ul", Util_createObjDebug(xs_3)))), (elms_1 = List_ofArray([item("Installation", new Router_Page(1)), item("InitBuilder", new Router_Page(2)), item("Infrastructure", new Router_Page(11)), item("Logger", new Router_Page(10)), item("CreateTable", new Router_Page(7)), item("CreateBlob", new Router_Page(8)), item("CreateXml", new Router_Page(6)), item("PostToQueue", new Router_Page(9)), item("GetTableEntry", new Router_Page(12)), item("RedisCache", new Router_Page(4)), item("EventHub", new Router_Page(5)), item("TableStorage", new Router_Page(14)), item("AIUtils", new Router_Page(3)), item("ExcelUtils", new Router_Page(13))]), (xs_4 = List_ofArray([Interop_mkAttr("className", "menu-list"), Interop_mkAttr("children", Interop_reactApi.Children.toArray(Array.from(elms_1)))]), Interop_reactElement("ul", Util_createObjDebug(xs_4)))), (xs_5 = List_ofArray([Interop_mkAttr("className", "menu-label"), Interop_mkAttr("children", "Chia.Client")]), Interop_reactElement("p", Util_createObjDebug(xs_5))), (elms_2 = List_ofArray([item("Overview", new Router_Page(15)), item("Installation", new Router_Page(16)), item("PageFlexer", new Router_Page(17))]), (xs_6 = List_ofArray([Interop_mkAttr("className", "menu-list"), Interop_mkAttr("children", Interop_reactApi.Children.toArray(Array.from(elms_2)))]), Interop_reactElement("ul", Util_createObjDebug(xs_6))))]);
    const xs_7 = List_ofArray([Interop_mkAttr("className", "menu"), Interop_mkAttr("children", Interop_reactApi.Children.toArray(Array.from(elms_3)))]);
    return Interop_reactElement("aside", Util_createObjDebug(xs_7));
}

export function contentPart(model, dispatch) {
    const matchValue = model.CurrentPage;
    switch (matchValue.tag) {
        case 1: {
            return Chia_installation;
        }
        case 2: {
            return ChiaInitBuilder_overview;
        }
        case 3: {
            return ChiaAIUtils_overview;
        }
        case 4: {
            return ChiaRedisCache_overview;
        }
        case 5: {
            return ChiaEventHub_overview;
        }
        case 6: {
            return ChiaCreateXml_overview;
        }
        case 7: {
            return ChiaCreateTable_overview;
        }
        case 8: {
            return ChiaCreateBlob_overview;
        }
        case 9: {
            return ChiaPostToQueue_overview;
        }
        case 12: {
            return ChiaGetTableEntry_overview;
        }
        case 10: {
            return ChiaLogger_overview;
        }
        case 11: {
            return ChiaInfrastructure_overview;
        }
        case 13: {
            return ChiaExcelUtils_overview;
        }
        case 14: {
            return ChiaTableStorage_overview;
        }
        case 15: {
            return Client_overview;
        }
        case 16: {
            return Client_installation;
        }
        case 17: {
            return PageFlexer_overview;
        }
        default: {
            return Chia_overview;
        }
    }
}

export function view(model, dispatch) {
    let elems_3, elms, props_1, elems_1, props, value_2, xs_1, elm, children, value_4, xs_2, xs_4, xs_5;
    let render;
    const xs_6 = List_ofArray([Interop_mkAttr("className", String_join(" ", ["container", "md:flex", "justify-center"])), (elems_3 = [(elms = List_singleton((props_1 = List_ofArray([Interop_mkAttr("className", "is-ancestor"), (elems_1 = [(props = List_ofArray([Interop_mkAttr("className", "is-2"), (value_2 = menuPart(model, dispatch), Interop_mkAttr("children", value_2))]), (xs_1 = ElementBuilders_Helpers_combineClasses("tile", props), Interop_reactElement("div", Util_createObjDebug(xs_1)))), (elm = contentPart(model, dispatch), (children = (value_4 = elm, (List_singleton(value_4))), (xs_2 = List_ofArray([Interop_mkAttr("className", "tile"), Interop_mkAttr("children", Interop_reactApi.Children.toArray(Array.from(children)))]), Interop_reactElement("div", Util_createObjDebug(xs_2)))))], Interop_mkAttr("children", Interop_reactApi.Children.toArray(Array.from(elems_1))))]), (xs_4 = ElementBuilders_Helpers_combineClasses("tile", props_1), Interop_reactElement("div", Util_createObjDebug(xs_4))))), (xs_5 = List_ofArray([Interop_mkAttr("className", "section"), Interop_mkAttr("children", Interop_reactApi.Children.toArray(Array.from(elms)))]), Interop_reactElement("section", Util_createObjDebug(xs_5))))], Interop_mkAttr("children", Interop_reactApi.Children.toArray(Array.from(elems_3))))]);
    render = Interop_reactElement("div", Util_createObjDebug(xs_6));
    const props_3 = List_ofArray([["onUrlChanged", (arg_1) => {
        let arg, arg0, _arg1;
        dispatch((arg = arg_1, (arg0 = (_arg1 = arg, (Router_parseUrl(_arg1))), new Domain_Msg(0, arg0))));
    }], ["application", react.createElement(react.Fragment, {}, render)]]);
    return Router_RouterModule_router(Util_createObjDebug(props_3));
}

