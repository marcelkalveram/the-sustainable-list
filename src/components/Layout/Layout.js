import React from 'react';
import Head from 'next/head';
import { Header } from '../Header/Header';
import { body } from './styles';

const DEFAULT_TITLE =
  'the sustainable list - all the good fashion brands at a glance';

export const Layout = ({
  children,
  title = DEFAULT_TITLE,
  fixed = false,
  showFilters,
  showMobileMenu,
  setShowMobileMenu,
}) => {
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
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <div style={fixed ? { position: 'fixed', overflow: 'hidden' } : {}}>
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
            overflow: ${fixed ? 'hidden' : 'auto'};
          `}
      </style>
      <style jsx global>
        {body}
      </style>
    </>
  );
};
