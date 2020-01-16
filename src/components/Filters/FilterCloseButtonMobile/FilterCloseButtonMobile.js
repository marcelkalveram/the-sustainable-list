import React from 'react';
import { IconButton } from 'evergreen-ui';
import { className, styles } from './styles.js';

export const FilterCloseButtonMobile = ({ setShowFilters }) => (
  <>
    <IconButton
      appearance="minimal"
      className={`filters__close-button-mobile ${className}`}
      icon="cross"
      onClick={() => setShowFilters(false)}
    />
    {styles}
  </>
);
