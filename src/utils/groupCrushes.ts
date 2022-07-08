import moment from "moment";
import { Crush } from "./types/Crush";
import { GroupedCrush } from "./types/GroupedCrush";

/** groupCrushes takes an array of crush objects and group them based on their date
 * @param {Crush[]} crush
 */

export const groupCrushes = (crushes: Crush[]): GroupedCrush[] => {
  let data = crushes.reduce((r, e) => {
    // get date of current element
    let group = moment(e.dateAdded).format("Do MMMM, YYYY");
    // if there is no property in accumulator with this letter create it
    if (!r[group]) r[group] = { group, children: [e] };
    // if there is push current element to children array for that letter
    else r[group].children.push(e);
    // return accumulator
    return r;
  }, {});

  // since data at this point is an object, to get array of values
  // we use Object.values method
  return Object.values(data);
};
