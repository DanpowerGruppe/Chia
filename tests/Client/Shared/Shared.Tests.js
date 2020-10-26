import { Test_testCase as Mocha_Test_testCase, Test_testList as Mocha_Test_testList } from "../.fable/Fable.Mocha.2.9.1/Mocha.js";
import { joinString as SharedUtils_joinString } from "../src/Shared/SharedUtils.js";
import { assertEqual as Util_assertEqual } from "../.fable/fable-library.3.0.0-nagareyama-beta-003/Util.js";
import { getHashCode as Reflection_getHashCode, equals as Reflection_equals, class_type as Reflection_class_type, float64_type as Reflection_float64_type, bool_type as Reflection_bool_type, int32_type as Reflection_int32_type, string_type as Reflection_string_type } from "../.fable/fable-library.3.0.0-nagareyama-beta-003/Reflection.js";
import { singleton as List_singleton, contains as List_contains, ofArray as List_ofArray } from "../.fable/fable-library.3.0.0-nagareyama-beta-003/List.js";
import { printf as String_printf, toText as String_toText } from "../.fable/fable-library.3.0.0-nagareyama-beta-003/String.js";

export const shared = Mocha_Test_testList("Shared", List_singleton((() => {
    const body = () => {
        const expected = "1;2";
        const strArry = ["1", "2"];
        const actual = SharedUtils_joinString(strArry);
        const actual_1 = actual;
        const expected_1 = expected;
        const msg = "Should be 1;2";
        if ((actual_1 === expected_1) ? true : (!(new Function("try {return this===window;}catch(e){ return false;}"))())) {
            Util_assertEqual(actual_1, expected_1, msg);
        }
        else {
            let valueType;
            let copyOfStruct = actual_1;
            valueType = Reflection_string_type;
            const primitiveTypes = List_ofArray([Reflection_int32_type, Reflection_bool_type, Reflection_float64_type, Reflection_string_type, Reflection_class_type("System.Decimal"), Reflection_class_type("System.Guid")]);
            let errorMsg;
            if (List_contains(valueType, primitiveTypes, {
                Equals: Reflection_equals,
                GetHashCode: Reflection_getHashCode,
            })) {
                const arg10 = expected_1;
                const arg20 = actual_1;
                const arg30 = msg;
                const clo1 = String_toText(String_printf("\u003cspan style=\u0027color:black\u0027\u003eExpected:\u003c/span\u003e \u003cbr /\u003e\u003cdiv style=\u0027margin-left:20px; color:crimson\u0027\u003e%s\u003c/div\u003e\u003cbr /\u003e\u003cspan style=\u0027color:black\u0027\u003eActual:\u003c/span\u003e \u003c/br \u003e\u003cdiv style=\u0027margin-left:20px;color:crimson\u0027\u003e%s\u003c/div\u003e\u003cbr /\u003e\u003cspan style=\u0027color:black\u0027\u003eMessage:\u003c/span\u003e \u003c/br \u003e\u003cdiv style=\u0027margin-left:20px; color:crimson\u0027\u003e%s\u003c/div\u003e"));
                const clo2 = clo1(arg10);
                const clo3 = clo2(arg20);
                errorMsg = clo3(arg30);
            }
            else {
                const arg10_1 = expected_1;
                const arg20_1 = actual_1;
                const arg30_1 = msg;
                const clo1_1 = String_toText(String_printf("\u003cspan style=\u0027color:black\u0027\u003eExpected:\u003c/span\u003e \u003cbr /\u003e\u003cdiv style=\u0027margin-left:20px; color:crimson\u0027\u003e%A\u003c/div\u003e\u003cbr /\u003e\u003cspan style=\u0027color:black\u0027\u003eActual:\u003c/span\u003e \u003c/br \u003e\u003cdiv style=\u0027margin-left:20px;color:crimson\u0027\u003e%A\u003c/div\u003e\u003cbr /\u003e\u003cspan style=\u0027color:black\u0027\u003eMessage:\u003c/span\u003e \u003c/br \u003e\u003cdiv style=\u0027margin-left:20px; color:crimson\u0027\u003e%s\u003c/div\u003e"));
                const clo2_1 = clo1_1(arg10_1);
                const clo3_1 = clo2_1(arg20_1);
                errorMsg = clo3_1(arg30_1);
            }
            throw (new Error(errorMsg));
        }
    };
    return Mocha_Test_testCase("Join strings", body);
})()));

