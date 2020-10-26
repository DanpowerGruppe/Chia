import { Union as Types_Union, Record as Types_Record } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Types.js";
import { array_type as Reflection_array_type, int32_type as Reflection_int32_type, union_type as Reflection_union_type, lambda_type as Reflection_lambda_type, unit_type as Reflection_unit_type, bool_type as Reflection_bool_type, obj_type as Reflection_obj_type, class_type as Reflection_class_type, string_type as Reflection_string_type, record_type as Reflection_record_type, float64_type as Reflection_float64_type } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Reflection.js";

export class Props_Point2 extends Types_Record {
    constructor(x, y) {
        super();
        this.x = x;
        this.y = y;
    }
}

export function Props_Point2$reflection() {
    return Reflection_record_type("Fable.Recharts.Props.Point2", [], Props_Point2, () => [["x", Reflection_float64_type], ["y", Reflection_float64_type]]);
}

export class Props_Point3 extends Types_Record {
    constructor(x, y, z) {
        super();
        this.x = x;
        this.y = y;
        this.z = z;
    }
}

export function Props_Point3$reflection() {
    return Reflection_record_type("Fable.Recharts.Props.Point3", [], Props_Point3, () => [["x", Reflection_float64_type], ["y", Reflection_float64_type], ["z", Reflection_float64_type]]);
}

export class Props_LinePoint extends Types_Record {
    constructor(x, y, value) {
        super();
        this.x = x;
        this.y = y;
        this.value = value;
    }
}

export function Props_LinePoint$reflection() {
    return Reflection_record_type("Fable.Recharts.Props.LinePoint", [], Props_LinePoint, () => [["x", Reflection_float64_type], ["y", Reflection_float64_type], ["value", Reflection_float64_type]]);
}

export class Props_ScatterPoint extends Types_Record {
    constructor(cx, cy, r, payload) {
        super();
        this.cx = cx;
        this.cy = cy;
        this.r = r;
        this.payload = payload;
    }
}

export function Props_ScatterPoint$reflection() {
    return Reflection_record_type("Fable.Recharts.Props.ScatterPoint", [], Props_ScatterPoint, () => [["cx", Reflection_float64_type], ["cy", Reflection_float64_type], ["r", Reflection_float64_type], ["payload", Props_Point3$reflection()]]);
}

export class Props_Margin extends Types_Record {
    constructor(top, bottom, right, left) {
        super();
        this.top = top;
        this.bottom = bottom;
        this.right = right;
        this.left = left;
    }
}

export function Props_Margin$reflection() {
    return Reflection_record_type("Fable.Recharts.Props.Margin", [], Props_Margin, () => [["top", Reflection_float64_type], ["bottom", Reflection_float64_type], ["right", Reflection_float64_type], ["left", Reflection_float64_type]]);
}

export class Props_ViewBox extends Types_Record {
    constructor(x, y, width, height) {
        super();
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
}

export function Props_ViewBox$reflection() {
    return Reflection_record_type("Fable.Recharts.Props.ViewBox", [], Props_ViewBox, () => [["x", Reflection_float64_type], ["y", Reflection_float64_type], ["width", Reflection_float64_type], ["height", Reflection_float64_type]]);
}

export class Props_Chart extends Types_Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["SyncId", "Layout", "Width", "Height", "Data", "Margin", "BarCategoryGap", "BarGap", "BarSize", "MaxBarSize", "StackOffset", "BaseValue", "baseValue", "ReverseStackOrder", "Cx", "Cy", "StartAngle", "EndAngle", "InnerRadius", "OuterRadius", "OnClick", "OnMouseDown", "OnMouseUp", "OnMouseMove", "OnMouseOver", "OnMouseEnter", "OnMouseLeave"];
    }
}

