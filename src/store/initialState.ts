import data from "../../public/data/index.json";
import { initSelected } from "./helper";
import type { State } from "types";

export const initialState: State = {
  brands: data.brands,
  brandsCount: data.brands.length,
  filters: data.filters,
  selected: initSelected(),
  showFilters: false,
  sortBy: { az: null, price: null },
  searchFor: "",
};
