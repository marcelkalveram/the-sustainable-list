import { CriteriaNames } from "constants/enums";

import criteriaMap from "/public/shared/criteriaMap";

export const sanitizeFilterParams = (searchParams: URLSearchParams) => {
  const validCriteria = criteriaMap.data.map((criteria) => criteria.name);
  const searchParamsSanitized = new URLSearchParams();

  for (const key of searchParams.keys()) {
    if (validCriteria.includes(key as CriteriaNames)) {
      const k = searchParams.get(key);
      if (k) {
        searchParamsSanitized.set(key, k);
      }
    }
  }

  return searchParamsSanitized;
};
