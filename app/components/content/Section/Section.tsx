import React, { type ReactNode } from "react";

import styles from "./styles.module.css";

type Props = {
  children: ReactNode;
  noPadding?: boolean;
};

export const Section = ({ children, noPadding }: Props) => (
  <section
    className={`${styles.section} ${noPadding ? "" : styles.sectionPadding}`}
  >
    {children}
  </section>
);
