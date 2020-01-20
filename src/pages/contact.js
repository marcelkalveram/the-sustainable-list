import React from 'react';

import {
  Heading,
  Pane,
  TextInputField,
  Label,
  Textarea,
  minorScale,
  Button,
  majorScale,
  Paragraph,
} from 'evergreen-ui';
import { Layout } from '../components/Layout/Layout';
import { BackgroundImage } from '../components/Content/BackgroundImage/BackgroundImage';
import { Container } from '../components/Content/Container/Container';
import { colors } from '../config/constants';

export default function About() {
  return (
    <>
      <BackgroundImage />
      <Layout>
        <Container>
          <Pane width="50%" paddingRight="10%">
            <Heading
              size={700}
              color={colors.secondary}
              paddingBottom={minorScale(6)}
            >
              Contact us
            </Heading>
            <Paragraph marginBottom={minorScale(4)}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet.
            </Paragraph>
            <Paragraph>
              the sustainable list
              <br /> Calle Sagunto 108
              <br /> 46009 Valencia
            </Paragraph>
          </Pane>
          <Pane width="50%" paddingRight="10%">
            <Heading
              size={700}
              color={colors.secondary}
              paddingBottom={minorScale(6)}
            >
              Drop us a message
            </Heading>

            <TextInputField
              label="Your name"
              name="text-input-name"
              placeholder="John Doe"
            />
            <TextInputField
              label="Your e-mail address"
              name="text-input-name"
              placeholder="john@doe.com"
            />
            <Pane marginBottom={majorScale(3)}>
              <Label htmlFor="textarea-2" marginBottom={4} display="block">
                Your message
              </Label>
              <Textarea rows={7} placeholder="Let us know your thoughts..." />
            </Pane>

            <Button appearance="primary">Submit form</Button>
          </Pane>
        </Container>
      </Layout>
    </>
  );
}
