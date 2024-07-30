import React, { type ReactElement } from "react";
import { Pane, Link, UnorderedList, ListItem, majorScale } from "evergreen-ui";
import { className, styles } from "./styles";
import { MobileMenuIcon } from "./MobileMenuIcon/MobileMenuIcon";
import { useRouter } from "next/router";

interface HeaderMenuProps {
  showFilters: boolean;
  showMobileMenu: boolean;
  setShowMobileMenu: Function;
}

export const HeaderMenu = ({
  showFilters,
  showMobileMenu,
  setShowMobileMenu,
}: HeaderMenuProps): ReactElement => {
  const router = useRouter();
  return (
    <>
      <Pane
        className={`header__menu ${className} ${
          showMobileMenu ? "header__menu--isVisible" : ""
        }`}
      >
        <UnorderedList
          className="header__menu__ul ul"
          display="flex"
          alignItems="center"
          marginRight={majorScale(2)}
        >
          <ListItem className="header__menu__li">
            <Link
              href="/"
              style={{ opacity: router.pathname === "/" ? 0.75 : 1 }}
            >
              Home
            </Link>
          </ListItem>
          <ListItem className="header__menu__li">
            <Link
              href="https://form.typeform.com/to/PnaHPh"
              style={{ opacity: router.pathname === "/add-a-brand" ? 0.75 : 1 }}
            >
              Add a brand
            </Link>
          </ListItem>
          <ListItem className="header__menu__li">
            <Link
              href="/about"
              style={{ opacity: router.pathname === "/about" ? 0.75 : 1 }}
            >
              About
            </Link>
          </ListItem>
          <ListItem className="header__menu__li">
            <Link
              href="/contact"
              style={{ opacity: router.pathname === "/contact" ? 0.75 : 1 }}
            >
              Contact Us
            </Link>
          </ListItem>
        </UnorderedList>
      </Pane>
      {!showFilters && (
        <MobileMenuIcon
          showCloseButton={showMobileMenu}
          onToggle={() => setShowMobileMenu(!showMobileMenu)}
        />
      )}
      {styles}
    </>
  );
};