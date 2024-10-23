import Image from "next/image";
import Link from "next/link";
import React, { type ReactNode } from "react";


import { createParamsString } from "../helpers/createParamsString";

import styles from "./styles.module.css";

import type { Image as ImageType } from "types";

const DEFAULT_IMAGE =
  "//images.ctfassets.net/hfvaxsztohci/5F8GCHPzqNPyyFyRBt8Z34/7639bd473a33e5e8515dc27dbc53f241/70911900_243466726561461_1687436012864667648_o.jpg";

type Props = {
  children?: ReactNode;
  image?: ImageType;
  website?: string;
  title?: string;
  onClick?: () => void;
};

const IMAGE_WIDTH = "1000";
const IMAGE_HEIGHT = "750";

const imageConfig = {
  fm: "jpg",
  w: IMAGE_WIDTH,
  h: IMAGE_HEIGHT,
  q: "75",
  f: "bottom",
  fit: "fill",
} as const;

const imageParams = createParamsString(imageConfig);

export const BrandImage = ({
  children,
  image,
  website,
  title,
  onClick,
}: Props) => {
  const imageUrl = `https:${image ? image?.fields?.file?.url : DEFAULT_IMAGE}`;
  const imageSrc = `${imageUrl}?${imageParams}`;

  return (
    <div className={styles.brandImage}>
      <Link
        className={styles.brandImageLink}
        target="_blank"
        href={`${website}?ref=thesustainablelist`}
        onClick={onClick}
      >
        <Image
          className={styles.brandImageImg}
          src={imageSrc}
          alt={`Brand: ${title || "unknown"}`}
          width={IMAGE_WIDTH}
          height={IMAGE_HEIGHT}
        />
      </Link>
      {children}
    </div>
  );
};
