import React from "react";

import { A } from "components/content/A/A";
import { Article } from "components/content/Article/Article";
import { H2 } from "components/content/H2/H2";
import { Paragraph } from "components/content/Paragraph/Paragraph";
import { Section } from "components/content/Section/Section";

import ContentAboutCertificates from "./ContentAboutCertificates/ContentAboutCertificates";

export const ContentAbout = () => (
  <Section>
    <H2>About the project</H2>
    <div style={{ marginBottom: "32px" }}>
      <Article>
        <Paragraph>
          <b>
            The Sustainable List is a curated online list of ethical fashion
            brands from all over the world. We feature brands that produce
            good-looking, high-quality products, and do less harm to the planet.
          </b>
        </Paragraph>
        <Paragraph>
          We choose fashion brands that aim to work more sustainably by
          providing or developing a more responsible supply chain, fostering
          local production and fighting for decent worker conditions.
        </Paragraph>
        <Paragraph>
          Many of them have been recognised for their work towards
          sustainability and certified by associations like the{" "}
          <A href="https://global-standard.org/">
            GOTS (Global Organic Textile Standard)
          </A>
          . Others participate in movements like{" "}
          <A href="https://www.onepercentfortheplanet.org/">
            1% For The Planet
          </A>{" "}
          to give back part of their margins to non-profit organisations.
        </Paragraph>
        <Paragraph>
          The following certificates appear throughout our list:
        </Paragraph>
      </Article>
      <ContentAboutCertificates />
      <Paragraph>
        With this platform, we want to make it easier for people interested in
        fashion and sustainability to find brands that do good and contribute to
        the development of a more responsible and sustainable fashion industry.
      </Paragraph>
    </div>
  </Section>
);
