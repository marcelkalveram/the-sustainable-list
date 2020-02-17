import React from 'react';
import { IconButton, Pane, majorScale } from 'evergreen-ui';

export const FilterCloseButtonMobile = ({ setShowFilters }) => (
  <Pane
    style={{
      display: 'flex',
      position: 'fixed',
      top: 0,
      right: 0,
      padding: majorScale(1),
      paddingTop: majorScale(2),
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 5,
    }}
  >
    <IconButton
      appearance="minimal"
      icon="cross"
      onClick={() => setShowFilters(false)}
    />
  </Pane>
);
