// export const brandsSelectedAndSearchedSelector = createSelector(
//   [brandsSelectedSelector, (state: RootState) => state.searchFor],
//   (brands, searchFor) => {
//     if (searchFor !== "") {
//       brands = brands.filter((brand: Brand) =>
//         brand.fields.title.toLowerCase().includes(searchFor.toLowerCase()),
//       );
//     }
//     return brands;
//   },
// );
