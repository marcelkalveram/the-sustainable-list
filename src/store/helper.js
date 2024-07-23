import criteriaMap from "/public/shared/criteriaMap";

const reducerFunction = (acc, cur) => ({ [cur.name]: [], ...acc });
export const initSelected = () => criteriaMap.data.reduce(reducerFunction, {});
