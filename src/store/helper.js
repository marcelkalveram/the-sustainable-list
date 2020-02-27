import { criteriaMap } from '../config/criteriaMap';

const reducerFunction = (acc, cur) => ({ [cur.name]: [], ...acc });
export const initSelected = () => criteriaMap.reduce(reducerFunction, {});