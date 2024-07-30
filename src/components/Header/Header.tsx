import React, { type ReactElement } from "react";
import { Pane, majorScale } from "evergreen-ui";
import { colors } from "theme/constants";

import { HeaderLogo } from "./HeaderLogo/HeaderLogo";
import { HeaderMenu } from "./HeaderMenu/HeaderMenu";

interface HeaderProps {
  showFilters: boolean;
  showMobileMenu: boolean;
  setShowMobileMenu: Function;
}

export const Header = ({
  showFilters,
  showMobileMenu,
  setShowMobileMenu,
}: HeaderProps): ReactElement => (
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
