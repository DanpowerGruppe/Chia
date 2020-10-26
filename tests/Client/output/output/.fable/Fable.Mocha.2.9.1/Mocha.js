import { Record as Types_Record, toString as Types_toString, Union as Types_Union } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Types.js";
import { record_type as Reflection_record_type, tuple_type as Reflection_tuple_type, getHashCode as Reflection_getHashCode, equals as Reflection_equals, float64_type as Reflection_float64_type, int32_type as Reflection_int32_type, bool_type as Reflection_bool_type, list_type as Reflection_list_type, class_type as Reflection_class_type, lambda_type as Reflection_lambda_type, unit_type as Reflection_unit_type, string_type as Reflection_string_type, union_type as Reflection_union_type } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Reflection.js";
import { iterate as List_iterate, choose as List_choose, map as List_map, ofSeq as List_ofSeq, exists as List_exists, empty as List_empty, contains as List_contains, ofArray as List_ofArray, singleton as List_singleton } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/List.js";
import { int32ToString as Util_int32ToString, assertEqual as Util_assertEqual, assertNotEqual as Util_assertNotEqual } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Util.js";
import { isNullOrWhiteSpace as String_isNullOrWhiteSpace, toFail as String_toFail, printf as String_printf, toText as String_toText } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/String.js";
import { singleton as Seq_singleton, append as Seq_append, collect as Seq_collect, delay as Seq_delay, getEnumerator as Seq_getEnumerator, isEmpty as Seq_isEmpty } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Seq.js";
import { newGuid as Guid_newGuid } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Guid.js";
import { singleton as AsyncBuilder_singleton } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/AsyncBuilder.js";
import { ignore as Async_ignore, startImmediate as Async_startImmediate, catchAsync as Async_catchAsync, sleep as Async_sleep } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Async.js";

export class FocusState extends Types_Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["Normal", "Pending", "Focused"];
    }
}

export function FocusState$reflection() {
    return Reflection_union_type("Fable.Mocha.FocusState", [], FocusState, () => [[], [], []]);
}

export class TestCase extends Types_Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["SyncTest", "AsyncTest", "TestList", "TestListSequential"];
    }
}

export function TestCase$reflection() {
    return Reflection_union_type("Fable.Mocha.TestCase", [], TestCase, () => [[["Item1", Reflection_string_type], ["Item2", Reflection_lambda_type(Reflection_unit_type, Reflection_unit_type)], ["Item3", FocusState$reflection()]], [["Item1", Reflection_string_type], ["Item2", Reflection_class_type("Microsoft.FSharp.Control.FSharpAsync`1", [Reflection_unit_type])], ["Item3", FocusState$reflection()]], [["Item1", Reflection_string_type], ["Item2", Reflection_list_type(TestCase$reflection())]], [["Item1", Reflection_string_type], ["Item2", Reflection_list_type(TestCase$reflection())]]]);
}

export function Test_testCase(name, body) {
    return new TestCase(0, name, body, new FocusState(0));
}

export function Test_ptestCase(name, body) {
    return new TestCase(0, name, body, new FocusState(1));
}

export function Test_ftestCase(name, body) {
    return new TestCase(0, name, body, new FocusState(2));
}

export function Test_testCaseAsync(name, body) {
    return new TestCase(1, name, body, new FocusState(0));
}

export function Test_ptestCaseAsync(name, body) {
    return new TestCase(1, name, body, new FocusState(1));
}

export function Test_ftestCaseAsync(name, body) {
    return new TestCase(1, name, body, new FocusState(2));
}

export function Test_testList(name, tests) {
    return new TestCase(2, name, tests);
}

export function Test_testSequenced(test) {
    switch (test.tag) {
        case 1: {
            const test_2 = test.fields[1];
            const state_1 = test.fields[2];
            const name_1 = test.fields[0];
            return new TestCase(3, name_1, List_singleton(new TestCase(1, name_1, test_2, state_1)));
        }
        case 2: {
            const tests = test.fields[1];
            const name_2 = test.fields[0];
            return new TestCase(3, name_2, tests);
        }
        case 3: {
            const tests_1 = test.fields[1];
            const name_3 = test.fields[0];
            return new TestCase(3, name_3, tests_1);
        }
        default: {
            const test_1 = test.fields[1];
            const state = test.fields[2];
            const name = test.fields[0];
            return new TestCase(3, name, List_singleton(new TestCase(0, name, test_1, state)));
        }
    }
}

export const Env_insideBrowser = (new Function("try {return this===window;}catch(e){ return false;}"))();

export function Expect_notEqual(actual, expected, msg) {
    Util_assertNotEqual(actual, expected, msg);
}

