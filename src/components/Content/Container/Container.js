import React from 'react';
import { Pane, majorScale } from 'evergreen-ui';

export const Container = ({ children }) => (
  <Pane
    display="flex"
    padding={majorScale(7)}
    paddingTop={majorScale(6)}
    marginLeft="auto"
    marginRight="auto"
  >
    {children}
  </Pane>
);
