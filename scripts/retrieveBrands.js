const { stripMetaData } = require("./helpers");

const stripMetaDataFromBrand = (brand, criteriaMap) => ({
  id: brand.sys.id,
  fields: {
    // base brand fields: title, slug, website, price
    ...brand.fields,

    // fields based on criteria map
    ...criteriaMap.data.reduce((acc, { name }) => {
      if (brand.fields[name]) {
        acc[name] = stripMetaData(brand.fields[name]);
      }
      return acc;
    }, {}),

    // media fields
    ...["image", "logo"].reduce((acc, field) => {
      acc[field] = stripMetaData(brand.fields[field]);
      return acc;
    }, {}),

    // category field
    category: brand.fields.category,
  },
});

const retrieveBrands = (entries, criteriaMap) =>
  entries.items
    // brands are of id "category"
    .filter((brand) => brand.sys.contentType.sys.id === "category")
    .map((brand) => stripMetaDataFromBrand(brand, criteriaMap));

module.exports = {
  retrieveBrands,
};