export function Expect_isTrue(cond) {
    return (msg) => {
        const actual = cond;
        const expected_1 = true;
        const msg_1 = msg;
        if ((actual === expected_1) ? true : (!(new Function("try {return this===window;}catch(e){ return false;}"))())) {
            Util_assertEqual(actual, expected_1, msg_1);
        }
        else {
            let valueType;
            let copyOfStruct = actual;
            valueType = Reflection_bool_type;
            const primitiveTypes = List_ofArray([Reflection_int32_type, Reflection_bool_type, Reflection_float64_type, Reflection_string_type, Reflection_class_type("System.Decimal"), Reflection_class_type("System.Guid")]);
            let errorMsg;
            if (List_contains(valueType, primitiveTypes, {
                Equals: Reflection_equals,
                GetHashCode: Reflection_getHashCode,
            })) {
                const arg10 = Types_toString(expected_1);
                const arg20 = Types_toString(actual);
                const arg30 = msg_1;
                const clo1 = String_toText(String_printf("\u003cspan style=\u0027color:black\u0027\u003eExpected:\u003c/span\u003e \u003cbr /\u003e\u003cdiv style=\u0027margin-left:20px; color:crimson\u0027\u003e%s\u003c/div\u003e\u003cbr /\u003e\u003cspan style=\u0027color:black\u0027\u003eActual:\u003c/span\u003e \u003c/br \u003e\u003cdiv style=\u0027margin-left:20px;color:crimson\u0027\u003e%s\u003c/div\u003e\u003cbr /\u003e\u003cspan style=\u0027color:black\u0027\u003eMessage:\u003c/span\u003e \u003c/br \u003e\u003cdiv style=\u0027margin-left:20px; color:crimson\u0027\u003e%s\u003c/div\u003e"));
                const clo2 = clo1(arg10);
                const clo3 = clo2(arg20);
                errorMsg = clo3(arg30);
            }
            else {
                const arg10_1 = expected_1;
                const arg20_1 = actual;
                const arg30_1 = msg_1;
                const clo1_1 = String_toText(String_printf("\u003cspan style=\u0027color:black\u0027\u003eExpected:\u003c/span\u003e \u003cbr /\u003e\u003cdiv style=\u0027margin-left:20px; color:crimson\u0027\u003e%A\u003c/div\u003e\u003cbr /\u003e\u003cspan style=\u0027color:black\u0027\u003eActual:\u003c/span\u003e \u003c/br \u003e\u003cdiv style=\u0027margin-left:20px;color:crimson\u0027\u003e%A\u003c/div\u003e\u003cbr /\u003e\u003cspan style=\u0027color:black\u0027\u003eMessage:\u003c/span\u003e \u003c/br \u003e\u003cdiv style=\u0027margin-left:20px; color:crimson\u0027\u003e%s\u003c/div\u003e"));
                const clo2_1 = clo1_1(arg10_1);
                const clo3_1 = clo2_1(arg20_1);
                errorMsg = clo3_1(arg30_1);
            }
            throw (new Error(errorMsg));
        }
    };
}

export function Expect_isFalse(cond) {
    return (msg) => {
        const actual = cond;
        const expected_1 = false;
        const msg_1 = msg;
        if ((actual === expected_1) ? true : (!(new Function("try {return this===window;}catch(e){ return false;}"))())) {
            Util_assertEqual(actual, expected_1, msg_1);
        }
        else {
            let valueType;
            let copyOfStruct = actual;
            valueType = Reflection_bool_type;
            const primitiveTypes = List_ofArray([Reflection_int32_type, Reflection_bool_type, Reflection_float64_type, Reflection_string_type, Reflection_class_type("System.Decimal"), Reflection_class_type("System.Guid")]);
            let errorMsg;
            if (List_contains(valueType, primitiveTypes, {
                Equals: Reflection_equals,
                GetHashCode: Reflection_getHashCode,
            })) {
                const arg10 = Types_toString(expected_1);
                const arg20 = Types_toString(actual);
                const arg30 = msg_1;
                const clo1 = String_toText(String_printf("\u003cspan style=\u0027color:black\u0027\u003eExpected:\u003c/span\u003e \u003cbr /\u003e\u003cdiv style=\u0027margin-left:20px; color:crimson\u0027\u003e%s\u003c/div\u003e\u003cbr /\u003e\u003cspan style=\u0027color:black\u0027\u003eActual:\u003c/span\u003e \u003c/br \u003e\u003cdiv style=\u0027margin-left:20px;color:crimson\u0027\u003e%s\u003c/div\u003e\u003cbr /\u003e\u003cspan style=\u0027color:black\u0027\u003eMessage:\u003c/span\u003e \u003c/br \u003e\u003cdiv style=\u0027margin-left:20px; color:crimson\u0027\u003e%s\u003c/div\u003e"));
                const clo2 = clo1(arg10);
                const clo3 = clo2(arg20);
                errorMsg = clo3(arg30);
            }
            else {
                const arg10_1 = expected_1;
                const arg20_1 = actual;
                const arg30_1 = msg_1;
                const clo1_1 = String_toText(String_printf("\u003cspan style=\u0027color:black\u0027\u003eExpected:\u003c/span\u003e \u003cbr /\u003e\u003cdiv style=\u0027margin-left:20px; color:crimson\u0027\u003e%A\u003c/div\u003e\u003cbr /\u003e\u003cspan style=\u0027color:black\u0027\u003eActual:\u003c/span\u003e \u003c/br \u003e\u003cdiv style=\u0027margin-left:20px;color:crimson\u0027\u003e%A\u003c/div\u003e\u003cbr /\u003e\u003cspan style=\u0027color:black\u0027\u003eMessage:\u003c/span\u003e \u003c/br \u003e\u003cdiv style=\u0027margin-left:20px; color:crimson\u0027\u003e%s\u003c/div\u003e"));
                const clo2_1 = clo1_1(arg10_1);
                const clo3_1 = clo2_1(arg20_1);
                errorMsg = clo3_1(arg30_1);
            }
            throw (new Error(errorMsg));
        }
    };
}

