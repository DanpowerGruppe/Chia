import { Record as Types_Record, Union as Types_Union } from "../../.fable/fable-library.3.0.0-nagareyama-beta-003/Types.js";
import { array_type as Reflection_array_type, float64_type as Reflection_float64_type, class_type as Reflection_class_type, record_type as Reflection_record_type, int32_type as Reflection_int32_type, option_type as Reflection_option_type, string_type as Reflection_string_type, union_type as Reflection_union_type } from "../../.fable/fable-library.3.0.0-nagareyama-beta-003/Reflection.js";
import { comparePrimitives as Util_comparePrimitives, round as Util_round, int32ToString as Util_int32ToString } from "../../.fable/fable-library.3.0.0-nagareyama-beta-003/Util.js";
import { replace as String_replace, format as String_format } from "../../.fable/fable-library.3.0.0-nagareyama-beta-003/String.js";
import { parse as Long_parse, op_Subtraction as Long_op_Subtraction } from "../../.fable/fable-library.3.0.0-nagareyama-beta-003/Long.js";
import { fromTicks as Date_fromTicks, getTicks as Date_getTicks, maxValue as Date_maxValue } from "../../.fable/fable-library.3.0.0-nagareyama-beta-003/Date.js";
import { rangeNumber as Seq_rangeNumber, map as Seq_map, delay as Seq_delay } from "../../.fable/fable-library.3.0.0-nagareyama-beta-003/Seq.js";
import { sortByDescending as Array_sortByDescending, map as Array_map, sortBy as Array_sortBy, concat as Array_concat } from "../../.fable/fable-library.3.0.0-nagareyama-beta-003/Array.js";

export class Time_ReportIntervall extends Types_Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["Daily", "Weekly", "Monthly", "Quarterly", "Halfyearly", "Yearly"];
    }
}

export function Time_ReportIntervall$reflection() {
    return Reflection_union_type("Chia.Shared.Time.ReportIntervall", [], Time_ReportIntervall, () => [[], [], [], [], [], []]);
}

export class Time_TimeFilters extends Types_Record {
    constructor(StartDate, StartDateLeavingPlants, EndDate, EndDateLeavingPlants, EndDateMinusOneDay, StartVuPeriode, EndVuPeriode, EndVuPeriodeLast, EndVuPeriodeQuotes) {
        super();
        this.StartDate = StartDate;
        this.StartDateLeavingPlants = StartDateLeavingPlants;
        this.EndDate = EndDate;
        this.EndDateLeavingPlants = EndDateLeavingPlants;
        this.EndDateMinusOneDay = EndDateMinusOneDay;
        this.StartVuPeriode = (StartVuPeriode | 0);
        this.EndVuPeriode = (EndVuPeriode | 0);
        this.EndVuPeriodeLast = EndVuPeriodeLast;
        this.EndVuPeriodeQuotes = (EndVuPeriodeQuotes | 0);
    }
}

export function Time_TimeFilters$reflection() {
    return Reflection_record_type("Chia.Shared.Time.TimeFilters", [], Time_TimeFilters, () => [["StartDate", Reflection_string_type], ["StartDateLeavingPlants", Reflection_string_type], ["EndDate", Reflection_string_type], ["EndDateLeavingPlants", Reflection_string_type], ["EndDateMinusOneDay", Reflection_option_type(Reflection_string_type)], ["StartVuPeriode", Reflection_int32_type], ["EndVuPeriode", Reflection_int32_type], ["EndVuPeriodeLast", Reflection_option_type(Reflection_int32_type)], ["EndVuPeriodeQuotes", Reflection_int32_type]]);
}

export class Time_TimeSpans extends Types_Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["Year", "Halfyear", "Quarter", "Month", "Week", "Day"];
    }
}

export function Time_TimeSpans$reflection() {
    return Reflection_union_type("Chia.Shared.Time.TimeSpans", [], Time_TimeSpans, () => [[], [], [], [], [], []]);
}

export class Time_Aggregation extends Types_Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["Accumulated", "Explicit"];
    }
}

export function Time_Aggregation$reflection() {
    return Reflection_union_type("Chia.Shared.Time.Aggregation", [], Time_Aggregation, () => [[], []]);
}

