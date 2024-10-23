import React from "react";

import styles from "./styles.module.css";

type Props = {
  children: React.ReactNode;
  style?: React.CSSProperties;
};

export const Container = ({ children, ...rest }: Props) => (
  <div className={styles.container} {...rest}>
    {children}
  </div>
);
