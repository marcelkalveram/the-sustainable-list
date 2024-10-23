import React from "react";

import { Field } from "types";

import styles from "./styles.module.css";

type Props = {
  brandStyles?: Field[];
};

export const BrandDetailsStyles = ({ brandStyles }: Props) => (
  <div className={styles.brandDetailsStyles}>
    {brandStyles?.map((brandStyle) => {
      const color = brandStyle?.fields?.title.toLowerCase().trim() || "";
      return (
        <p
          key={brandStyle.id}
          className={`${styles.brandDetailsStylesBadge} ${styles[color]}`}
        >
          {color}
        </p>
      );
    })}
  </div>
);
