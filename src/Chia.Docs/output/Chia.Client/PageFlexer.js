import { concat as Seq_concat } from "../.fable/fable-library.3.0.0-nagareyama-beta-002/Seq.js";
import { HTMLAttr as Fable$002EReact$002EProps_HTMLAttr } from "../output/.fable/Fable.React.7.0.1/Fable.React.Props.js";
import { empty as List_empty, ofArray as List_ofArray, singleton as List_singleton } from "../.fable/fable-library.3.0.0-nagareyama-beta-002/List.js";
import * as react from "react";
import { keyValueList as MapUtil_keyValueList } from "../.fable/fable-library.3.0.0-nagareyama-beta-002/MapUtil.js";

export function pageFlexer(props, content) {
    const props_1 = Seq_concat([List_singleton(new Fable$002EReact$002EProps_HTMLAttr(64, "page-flexer")), props]);
    return react.createElement("div", MapUtil_keyValueList(props_1, 1, true), ...content);
}

export function pageHeader(props, content) {
    const props_1 = Seq_concat([List_singleton(new Fable$002EReact$002EProps_HTMLAttr(64, "page-header")), props]);
    return react.createElement("div", MapUtil_keyValueList(props_1, 1, true), ...content);
}

export function pageContent(props, content) {
    const props_1 = Seq_concat([List_singleton(new Fable$002EReact$002EProps_HTMLAttr(64, "page-content")), props]);
    return react.createElement("div", MapUtil_keyValueList(props_1, 1, true), ...content);
}

export function pageFooter(props, content) {
    const props_1 = Seq_concat([List_singleton(new Fable$002EReact$002EProps_HTMLAttr(64, "page-footer")), props]);
    return react.createElement("div", MapUtil_keyValueList(props_1, 1, true), ...content);
}

export function scrollPageContent(props, content) {
    const props_1 = Seq_concat([List_ofArray([new Fable$002EReact$002EProps_HTMLAttr(64, "scroll-page-content"), new Fable$002EReact$002EProps_HTMLAttr(99, "epic-style")]), props]);
    return react.createElement("div", MapUtil_keyValueList(props_1, 1, true), ...content);
}

export function frameContent(props, content) {
    return pageFlexer(props, [pageContent(List_empty(), content)]);
}

export function frameHeaderContent(props, contentH, contentC) {
    return pageFlexer(props, [pageHeader(List_empty(), contentH), pageContent(List_empty(), contentC)]);
}

export function frameHeaderContentFooter(props, contentH, contentC, contentF) {
    return pageFlexer(props, [pageHeader(List_empty(), contentH), pageContent(List_empty(), contentC), pageContent(List_empty(), contentF)]);
}

export function frameScrollContent(props, content) {
    return pageFlexer(props, [scrollPageContent(List_empty(), content)]);
}

export function frameHeaderScrollContent(props, contentH, contentC) {
    return pageFlexer(props, [pageHeader(List_empty(), contentH), scrollPageContent(List_empty(), contentC)]);
}

export function frameHeaderScrollContentFooter(props, contentH, contentC, contentF) {
    return pageFlexer(props, [pageHeader(List_empty(), contentH), scrollPageContent(List_empty(), contentC), pageContent(List_empty(), contentF)]);
}