export function Expect_isZero(number) {
    return (msg) => {
        const actual_1 = 0;
        const expected = number | 0;
        const msg_1 = msg;
        if ((actual_1 === expected) ? true : (!(new Function("try {return this===window;}catch(e){ return false;}"))())) {
            Util_assertEqual(actual_1, expected, msg_1);
        }
        else {
            let valueType;
            let copyOfStruct = actual_1 | 0;
            valueType = Reflection_int32_type;
            const primitiveTypes = List_ofArray([Reflection_int32_type, Reflection_bool_type, Reflection_float64_type, Reflection_string_type, Reflection_class_type("System.Decimal"), Reflection_class_type("System.Guid")]);
            let errorMsg;
            if (List_contains(valueType, primitiveTypes, {
                Equals: Reflection_equals,
                GetHashCode: Reflection_getHashCode,
            })) {
                const arg10 = Util_int32ToString(expected);
                const arg20 = Util_int32ToString(actual_1);
                const arg30 = msg_1;
                const clo1 = String_toText(String_printf("\u003cspan style=\u0027color:black\u0027\u003eExpected:\u003c/span\u003e \u003cbr /\u003e\u003cdiv style=\u0027margin-left:20px; color:crimson\u0027\u003e%s\u003c/div\u003e\u003cbr /\u003e\u003cspan style=\u0027color:black\u0027\u003eActual:\u003c/span\u003e \u003c/br \u003e\u003cdiv style=\u0027margin-left:20px;color:crimson\u0027\u003e%s\u003c/div\u003e\u003cbr /\u003e\u003cspan style=\u0027color:black\u0027\u003eMessage:\u003c/span\u003e \u003c/br \u003e\u003cdiv style=\u0027margin-left:20px; color:crimson\u0027\u003e%s\u003c/div\u003e"));
                const clo2 = clo1(arg10);
                const clo3 = clo2(arg20);
                errorMsg = clo3(arg30);
            }
            else {
                const arg10_1 = expected | 0;
                const arg20_1 = actual_1 | 0;
                const arg30_1 = msg_1;
                const clo1_1 = String_toText(String_printf("\u003cspan style=\u0027color:black\u0027\u003eExpected:\u003c/span\u003e \u003cbr /\u003e\u003cdiv style=\u0027margin-left:20px; color:crimson\u0027\u003e%A\u003c/div\u003e\u003cbr /\u003e\u003cspan style=\u0027color:black\u0027\u003eActual:\u003c/span\u003e \u003c/br \u003e\u003cdiv style=\u0027margin-left:20px;color:crimson\u0027\u003e%A\u003c/div\u003e\u003cbr /\u003e\u003cspan style=\u0027color:black\u0027\u003eMessage:\u003c/span\u003e \u003c/br \u003e\u003cdiv style=\u0027margin-left:20px; color:crimson\u0027\u003e%s\u003c/div\u003e"));
                const clo2_1 = clo1_1(arg10_1);
                const clo3_1 = clo2_1(arg20_1);
                errorMsg = clo3_1(arg30_1);
            }
            throw (new Error(errorMsg));
        }
    };
}

export function Expect_isEmpty(x) {
    const expected = Seq_isEmpty(x);
    return (msg) => {
        const actual_1 = true;
        const expected_1 = expected;
        const msg_1 = msg;
        if ((actual_1 === expected_1) ? true : (!(new Function("try {return this===window;}catch(e){ return false;}"))())) {
            Util_assertEqual(actual_1, expected_1, msg_1);
        }
        else {
            let valueType;
            let copyOfStruct = actual_1;
            valueType = Reflection_bool_type;
            const primitiveTypes = List_ofArray([Reflection_int32_type, Reflection_bool_type, Reflection_float64_type, Reflection_string_type, Reflection_class_type("System.Decimal"), Reflection_class_type("System.Guid")]);
            let errorMsg;
            if (List_contains(valueType, primitiveTypes, {
                Equals: Reflection_equals,
                GetHashCode: Reflection_getHashCode,
            })) {
                const arg10 = Types_toString(expected_1);
                const arg20 = Types_toString(actual_1);
                const arg30 = msg_1;
                const clo1 = String_toText(String_printf("\u003cspan style=\u0027color:black\u0027\u003eExpected:\u003c/span\u003e \u003cbr /\u003e\u003cdiv style=\u0027margin-left:20px; color:crimson\u0027\u003e%s\u003c/div\u003e\u003cbr /\u003e\u003cspan style=\u0027color:black\u0027\u003eActual:\u003c/span\u003e \u003c/br \u003e\u003cdiv style=\u0027margin-left:20px;color:crimson\u0027\u003e%s\u003c/div\u003e\u003cbr /\u003e\u003cspan style=\u0027color:black\u0027\u003eMessage:\u003c/span\u003e \u003c/br \u003e\u003cdiv style=\u0027margin-left:20px; color:crimson\u0027\u003e%s\u003c/div\u003e"));
                const clo2 = clo1(arg10);
                const clo3 = clo2(arg20);
                errorMsg = clo3(arg30);
            }
            else {
                const arg10_1 = expected_1;
                const arg20_1 = actual_1;
                const arg30_1 = msg_1;
                const clo1_1 = String_toText(String_printf("\u003cspan style=\u0027color:black\u0027\u003eExpected:\u003c/span\u003e \u003cbr /\u003e\u003cdiv style=\u0027margin-left:20px; color:crimson\u0027\u003e%A\u003c/div\u003e\u003cbr /\u003e\u003cspan style=\u0027color:black\u0027\u003eActual:\u003c/span\u003e \u003c/br \u003e\u003cdiv style=\u0027margin-left:20px;color:crimson\u0027\u003e%A\u003c/div\u003e\u003cbr /\u003e\u003cspan style=\u0027color:black\u0027\u003eMessage:\u003c/span\u003e \u003c/br \u003e\u003cdiv style=\u0027margin-left:20px; color:crimson\u0027\u003e%s\u003c/div\u003e"));
                const clo2_1 = clo1_1(arg10_1);
                const clo3_1 = clo2_1(arg20_1);
                errorMsg = clo3_1(arg30_1);
            }
            throw (new Error(errorMsg));
        }
    };
}

