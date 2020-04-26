import React from 'react';

import { Layout } from '../components/Layout/Layout';
import { BackgroundImage } from '../components/Content/BackgroundImage/BackgroundImage';
import { Container } from '../components/Content/Container/Container';
import { ContentAbout } from '../components/Content/ContentAbout/ContentAbout';
import { ContentTeam } from '../components/Content/ContentTeam/ContentTeam';

import { NextSeo } from 'next-seo';

export default function About() {
  return (
    <>
      <NextSeo
        title="the sustainable list - about the project"
        description="A curated online list of ethical fashion brands from all over the world, featuring feature brands that do less harm to the planet."
        canonical="https://thesustainablelist.com/about"
      />
      <Layout>
        <Container>
          <ContentAbout />
          <ContentTeam />
        </Container>
        <BackgroundImage />
      </Layout>
    </>
  );
}
