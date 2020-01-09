import React from 'react';
import { Button, SearchInput } from 'evergreen-ui';
import { colors, iconSizes, SEARCH_INPUT_HEIGHT } from '../../config/constants';

const SEARCH_INPUT_WIDTH = 150;

export const SortMobile = ({ setShowFilters, setSearchFor, searchFor }) => {
  return (
    <div className="mobile-filter-search">
      <Button
        color={colors.secondary}
        appearance="minimal"
        iconBefore="filter"
        iconSize={iconSizes.small}
        onClick={() => setShowFilters(true)}
      >
        Filter
      </Button>
      <SearchInput
        onChange={e => setSearchFor(e.target.value)}
        value={searchFor}
        height={SEARCH_INPUT_HEIGHT}
        width={SEARCH_INPUT_WIDTH}
        placeholder="Search..."
      />
    </div>
  );
};
