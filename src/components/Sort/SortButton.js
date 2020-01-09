import React from 'react';
import { Button } from 'evergreen-ui';
import { colors, iconSizes } from '../../config/constants';

export const SortButton = ({ onToggle, children }) => {
  return (
    <Button
      color={colors.secondary}
      appearance="minimal"
      iconSize={iconSizes.small}
      onClick={onToggle}
    >
      {children}
    </Button>
  );
};
