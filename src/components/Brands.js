import React from 'react';
import {
  Pane,
  Link,
  Heading,
  Text,
  Tooltip,
  Position,
  Icon,
} from 'evergreen-ui';
import ReactTooltip from 'react-tooltip';
import { majorScale } from 'evergreen-ui/commonjs/scales';
import * as images from '../images';

export function Brands(props) {
  const filtered = props.brands.filter(brand => {
    let categoryMatch = props.selected.category.length === 0;

    if (brand.fields.category) {
      brand.fields.category.forEach(category => {
        if (props.selected.category.includes(category)) {
          categoryMatch = true;
        }
      });
    }

    let typeMatch = props.selected.type.length === 0;

    if (brand.fields.clothingTypes) {
      brand.fields.clothingTypes.forEach(type => {
        if (props.selected.type.includes(type.fields.slug)) {
          typeMatch = true;
        }
      });
    }

    let styleMatch = props.selected.style.length === 0;

    if (brand.fields.clothingStyles) {
      brand.fields.clothingStyles.forEach(style => {
        if (props.selected.style.includes(style.fields.slug)) {
          styleMatch = true;
        }
      });
    }

    let certificateMatch = props.selected.certificates.length === 0;

    if (brand.fields.certificates) {
      brand.fields.certificates.forEach(certificate => {
        if (props.selected.certificates.includes(certificate.fields.slug)) {
          certificateMatch = true;
        }
      });
    }

    return categoryMatch && typeMatch && styleMatch && certificateMatch;
  });

  return (
    <div className="brands-container">
      {filtered.map(brand => (
        <Pane
          background="tint1"
          display="flex"
          justifyContent="flex-start"
          alignItems="center"
          textAlign="left"
        >
          <Pane
            display="flex"
            justifyContent="center"
            alignItems="center"
            width="76px"
            height="76px"
            borderRadius="50%"
            marginLeft="32px"
            marginRight="32px"
            background="#FFF"
            padding="12px"
            borderWidth="1px"
            borderStyle="dashed"
            borderColor="#E4E7EB"
          >
            {brand.fields.logo && brand.fields.logo.fields && (
              <img src={brand.fields.logo.fields.file.url} width="64px" />
            )}
          </Pane>
          <div class="brand-content">
            <Link target="_blank" href={brand.fields.website}>
              <Heading>{brand.fields.title}</Heading>
            </Link>
            {brand.fields.clothingStyles && (
              <Text size={300} color="#A6B1BB">
                {brand.fields.clothingStyles
                  .map(style => style.fields.title)
                  .join(', ')}
              </Text>
            )}
            {brand.fields.certificates && (
              <Pane marginTop={majorScale(1)}>
                <ReactTooltip effect="solid" />
                {brand.fields.certificates
                  .map(cert => cert.fields.slug)
                  .includes('global-recycled-standard-grs') && [
                  <img
                    data-tip="Global Recycled Standard"
                    style={{
                      marginRight: majorScale(1),
                    }}
                    width={20}
                    height={20}
                    src={images.badgeGrs}
                  />,
                ]}
                {brand.fields.certificates
                  .map(cert => cert.fields.slug)
                  .includes('fsc-certified-rubber') && (
                  <img
                    data-tip="FSC Certified Rubber"
                    style={{ marginRight: majorScale(1) }}
                    width={20}
                    height={20}
                    src={images.badgeFsc}
                  />
                )}
                {brand.fields.certificates
                  .map(cert => cert.fields.slug)
                  .includes('fair-wear-foundation') && (
                  <img
                    data-tip="Fair Wear Foundation"
                    style={{ marginRight: majorScale(1) }}
                    width={20}
                    height={20}
                    src={images.badgeFwf}
                  />
                )}
                {brand.fields.certificates
                  .map(cert => cert.fields.slug)
                  .includes('oekotex-standard-100') && (
                  <img
                    data-tip="Oekotex Standard 100"
                    style={{ marginRight: majorScale(1) }}
                    width={20}
                    height={20}
                    src={images.badgeOtx}
                  />
                )}
                {brand.fields.certificates
                  .map(cert => cert.fields.slug)
                  .includes('soil-association') && (
                  <img
                    data-tip="Soil Association"
                    style={{ marginRight: majorScale(1) }}
                    width={20}
                    height={20}
                    src={images.badgeSas}
                  />
                )}
                {brand.fields.certificates
                  .map(cert => cert.fields.slug)
                  .includes('global-organic-textile-standard-gots') && (
                  <img
                    data-tip="Global Organic Textile Standard"
                    style={{ marginRight: majorScale(1) }}
                    width={20}
                    height={20}
                    src={images.badgeGot}
                  />
                )}
                {brand.fields.certificates
                  .map(cert => cert.fields.slug)
                  .includes('peta-approved-vegan') && (
                  <img
                    data-tip="Peta Approved Vegan"
                    style={{ marginRight: majorScale(1) }}
                    width={20}
                    height={20}
                    src={images.badgePta}
                  />
                )}
                {brand.fields.certificates
                  .map(cert => cert.fields.slug)
                  .includes('1-for-the-planet') && (
                  <img
                    data-tip="1% For The Planet"
                    style={{ marginRight: majorScale(1) }}
                    width={20}
                    height={20}
                    src={images.badgeOne}
                  />
                )}
                {brand.fields.certificates
                  .map(cert => cert.fields.slug)
                  .includes('certified-organic-cotton') && (
                  <img
                    data-tip="Certified Organic Cotton"
                    style={{ marginRight: majorScale(1) }}
                    width={20}
                    height={20}
                    src={images.badgeCoc}
                  />
                )}
                {brand.fields.certificates
                  .map(cert => cert.fields.slug)
                  .includes('supports-environmental-organisation') && (
                  <img
                    data-tip="Supports Environmental Organizations"
                    style={{ marginRight: majorScale(1) }}
                    width={20}
                    height={20}
                    src={images.badgeEnv}
                  />
                )}
              </Pane>
            )}
            {/* {brand.fields.clothingTypes && (
              <Text size={300}>
                {brand.fields.clothingTypes.map(type => (
                  <span>{type.fields.title}, </span>
                ))}
              </Text>
            )} */}
          </div>
        </Pane>
      ))}
    </div>
  );
}
