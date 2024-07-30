interface Field {
  id: string;
  fields?: {
    title: string;
    slug: string;
  };
}

interface Location {
  id: string;
  fields?: {
    city?: string;
    country?: string;
  };
}

interface Image {
  id: string;
  fields: {
    title: string;
    file: {
      url: string;
      details: {
        size: number;
        image: {
          width: number;
          height: number;
        };
        fileName?: string;
        contentType?: string;
      };
    };
  };
}

interface Brand {
  id: string;
  fields: {
    title?: string;
    slug?: string;
    website?: string;
    logo?: Image;
    category?: string[];
    clothingTypes?: Field[];
    clothingStyles?: Field[];
    sustainabilityType?: Field[];
    certificates?: Field[];
    location?: Location;
    price: number;
    image?: Image;
  };
}

interface SortBy {
  az: string;
  price: string;
}

interface State {
  brands: Brand[];
  brandsCount: number;
  filters: CriteriaMapFlattened;
  selected: CriteriaMapFlattened;
  showFilters: boolean;
  sortBy: SortBy;
  searchFor: string;
}

interface Criteria {
  name: string;
  title: string;
  contentfulField: string;
}

interface CriteriaMap {
  data: Criteria[];
}

enum CriteriaNames {
  category = "category",
  type = "type",
  style = "style",
  sustainabilityType = "sustainabilityType",
  certificates = "certificates",
  location = "location",
}

type CriteriaMapFlattened = {
  [CriteriaNames.category]: string[];
  [CriteriaNames.type]: Field[];
  [CriteriaNames.style]: Field[];
  [CriteriaNames.sustainabilityType]: Field[];
  [CriteriaNames.certificates]: Field[];
  [CriteriaNames.location]: Location[];
};

export type {
  Field,
  Location,
  Image,
  Brand,
  SortBy,
  State,
  CriteriaNames,
  Criteria,
  CriteriaMap,
  CriteriaMapFlattened,
};
