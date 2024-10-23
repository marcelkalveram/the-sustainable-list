import Image from "next/image";
import React from "react";

import { type Image as ImageType } from "types";

import { createParamsString } from "../helpers/createParamsString";

import styles from "./styles.module.css";

type Props = {
  logo?: ImageType;
  title?: string;
};

const imageConfig = {
  fm: "jpg",
  w: "196",
  h: "196",
  q: "100",
  f: "center",
  fit: "pad",
};

const imageParams = createParamsString(imageConfig);

export const BrandLogo = ({ logo, title }: Props) => {
  const imageUrl = logo?.fields?.file?.url;
  const imageSrc = `https:${imageUrl}?${imageParams}`;
  const imageAlt = `Logo of brand ${title}`;

  return (
    <div className={styles.brandLogo}>
      {logo?.fields && (
        <Image alt={imageAlt} src={imageSrc} width={64} height={64} />
      )}
    </div>
  );
};
