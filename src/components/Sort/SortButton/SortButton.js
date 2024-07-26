import React from "react";
import { Button } from "evergreen-ui";
import { colors } from "theme/constants";
import { majorScale } from "evergreen-ui/commonjs/scales";

export const SortButton = ({ onToggle, children }) => {
  return (
    <Button
      fontWeight={600}
      color={colors.secondary}
      appearance="minimal"
      onClick={onToggle}
      marginRight={majorScale(1)}
      width={majorScale(5)}
    >
      {children}
    </Button>
  );
};
