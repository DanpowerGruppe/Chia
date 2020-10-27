import { keyValueList as MapUtil_keyValueList } from "../../.fable/fable-library.3.0.0-nagareyama-beta-003/MapUtil.js";
import { TableOption as Table_TableOption, table as Table_table } from "../../output/.fable/Fulma.2.10.0/Elements/Table.js";
import { ofSeq as List_ofSeq, ofArray as List_ofArray } from "../../.fable/fable-library.3.0.0-nagareyama-beta-003/List.js";
import { rangeNumber as Seq_rangeNumber, map as Seq_map, singleton as Seq_singleton, append as Seq_append, delay as Seq_delay } from "../../.fable/fable-library.3.0.0-nagareyama-beta-003/Seq.js";
import * as react from "react";
import { int32ToString as Util_int32ToString } from "../../.fable/fable-library.3.0.0-nagareyama-beta-003/Util.js";

export function showTable(tableData, siteMsg, setMsg, limit, dispatch) {
    let l, children_6, children_4, children_12;
    let section;
    let pattern_matching_result, l_1;
    if (limit != null) {
        if (l = (limit | 0), l < (() => {
            throw 1;
        })()) {
            pattern_matching_result = 0;
            l_1 = limit;
        }
        else {
            pattern_matching_result = 1;
        }
    }
    else {
        pattern_matching_result = 1;
    }
    switch (pattern_matching_result) {
        case 0: {
            section = l_1;
            break;
        }
        case 1: {
            throw 1;
            break;
        }
    }
    let table;
    const props_14 = [["style", MapUtil_keyValueList([["overflow", "auto"]], 1, true)]];
    const children_14 = [Table_table(List_ofArray([new Table_TableOption(0), new Table_TableOption(2), new Table_TableOption(1)]), List_ofArray([(children_6 = [(children_4 = List_ofSeq(Seq_delay(() => {
        let children;
        return Seq_append(Seq_singleton((children = [(() => {
            throw 1;
        })()], react.createElement("th", {
            onClick: (e) => {
                dispatch(siteMsg(setMsg(["sort", "0"])));
            },
        }, ...children))), Seq_delay(() => Seq_map((i) => {
            const children_2 = [(() => {
                throw 1;
            })()];
            return react.createElement("th", {
                onClick: (e_1) => {
                    dispatch(siteMsg(setMsg(["sort", Util_int32ToString(i)])));
                },
            }, ...children_2);
        }, Seq_rangeNumber(1, 1, (() => {
            throw 1;
        })() - 1))));
    })), react.createElement("tr", {}, ...children_4))], react.createElement("thead", {}, ...children_6)), (children_12 = List_ofSeq(Seq_delay(() => Seq_map((i_1) => {
        const children_10 = List_ofSeq(Seq_delay(() => Seq_map((j) => {
            const children_8 = [(() => {
                throw 1;
            })()];
            return react.createElement("th", {}, ...children_8);
        }, Seq_rangeNumber(0, 1, (() => {
            throw 1;
        })() - 1))));
        return react.createElement("tr", {}, ...children_10);
    }, Seq_rangeNumber(0, 1, section - 1)))), react.createElement("tbody", {}, ...children_12))]))];
    table = react.createElement("div", MapUtil_keyValueList(props_14, 1, true), ...children_14);
    return table;
}

