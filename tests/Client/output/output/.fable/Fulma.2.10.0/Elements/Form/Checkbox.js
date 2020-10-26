import { Common_GenericOptions__ToReactElement_Z46A53D36 as Common_Common_GenericOptions__ToReactElement_Z46A53D36, Common_parseOptions as Common_Common_parseOptions, Common_GenericOptions_Parse_9AE2F7C as Common_Common_GenericOptions_Parse_9AE2F7C, Common_GenericOptions__ToReactElement_Z6D3CD4B7 as Common_Common_GenericOptions__ToReactElement_Z6D3CD4B7 } from "../../Common.js";
import * as react from "react";
import { keyValueList as MapUtil_keyValueList } from "../../../../../.fable/fable-library.3.0.0-nagareyama-beta-003/MapUtil.js";
import { HTMLAttr as Fable$002EReact$002EProps_HTMLAttr } from "../../../Fable.React.7.0.1/Fable.React.Props.js";
import { singleton as List_singleton } from "../../../../../.fable/fable-library.3.0.0-nagareyama-beta-003/List.js";

export function checkbox(options, children) {
    return Common_Common_GenericOptions__ToReactElement_Z6D3CD4B7(Common_Common_GenericOptions_Parse_9AE2F7C(options, Common_Common_parseOptions, "checkbox"), (props, children_1) => react.createElement("label", MapUtil_keyValueList(props, 1, true), ...children_1), children);
}

export function input(options) {
    return Common_Common_GenericOptions__ToReactElement_Z46A53D36(Common_Common_GenericOptions_Parse_9AE2F7C(options, Common_Common_parseOptions, "checkbox", List_singleton(new Fable$002EReact$002EProps_HTMLAttr(159, "checkbox"))), (props) => react.createElement("input", MapUtil_keyValueList(props, 1, true)));
}