export function Expect_pass() {
    return (msg) => {
        const actual_1 = true;
        const expected_1 = true;
        const msg_1 = msg;
        if ((actual_1 === expected_1) ? true : (!(new Function("try {return this===window;}catch(e){ return false;}"))())) {
            Util_assertEqual(actual_1, expected_1, msg_1);
        }
        else {
            let valueType;
            let copyOfStruct = actual_1;
            valueType = Reflection_bool_type;
            const primitiveTypes = List_ofArray([Reflection_int32_type, Reflection_bool_type, Reflection_float64_type, Reflection_string_type, Reflection_class_type("System.Decimal"), Reflection_class_type("System.Guid")]);
            let errorMsg;
            if (List_contains(valueType, primitiveTypes, {
                Equals: Reflection_equals,
                GetHashCode: Reflection_getHashCode,
            })) {
                const arg10 = Types_toString(expected_1);
                const arg20 = Types_toString(actual_1);
                const arg30 = msg_1;
                const clo1 = String_toText(String_printf("\u003cspan style=\u0027color:black\u0027\u003eExpected:\u003c/span\u003e \u003cbr /\u003e\u003cdiv style=\u0027margin-left:20px; color:crimson\u0027\u003e%s\u003c/div\u003e\u003cbr /\u003e\u003cspan style=\u0027color:black\u0027\u003eActual:\u003c/span\u003e \u003c/br \u003e\u003cdiv style=\u0027margin-left:20px;color:crimson\u0027\u003e%s\u003c/div\u003e\u003cbr /\u003e\u003cspan style=\u0027color:black\u0027\u003eMessage:\u003c/span\u003e \u003c/br \u003e\u003cdiv style=\u0027margin-left:20px; color:crimson\u0027\u003e%s\u003c/div\u003e"));
                const clo2 = clo1(arg10);
                const clo3 = clo2(arg20);
                errorMsg = clo3(arg30);
            }
            else {
                const arg10_1 = expected_1;
                const arg20_1 = actual_1;
                const arg30_1 = msg_1;
                const clo1_1 = String_toText(String_printf("\u003cspan style=\u0027color:black\u0027\u003eExpected:\u003c/span\u003e \u003cbr /\u003e\u003cdiv style=\u0027margin-left:20px; color:crimson\u0027\u003e%A\u003c/div\u003e\u003cbr /\u003e\u003cspan style=\u0027color:black\u0027\u003eActual:\u003c/span\u003e \u003c/br \u003e\u003cdiv style=\u0027margin-left:20px;color:crimson\u0027\u003e%A\u003c/div\u003e\u003cbr /\u003e\u003cspan style=\u0027color:black\u0027\u003eMessage:\u003c/span\u003e \u003c/br \u003e\u003cdiv style=\u0027margin-left:20px; color:crimson\u0027\u003e%s\u003c/div\u003e"));
                const clo2_1 = clo1_1(arg10_1);
                const clo3_1 = clo2_1(arg20_1);
                errorMsg = clo3_1(arg30_1);
            }
            throw (new Error(errorMsg));
        }
    };
}

export function Expect_isOk(x, message) {
    if (x.tag === 1) {
        const x$0027 = x.fields[0];
        const arg10 = message;
        const arg20 = x$0027;
        const clo1 = String_toFail(String_printf("%s. Expected Ok, was Error(%A)."));
        const clo2 = clo1(arg10);
        clo2(arg20);
    }
    else {
        Expect_pass()(message);
    }
}

class Html_Node extends Types_Record {
    constructor(Tag, Attributes, Content, Children) {
        super();
        this.Tag = Tag;
        this.Attributes = Attributes;
        this.Content = Content;
        this.Children = Children;
    }
}

function Html_Node$reflection() {
    return Reflection_record_type("Fable.Mocha.Html.Node", [], Html_Node, () => [["Tag", Reflection_string_type], ["Attributes", Reflection_list_type(Reflection_tuple_type(Reflection_string_type, Reflection_string_type))], ["Content", Reflection_string_type], ["Children", Reflection_list_type(Html_Node$reflection())]]);
}

function Html_createNode(node) {
    const el = document.createElement(node.Tag);
    el.innerHTML = node.Content;
    const enumerator = Seq_getEnumerator(node.Attributes);
    try {
        while (enumerator["System.Collections.IEnumerator.MoveNext"]()) {
            const forLoopVar = enumerator["System.Collections.Generic.IEnumerator`1.get_Current"]();
            const attrValue = forLoopVar[1];
            const attrName = forLoopVar[0];
            el.setAttribute(attrName, attrValue);
        }
    }
    finally {
        enumerator.Dispose();
    }
    const enumerator_1 = Seq_getEnumerator(node.Children);
    try {
        while (enumerator_1["System.Collections.IEnumerator.MoveNext"]()) {
            const child = enumerator_1["System.Collections.Generic.IEnumerator`1.get_Current"]();
            const childElement = Html_createNode(child);
            el.appendChild(childElement);
        }
    }
    finally {
        enumerator_1.Dispose();
    }
    return el;
}

function Html_simpleDiv(attrs, content) {
    return new Html_Node("div", attrs, content, List_empty());
}

function Html_div(attrs, children) {
    return new Html_Node("div", attrs, "", children);
}

export function Mocha_isFocused(test) {
    let pattern_matching_result, tests, tests_1;
    if (test.tag === 1) {
        if (test.fields[2].tag === 2) {
            pattern_matching_result = 1;
        }
        else {
            pattern_matching_result = 4;
        }
    }
    else if (test.tag === 2) {
        pattern_matching_result = 2;
        tests = test.fields[1];
    }
    else if (test.tag === 3) {
        pattern_matching_result = 3;
        tests_1 = test.fields[1];
    }
    else if (test.fields[2].tag === 2) {
        pattern_matching_result = 0;
    }
    else {
        pattern_matching_result = 4;
    }
    switch (pattern_matching_result) {
        case 0: {
            return true;
        }
        case 1: {
            return true;
        }
        case 2: {
            return List_exists(Mocha_isFocused, tests);
        }
        case 3: {
            return List_exists(Mocha_isFocused, tests_1);
        }
        case 4: {
            return false;
        }
    }
}

function Mocha_runSyncTestInBrowser(name, test, padding) {
    let arg10_2, clo1_2, arg10_3, clo1_3, arg10, clo1, arg10_1, clo1_1;
    try {
        test();
        return Html_simpleDiv(List_ofArray([["data-test", name], ["class", "passed"], ["style", (arg10 = (padding | 0), (clo1 = String_toText(String_printf("font-size:16px; padding-left:%dpx; color:green")), clo1(arg10)))]]), (arg10_1 = name, (clo1_1 = String_toText(String_printf("✔ %s")), clo1_1(arg10_1))));
    }
    catch (ex) {
        const error = new Html_Node("div", List_singleton(["style", "font-size:16px;color:red;margin:10px; padding:10px; border: 1px solid red; border-radius: 10px;"]), ex.message, List_empty());
        return Html_div(List_empty(), List_ofArray([Html_simpleDiv(List_ofArray([["data-test", name], ["class", "failed"], ["style", (arg10_2 = (padding | 0), (clo1_2 = String_toText(String_printf("font-size:16px; padding-left:%dpx; color:red")), clo1_2(arg10_2)))]]), (arg10_3 = name, (clo1_3 = String_toText(String_printf("✘ %s")), clo1_3(arg10_3)))), error]));
    }
}

