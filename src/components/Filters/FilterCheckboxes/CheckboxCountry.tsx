import React, { type ReactElement } from "react";
import { Text, Checkbox } from "evergreen-ui";
import { colors, fontSizes } from "theme/constants";
import type { CriteriaMapFlattened } from "types";

interface CheckboxCountryProps {
  country: any;
  selected: CriteriaMapFlattened;
  toggleFilter: Function;
}

export const CheckboxCountry = ({
  country,
  selected,
  toggleFilter,
}: CheckboxCountryProps): ReactElement => {
  return (
    <Checkbox
      key={country}
      checked={selected["location"].includes(country)}
      label={
        <Text size={fontSizes.base} color={colors.secondarySoft}>
          {country}
        </Text>
      }
      onChange={(e) => toggleFilter(country, "location")}
    />
  );
};
