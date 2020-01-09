import React from 'react';
import { Heading, Pane } from 'evergreen-ui';
import { minorScale } from 'evergreen-ui/commonjs/scales';
import logo from '../../images/logo.png';
import { colors, fontSizes } from '../../config/constants';

const LOGO_HEIGHT = 24;
const SUBTITLE_FONTWEIGHT = 500;

export const HeaderLogo = () => {
  return (
    <Pane display="flex" flexDirection="row" alignItems="flex-end">
      <img alt="The Sustainable List logo" src={logo} height={LOGO_HEIGHT} />

      <Heading
        size={fontSizes.base}
        color={colors.primary}
        marginBottom={-2}
        marginLeft={minorScale(2)}
        fontWeight={SUBTITLE_FONTWEIGHT}
      >
        all the good fashion brands at a glance
      </Heading>
    </Pane>
  );
};
