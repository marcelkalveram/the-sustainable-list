import React, { type ReactElement } from "react";
import { Button, CrossIcon, Pane, majorScale } from "evergreen-ui";

interface FilterCloseButtonMobileProps {
  setShowFilters: Function;
}

export const FilterCloseButtonMobile = ({
  setShowFilters,
}: FilterCloseButtonMobileProps): ReactElement => (
  <Pane
    display="flex"
    position="fixed"
    top={0}
    right={0}
    padding={majorScale(1)}
    paddingTop={majorScale(2)}
    justifyContent="center"
    alignItems="center"
    zIndex={5}
  >
    <Button
      style={{
        border: 0,
        background: "transparent",
      }}
      onClick={() => setShowFilters(false)}
    >
      <CrossIcon />
    </Button>
  </Pane>
);
