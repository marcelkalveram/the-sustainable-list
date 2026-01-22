import { CriteriaNames } from "constants/enums";
import { Brand } from "types";
import criteriaMap from "/public/shared/criteriaMap";

export const filterBrand =
  (searchParams: URLSearchParams) => (brand: Brand) => {
    const matches: boolean[] = [];

    criteriaMap.data.forEach((criteria, index) => {
      const params = searchParams.get(criteria.name)?.split(",") || [];

      // if nothing from criteria selected, matches
      matches[index] = params.length === 0;

      // country
      if (criteria.name === CriteriaNames.location) {
        const country = brand?.fields?.location?.fields?.country;
        if (country && params.includes(country)) {
          matches[index] = true;
        }
      }

      // category
      if (criteria.name === CriteriaNames.category) {
        brand?.fields?.category?.forEach((category) => {
          if (typeof category === "string" && params.includes(category)) {
            matches[index] = true;
          }
        });
      }

      // extract contentfulField from brand
      const cfField = brand?.fields?.[criteria.name] || null;

      // if brand doesn't contain criteria field, skip
      if (!cfField || !Array.isArray(cfField)) {
        return;
      }

      if (criteria.name !== CriteriaNames.location) {
        cfField.forEach((field) => {
          if (
            typeof field !== "string" &&
            field.fields &&
            params.includes(field.fields.slug)
          ) {
            matches[index] = true;
          }
        });
      }
    });

    return matches.every((match) => match);
  };
