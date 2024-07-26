import React from "react";
import fetch from "isomorphic-unfetch";

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
  Alert,
  Link,
} from "evergreen-ui";
import { Layout } from "../components/Layout/Layout";
import { BackgroundImage } from "../components/Content/BackgroundImage/BackgroundImage";
import { Container } from "../components/Content/Container/Container";
import { Section } from "../components/Content/Section/Section";
import { colors } from "../config/constants";
import { Formik } from "formik";

import { NextSeo } from "next-seo";
import Image from "next/image";

const validateForm = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = "Please type in an email address";
  }
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.message || !values.message.trim()) {
    errors.message = "Please type in a message";
  }
  return errors;
};

const submitForm = async (values, { setSubmitting, setStatus }) => {
  const response = await fetch("/api/contact", {
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  });

  if (response.status !== 200) {
    return;
  }
  const responseValues = await response.json();
  if (responseValues.status === "success") {
    setSubmitting(false);
    setStatus({ success: true });
  }
};

export default function About() {
  return (
    <>
      <NextSeo
        title="The Sustainable List - contact us"
        description="We'd love to hear from you and know your thoughts! If you have any feedback, ideas or criticism, please don't hesitate to get in touch with us."
        canonical="https://thesustainablelist.com/contact"
      />
      <Layout>
        <Container minHeight="66vh">
          <Section>
            <Heading
              size={700}
              color={colors.secondary}
              paddingBottom={minorScale(6)}
            >
              Contact us
            </Heading>
            <Paragraph marginBottom={minorScale(4)}>
              We&apos;d love to hear from you and know your thoughts! If you
              have any feedback, ideas or criticism, please don&apos;t hesitate
              to get in touch with us. You can also follow us on social media to
              get the latest news.
            </Paragraph>
            <Paragraph marginBottom={minorScale(4)}>
              <Link
                display="inline-block"
                marginRight={majorScale(1)}
                href="https://www.instagram.com/thesustainablelist/"
              >
                <Image
                  alt="Instagram logo"
                  src="/social-instagram.png"
                  width="54"
                  height="54"
                  paddingright={majorScale(1)}
                />
              </Link>
              <Link
                display="inline-block"
                marginRight={majorScale(1)}
                href="https://www.facebook.com/thesustainablelist"
              >
                <Image
                  alt="Facebook logo"
                  src="/social-facebook.png"
                  width="54"
                  height="54"
                />
              </Link>
            </Paragraph>
            <Paragraph marginBottom={minorScale(4)}>
              If you want to help us move this project forward, feel free to
              join the discussion on Product Hunt:
            </Paragraph>
            <Paragraph marginBottom={minorScale(4)}>
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
            <Heading
              size={700}
              color={colors.secondary}
              paddingBottom={minorScale(6)}
            >
              Drop us a message
            </Heading>

            <Formik
              initialValues={{ name: "", email: "", message: "" }}
              validate={validateForm}
              onSubmit={submitForm}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                status,
              }) => (
                <>
                  {status && status.success && (
                    <Alert
                      marginBottom={majorScale(3)}
                      intent="success"
                      title={
                        "Your form has been submitted successfully. Thanks!"
                      }
                    />
                  )}

                  {!status && (
                    <form onSubmit={handleSubmit}>
                      <TextInputField
                        label="Your name"
                        name="name"
                        placeholder="John Doe"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                      />

                      <TextInputField
                        label="Your email"
                        name="email"
                        placeholder="John@Doe.com"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                      />
                      {errors.email && touched.email && (
                        <Alert
                          marginBottom={majorScale(3)}
                          intent="danger"
                          title={errors.email}
                        />
                      )}

                      <Pane marginBottom={majorScale(3)}>
                        <Label
                          htmlFor="textarea-2"
                          marginBottom={4}
                          display="block"
                        >
                          Your message
                        </Label>
                        <Textarea
                          name="message"
                          rows={7}
                          placeholder="Let us know your thoughts..."
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.message}
                        />
                        {errors.message && touched.message && (
                          <Alert
                            marginTop={majorScale(3)}
                            intent="danger"
                            title={errors.message}
                          />
                        )}
                      </Pane>
                      <Button
                        appearance="primary"
                        type="submit"
                        disabled={isSubmitting}
                      >
                        Submit form
                      </Button>
                    </form>
                  )}
                </>
              )}
            </Formik>
          </Section>
        </Container>
        <BackgroundImage />
      </Layout>
    </>
  );
}
