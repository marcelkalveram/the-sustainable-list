import React from 'react';
import { Pane } from 'evergreen-ui';
import { className, styles } from './styles.js';

export const Section = ({ children }) => (
  <>
    <Pane className={`section ${className}`} width="50%" paddingRight="10%">
      {children}
    </Pane>
    {styles}
  </>
);
