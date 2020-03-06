import css from 'styled-jsx/css';
import { majorScale, minorScale } from 'evergreen-ui';

export const { className, styles } = css.resolve`
  @media only screen and (max-width: 1316px) {
    :global(.certificates-grid) {
      max-width: 520px;
    }

    :global(.certificates-grid img) {
      margin-right: ${minorScale(3)}px !important;
      margin-bottom: ${minorScale(3)}px !important;
    }
  }
  @media only screen and (max-width: 1246px) {
    :global(.certificates-grid img) {
      width: 45px;
      height: 45px;
    }
  }
  @media only screen and (max-width: 1140px) {
    :global(.certificates-grid) {
      max-width: 100%;
    }
    :global(.certificates-grid img) {
      width: 52px;
      height: 52px;
    }
  }
  @media only screen and (max-width: 1024px) {
    :global(.certificates-grid) {
      max-width: 500px;
    }
    :global(.certificates-grid img) {
      margin-right: ${minorScale(4)}px !important;
      margin-bottom: ${minorScale(4)}px !important;
    }
  }
  @media only screen and (max-width: 602px) {
    :global(.certificates-grid) {
      max-width: 500px;
    }
    :global(.certificates-grid img) {
      margin-right: ${minorScale(3)}px !important;
      margin-bottom: ${minorScale(3)}px !important;
    }
  }
  @media only screen and (max-width: 574px) {
    :global(.certificates-grid) {
      max-width: 500px;
      justify-content: center;
    }
    :global(.certificates-grid img) {
      width: 45px;
      height: 45px;
    }
  }
`;
