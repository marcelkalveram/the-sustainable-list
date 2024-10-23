import React from "react";

import styles from "./styles.module.css";

export const ControlsBrandsCount = ({ count = 0, totalCount = 0 }) => (
  <p className={styles.controlsBrandsCount}>
    Showing <b>{count}</b> out of {totalCount} sustainable brands
  </p>
);
