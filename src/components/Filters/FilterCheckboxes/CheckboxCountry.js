import React from 'react';
import { Text, Checkbox } from 'evergreen-ui';
import { colors, fontSizes } from '../../../config/constants';

export const CheckboxCountry = ({ country, selected, toggleFilter }) => {
  return (
    <Checkbox
      key={country}
      checked={selected['location'].includes(country)}
      label={
        <Text size={fontSizes.base} color={colors.secondarySoft}>
          {country}
        </Text>
      }
      onChange={e => toggleFilter(country, 'location')}
    />
  );
};
