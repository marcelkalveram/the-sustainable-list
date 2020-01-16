import React from 'react';
import {
  Pane,
  Text,
  Link,
  Heading,
  Badge,
  majorScale,
  minorScale,
} from 'evergreen-ui';
import { colors, fontSizes } from '../../../../config/constants';

const getLocation = location => {
  let locationString = 'Unknown location';
  if (location && location.fields && location.fields.country) {
    locationString = `${location.fields.country}`;
  }
  return locationString;
};

const getPrice = price => {
  price = price || 1;
  return (
    <>
      <Text color={colors.secondary} size={fontSizes.base}>
        $
      </Text>
      <Text
        color={price > 1 ? colors.secondary : colors.greyedOut}
        size={fontSizes.base}
      >
        $
      </Text>
      <Text
        color={price > 2 ? colors.secondary : colors.greyedOut}
        size={fontSizes.base}
      >
        $
      </Text>
    </>
  );
};

const getStyleColor = style => {
  switch (style) {
    case 'casual':
      return '#D2EEF3';
    case 'sporty':
      return '#FAE2E2';
    case 'surf':
      return '#DDEBF7';
    case 'yoga':
      return '#EAE7F8';
    case 'activewear':
      return '#D4EEE2';
    case 'wedding':
      return '#FFFFFF';
    case 'elegant':
      return '#FFFFFF';
    default:
      return '#EDF0F2';
  }
};

export const BrandDetails = ({
  title,
  clothingStyles,
  location,
  price,
  website,
}) => {
  return (
    <Pane
      display="flex"
      flexDirection="column"
      overflow="hidden"
      paddingTop="8"
      width="100%"
    >
      <Link textDecoration="none" target="_blank" href={website}>
        <Heading color={colors.secondary}>{title}</Heading>
      </Link>
      <Pane display="flex" flexDirection="row">
        <Pane marginTop={minorScale(2)} whiteSpace="nowrap" overflow="hidden">
          {clothingStyles &&
            clothingStyles.map(style => (
              <Badge
                key={style.sys.id}
                className="badge"
                marginRight={minorScale(1)}
                backgroundColor={getStyleColor(
                  style.fields.title.toLowerCase(),
                )}
              >
                {style.fields.title.toLowerCase()}
              </Badge>
            ))}
        </Pane>
        <Pane
          marginTop={minorScale(2)}
          marginLeft={majorScale(1)}
          whiteSpace="nowrap"
        >
          {getPrice(price)}
          <Text
            color={colors.secondary}
            size={fontSizes.base}
            paddingLeft={majorScale(1)}
          >
            ·
          </Text>
          <Text
            size={fontSizes.base}
            paddingLeft={majorScale(1)}
            color={colors.secondary}
          >
            {getLocation(location)}
          </Text>
        </Pane>
      </Pane>
    </Pane>
  );
};
