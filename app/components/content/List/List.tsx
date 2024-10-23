import React from "react";

import styles from "./styles.module.css";

type Props = {
  children: React.ReactNode;
};

export const List = ({ children }: Props) => (
  <ul className={styles.list}>{children}</ul>
);

export const ListItem = ({ children }: Props) => (
  <li className={styles.listItem}>{children}</li>
);