export function Props_Chart$reflection() {
    return Reflection_union_type("Fable.Recharts.Props.Chart", [], Props_Chart, () => [[["Item", Reflection_string_type]], [["Item", Reflection_string_type]], [["Item", Reflection_float64_type]], [["Item", Reflection_float64_type]], [["Item", Reflection_class_type("System.Array")]], [["Item", Props_Margin$reflection()]], [["Item", Reflection_obj_type]], [["Item", Reflection_obj_type]], [["Item", Reflection_float64_type]], [["Item", Reflection_float64_type]], [["Item", Reflection_string_type]], [["Item", Reflection_string_type]], [["Item", Reflection_float64_type]], [["Item", Reflection_bool_type]], [["Item", Reflection_obj_type]], [["Item", Reflection_obj_type]], [["Item", Reflection_float64_type]], [["Item", Reflection_float64_type]], [["Item", Reflection_obj_type]], [["Item", Reflection_obj_type]], [["Item", Reflection_lambda_type(Reflection_obj_type, Reflection_lambda_type(Reflection_class_type("Browser.Types.MouseEvent"), Reflection_unit_type))]], [["Item", Reflection_lambda_type(Reflection_obj_type, Reflection_lambda_type(Reflection_class_type("Browser.Types.MouseEvent"), Reflection_unit_type))]], [["Item", Reflection_lambda_type(Reflection_obj_type, Reflection_lambda_type(Reflection_class_type("Browser.Types.MouseEvent"), Reflection_unit_type))]], [["Item", Reflection_lambda_type(Reflection_obj_type, Reflection_lambda_type(Reflection_class_type("Browser.Types.MouseEvent"), Reflection_unit_type))]], [["Item", Reflection_lambda_type(Reflection_obj_type, Reflection_lambda_type(Reflection_class_type("Browser.Types.MouseEvent"), Reflection_unit_type))]], [["Item", Reflection_lambda_type(Reflection_obj_type, Reflection_lambda_type(Reflection_class_type("Browser.Types.MouseEvent"), Reflection_unit_type))]], [["Item", Reflection_lambda_type(Reflection_obj_type, Reflection_lambda_type(Reflection_class_type("Browser.Types.MouseEvent"), Reflection_unit_type))]]]);
}

export class Props_Treemap extends Types_Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["Width", "Height", "Data", "DataKey", "AspectRatio", "IsAnimationActive", "AnimationBegin", "AnimationDuration", "AnimationEasing"];
    }
}

export function Props_Treemap$reflection() {
    return Reflection_union_type("Fable.Recharts.Props.Treemap", [], Props_Treemap, () => [[["Item", Reflection_float64_type]], [["Item", Reflection_float64_type]], [["Item", Reflection_class_type("System.Array")]], [["Item", Reflection_obj_type]], [["Item", Reflection_float64_type]], [["Item", Reflection_bool_type]], [["Item", Reflection_float64_type]], [["Item", Reflection_float64_type]], [["Item", Reflection_string_type]]]);
}

export class Props_Responsive extends Types_Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["Aspect", "Width", "Height", "MinWidth", "MinHeight", "Debounce"];
    }
}

export function Props_Responsive$reflection() {
    return Reflection_union_type("Fable.Recharts.Props.Responsive", [], Props_Responsive, () => [[["Item", Reflection_float64_type]], [["Item", Reflection_obj_type]], [["Item", Reflection_obj_type]], [["Item", Reflection_float64_type]], [["Item", Reflection_float64_type]], [["Item", Reflection_float64_type]]]);
}

export class Props_Legend extends Types_Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["Width", "Height", "Layout", "Align", "VerticalAlign", "IconSize", "IconType", "PayLoad", "ChartWidth", "ChartHeight", "Margin", "Content", "WrapperStyle", "OnClick", "OnMouseDown", "OnMouseUp", "OnMouseMove", "OnMouseOver", "OnMouseEnter", "OnMouseLeave"];
    }
}

