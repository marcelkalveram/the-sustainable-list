import React from "react";
import {
  Heading,
  CaretUpIcon,
  CaretDownIcon,
  minorScale,
  majorScale,
} from "evergreen-ui";
import { colors, fontSizes } from "theme/constants";

export const FilterHeading = ({ hidden, toggleHidden, name, title }) => {
  const Icon = hidden.includes(name) ? CaretUpIcon : CaretDownIcon;

  return (
    <Heading
      cursor="pointer"
      color={colors.secondary}
      size={fontSizes.medium}
      onClick={() => toggleHidden(name)}
      paddingBottom={hidden.includes(name) ? majorScale(1) : 0}
    >
      {title}
      <Icon position="relative" top={minorScale(1)} />
    </Heading>
  );
};
