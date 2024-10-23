interface Field {
  id: string;
  fields?: {
    title: string;
    slug: string;
  };
}

interface Location {
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

enum CriteriaNames {
  category = "category",
  type = "type",
  style = "style",
  sustainabilityType = "sustainabilityType",
  certificates = "certificates",
  location = "location",
}

type BrandFilters = {
  [CriteriaNames.category]?: string[];
  [CriteriaNames.certificates]?: Field[];
  [CriteriaNames.style]?: Field[];
  [CriteriaNames.type]?: Field[];
  [CriteriaNames.sustainabilityType]?: Field[];
  [CriteriaNames.location]?: Location;
};

interface Brand {
  id: string;
  fields: BrandFilters & {
    title?: string;
    slug?: string;
    website?: string;
    logo?: Image;
    price: number;
    image?: Image;
  };
}

interface Criteria {
  name: CriteriaNames;
  title: string;
}

interface CriteriaMap {
  data: Criteria[];
}

enum SortType {
  SORT = "sort",
  DIRECTION = "direction",
}

enum SortValues {
  ALPHABETICAL = "alphabetical",
  PRICE = "price",
}

enum DirectionValues {
  ASC = "asc",
  DESC = "desc",
}

export type {
  Field,
  Location,
  Image,
  Brand,
  BrandFilters,
  Criteria,
  CriteriaMap,
};

export { CriteriaNames, SortType, SortValues, DirectionValues };
