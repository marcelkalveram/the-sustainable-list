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

export function Header() {
  return (
    <Pane
      backgroundColor="#F1FAF5"
      width="100%"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      borderBottom="1px solid #47B881"
      paddingLeft={majorScale(3)}
      paddingRight={majorScale(3)}
      paddingTop={majorScale(1)}
      paddingBottom={majorScale(1)}
    >
      <Heading color="#00783E" size={600}>
        Sustainable Brands{' '}
        <Text color="#47B881"> The fastest way to shop sustainably</Text>
      </Heading>
      <UnorderedList display="flex" alignItems="center">
        <ListItem>
          <Link href="/about" color="#47B881">
            About the project
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/list" color="#47B881">
            <Button color="#47B881">Not listed yet?</Button>
          </Link>
        </ListItem>
      </UnorderedList>
    </Pane>
  );
}
