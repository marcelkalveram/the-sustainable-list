import * as contentful from "contentful";
import fse from "fs-extra";
import { criteriaMap } from "../src/config/criteriaMap";
import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.join("..", ".env") });

const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

client.getEntries({ limit: 1000 }).then(function (entries) {
  console.log(entries);
  const brands = entries.items.filter(
    (entry) => entry.sys.contentType.sys.id === "category"
  );

  const filters = { category: ["Men", "Women", "Kids"] };

  const criteriaArray = criteriaMap
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

  fse.outputFile("../src/data/index.json", JSON.stringify(json), (err) => {
    if (err) {
      throw new Error("Error saving file");
    }
  });
});
