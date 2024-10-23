import React from "react";

import { Container } from "components/content/Container/Container";

import { ContentAbout } from "./components/ContentAbout/ContentAbout";
import { ContentTeam } from "./components/ContentTeam/ContentTeam";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | the sustainable list",
  description:
    "A curated online list of ethical fashion brands from all over the world, featuring feature brands that do less harm to the planet.",
};

const About = () => {
  return (
    <>
      <Container>
        <ContentAbout />
        <ContentTeam />
      </Container>
    </>
  );
};

export default About;
