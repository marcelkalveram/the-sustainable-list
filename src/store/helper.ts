import criteriaMap from "../../public/shared/criteriaMap";
import type { Criteria, CriteriaMapFlattened } from "types";

const reducerFunction = (acc: Object, cur: Criteria): Object => ({
  [cur.name]: [],
  ...acc,
});
export const initSelected = (): CriteriaMapFlattened =>
  criteriaMap.data.reduce(reducerFunction, {}) as CriteriaMapFlattened;
