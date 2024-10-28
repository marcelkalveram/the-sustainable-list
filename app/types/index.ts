import { CriteriaNames } from "constants/enums";

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

type ContactFormStateProps = {
  email?: "";
  name?: "";
  message?: "";
  errors?: {
    message?: string[] | undefined;
    email?: string[] | undefined;
    name?: string[] | undefined;
  };
  error?: string;
  success?: boolean;
};

export type {
  Field,
  Location,
  Image,
  Brand,
  BrandFilters,
  Criteria,
  CriteriaMap,
  ContactFormStateProps,
};
