import React from 'react';
import { Pane, majorScale } from 'evergreen-ui';
import { colors } from '../../config/constants';
import './BrandLogo.css';

const LOGO_SIZE = 76;
const OFFSET = -54;

export const BrandLogo = ({ logo, title }) => {
  return (
    <Pane
      className="brands__brand__logo"
      display="flex"
      justifyContent="center"
      alignItems="center"
      minWidth={`${LOGO_SIZE}px`}
      width={`${LOGO_SIZE}px`}
      height={`${LOGO_SIZE}px`}
      overflow="hidden"
      borderRadius="50%"
      marginLeft={majorScale(3)}
      marginRight={majorScale(3)}
      marginTop={`${OFFSET}px`}
      background={colors.white}
      padding={majorScale(1)}
      borderWidth="1px"
      borderStyle="dashed"
      borderColor={colors.greyedOut}
    >
      {logo && logo.fields && (
        <img alt={`${title} logo`} src={logo.fields.file.url} width="64px" />
      )}
    </Pane>
  );
};
