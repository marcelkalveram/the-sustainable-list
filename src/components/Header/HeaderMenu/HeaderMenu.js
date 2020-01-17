import React, { useState } from 'react';
import { Pane, Link, UnorderedList, ListItem, majorScale } from 'evergreen-ui';
import { className, styles } from './styles.js';
import { MobileMenuIcon } from './MobileMenuIcon/MobileMenuIcon';

export const HeaderMenu = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  console.log(showMobileMenu);
  return (
    <>
      <Pane
        className={`header__menu ${className} ${
          showMobileMenu ? 'header__menu--isVisible' : ''
        }`}
      >
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
      <MobileMenuIcon
        showCloseButton={showMobileMenu}
        onToggle={() => {
          console.log('toggle');
          console.log(!showMobileMenu);
          setShowMobileMenu(!showMobileMenu);
        }}
      />
    </>
  );
};
