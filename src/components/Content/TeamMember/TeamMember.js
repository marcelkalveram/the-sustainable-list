import React from 'react';
import { Heading, Paragraph, Pane, minorScale, majorScale } from 'evergreen-ui';
import { colors } from '../../../config/constants';
import { className, styles } from './styles';

export const TeamMember = ({ image, name, role, description }) => (
  <>
    <Pane
      display="flex"
      marginBottom={majorScale(4)}
      className={`team-member ${className}`}
    >
      <img
        src={image}
        width={128}
        style={{
          borderRadius: '50%',
          marginRight: majorScale(3),
        }}
      />
      <Pane display="flex" flexDirection="column" marginTop={majorScale(3)}>
        <Heading
          size="500"
          color={colors.secondary}
          paddingBottom={minorScale(1)}
        >
          <b>{name}</b>
          <span
            style={{
              color: colors.secondary,
              paddingLeft: minorScale(1),
              opacity: 0.5,
            }}
          >
            ({role})
          </span>
        </Heading>
        <Paragraph>{description}</Paragraph>
      </Pane>
    </Pane>
    {styles}
  </>
);
