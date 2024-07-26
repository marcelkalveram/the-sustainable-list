import React from "react";
import { SettingsIcon, Pane, SearchInput, Text, Button } from "evergreen-ui";
import { colors, SEARCH_INPUT_HEIGHT } from "theme/constants";
import { majorScale } from "evergreen-ui/commonjs/scales";
import { filterMobileStyles } from "./styles.js";

const SEARCH_INPUT_WIDTH = 140;

export const FilterMobile = ({ setShowFilters, setSearchFor, searchFor }) => {
  return (
    <>
      <div className="filter__mobile">
        <Pane display="flex" justifyContent="center" alignItems="center">
          <Button
            fontWeight={600}
            color={colors.secondary}
            appearance="minimal"
            onClick={() => setShowFilters(true)}
          >
            <SettingsIcon color={colors.secondary} marginX={majorScale(1)} />
            <Text fontWeight={600} color={colors.secondary}>
              FILTER
            </Text>
          </Button>
        </Pane>
        <SearchInput
          onChange={(e) => setSearchFor(e.target.value)}
          value={searchFor}
          height={SEARCH_INPUT_HEIGHT + 1}
          width={SEARCH_INPUT_WIDTH}
          placeholder="Search..."
        />
      </div>
      <style jsx>{filterMobileStyles}</style>
    </>
  );
};
