import React from 'react';
import { Pane, SearchInput } from 'evergreen-ui';
import { majorScale } from 'evergreen-ui/commonjs/scales';
import { colors, SEARCH_INPUT_HEIGHT } from '../../config/constants';
import { SortButton } from './SortButton/SortButton';
import { FilterMobile } from './FilterMobile/FilterMobile';
import { BrandsCount } from './BrandsCount/BrandsCount';
import { styles, className } from './styles.js';

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
        <BrandsCount count={count} totalCount={totalCount} />
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
      </Pane>
      {styles}
    </>
  );
}
