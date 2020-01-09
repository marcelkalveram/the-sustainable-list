import React from 'react';
import { IconButton } from 'evergreen-ui';

export const CloseButtonMobile = ({ setShowFilters }) => (
  <IconButton
    appearance="minimal"
    className="menu-icon"
    icon="cross"
    onClick={() => setShowFilters(false)}
    style={{
      position: 'absolute',
      right: '16px',
      top: '16px',
      lineHeight: '38px',
    }}
  />
);
