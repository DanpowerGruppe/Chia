import { createObj, equalsSafe } from "../../.fable/fable-library.3.0.0-nagareyama-rc-007/Util.js";
import { reactApi, reactElement, mkAttr } from "../../.fable/Feliz.1.17.0/Interop.fs.js";
import { ofArray, ofSeq, empty, singleton } from "../../.fable/fable-library.3.0.0-nagareyama-rc-007/List.js";
import { singleton as singleton_1, append, delay } from "../../.fable/fable-library.3.0.0-nagareyama-rc-007/Seq.js";
import { Msg } from "./Domain.js";
import { parseUrl, Page, getHref } from "./Router.js";
import { Helpers_combineClasses } from "../../.fable/Feliz.Bulma.2.4.0/ElementBuilders.fs.js";
import { overview as overview_15, installation } from "./views/Chia/Chia.js";
import { overview } from "./views/Chia/ChiaInitBuilder.js";
import { overview as overview_1 } from "./views/Chia/ChiaAIUtils.js";
import { overview as overview_2 } from "./views/Chia/ChiaRedisCache.js";
import { overview as overview_3 } from "./views/Chia/ChiaEventHub.js";
import { overview as overview_4 } from "./views/Chia/ChiaCreateXml.js";
import { overview as overview_5 } from "./views/Chia/ChiaCreateTable.js";
import { overview as overview_6 } from "./views/Chia/ChiaCreateBlob.js";
import { overview as overview_7 } from "./views/Chia/ChiaPostToQueue.js";
import { overview as overview_8 } from "./views/Chia/ChiaGetTableEntry.js";
import { overview as overview_9 } from "./views/Chia/ChiaLogger.js";
import { overview as overview_10 } from "./views/Chia/ChiaInfrastructure.js";
import { overview as overview_11 } from "./views/Chia/ChiaExcelUtils.js";
import { overview as overview_12 } from "./views/Chia/ChiaTableStorage.js";
import { installation as installation_1, overview as overview_13 } from "./views/Chia.Client/Client.js";
import { overview as overview_14 } from "./views/Chia.Client/PageFlexer.js";
import { join } from "../../.fable/fable-library.3.0.0-nagareyama-rc-007/String.js";
import * as react from "react";
import { RouterModule_router } from "../../.fable/Feliz.Router.3.2.0/Router.fs.js";

export function menuPart(model, dispatch) {
    let xs_2, elms, xs_3, elms_1, xs_4, xs_5, elms_2, xs_6;
    const item = (t, p) => {
        let xs_1;
        const isActive = equalsSafe(model.CurrentPage, p) ? singleton(mkAttr("className", "is-active")) : empty();
        const props = ofSeq(delay(() => append(isActive, delay(() => append(singleton_1(mkAttr("onClick", (_arg1) => {
            dispatch(new Msg(2, t));
        })), delay(() => append(singleton_1(mkAttr("children", t)), delay(() => {
            let value_2;
            return singleton_1((value_2 = getHref(p), mkAttr("href", value_2)));
        }))))))));
        const children = singleton((xs_1 = Helpers_combineClasses("", props), reactElement("a", createObj(xs_1))));
        return reactElement("li", createObj(singleton(["children", reactApi.Children.toArray(Array.from(children))])));
    };
    const elms_3 = ofArray([(xs_2 = ofArray([mkAttr("className", "menu-label"), mkAttr("children", "Chia")]), reactElement("p", createObj(xs_2))), (elms = singleton(item("Overview", new Page(0))), (xs_3 = ofArray([mkAttr("className", "menu-list"), mkAttr("children", reactApi.Children.toArray(Array.from(elms)))]), reactElement("ul", createObj(xs_3)))), (elms_1 = ofArray([item("Installation", new Page(1)), item("InitBuilder", new Page(2)), item("Infrastructure", new Page(11)), item("Logger", new Page(10)), item("CreateTable", new Page(7)), item("CreateBlob", new Page(8)), item("CreateXml", new Page(6)), item("PostToQueue", new Page(9)), item("GetTableEntry", new Page(12)), item("RedisCache", new Page(4)), item("EventHub", new Page(5)), item("TableStorage", new Page(14)), item("AIUtils", new Page(3)), item("ExcelUtils", new Page(13))]), (xs_4 = ofArray([mkAttr("className", "menu-list"), mkAttr("children", reactApi.Children.toArray(Array.from(elms_1)))]), reactElement("ul", createObj(xs_4)))), (xs_5 = ofArray([mkAttr("className", "menu-label"), mkAttr("children", "Chia.Client")]), reactElement("p", createObj(xs_5))), (elms_2 = ofArray([item("Overview", new Page(15)), item("Installation", new Page(16)), item("PageFlexer", new Page(17))]), (xs_6 = ofArray([mkAttr("className", "menu-list"), mkAttr("children", reactApi.Children.toArray(Array.from(elms_2)))]), reactElement("ul", createObj(xs_6))))]);
    const xs_7 = ofArray([mkAttr("className", "menu"), mkAttr("children", reactApi.Children.toArray(Array.from(elms_3)))]);
    return reactElement("aside", createObj(xs_7));
}

