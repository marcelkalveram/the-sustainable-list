import React from 'react';
import { Link, UnorderedList, ListItem, majorScale } from 'evergreen-ui';
import { className, styles } from './styles.js';
import { MobileMenuIcon } from './MobileMenuIcon/MobileMenuIcon';

export const HeaderMenu = () => {
  return (
    <>
      <MobileMenuIcon />
      <UnorderedList
        className={`header__menu ${className}`}
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
      {styles}
    </>
  );
};
