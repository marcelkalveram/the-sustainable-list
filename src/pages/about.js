import React from 'react';

import { Layout } from '../components/Layout/Layout';
import { BackgroundImage } from '../components/Content/BackgroundImage/BackgroundImage';
import { Container } from '../components/Content/Container/Container';
import { ContentAbout } from '../components/Content/ContentAbout/ContentAbout';
import { ContentTeam } from '../components/Content/ContentTeam/ContentTeam';

export default function About() {
  return (
    <>
      <BackgroundImage />
      <Layout>
        <Container>
          <ContentAbout />
          <ContentTeam />
        </Container>
      </Layout>
    </>
  );
}
