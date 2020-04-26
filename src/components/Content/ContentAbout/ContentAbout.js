import React from 'react';
import { Heading, Paragraph, Pane, minorScale, majorScale } from 'evergreen-ui';
import { colors } from '../../../config/constants';
import { Section } from '../Section/Section';
import { certificatesMap } from '../../../data/certificates';
import { className, styles } from './styles';

export const ContentAbout = () => (
  <Section className={`${className} content-about`}>
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
        the sustainable list is a curated online list of ethical fashion brands
        from all over the world. We feature brands that produce good-looking,
        high-quality products, and do less harm to the planet.
      </Paragraph>
      <Paragraph marginBottom={minorScale(4)}>
        We choose fashion brands that aim to work more sustainably by providing
        or developing a more responsible supply chain, fostering local
        production and fighting for decent worker conditions.
      </Paragraph>
      <Paragraph marginBottom={minorScale(7)}>
        Many of them have been recognised for their work towards sustainability
        and certified by associations like the{' '}
        <a href="">GOTS (Global Organic Textile Standard)</a>. Others
        participate in movements like <a href="">1% For The Planet</a> to give
        back part of their margins to non-profit organisations.
      </Paragraph>
      <Paragraph marginBottom={minorScale(7)}>
        The following certificates appear throughout our list:
      </Paragraph>
      <Paragraph
        marginBottom={minorScale(5)}
        display="flex"
        flexWrap="wrap"
        justifyContent="flex-start"
        // maxWidth={540}
        className="certificates-grid"
      >
        {Object.keys(certificatesMap).map((certificate) => (
          <img
            alt={`${certificate.title} badge`}
            width={52}
            height={52}
            style={{
              display: 'inline-block',
              marginBottom: minorScale(4),
              marginRight: minorScale(4),
            }}
            src={certificatesMap[certificate].image}
          />
        ))}
      </Paragraph>
      <Paragraph marginBottom={minorScale(4)}>
        With this platform, we want to make it easier for people interested in
        fashion and sustainability to find brands that do good and contribute to
        the development of a more responsible and sustainable fashion industry.
      </Paragraph>
    </Pane>
    {styles}
  </Section>
);
