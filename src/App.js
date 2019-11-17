import React, { useMemo, useReducer } from 'react';
import './App.css';

// data
import data from './data';
import { criteriaMap } from './config/criteriaMap';
import { filterBrands } from './helpers/filter';
import { sortByAz, sortByPrice } from './helpers/sort';
import { actions, initialState, reducer } from './store/';

// UI
import { Header } from './components/Header';
import { Sort } from './components/Sort';
import { Brands } from './components/Brands';
import { Filters } from './components/Filters';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  // massive filter function
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

  return (
    <div style={state.showFilters ? { position: 'fixed' } : {}}>
      <Header />
      <Filters
        criteriaMap={criteriaMap}
        filters={state.filters}
        selected={state.selected}
        setSelected={selected =>
          dispatch({ type: actions.SET_SELECTED, payload: selected })
        }
        showFilters={state.showFilters}
        setShowFilters={show =>
          dispatch({ type: actions.SET_SHOW_FILTERS, payload: show })
        }
      />
      <div className="main-container">
        <Sort
          searchFor={state.searchFor}
          setSearchFor={searchTerm =>
            dispatch({ type: actions.SET_SEARCH_FOR, payload: searchTerm })
          }
          totalCount={state.brandsCount}
          count={state.brands.length}
          sortBy={state.sortBy}
          setSortBy={sortBy =>
            dispatch({ type: actions.SET_SORT_BY, payload: sortBy })
          }
          setShowFilters={show =>
            dispatch({ type: actions.SET_SHOW_FILTERS, payload: show })
          }
        />
        <Brands
          criteriaMap={criteriaMap}
          brands={brands}
          selected={state.selected}
        />
      </div>
    </div>
  );
}

export default App;
