import React from 'react';
import { IconButton, majorScale } from 'evergreen-ui';
import { className, styles } from './styles.js';

export const MobileMenuIcon = () => (
  <>
    <IconButton
      className={`header__menu__mobile-menu-icon ${className}`}
      appearance="minimal"
      icon="menu"
      marginRight={-majorScale(1)}
    />
    {styles}
  </>
);
