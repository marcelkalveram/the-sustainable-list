import React from 'react';
import { Link, Text, Paragraph, SearchInput } from 'evergreen-ui';

export function Sort(props) {
  return (
    <div className="sort-container">
      <Paragraph
        size={300}
        backgroundColor="#F5F6F7"
        padding={8}
        marginRight={8}
      >
        Showing <b>{props.count}</b> out of 100 sustainable brands
      </Paragraph>
      <div>
        <Link
          backgroundColor="#F5F6F7"
          padding={8}
          size={300}
          href="#"
          onClick={() =>
            props.setSortBy({
              az: !props.sortBy.az,
              price: true,
            })
          }
        >
          {props.sortBy.az ? 'A-Z' : 'Z-A'}
        </Link>

        <Link
          backgroundColor="#F5F6F7"
          size={300}
          padding={8}
          marginLeft={8}
          marginRight={16}
          href="#"
          onClick={() =>
            props.setSortBy({
              az: true,
              price: !props.sortBy.price,
            })
          }
        >
          {props.sortBy.price ? 'Price (ascending)' : 'Price (descending)'}
        </Link>
        <SearchInput
          onChange={e => props.setSearchFor(e.target.value)}
          value={props.searchFor}
          height={31}
          placeholder="Search by name..."
        />
      </div>
    </div>
  );
}
