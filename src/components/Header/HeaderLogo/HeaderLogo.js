import React from "react";
import { Heading, Pane } from "evergreen-ui";
import { minorScale } from "evergreen-ui/commonjs/scales";
import { colors, fontSizes } from "theme/constants";
import { className, styles } from "./styles";

import Link from "next/link";
import Image from "next/image";

const LOGO_WIDTH = 286;
const LOGO_HEIGHT = 24;
const SUBTITLE_FONTWEIGHT = 500;

export const HeaderLogo = () => {
  return (
    <>
      <Pane
        className={`header__logo ${className}`}
        display="flex"
        flexDirection="row"
        alignItems="flex-end"
      >
        <Link href="/" style={{ display: "inherit" }}>
          <Image
            alt="The Sustainable List logo"
            src="/logo.png"
            width={LOGO_WIDTH}
            height={LOGO_HEIGHT}
          />
        </Link>

        <Heading
          className="header__logo__subtitle"
          size={fontSizes.base}
          color={colors.primary}
          marginBottom={-2}
          marginLeft={minorScale(2)}
          fontWeight={SUBTITLE_FONTWEIGHT}
        >
          all the good fashion brands at a glance
        </Heading>
      </Pane>
      {styles}
    </>
  );
};