export function Props_Legend$reflection() {
    return Reflection_union_type("Fable.Recharts.Props.Legend", [], Props_Legend, () => [[["Item", Reflection_float64_type]], [["Item", Reflection_float64_type]], [["Item", Reflection_string_type]], [["Item", Reflection_string_type]], [["Item", Reflection_string_type]], [["Item", Reflection_float64_type]], [["Item", Reflection_string_type]], [["Item", Reflection_class_type("System.Array")]], [["Item", Reflection_float64_type]], [["Item", Reflection_float64_type]], [["Item", Props_Margin$reflection()]], [["Item", Reflection_obj_type]], [["Item", Reflection_obj_type]], [["Item", Reflection_lambda_type(Reflection_obj_type, Reflection_lambda_type(Reflection_int32_type, Reflection_lambda_type(Reflection_class_type("Browser.Types.MouseEvent"), Reflection_unit_type)))]], [["Item", Reflection_lambda_type(Reflection_obj_type, Reflection_lambda_type(Reflection_int32_type, Reflection_lambda_type(Reflection_class_type("Browser.Types.MouseEvent"), Reflection_unit_type)))]], [["Item", Reflection_lambda_type(Reflection_obj_type, Reflection_lambda_type(Reflection_int32_type, Reflection_lambda_type(Reflection_class_type("Browser.Types.MouseEvent"), Reflection_unit_type)))]], [["Item", Reflection_lambda_type(Reflection_obj_type, Reflection_lambda_type(Reflection_int32_type, Reflection_lambda_type(Reflection_class_type("Browser.Types.MouseEvent"), Reflection_unit_type)))]], [["Item", Reflection_lambda_type(Reflection_obj_type, Reflection_lambda_type(Reflection_int32_type, Reflection_lambda_type(Reflection_class_type("Browser.Types.MouseEvent"), Reflection_unit_type)))]], [["Item", Reflection_lambda_type(Reflection_obj_type, Reflection_lambda_type(Reflection_int32_type, Reflection_lambda_type(Reflection_class_type("Browser.Types.MouseEvent"), Reflection_unit_type)))]], [["Item", Reflection_lambda_type(Reflection_obj_type, Reflection_lambda_type(Reflection_int32_type, Reflection_lambda_type(Reflection_class_type("Browser.Types.MouseEvent"), Reflection_unit_type)))]]]);
}

export class Props_Tooltip extends Types_Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["Separator", "Offset", "ItemStyle", "WrapperStyle", "LabelStyle", "Cursor", "ViewBox", "Active", "Coordinate", "Payload", "Label", "Content", "Formatter", "LabelFormatter", "ItemSorter", "IsAnimationActive", "AnimationBegin", "AnimationDuration", "AnimationEasing"];
    }
}

export function Props_Tooltip$reflection() {
    return Reflection_union_type("Fable.Recharts.Props.Tooltip", [], Props_Tooltip, () => [[["Item", Reflection_string_type]], [["Item", Reflection_float64_type]], [["Item", Reflection_obj_type]], [["Item", Reflection_obj_type]], [["Item", Reflection_obj_type]], [["Item", Reflection_obj_type]], [["Item", Props_ViewBox$reflection()]], [["Item", Reflection_bool_type]], [["Item", Props_Point2$reflection()]], [["Item", Reflection_class_type("System.Array")]], [["Item", Reflection_obj_type]], [["Item", Reflection_obj_type]], [["Item", Reflection_obj_type]], [["Item", Reflection_obj_type]], [["Item", Reflection_obj_type]], [["Item", Reflection_bool_type]], [["Item", Reflection_float64_type]], [["Item", Reflection_float64_type]], [["Item", Reflection_string_type]]]);
}

export class Props_Cell extends Types_Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["Fill", "Stroke"];
    }
}

export function Props_Cell$reflection() {
    return Reflection_union_type("Fable.Recharts.Props.Cell", [], Props_Cell, () => [[["Item", Reflection_string_type]], [["Item", Reflection_string_type]]]);
}

export class Props_Text extends Types_Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["ScaleToFit", "Angle", "Width", "TextAnchor", "VerticalAnchor"];
    }
}

export function Props_Text$reflection() {
    return Reflection_union_type("Fable.Recharts.Props.Text", [], Props_Text, () => [[["Item", Reflection_bool_type]], [["Item", Reflection_float64_type]], [["Item", Reflection_float64_type]], [["Item", Reflection_string_type]], [["Item", Reflection_string_type]]]);
}

export class Props_Label extends Types_Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["ViewBox", "Formatter", "Value", "Position", "Offset", "Children", "Content", "Id"];
    }
}

