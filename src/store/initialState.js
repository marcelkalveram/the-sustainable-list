import data from "/public/data/index.json";
import { initSelected } from "./helper";

export const initialState = {
  brands: data.brands,
  brandsCount: data.brands.length,
  filters: data.filters,
  selected: initSelected(),
  showFilters: false,
  sortBy: { az: null, price: null },
  searchFor: "",
};
