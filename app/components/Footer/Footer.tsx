import React from "react";

import { FooterLink } from "./FooterLink/FooterLink";
import styles from "./styles.module.css";

export const Footer = () => (
  <>
    <div className={styles.footer}>
      <div className={styles.footerMenu}>
        <ul className={`${styles.footerMenuUl} ${styles.footerMenuCopyright}`}>
          <FooterLink label="© Copyright 2022 The Sustainable List" />
        </ul>
        <ul className={styles.footerMenuUl}>
          <FooterLink href="/terms" label="Terms & Conditions" />
          <FooterLink href="/privacy" label="Privacy policy" />
        </ul>
      </div>
    </div>
  </>
);
