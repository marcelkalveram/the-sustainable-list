const retrieveFilters = (entries, criteriaMap) => {
  // base filters
  const filters = { category: ["Men", "Women", "Kids"] };

  // filters based on criteriaMap
  const criteriaArray = criteriaMap.data
    .map((criteria) => criteria.name)
    .filter((criteria) => criteria !== "category");

  // map criteriaArray to filters
  criteriaArray.forEach((model) => {
    filters[model] = entries.items
      .filter((entry) => entry.sys.contentType.sys.id === model)

      // strip metadata from entry
      .map((entry) => ({
        id: entry?.sys?.id,
        fields: entry.fields,
      }));
  });

  return filters;
};

module.exports = {
  retrieveFilters,
};
