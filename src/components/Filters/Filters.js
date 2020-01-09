import React, { useState } from 'react';
import { toggleHiddenFn, toggleFilterFn } from '../../helpers/toggle';
import { FilterHeading } from './FilterHeading';
import { FilterCheckboxes } from './FilterCheckboxes';
import { CloseButtonMobile } from './CloseButtonMobile';
import { ApplyButtonMobile } from './ApplyButtonMobile';

export function Filters({
  criteriaMap,
  filters,
  selected,
  setSelected,
  showFilters,
  setShowFilters,
  style,
}) {
  const [hidden, setHidden] = useState([]);

  const toggleHidden = toggleHiddenFn(hidden, setHidden);
  const toggleFilter = toggleFilterFn(selected, setSelected);

  return (
    <>
      <div
        className={`filters-container${
          showFilters ? ' filters-container--visible' : ''
        }`}
        style={style}
      >
        <CloseButtonMobile />
        {criteriaMap.map(criteria => (
          <React.Fragment key={criteria.title}>
            <FilterHeading
              hidden={hidden}
              toggleHidden={toggleHidden}
              title={criteria.title}
              name={criteria.name}
            />

            <FilterCheckboxes
              hidden={hidden}
              filters={filters}
              toggleFilter={toggleFilter}
              selected={selected}
              name={criteria.name}
            />
          </React.Fragment>
        ))}
      </div>
      {showFilters && <ApplyButtonMobile setShowFilters={setShowFilters} />}
    </>
  );
}
