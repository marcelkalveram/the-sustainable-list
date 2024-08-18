import React, { type ReactElement } from "react";
import { Pane, Button } from "evergreen-ui";
import { colors } from "theme/constants";
import { majorScale } from "evergreen-ui/commonjs/scales";

interface FilterApplyButtonMobileProps {
  setShowFilters: (boolean) => void;
  clearSelected: () => void;
}

export const FilterApplyButtonMobile = ({
  setShowFilters,
  clearSelected,
}: FilterApplyButtonMobileProps): ReactElement => (
  <Pane
    style={{
      display: "flex",
      position: "fixed",
      bottom: 0,
      left: 0,
      width: "100%",
      height: "56px",
      backgroundColor: colors.white,
      borderTop: `1px solid ${colors.grey}`,
      padding: majorScale(1),
      justifyContent: "space-between",
      alignItems: "center",
      zIndex: 5,
    }}
  >
    <Button
      width="49%"
      justifyContent="center"
      height={40}
      onClick={() => clearSelected()}
    >
      Clear filters
    </Button>
    <Button
      width="49%"
      justifyContent="center"
      className="buttonPrimary"
      appearance="primary"
      height={40}
      onClick={() => setShowFilters(false)}
    >
      Apply filters
    </Button>
  </Pane>
);
