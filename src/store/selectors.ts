import { createSelector } from "@reduxjs/toolkit";
import { filterBrands } from "helpers/filter";
import { sortByAz, sortByPrice } from "helpers/sort";
import type { Brand } from "types";
import type { RootState } from "./store";

const brandsSelectedSelector = createSelector(
  [(state: RootState) => state.brands, (state: RootState) => state.selected],
  (brands, selected) =>
    brands.filter((brand: Brand) => filterBrands(brand, selected)),
);

export const brandsSelectedAndSearchedSelector = createSelector(
  [brandsSelectedSelector, (state: RootState) => state.searchFor],
  (brands, searchFor) => {
    if (searchFor !== "") {
      brands = brands.filter((brand: Brand) =>
        brand.fields.title.toLowerCase().includes(searchFor.toLowerCase()),
      );
    }
    return brands;
  },
);

export const brandsSortedSelector = createSelector(
  [
    brandsSelectedAndSearchedSelector,
    (state: RootState) => state.sortBy.price,
    (state: RootState) => state.sortBy.az,
  ],
  (brands, price, az) => {
    // sort by price
    if (price !== null) {
      brands = brands
        .slice()
        .sort((a: Brand, b: Brand) => sortByPrice(price, a, b));
    }

    // sort by az
    if (az !== null) {
      brands = brands.slice().sort((a: Brand, b: Brand) => sortByAz(az, a, b));
    }

    return brands;
  },
);
