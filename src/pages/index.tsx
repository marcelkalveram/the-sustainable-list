import React, { type ReactElement } from "react";

import { Main } from "components/Main/Main";
import { Sort } from "components/Sort/Sort";
import { Brands } from "components/Brands/Brands";
import { Filters } from "components/Filters/Filters";
import { BackgroundImage } from "components/Content/BackgroundImage/BackgroundImage";

import { NextSeo } from "next-seo";

const Index = (): ReactElement => (
  <>
    <NextSeo
      title="The Sustainable List - all the good fashion brands at a glance"
      description="A curated list of ethical fashion brands from all over the world. We support companies that produce good looking products while doing less harm to the planet."
      canonical="https://thesustainablelist.com/"
      openGraph={{
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
      }}
    />

    <Filters />
    <Main>
      <Sort />
      <Brands />
    </Main>
    <BackgroundImage />
  </>
);

export default Index;
