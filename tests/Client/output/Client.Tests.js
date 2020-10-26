import { Mocha_runTests as Mocha_Mocha_runTests, Test_testCase as Mocha_Test_testCase, Test_testList as Mocha_Test_testList } from "./output/.fable/Fable.Mocha.2.9.1/Mocha.js";
import { update as State_update, init as State_init } from "./src/Chia.Docs/State.js";
import { Model$reflection as Domain_Model$reflection, Model as Domain_Model, Msg as Domain_Msg } from "./src/Chia.Docs/Domain.js";
import { Page$reflection as Router_Page$reflection, Page as Router_Page } from "./src/Chia.Docs/Router.js";
import { assertEqual as Util_assertEqual, equalsSafe as Util_equalsSafe } from "./.fable/fable-library.3.0.0-nagareyama-beta-003/Util.js";
import { getHashCode as Reflection_getHashCode, equals as Reflection_equals, class_type as Reflection_class_type, string_type as Reflection_string_type, float64_type as Reflection_float64_type, bool_type as Reflection_bool_type, int32_type as Reflection_int32_type } from "./.fable/fable-library.3.0.0-nagareyama-beta-003/Reflection.js";
import { contains as List_contains, ofArray as List_ofArray } from "./.fable/fable-library.3.0.0-nagareyama-beta-003/List.js";
import { toString as Types_toString } from "./.fable/fable-library.3.0.0-nagareyama-beta-003/Types.js";
import { printf as String_printf, toText as String_toText } from "./.fable/fable-library.3.0.0-nagareyama-beta-003/String.js";
import { shared as Shared$002ETests_shared } from "./Shared/Shared.Tests.js";

