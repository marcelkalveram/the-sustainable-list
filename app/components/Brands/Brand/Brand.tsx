import React from "react";

import { BrandDetails } from "./BrandDetails/BrandDetails";
import { BrandImage } from "./BrandImage/BrandImage";
import { BrandLogo } from "./BrandLogo/BrandLogo";
import styles from "./styles.module.css";

import type { Brand as BrandType } from "types";

interface Props {
  brand: BrandType;
}

export const Brand = ({ brand }: Props) => {
  const { image, website, title, logo, style, location, price } = brand.fields;

  return (
    <div className={styles.brand}>
      <BrandImage image={image} website={website} title={title} />

      <div className={styles.brandContent}>
        <BrandLogo logo={logo} title={title} />
        <BrandDetails
          title={title}
          style={style}
          location={location}
          price={price}
          website={website}
        />
      </div>
    </div>
  );
};
