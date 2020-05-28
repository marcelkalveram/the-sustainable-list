import React from 'react';
import fetch from 'isomorphic-unfetch';

import { Layout } from '../components/Layout/Layout';
import { BackgroundImage } from '../components/Content/BackgroundImage/BackgroundImage';
import { Container } from '../components/Content/Container/Container';

import { NextSeo } from 'next-seo';

function Terms({ content }) {
  return (
    <>
      <NextSeo
        title="The Sustainable List - about the project"
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

Terms.getInitialProps = async (ctx) => {
  const res = await fetch(
    'https://www.iubenda.com/api/terms-and-conditions/68845143',
  );
  const json = await res.json();
  return { content: json.content };
};

export default Terms;
