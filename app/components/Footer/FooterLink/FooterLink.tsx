"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

import styles from "./styles.module.css";

type Props = {
  href?: string;
  label: string;
};

export const FooterLink = ({ href, label }: Props) => {
  const pathname = usePathname();
  const isSelected = pathname === href;
  return (
    <li className={styles.footerLink}>
      {" "}
      {href ? (
        <Link
          href={href}
          className={`${styles.footerLinkA} ${isSelected ? styles.footerLinkSelected : ""}`}
        >
          {label}
        </Link>
      ) : (
        label
      )}
    </li>
  );
};
