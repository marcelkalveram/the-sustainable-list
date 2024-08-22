import React, { type ReactElement, useState } from "react";
import { FilterHeading } from "./FilterHeading/FilterHeading";
import { FilterCheckboxes } from "./FilterCheckboxes/FilterCheckboxes";
import { FilterCloseButtonMobile } from "./FilterCloseButtonMobile/FilterCloseButtonMobile";
import { FilterApplyButtonMobile } from "./FilterApplyButtonMobile/FilterApplyButtonMobile";
import { filtersStyles } from "./styles";

import criteriaMap from "../../../public/shared/criteriaMap";

import { clearSelected, setSelected, setShowFilters } from "store/appSlice";

import type { RootState } from "store/store";
import type { CriteriaNames } from "types";
import { usePostHog } from "posthog-js/react";
import { useAppDispatch, useAppSelector } from "store/hooks";

export const toggleHiddenFn =
  (hidden: string[], setHidden: Function) => (toggledItem: string) => {
    let newHidden = hidden;
    if (!newHidden.includes(toggledItem)) {
      newHidden.push(toggledItem);
    } else {
      newHidden = newHidden.filter((item) => toggledItem !== item);
    }
    setHidden([...newHidden]);
  };

export function Filters(): ReactElement {
  const dispatch = useAppDispatch();

  const filters = useAppSelector((state: RootState) => state.filters);
  const selected = useAppSelector((state: RootState) => state.selected);
  const showFilters = useAppSelector((state: RootState) => state.showFilters);

  const [hidden, setHidden] = useState([]);

  const posthog = usePostHog();

  const toggleHidden = toggleHiddenFn(hidden, setHidden);
  const toggleFilter = (value: string, type: CriteriaNames) => {
    dispatch(setSelected({ value, type }));
    posthog?.capture("brands_filtered", { type, value });
    window.scrollTo(0, 0);
  };

  return (
    <>
      {showFilters && (
        <FilterCloseButtonMobile
          setShowFilters={(show) => dispatch(setShowFilters(show))}
        />
      )}
      <div className={`filters${showFilters ? " filters--visible" : ""}`}>
        {criteriaMap.data.map((criteria) => (
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
          setShowFilters={(show) => dispatch(setShowFilters(show))}
          clearSelected={() => dispatch(clearSelected())}
        />
      )}

      <style jsx>{filtersStyles}</style>
    </>
  );
}
