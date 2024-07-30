import React, { type ReactElement, useState } from "react";
import { toggleHiddenFn, toggleFilterFn } from "../../helpers/toggle";
import { FilterHeading } from "./FilterHeading/FilterHeading";
import { FilterCheckboxes } from "./FilterCheckboxes/FilterCheckboxes";
import { FilterCloseButtonMobile } from "./FilterCloseButtonMobile/FilterCloseButtonMobile";
import { FilterApplyButtonMobile } from "./FilterApplyButtonMobile/FilterApplyButtonMobile";
import { filtersStyles } from "./styles";
import type { Criteria, CriteriaMapFlattened } from "types";

interface FiltersProps {
  criteriaMap: Criteria[];
  filters: CriteriaMapFlattened;
  selected: CriteriaMapFlattened;
  setSelected: Function;
  clearSelected: Function;
  showFilters: boolean;
  setShowFilters: Function;
  style?: Object;
}

export function Filters({
  criteriaMap,
  filters,
  selected,
  setSelected,
  clearSelected,
  showFilters,
  setShowFilters,
  style = null,
}: FiltersProps): ReactElement {
  const [hidden, setHidden] = useState([]);

  const toggleHidden = toggleHiddenFn(hidden, setHidden);
  const toggleFilter = toggleFilterFn(selected, setSelected);

  return (
    <>
      {showFilters && (
        <FilterCloseButtonMobile setShowFilters={setShowFilters} />
      )}
      <div
        className={`filters${showFilters ? " filters--visible" : ""}`}
        style={style}
      >
        {criteriaMap.map((criteria) => (
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
        <FilterApplyButtonMobile
          setShowFilters={setShowFilters}
          clearSelected={clearSelected}
        />
      )}

      <style jsx>{filtersStyles}</style>
    </>
  );
}
