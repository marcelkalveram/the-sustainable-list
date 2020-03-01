import React from 'react';
import { Heading, Paragraph, Pane, minorScale, majorScale } from 'evergreen-ui';
import { colors } from '../../../config/constants';
import { Section } from '../Section/Section';
import { certificatesMap } from '../../../data/certificates';

export const ContentAbout = () => (
  <Section>
    <Heading
      size={700}
      color={colors.secondary}
      paddingBottom={minorScale(7)}
      borderBottom={`1px solid ${colors.grey}`}
      marginBottom={majorScale(3)}
    >
      About the project
    </Heading>
    <Pane color={colors.secondary} marginBottom={majorScale(4)}>
      <Paragraph fontWeight={700} marginBottom={minorScale(4)}>
        the sustainable list is a curated list of ethical fashion brands from
        all over the world. Brands that produce good-looking, high-quality
        products while doing less harm to the planet.
      </Paragraph>
      <Paragraph marginBottom={minorScale(4)}>
        We choose fashion brands that work with recycled materials, strive for a
        more responsible supply chain and contribute to a greener and more
        sustainable lifespan of their products.
      </Paragraph>
      <Paragraph marginBottom={minorScale(7)}>
        Many of them have been recognised for their work towards sustainability
        and certificed by associations like{' '}
        <a href="">GOTS (Global Organic Textile Standard)</a>. Others
        participate in movements like <a href="">1% For The Planet</a> to give
        back part of their margins to non-profit organisations.
      </Paragraph>
      <Paragraph marginBottom={minorScale(7)}>
        The following certificates and endorsements appear throughout our list:
      </Paragraph>
      <Paragraph
        marginBottom={minorScale(5)}
        display="flex"
        flexWrap="wrap"
        justifyContent="flex-start"
      >
        {Object.keys(certificatesMap).map(certificate => (
          <img
            alt={`${certificate.title} badge`}
            width={52}
            height={52}
            style={{
              display: 'inline-block',
              marginBottom: minorScale(3),
              marginRight: minorScale(3),
            }}
            src={certificatesMap[certificate].image}
          />
        ))}
      </Paragraph>
      <Paragraph marginBottom={minorScale(4)}>
        With this list list, we want to make it easier for people to find good
        fashion brands by providing a growing list of sustainabel alternatives
        to the world's most established fashion brands.
      </Paragraph>
    </Pane>
  </Section>
);
