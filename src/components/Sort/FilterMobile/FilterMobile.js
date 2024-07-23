import React from "react";
import { SettingsIcon, Pane, SearchInput, Text } from "evergreen-ui";
import { colors, SEARCH_INPUT_HEIGHT } from "../../../config/constants";
import { majorScale } from "evergreen-ui/commonjs/scales";
import { filterMobileStyles } from "./styles.js";

const SEARCH_INPUT_WIDTH = 150;

export const FilterMobile = ({ setShowFilters, setSearchFor, searchFor }) => {
  return (
    <>
      <div className="filter__mobile">
        <Pane
          display="flex"
          justifyContent="center"
          alignItems="center"
          marginLeft={majorScale(1)}
          marginRight={majorScale(1)}
          onClick={() => setShowFilters(true)}
        >
          <SettingsIcon color={colors.secondary} marginX={majorScale(1)} />
          <Text fontWeight={600} color={colors.secondary}>
            FILTER
          </Text>
        </Pane>
        <SearchInput
          onChange={(e) => setSearchFor(e.target.value)}
          value={searchFor}
          height={SEARCH_INPUT_HEIGHT}
          width={SEARCH_INPUT_WIDTH}
          placeholder="Search..."
        />
      </div>
      <style jsx>{filterMobileStyles}</style>
    </>
  );
};
