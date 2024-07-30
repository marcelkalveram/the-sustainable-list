import { actions } from ".";
import { initSelected } from "./helper";
import type { State } from "types";

interface Action {
  type: String;
  payload?: any;
}

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case actions.SET_SELECTED:
      return { ...state, selected: action.payload };
    case actions.CLEAR_SELECTED:
      return { ...state, selected: initSelected() };
    case actions.SET_SHOW_FILTERS:
      return { ...state, showFilters: action.payload };
    case actions.SET_SEARCH_FOR:
      return { ...state, searchFor: action.payload };
    case actions.SET_SORT_BY:
      return { ...state, sortBy: action.payload };
    default:
      return state;
  }
};
