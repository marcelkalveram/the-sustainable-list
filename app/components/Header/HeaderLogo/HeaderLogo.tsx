import Image from "next/image";
import Link from "next/link";
import React from "react";

import styles from "./styles.module.css";


const LOGO_WIDTH = 286;
const LOGO_HEIGHT = 24;

export const HeaderLogo = (): React.ReactNode => (
  <div className={styles.headerLogo}>
    <Link href="/">
      <Image
        alt="The Sustainable List logo"
        src="/logo.png"
        width={LOGO_WIDTH}
        height={LOGO_HEIGHT}
      />
    </Link>

    <h2 className={styles.headerLogoSubtitle}>
      all the good fashion brands at a glance
    </h2>
  </div>
);
