import { Record as Types_Record } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Types.js";
import { record_type as Reflection_record_type, string_type as Reflection_string_type } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Reflection.js";

export class FragmentProps extends Types_Record {
    constructor(key) {
        super();
        this.key = key;
    }
}

export function FragmentProps$reflection() {
    return Reflection_record_type("Fable.React.FragmentProps", [], FragmentProps, () => [["key", Reflection_string_type]]);
}

