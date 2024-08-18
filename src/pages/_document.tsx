import React from "react";
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from "next/document";
import { extractStyles } from "evergreen-ui";

interface MyDocumentProps extends DocumentInitialProps {
  css: string;
  hydrationScript: JSX.Element;
}

export default class MyDocument extends Document<MyDocumentProps> {
  static async getInitialProps(ctx: DocumentContext): Promise<MyDocumentProps> {
    const initialProps = await Document.getInitialProps(ctx);
    const { css, hydrationScript } = extractStyles();
    return {
      ...initialProps,
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