function Mocha_runAsyncTestInBrowser(name, test, padding) {
    let arg10_4, clo1_4, arg10_5, clo1_5;
    let id;
    let copyOfStruct = Guid_newGuid();
    id = copyOfStruct;
    let arg00;
    const builder$0040 = AsyncBuilder_singleton;
    arg00 = builder$0040.Delay(() => builder$0040.Bind(Async_sleep(1000), () => builder$0040.Bind(Async_catchAsync(test), (_arg2) => {
        let arg10_2, clo1_2, arg10_3, clo1_3, arg10, clo1, arg10_1, clo1_1;
        if (_arg2.tag === 1) {
            const err = _arg2.fields[0];
            const div_1 = document.getElementById(id);
            div_1.innerHTML = (arg10_2 = name, (clo1_2 = String_toText(String_printf("✘ %s")), clo1_2(arg10_2)));
            const error = new Html_Node("div", List_singleton(["style", "margin:10px; padding:10px; border: 1px solid red; border-radius: 10px"]), err.message, List_empty());
            div_1.setAttribute("style", (arg10_3 = (padding | 0), (clo1_3 = String_toText(String_printf("font-size:16px; padding-left:%dpx;color:red")), clo1_3(arg10_3))));
            div_1.setAttribute("class", "failed");
            div_1.appendChild(Html_createNode(error));
            return builder$0040.Zero();
        }
        else {
            const div = document.getElementById(id);
            div.innerHTML = (arg10 = name, (clo1 = String_toText(String_printf("✔ %s")), clo1(arg10)));
            div.setAttribute("class", "passed");
            div.setAttribute("style", (arg10_1 = (padding | 0), (clo1_1 = String_toText(String_printf("font-size:16px; padding-left:%dpx;color:green")), clo1_1(arg10_1))));
            return builder$0040.Zero();
        }
    })));
    Async_startImmediate(arg00);
    return Html_simpleDiv(List_ofArray([["id", id], ["data-test", name], ["class", "executing"], ["style", (arg10_4 = (padding | 0), (clo1_4 = String_toText(String_printf("font-size:16px; padding-left:%dpx;color:gray")), clo1_4(arg10_4)))]]), (arg10_5 = name, (clo1_5 = String_toText(String_printf("⏳ %s")), clo1_5(arg10_5))));
}

function Mocha_runAsyncSequentialTestInBrowser(name, test, padding) {
    let builder$0040, arg10_4, clo1_4, arg10_5, clo1_5;
    let id;
    let copyOfStruct = Guid_newGuid();
    id = copyOfStruct;
    return [(builder$0040 = AsyncBuilder_singleton, (builder$0040.Delay(() => builder$0040.Bind(Async_sleep(1000), () => builder$0040.Bind(Async_catchAsync(test), (_arg2) => {
        let arg10_2, clo1_2, arg10_3, clo1_3, arg10, clo1, arg10_1, clo1_1;
        if (_arg2.tag === 1) {
            const err = _arg2.fields[0];
            const div_1 = document.getElementById(id);
            div_1.innerHTML = (arg10_2 = name, (clo1_2 = String_toText(String_printf("✘ %s")), clo1_2(arg10_2)));
            const error = new Html_Node("div", List_singleton(["style", "margin:10px; padding:10px; border: 1px solid red; border-radius: 10px"]), err.message, List_empty());
            div_1.setAttribute("style", (arg10_3 = (padding | 0), (clo1_3 = String_toText(String_printf("font-size:16px; padding-left:%dpx;color:red")), clo1_3(arg10_3))));
            div_1.setAttribute("class", "failed");
            div_1.appendChild(Html_createNode(error));
            return builder$0040.Zero();
        }
        else {
            const div = document.getElementById(id);
            div.innerHTML = (arg10 = name, (clo1 = String_toText(String_printf("✔ %s")), clo1(arg10)));
            div.setAttribute("class", "passed");
            div.setAttribute("style", (arg10_1 = (padding | 0), (clo1_1 = String_toText(String_printf("font-size:16px; padding-left:%dpx;color:green")), clo1_1(arg10_1))));
            return builder$0040.Zero();
        }
    }))))), Html_simpleDiv(List_ofArray([["id", id], ["data-test", name], ["class", "executing"], ["style", (arg10_4 = (padding | 0), (clo1_4 = String_toText(String_printf("font-size:16px; padding-left:%dpx;color:gray")), clo1_4(arg10_4)))]]), (arg10_5 = name, (clo1_5 = String_toText(String_printf("⏳ %s")), clo1_5(arg10_5))))];
}

