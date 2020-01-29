import React from 'react';
import { Heading, Pane, minorScale } from 'evergreen-ui';
import { colors } from '../../../config/constants';
import { TeamMember } from '../TeamMember/TeamMember';
import { className, styles } from './styles';

export const ContentTeam = () => (
  <>
    <Pane
      className={`content-team ${className}`}
      width="50%"
      paddingRight="10%"
    >
      <Heading
        size={700}
        color={colors.secondary}
        paddingBottom={minorScale(7)}
      >
        Who we are
      </Heading>

      <TeamMember
        image="/who-we-are-noah.jpg"
        name="Noah"
        role="Visionary"
        description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua."
      />
      <TeamMember
        image="/who-we-are-andreea.png"
        name="Andreea"
        role="Ideas & Content"
        description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua."
      />
      <TeamMember
        image="/who-we-are-marcel.jpg"
        name="Marcel"
        role="Design & Development"
        description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua."
      />
    </Pane>
    {styles}
  </>
);
