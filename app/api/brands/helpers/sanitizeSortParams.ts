import { SortType } from "types";

export const sanitizeSortParams = (searchParams: URLSearchParams) => {
  const sortParamsSanitized = new URLSearchParams();

  for (const key of searchParams.keys()) {
    if ([SortType.SORT, SortType.DIRECTION].includes(key as SortType)) {
      const k = searchParams.get(key);
      if (k) {
        sortParamsSanitized.set(key, k);
      }
    }
  }

  return sortParamsSanitized;
};
