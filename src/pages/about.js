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
        description="We choose brands that work with recycled materials, work towards a more
        responsible supply chain and contribute to a more sustainable, greener
        future."
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