export function Props_Label$reflection() {
    return Reflection_union_type("Fable.Recharts.Props.Label", [], Props_Label, () => [[["Item", Props_ViewBox$reflection()]], [["Item", Reflection_lambda_type(Reflection_obj_type, Reflection_obj_type)]], [["Item", Reflection_obj_type]], [["Item", Reflection_string_type]], [["Item", Reflection_float64_type]], [["Item", Reflection_obj_type]], [["Item", Reflection_obj_type]], [["Item", Reflection_string_type]]]);
}

export class Props_LabelList extends Types_Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["DataKey", "ValueAccessor", "Content", "Position", "Offset", "Formatter", "Data", "ClockWise", "Id"];
    }
}

export function Props_LabelList$reflection() {
    return Reflection_union_type("Fable.Recharts.Props.LabelList", [], Props_LabelList, () => [[["Item", Reflection_obj_type]], [["Item", Reflection_obj_type]], [["Item", Reflection_obj_type]], [["Item", Reflection_string_type]], [["Item", Reflection_float64_type]], [["Item", Reflection_lambda_type(Reflection_obj_type, Reflection_obj_type)]], [["Item", Reflection_float64_type]], [["Item", Reflection_string_type]], [["Item", Reflection_string_type]]]);
}

export class Props_Cartesian extends Types_Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["Type", "Data", "DataKey", "LegendType", "Label", "Stroke", "StrokeWidth", "Layout", "BaseLine", "Unit", "Name", "Id", "StackId", "IsAnimationActive", "AnimationBegin", "AnimationDuration", "AnimationEasing", "Dot", "ActiveDot", "Points", "ConnectNulls", "BarSize", "MaxBarSize", "MinPointSize", "Background", "Shape", "Line", "LineType", "Hide", "Width", "Height", "XAxisId", "YAxisId", "ZAxisId", "Range", "AxisLine", "Orientation", "AllowDecimals", "AllowDataOverflow", "AllowDuplicatedCategory", "MinTickGap", "TickCount", "TickSize", "TickLine", "TickMargin", "TickFormatter", "Ticks", "Tick", "Domain", "Interval", "Padding", "Mirror", "Reversed", "Scale", "X", "Y", "X1", "X2", "Y1", "Y2", "TravellerWidth", "StartIndex", "EndIndex", "ViewBox", "Horizontal", "Vertical", "HorizontalPoints", "VerticalPoints", "XAxis", "YAxis", "AlwaysShow", "IsFront", "Direction", "OnChange", "OnClick", "OnMouseDown", "OnMouseUp", "OnMouseOver", "OnMouseOut", "OnMouseEnter", "OnMouseMove", "OnMouseLeave"];
    }
}

