import React from 'react';
import { Pane, Paragraph, SearchInput } from 'evergreen-ui';
import { majorScale } from 'evergreen-ui/commonjs/scales';
import { colors, fontSizes, SEARCH_INPUT_HEIGHT } from '../../config/constants';
import { SortButton } from './SortButton';
import { FilterMobile } from './FilterMobile';
import './Sort.css';

export function Sort(props) {
  const {
    count,
    totalCount,
    searchFor,
    setSearchFor,
    setShowFilters,
    sortBy,
    setSortBy,
  } = props;

  return (
    <div className="sort">
      <Paragraph
        className="sort__brands-count"
        size={fontSizes.base}
        padding={majorScale(1)}
        marginRight={majorScale(1)}
        color={colors.secondary}
      >
        Showing <b>{count}</b> out of {totalCount} sustainable brands
      </Paragraph>
      <Pane>
        <SortButton
          onToggle={() =>
            setSortBy({
              az: sortBy.az === 'asc' ? 'desc' : 'asc',
              price: null,
            })
          }
        >
          {sortBy.az !== 'asc' ? 'A-Z' : 'Z-A'}
        </SortButton>
        <SortButton
          onToggle={() =>
            setSortBy({
              az: null,
              price: sortBy.price === 'asc' ? 'desc' : 'asc',
            })
          }
        >
          {sortBy.price === 'asc' ? '$$$' : '$'}
        </SortButton>

        <SearchInput
          marginLeft={majorScale(1)}
          onChange={e => setSearchFor(e.target.value)}
          value={searchFor}
          height={SEARCH_INPUT_HEIGHT}
          placeholder="Search by name..."
        />
      </Pane>
      <FilterMobile
        setShowFilters={setShowFilters}
        setSearchFor={setSearchFor}
        searchFor={searchFor}
      />
    </div>
  );
}
