const { stripMetaData } = require("./helpers");

const stripMetaDataFromBrand = (brand, criteriaMap) => ({
  id: brand.sys.id,
  fields: {
    // base brand fields
    ...brand.fields,

    // fields based on criteria map
    ...criteriaMap.data.reduce((acc, { contentfulField }) => {
      if (brand.fields[contentfulField]) {
        acc[contentfulField] = stripMetaData(brand.fields[contentfulField]);
      }
      return acc;
    }, {}),

    // remaining fields
    ...["shippingOptions", "image", "logo"].reduce((acc, field) => {
      acc[field] = stripMetaData(brand.fields[field]);
      return acc;
    }, {}),

    // category field
    category: brand.fields.category,
  },
});

const retrieveBrands = (entries, criteriaMap) =>
  entries.items
    .filter((brand) => brand.sys.contentType.sys.id === "category")
    .map((brand) => stripMetaDataFromBrand(brand, criteriaMap));

module.exports = {
  retrieveBrands,
};
