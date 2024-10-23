import React from "react";
import { ReactNode } from "react";

import styles from "./styles.module.css";


export const Main = ({ children }: { children: ReactNode }) => (
  <div className={styles.main}>{children}</div>
);
