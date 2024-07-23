import React from "react";
import { Pane, majorScale } from "evergreen-ui";
import { colors } from "../../config/constants";

import { HeaderLogo } from "./HeaderLogo/HeaderLogo";
import { HeaderMenu } from "./HeaderMenu/HeaderMenu";

export function Header({ showFilters, showMobileMenu, setShowMobileMenu }) {
  return (
    <Pane
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      borderBottom={`1px solid ${colors.primary}`}
      backgroundColor={colors.primarySoft}
      padding={majorScale(2)}
      position="relative"
    >
      <HeaderLogo />
      <HeaderMenu
        showFilters={showFilters}
        showMobileMenu={showMobileMenu}
        setShowMobileMenu={setShowMobileMenu}
      />
    </Pane>
  );
}
