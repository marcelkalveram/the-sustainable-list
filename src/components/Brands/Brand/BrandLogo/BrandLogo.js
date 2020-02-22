import React from 'react';
import { Pane, majorScale } from 'evergreen-ui';
import { colors } from '../../../../config/constants';
import { className, styles } from './styles.js';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const LOGO_SIZE = 76;
const OFFSET = 38;

export const BrandLogo = ({ logo, title, visibleByDefault }) => {
  return (
    <>
      <Pane
        className={`brand-logo ${className}`}
        position="absolute"
        right="0"
        top={`-${OFFSET}px`}
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
        background={colors.white}
        padding={majorScale(1)}
        borderWidth="1px"
        borderStyle="dashed"
        borderColor={colors.greyedOut}
      >
        {logo && logo.fields && (
          <LazyLoadImage
            alt={`${title} logo`}
            src={`${logo.fields.file.url}?fm=jpg&w=196&q=100`}
            width="64px"
            visibleByDefault={visibleByDefault}
          />
        )}
      </Pane>
      {styles}
    </>
  );
};
