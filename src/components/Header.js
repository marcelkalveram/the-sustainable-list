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
      position="fixed"
      backgroundColor="#FEFEFE"
      width="100%"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      borderBottom="1px solid #999"
      paddingLeft={majorScale(3)}
      paddingRight={majorScale(3)}
      paddingTop={majorScale(1)}
      paddingBottom={majorScale(1)}
    >
      <Heading size={700} fontFamily="Satisfy">
        Sustainable brands{' '}
        <Text color="#425A70" size={300} marginLeft={minorScale(1)}>
          {' '}
          the fairest way to shop
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
