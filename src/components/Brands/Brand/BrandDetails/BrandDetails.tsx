import React, { ReactElement } from "react";
import {
  Pane,
  Text,
  Link,
  Heading,
  Badge,
  majorScale,
  minorScale,
} from "evergreen-ui";
import { colors, fontSizes } from "theme/constants";
import { className, styles } from "./styles";
import type { Field, Location } from "types";
import { getLocation } from "./helpers/getLocation";
import getPrice from "./helpers/getPrice";
import getStyleColor from "./helpers/getStyleColor";
import getStyleColorText from "./helpers/getStyleColorText";

interface BrandCertificatesProps {
  title: string;
  clothingStyles: Field[];
  location: Location;
  price: number;
  website: string;
}

export const BrandDetails = ({
  title,
  clothingStyles,
  location,
  price,
  website,
}: BrandCertificatesProps): ReactElement => {
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
              clothingStyles.map((style) => (
                <Badge
                  key={style.id}
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
