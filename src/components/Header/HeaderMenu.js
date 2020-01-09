import React from 'react';
import { Link, UnorderedList, ListItem, majorScale } from 'evergreen-ui';

export const HeaderMenu = () => {
  return (
    <UnorderedList
      className="header-content"
      display="flex"
      alignItems="center"
      marginRight={majorScale(2)}
    >
      <ListItem>
        <Link href="https://thesustainablelist.typeform.com/to/PnaHPh">
          <strong>Add a brand</strong>
        </Link>
      </ListItem>
      <ListItem>
        <Link href="/about">About</Link>
      </ListItem>
      <ListItem>
        <Link href="/contact">Contact Us</Link>
      </ListItem>
    </UnorderedList>
  );
};
