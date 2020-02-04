import React from 'react';
import { Heading, minorScale } from 'evergreen-ui';
import { colors } from '../../../config/constants';
import { TeamMember } from '../TeamMember/TeamMember';
import { Section } from '../Section/Section';

export const ContentTeam = () => (
  <Section>
    <Heading size={700} color={colors.secondary} paddingBottom={minorScale(7)}>
      Who we are
    </Heading>

    <TeamMember
      image="/who-we-are-noah.jpg"
      name="Noah"
      role="Visionary"
      description="Noah is our main source of inspiration (and happiness!). Though he doesn't actively contribute to the project (yet), he's the reason why we care so much about the future of the next generation and want to contribute to the world becoming a better place."
    />
    <TeamMember
      image="/who-we-are-andreea.png"
      name="Andreea"
      role="Ideas & Content"
      description="Without a doubt the most qualified person on the team (with a Ph.D. in Marketing & Management), Andreea takes care the most important tasks. She is responsible for making this project happen and is continuously filling this site with amazing content. "
    />
    <TeamMember
      image="/who-we-are-marcel.jpg"
      name="Marcel"
      role="Design & Development"
      description="With a background in computer science, Marcel uses his skills to bring all of the ideas to life and turn them into code. Even though not his main craft, he's also curious about UX, design and online business and working on side hustles like this."
    />
  </Section>
);
