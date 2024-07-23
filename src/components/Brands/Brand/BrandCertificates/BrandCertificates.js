import React from "react";
import { Link, Pane } from "evergreen-ui";
import { majorScale } from "evergreen-ui/commonjs/scales";
import { certificatesMap } from "../../../../config/certificates";

const CERTIFICATE_SIZE = 24;

export const BrandCertificates = ({ certificates }) => {
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
            key={cert.sys.id}
            textDecoration="none"
            target="_blank"
            href={certificate.website}
            style={{
              display: "inline-flex",
              marginRight: majorScale(1),
            }}
          >
            <img
              alt="Certificate badge"
              data-tip={certificate.title}
              width={CERTIFICATE_SIZE}
              height={CERTIFICATE_SIZE}
              src={certificate.image}
            />
          </Link>
        );
      })}
    </Pane>
  );
};
