import React, { type ReactElement } from "react";
import { Link, Pane, Tooltip, Position } from "evergreen-ui";
import { majorScale } from "evergreen-ui/commonjs/scales";
import { certificatesMap } from "config/certificates";
import Image from "next/image";
import type { Field } from "types";

const CERTIFICATE_SIZE = 24;

interface BrandCertificatesProps {
  certificates: Field[];
}

export const BrandCertificates = ({
  certificates,
}: BrandCertificatesProps): ReactElement => {
  if (!certificates) {
    return null;
  }

  return (
    <Pane position="absolute" right={6} top={14} zIndex={1}>
      {certificates.map((cert) => {
        if (!cert.fields) {
          return null;
        }
        const certificate = certificatesMap[cert.fields.slug];
        if (!certificate) {
          return null;
        }
        return (
          <Link
            key={cert.id}
            textDecoration="none"
            target="_blank"
            href={certificate.website}
            style={{
              display: "inline-flex",
              marginRight: majorScale(1),
            }}
          >
            <Tooltip content={certificate.title} position={Position.TOP}>
              <Image
                alt="Certificate badge"
                data-tip={certificate.title}
                width={CERTIFICATE_SIZE}
                height={CERTIFICATE_SIZE}
                src={certificate.image}
              />
            </Tooltip>
          </Link>
        );
      })}
    </Pane>
  );
};