export class Time_TimeModel extends Types_Record {
    constructor(ReportIntervall, DateStart, DateEnd) {
        super();
        this.ReportIntervall = ReportIntervall;
        this.DateStart = DateStart;
        this.DateEnd = DateEnd;
    }
}

export function Time_TimeModel$reflection() {
    return Reflection_record_type("Chia.Shared.Time.TimeModel", [], Time_TimeModel, () => [["ReportIntervall", Time_ReportIntervall$reflection()], ["DateStart", Reflection_class_type("System.DateTimeOffset")], ["DateEnd", Reflection_class_type("System.DateTimeOffset")]]);
}

export class Ids_ReportId extends Types_Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["ReportId"];
    }
}

export function Ids_ReportId$reflection() {
    return Reflection_union_type("Chia.Shared.Ids.ReportId", [], Ids_ReportId, () => [[["reportId", Reflection_int32_type]]]);
}

export function Ids_ReportId__get_GetValue(this$) {
    const _arg1 = this$;
    const id = _arg1.fields[0] | 0;
    return id | 0;
}

export function Ids_ReportId__get_GetValueAsString(this$) {
    const _arg2 = this$;
    const id = _arg2.fields[0] | 0;
    return Util_int32ToString(id);
}

export class Ids_SortableRowKey extends Types_Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["SortableRowKey"];
    }
}

export function Ids_SortableRowKey$reflection() {
    return Reflection_union_type("Chia.Shared.Ids.SortableRowKey", [], Ids_SortableRowKey, () => [[["Item", Reflection_string_type]]]);
}

export function Ids_SortableRowKey__get_GetValue(this$) {
    const _arg3 = this$;
    const id = _arg3.fields[0];
    return id;
}

export function Ids_SortableRowKeyModule_toRowKey(dateTime) {
    let copyOfStruct;
    const arg0 = String_format("{0:D19}", Long_op_Subtraction((copyOfStruct = Date_maxValue(), Date_getTicks(copyOfStruct)), Date_getTicks(dateTime)));
    return new Ids_SortableRowKey(0, arg0);
}

export function Ids_SortableRowKeyModule_toDate(_arg1) {
    let copyOfStruct;
    const ticks = _arg1.fields[0];
    return Date_fromTicks(Long_op_Subtraction((copyOfStruct = Date_maxValue(), Date_getTicks(copyOfStruct)), Long_parse(ticks, 511, false, 64)));
}

export class Tables_TableEntity extends Types_Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["Text", "Float", "Integer"];
    }
    ToString() {
        const this$ = this;
        switch (this$.tag) {
            case 1: {
                const f = this$.fields[0];
                let text;
                const value = Util_round(f, 3);
                text = value.toString();
                return String_replace(text, ".", ",");
            }
            case 2: {
                const i = this$.fields[0] | 0;
                return Util_int32ToString(i);
            }
            default: {
                const t = this$.fields[0];
                return t;
            }
        }
    }
    toString() {
        return this.ToString();
    }
}

export function Tables_TableEntity$reflection() {
    return Reflection_union_type("Chia.Shared.Tables.TableEntity", [], Tables_TableEntity, () => [[["Item", Reflection_string_type]], [["Item", Reflection_float64_type]], [["Item", Reflection_int32_type]]]);
}

export class Tables_TableRecord extends Types_Record {
    constructor(Header, Content) {
        super();
        this.Header = Header;
        this.Content = Content;
    }
}

export function Tables_TableRecord$reflection() {
    return Reflection_record_type("Chia.Shared.Tables.TableRecord", [], Tables_TableRecord, () => [["Header", Reflection_array_type(Tables_TableEntity$reflection())], ["Content", Reflection_array_type(Reflection_array_type(Tables_TableEntity$reflection()))]]);
}

export function Tables_TableRecord__TransposeContent(this$) {
    const matchValue = this$.Content.length | 0;
    if (matchValue === 0) {
        return new Tables_TableRecord([], []);
    }
    else {
        const content = Array.from(Seq_delay(() => Seq_map((y) => Array.from(Seq_delay(() => Seq_map((x) => ((x === 0) ? this$.Header[y] : this$.Content[x - 1][y]), Seq_rangeNumber(0, 1, this$.Content.length)))), Seq_rangeNumber(0, 1, this$.Content[0].length - 1))));
        return new Tables_TableRecord(content[0], content.slice(1, content.length));
    }
}

