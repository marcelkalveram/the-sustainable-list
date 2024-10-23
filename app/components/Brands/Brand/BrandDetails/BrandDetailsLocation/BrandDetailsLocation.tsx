import React from "react";

import styles from "./styles.module.css";

type Props = {
  location?: string;
};

export const BrandDetailsLocation = ({ location }: Props) => {
  return (
    <span className={styles.brandDetailsLocation}>
      {location || "Unknown location"}
    </span>
  );
};
