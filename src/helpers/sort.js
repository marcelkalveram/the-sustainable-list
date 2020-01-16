export const sortByPrice = (state, a, b) => {
  const priceA = a.fields.price || 0;
  const priceB = b.fields.price || 0;
  if (priceA < priceB) {
    return state.sortBy.price === 'asc' ? 1 : -1;
  }
  if (priceA >= priceB) {
    return state.sortBy.price === 'asc' ? -1 : 1;
  }
  return 0;
};

export const sortByAz = (state, a, b) => {
  const titleA = a.fields.title || 0;
  const titleB = b.fields.title || 0;
  if (titleA < titleB) {
    return state.sortBy.az === 'asc' ? 1 : -1;
  }
  if (titleA >= titleB) {
    return state.sortBy.az === 'asc' ? -1 : 1;
  }
  return 0;
};
