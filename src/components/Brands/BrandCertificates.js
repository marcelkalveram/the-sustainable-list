import React from 'react';
import { Pane } from 'evergreen-ui';
import { majorScale } from 'evergreen-ui/commonjs/scales';
import * as images from '../../images';

const certificatesMap = {
  'global-recycled-standard-grs': {
    title: 'Global Recycled Standard',
    image: images.badgeGrs,
  },
  'fsc-certified-rubber': {
    title: 'FSC Certified Rubber',
    image: images.badgeFsc,
  },
  'fair-wear-foundation': {
    title: 'Fair Wear Foundation',
    image: images.badgeFwf,
  },
  'oekotex-standard-100': {
    title: 'Oekotex Standard 100',
    image: images.badgeOtx,
  },
  'soil-association': {
    title: 'Soil Association',
    image: images.badgeSas,
  },
  'global-organic-textile-standard-gots': {
    title: 'Global Organic Textile Standard',
    image: images.badgeGot,
  },
  'peta-approved-vegan': {
    title: 'Peta Approved Vegan',
    image: images.badgePta,
  },
  '1-for-the-planet': {
    title: '1% For The Planet',
    image: images.badgeOne,
  },
  'certified-organic-cotton': {
    title: 'Certified Organic Cotton',
    image: images.badgeCoc,
  },
  'supports-environmental-organisation': {
    title: 'Supports Environmental Organizations',
    image: images.badgeEnv,
  },
};

const CERTIFICATE_SIZE = 24;

export const BrandCertificates = ({ brand }) => {
  if (!brand.fields.certificates) {
    return null;
  }
  return (
    <Pane position="absolute" right={6} top={14}>
      {brand.fields.certificates.map(cert => {
        const certificate = certificatesMap[cert.fields.slug];
        if (!certificate) {
          return null;
        }
        return (
          <img
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
