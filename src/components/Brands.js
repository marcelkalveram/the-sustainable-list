import React from 'react';
import { Pane, Link, Heading, Text } from 'evergreen-ui';
import ReactTooltip from 'react-tooltip';
import { majorScale } from 'evergreen-ui/commonjs/scales';

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
    <div className="brands-container">
      {filtered.map(brand => (
        <Pane
          key={brand.sys.id}
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
          <div className="brand-content">
            <Link
              textDecoration="none"
              target="_blank"
              href={brand.fields.website}
            >
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
              </Pane>
            )}
          </div>
        </Pane>
      ))}
    </div>
  );
}
