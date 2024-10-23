import type { ReadonlyURLSearchParams } from "next/navigation";

export const createFilterQueryParams = (
  searchParams: ReadonlyURLSearchParams | null,
  slug: string,
  name: string,
): string => {
  if (!searchParams) {
    return "";
  }

  const params = new URLSearchParams(searchParams.toString());
  let selected = searchParams?.get(name)?.split(",") || [];

  if (selected?.includes(slug)) {
    selected = selected.filter((item) => item !== slug);
  } else {
    selected = [...selected, slug];
  }

  if (selected.length) {
    params.set(name, selected.join(","));
  } else {
    params.delete(name);
  }

  return params.toString();
};
