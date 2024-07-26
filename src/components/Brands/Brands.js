import React from "react";
import { Paragraph, Pane, Icon, majorScale, minorScale } from "evergreen-ui";
import { brandsStyles } from "./styles.js";
import { Brand } from "./Brand/Brand";
import { colors } from "theme/constants.js";

export const Brands = ({ brands }) => {
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
          <Icon
            size={48}
            icon="path-search"
            color={colors.secondarySoft}
            marginBottom={majorScale(1)}
          />
          <Paragraph
            size={500}
            fontWeight={500}
            color={colors.secondarySoft}
            marginBotto={minorScale(1)}
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
