import React, { type ReactNode, type ReactElement, useState } from "react";
import Head from "next/head";
import { Header } from "../Header/Header";
import { body } from "./styles";
import { colors } from "theme/constants";

const DEFAULT_TITLE =
  "The Sustainable List - all the good fashion brands at a glance";

interface LayoutProps {
  children: ReactNode;
  title?: string;
  fixed?: boolean;
  showFilters?: boolean;
}

export const Layout = ({
  children,
  title = DEFAULT_TITLE,
  fixed = false,
  showFilters = false,
}: LayoutProps): ReactElement => {
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);
  const lockViewport: boolean = fixed || showMobileMenu;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />

        <meta
          name="viewport"
          content="initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/safari-pinned-tab.svg"
          color={colors.primary}
        />
        <meta name="msapplication-TileColor" content={colors.primary} />
        <meta name="theme-color" content={colors.white} />
      </Head>

      <div style={lockViewport ? { position: "fixed" } : {}}>
        <Header
          showFilters={showFilters}
          showMobileMenu={showMobileMenu}
          setShowMobileMenu={setShowMobileMenu}
        />
        {children}
      </div>
      <style jsx global>
        {`
          body {
            overflow: ${lockViewport ? "hidden" : "auto"};
          `}
      </style>
      <style jsx global>
        {body}
      </style>
    </>
  );
};
