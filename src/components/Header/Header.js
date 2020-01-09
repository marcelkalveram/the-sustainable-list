import React from 'react';
import { Pane, majorScale } from 'evergreen-ui';
import { colors } from '../../config/constants';

import { HeaderLogo } from './HeaderLogo';
import { HeaderMenu } from './HeaderMenu';

export function Header() {
  return (
    <Pane
      width="100%"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      borderBottom={`1px solid ${colors.primary}`}
      backgroundColor={colors.primarySoft}
      padding={majorScale(2)}
    >
      <HeaderLogo />
      <HeaderMenu />
    </Pane>
  );
}
