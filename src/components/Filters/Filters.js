import React, { useState } from 'react';
import { Pane } from 'evergreen-ui';
import { toggleHiddenFn, toggleFilterFn } from '../../helpers/toggle';
import { FilterHeading } from './FilterHeading';
import { FilterCheckboxes } from './FilterCheckboxes';
import { CloseButtonMobile } from './CloseButtonMobile';
import { ApplyButtonMobile } from './ApplyButtonMobile';
import './Filters.css';

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
        className={`filters${showFilters ? ' filters--visible' : ''}`}
        style={style}
      >
        <CloseButtonMobile setShowFilters={setShowFilters} />
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
        <Pane height={106} />
      </div>
      {showFilters && <ApplyButtonMobile setShowFilters={setShowFilters} />}
    </>
  );
}
