import React, { useMemo } from 'react';
import { Pane } from 'evergreen-ui';
import { CheckboxCountry } from './CheckboxCountry';
import { CheckboxGeneric } from './CheckboxGeneric';

const getLocation = (val, prop) => val.fields.country;

export const FilterCheckboxes = ({
  hidden,
  filters,
  toggleFilter,
  selected,
  name,
}) => {
  const countries = useMemo(
    () =>
      filters['location'].reduce((unique, item) => {
        return unique.filter(u => u === getLocation(item)).length
          ? unique
          : unique.concat(getLocation(item));
      }, []),
    [filters],
  );

  let checkboxes = [];

  if (name === 'location') {
    checkboxes = countries.map(country => (
      <CheckboxCountry
        selected={selected}
        country={country}
        toggleFilter={toggleFilter}
      />
    ));
  }

  if (name !== 'location') {
    checkboxes = filters[name].map(element => (
      <CheckboxGeneric
        selected={selected}
        name={name}
        element={element}
        toggleFilter={toggleFilter}
      />
    ));
  }

  return (
    <Pane display={hidden.includes(name) ? 'none' : 'block'}>{checkboxes}</Pane>
  );
};
