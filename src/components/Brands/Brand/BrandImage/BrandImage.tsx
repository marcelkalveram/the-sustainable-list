import React, { ReactElement, type ReactNode } from "react";
import { Link, Pane, minorScale } from "evergreen-ui";
import { LazyLoadImage } from "react-lazy-load-image-component";
import type { Image } from "types";

const DEFAULT_IMAGE =
  "//images.ctfassets.net/hfvaxsztohci/5F8GCHPzqNPyyFyRBt8Z34/7639bd473a33e5e8515dc27dbc53f241/70911900_243466726561461_1687436012864667648_o.jpg";

interface BrandImageProps {
  children: ReactNode;
  image: Image;
  website: string;
  visibleByDefault: boolean;
  onClick: () => void;
}

export const BrandImage = ({
  children,
  image,
  website,
  visibleByDefault,
  onClick,
}: BrandImageProps): ReactElement => {
  const imageUrl = image ? image.fields.file.url : DEFAULT_IMAGE;
  return (
    <Pane
      width="100%"
      height="200px"
      overflow="hidden"
      position="relative"
      zIndex="0"
      borderRadius={minorScale(3)}
    >
      <Link
        textDecoration="none"
        target="_blank"
        href={`${website}?ref=thesustainablelist`}
        onClick={onClick}
        style={{
          position: "absolute",
          maxWidth: "100%",
          width: "100%",
          height: "100%",
          top: "0",
          left: "0",
        }}
      >
        <LazyLoadImage
          src={`${imageUrl}?fm=jpg&w=1000&h=750&q=75&f=bottom&fit=fill`}
          alt="Brand: TODO"
          style={{ maxWidth: "100%" }}
          width="100%"
          visibleByDefault={visibleByDefault}
          effect="opacity"
        />
      </Link>
      {children}
    </Pane>
  );
};
