import { createDraftSafeSelector } from "@reduxjs/toolkit";
import { filterBrands } from "helpers/filter";
import { sortByAz, sortByPrice } from "helpers/sort";
import type { Brand, State } from "types";

const createTypedDraftSafeSelector = createDraftSafeSelector.withTypes<State>();

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
