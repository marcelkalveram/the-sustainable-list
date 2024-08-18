import { createDraftSafeSelector, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import type { Brand, CriteriaNames, SortBy, State } from "types";
import data from "../../public/data/index.json";
import { initSelected } from "./initSelected";
import { filterBrands } from "helpers/filter";
import { sortByAz, sortByPrice } from "helpers/sort";

const initialState: State = {
  brands: data.brands,
  brandsCount: data.brands.length,
  filters: data.filters,
  selected: initSelected(),
  showFilters: false,
  sortBy: { az: null, price: null },
  searchFor: "",
};

export const createTypedDraftSafeSelector =
  createDraftSafeSelector.withTypes<State>();

export const brandsFilteredSelector = createTypedDraftSafeSelector(
  (state) => ({
    brands: state.brands,
    selected: state.selected,
    sortBy: state.sortBy,
    searchFor: state.searchFor,
  }),
  (state) => {
    // filter
    let brandsFiltered: Brand[] = state.brands.filter((brand: Brand) =>
      filterBrands(brand, state.selected),
    ) as unknown as Brand[];

    // search for filter
    if (state.searchFor !== "") {
      brandsFiltered = brandsFiltered.filter((brand: Brand) =>
        brand.fields.title
          .toLowerCase()
          .includes(state.searchFor.toLowerCase()),
      );
    }

    // sort by price
    if (state.sortBy.price !== null) {
      brandsFiltered.sort((a: Brand, b: Brand) =>
        sortByPrice(state.sortBy.price, a, b),
      );
    }

    // sort by az
    if (state.sortBy.az !== null) {
      brandsFiltered.sort((a: Brand, b: Brand) =>
        sortByAz(state.sortBy.az, a, b),
      );
    }

    return brandsFiltered;
  },
);

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setSelected: (
      state,
      { payload }: PayloadAction<{ value: string; type: CriteriaNames }>,
    ) => {
      if (state.selected[payload.type].includes(payload.value)) {
        state.selected[payload.type] = state.selected[payload.type].filter(
          (item) => item !== payload.value,
        );
      } else {
        state.selected[payload.type].push(payload.value);
      }
    },
    clearSelected: (state) => {
      state.selected = initSelected();
    },
    setShowFilters: (state, action: PayloadAction<boolean>) => {
      state.showFilters = action.payload;
    },
    setSearchFor: (state, action: PayloadAction<string>) => {
      state.searchFor = action.payload;
    },
    setSortBy: (state, action: PayloadAction<SortBy>) => {
      state.sortBy = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setSelected,
  clearSelected,
  setShowFilters,
  setSearchFor,
  setSortBy,
} = appSlice.actions;

export default appSlice.reducer;
