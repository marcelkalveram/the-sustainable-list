import React from "react";

import styles from "./styles.module.css";

type Props = {
  price?: number;
};

export const BrandDetailsPrice = ({ price }: Props) => {
  const priceOrOne = price || 1;
  return (
    <>
      <span className={styles.brandDetailsPriceActive}>$</span>
      <span
        className={
          priceOrOne > 1
            ? styles.brandDetailsPriceActive
            : styles.brandDetailsPrice
        }
      >
        $
      </span>
      <span
        className={
          priceOrOne > 2
            ? styles.brandDetailsPriceActive
            : styles.brandDetailsPrice
        }
      >
        $
      </span>
    </>
  );
};
