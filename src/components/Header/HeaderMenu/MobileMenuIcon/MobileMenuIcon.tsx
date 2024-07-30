import React, { MouseEventHandler, type ReactElement } from "react";
import {
  Pane,
  MenuIcon,
  CrossIcon,
  majorScale,
  Button,
  IconButton,
} from "evergreen-ui";
import { className, styles } from "./styles";

interface MobileMenuIconProps {
  showCloseButton: boolean;
  onToggle: MouseEventHandler;
}

export const MobileMenuIcon = ({
  showCloseButton,
  onToggle,
}: MobileMenuIconProps): ReactElement => {
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
      >
        <Icon />
      </Button>
      {styles}
    </Pane>
  );
};
