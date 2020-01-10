import React from 'react';
import { IconButton, SearchInput } from 'evergreen-ui';
import { colors, iconSizes, SEARCH_INPUT_HEIGHT } from '../../config/constants';
import './FilterMobile.css';
import { majorScale } from 'evergreen-ui/commonjs/scales';

const SEARCH_INPUT_WIDTH = 150;

export const FilterMobile = ({ setShowFilters, setSearchFor, searchFor }) => {
  return (
    <div className="filter__mobile">
      <IconButton
        marginLeft={majorScale(1)}
        color={colors.secondary}
        appearance="minimal"
        icon="settings"
        iconSize={iconSizes.small}
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
  );
};
