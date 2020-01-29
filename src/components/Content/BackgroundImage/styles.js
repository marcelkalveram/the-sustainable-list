import css from 'styled-jsx/css';

export const { className, styles } = css.resolve`
  @media only screen and (max-width: 1140px) {
    .background-image {
      bottom: -50% !important;
    }
  }
`;
