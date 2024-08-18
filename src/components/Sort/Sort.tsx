import React, { type ReactElement } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Pane, SearchInput } from "evergreen-ui";
import { majorScale } from "evergreen-ui/commonjs/scales";
import { colors, SEARCH_INPUT_HEIGHT } from "theme/constants";

import { SortButton } from "./SortButton/SortButton";
import { FilterMobile } from "./FilterMobile/FilterMobile";
import { BrandsCount } from "./BrandsCount/BrandsCount";
import { styles, className } from "./styles";

import {
  brandsFilteredSelector,
  setSearchFor,
  setShowFilters,
  setSortBy,
} from "store/appSlice";
import type { RootState } from "store/store";
import { SortBy } from "types";
import { usePostHog } from "posthog-js/react";

export const Sort = (): ReactElement => {
  const posthog = usePostHog();
  const dispatch = useDispatch();

  const totalCount = useSelector((state: RootState) => state.brands.length);

  const brandsFiltered = useSelector((state: RootState) =>
    brandsFilteredSelector(state),
  );

  const searchFor = useSelector((state: RootState) => state.searchFor);
  const sortBy = useSelector((state: RootState) => state.sortBy);

  const dispatchSortBy = (sortBy: SortBy) => {
    posthog?.capture("brands_sorted", sortBy);
    dispatch(setSortBy(sortBy));
  };

  const dispatchSearchFor = (searchTerm: string) => {
    posthog?.capture("brands_searched", { searchTerm });
    dispatch(setSearchFor(searchTerm));
  };

  return (
    <>
      <Pane
        className={`sort ${className}`}
        zIndex={1}
        position="sticky"
        top={0}
        background={colors.white}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        marginRight={majorScale(2)}
        marginLeft="40px"
        paddingX="0"
        paddingY={majorScale(2)}
      >
        <BrandsCount count={brandsFiltered.length} totalCount={totalCount} />
        <Pane
          className="sortPane"
          flex="1"
          display="flex"
          justifyContent="flex-end"
        >
          <Pane className="sortPane__buttons">
            <SortButton
              onToggle={() =>
                dispatchSortBy({
                  az: sortBy.az === "asc" ? "desc" : "asc",
                  price: null,
                })
              }
            >
              {sortBy.az !== "asc" ? "A-Z" : "Z-A"}
            </SortButton>
            <SortButton
              onToggle={() =>
                dispatchSortBy({
                  az: null,
                  price: sortBy.price === "asc" ? "desc" : "asc",
                })
              }
            >
              {sortBy.price === "asc" ? "$$$" : "$"}
            </SortButton>
          </Pane>
          <Pane className="sortPane__searchInput" justifySelf="flex-end">
            <SearchInput
              marginLeft={majorScale(1)}
              onChange={(e) => dispatchSearchFor(e.target.value)}
              value={searchFor}
              height={SEARCH_INPUT_HEIGHT}
              placeholder="Search by name..."
            />
          </Pane>
        </Pane>
        <FilterMobile
          setShowFilters={() => dispatch(setShowFilters(true))}
          setSearchFor={(searchTerm) => dispatchSearchFor(searchTerm)}
          searchFor={searchFor}
        />
      </Pane>
      {styles}
    </>
  );
};
