import React from 'react';
import { Pane } from 'evergreen-ui';
import { BrandCertificates } from './BrandCertificates';
import { BrandImage } from './BrandImage';
import { BrandLogo } from './BrandLogo';
import { BrandDetails } from './BrandDetails';

export function Brands({ brands }) {
  return (
    <div className="brands-container">
      {brands.map(brand => {
        const {
          image,
          logo,
          title,
          clothingStyles,
          location,
          price,
          website,
        } = brand.fields;

        return (
          <Pane
            className="brand"
            key={brand.sys.id}
            display="flex"
            flexDirection="column"
            alignItems="center"
            textAlign="left"
          >
            <BrandImage image={image}>
              <BrandCertificates brand={brand} />
            </BrandImage>

            <Pane
              display="flex"
              flexDirection="row-reverse"
              justifyContent="space-between"
              alignItems="center"
              width="100%"
            >
              <BrandLogo logo={logo} title={title} />
              <BrandDetails
                title={title}
                clothingStyles={clothingStyles}
                location={location}
                price={price}
                website={website}
              />
            </Pane>
          </Pane>
        );
      })}
    </div>
  );
}
