import { actions } from './';

export const reducer = (state, action) => {
  switch (action.type) {
    case actions.SET_SELECTED:
      return { ...state, selected: action.payload };
    case actions.SET_SHOW_FILTERS:
      return { ...state, showFilters: action.payload };
    case actions.SET_SHOW_MOBILE_MENU:
      return { ...state, showMobileMenu: action.payload };
    case actions.SET_SEARCH_FOR:
      return { ...state, searchFor: action.payload };
    case actions.SET_SORT_BY:
      return { ...state, sortBy: action.payload };
    default:
      return state;
  }
};
