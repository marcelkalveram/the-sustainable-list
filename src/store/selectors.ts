import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "./store";

import type { Brand, CriteriaMapFlattened } from "types";
import criteriaMap from "../../public/shared/criteriaMap";

export const sortByPrice = (price: string, a: Brand, b: Brand): number => {
  const priceA = a.fields.price || 0;
  const priceB = b.fields.price || 0;
  if (priceA < priceB) {
    return price === "asc" ? 1 : -1;
  }
  if (priceA >= priceB) {
    return price === "asc" ? -1 : 1;
  }
  return 0;
};

export const sortByAz = (az: string, a: Brand, b: Brand): number => {
  const titleA = a.fields.title || 0;
  const titleB = b.fields.title || 0;
  if (titleA < titleB) {
    return az === "asc" ? 1 : -1;
  }
  if (titleA >= titleB) {
    return az === "asc" ? -1 : 1;
  }
  return 0;
};

const isLocationMatch = (brand, criteria, selected) =>
  brand.fields[criteria.contentfulField].fields &&
  selected[criteria.name].includes(
    brand.fields[criteria.contentfulField].fields.country,
  );

const filterBrands = (
  brand: Brand,
  selected: CriteriaMapFlattened,
): boolean => {
  const matches = [];

  criteriaMap.data.forEach((criteria, index) => {
    // if nothing from criteria selected, matches
    matches[index] = selected[criteria.name].length === 0;

    // if brand doesn't contain criteria field, skip
    if (!brand.fields[criteria.contentfulField]) {
      return;
    }

    if (criteria.name === "location") {
      if (isLocationMatch(brand, criteria, selected)) {
        matches[index] = true;
      }
    }

    if (criteria.name !== "location") {
      brand.fields[criteria.contentfulField].forEach((field) => {
        if (typeof field === "string") {
          if (selected[criteria.name].includes(field)) {
            matches[index] = true;
          }
        } else if (
          field.fields &&
          selected[criteria.name].includes(field.fields.slug)
        ) {
          matches[index] = true;
        }
      });
    }
  });
  return matches.every((match) => match);
};

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
