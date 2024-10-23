import Link from "next/link";
import React from "react";


import { H3 } from "components/content/H3/H3";

import { BrandDetailsLocation } from "./BrandDetailsLocation/BrandDetailsLocation";
import { BrandDetailsPrice } from "./BrandDetailsPrice/BrandDetailsPrice";
import { BrandDetailsStyles } from "./BrandDetailsStyles/BrandDetailsStyles";
import styles from "./styles.module.css";

import type { Field, Location } from "types";

type Props = {
  title?: string;
  style?: Field[];
  location?: Location;
  price?: number;
  website?: string;
};

export const BrandDetails = ({
  title,
  style,
  location,
  price,
  website = "",
}: Props) => (
  <div className={styles.brandDetails}>
    <Link className={styles.brandDetailsLink} target="_blank" href={website}>
      <H3>{title}</H3>
    </Link>
    <div className={styles.brandDetailsMeta}>
      <BrandDetailsStyles brandStyles={style} />
      <p className={styles.brandDetailsPriceLocation}>
        <BrandDetailsPrice price={price} />
        <span className={styles.brandDetailPriceLocationMiddot}>·</span>
        <BrandDetailsLocation location={location?.fields?.country} />
      </p>
    </div>
  </div>
);