function Mocha_flattenTests(lastName, _arg1) {
    switch (_arg1.tag) {
        case 1: {
            const test_1 = _arg1.fields[1];
            const state_1 = _arg1.fields[2];
            const name_1 = _arg1.fields[0];
            let modifiedName_1;
            if (String_isNullOrWhiteSpace(lastName)) {
                modifiedName_1 = name_1;
            }
            else {
                const arg10_1 = lastName;
                const arg20_1 = name_1;
                const clo1_1 = String_toText(String_printf("%s - %s"));
                const clo2_1 = clo1_1(arg10_1);
                modifiedName_1 = clo2_1(arg20_1);
            }
            return List_singleton(new TestCase(1, modifiedName_1, test_1, state_1));
        }
        case 2: {
            const tests = _arg1.fields[1];
            const name_2 = _arg1.fields[0];
            return List_ofSeq(Seq_delay(() => Seq_collect((test_2) => Mocha_flattenTests(name_2, test_2), tests)));
        }
        case 3: {
            const tests_1 = _arg1.fields[1];
            const name_3 = _arg1.fields[0];
            return List_ofSeq(Seq_delay(() => Seq_collect((test_3) => Mocha_flattenTests(name_3, test_3), tests_1)));
        }
        default: {
            const test = _arg1.fields[1];
            const state = _arg1.fields[2];
            const name = _arg1.fields[0];
            let modifiedName;
            if (String_isNullOrWhiteSpace(lastName)) {
                modifiedName = name;
            }
            else {
                const arg10 = lastName;
                const arg20 = name;
                const clo1 = String_toText(String_printf("%s - %s"));
                const clo2 = clo1(arg10);
                modifiedName = clo2(arg20);
            }
            return List_singleton(new TestCase(0, modifiedName, test, state));
        }
    }
}

