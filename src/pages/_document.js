import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { extractStyles } from "evergreen-ui";

export default class MyDocument extends Document {
  // runs once per page load
  static async getInitialProps({ renderPage }) {
    const page = await renderPage();
    const { css, hydrationScript } = extractStyles();
    return {
      ...page,
      css,
      hydrationScript,
    };
  }

  render() {
    const { css, hydrationScript } = this.props;
    return (
      <Html>
        <Head>
          <style dangerouslySetInnerHTML={{ __html: css }} />
        </Head>

        <body>
          <Main />
          {hydrationScript}
          <NextScript />
        </body>
      </Html>
    );
  }
}
