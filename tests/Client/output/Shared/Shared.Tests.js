import { Test_testCase, Test_testList } from "../.fable/Fable.Mocha.2.9.1/Mocha.fs.js";
import { joinString } from "../src/Chia.Shared/SharedUtils.js";
import { assertEqual } from "../.fable/fable-library.3.0.0-nagareyama-rc-007/Util.js";
import { getHashCode, equals, class_type, float64_type, bool_type, int32_type, string_type } from "../.fable/fable-library.3.0.0-nagareyama-rc-007/Reflection.js";
import { singleton, contains, ofArray } from "../.fable/fable-library.3.0.0-nagareyama-rc-007/List.js";
import { printf, toText } from "../.fable/fable-library.3.0.0-nagareyama-rc-007/String.js";

export const shared = Test_testList("Shared", singleton((() => Test_testCase("Join strings", () => {
    const expected = "1;2";
    const strArry = ["1", "2"];
    const actual = joinString(strArry);
    const actual_1 = actual;
    const expected_1 = expected;
    const msg = "Should be 1;2";
    if ((actual_1 === expected_1) ? true : (!(new Function("try {return this===window;}catch(e){ return false;}"))())) {
        assertEqual(actual_1, expected_1, msg);
    }
    else {
        let valueType;
        let copyOfStruct = actual_1;
        valueType = string_type;
        const primitiveTypes = ofArray([int32_type, bool_type, float64_type, string_type, class_type("System.Decimal"), class_type("System.Guid")]);
        let errorMsg;
        if (contains(valueType, primitiveTypes, {
            Equals: equals,
            GetHashCode: getHashCode,
        })) {
            const clo1 = toText(printf("\u003cspan style=\u0027color:black\u0027\u003eExpected:\u003c/span\u003e \u003cbr /\u003e\u003cdiv style=\u0027margin-left:20px; color:crimson\u0027\u003e%s\u003c/div\u003e\u003cbr /\u003e\u003cspan style=\u0027color:black\u0027\u003eActual:\u003c/span\u003e \u003c/br \u003e\u003cdiv style=\u0027margin-left:20px;color:crimson\u0027\u003e%s\u003c/div\u003e\u003cbr /\u003e\u003cspan style=\u0027color:black\u0027\u003eMessage:\u003c/span\u003e \u003c/br \u003e\u003cdiv style=\u0027margin-left:20px; color:crimson\u0027\u003e%s\u003c/div\u003e"));
            const clo2 = clo1(expected_1);
            const clo3 = clo2(actual_1);
            errorMsg = clo3(msg);
        }
        else {
            const clo1_1 = toText(printf("\u003cspan style=\u0027color:black\u0027\u003eExpected:\u003c/span\u003e \u003cbr /\u003e\u003cdiv style=\u0027margin-left:20px; color:crimson\u0027\u003e%A\u003c/div\u003e\u003cbr /\u003e\u003cspan style=\u0027color:black\u0027\u003eActual:\u003c/span\u003e \u003c/br \u003e\u003cdiv style=\u0027margin-left:20px;color:crimson\u0027\u003e%A\u003c/div\u003e\u003cbr /\u003e\u003cspan style=\u0027color:black\u0027\u003eMessage:\u003c/span\u003e \u003c/br \u003e\u003cdiv style=\u0027margin-left:20px; color:crimson\u0027\u003e%s\u003c/div\u003e"));
            const clo2_1 = clo1_1(expected_1);
            const clo3_1 = clo2_1(actual_1);
            errorMsg = clo3_1(msg);
        }
        throw (new Error(errorMsg));
    }
}))()));

