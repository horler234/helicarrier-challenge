/** Crush is the object type of a celebrity crush */

import { countries } from "@constants/countries";

export type Crush = {
  name: string;
  country: typeof countries[number];
  dateAdded: string;
};
