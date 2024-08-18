import React, { type ReactNode } from "react";
import { Pane } from "evergreen-ui";
import { CheckboxCountry } from "./CheckboxCountry";
import { CheckboxGeneric } from "./CheckboxGeneric";
import type { CriteriaMapFlattened } from "types";

const getLocation = (val) => val.fields.country;

interface FilterCheckboxesProps {
  hidden: string[];
  filters: CriteriaMapFlattened;
  toggleFilter: Function;
  selected: CriteriaMapFlattened;
  name: string;
}

export const FilterCheckboxes = ({
  hidden,
  filters,
  toggleFilter,
  selected,
  name,
}: FilterCheckboxesProps): ReactNode => {
  let checkboxes = [];

  if (name === "location") {
    const countries = filters["location"].reduce((unique, item) => {
      return unique.filter((u) => u === getLocation(item)).length
        ? unique
        : unique.concat(getLocation(item));
    }, []);

    checkboxes = countries
      .sort(function (a, b) {
        if (a < b) {
          return -1;
        }
        if (a > b) {
          return 1;
        }
        return 0;
      })
      .map((country) => (
        <CheckboxCountry
          key={country}
          selected={selected}
          country={country}
          toggleFilter={toggleFilter}
        />
      ))
      .sort();
  }

  if (name !== "location") {
    checkboxes = filters[name].slice();
    checkboxes.sort((a, b) => {
      if (!a.fields || !b.fields) {
        return 0;
      }
      if (a.fields.title < b.fields.title) {
        return -1;
      }
      if (a.fields.title > b.fields.title) {
        return 1;
      }
      return 0;
    });

    return checkboxes.map((element) => (
      <CheckboxGeneric
        key={element.fields ? element.fields.slug : element}
        selected={selected}
        name={name}
        element={element}
        toggleFilter={toggleFilter}
      />
    ));
  }

  return (
    <Pane display={hidden.includes(name) ? "none" : "block"}>{checkboxes}</Pane>
  );
};
