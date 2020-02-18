import React from 'react';
import { Pane, IconButton, majorScale } from 'evergreen-ui';
import { className, styles } from './styles.js';

export const MobileMenuIcon = ({ showCloseButton, onToggle }) => (
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
    <IconButton
      appearance="minimal"
      icon={showCloseButton ? 'cross' : 'menu'}
      onClick={onToggle}
      display="flex"
    />
    {styles}
  </Pane>
);
