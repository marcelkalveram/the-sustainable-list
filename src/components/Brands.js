import React from 'react';
import {
  Badge,
  Pane,
  Link,
  Heading,
  Text,
  Paragraph,
  SearchInput,
  SegmentedControl,
  minorScale,
} from 'evergreen-ui';
import Place from '../images/place.svg';
import { majorScale } from 'evergreen-ui/commonjs/scales';

const getPrice = () => {
  const price = Math.random();
  return (
    <>
      <Text color="#7B8B9A" size={300}>
        $
      </Text>
      <Text color={price > 0.5 ? '#7B8B9A' : '#C7CED4'} size={300}>
        $
      </Text>
      <Text color={price > 0.8 ? '#7B8B9A' : '#C7CED4'} size={300}>
        $
      </Text>
    </>
  );
};

const getStyleColor = style => {
  switch (style) {
    case 'casual':
      return '#D2EEF3';
      break;
    case 'sporty':
      return '#FAE2E2';
      break;
    case 'surf':
      return '#DDEBF7';
      break;
    case 'yoga':
      return '#EAE7F8';
      break;
    case 'activewear':
      return '#D4EEE2';
      break;
    case 'wedding':
      return '#FFFFFF';
      break;
    case 'elegant':
      return '#FFFFFF';
      break;
  }
  return '#EDF0F2';
};

export function Brands(props) {
  const filtered = props.brands.filter(brand => {
    const matches = [];

    props.criteriaMap.forEach((criteria, index) => {
      matches[index] = props.selected[criteria.name].length === 0;
      if (!brand.fields[criteria.contentfulField]) {
        return;
      }
      brand.fields[criteria.contentfulField].forEach(field => {
        if (typeof field === 'string') {
          if (props.selected[criteria.name].includes(field)) {
            matches[index] = true;
          }
        } else if (props.selected[criteria.name].includes(field.fields.slug)) {
          matches[index] = true;
        }
      });
    });
    return matches.every(match => match);
  });

  return (
    <div className="main-container">
      <div className="sort-container">
        {/* <SegmentedControl
          name="button-size"
          width={100}
          value="a-z"
          options={[{ label: 'A-Z', value: 'a-z' }, { label: 'Z-A' }]}
        />
        <SegmentedControl
          name="button-size"
          width={100}
          value="a-z"
          options={[{ label: '$$$', value: '1' }, { label: '$' }]}
        /> */}
        <Paragraph size={300}>
          <Text size={300} color="#7B8B9A">
            Sort by:
          </Text>{' '}
          <Badge>A-Z </Badge> <Badge>Price (ascending)</Badge>
        </Paragraph>
        <SearchInput placeholder="Search by name..." />
      </div>
      <div className="brands-container">
        {filtered.map(brand => (
          <Pane
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
              height="76px"
              overflow="hidden"
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
                <img
                  alt={`${brand.fields.title} logo`}
                  src={brand.fields.logo.fields.file.url}
                  width="64px"
                />
              )}
            </Pane>
            <Pane display="flex" flexDirection="column">
              <Link
                textDecoration="none"
                target="_blank"
                href={brand.fields.website}
              >
                <Heading>{brand.fields.title}</Heading>
              </Link>
              <Pane marginTop={minorScale(2)}>
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
                {getPrice()}
                <Text color="#7B8B9A" size={300} paddingLeft={majorScale(1)}>
                  ·
                </Text>
                <Text size={300} paddingLeft={majorScale(1)} color="#7B8B9A">
                  Berlin, Germany
                </Text>
                {/* </Paragraph> */}
              </Pane>
            </Pane>
          </Pane>
        ))}
      </div>
    </div>
  );
}
