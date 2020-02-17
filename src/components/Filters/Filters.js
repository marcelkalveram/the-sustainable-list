import React, { useState } from 'react';
import { toggleHiddenFn, toggleFilterFn } from '../../helpers/toggle';
import { FilterHeading } from './FilterHeading/FilterHeading';
import { FilterCheckboxes } from './FilterCheckboxes/FilterCheckboxes';
import { FilterCloseButtonMobile } from './FilterCloseButtonMobile/FilterCloseButtonMobile';
import { FilterApplyButtonMobile } from './FilterApplyButtonMobile/FilterApplyButtonMobile';
import { filtersStyles } from './styles.js';

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
      {showFilters && (
        <FilterCloseButtonMobile setShowFilters={setShowFilters} />
      )}
      <div
        className={`filters${showFilters ? ' filters--visible' : ''}`}
        style={style}
      >
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
      {showFilters && (
        <FilterApplyButtonMobile setShowFilters={setShowFilters} />
      )}

      <style jsx>{filtersStyles}</style>
    </>
  );
}
