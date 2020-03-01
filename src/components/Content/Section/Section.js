import React from 'react';
import { Pane } from 'evergreen-ui';
import { className, styles } from './styles.js';

export const Section = ({ children, noPadding }) => (
  <>
    <Pane
      className={`section ${className}`}
      width="50%"
      paddingRight={noPadding ? 0 : '10%'}
    >
      {children}
    </Pane>
    {styles}
  </>
);
