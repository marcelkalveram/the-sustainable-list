import React from 'react';
import { IconButton, SearchInput } from 'evergreen-ui';
import { colors, SEARCH_INPUT_HEIGHT } from '../../../config/constants';
import { majorScale } from 'evergreen-ui/commonjs/scales';
import { filterMobileStyles } from './styles.js';

const SEARCH_INPUT_WIDTH = 150;

export const FilterMobile = ({ setShowFilters, setSearchFor, searchFor }) => {
  return (
    <>
      <div className="filter__mobile">
        <IconButton
          marginLeft={majorScale(1)}
          color={colors.secondary}
          appearance="minimal"
          icon="settings"
          onClick={() => setShowFilters(true)}
        />
        <SearchInput
          onChange={e => setSearchFor(e.target.value)}
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