export function contentPart(model, dispatch) {
    const matchValue = model.CurrentPage;
    switch (matchValue.tag) {
        case 1: {
            return installation;
        }
        case 2: {
            return overview;
        }
        case 3: {
            return overview_1;
        }
        case 4: {
            return overview_2;
        }
        case 5: {
            return overview_3;
        }
        case 6: {
            return overview_4;
        }
        case 7: {
            return overview_5;
        }
        case 8: {
            return overview_6;
        }
        case 9: {
            return overview_7;
        }
        case 12: {
            return overview_8;
        }
        case 10: {
            return overview_9;
        }
        case 11: {
            return overview_10;
        }
        case 13: {
            return overview_11;
        }
        case 14: {
            return overview_12;
        }
        case 15: {
            return overview_13;
        }
        case 16: {
            return installation_1;
        }
        case 17: {
            return overview_14;
        }
        default: {
            return overview_15;
        }
    }
}

export function view(model, dispatch) {
    let elems_3, elms, props_1, elems_1, props, value_2, xs_1, elm, children, xs_2, xs_4, xs_5;
    let render;
    const xs_6 = ofArray([mkAttr("className", join(" ", ["container", "md:flex", "justify-center"])), (elems_3 = [(elms = singleton((props_1 = ofArray([mkAttr("className", "is-ancestor"), (elems_1 = [(props = ofArray([mkAttr("className", "is-2"), (value_2 = menuPart(model, dispatch), mkAttr("children", value_2))]), (xs_1 = Helpers_combineClasses("tile", props), reactElement("div", createObj(xs_1)))), (elm = contentPart(model, dispatch), (children = (singleton(elm)), (xs_2 = ofArray([mkAttr("className", "tile"), mkAttr("children", reactApi.Children.toArray(Array.from(children)))]), reactElement("div", createObj(xs_2)))))], mkAttr("children", reactApi.Children.toArray(Array.from(elems_1))))]), (xs_4 = Helpers_combineClasses("tile", props_1), reactElement("div", createObj(xs_4))))), (xs_5 = ofArray([mkAttr("className", "section"), mkAttr("children", reactApi.Children.toArray(Array.from(elms)))]), reactElement("section", createObj(xs_5))))], mkAttr("children", reactApi.Children.toArray(Array.from(elems_3))))]);
    render = reactElement("div", createObj(xs_6));
    const props_3 = ofArray([["onUrlChanged", (arg_1) => {
        let arg0;
        dispatch((arg0 = (parseUrl(arg_1)), new Msg(0, arg0)));
    }], ["application", react.createElement(react.Fragment, {}, render)]]);
    return RouterModule_router(createObj(props_3));
}

