import React, { useState } from 'react';

import { Layout } from '../components/Layout/Layout';
import { BackgroundImage } from '../components/Content/BackgroundImage/BackgroundImage';
import { Container } from '../components/Content/Container/Container';
import {
  Button,
  Heading,
  Pane,
  Paragraph,
  TextInput,
  majorScale,
  minorScale,
  Checkbox,
  UnorderedList,
  ListItem,
  Link,
} from 'evergreen-ui';
import { Section } from '../components/Content/Section/Section';
import { NextSeo } from 'next-seo';
import { colors } from '../config/constants';

export default function Newsletter() {
  const [consent, setConsent] = useState('N');

  return (
    <>
      <NextSeo
        title="The Sustainable List - newsletter"
        description="We choose brands that work with recycled materials, work towards a more
        responsible supply chain and contribute to a more sustainable, greener
        future."
        canonical="https://thesustainablelist.com/about"
      />
      <Layout>
        <Container>
          <Section>
            <Heading
              size={700}
              color={colors.secondary}
              paddingBottom={minorScale(7)}
              borderBottom={`1px solid ${colors.grey}`}
              marginBottom={majorScale(3)}
            >
              Thanks for signing up!
            </Heading>
            <Section>
              <Pane id="mc_embed_signup">
                <Heading
                  size="400"
                  color={colors.secondary}
                  paddingBottom={minorScale(2)}
                >
                  We need to confirm your email address.
                </Heading>
                <Paragraph>
                  To complete the subscription process, please click the link in
                  the email we just sent you.
                </Paragraph>
              </Pane>
            </Section>
          </Section>
        </Container>
        <BackgroundImage />
      </Layout>
    </>
  );
}
