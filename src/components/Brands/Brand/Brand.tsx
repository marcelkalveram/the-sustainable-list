import React from "react";
import { Pane } from "evergreen-ui";
import { BrandCertificates } from "./BrandCertificates/BrandCertificates";
import { BrandImage } from "./BrandImage/BrandImage";
import { BrandLogo } from "./BrandLogo/BrandLogo";
import { BrandDetails } from "./BrandDetails/BrandDetails";
import { className, styles } from "./styles";
import type { Brand as BrandType } from "types";
import { usePostHog } from "posthog-js/react";

interface BrandProps {
  brand: BrandType;
  index: number;
}

export const Brand = ({
  brand: {
    fields: {
      certificates,
      image,
      logo,
      title,
      clothingStyles,
      location,
      price,
      website,
    },
  },
  index,
}: BrandProps) => {
  const posthog = usePostHog();
  const visibleByDefault = index < 3;
  return (
    <>
      <Pane
        className={`brands__brand ${className}`}
        display="flex"
        flexDirection="column"
        alignItems="center"
        textAlign="left"
      >
        <BrandImage
          image={image}
          website={website}
          visibleByDefault={visibleByDefault}
          onClick={() => posthog.capture("brand_clicked", { title })}
        >
          <BrandCertificates certificates={certificates} />
        </BrandImage>

        <Pane
          position="relative"
          display="flex"
          flexDirection="row-reverse"
          justifyContent="space-between"
          alignItems="center"
          width="100%"
        >
          <BrandLogo
            logo={logo}
            title={title}
            visibleByDefault={visibleByDefault}
          />
          <BrandDetails
            title={title}
            clothingStyles={clothingStyles}
            location={location}
            price={price}
            website={website}
          />
        </Pane>
      </Pane>
      {styles}
    </>
  );
};
