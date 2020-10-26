import { Union as Types_Union } from "../../.fable/fable-library.3.0.0-nagareyama-beta-003/Types.js";
import { union_type as Reflection_union_type } from "../../.fable/fable-library.3.0.0-nagareyama-beta-003/Reflection.js";
import { RouterModule_encodeParts as Router_RouterModule_encodeParts } from "../../.fable/Feliz.Router.3.2.0/Router.js";
import { singleton as List_singleton } from "../../.fable/fable-library.3.0.0-nagareyama-beta-003/List.js";

export class Page extends Types_Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["Chia", "ChiaInstallation", "ChiaInitBuilder", "ChiaAIUtils", "ChiaRedisCache", "ChiaEventHub", "ChiaCreateXml", "ChiaCreateTable", "ChiaCreateBlob", "ChiaPostToQueue", "ChiaLogger", "ChiaInfrastructure", "ChiaGetTableEntry", "ChiaExcelUtils", "ChiaTableStorage", "ChiaClient", "ChiaClientInstallation", "ChiaClientPageFlexer"];
    }
}

export function Page$reflection() {
    return Reflection_union_type("Router.Page", [], Page, () => [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]);
}

export const defaultPage = new Page(0);

export function parseUrl(_arg1) {
    let pattern_matching_result;
    if (_arg1.tail != null) {
        if (_arg1.head === "") {
            if (_arg1.tail.tail == null) {
                pattern_matching_result = 0;
            }
            else {
                pattern_matching_result = 18;
            }
        }
        else if (_arg1.head === "installation") {
            if (_arg1.tail.tail == null) {
                pattern_matching_result = 1;
            }
            else {
                pattern_matching_result = 18;
            }
        }
        else if (_arg1.head === "initbuilder") {
            if (_arg1.tail.tail == null) {
                pattern_matching_result = 2;
            }
            else {
                pattern_matching_result = 18;
            }
        }
        else if (_arg1.head === "aiutils") {
            if (_arg1.tail.tail == null) {
                pattern_matching_result = 3;
            }
            else {
                pattern_matching_result = 18;
            }
        }
        else if (_arg1.head === "rediscache") {
            if (_arg1.tail.tail == null) {
                pattern_matching_result = 4;
            }
            else {
                pattern_matching_result = 18;
            }
        }
        else if (_arg1.head === "eventhub") {
            if (_arg1.tail.tail == null) {
                pattern_matching_result = 5;
            }
            else {
                pattern_matching_result = 18;
            }
        }
        else if (_arg1.head === "createxml") {
            if (_arg1.tail.tail == null) {
                pattern_matching_result = 6;
            }
            else {
                pattern_matching_result = 18;
            }
        }
        else if (_arg1.head === "createtable") {
            if (_arg1.tail.tail == null) {
                pattern_matching_result = 7;
            }
            else {
                pattern_matching_result = 18;
            }
        }
        else if (_arg1.head === "createblob") {
            if (_arg1.tail.tail == null) {
                pattern_matching_result = 8;
            }
            else {
                pattern_matching_result = 18;
            }
        }
        else if (_arg1.head === "posttoqueue") {
            if (_arg1.tail.tail == null) {
                pattern_matching_result = 9;
            }
            else {
                pattern_matching_result = 18;
            }
        }
        else if (_arg1.head === "gettableentry") {
            if (_arg1.tail.tail == null) {
                pattern_matching_result = 10;
            }
            else {
                pattern_matching_result = 18;
            }
        }
        else if (_arg1.head === "logger") {
            if (_arg1.tail.tail == null) {
                pattern_matching_result = 11;
            }
            else {
                pattern_matching_result = 18;
            }
        }
        else if (_arg1.head === "infrastructure") {
            if (_arg1.tail.tail == null) {
                pattern_matching_result = 12;
            }
            else {
                pattern_matching_result = 18;
            }
        }
        else if (_arg1.head === "excelutils") {
            if (_arg1.tail.tail == null) {
                pattern_matching_result = 13;
            }
            else {
                pattern_matching_result = 18;
            }
        }
        else if (_arg1.head === "tablestorage") {
            if (_arg1.tail.tail == null) {
                pattern_matching_result = 14;
            }
            else {
                pattern_matching_result = 18;
            }
        }
        else if (_arg1.head === "client") {
            if (_arg1.tail.tail == null) {
                pattern_matching_result = 15;
            }
            else {
                pattern_matching_result = 18;
            }
        }
        else if (_arg1.head === "clientinstallation") {
            if (_arg1.tail.tail == null) {
                pattern_matching_result = 16;
            }
            else {
                pattern_matching_result = 18;
            }
        }
        else if (_arg1.head === "clientpageflexer") {
            if (_arg1.tail.tail == null) {
                pattern_matching_result = 17;
            }
            else {
                pattern_matching_result = 18;
            }
        }
        else {
            pattern_matching_result = 18;
        }
    }
    else {
        pattern_matching_result = 18;
    }
    switch (pattern_matching_result) {
        case 0: {
            return new Page(0);
        }
        case 1: {
            return new Page(1);
        }
        case 2: {
            return new Page(2);
        }
        case 3: {
            return new Page(3);
        }
        case 4: {
            return new Page(4);
        }
        case 5: {
            return new Page(5);
        }
        case 6: {
            return new Page(6);
        }
        case 7: {
            return new Page(7);
        }
        case 8: {
            return new Page(8);
        }
        case 9: {
            return new Page(9);
        }
        case 10: {
            return new Page(12);
        }
        case 11: {
            return new Page(10);
        }
        case 12: {
            return new Page(11);
        }
        case 13: {
            return new Page(13);
        }
        case 14: {
            return new Page(14);
        }
        case 15: {
            return new Page(15);
        }
        case 16: {
            return new Page(16);
        }
        case 17: {
            return new Page(17);
        }
        case 18: {
            return defaultPage;
        }
    }
}

