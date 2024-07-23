import React from "react";
import { Pane, MenuIcon, CrossIcon, majorScale } from "evergreen-ui";
import { className, styles } from "./styles.js";

export const MobileMenuIcon = ({ showCloseButton, onToggle }) => {
  const Icon = showCloseButton ? CrossIcon : MenuIcon;
  return (
    <Pane
      className={`header__menu__mobile-menu-icon ${className}`}
      // position="relative"
      top={0}
      right={0}
      padding={majorScale(1)}
      paddingTop={majorScale(2)}
      justifyContent="center"
      alignItems="center"
      zIndex={5}
    >
      <Icon onClick={onToggle} />
      {styles}
    </Pane>
  );
};
