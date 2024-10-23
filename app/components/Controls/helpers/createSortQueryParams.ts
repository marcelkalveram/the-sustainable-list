import { DirectionValues, SortType, type SortValues } from "types";

import type { ReadonlyURLSearchParams } from "next/navigation";

export const createSortQueryParams = (
  searchParams: ReadonlyURLSearchParams | null,
  sortType: SortValues,
): string => {
  if (!searchParams) {
    return "";
  }

  const params = new URLSearchParams(searchParams.toString());
  const paramsType = searchParams?.get(SortType.SORT);

  if (paramsType !== sortType) {
    params.set(SortType.SORT, sortType);
    params.set(SortType.DIRECTION, DirectionValues.DESC);
  } else {
    const paramsDirection = searchParams?.get(SortType.DIRECTION);
    params.set(
      SortType.DIRECTION,
      paramsDirection === DirectionValues.ASC
        ? DirectionValues.DESC
        : DirectionValues.ASC,
    );
  }

  return params.toString();
};