export function Props_Cartesian$reflection() {
    return Reflection_union_type("Fable.Recharts.Props.Cartesian", [], Props_Cartesian, () => [[["Item", Reflection_obj_type]], [["Item", Reflection_class_type("System.Array")]], [["Item", Reflection_obj_type]], [["Item", Reflection_string_type]], [["Item", Reflection_obj_type]], [["Item", Reflection_string_type]], [["Item", Reflection_string_type]], [["Item", Reflection_string_type]], [["Item", Reflection_obj_type]], [["Item", Reflection_string_type]], [["Item", Reflection_string_type]], [["Item", Reflection_string_type]], [["Item", Reflection_obj_type]], [["Item", Reflection_bool_type]], [["Item", Reflection_float64_type]], [["Item", Reflection_float64_type]], [["Item", Reflection_string_type]], [["Item", Reflection_obj_type]], [["Item", Reflection_obj_type]], [["Item", Reflection_class_type("System.Array")]], [["Item", Reflection_bool_type]], [["Item", Reflection_float64_type]], [["Item", Reflection_float64_type]], [["Item", Reflection_float64_type]], [["Item", Reflection_obj_type]], [["Item", Reflection_obj_type]], [["Item", Reflection_obj_type]], [["Item", Reflection_string_type]], [["Item", Reflection_bool_type]], [["Item", Reflection_float64_type]], [["Item", Reflection_float64_type]], [["Item", Reflection_obj_type]], [["Item", Reflection_obj_type]], [["Item", Reflection_obj_type]], [["Item", Reflection_class_type("System.Array")]], [["Item", Reflection_obj_type]], [["Item", Reflection_string_type]], [["Item", Reflection_bool_type]], [["Item", Reflection_bool_type]], [["Item", Reflection_bool_type]], [["Item", Reflection_float64_type]], [["Item", Reflection_float64_type]], [["Item", Reflection_float64_type]], [["Item", Reflection_obj_type]], [["Item", Reflection_float64_type]], [["Item", Reflection_obj_type]], [["Item", Reflection_class_type("System.Array")]], [["Item", Reflection_obj_type]], [["Item", Reflection_class_type("System.Array")]], [["Item", Reflection_obj_type]], [["Item", Reflection_obj_type]], [["Item", Reflection_bool_type]], [["Item", Reflection_bool_type]], [["Item", Reflection_string_type]], [["Item", Reflection_float64_type]], [["Item", Reflection_float64_type]], [["Item", Reflection_obj_type]], [["Item", Reflection_obj_type]], [["Item", Reflection_obj_type]], [["Item", Reflection_obj_type]], [["Item", Reflection_float64_type]], [["Item", Reflection_float64_type]], [["Item", Reflection_float64_type]], [["Item", Props_ViewBox$reflection()]], [["Item", Reflection_bool_type]], [["Item", Reflection_bool_type]], [["Item", Reflection_class_type("System.Array")]], [["Item", Reflection_class_type("System.Array")]], [["Item", Reflection_obj_type]], [["Item", Reflection_obj_type]], [["Item", Reflection_bool_type]], [["Item", Reflection_bool_type]], [["Item", Reflection_string_type]], [["Item", Reflection_lambda_type(Reflection_unit_type, Reflection_unit_type)]], [["Item", Reflection_lambda_type(Reflection_obj_type, Reflection_lambda_type(Reflection_int32_type, Reflection_lambda_type(Reflection_class_type("Browser.Types.MouseEvent"), Reflection_unit_type)))]], [["Item", Reflection_lambda_type(Reflection_obj_type, Reflection_lambda_type(Reflection_int32_type, Reflection_lambda_type(Reflection_class_type("Browser.Types.MouseEvent"), Reflection_unit_type)))]], [["Item", Reflection_lambda_type(Reflection_obj_type, Reflection_lambda_type(Reflection_int32_type, Reflection_lambda_type(Reflection_class_type("Browser.Types.MouseEvent"), Reflection_unit_type)))]], [["Item", Reflection_lambda_type(Reflection_obj_type, Reflection_lambda_type(Reflection_int32_type, Reflection_lambda_type(Reflection_class_type("Browser.Types.MouseEvent"), Reflection_unit_type)))]], [["Item", Reflection_lambda_type(Reflection_obj_type, Reflection_lambda_type(Reflection_int32_type, Reflection_lambda_type(Reflection_class_type("Browser.Types.MouseEvent"), Reflection_unit_type)))]], [["Item", Reflection_lambda_type(Reflection_obj_type, Reflection_lambda_type(Reflection_int32_type, Reflection_lambda_type(Reflection_class_type("Browser.Types.MouseEvent"), Reflection_unit_type)))]], [["Item", Reflection_lambda_type(Reflection_obj_type, Reflection_lambda_type(Reflection_int32_type, Reflection_lambda_type(Reflection_class_type("Browser.Types.MouseEvent"), Reflection_unit_type)))]], [["Item", Reflection_lambda_type(Reflection_obj_type, Reflection_lambda_type(Reflection_int32_type, Reflection_lambda_type(Reflection_class_type("Browser.Types.MouseEvent"), Reflection_unit_type)))]]]);
}

export class Props_Polar extends Types_Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["Cx", "Cy", "InnerRadius", "OuterRadius", "StartAngle", "EndAngle", "MinAngle", "PaddingAngle", "NameKey", "ActiveIndex", "ActiveShape", "PolarAngles", "PolarRadius", "GridType", "Angle", "Type", "Data", "DataKey", "LegendType", "Label", "LabelLine", "IsAnimationActive", "AnimationBegin", "AnimationDuration", "AnimationEasing", "Dot", "Points", "Background", "Shape", "AxisLine", "Orientation", "AllowDuplicatedCategory", "TickCount", "TickLine", "TickFormatter", "Ticks", "Tick", "Domain", "Scale", "OnClick", "OnMouseDown", "OnMouseUp", "OnMouseOver", "OnMouseOut", "OnMouseEnter", "OnMouseMove", "OnMouseLeave"];
    }
}

