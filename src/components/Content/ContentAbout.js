import React from 'react';
import { Heading, Paragraph, Pane, minorScale, majorScale } from 'evergreen-ui';
import { colors } from '../../config/constants';

import { certificatesMap } from '../../data/certificates';

export const ContentAbout = () => (
  <Pane width="50%" paddingRight="10%">
    <Heading size={700} color={colors.secondary} paddingBottom={minorScale(6)}>
      About the project
    </Heading>
    <Pane color={colors.secondary} marginBottom={majorScale(4)}>
      <Paragraph marginBottom={minorScale(4)}>
        the sustainable list is a platform that showcases ethical fashion brand
        from all over the world. The fashion industry is one of the
        most-polluting sectors on the planet.
      </Paragraph>
      <Paragraph marginBottom={minorScale(5)}>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet.
      </Paragraph>

      <Paragraph marginBottom={minorScale(4)}>
        {Object.keys(certificatesMap).map(certificate => (
          <img
            alt="Certificate badge"
            width={50}
            style={{
              marginRight: majorScale(2),
            }}
            src={certificatesMap[certificate].image}
          />
        ))}
      </Paragraph>

      <Paragraph marginBottom={minorScale(4)}>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua.
      </Paragraph>
      <Paragraph>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore.
      </Paragraph>
    </Pane>
  </Pane>
);
