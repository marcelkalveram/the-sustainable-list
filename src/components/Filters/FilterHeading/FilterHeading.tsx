import React, { type ReactElement } from "react";
import {
  Heading,
  CaretUpIcon,
  CaretDownIcon,
  minorScale,
  majorScale,
} from "evergreen-ui";
import { colors, fontSizes } from "theme/constants";

interface FilterHeadingProps {
  hidden: string[];
  toggleHidden: Function;
  name: string;
  title: string;
}

export const FilterHeading = ({
  hidden,
  toggleHidden,
  name,
  title,
}: FilterHeadingProps): ReactElement => {
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
