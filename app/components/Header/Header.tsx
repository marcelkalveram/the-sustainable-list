import React from "react";


import { HeaderLogo } from "./HeaderLogo/HeaderLogo";
import { HeaderMenu } from "./HeaderMenu/HeaderMenu";
import styles from "./styles.module.css";

export const Header = () => (
  <div className={styles.header}>
    <HeaderLogo />
    <HeaderMenu />
  </div>
);
