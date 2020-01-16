import React from 'react';
import { Pane } from 'evergreen-ui';
import { majorScale } from 'evergreen-ui/commonjs/scales';

const certificatesMap = {
  'global-recycled-standard-grs': {
    title: 'Global Recycled Standard',
    image: '/badges-grs.png',
  },
  'fsc-certified-rubber': {
    title: 'FSC Certified Rubber',
    image: '/badges-fsc.jpg',
  },
  'fair-wear-foundation': {
    title: 'Fair Wear Foundation',
    image: '/badges-fwf.png',
  },
  'oekotex-standard-100': {
    title: 'Oekotex Standard 100',
    image: '/badges-otx.png',
  },
  'soil-association': {
    title: 'Soil Association',
    image: '/badges-sas.png',
  },
  'global-organic-textile-standard-gots': {
    title: 'Global Organic Textile Standard',
    image: '/badges-got.png',
  },
  'peta-approved-vegan': {
    title: 'Peta Approved Vegan',
    image: '/badges-pta.png',
  },
  '1-for-the-planet': {
    title: '1% For The Planet',
    image: '/badges-one.png',
  },
  'certified-organic-cotton': {
    title: 'Certified Organic Cotton',
    image: '/badges-coc.png',
  },
  'supports-environmental-organisation': {
    title: 'Supports Environmental Organizations',
    image: '/badges-env.png',
  },
};

const CERTIFICATE_SIZE = 24;

export const BrandCertificates = ({ certificates }) => {
  if (!certificates) {
    return null;
  }
  return (
    <Pane position="absolute" right={6} top={14}>
      {certificates.map(cert => {
        const certificate = certificatesMap[cert.fields.slug];
        if (!certificate) {
          return null;
        }
        return (
          <img
            key={cert.sys.id}
            alt="Certificate badge"
            data-tip={certificate.title}
            style={{
              marginRight: majorScale(1),
            }}
            width={CERTIFICATE_SIZE}
            height={CERTIFICATE_SIZE}
            src={certificate.image}
          />
        );
      })}
    </Pane>
  );
};