export function getHref(_arg1) {
    switch (_arg1.tag) {
        case 1: {
            return Router_RouterModule_encodeParts(List_singleton("installation"), 1);
        }
        case 2: {
            return Router_RouterModule_encodeParts(List_singleton("initbuilder"), 1);
        }
        case 3: {
            return Router_RouterModule_encodeParts(List_singleton("aiutils"), 1);
        }
        case 4: {
            return Router_RouterModule_encodeParts(List_singleton("rediscache"), 1);
        }
        case 5: {
            return Router_RouterModule_encodeParts(List_singleton("eventhub"), 1);
        }
        case 6: {
            return Router_RouterModule_encodeParts(List_singleton("createxml"), 1);
        }
        case 7: {
            return Router_RouterModule_encodeParts(List_singleton("createtable"), 1);
        }
        case 8: {
            return Router_RouterModule_encodeParts(List_singleton("createblob"), 1);
        }
        case 9: {
            return Router_RouterModule_encodeParts(List_singleton("posttoqueue"), 1);
        }
        case 12: {
            return Router_RouterModule_encodeParts(List_singleton("gettableentry"), 1);
        }
        case 10: {
            return Router_RouterModule_encodeParts(List_singleton("logger"), 1);
        }
        case 11: {
            return Router_RouterModule_encodeParts(List_singleton("infrastructure"), 1);
        }
        case 13: {
            return Router_RouterModule_encodeParts(List_singleton("excelutils"), 1);
        }
        case 14: {
            return Router_RouterModule_encodeParts(List_singleton("tablestorage"), 1);
        }
        case 15: {
            return Router_RouterModule_encodeParts(List_singleton("client"), 1);
        }
        case 16: {
            return Router_RouterModule_encodeParts(List_singleton("clientinstallation"), 1);
        }
        case 17: {
            return Router_RouterModule_encodeParts(List_singleton("clientpageflexer"), 1);
        }
        default: {
            return Router_RouterModule_encodeParts(List_singleton(""), 1);
        }
    }
}

