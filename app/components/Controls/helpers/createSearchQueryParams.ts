import type { ReadonlyURLSearchParams } from "next/navigation";

export const createSearchQueryParams = (
  searchParams: ReadonlyURLSearchParams | null,
  searchTerm: string,
): string => {
  if (!searchParams) {
    return "";
  }

  const params = new URLSearchParams(searchParams.toString());

  if (searchTerm) {
    params.set("search", searchTerm);
  } else {
    params.delete("search");
  }

  return params.toString();
};
