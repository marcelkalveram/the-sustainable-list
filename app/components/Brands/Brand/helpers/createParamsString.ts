export const createParamsString = (
  imageConfig: Record<string, string>,
): string => {
  const urlSearchParams = new URLSearchParams();
  Object.entries(imageConfig).forEach(([key, value]) => {
    urlSearchParams.set(key, value);
  });
  return urlSearchParams.toString();
};
