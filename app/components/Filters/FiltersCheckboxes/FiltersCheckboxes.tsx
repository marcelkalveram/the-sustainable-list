import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import React from "react";

import { CriteriaNames, Field, Location } from "types";

import { FiltersCheckbox } from "./FiltersCheckbox/FiltersCheckbox";
import { createFilterQueryParams } from "./helpers/createFilterQueryParams";
import { mapCountriesToCheckbox } from "./helpers/mapCountriesToCheckbox";
import { mapFiltersToCheckbox } from "./helpers/mapFiltersToCheckbox";

type CategoryProps = {
  name: CriteriaNames.category;
  filters: string[];
};

type LocationProps = {
  name: CriteriaNames.location;
  filters: Location[];
};

type GenericProps = {
  name:
    | CriteriaNames.type
    | CriteriaNames.style
    | CriteriaNames.sustainabilityType
    | CriteriaNames.certificates;
  filters: Field[];
};

type Props = CategoryProps | LocationProps | GenericProps;

export const FiltersCheckboxes = ({ name, filters }: Props) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const selected = searchParams?.get(name)?.split(",") || [];

  const toggleFilterFn = (slug: string) => {
    const params = createFilterQueryParams(searchParams, slug, name);
    router.push(`${pathname}?${params}`);
  };

  if (name === "category") {
    return filters.map((label) => (
      <FiltersCheckbox
        key={label}
        checked={selected.includes(label)}
        label={label}
        toggleFilter={() => toggleFilterFn(label)}
      />
    ));
  }

  if (name === "location") {
    return mapCountriesToCheckbox(filters).map(({ slug, label }) => (
      <FiltersCheckbox
        key={slug}
        checked={selected.includes(slug)}
        label={label}
        toggleFilter={() => toggleFilterFn(slug)}
      />
    ));
  }

  return mapFiltersToCheckbox(filters).map(({ slug, label }) => (
    <FiltersCheckbox
      key={slug}
      checked={selected.includes(slug)}
      label={label}
      toggleFilter={() => toggleFilterFn(slug)}
    />
  ));
};
