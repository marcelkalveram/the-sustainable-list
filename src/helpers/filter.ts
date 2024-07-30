import type { Brand, CriteriaMapFlattened } from "types";
import criteriaMap from "../../public/shared/criteriaMap";

const isLocationMatch = (brand, criteria, selected) =>
  brand.fields[criteria.contentfulField].fields &&
  selected[criteria.name].includes(
    brand.fields[criteria.contentfulField].fields.country,
  );

export const filterBrands = (
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

    // if criteria matches location
    if (criteria.name === "location") {
      if (isLocationMatch(brand, criteria, selected)) {
        matches[index] = true;
      }
    }

    // if criteria doesn't match location
    if (criteria.name !== "location") {
      brand.fields[criteria.contentfulField].forEach((field) => {
        // if criteria is a string
        if (typeof field === "string") {
          if (selected[criteria.name].includes(field)) {
            matches[index] = true;
          }
          // if criteria is not a string
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
