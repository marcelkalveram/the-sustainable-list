import React from 'react';
import { Pane, Link, UnorderedList, ListItem, majorScale } from 'evergreen-ui';
import { className, styles } from './styles.js';
import { MobileMenuIcon } from './MobileMenuIcon/MobileMenuIcon';

export const HeaderMenu = () => {
  return (
    <>
      <MobileMenuIcon />
      <Pane className={`header__menu ${className}`}>
        <UnorderedList
          className="header__menu__ul"
          display="flex"
          alignItems="center"
          marginRight={majorScale(2)}
        >
          <ListItem className="header__menu__li">
            <Link href="https://thesustainablelist.typeform.com/to/PnaHPh">
              <strong>Add a brand</strong>
            </Link>
          </ListItem>
          <ListItem className="header__menu__li">
            <Link href="/about">About</Link>
          </ListItem>
          <ListItem className="header__menu__li">
            <Link href="/contact">Contact Us</Link>
          </ListItem>
        </UnorderedList>
        {styles}
      </Pane>
    </>
  );
};
