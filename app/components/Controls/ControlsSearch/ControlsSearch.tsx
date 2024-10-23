import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import debounce from "debounce";
import React from "react";

import styles from "./styles.module.css";

type Props = {
  onChange: (value: string) => void;
};

export const ControlsSearch = ({ onChange }: Props) => (
  <div className={styles.controlsSearch}>
    <div className={styles.controlsSearchContainer}>
      <MagnifyingGlassIcon
        className={styles.controlsSearchIcon}
        width={16}
        height={16}
      />
      <input
        className={styles.controlsSearchInput}
        onChange={debounce((e) => onChange(e.target.value), 300)}
        //   value={searchFor}
        placeholder="Search by name..."
      />
    </div>
  </div>
);
