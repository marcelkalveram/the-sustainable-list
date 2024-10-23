import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { ContactForm } from "components/content/ContactForm/ContactForm";
import { Container } from "components/content/Container/Container";
import { H2 } from "components/content/H2/H2";
import { Paragraph } from "components/content/Paragraph/Paragraph";
import { Section } from "components/content/Section/Section";

export const metadata: Metadata = {
  title: "Contact Us | the sustainable list",
  description:
    "We'd love to hear from you and know your thoughts! If you have any feedback, ideas or criticism, please don't hesitate to get in touch with us.",
};

const Contact = () => (
  <Container style={{ minHeight: "66vh" }}>
    <Section>
      <H2>Contact Us</H2>
      <Paragraph>
        We&apos;d love to hear from you and know your thoughts! If you have any
        feedback, ideas or criticism, please don&apos;t hesitate to get in touch
        with us. You can also follow us on social media to get the latest news.
      </Paragraph>
      <Paragraph>
        <Link href="https://www.instagram.com/thesustainablelist/">
          <Image
            alt="Instagram logo"
            src="/social/social-instagram.png"
            width="54"
            height="54"
          />
        </Link>
        <Link href="https://www.facebook.com/thesustainablelist">
          <Image
            alt="Facebook logo"
            src="/social/social-facebook.png"
            width="54"
            height="54"
          />
        </Link>
      </Paragraph>
      <Paragraph>
        If you want to help us move this project forward, feel free to join the
        discussion on Product Hunt:
      </Paragraph>
      <Paragraph>
        <a
          href="https://www.producthunt.com/posts/the-sustainable-list?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-the-sustainable-list"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=203103&theme=light"
            alt="the sustainable list - a curated list of sustainable fashion brands | Product Hunt Embed"
            width="250"
            height="54"
          />
        </a>
      </Paragraph>
    </Section>
    <Section>
      <H2>Drop us a message</H2>

      <ContactForm />
    </Section>
  </Container>
);

export default Contact;
