import React from 'react';
import fetch from 'isomorphic-unfetch';

import { Layout } from '../components/Layout/Layout';
import { BackgroundImage } from '../components/Content/BackgroundImage/BackgroundImage';
import { Container } from '../components/Content/Container/Container';

import { NextSeo } from 'next-seo';

function Privacy({ content }) {
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
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </Container>
        <BackgroundImage />
      </Layout>
    </>
  );
}

Privacy.getInitialProps = async ctx => {
  const res = await fetch(
    'https://www.iubenda.com/api/privacy-policy/68845143/only-legal',
  );
  const json = await res.json();
  return { content: json.content };
};

export default Privacy;
