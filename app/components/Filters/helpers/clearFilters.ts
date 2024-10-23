export const clearFilters = () => {
  window.history.pushState(null, "", "/");
  window.scrollTo(0, 0);
};
