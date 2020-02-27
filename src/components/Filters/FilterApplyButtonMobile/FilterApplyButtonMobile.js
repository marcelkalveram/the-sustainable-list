import React from 'react';
import { Pane, Button } from 'evergreen-ui';
import { colors } from '../../../config/constants';
import { majorScale } from 'evergreen-ui/commonjs/scales';

export const FilterApplyButtonMobile = ({ setShowFilters, clearSelected }) => (
  <Pane
    style={{
      display: 'flex',
      position: 'fixed',
      bottom: 0,
      left: 0,
      width: '100%',
      height: '56px',
      backgroundColor: colors.white,
      borderTop: `1px solid ${colors.grey}`,
      padding: majorScale(1),
      justifyContent: 'space-around',
      alignItems: 'center',
      zIndex: 5,
    }}
  >
    <Button
      appearance="secondary"
      height={40}
      onClick={() => clearSelected()}
    >
      Clear filters
    </Button>
    <Button
      className="buttonPrimary"
      appearance="primary"
      height={40}
      onClick={() => setShowFilters(false)}
    >
      Apply filters
    </Button>
  </Pane>
);
