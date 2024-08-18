import React, { type ReactElement } from "react";

import { Paragraph } from "evergreen-ui";
import { majorScale } from "evergreen-ui/commonjs/scales";
import { colors, fontSizes } from "theme/constants";
import { styles, className } from "./styles";

export const BrandsCount = ({ count = 0, totalCount = 0 }): ReactElement => (
  <>
    <Paragraph
      className={`sort__brands-count ${className}`}
      size={fontSizes.base}
      padding={majorScale(1)}
      marginRight={majorScale(1)}
      color={colors.secondary}
    >
      Showing <b>{count}</b> out of {totalCount} sustainable brands
    </Paragraph>
    {styles}
  </>
);
