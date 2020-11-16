import { Record, Union } from "../../.fable/fable-library.3.0.0-nagareyama-rc-007/Types.js";
import { array_type, float64_type, class_type, record_type, int32_type, option_type, union_type, string_type } from "../../.fable/fable-library.3.0.0-nagareyama-rc-007/Reflection.js";
import { comparePrimitives, round, int32ToString } from "../../.fable/fable-library.3.0.0-nagareyama-rc-007/Util.js";
import { replace, format } from "../../.fable/fable-library.3.0.0-nagareyama-rc-007/String.js";
import { parse, op_Subtraction } from "../../.fable/fable-library.3.0.0-nagareyama-rc-007/Long.js";
import { fromTicks, getTicks, maxValue } from "../../.fable/fable-library.3.0.0-nagareyama-rc-007/Date.js";
import { rangeNumber, map, delay } from "../../.fable/fable-library.3.0.0-nagareyama-rc-007/Seq.js";
import { sortByDescending, map as map_1, sortBy, concat } from "../../.fable/fable-library.3.0.0-nagareyama-rc-007/Array.js";

export class Logging_DevOption extends Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["Local", "Azure", "LocalAndAzure"];
    }
}

export function Logging_DevOption$reflection() {
    return union_type("Chia.Shared.Logging.DevOption", [], Logging_DevOption, () => [[], [["Item", string_type]], [["Item", string_type]]]);
}

export class Config_DevStatus extends Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["Development", "Test", "PreProductive", "Productive"];
    }
}

export function Config_DevStatus$reflection() {
    return union_type("Chia.Shared.Config.DevStatus", [], Config_DevStatus, () => [[], [], [], []]);
}

export function Config_DevStatus__get_GetValue(this$) {
    switch (this$.tag) {
        case 1: {
            return "test";
        }
        case 2: {
            return "preprod";
        }
        case 3: {
            return "prod";
        }
        default: {
            return "dev";
        }
    }
}

export class Time_ReportIntervall extends Union {
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
    return union_type("Chia.Shared.Time.ReportIntervall", [], Time_ReportIntervall, () => [[], [], [], [], [], []]);
}

export class Time_TimeFilters extends Record {
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
    return record_type("Chia.Shared.Time.TimeFilters", [], Time_TimeFilters, () => [["StartDate", string_type], ["StartDateLeavingPlants", string_type], ["EndDate", string_type], ["EndDateLeavingPlants", string_type], ["EndDateMinusOneDay", option_type(string_type)], ["StartVuPeriode", int32_type], ["EndVuPeriode", int32_type], ["EndVuPeriodeLast", option_type(int32_type)], ["EndVuPeriodeQuotes", int32_type]]);
}

export class Time_TimeSpans extends Union {
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
    return union_type("Chia.Shared.Time.TimeSpans", [], Time_TimeSpans, () => [[], [], [], [], [], []]);
}

export class Time_Aggregation extends Union {
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
    return union_type("Chia.Shared.Time.Aggregation", [], Time_Aggregation, () => [[], []]);
}

export class Time_TimeModel extends Record {
    constructor(ReportIntervall, DateStart, DateEnd) {
        super();
        this.ReportIntervall = ReportIntervall;
        this.DateStart = DateStart;
        this.DateEnd = DateEnd;
    }
}

export function Time_TimeModel$reflection() {
    return record_type("Chia.Shared.Time.TimeModel", [], Time_TimeModel, () => [["ReportIntervall", Time_ReportIntervall$reflection()], ["DateStart", class_type("System.DateTimeOffset")], ["DateEnd", class_type("System.DateTimeOffset")]]);
}

export class Ids_ReportId extends Union {
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
    return union_type("Chia.Shared.Ids.ReportId", [], Ids_ReportId, () => [[["reportId", int32_type]]]);
}

export function Ids_ReportId__get_GetValue(this$) {
    const id = this$.fields[0] | 0;
    return id | 0;
}

export function Ids_ReportId__get_GetValueAsString(this$) {
    const id = this$.fields[0] | 0;
    return int32ToString(id);
}

export class Ids_SortableRowKey extends Union {
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
    return union_type("Chia.Shared.Ids.SortableRowKey", [], Ids_SortableRowKey, () => [[["Item", string_type]]]);
}

export function Ids_SortableRowKey__get_GetValue(this$) {
    const id = this$.fields[0];
    return id;
}

export function Ids_SortableRowKeyModule_toRowKey(dateTime) {
    let copyOfStruct;
    const arg0 = format("{0:D19}", op_Subtraction((copyOfStruct = maxValue(), getTicks(copyOfStruct)), getTicks(dateTime)));
    return new Ids_SortableRowKey(0, arg0);
}

