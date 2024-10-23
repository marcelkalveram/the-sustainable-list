import React, { type MouseEventHandler } from "react";

import styles from "./styles.module.css";

type MobileMenuButtonProps = {
  Icon: React.ElementType;
  onClick: MouseEventHandler;
  elevated?: boolean;
};

export const MobileMenuButton = ({
  Icon,
  onClick,
  elevated = false,
}: MobileMenuButtonProps) => (
  <div
    className={`${styles.mobileMenuButton} ${elevated ? styles.mobileMenuButtonElevated : ""}`}
  >
    <button className={styles.mobileMenuButtonBtn} onClick={onClick}>
      <Icon width={24} height={24} className={styles.mobileMenuButtonSvg} />
    </button>
  </div>
);
