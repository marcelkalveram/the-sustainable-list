import { NextRequest } from "next/server";

import { filterBrand } from "./helpers/filterBrand";

import data from "/public/data/index.json";

import { sanitizeFilterParams } from "./helpers/sanitizeFilterParams";
import { sanitizeSeachParams } from "./helpers/sanitizeSearchParams";
import { sanitizeSortParams } from "./helpers/sanitizeSortParams";
import { sortBrands } from "./helpers/sortBrands";

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;

  const filterParamsSanitized = sanitizeFilterParams(searchParams);
  let filteredBrands = data.brands.filter(filterBrand(filterParamsSanitized));

  const searchParamSanitized = sanitizeSeachParams(searchParams);
  console.log(searchParamSanitized);
  if (searchParamSanitized) {
    filteredBrands = filteredBrands.filter((brand) =>
      brand.fields.title.toLowerCase().includes(searchParamSanitized),
    );
  }

  const sortParamsSanitized = sanitizeSortParams(searchParams);
  const sortedBrands = filteredBrands.sort(sortBrands(sortParamsSanitized));

  return Response.json({ brands: sortedBrands });
}
