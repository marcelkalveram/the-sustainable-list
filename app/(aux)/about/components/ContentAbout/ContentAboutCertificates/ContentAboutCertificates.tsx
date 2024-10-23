import Image from "next/image";
import React from "react";

import { certificatesMap } from "constants/certificatesMap";

import styles from "./styles.module.css";

type certificatesMapKeys = keyof typeof certificatesMap;

function ContentAboutCertificates() {
  const keys = Object.keys(certificatesMap) as certificatesMapKeys[];

  return (
    <div className={styles.certificatesGrid}>
      {keys.map((certificate) => {
        const { image, website } = certificatesMap[certificate];
        const altText = `${certificatesMap[certificate].title} badge`;

        return (
          <a
            key={certificate}
            href={website}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.certificatesGridImage}
              alt={altText}
              width={52}
              height={52}
              src={image}
            />
          </a>
        );
      })}
    </div>
  );
}

export default ContentAboutCertificates;
