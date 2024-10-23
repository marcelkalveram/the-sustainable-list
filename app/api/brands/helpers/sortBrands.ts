import { Brand, DirectionValues, SortType, SortValues } from "types";

const sortByPrice =
  (direction: DirectionValues) =>
  (a: Brand, b: Brand): number => {
    const priceA = a?.fields?.price || 0;
    const priceB = b?.fields?.price || 0;
    if (priceA < priceB) {
      return direction === DirectionValues.ASC ? -1 : 1;
    }
    if (priceA >= priceB) {
      return direction === DirectionValues.ASC ? 1 : -1;
    }
    return 0;
  };

const sortByAz =
  (direction: DirectionValues) =>
  (a: Brand, b: Brand): number => {
    const titleA = a?.fields?.title || 0;
    const titleB = b?.fields?.title || 0;
    if (titleA < titleB) {
      return direction === DirectionValues.ASC ? -1 : 1;
    }
    if (titleA >= titleB) {
      return direction === DirectionValues.ASC ? 1 : -1;
    }
    return 0;
  };

export const sortBrands = (sortParams: URLSearchParams) => {
  const sort = sortParams.get(SortType.SORT);
  const direction = sortParams.get(SortType.DIRECTION) as DirectionValues;

  if (sort === SortValues.PRICE) {
    return sortByPrice(direction);
  }

  if (sort === SortValues.ALPHABETICAL) {
    return sortByAz(direction);
  }
};
