import Link from "next/link";
import React from "react";

import { certificatesMap } from "constants/certificatesMap";

import styles from "./styles.module.css";

import type { Field } from "types";

// const CERTIFICATE_SIZE = 24;

interface BrandCertificatesProps {
  certificates?: Field[];
}

export const BrandCertificates = ({ certificates }: BrandCertificatesProps) => {
  if (!certificates) {
    return null;
  }

  return (
    <p className={styles.container}>
      Certificates:
      {certificates.map((cert) => {
        if (!cert.fields) {
          return null;
        }
        const certificate =
          certificatesMap[cert.fields.slug as keyof typeof certificatesMap];
        if (!certificate) {
          return null;
        }

        return (
          <Link
            key={cert.id}
            target="_blank"
            href={certificate.website || "https://"}
            className={styles.certificate}
          >
            {/* <Tooltip content={certificate.title} position={Position.TOP}>
              </Tooltip> */}
            {/* <Image
              alt="Certificate badge"
              data-tip={certificate.title}
              width={CERTIFICATE_SIZE}
              height={CERTIFICATE_SIZE}
              src={certificate.image}
            /> */}
            {certificate.title}
          </Link>
        );
      })}
    </p>
  );
};
