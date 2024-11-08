import React from "react";

import { FooterLink } from "./FooterLink/FooterLink";
import { getCurrentYear } from "./helpers/getCurrentYear";
import styles from "./styles.module.css";

export const Footer = () => (
  <>
    <div className={styles.footer}>
      <div className={styles.footerMenu}>
        <ul className={`${styles.footerMenuUl} ${styles.footerMenuCopyright}`}>
          <FooterLink
            label={`© Copyright ${getCurrentYear()} The Sustainable List`}
          />
        </ul>
        <ul className={styles.footerMenuUl}>
          <FooterLink href="/terms" label="Terms & Conditions" />
          <FooterLink href="/privacy" label="Privacy policy" />
        </ul>
      </div>
    </div>
  </>
);
