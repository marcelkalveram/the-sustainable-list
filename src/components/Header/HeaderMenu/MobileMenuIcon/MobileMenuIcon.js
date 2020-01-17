import React from 'react';
import { IconButton, majorScale } from 'evergreen-ui';
import { className, styles } from './styles.js';

export const MobileMenuIcon = ({ showCloseButton, onToggle }) => (
  <>
    <IconButton
      className={`header__menu__mobile-menu-icon ${className}`}
      appearance="minimal"
      icon={showCloseButton ? 'cross' : 'menu'}
      onClick={onToggle}
      marginRight={-majorScale(1)}
    />
    {styles}
  </>
);
