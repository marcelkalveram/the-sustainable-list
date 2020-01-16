import React from 'react';
import { Button } from 'evergreen-ui';
import { colors } from '../../../config/constants';
import { majorScale } from 'evergreen-ui/commonjs/scales';

export const SortButton = ({ onToggle, children }) => {
  return (
    <Button
      color={colors.secondary}
      appearance="minimal"
      onClick={onToggle}
      marginRight={majorScale(1)}
    >
      {children}
    </Button>
  );
};