export function Ids_SortableRowKeyModule_toDate(_arg1) {
    let copyOfStruct;
    const ticks = _arg1.fields[0];
    return fromTicks(op_Subtraction((copyOfStruct = maxValue(), getTicks(copyOfStruct)), parse(ticks, 511, false, 64)));
}

export class Tables_TableEntity extends Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["Text", "Float", "Integer"];
    }
    toString() {
        const this$ = this;
        switch (this$.tag) {
            case 1: {
                const f = this$.fields[0];
                let text;
                const value = round(f, 3);
                text = value.toString();
                return replace(text, ".", ",");
            }
            case 2: {
                const i = this$.fields[0] | 0;
                return int32ToString(i);
            }
            default: {
                const t = this$.fields[0];
                return t;
            }
        }
    }
}

export function Tables_TableEntity$reflection() {
    return union_type("Chia.Shared.Tables.TableEntity", [], Tables_TableEntity, () => [[["Item", string_type]], [["Item", float64_type]], [["Item", int32_type]]]);
}

export class Tables_TableRecord extends Record {
    constructor(Header, Content) {
        super();
        this.Header = Header;
        this.Content = Content;
    }
}

export function Tables_TableRecord$reflection() {
    return record_type("Chia.Shared.Tables.TableRecord", [], Tables_TableRecord, () => [["Header", array_type(Tables_TableEntity$reflection())], ["Content", array_type(array_type(Tables_TableEntity$reflection()))]]);
}

export function Tables_TableRecord__TransposeContent(this$) {
    const matchValue = this$.Content.length | 0;
    if (matchValue === 0) {
        return new Tables_TableRecord([], []);
    }
    else {
        const content = Array.from(delay(() => map((y) => Array.from(delay(() => map((x) => ((x === 0) ? this$.Header[y] : this$.Content[x - 1][y]), rangeNumber(0, 1, this$.Content.length)))), rangeNumber(0, 1, this$.Content[0].length - 1))));
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
                            numbers_mut = concat([numbers, [[crit_1, line]]]);
                            strings_mut = strings;
                            content_mut = content.slice(1, content.length);
                            continue getArrays;
                        }
                        case 0: {
                            const t = matchValue.fields[0];
                            numbers_mut = numbers;
                            strings_mut = concat([strings, [[t, line]]]);
                            content_mut = content.slice(1, content.length);
                            continue getArrays;
                        }
                        default: {
                            const i = matchValue.fields[0] | 0;
                            let crit;
                            crit = i;
                            numbers_mut = concat([numbers, [[crit, line]]]);
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
                array_1 = sortBy((tupledArg) => {
                    const crit_2 = tupledArg[0];
                    return crit_2;
                }, numbers_1, {
                    Compare: comparePrimitives,
                });
                sortedNumbers = map_1((tupledArg_1) => {
                    const content_1 = tupledArg_1[1];
                    return content_1;
                }, array_1);
            }
            else {
                let array_3;
                array_3 = sortByDescending((tupledArg_2) => {
                    const crit_3 = tupledArg_2[0];
                    return crit_3;
                }, numbers_1, {
                    Compare: comparePrimitives,
                });
                sortedNumbers = map_1((tupledArg_3) => {
                    const content_2 = tupledArg_3[1];
                    return content_2;
                }, array_3);
            }
            let sortedStrings;
            if (asc) {
                let array_5;
                array_5 = sortBy((tupledArg_4) => {
                    const crit_4 = tupledArg_4[0];
                    return crit_4;
                }, strings_1, {
                    Compare: comparePrimitives,
                });
                sortedStrings = map_1((tupledArg_5) => {
                    const content_3 = tupledArg_5[1];
                    return content_3;
                }, array_5);
            }
            else {
                let array_7;
                array_7 = sortByDescending((tupledArg_6) => {
                    const crit_5 = tupledArg_6[0];
                    return crit_5;
                }, strings_1, {
                    Compare: comparePrimitives,
                });
                sortedStrings = map_1((tupledArg_7) => {
                    const content_4 = tupledArg_7[1];
                    return content_4;
                }, array_7);
            }
            const newContent = concat([sortedNumbers, sortedStrings]);
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

export class Selection$1 extends Record {
    constructor(Value, Text$) {
        super();
        this.Value = Value;
        this.Text = Text$;
    }
}

export function Selection$1$reflection(gen0) {
    return record_type("Chia.Shared.Selection`1", [gen0], Selection$1, () => [["Value", gen0], ["Text", string_type]]);
}

