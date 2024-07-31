import React, { ReactElement } from "react";
import {
  Paragraph,
  Pane,
  Icon,
  majorScale,
  minorScale,
  PathSearchIcon,
} from "evergreen-ui";
import { brandsStyles } from "./styles";
import { Brand } from "./Brand/Brand";
import { colors } from "theme/constants";
import type { Brand as BrandType } from "types";

interface Brands {
  brands: BrandType[];
}

export const Brands = ({ brands }: Brands): ReactElement => {
  return (
    <>
      {brands.length === 0 && (
        <Pane
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          height="calc(100vh - 160px)"
          padding={majorScale(3)}
          textAlign="center"
        >
          <PathSearchIcon
            size={48}
            color={colors.secondarySoft}
            marginBottom={majorScale(1)}
          />
          <Paragraph
            size={500}
            fontWeight={500}
            color={colors.secondarySoft}
            marginBottom={minorScale(1)}
          >
            We&apos;re sorry!
          </Paragraph>
          <Paragraph size={500} fontWeight={300} color={colors.secondarySoft}>
            Unfortunately, no brands matched your search. Please try broadening
            your search a bit.
          </Paragraph>
        </Pane>
      )}
      {brands.length > 0 && (
        <section className="brands">
          {brands.map((brand, index) => (
            <Brand key={brand.id} brand={brand} index={index} />
          ))}
        </section>
      )}
      <style jsx>{brandsStyles}</style>
    </>
  );
};
