import { createDraftSafeSelector, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import type { CriteriaNames, SortBy, State } from "types";
import data from "../../public/data/index.json";
import { initSelected } from "./initSelected";

const initialState: State = {
  brands: data.brands,
  brandsCount: data.brands.length,
  filters: data.filters,
  selected: initSelected(),
  showFilters: false,
  sortBy: { az: null, price: null },
  searchFor: "",
};

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
