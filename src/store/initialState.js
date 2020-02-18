import data from '../data';
import { criteriaMap } from '../config/criteriaMap';

const reducerFunction = (acc, cur) => ({ [cur.name]: [], ...acc });

export const initialState = {
  brands: data.brands,
  brandsCount: data.brands.length,
  filters: data.filters,
  selected: criteriaMap.reduce(reducerFunction, {}),
  showFilters: false,
  showMobileMenu: false,
  sortBy: { az: null, price: null },
  searchFor: '',
};
