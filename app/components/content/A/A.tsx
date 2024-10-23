import Link from "next/link";
import React from "react";

import styles from "./styles.module.css";

export const A = ({ href = "", children = "" }) => {
  return (
    <Link
      className={styles.a}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </Link>
  );
};
