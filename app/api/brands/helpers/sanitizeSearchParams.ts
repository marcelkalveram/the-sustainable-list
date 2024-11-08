export const sanitizeSeachParams = (searchParams: URLSearchParams) => {
  const searchTerm = searchParams.get("search");
  if (searchTerm) {
    return searchTerm?.toLowerCase();
  }
  return null;
};
