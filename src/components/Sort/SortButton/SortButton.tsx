import React from "react";
import type { MouseEventHandler, ReactElement, ReactNode } from "react";
import { Button } from "evergreen-ui";
import { colors } from "theme/constants";
import { majorScale } from "evergreen-ui/commonjs/scales";

interface SortButtonProps {
  onToggle: MouseEventHandler;
  children: ReactNode;
}

export const SortButton = ({
  onToggle,
  children,
}: SortButtonProps): ReactElement => {
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
