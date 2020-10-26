import { empty as Map_empty } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Map.js";
import { comparePrimitives as Util_comparePrimitives } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Util.js";
import { ExtraCoders as Types_ExtraCoders } from "./Types.js";

export const empty = new Types_ExtraCoders("", Map_empty({
    Compare: Util_comparePrimitives,
}));

