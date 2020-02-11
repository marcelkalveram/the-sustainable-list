import React from 'react';
import { Pane, Button } from 'evergreen-ui';
import { colors } from '../../../config/constants';
import { majorScale } from 'evergreen-ui/commonjs/scales';

export const FilterApplyButtonMobile = ({ setShowFilters }) => (
  <Pane
    style={{
      display: 'flex',
      position: 'fixed',
      bottom: 0,
      left: 0,
      width: '100%',
      height: '56px',
      backgroundColor: colors.white,
      borderTop: `1px solid #EEEEEE`,
      padding: majorScale(1),
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 5,
    }}
  >
    <Button
      appearance="primary"
      backgroundImage={`linear-gradient(to bottom, #425A70, #234361)`}
      height={40}
      onClick={() => setShowFilters(false)}
    >
      Apply filters
    </Button>
  </Pane>
);
