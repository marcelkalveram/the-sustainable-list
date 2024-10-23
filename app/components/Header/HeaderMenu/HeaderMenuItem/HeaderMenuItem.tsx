"use client";

import { usePathname } from "next/navigation";
import React from "react";

import styles from "./styles.module.css";

type Props = {
  href: string;
  label: string;
};

export const HeaderMenuItem = ({ href, label }: Props) => {
  const pathname = usePathname();
  const isSelected = pathname === href;
  return (
    <li className={styles.headerMenuItem}>
      <a
        className={`${styles.headerMenuItemLink} ${isSelected ? styles.headerMenuItemLinkSelected : ""}`}
        href={href}
      >
        {label}
      </a>
    </li>
  );
};
