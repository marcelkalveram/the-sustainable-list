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
import { className, styles } from './styles.js';

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
      return '#FFFAD2';
    case 'sporty':
      return '#FEE3C9';
    case 'swim':
      return '#E7F9FF';
    case 'lingerie':
      return '#FFF6F6';
    case 'wedding':
      return '#FAF5FF';
    case 'elegant':
      return '#F3F3F3';
    case 'business':
      return '#D4E1E6';
    default:
      return '#EDF0F2';
  }
};

const getStyleColorText = style => {
  switch (style) {
    case 'casual':
      return '#E2AD38';
    case 'sporty':
      return '#E58B6D';
    case 'swim':
      return '#788E90';
    case 'lingerie':
      return '#E4A3A1';
    case 'wedding':
      return '#AF95C8';
    case 'elegant':
      return '#8F8F8F';
    case 'business':
      return '#7190AA';
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
    <>
      <Pane
        className={`${className} brand-details`}
        display="flex"
        flexDirection="column"
        overflow="hidden"
        paddingTop="8"
        width="100%"
      >
        <Link textDecoration="none" target="_blank" href={website}>
          <Heading color={colors.secondary}>{title}</Heading>
        </Link>
        <Pane
          display="flex"
          flexDirection="row"
          className="brand-details__meta"
        >
          <Pane
            marginTop={minorScale(2)}
            overflow="hidden"
            className="brand-details__meta__styles"
          >
            {clothingStyles &&
              clothingStyles.map(style => (
                <Badge
                  key={style.sys.id}
                  className="badge"
                  marginRight={minorScale(1)}
                  backgroundColor={getStyleColor(
                    style.fields.title.toLowerCase().trim(),
                  )}
                >
                  <Text
                    size={300}
                    fontWeight={700}
                    color={getStyleColorText(
                      style.fields.title.toLowerCase().trim(),
                    )}
                  >
                    {style.fields.title.toLowerCase()}
                  </Text>
                </Badge>
              ))}
          </Pane>
          <Pane
            className="brand-details__meta__location"
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
      {styles}
    </>
  );
};
