import { Field } from "types";

type FilterItem = {
  slug: string;
  label: string;
};

export const mapFiltersToCheckbox = (filters: Field[]): FilterItem[] => {
  const checkboxes = filters.slice();

  return checkboxes
    .map((item: Field) => ({
      slug: item.fields?.slug || "",
      label: item.fields?.title || "",
    }))
    .sort((a, b) => {
      if (a.label < b.label) {
        return -1;
      }
      if (a.label > b.label) {
        return 1;
      }
      return 0;
    });
};
