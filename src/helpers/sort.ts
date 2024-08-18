import { Brand } from "types";

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
