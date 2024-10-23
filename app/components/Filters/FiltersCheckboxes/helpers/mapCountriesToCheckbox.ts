import { Location } from "types";

type FilterItem = {
  slug: string;
  label: string;
};

const getLocation = (val: Location): string => val?.fields?.country || "";

export const mapCountriesToCheckbox = (filters: Location[]): FilterItem[] => {
  const countriesSet = new Set<string>();

  const countries = filters.reduce((unique: FilterItem[], item: Location) => {
    const country = getLocation(item);
    if (countriesSet.has(country)) {
      return unique;
    }

    countriesSet.add(country);
    return unique.concat({ slug: country, label: country });
  }, []);

  return countries.sort((a: FilterItem, b: FilterItem) => {
    if (a.slug < b.slug) {
      return -1;
    }
    if (a.slug > b.slug) {
      return 1;
    }
    return 0;
  });
};
