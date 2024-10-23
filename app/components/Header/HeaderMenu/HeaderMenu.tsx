"use client";

import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/solid";
import React, { useState } from "react";

import { MobileMenuButton } from "components/MobileMenuButton/MobileMenuButton";

import { menuItems } from "./constants/menuItems";
import { HeaderMenuItem } from "./HeaderMenuItem/HeaderMenuItem";
import styles from "./styles.module.css";

export const HeaderMenu = () => {
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
    document.body.classList.toggle("lock-viewport");
  };

  return (
    <>
      <div
        className={`${styles.headerMenu} ${showMobileMenu ? styles.headerMenuIsVisible : ""}`}
      >
        <ul className={styles.headerMenuList}>
          {menuItems.map((item) => (
            <HeaderMenuItem
              key={item.label}
              href={item.href}
              label={item.label}
            />
          ))}
        </ul>
      </div>

      <MobileMenuButton
        Icon={showMobileMenu ? XMarkIcon : Bars3Icon}
        onClick={toggleMobileMenu}
      />
    </>
  );
};
