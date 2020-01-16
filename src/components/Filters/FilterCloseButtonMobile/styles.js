import css from 'styled-jsx/css';

export const { className, styles } = css.resolve`
  .filters__close-button-mobile {
    display: none !important;
    position: fixed !important;
    right: 16px;
    top: 16px;
    line-height: 38px;
  }

  @media only screen and (max-width: 768px) {
    .filters__close-button-mobile {
      display: block !important;
    }
  }
`;
