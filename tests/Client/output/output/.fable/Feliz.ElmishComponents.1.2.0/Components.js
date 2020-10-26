import { Record as Types_Record } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Types.js";
import { record_type as Reflection_record_type, class_type as Reflection_class_type, tuple_type as Reflection_tuple_type, list_type as Reflection_list_type, lambda_type as Reflection_lambda_type, unit_type as Reflection_unit_type } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Reflection.js";

export class ElmishComponentProps$2 extends Types_Record {
    constructor(Initial, Update, Render) {
        super();
        this.Initial = Initial;
        this.Update = Update;
        this.Render = Render;
    }
}

export function ElmishComponentProps$2$reflection(gen0, gen1) {
    return Reflection_record_type("Feliz.ElmishComponents.ElmishComponentProps`2", [gen0, gen1], ElmishComponentProps$2, () => [["Initial", Reflection_tuple_type(gen0, Reflection_list_type(Reflection_lambda_type(Reflection_lambda_type(gen1, Reflection_unit_type), Reflection_unit_type)))], ["Update", Reflection_lambda_type(gen1, Reflection_lambda_type(gen0, Reflection_tuple_type(gen0, Reflection_list_type(Reflection_lambda_type(Reflection_lambda_type(gen1, Reflection_unit_type), Reflection_unit_type)))))], ["Render", Reflection_lambda_type(gen0, Reflection_lambda_type(Reflection_lambda_type(gen1, Reflection_unit_type), Reflection_class_type("Fable.React.ReactElement")))]]);
}