function Mocha_renderBrowserTests(hasFocusedTests, tests, padding) {
    const list_1 = tests;
    return List_map((_arg1) => {
        let arg10_4, clo1_4, arg10_5, clo1_5, arg10_6, clo1_6, arg10_7, clo1_7, arg10_8, clo1_8, arg10_17, clo1_17, arg10, clo1, arg10_1, clo1_1, arg10_2, clo1_2, arg10_3, clo1_3;
        switch (_arg1.tag) {
            case 1: {
                const test_1 = _arg1.fields[1];
                const name_1 = _arg1.fields[0];
                const focus_1 = _arg1.fields[2];
                let pattern_matching_result;
                if (focus_1.tag === 0) {
                    if (hasFocusedTests) {
                        pattern_matching_result = 0;
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
                        return Html_simpleDiv(List_ofArray([["class", "pending"], ["data-test", name_1], ["style", (arg10_4 = (padding | 0), (clo1_4 = String_toText(String_printf("font-size:16px; padding-left:%dpx; color:#B8860B")), clo1_4(arg10_4)))]]), (arg10_5 = name_1, (clo1_5 = String_toText(String_printf("🚧 skipping \u0027%s\u0027 due to other focused tests")), clo1_5(arg10_5))));
                    }
                    case 1: {
                        switch (focus_1.tag) {
                            case 1: {
                                return Html_simpleDiv(List_ofArray([["class", "pending"], ["data-test", name_1], ["style", (arg10_6 = (padding | 0), (clo1_6 = String_toText(String_printf("font-size:16px; padding-left:%dpx; color:#B8860B")), clo1_6(arg10_6)))]]), (arg10_7 = name_1, (clo1_7 = String_toText(String_printf("🚧 skipping \u0027%s\u0027 due to it being marked as pending")), clo1_7(arg10_7))));
                            }
                            case 2: {
                                return Mocha_runAsyncTestInBrowser(name_1, test_1, padding);
                            }
                            default: {
                                return Mocha_runAsyncTestInBrowser(name_1, test_1, padding);
                            }
                        }
                    }
                }
            }
            case 2: {
                const testCases = _arg1.fields[1];
                const name_2 = _arg1.fields[0];
                const tests_1 = Html_div(List_empty(), Mocha_renderBrowserTests(hasFocusedTests, testCases, padding + 10));
                const header = new Html_Node("div", List_ofArray([["class", "module"], ["data-module", name_2], ["style", (arg10_8 = (padding | 0), (clo1_8 = String_toText(String_printf("font-size:20px; padding:%dpx")), clo1_8(arg10_8)))]]), name_2, List_singleton(tests_1));
                return Html_div(List_empty(), List_singleton(header));
            }
            case 3: {
                const testCases_1 = _arg1.fields[1];
                const name_3 = _arg1.fields[0];
                let xs;
                const list = Mocha_flattenTests("", new TestCase(3, "", testCases_1));
                xs = List_choose((_arg2) => {
                    let arg10_9, clo1_9, arg10_10, clo1_10, arg10_11, clo1_11, arg10_12, clo1_12, arg10_13, clo1_13, arg10_14, clo1_14, arg10_15, clo1_15, arg10_16, clo1_16;
                    switch (_arg2.tag) {
                        case 0: {
                            const testName = _arg2.fields[0];
                            const focusedState = _arg2.fields[2];
                            const actualTest = _arg2.fields[1];
                            let pattern_matching_result_1;
                            if (focusedState.tag === 0) {
                                if (hasFocusedTests) {
                                    pattern_matching_result_1 = 0;
                                }
                                else {
                                    pattern_matching_result_1 = 1;
                                }
                            }
                            else {
                                pattern_matching_result_1 = 1;
                            }
                            switch (pattern_matching_result_1) {
                                case 0: {
                                    let op;
                                    const builder$0040 = AsyncBuilder_singleton;
                                    op = builder$0040.Delay(() => builder$0040.Bind(Async_sleep(10), () => builder$0040.Return()));
                                    const result = [op, Html_simpleDiv(List_ofArray([["class", "pending"], ["data-test", name_3], ["style", (arg10_9 = (padding | 0), (clo1_9 = String_toText(String_printf("font-size:16px; padding-left:%dpx; color:#B8860B")), clo1_9(arg10_9)))]]), (arg10_10 = name_3, (clo1_10 = String_toText(String_printf("🚧 skipping \u0027%s\u0027 due to other focused tests")), clo1_10(arg10_10))))];
                                    return result;
                                }
                                case 1: {
                                    switch (focusedState.tag) {
                                        case 2:
                                        case 0: {
                                            let operation;
                                            const builder$0040_2 = AsyncBuilder_singleton;
                                            operation = builder$0040_2.Delay(() => builder$0040_2.Bind(Async_sleep(10), () => {
                                                actualTest();
                                                return builder$0040_2.Zero();
                                            }));
                                            return Mocha_runAsyncSequentialTestInBrowser(testName, operation, padding + 10);
                                        }
                                        default: {
                                            let op_1;
                                            const builder$0040_1 = AsyncBuilder_singleton;
                                            op_1 = builder$0040_1.Delay(() => builder$0040_1.Bind(Async_sleep(10), () => builder$0040_1.Return()));
                                            const result_1 = [op_1, Html_simpleDiv(List_ofArray([["class", "pending"], ["data-test", name_3], ["style", (arg10_11 = (padding | 0), (clo1_11 = String_toText(String_printf("font-size:16px; padding-left:%dpx; color:#B8860B")), clo1_11(arg10_11)))]]), (arg10_12 = name_3, (clo1_12 = String_toText(String_printf("🚧 skipping \u0027%s\u0027 due to it being marked as pending")), clo1_12(arg10_12))))];
                                            return result_1;
                                        }
                                    }
                                }
                            }
                        }
                        case 1: {
                            const testName_1 = _arg2.fields[0];
                            const focusedState_1 = _arg2.fields[2];
                            const actualTest_1 = _arg2.fields[1];
                            let pattern_matching_result_2;
                            if (focusedState_1.tag === 0) {
                                if (hasFocusedTests) {
                                    pattern_matching_result_2 = 0;
                                }
                                else {
                                    pattern_matching_result_2 = 1;
                                }
                            }
                            else {
                                pattern_matching_result_2 = 1;
                            }
                            switch (pattern_matching_result_2) {
                                case 0: {
                                    let op_2;
                                    const builder$0040_3 = AsyncBuilder_singleton;
                                    op_2 = builder$0040_3.Delay(() => builder$0040_3.Bind(Async_sleep(10), () => builder$0040_3.Return()));
                                    const result_2 = [op_2, Html_simpleDiv(List_ofArray([["class", "pending"], ["data-test", name_3], ["style", (arg10_13 = (padding | 0), (clo1_13 = String_toText(String_printf("font-size:16px; padding-left:%dpx; color:#B8860B")), clo1_13(arg10_13)))]]), (arg10_14 = name_3, (clo1_14 = String_toText(String_printf("🚧 skipping \u0027%s\u0027 due to other focused tests")), clo1_14(arg10_14))))];
                                    return result_2;
                                }
                                case 1: {
                                    switch (focusedState_1.tag) {
                                        case 2:
                                        case 0: {
                                            return Mocha_runAsyncSequentialTestInBrowser(testName_1, actualTest_1, padding + 10);
                                        }
                                        default: {
                                            let op_3;
                                            const builder$0040_4 = AsyncBuilder_singleton;
                                            op_3 = builder$0040_4.Delay(() => builder$0040_4.Bind(Async_sleep(10), () => builder$0040_4.Return()));
                                            const result_3 = [op_3, Html_simpleDiv(List_ofArray([["class", "pending"], ["data-test", name_3], ["style", (arg10_15 = (padding | 0), (clo1_15 = String_toText(String_printf("font-size:16px; padding-left:%dpx; color:#B8860B")), clo1_15(arg10_15)))]]), (arg10_16 = name_3, (clo1_16 = String_toText(String_printf("🚧 skipping \u0027%s\u0027 due to it being marked as pending")), clo1_16(arg10_16))))];
                                            return result_3;
                                        }
                                    }
                                }
                            }
                        }
                        default: {
                            return void 0;
                        }
                    }
                }, list);
                const nodes = List_map((tuple) => tuple[1], xs);
                const tests_2 = Html_div(List_empty(), nodes);
                const header_1 = new Html_Node("div", List_ofArray([["class", "module"], ["data-module", name_3], ["style", (arg10_17 = (padding | 0), (clo1_17 = String_toText(String_printf("font-size:20px; padding:%dpx")), clo1_17(arg10_17)))]]), name_3, List_singleton(tests_2));
                const asyncOps = List_map((tuple_1) => tuple_1[0], xs);
                let arg00_1;
                let arg00;
                const builder$0040_5 = AsyncBuilder_singleton;
                arg00 = builder$0040_5.Delay(() => builder$0040_5.Combine(builder$0040_5.For(asyncOps, (_arg8) => {
                    const op_4 = _arg8;
                    return builder$0040_5.Bind(op_4, () => {
                        return builder$0040_5.Zero();
                    });
                }), builder$0040_5.Delay(() => builder$0040_5.Return())));
                arg00_1 = Async_ignore(arg00);
                Async_startImmediate(arg00_1);
                return Html_div(List_empty(), List_singleton(header_1));
            }
            default: {
                const test = _arg1.fields[1];
                const name = _arg1.fields[0];
                const focus = _arg1.fields[2];
                let pattern_matching_result_3;
                if (focus.tag === 0) {
                    if (hasFocusedTests) {
                        pattern_matching_result_3 = 0;
                    }
                    else {
                        pattern_matching_result_3 = 1;
                    }
                }
                else {
                    pattern_matching_result_3 = 1;
                }
                switch (pattern_matching_result_3) {
                    case 0: {
                        return Html_simpleDiv(List_ofArray([["class", "pending"], ["data-test", name], ["style", (arg10 = (padding | 0), (clo1 = String_toText(String_printf("font-size:16px; padding-left:%dpx; color:#B8860B")), clo1(arg10)))]]), (arg10_1 = name, (clo1_1 = String_toText(String_printf("🚧 skipping \u0027%s\u0027 due to other focused tests")), clo1_1(arg10_1))));
                    }
                    case 1: {
                        switch (focus.tag) {
                            case 1: {
                                return Html_simpleDiv(List_ofArray([["class", "pending"], ["data-test", name], ["style", (arg10_2 = (padding | 0), (clo1_2 = String_toText(String_printf("font-size:16px; padding-left:%dpx; color:#B8860B")), clo1_2(arg10_2)))]]), (arg10_3 = name, (clo1_3 = String_toText(String_printf("🚧 skipping \u0027%s\u0027 due to it being marked as pending")), clo1_3(arg10_3))));
                            }
                            case 2: {
                                return Mocha_runSyncTestInBrowser(name, test, padding);
                            }
                            default: {
                                return Mocha_runSyncTestInBrowser(name, test, padding);
                            }
                        }
                    }
                }
            }
        }
    }, list_1);
}

