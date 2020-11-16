import { concat } from "../../.fable/fable-library.3.0.0-nagareyama-rc-007/Seq.js";
import { HTMLAttr } from "../../.fable/Fable.React.7.0.1/Fable.React.Props.fs.js";
import { empty, ofArray, singleton } from "../../.fable/fable-library.3.0.0-nagareyama-rc-007/List.js";
import * as react from "react";
import { keyValueList } from "../../.fable/fable-library.3.0.0-nagareyama-rc-007/MapUtil.js";

export function pageFlexer(props, content) {
    const props_1 = concat([singleton(new HTMLAttr(64, "page-flexer")), props]);
    return react.createElement("div", keyValueList(props_1, 1), ...content);
}

export function pageHeader(props, content) {
    const props_1 = concat([singleton(new HTMLAttr(64, "page-header")), props]);
    return react.createElement("div", keyValueList(props_1, 1), ...content);
}

export function pageContent(props, content) {
    const props_1 = concat([singleton(new HTMLAttr(64, "page-content")), props]);
    return react.createElement("div", keyValueList(props_1, 1), ...content);
}

export function pageFooter(props, content) {
    const props_1 = concat([singleton(new HTMLAttr(64, "page-footer")), props]);
    return react.createElement("div", keyValueList(props_1, 1), ...content);
}

export function scrollPageContent(props, content) {
    const props_1 = concat([ofArray([new HTMLAttr(64, "scroll-page-content"), new HTMLAttr(99, "epic-style")]), props]);
    return react.createElement("div", keyValueList(props_1, 1), ...content);
}

export function frameContent(props, content) {
    return pageFlexer(props, [pageContent(empty(), content)]);
}

export function frameHeaderContent(props, contentH, contentC) {
    return pageFlexer(props, [pageHeader(empty(), contentH), pageContent(empty(), contentC)]);
}

export function frameHeaderContentFooter(props, contentH, contentC, contentF) {
    return pageFlexer(props, [pageHeader(empty(), contentH), pageContent(empty(), contentC), pageContent(empty(), contentF)]);
}

export function frameScrollContent(props, content) {
    return pageFlexer(props, [scrollPageContent(empty(), content)]);
}

export function frameHeaderScrollContent(props, contentH, contentC) {
    return pageFlexer(props, [pageHeader(empty(), contentH), scrollPageContent(empty(), contentC)]);
}

export function frameHeaderScrollContentFooter(props, contentH, contentC, contentF) {
    return pageFlexer(props, [pageHeader(empty(), contentH), scrollPageContent(empty(), contentC), pageContent(empty(), contentF)]);
}

