import React from "react";

import { H2 } from "components/content/H2/H2";
import { Section } from "components/content/Section/Section";

import { ContentTeamMember } from "./ContentTeamMember/ContentTeamMember";

export const ContentTeam = () => (
  <Section noPadding>
    <H2>Who we are</H2>

    <ContentTeamMember
      image="/who-we-are/who-we-are-noah.jpg"
      name="Noah"
      role="CEO & Visionary"
      description="Noah is our main source of inspiration. Though he doesn't actively contribute to the project yet, he has reinforced our thinking about the future of his generation and why we want to contribute to becoming a more sustainable society."
    />
    <ContentTeamMember
      image="/who-we-are/who-we-are-andreea.jpg"
      name="Andreea"
      role="Strategy & Content"
      description="Andreea has always loved fashion. With the fashion industry's bad practices becoming more apparent though, she started turning her attention towards sustainability and creating positive change. As the main initiator of the project, she's continuously filling this site with new content."
    />
    <ContentTeamMember
      image="/who-we-are/who-we-are-marcel.jpg"
      name="Marcel"
      role="Design & Development"
      description="With a background in computer science, Marcel uses his skills to bring all of the team's ideas to life and turn them into actual layouts and code. Even though not his main craft, he's also got a soft spot for UX, design, and creative entrepreneurship."
    />
  </Section>
);
