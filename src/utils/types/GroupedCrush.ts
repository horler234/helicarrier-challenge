import { Crush } from "./Crush";
/** GroupedCrush is the object of an array of crushes grouped by date */

export type GroupedCrush = { group: string; children: Crush[] };
