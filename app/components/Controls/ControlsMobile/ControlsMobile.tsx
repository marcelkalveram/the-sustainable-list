import { AdjustmentsVerticalIcon } from "@heroicons/react/24/solid";
import React, { MouseEventHandler } from "react";

import styles from "./styles.module.css";

interface FilterMobile {
  onClick: MouseEventHandler;
}

export const ControlsMobile = ({ onClick }: FilterMobile) => {
  return (
    <div className={styles.controlsMobile}>
      <button className={styles.controlsButtonMobileButton} onClick={onClick}>
        <AdjustmentsVerticalIcon
          width={20}
          height={20}
          className={styles.controlsMobileButtonIcon}
        />
        <p className={styles.controlsMobileButtonLabel}>FILTER</p>
      </button>
    </div>
  );
};
