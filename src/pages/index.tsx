import React, { ReactElement, useReducer } from "react";

// data
import data from "../../public/data/index.json";
import criteriaMap from "../../public/shared/criteriaMap";
import { filterBrands } from "../helpers/filter";
import { sortByAz, sortByPrice } from "../helpers/sort";
import { actions, initialState, reducer } from "../store";

// UI
import { Layout } from "components/Layout/Layout";
import { Main } from "components/Main/Main";
import { Sort } from "components/Sort/Sort";
import { Brands } from "components/Brands/Brands";
import { Filters } from "components/Filters/Filters";
import { BackgroundImage } from "components/Content/BackgroundImage/BackgroundImage";

import { NextSeo } from "next-seo";
import type { Brand } from "types";
import posthog from "posthog-js";

const Index = (): ReactElement => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // filter
  let brands: Brand[] = data.brands.filter((brand: Brand) =>
    filterBrands(brand, state.selected),
  ) as unknown as Brand[];

  // search for filter
  if (state.searchFor !== "") {
    brands = brands.filter((brand: Brand) =>
      brand.fields.title.toLowerCase().includes(state.searchFor.toLowerCase()),
    );
  }
  // sort by price
  if (state.sortBy.price !== null) {
    brands.sort((a: Brand, b: Brand) => sortByPrice(state, a, b));
  }

  // sort by az
  if (state.sortBy.az !== null) {
    brands.sort((a: Brand, b: Brand) => sortByAz(state, a, b));
  }

  const FiltersComponent: JSX.Element = (
    <Filters
      criteriaMap={criteriaMap.data}
      filters={state.filters}
      selected={state.selected}
      setSelected={(selected: string[]) =>
        dispatch({ type: actions.SET_SELECTED, payload: selected })
      }
      clearSelected={() => dispatch({ type: actions.CLEAR_SELECTED })}
      showFilters={state.showFilters}
      setShowFilters={(show: boolean) =>
        dispatch({ type: actions.SET_SHOW_FILTERS, payload: show })
      }
    />
  );

  const SortComponent: JSX.Element = (
    <Sort
      searchFor={state.searchFor}
      setSearchFor={(searchTerm: string) =>
        dispatch({ type: actions.SET_SEARCH_FOR, payload: searchTerm })
      }
      totalCount={state.brandsCount}
      count={brands.length}
      sortBy={state.sortBy}
      setSortBy={(sortBy: { price: boolean | null; az: boolean | null }) =>
        dispatch({ type: actions.SET_SORT_BY, payload: sortBy })
      }
      setShowFilters={(show: boolean) =>
        dispatch({ type: actions.SET_SHOW_FILTERS, payload: show })
      }
    />
  );

  return (
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
      <Layout fixed={state.showFilters} showFilters={state.showFilters}>
        {FiltersComponent}
        <Main>
          {SortComponent}
          <Brands brands={brands} />
        </Main>
        <BackgroundImage />
      </Layout>
    </>
  );
};

export default Index;
