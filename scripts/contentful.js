const path = require("path");
const contentful = require("contentful");
const fse = require("fs-extra");

const criteriaMap = require(
  path.resolve(__dirname, "..", "public/shared", "criteriaMap.json"),
);

const space = process.env.CONTENTFUL_SPACE_ID;
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;

if (!space) {
  console.error("CONTENTFUL_SPACE_ID is not defined");
  process.exit(1);
}

if (!accessToken) {
  console.error("CONTENTFUL_ACCESS_TOKEN is not defined");
  process.exit(1);
}

const client = contentful.createClient({
  space,
  accessToken,
});

const stripFields = (entry) => entry?.fields;

const stripFieldsMap = (entry) =>
  entry?.map((option) => ({
    id: option?.sys?.id,
    fields: option.fields,
  }));

const stripMetaData = (entry) =>
  Array.isArray(entry)
    ? stripFieldsMap(entry)
    : { id: entry?.sys?.id, fields: stripFields(entry) };

client.getEntries({ limit: 1000 }).then(function (entries) {
  // brands
  const brands = entries.items
    .filter((brand) => brand.sys.contentType.sys.id === "category")
    .map((brand) => ({
      id: brand.sys.id,
      fields: {
        ...brand.fields,
        ...criteriaMap.data.reduce((acc, { contentfulField }) => {
          if (brand.fields[contentfulField]) {
            acc[contentfulField] = stripMetaData(brand.fields[contentfulField]);
          }
          return acc;
        }, {}),
        ...["shippingOptions", "image", "logo"].reduce((acc, field) => {
          acc[field] = stripMetaData(brand.fields[field]);
          return acc;
        }, {}),
        category: brand.fields.category,
      },
    }));

  const filters = { category: ["Men", "Women", "Kids"] };
  const criteriaArray = criteriaMap.data
    .map((criteria) => criteria.name)
    .filter((criteria) => criteria !== "category");
  criteriaArray.forEach((model) => {
    filters[model] = entries.items
      .filter((entry) => entry.sys.contentType.sys.id === model)
      .map((entry) => ({
        id: entry?.sys?.id,
        fields: entry.fields,
      }));
  });

  const json = {
    brands,
    filters,
  };

  fse.outputFile(
    path.resolve(__dirname, "..", "public/data/", "index.json"),
    JSON.stringify(json),
    (err) => {
      if (err) {
        throw new Error("Error saving file");
      }
    },
  );
});
