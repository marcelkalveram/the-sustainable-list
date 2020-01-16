import css from 'styled-jsx/css';

export const { styles, className } = css.resolve`
  @media only screen and (max-width: 860px) {
    .header__logo :global(.header__logo__subtitle) {
      display: none;
    }
  }

  @media only screen and (max-width: 768px) {
    .header__logo {
      flex-direction: column !important;
      width: 100%;
      align-items: flex-start !important;
    }
    .header__logo :global(.header__logo__subtitle) {
      display: block;
      margin-left: 37px !important;
      margin-top: 3px !important;
    }
  }
`;
