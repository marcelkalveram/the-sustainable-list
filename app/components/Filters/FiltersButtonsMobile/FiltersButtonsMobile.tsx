import React from "react";

import styles from "./styles.module.css";

type Props = {
  toggleFilters: () => void;
  clearFilters: () => void;
};

export const FiltersButtonsMobile = ({
  toggleFilters,
  clearFilters,
}: Props) => (
  <div className={styles.filtersButtonsMobile}>
    <button
      className={`${styles.filtersButtonsMobileBtn} ${styles.filtersButtonsMobileBtnSecondary}`}
      onClick={clearFilters}
    >
      Clear filters
    </button>
    <button className={styles.filtersButtonsMobileBtn} onClick={toggleFilters}>
      Apply filters
    </button>
  </div>
);
