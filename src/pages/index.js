import React, { useReducer } from "react";

// data
import data from "/public/data/index.json";
import criteriaMap from "/public/shared/criteriaMap.json";
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

function Index() {
  const [state, dispatch] = useReducer(reducer, initialState);

  // filter
  let brands = data.brands.filter((brands) =>
    filterBrands(brands, state.selected),
  );

  // search for filter
  if (state.searchFor !== "") {
    brands = brands.filter((brand) =>
      brand.fields.title.toLowerCase().includes(state.searchFor.toLowerCase()),
    );
  }
  // sort by price
  if (state.sortBy.price !== null) {
    brands.sort((a, b) => sortByPrice(state, a, b));
  }

  // sort by az
  if (state.sortBy.az !== null) {
    brands.sort((a, b) => sortByAz(state, a, b));
  }

  const FiltersComponent = (
    <Filters
      criteriaMap={criteriaMap.data}
      filters={state.filters}
      selected={state.selected}
      setSelected={(selected) =>
        dispatch({ type: actions.SET_SELECTED, payload: selected })
      }
      clearSelected={() => dispatch({ type: actions.CLEAR_SELECTED })}
      showFilters={state.showFilters}
      setShowFilters={(show) =>
        dispatch({ type: actions.SET_SHOW_FILTERS, payload: show })
      }
    />
  );

  const SortComponent = (
    <Sort
      searchFor={state.searchFor}
      setSearchFor={(searchTerm) =>
        dispatch({ type: actions.SET_SEARCH_FOR, payload: searchTerm })
      }
      totalCount={state.brandsCount}
      count={brands.length}
      sortBy={state.sortBy}
      setSortBy={(sortBy) =>
        dispatch({ type: actions.SET_SORT_BY, payload: sortBy })
      }
      setShowFilters={(show) =>
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
}

export default Index;
