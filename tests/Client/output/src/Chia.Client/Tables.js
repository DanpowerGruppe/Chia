import { keyValueList } from "../../.fable/fable-library.3.0.0-nagareyama-rc-007/MapUtil.js";
import { TableOption, table as table_1 } from "../../.fable/Fulma.2.10.0/Elements/Table.fs.js";
import { ofSeq, ofArray } from "../../.fable/fable-library.3.0.0-nagareyama-rc-007/List.js";
import { rangeNumber, map, singleton, append, delay } from "../../.fable/fable-library.3.0.0-nagareyama-rc-007/Seq.js";
import { toString } from "../../.fable/fable-library.3.0.0-nagareyama-rc-007/Types.js";
import * as react from "react";
import { int32ToString } from "../../.fable/fable-library.3.0.0-nagareyama-rc-007/Util.js";

export function showTable(tableData, siteMsg, setMsg, limit, dispatch) {
    let l, l_1, children_6, children_4, children_12;
    const section = ((limit != null) ? ((l = (limit | 0), l < tableData.Content.length) ? (l_1 = (limit | 0), l_1) : tableData.Content.length) : tableData.Content.length) | 0;
    let table;
    const props_14 = [["style", keyValueList([["overflow", "auto"]], 1)]];
    const children_14 = [table_1(ofArray([new TableOption(0), new TableOption(2), new TableOption(1)]), ofArray([(children_6 = [(children_4 = ofSeq(delay(() => {
        let children;
        return append(singleton((children = [toString(tableData.Header[0])], react.createElement("th", {
            onClick: (e) => {
                dispatch(siteMsg(setMsg(["sort", "0"])));
            },
        }, ...children))), delay(() => map((i) => {
            const children_2 = [toString(tableData.Header[i])];
            return react.createElement("th", {
                onClick: (e_1) => {
                    dispatch(siteMsg(setMsg(["sort", int32ToString(i)])));
                },
            }, ...children_2);
        }, rangeNumber(1, 1, tableData.Header.length - 1))));
    })), react.createElement("tr", {}, ...children_4))], react.createElement("thead", {}, ...children_6)), (children_12 = ofSeq(delay(() => map((i_1) => {
        const children_10 = ofSeq(delay(() => map((j) => {
            const children_8 = [toString(tableData.Content[i_1][j])];
            return react.createElement("th", {}, ...children_8);
        }, rangeNumber(0, 1, tableData.Content[i_1].length - 1))));
        return react.createElement("tr", {}, ...children_10);
    }, rangeNumber(0, 1, section - 1)))), react.createElement("tbody", {}, ...children_12))]))];
    table = react.createElement("div", keyValueList(props_14, 1), ...children_14);
    return table;
}

