import { Record as Types_Record } from "../../../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Types.js";
import { enum_type as Reflection_enum_type, int32_type as Reflection_int32_type, record_type as Reflection_record_type, string_type as Reflection_string_type } from "../../../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Reflection.js";

export class Months extends Types_Record {
    constructor(January, February, March, April, May, June, July, August, September, October, November, December) {
        super();
        this.January = January;
        this.February = February;
        this.March = March;
        this.April = April;
        this.May = May;
        this.June = June;
        this.July = July;
        this.August = August;
        this.September = September;
        this.October = October;
        this.November = November;
        this.December = December;
    }
}

export function Months$reflection() {
    return Reflection_record_type("Fable.PowerPack.Date.Local.Months", [], Months, () => [["January", Reflection_string_type], ["February", Reflection_string_type], ["March", Reflection_string_type], ["April", Reflection_string_type], ["May", Reflection_string_type], ["June", Reflection_string_type], ["July", Reflection_string_type], ["August", Reflection_string_type], ["September", Reflection_string_type], ["October", Reflection_string_type], ["November", Reflection_string_type], ["December", Reflection_string_type]]);
}

export class DaysOfWeek extends Types_Record {
    constructor(Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday) {
        super();
        this.Monday = Monday;
        this.Tuesday = Tuesday;
        this.Wednesday = Wednesday;
        this.Thursday = Thursday;
        this.Friday = Friday;
        this.Saturday = Saturday;
        this.Sunday = Sunday;
    }
}

export function DaysOfWeek$reflection() {
    return Reflection_record_type("Fable.PowerPack.Date.Local.DaysOfWeek", [], DaysOfWeek, () => [["Monday", Reflection_string_type], ["Tuesday", Reflection_string_type], ["Wednesday", Reflection_string_type], ["Thursday", Reflection_string_type], ["Friday", Reflection_string_type], ["Saturday", Reflection_string_type], ["Sunday", Reflection_string_type]]);
}

export class Date$ extends Types_Record {
    constructor(Months, AbbreviatedMonths, Days, AbbreviatedDays, DefaultFormat, FirstDayOfTheWeek) {
        super();
        this.Months = Months;
        this.AbbreviatedMonths = AbbreviatedMonths;
        this.Days = Days;
        this.AbbreviatedDays = AbbreviatedDays;
        this.DefaultFormat = DefaultFormat;
        this.FirstDayOfTheWeek = (FirstDayOfTheWeek | 0);
    }
}

export function Date$$reflection() {
    return Reflection_record_type("Fable.PowerPack.Date.Local.Date", [], Date$, () => [["Months", Months$reflection()], ["AbbreviatedMonths", Months$reflection()], ["Days", DaysOfWeek$reflection()], ["AbbreviatedDays", DaysOfWeek$reflection()], ["DefaultFormat", Reflection_string_type], ["FirstDayOfTheWeek", Reflection_enum_type("System.DayOfWeek", Reflection_int32_type, [["Sunday", 0], ["Monday", 1], ["Tuesday", 2], ["Wednesday", 3], ["Thursday", 4], ["Friday", 5], ["Saturday", 6]])]]);
}

export class Time extends Types_Record {
    constructor(AM, PM) {
        super();
        this.AM = AM;
        this.PM = PM;
    }
}

export function Time$reflection() {
    return Reflection_record_type("Fable.PowerPack.Date.Local.Time", [], Time, () => [["AM", Reflection_string_type], ["PM", Reflection_string_type]]);
}

export class Localization extends Types_Record {
    constructor(Date$, Time) {
        super();
        this.Date = Date$;
        this.Time = Time;
    }
}

export function Localization$reflection() {
    return Reflection_record_type("Fable.PowerPack.Date.Local.Localization", [], Localization, () => [["Date", Date$$reflection()], ["Time", Time$reflection()]]);
}

export function englishUK() {
    return new Localization(new Date$(new Months("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"), new Months("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"), new DaysOfWeek("Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"), new DaysOfWeek("Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"), "d/M/yyyy", 1), new Time("AM", "PM"));
}

export function englishUS() {
    return new Localization(new Date$(new Months("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"), new Months("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"), new DaysOfWeek("Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"), new DaysOfWeek("Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"), "M/d/yyyy", 0), new Time("AM", "PM"));
}

export function french() {
    return new Localization(new Date$(new Months("Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"), new Months("Jan", "Fév", "Mars", "Avr", "Mai", "Jui", "Juil", "Août", "Sep", "Oct", "Nov", "Dec"), new DaysOfWeek("Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"), new DaysOfWeek("Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"), "d/M/yyyy", 1), new Time("", ""));
}

export function russian() {
    return new Localization(new Date$(new Months("Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"), new Months("Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"), new DaysOfWeek("Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"), new DaysOfWeek("Пон", "Втр", "Срд", "Чтв", "Птн", "Сбт", "Вск"), "d.M.yyyy", 1), new Time("", ""));
}

export function hungarian() {
    return new Localization(new Date$(new Months("Január", "Február", "Március", "Április", "Május", "Június", "Július", "Augusztus", "Szeptember", "Október", "November", "December"), new Months("Jan", "Feb", "Márc", "Ápr", "Máj", "Jún", "Júl", "Aug", "Szept", "Okt", "Nov", "Dec"), new DaysOfWeek("Hétfő", "Kedd", "Szerda", "Csütörtök", "Péntek", "Szombat", "Vasárnap"), new DaysOfWeek("Hét", "Kedd", "Sze", "Csüt", "Pén", "Szo", "Vas"), "yyyy.MM.dd.", 1), new Time("de", "du"));
}

export function german() {
    return new Localization(new Date$(new Months("Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"), new Months("Jan", "Feb", "März", "Apr", "Mai", "Juni", "Juli", "Aug", "Sept", "Okt", "Nov", "Dez"), new DaysOfWeek("Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag", "Sonntag"), new DaysOfWeek("Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"), "dd.MM.yyyy", 1), new Time("", ""));
}

