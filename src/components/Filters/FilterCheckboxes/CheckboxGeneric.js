import React from 'react';
import { Text, Checkbox } from 'evergreen-ui';
import { colors, fontSizes } from '../../../config/constants';

const getFieldProp = (val, prop) =>
  typeof val === 'string' ? val : val.fields[prop];

export const CheckboxGeneric = ({ selected, name, element, toggleFilter }) => {
  return (
    <Checkbox
      checked={selected[name].includes(getFieldProp(element, 'slug'))}
      label={
        <Text size={fontSizes.base} color={colors.secondarySoft}>
          {getFieldProp(element, 'title')}
        </Text>
      }
      onChange={() => toggleFilter(getFieldProp(element, 'slug'), name)}
    />
  );
};
