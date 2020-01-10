import React from 'react';
import { Heading, Pane } from 'evergreen-ui';
import { minorScale } from 'evergreen-ui/commonjs/scales';
import logo from '../../images/logo.png';
import { colors, fontSizes } from '../../config/constants';
import './HeaderLogo.css';

const LOGO_HEIGHT = 24;
const SUBTITLE_FONTWEIGHT = 500;

export const HeaderLogo = () => {
  return (
    <Pane
      className="header__logo"
      display="flex"
      flexDirection="row"
      alignItems="flex-end"
    >
      <img alt="The Sustainable List logo" src={logo} height={LOGO_HEIGHT} />

      <Heading
        className="header__logo__subtitle"
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