export function Props_Polar$reflection() {
    return Reflection_union_type("Fable.Recharts.Props.Polar", [], Props_Polar, () => [[["Item", Reflection_obj_type]], [["Item", Reflection_obj_type]], [["Item", Reflection_obj_type]], [["Item", Reflection_obj_type]], [["Item", Reflection_float64_type]], [["Item", Reflection_float64_type]], [["Item", Reflection_float64_type]], [["Item", Reflection_float64_type]], [["Item", Reflection_string_type]], [["Item", Reflection_array_type(Reflection_int32_type)]], [["Item", Reflection_obj_type]], [["Item", Reflection_class_type("System.Array")]], [["Item", Reflection_class_type("System.Array")]], [["Item", Reflection_string_type]], [["Item", Reflection_float64_type]], [["Item", Reflection_obj_type]], [["Item", Reflection_class_type("System.Array")]], [["Item", Reflection_obj_type]], [["Item", Reflection_string_type]], [["Item", Reflection_obj_type]], [["Item", Reflection_obj_type]], [["Item", Reflection_bool_type]], [["Item", Reflection_float64_type]], [["Item", Reflection_float64_type]], [["Item", Reflection_string_type]], [["Item", Reflection_obj_type]], [["Item", Reflection_class_type("System.Array")]], [["Item", Reflection_obj_type]], [["Item", Reflection_obj_type]], [["Item", Reflection_obj_type]], [["Item", Reflection_string_type]], [["Item", Reflection_bool_type]], [["Item", Reflection_float64_type]], [["Item", Reflection_obj_type]], [["Item", Reflection_obj_type]], [["Item", Reflection_class_type("System.Array")]], [["Item", Reflection_obj_type]], [["Item", Reflection_class_type("System.Array")]], [["Item", Reflection_string_type]], [["Item", Reflection_lambda_type(Reflection_obj_type, Reflection_lambda_type(Reflection_int32_type, Reflection_lambda_type(Reflection_class_type("Browser.Types.MouseEvent"), Reflection_unit_type)))]], [["Item", Reflection_lambda_type(Reflection_obj_type, Reflection_lambda_type(Reflection_int32_type, Reflection_lambda_type(Reflection_class_type("Browser.Types.MouseEvent"), Reflection_unit_type)))]], [["Item", Reflection_lambda_type(Reflection_obj_type, Reflection_lambda_type(Reflection_int32_type, Reflection_lambda_type(Reflection_class_type("Browser.Types.MouseEvent"), Reflection_unit_type)))]], [["Item", Reflection_lambda_type(Reflection_obj_type, Reflection_lambda_type(Reflection_int32_type, Reflection_lambda_type(Reflection_class_type("Browser.Types.MouseEvent"), Reflection_unit_type)))]], [["Item", Reflection_lambda_type(Reflection_obj_type, Reflection_lambda_type(Reflection_int32_type, Reflection_lambda_type(Reflection_class_type("Browser.Types.MouseEvent"), Reflection_unit_type)))]], [["Item", Reflection_lambda_type(Reflection_obj_type, Reflection_lambda_type(Reflection_int32_type, Reflection_lambda_type(Reflection_class_type("Browser.Types.MouseEvent"), Reflection_unit_type)))]], [["Item", Reflection_lambda_type(Reflection_obj_type, Reflection_lambda_type(Reflection_int32_type, Reflection_lambda_type(Reflection_class_type("Browser.Types.MouseEvent"), Reflection_unit_type)))]], [["Item", Reflection_lambda_type(Reflection_obj_type, Reflection_lambda_type(Reflection_int32_type, Reflection_lambda_type(Reflection_class_type("Browser.Types.MouseEvent"), Reflection_unit_type)))]]]);
}

export class Props_Shape {
    constructor() {
    }
}

export function Props_Shape$reflection() {
    return Reflection_class_type("Fable.Recharts.Props.Shape", void 0, Props_Shape);
}