export function Tables_TableRecord__SortBy_Z7ACEBCCA(this$, col, asc) {
    const sort = () => {
        let col_1;
        const getArrays = (numbers_mut, strings_mut, content_mut) => {
            getArrays:
            while (true) {
                const numbers = numbers_mut, strings = strings_mut, content = content_mut;
                if (content.length === 0) {
                    return [numbers, strings];
                }
                else {
                    const line = content[0];
                    const matchValue = line[col];
                    switch (matchValue.tag) {
                        case 1: {
                            const f = matchValue.fields[0];
                            const crit_1 = f;
                            numbers_mut = Array_concat([numbers, [[crit_1, line]]]);
                            strings_mut = strings;
                            content_mut = content.slice(1, content.length);
                            continue getArrays;
                        }
                        case 0: {
                            const t = matchValue.fields[0];
                            numbers_mut = numbers;
                            strings_mut = Array_concat([strings, [[t, line]]]);
                            content_mut = content.slice(1, content.length);
                            continue getArrays;
                        }
                        default: {
                            const i = matchValue.fields[0] | 0;
                            let crit;
                            const value = i | 0;
                            crit = value;
                            numbers_mut = Array_concat([numbers, [[crit, line]]]);
                            strings_mut = strings;
                            content_mut = content.slice(1, content.length);
                            continue getArrays;
                        }
                    }
                }
                break;
            }
        };
        if (col_1 = (col | 0), col_1 < this$.Header.length) {
            const col_2 = col | 0;
            const patternInput = getArrays([], [], this$.Content);
            const strings_1 = patternInput[1];
            const numbers_1 = patternInput[0];
            let sortedNumbers;
            if (asc) {
                let array_1;
                const array = numbers_1;
                array_1 = Array_sortBy((tupledArg) => {
                    const crit_2 = tupledArg[0];
                    return crit_2;
                }, array, {
                    Compare: Util_comparePrimitives,
                });
                sortedNumbers = Array_map((tupledArg_1) => {
                    const content_1 = tupledArg_1[1];
                    return content_1;
                }, array_1);
            }
            else {
                let array_3;
                const array_2 = numbers_1;
                array_3 = Array_sortByDescending((tupledArg_2) => {
                    const crit_3 = tupledArg_2[0];
                    return crit_3;
                }, array_2, {
                    Compare: Util_comparePrimitives,
                });
                sortedNumbers = Array_map((tupledArg_3) => {
                    const content_2 = tupledArg_3[1];
                    return content_2;
                }, array_3);
            }
            let sortedStrings;
            if (asc) {
                let array_5;
                const array_4 = strings_1;
                array_5 = Array_sortBy((tupledArg_4) => {
                    const crit_4 = tupledArg_4[0];
                    return crit_4;
                }, array_4, {
                    Compare: Util_comparePrimitives,
                });
                sortedStrings = Array_map((tupledArg_5) => {
                    const content_3 = tupledArg_5[1];
                    return content_3;
                }, array_5);
            }
            else {
                let array_7;
                const array_6 = strings_1;
                array_7 = Array_sortByDescending((tupledArg_6) => {
                    const crit_5 = tupledArg_6[0];
                    return crit_5;
                }, array_6, {
                    Compare: Util_comparePrimitives,
                });
                sortedStrings = Array_map((tupledArg_7) => {
                    const content_4 = tupledArg_7[1];
                    return content_4;
                }, array_7);
            }
            const newContent = Array_concat([sortedNumbers, sortedStrings]);
            return new Tables_TableRecord(this$.Header, newContent);
        }
        else {
            return this$;
        }
    };
    const matchValue_1 = this$.Content.length | 0;
    if (matchValue_1 === 0) {
        return this$;
    }
    else if (this$.Content[0].length < col) {
        return this$;
    }
    else {
        return sort();
    }
}

export class Selection$1 extends Types_Record {
    constructor(Value, Text$) {
        super();
        this.Value = Value;
        this.Text = Text$;
    }
}

export function Selection$1$reflection(gen0) {
    return Reflection_record_type("Chia.Shared.Selection`1", [gen0], Selection$1, () => [["Value", gen0], ["Text", Reflection_string_type]]);
}

