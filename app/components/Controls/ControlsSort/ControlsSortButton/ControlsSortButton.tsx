import React from "react";

import styles from "./styles.module.css";

import type { MouseEventHandler, ReactElement, ReactNode } from "react";


interface Props {
  onToggle: MouseEventHandler;
  children: ReactNode;
}

export const ControlsSortButton = ({
  onToggle,
  children,
}: Props): ReactElement => (
  <button className={styles.controlsSortButton} onClick={onToggle}>
    {children}
  </button>
);
