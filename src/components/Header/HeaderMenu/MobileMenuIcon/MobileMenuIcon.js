import React from "react";
import {
  Pane,
  MenuIcon,
  CrossIcon,
  majorScale,
  Button,
  IconButton,
} from "evergreen-ui";
import { className, styles } from "./styles.js";

export const MobileMenuIcon = ({ showCloseButton, onToggle }) => {
  const Icon = showCloseButton ? CrossIcon : MenuIcon;
  return (
    <Pane
      className={`header__menu__mobile-menu-icon ${className}`}
      position="absolute"
      top={0}
      right={0}
      padding={majorScale(1)}
      paddingTop={majorScale(2)}
      justifyContent="center"
      alignItems="center"
      zIndex={5}
    >
      <Button
        style={{ border: 0, background: "transparent" }}
        onClick={onToggle}
        icon="menu"
      >
        <Icon />
      </Button>
      {styles}
    </Pane>
  );
};
