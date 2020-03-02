import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { Header } from '../Header/Header';
import { body } from './styles';
import { colors } from '../../config/constants';

const DEFAULT_TITLE =
  'the sustainable list - all the good fashion brands at a glance';

export const Layout = ({
  children,
  title = DEFAULT_TITLE,
  fixed = false,
  showFilters,
}) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const lockViewport = fixed || showMobileMenu;

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag('js', new Date());
      gtag('config', 'UA-147040881-1', {
        page_location: window.location.href,
        page_path: window.location.pathname,
        page_title: window.document.title,
      });
    }
  }, []);

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

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-147040881-1"
        ></script>
      </Head>

      <div style={lockViewport ? { position: 'fixed' } : {}}>
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
            overflow: ${lockViewport ? 'hidden' : 'auto'};
          `}
      </style>
      <style jsx global>
        {body}
      </style>
    </>
  );
};
