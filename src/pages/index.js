import React, { useMemo, useReducer } from 'react';

// data
import data from '../data';
import { criteriaMap } from '../config/criteriaMap';
import { filterBrands } from '../helpers/filter';
import { sortByAz, sortByPrice } from '../helpers/sort';
import { actions, initialState, reducer } from '../store';

// UI
import { Layout } from '../components/Layout/Layout';
import { Main } from '../components/Main/Main';
import { Sort } from '../components/Sort/Sort';
import { Brands } from '../components/Brands/Brands';
import { Filters } from '../components/Filters/Filters';
import { BackgroundImage } from '../components/Content/BackgroundImage/BackgroundImage';
import { Newsletter } from '../components/Newsletter/Newsletter';

import { NextSeo } from 'next-seo';

export default function Index() {
  const [state, dispatch] = useReducer(reducer, initialState);

  // filter
  let brands = useMemo(
    () => data.brands.filter(brands => filterBrands(brands, state.selected)),
    [state.selected],
  );

  // search for filter
  if (state.searchFor !== '') {
    brands = brands.filter(brand =>
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

  const filters = useMemo(
    () => (
      <Filters
        criteriaMap={criteriaMap}
        filters={state.filters}
        selected={state.selected}
        setSelected={selected =>
          dispatch({ type: actions.SET_SELECTED, payload: selected })
        }
        clearSelected={() => dispatch({ type: actions.CLEAR_SELECTED })}
        showFilters={state.showFilters}
        setShowFilters={show =>
          dispatch({ type: actions.SET_SHOW_FILTERS, payload: show })
        }
      />
    ),
    [state.selected, state.showFilters],
  );

  const sort = useMemo(
    () => (
      <Sort
        searchFor={state.searchFor}
        setSearchFor={searchTerm =>
          dispatch({ type: actions.SET_SEARCH_FOR, payload: searchTerm })
        }
        totalCount={state.brandsCount}
        count={brands.length}
        sortBy={state.sortBy}
        setSortBy={sortBy =>
          dispatch({ type: actions.SET_SORT_BY, payload: sortBy })
        }
        setShowFilters={show =>
          dispatch({ type: actions.SET_SHOW_FILTERS, payload: show })
        }
      />
    ),
    [brands.length, state.searchFor, state.brandsCounct, state.sortBy],
  );

  return (
    <>
      <NextSeo
        title="the sustainable list - all the good fashion brands at a glance"
        description="the sustainable list is a curated list of ethical fashion brands from all over the world."
        canonical="https://thesustainablelist.com/"
      />
      <Layout fixed={state.showFilters} showFilters={state.showFilters}>
        {filters}
        <Main>
          {sort}
          <Brands brands={brands} />
        </Main>
        <BackgroundImage />
      </Layout>
    </>
  );
}
