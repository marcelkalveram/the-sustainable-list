const path = require("path");
const contentful = require("contentful");
const fse = require("fs-extra");

const criteriaMap = require(path.resolve(
  __dirname,
  "..",
  "public/shared",
  "criteriaMap.json"
));

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

client.getEntries({ limit: 1000 }).then(function (entries) {
  const brands = entries.items.filter(
    (entry) => entry.sys.contentType.sys.id === "category"
  );
  const filters = { category: ["Men", "Women", "Kids"] };
  const criteriaArray = criteriaMap.data
    .map((criteria) => criteria.name)
    .filter((criteria) => criteria !== "category");
  criteriaArray.forEach((model) => {
    filters[model] = entries.items.filter(
      (entry) => entry.sys.contentType.sys.id === model
    );
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
    }
  );
});
