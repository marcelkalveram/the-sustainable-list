import React from 'react';
import { Button, Paragraph, SearchInput } from 'evergreen-ui';
import { majorScale } from 'evergreen-ui/commonjs/scales';

export function Sort(props) {
  return (
    <div className="sort-container">
      <Paragraph
        className="brands-count"
        size={300}
        padding={8}
        marginRight={8}
      >
        Showing <b>{props.count}</b> out of {props.totalCount} sustainable
        brands
      </Paragraph>
      <div>
        <Button
          color="#425A70"
          appearance="minimal"
          iconSize={18}
          onClick={() =>
            props.setSortBy({
              az: props.sortBy.az === 'asc' ? 'desc' : 'asc',
              price: null,
            })
          }
        >
          {props.sortBy.az !== 'asc' ? 'A-Z' : 'Z-A'}
        </Button>
        <Button
          color="#425A70"
          appearance="minimal"
          marginRight={majorScale(2)}
          iconSize={18}
          onClick={() =>
            props.setSortBy({
              az: null,
              price: props.sortBy.price === 'asc' ? 'desc' : 'asc',
            })
          }
        >
          {props.sortBy.price === 'asc' ? '$$$' : '$'}
        </Button>

        <SearchInput
          onChange={e => props.setSearchFor(e.target.value)}
          value={props.searchFor}
          height={31}
          placeholder="Search by name..."
        />
      </div>
      <div className="mobile-filter-search">
        <Button
          color="#425A70"
          appearance="minimal"
          iconBefore="filter"
          iconSize={18}
          onClick={() => props.setShowFilters(true)}
        >
          Filter
        </Button>
        <SearchInput
          onChange={e => props.setSearchFor(e.target.value)}
          value={props.searchFor}
          height={31}
          width={150}
          placeholder="Search by name..."
        />
      </div>
    </div>
  );
}
