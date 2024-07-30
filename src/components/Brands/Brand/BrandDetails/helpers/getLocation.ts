import type { Location } from "types";

const getLocation = (location: Location): string => {
  let locationString = "Unknown location";
  if (location && location.fields && location.fields.country) {
    locationString = `${location.fields.country}`;
  }
  return locationString;
};

export { getLocation };
