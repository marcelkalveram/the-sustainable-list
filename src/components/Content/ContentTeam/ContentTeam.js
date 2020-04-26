import React from 'react';
import { Heading, minorScale, majorScale } from 'evergreen-ui';
import { colors } from '../../../config/constants';
import { TeamMember } from '../TeamMember/TeamMember';
import { Section } from '../Section/Section';

export const ContentTeam = () => (
  <Section noPadding>
    <Heading
      size={700}
      color={colors.secondary}
      paddingBottom={minorScale(7)}
      borderBottom={`1px solid ${colors.grey}`}
      marginBottom={majorScale(3)}
    >
      Who we are
    </Heading>

    <TeamMember
      image="/who-we-are-noah.jpg"
      name="Noah"
      role="Visionary"
      description="Noah is our main source of inspiration. Though he doesn't actively contribute to the project yet, he has reinforced our thinking about the future of his generation and why we want to contribute to becoming a more sustainable society."
    />
    <TeamMember
      image="/who-we-are-andreea.png"
      name="Andreea"
      role="Strategy & Content"
      description="Andreea has always loved fashion. With the fashion industry's bad practices becoming more apparent though, she started turning her attention towards sustainability and creating positive change. As the main initiator of the project, she's continuously filling this site with new content."
    />
    <TeamMember
      image="/who-we-are-marcel.jpg"
      name="Marcel"
      role="Design & Development"
      description="With a background in computer science, Marcel uses his skills to bring all of the team's ideas to life and turn them into actual layouts and code. Even though not his main craft, he's also got a soft spot for UX, design, and creative entrepreneurship."
    />
  </Section>
);
