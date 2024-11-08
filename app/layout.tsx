import "./global.css";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Metadata } from "next";
import React from "react";

import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";

export const metadata: Metadata = {
  title: "All the good fashion brands at a glance | the sustainable list",
  description:
    "A curated list of ethical fashion brands from all over the world. We support companies that produce good looking products while doing less harm to the planet.",
  openGraph: {
    type: "website",
    url: "https://thesustainablelist.com/",
    title: "The Sustainable List",
    description:
      "A curated list of ethical fashion brands from all over the world. We support companies that produce good looking products while doing less harm to the planet.",
    images: [
      {
        url: "https://thesustainablelist.com/og-sustainable-fashion-image-man-woman.jpg",
        width: 1220,
        height: 420,
        alt: "sustainable fashion shirts on hangers",
      },
    ],
  },
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