function Mocha_configureAsyncTest(test, finished) {
    let arg00;
    const builder$0040 = AsyncBuilder_singleton;
    arg00 = builder$0040.Delay(() => builder$0040.Bind(Async_catchAsync(test), (_arg1) => {
        if (_arg1.tag === 1) {
            const err = _arg1.fields[0];
            finished(err);
            return builder$0040.Zero();
        }
        else {
            finished();
            return builder$0040.Zero();
        }
    }));
    Async_startImmediate(arg00);
}

export function Mocha_invalidateTestResults() {
    let arg00;
    const builder$0040 = AsyncBuilder_singleton;
    arg00 = builder$0040.Delay(() => {
        let arg10, clo1, arg10_1, clo1_1, arg10_2, clo1_2, arg10_3, clo1_3, arg10_4, clo1_4;
        const passedCount = (document.getElementsByClassName("passed").length) | 0;
        const failedCount = (document.getElementsByClassName("failed").length) | 0;
        const executingCount = (document.getElementsByClassName("executing").length) | 0;
        const skippedCount = (document.getElementsByClassName("pending").length) | 0;
        const total = (((passedCount + failedCount) + executingCount) + skippedCount) | 0;
        (document.getElementById("total-tests")).innerHTML = (arg10 = (total | 0), (clo1 = String_toText(String_printf("Test Results (%d total)")), clo1(arg10)));
        (document.getElementById("passed-tests")).innerHTML = (arg10_1 = (passedCount | 0), (clo1_1 = String_toText(String_printf("✔ %d passed")), clo1_1(arg10_1)));
        (document.getElementById("failed-tests")).innerHTML = (arg10_2 = (failedCount | 0), (clo1_2 = String_toText(String_printf("✘ %d failed")), clo1_2(arg10_2)));
        (document.getElementById("executing-tests")).innerHTML = (arg10_3 = (executingCount | 0), (clo1_3 = String_toText(String_printf("⏳ %d being executed (async)")), clo1_3(arg10_3)));
        (document.getElementById("skipped-tests")).innerHTML = (arg10_4 = (skippedCount | 0), (clo1_4 = String_toText(String_printf("🚧 %d pending")), clo1_4(arg10_4)));
        return (executingCount > 0) ? builder$0040.Bind(Async_sleep(50), () => {
            Mocha_invalidateTestResults();
            return builder$0040.Zero();
        }) : builder$0040.Return();
    });
    Async_startImmediate(arg00);
}

function Mocha_runViaMocha(test) {
    switch (test.tag) {
        case 1: {
            const test_2 = test.fields[1];
            const msg_1 = test.fields[0];
            const focus_1 = test.fields[2];
            switch (focus_1.tag) {
                case 1: {
                    it.skip(msg_1, ((finished_1) => {
                        Mocha_configureAsyncTest(test_2, finished_1);
                    }));
                    break;
                }
                case 2: {
                    it.only(msg_1, ((finished_2) => {
                        Mocha_configureAsyncTest(test_2, finished_2);
                    }));
                    break;
                }
                default: {
                    it(msg_1, ((finished) => {
                        Mocha_configureAsyncTest(test_2, finished);
                    }));
                }
            }
            break;
        }
        case 2: {
            const testCases = test.fields[1];
            const name = test.fields[0];
            const f = () => {
                const list = testCases;
                List_iterate((test_3) => {
                    Mocha_runViaMocha(test_3);
                }, list);
            };
            describe(name, f);
            break;
        }
        case 3: {
            const testCases_1 = test.fields[1];
            const name_1 = test.fields[0];
            const f_1 = () => {
                const list_1 = testCases_1;
                List_iterate((test_4) => {
                    Mocha_runViaMocha(test_4);
                }, list_1);
            };
            describe(name_1, f_1);
            break;
        }
        default: {
            const test_1 = test.fields[1];
            const msg = test.fields[0];
            const focus = test.fields[2];
            switch (focus.tag) {
                case 1: {
                    it.skip(msg, test_1);
                    break;
                }
                case 2: {
                    it.only(msg, test_1);
                    break;
                }
                default: {
                    it(msg, test_1);
                }
            }
        }
    }
}

export function Mocha_runViaDotnet(test) {
    throw (new Error("Currently not implemented, use Expecto for now."));
    return 1;
}

export function Mocha_runTests(test) {
    if (Env_insideBrowser ? true : (typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope)) {
        const hasFocusedTests = Mocha_isFocused(test);
        const renderedTests = Mocha_renderBrowserTests(hasFocusedTests, List_singleton(test), 0);
        const testResults = Html_div(List_singleton(["style", "margin-bottom: 20px"]), List_ofArray([Html_simpleDiv(List_ofArray([["id", "total-tests"], ["style", "font-size:20px; margin-bottom:5px"]]), "Test Results"), Html_simpleDiv(List_ofArray([["id", "passed-tests"], ["style", "color:green; margin-left:5px;"]]), "Passed"), Html_simpleDiv(List_ofArray([["id", "skipped-tests"], ["style", "color:#B8860B"]]), "Pending"), Html_simpleDiv(List_ofArray([["id", "failed-tests"], ["style", "color:red;margin-left:5px"]]), "Failed"), Html_simpleDiv(List_ofArray([["id", "executing-tests"], ["style", "color:gray;margin-left:5px"]]), "Executing")]));
        const container = Html_div(List_singleton(["style", "padding:20px;"]), List_ofSeq(Seq_delay(() => Seq_append(Seq_singleton(testResults), Seq_delay(() => renderedTests)))));
        const element = Html_createNode(container);
        (document.body).appendChild(element);
        Mocha_invalidateTestResults();
        return 0;
    }
    else {
        Mocha_runViaMocha(test);
        return 0;
    }
}

