import { Text } from "evergreen-ui";
import type { ReactNode } from "react";
import { colors, fontSizes } from "theme/constants";

const getPrice = (price): ReactNode => {
  const priceOrOne = price || 1;
  return (
    <>
      <Text color={colors.secondary} size={fontSizes.base}>
        $
      </Text>
      <Text
        color={priceOrOne > 1 ? colors.secondary : colors.greyedOut}
        size={fontSizes.base}
      >
        $
      </Text>
      <Text
        color={priceOrOne > 2 ? colors.secondary : colors.greyedOut}
        size={fontSizes.base}
      >
        $
      </Text>
    </>
  );
};

export default getPrice;
