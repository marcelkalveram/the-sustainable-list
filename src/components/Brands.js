import React from 'react';
import { Pane, Link, Heading, Text } from 'evergreen-ui';

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
