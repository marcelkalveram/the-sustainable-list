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

export function Header() {
  return (
    <Pane
      // position="fixed"
      backgroundColor="white"
      width="100%"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      borderBottom="1px solid #999"
      backgroundColor="#234361"
      paddingLeft={majorScale(2)}
      paddingRight={majorScale(2)}
      paddingTop={majorScale(0)}
      paddingBottom={majorScale(0)}
    >
      <Heading
        size={700}
        color="#F9F9FB"
        fontFamily="La Belle Aurore"
        marginBottom={-10}
      >
        sustainable brands{' '}
        <Text
          color="#F9F9FB"
          opacity={0.33}
          size={300}
          marginLeft={minorScale(1)}
        >
          {' '}
          the fastest way to shop sustainably
        </Text>
      </Heading>
      <UnorderedList display="flex" alignItems="center">
        <ListItem>
          <Link href="/about">About the project</Link>
        </ListItem>
        <ListItem>
          <Link href="/list">
            <Button>Not listed yet?</Button>
          </Link>
        </ListItem>
      </UnorderedList>
    </Pane>
  );
}