export const client = Mocha_Test_testList("Client", List_ofArray([(() => {
    const body = () => {
        const patternInput = State_init();
        const model = patternInput[0];
        const urlChangeMsg = new Domain_Msg(0, new Router_Page(16));
        const testModel = new Domain_Model(new Router_Page(16), model.ShowQuickView, model.ShowLoader);
        const patternInput_1 = State_update(urlChangeMsg, model);
        const currentModel = patternInput_1[0];
        const actual = currentModel;
        const expected = testModel;
        const msg = "New Page should be ChiaClientInstallation";
        if (Util_equalsSafe(actual, expected) ? true : (!(new Function("try {return this===window;}catch(e){ return false;}"))())) {
            Util_assertEqual(actual, expected, msg);
        }
        else {
            let valueType;
            let copyOfStruct = actual;
            valueType = Domain_Model$reflection();
            const primitiveTypes = List_ofArray([Reflection_int32_type, Reflection_bool_type, Reflection_float64_type, Reflection_string_type, Reflection_class_type("System.Decimal"), Reflection_class_type("System.Guid")]);
            let errorMsg;
            if (List_contains(valueType, primitiveTypes, {
                Equals: Reflection_equals,
                GetHashCode: Reflection_getHashCode,
            })) {
                const arg10 = Types_toString(expected);
                const arg20 = Types_toString(actual);
                const arg30 = msg;
                const clo1 = String_toText(String_printf("\u003cspan style=\u0027color:black\u0027\u003eExpected:\u003c/span\u003e \u003cbr /\u003e\u003cdiv style=\u0027margin-left:20px; color:crimson\u0027\u003e%s\u003c/div\u003e\u003cbr /\u003e\u003cspan style=\u0027color:black\u0027\u003eActual:\u003c/span\u003e \u003c/br \u003e\u003cdiv style=\u0027margin-left:20px;color:crimson\u0027\u003e%s\u003c/div\u003e\u003cbr /\u003e\u003cspan style=\u0027color:black\u0027\u003eMessage:\u003c/span\u003e \u003c/br \u003e\u003cdiv style=\u0027margin-left:20px; color:crimson\u0027\u003e%s\u003c/div\u003e"));
                const clo2 = clo1(arg10);
                const clo3 = clo2(arg20);
                errorMsg = clo3(arg30);
            }
            else {
                const arg10_1 = expected;
                const arg20_1 = actual;
                const arg30_1 = msg;
                const clo1_1 = String_toText(String_printf("\u003cspan style=\u0027color:black\u0027\u003eExpected:\u003c/span\u003e \u003cbr /\u003e\u003cdiv style=\u0027margin-left:20px; color:crimson\u0027\u003e%A\u003c/div\u003e\u003cbr /\u003e\u003cspan style=\u0027color:black\u0027\u003eActual:\u003c/span\u003e \u003c/br \u003e\u003cdiv style=\u0027margin-left:20px;color:crimson\u0027\u003e%A\u003c/div\u003e\u003cbr /\u003e\u003cspan style=\u0027color:black\u0027\u003eMessage:\u003c/span\u003e \u003c/br \u003e\u003cdiv style=\u0027margin-left:20px; color:crimson\u0027\u003e%s\u003c/div\u003e"));
                const clo2_1 = clo1_1(arg10_1);
                const clo3_1 = clo2_1(arg20_1);
                errorMsg = clo3_1(arg30_1);
            }
            throw (new Error(errorMsg));
        }
    };
    return Mocha_Test_testCase("UrlUpdate to ChiaClientInstallation works", body);
})(), (() => {
    const body_1 = () => {
        let page;
        throw 1;
        const patternInput_2 = State_init();
        const model_1 = patternInput_2[0];
        const patternInput_3 = State_update(new Domain_Msg(0, page), model_1);
        const currentModel_1 = patternInput_3[0];
        const actual_1 = currentModel_1.CurrentPage;
        const expected_1 = page;
        const msg_1 = "New Page should be EGTechnicalReport";
        if (Util_equalsSafe(actual_1, expected_1) ? true : (!(new Function("try {return this===window;}catch(e){ return false;}"))())) {
            Util_assertEqual(actual_1, expected_1, msg_1);
        }
        else {
            let valueType_1;
            let copyOfStruct_1 = actual_1;
            valueType_1 = Router_Page$reflection();
            const primitiveTypes_1 = List_ofArray([Reflection_int32_type, Reflection_bool_type, Reflection_float64_type, Reflection_string_type, Reflection_class_type("System.Decimal"), Reflection_class_type("System.Guid")]);
            let errorMsg_1;
            if (List_contains(valueType_1, primitiveTypes_1, {
                Equals: Reflection_equals,
                GetHashCode: Reflection_getHashCode,
            })) {
                const arg10_2 = Types_toString(expected_1);
                const arg20_2 = Types_toString(actual_1);
                const arg30_2 = msg_1;
                const clo1_2 = String_toText(String_printf("\u003cspan style=\u0027color:black\u0027\u003eExpected:\u003c/span\u003e \u003cbr /\u003e\u003cdiv style=\u0027margin-left:20px; color:crimson\u0027\u003e%s\u003c/div\u003e\u003cbr /\u003e\u003cspan style=\u0027color:black\u0027\u003eActual:\u003c/span\u003e \u003c/br \u003e\u003cdiv style=\u0027margin-left:20px;color:crimson\u0027\u003e%s\u003c/div\u003e\u003cbr /\u003e\u003cspan style=\u0027color:black\u0027\u003eMessage:\u003c/span\u003e \u003c/br \u003e\u003cdiv style=\u0027margin-left:20px; color:crimson\u0027\u003e%s\u003c/div\u003e"));
                const clo2_2 = clo1_2(arg10_2);
                const clo3_2 = clo2_2(arg20_2);
                errorMsg_1 = clo3_2(arg30_2);
            }
            else {
                const arg10_3 = expected_1;
                const arg20_3 = actual_1;
                const arg30_3 = msg_1;
                const clo1_3 = String_toText(String_printf("\u003cspan style=\u0027color:black\u0027\u003eExpected:\u003c/span\u003e \u003cbr /\u003e\u003cdiv style=\u0027margin-left:20px; color:crimson\u0027\u003e%A\u003c/div\u003e\u003cbr /\u003e\u003cspan style=\u0027color:black\u0027\u003eActual:\u003c/span\u003e \u003c/br \u003e\u003cdiv style=\u0027margin-left:20px;color:crimson\u0027\u003e%A\u003c/div\u003e\u003cbr /\u003e\u003cspan style=\u0027color:black\u0027\u003eMessage:\u003c/span\u003e \u003c/br \u003e\u003cdiv style=\u0027margin-left:20px; color:crimson\u0027\u003e%s\u003c/div\u003e"));
                const clo2_3 = clo1_3(arg10_3);
                const clo3_3 = clo2_3(arg20_3);
                errorMsg_1 = clo3_3(arg30_3);
            }
            throw (new Error(errorMsg_1));
        }
    };
    return Mocha_Test_testCase("Test timemodel", body_1);
})()]));

export const all = Mocha_Test_testList("All", List_ofArray([Shared$002ETests_shared, client]));

(function (_arg1) {
    return Mocha_Mocha_runTests(all);
})(process.argv.slice(2));

