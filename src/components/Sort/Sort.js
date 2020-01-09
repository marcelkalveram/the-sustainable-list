import React from 'react';
import { Paragraph, SearchInput } from 'evergreen-ui';
import { majorScale } from 'evergreen-ui/commonjs/scales';
import { colors, fontSizes, SEARCH_INPUT_HEIGHT } from '../../config/constants';
import { SortButton } from './SortButton';
import { SortMobile } from './SortMobile';

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
    <div className="sort-container">
      <Paragraph
        className="brands-count"
        size={fontSizes.base}
        padding={majorScale(1)}
        marginRight={majorScale(1)}
        color={colors.secondary}
      >
        Showing <b>{count}</b> out of {totalCount} sustainable brands
      </Paragraph>
      <div>
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
          onClick={() =>
            setSortBy({
              az: null,
              price: sortBy.price === 'asc' ? 'desc' : 'asc',
            })
          }
        >
          {sortBy.price === 'asc' ? '$$$' : '$'}
        </SortButton>

        <SearchInput
          onChange={e => setSearchFor(e.target.value)}
          value={searchFor}
          height={SEARCH_INPUT_HEIGHT}
          placeholder="Search by name..."
        />
      </div>
      <SortMobile
        setShowFilters={setShowFilters}
        setSearchFor={setSearchFor}
        searchFor={searchFor}
      />
    </div>
  );
}
