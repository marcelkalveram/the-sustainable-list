import React from 'react';
import { Heading, Icon, minorScale, majorScale } from 'evergreen-ui';
import { colors, fontSizes } from '../../../config/constants';

export const FilterHeading = ({ hidden, toggleHidden, name, title }) => {
  return (
    <Heading
      cursor="pointer"
      color={colors.secondary}
      size={fontSizes.medium}
      onClick={() => toggleHidden(name)}
      paddingBottom={hidden.includes(name) ? majorScale(1) : 0}
    >
      {title}
      <Icon
        position="relative"
        top={minorScale(1)}
        icon={hidden.includes(name) ? 'caret-up' : 'caret-down'}
      />
    </Heading>
  );
};
