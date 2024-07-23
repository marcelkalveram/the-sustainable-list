import React from "react";
import { CrossIcon, Pane, majorScale } from "evergreen-ui";

export const FilterCloseButtonMobile = ({ setShowFilters }) => (
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
    <CrossIcon onClick={() => setShowFilters(false)} />
  </Pane>
);
