import React from 'react';
import {
  Button,
  Heading,
  Text,
  Link,
  Pane,
  UnorderedList,
  ListItem,
  majorScale,
} from 'evergreen-ui';
import { minorScale } from 'evergreen-ui/commonjs/scales';

export function Header(props) {
  return (
    <Pane
      width="100%"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      borderBottom="1px solid #E4E7EB"
      backgroundColor="#F9F9FB"
      paddingLeft={majorScale(2)}
      paddingRight={majorScale(2)}
      paddingTop={majorScale(0)}
      paddingBottom={majorScale(0)}
    >
      <Heading
        className="header-logo"
        size={700}
        color="#425A70"
        fontFamily="Caveat"
        // marginBottom={-10}
      >
        The Sustainable List{' '}
        <Text
          color="#425A70"
          opacity={0.33}
          size={300}
          marginLeft={minorScale(1)}
        >
          {' '}
          the easy way to be sustainable
        </Text>
      </Heading>
      <UnorderedList
        className="header-content"
        display="flex"
        alignItems="center"
      >
        <ListItem>
          <Link href="/about">About the project</Link>
        </ListItem>
        <ListItem>
          <Link href="https://thesustainablelist.typeform.com/to/PnaHPh">
            <Button>Not listed yet?</Button>
          </Link>
        </ListItem>
      </UnorderedList>
      {/* <IconButton appearance="minimal" className="menu-icon" icon="menu" /> */}
    </Pane>
  );
}
