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
        title="the sustainable list - newsletter"
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
              Subscribe to our newsletter
            </Heading>
            <Paragraph marginBottom={minorScale(4)}>
              <b>
                We send out a monthly newsletter to people who are passionate
                about the world of sustainable fashion. It is a carefully
                crafted list with lots of useful content on:{' '}
              </b>
              <UnorderedList
                marginTop={majorScale(3)}
                marginLeft={majorScale(3)}
                // size={500}
              >
                <ListItem icon="align-left">
                  news and articles from the world of sustainable brands
                </ListItem>
                <ListItem icon="social-media">
                  insights into the fashion industry's supply chains
                </ListItem>
                <ListItem icon="lightbulb">
                  best practices and ideas for a sustainable lifestyle
                </ListItem>
                <ListItem icon="tag">discounts and promotions</ListItem>
              </UnorderedList>
            </Paragraph>
          </Section>
          <Section>
            <Pane id="mc_embed_signup" marginTop={majorScale(10)}>
              <form
                action="https://thesustainablelist.us4.list-manage.com/subscribe/post?u=8055fef5a87aa785b5bdee0b6&amp;id=f995028b3f"
                method="post"
                id="mc-embedded-subscribe-form"
                name="mc-embedded-subscribe-form"
                className="validate"
                target="_blank"
                noValidate
              >
                <Pane className="mc-field-group" marginBottom={majorScale(3)}>
                  <Heading
                    size="400"
                    color={colors.secondary}
                    paddingBottom={minorScale(2)}
                    fontWeight="bold"
                  >
                    Your e-mail address
                  </Heading>
                  <TextInput
                    label="Email Address"
                    labelFor="mce-EMAIL"
                    type="email"
                    name="EMAIL"
                    className="required email"
                    id="mce-EMAIL"
                    style={{
                      backgroundColor: '#F3F3F3',
                      boxShadow: 'none',
                      // width: '50%',
                    }}
                    placeholder="iam@sustainable.com"
                  />
                </Pane>
                <Pane
                  id="mergeRow-gdpr"
                  className="mergeRow gdpr-mergeRow content__gdprBlock mc-field-group"
                  marginBottom={majorScale(1)}
                >
                  <Pane className="content__gdpr" paddingBottom={majorScale(2)}>
                    <Heading
                      size="400"
                      color={colors.secondary}
                      paddingBottom={minorScale(2)}
                    >
                      Marketing Permissions
                    </Heading>
                    <Paragraph>
                      the sustainable list will use the information you provide
                      on this form to be in touch with you and to provide
                      updates and marketing. Please confirm that you want to
                      receive our newsletter:
                    </Paragraph>
                    <fieldset
                      className="mc_fieldset gdprRequired mc-field-group"
                      name="interestgroup_field"
                      style={{ border: 0, padding: 0 }}
                    >
                      <Checkbox
                        label="Yes, I would like to receive the sustainable list newsletter"
                        type="checkbox"
                        id="gdpr_42720"
                        name="gdpr[42720]"
                        value={consent}
                        checked={consent === 'Y'}
                        onChange={e => setConsent(consent === 'N' ? 'Y' : 'N')}
                      />
                    </fieldset>
                    <Paragraph>
                      You can unsubscribe at any time by clicking the link in
                      the footer of our emails. For information about our
                      privacy practices, please visit our{' '}
                      <Link href="/privacy">privacy policy</Link>.
                    </Paragraph>
                  </Pane>
                  <Pane
                    className="content__gdprLegal"
                    paddingBottom={minorScale(2)}
                  >
                    <Heading
                      size="400"
                      color={colors.secondary}
                      paddingBottom={minorScale(2)}
                    >
                      We use Mailchimp as our marketing platform.
                    </Heading>

                    <Paragraph>
                      By clicking below to subscribe, you acknowledge that your
                      information will be transferred to Mailchimp for
                      processing.{' '}
                      <a href="https://mailchimp.com/legal/" target="_blank">
                        Learn more about Mailchimp's privacy practices here.
                      </a>
                    </Paragraph>
                  </Pane>
                </Pane>
                <Pane id="mce-responses" className="clear">
                  <Pane
                    className="response"
                    id="mce-error-response"
                    style={{ display: 'none' }}
                  ></Pane>
                  <Pane
                    className="response"
                    id="mce-success-response"
                    style={{ display: 'none' }}
                  ></Pane>
                </Pane>
                <Pane
                  style={{ position: 'absolute', left: '-5000px' }}
                  aria-hidden="true"
                >
                  <input
                    type="text"
                    name="b_8055fef5a87aa785b5bdee0b6_f995028b3f"
                    tabIndex="-1"
                    value=""
                  />
                </Pane>
                <Pane>
                  <Button
                    appearance="primary"
                    type="submit"
                    value="Subscribe"
                    name="subscribe"
                    id="mc-embedded-subscribe"
                    height={32}
                  >
                    Subscribe
                  </Button>
                </Pane>
              </form>
            </Pane>
          </Section>
        </Container>
        <BackgroundImage />
      </Layout>
    </>
  );
}
