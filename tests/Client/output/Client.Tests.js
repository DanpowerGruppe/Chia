import { Mocha_runTests, Test_testCase, Test_testList } from "./.fable/Fable.Mocha.2.9.1/Mocha.fs.js";
import { update, init } from "./src/Chia.Docs/State.js";
import { Model$reflection, Model, Msg } from "./src/Chia.Docs/Domain.js";
import { Page } from "./src/Chia.Docs/Router.js";
import { assertEqual, equalsSafe } from "./.fable/fable-library.3.0.0-nagareyama-rc-007/Util.js";
import { getHashCode, equals, class_type, string_type, float64_type, bool_type, int32_type } from "./.fable/fable-library.3.0.0-nagareyama-rc-007/Reflection.js";
import { singleton, contains, ofArray } from "./.fable/fable-library.3.0.0-nagareyama-rc-007/List.js";
import { toString } from "./.fable/fable-library.3.0.0-nagareyama-rc-007/Types.js";
import { printf, toText } from "./.fable/fable-library.3.0.0-nagareyama-rc-007/String.js";
import { shared } from "./Shared/Shared.Tests.js";

export const client = Test_testList("Client", singleton((() => Test_testCase("UrlUpdate to ChiaClientInstallation works", () => {
    const patternInput = init();
    const model = patternInput[0];
    const urlChangeMsg = new Msg(0, new Page(16));
    const testModel = new Model(new Page(16), model.ShowQuickView, model.ShowLoader);
    const patternInput_1 = update(urlChangeMsg, model);
    const currentModel = patternInput_1[0];
    const actual = currentModel;
    const expected = testModel;
    const msg = "New Page should be ChiaClientInstallation";
    if (equalsSafe(actual, expected) ? true : (!(new Function("try {return this===window;}catch(e){ return false;}"))())) {
        assertEqual(actual, expected, msg);
    }
    else {
        let valueType;
        let copyOfStruct = actual;
        valueType = Model$reflection();
        const primitiveTypes = ofArray([int32_type, bool_type, float64_type, string_type, class_type("System.Decimal"), class_type("System.Guid")]);
        let errorMsg;
        if (contains(valueType, primitiveTypes, {
            Equals: equals,
            GetHashCode: getHashCode,
        })) {
            const arg10 = toString(expected);
            const arg20 = toString(actual);
            const clo1 = toText(printf("\u003cspan style=\u0027color:black\u0027\u003eExpected:\u003c/span\u003e \u003cbr /\u003e\u003cdiv style=\u0027margin-left:20px; color:crimson\u0027\u003e%s\u003c/div\u003e\u003cbr /\u003e\u003cspan style=\u0027color:black\u0027\u003eActual:\u003c/span\u003e \u003c/br \u003e\u003cdiv style=\u0027margin-left:20px;color:crimson\u0027\u003e%s\u003c/div\u003e\u003cbr /\u003e\u003cspan style=\u0027color:black\u0027\u003eMessage:\u003c/span\u003e \u003c/br \u003e\u003cdiv style=\u0027margin-left:20px; color:crimson\u0027\u003e%s\u003c/div\u003e"));
            const clo2 = clo1(arg10);
            const clo3 = clo2(arg20);
            errorMsg = clo3(msg);
        }
        else {
            const clo1_1 = toText(printf("\u003cspan style=\u0027color:black\u0027\u003eExpected:\u003c/span\u003e \u003cbr /\u003e\u003cdiv style=\u0027margin-left:20px; color:crimson\u0027\u003e%A\u003c/div\u003e\u003cbr /\u003e\u003cspan style=\u0027color:black\u0027\u003eActual:\u003c/span\u003e \u003c/br \u003e\u003cdiv style=\u0027margin-left:20px;color:crimson\u0027\u003e%A\u003c/div\u003e\u003cbr /\u003e\u003cspan style=\u0027color:black\u0027\u003eMessage:\u003c/span\u003e \u003c/br \u003e\u003cdiv style=\u0027margin-left:20px; color:crimson\u0027\u003e%s\u003c/div\u003e"));
            const clo2_1 = clo1_1(expected);
            const clo3_1 = clo2_1(actual);
            errorMsg = clo3_1(msg);
        }
        throw (new Error(errorMsg));
    }
}))()));

export const all = Test_testList("All", ofArray([shared, client]));

(function (_arg1) {
    return Mocha_runTests(all);
})(process.argv.slice(2));

