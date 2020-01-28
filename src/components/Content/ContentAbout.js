import React from 'react';
import Link from 'next/link';
import { Heading, Paragraph, Pane, minorScale, majorScale } from 'evergreen-ui';
import { colors } from '../../config/constants';

import { certificatesMap } from '../../data/certificates';

export const ContentAbout = () => (
  <Pane width="50%" paddingRight="10%">
    <Heading size={700} color={colors.secondary} paddingBottom={minorScale(6)}>
      About the project
    </Heading>
    <Pane color={colors.secondary} marginBottom={majorScale(4)}>
      <Paragraph fontWeight={700} marginBottom={minorScale(4)}>
        the sustainable list is a curated list of ethical fashion brands from
        all over the world. These brands produce good-looking, quality products
        while doing less harm to the planet.
      </Paragraph>
      <Paragraph marginBottom={minorScale(4)}>
        We choose brands that work with recycled materials, work towards a more
        responsible supply chain and contribute to a more sustainable, greener
        future.
      </Paragraph>
      <Paragraph marginBottom={minorScale(7)}>
        Many of them have been recognised for their work towards sustainability
        and certificed by associations like{' '}
        <a href="">GOTS (Global Organic Textile Standard)</a>. Others
        participate in movements like <a href="">1% For The Planet</a> to give
        back part of their margins to non-profit organisations.
      </Paragraph>

      <Paragraph marginBottom={minorScale(5)}>
        {Object.keys(certificatesMap).map(certificate => (
          <img
            alt={`${certificate.title} badge`}
            width={50}
            style={{
              marginRight: majorScale(2),
            }}
            src={certificatesMap[certificate].image}
          />
        ))}
      </Paragraph>

      <Paragraph marginBottom={minorScale(4)}> </Paragraph>
      <Paragraph>
        With this project, we want to help increase visibility of these brands
        to make it easier for people to make the right choice the next time they
        want to go shopping. Keep in mind though that the best choice as a
        responsible consumer is to not buy at all .
      </Paragraph>
      <Paragraph></Paragraph>
    </Pane>
  </Pane>
);
