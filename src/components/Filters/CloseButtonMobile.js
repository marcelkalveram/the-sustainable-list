import React from 'react';
import { IconButton } from 'evergreen-ui';
import './CloseButtonMobile.css';

export const CloseButtonMobile = ({ setShowFilters }) => (
  <IconButton
    appearance="minimal"
    className="menu-icon"
    icon="cross"
    onClick={() => setShowFilters(false)}
  />
);
