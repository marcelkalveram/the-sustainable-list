import React from 'react';
import { Pane, Link, Heading, Text, minorScale } from 'evergreen-ui';
import { majorScale } from 'evergreen-ui/commonjs/scales';

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
      <Text color="#7B8B9A" size={300}>
        $
      </Text>
      <Text color={price > 1 ? '#7B8B9A' : '#C7CED4'} size={300}>
        $
      </Text>
      <Text color={price > 2 ? '#7B8B9A' : '#C7CED4'} size={300}>
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

export function Brands(props) {
  return (
    <div className="brands-container">
      {props.brands.map(brand => (
        <Pane
          className="brand"
          key={brand.sys.id}
          background="#F9F9FB"
          display="flex"
          overflow="hidden"
          alignItems="center"
          textAlign="left"
        >
          <Pane
            display="flex"
            justifyContent="center"
            alignItems="center"
            width="76px"
            minWidth="76px"
            height="76px"
            overflow="hidden"
            borderRadius="50%"
            marginLeft="24px"
            marginRight="24px"
            background="#FFF"
            padding="8px"
            borderWidth="1px"
            borderStyle="dashed"
            borderColor="#E4E7EB"
          >
            {brand.fields.logo && brand.fields.logo.fields && (
              <img
                alt={`${brand.fields.title} logo`}
                src={brand.fields.logo.fields.file.url}
                width="64px"
              />
            )}
          </Pane>
          <Pane
            display="flex"
            flexDirection="column"
            overflow="hidden"
            paddingRight="8"
          >
            <Link
              textDecoration="none"
              target="_blank"
              href={brand.fields.website}
            >
              <Heading>{brand.fields.title}</Heading>
            </Link>
            <Pane overflow="auto" marginTop={minorScale(2)}>
              {brand.fields.clothingStyles &&
                brand.fields.clothingStyles.map(style => (
                  <Text
                    backgroundColor={getStyleColor(
                      style.fields.title.toLowerCase(),
                    )}
                    color="#7B8B9A"
                    borderRadius="3"
                    size={300}
                    marginRight={3}
                    padding={1}
                    paddingRight={3}
                    paddingLeft={3}
                  >
                    {style.fields.title.toLowerCase()}
                  </Text>
                ))}
            </Pane>
            <Pane marginTop={minorScale(1)}>
              {getPrice(brand.fields.price)}
              <Text color="#7B8B9A" size={300} paddingLeft={majorScale(1)}>
                ·
              </Text>
              <Text size={300} paddingLeft={majorScale(1)} color="#7B8B9A">
                {getLocation(brand.fields.location)}
              </Text>
              {/* </Paragraph> */}
            </Pane>
          </Pane>
        </Pane>
      ))}
    </div>
  );
}
