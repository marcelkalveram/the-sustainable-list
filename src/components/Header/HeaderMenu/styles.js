import css from 'styled-jsx/css';

export const { styles, className } = css.resolve`
  @media only screen and (max-width: 768px) {
    .header__menu {
      display: none !important;
    }
  }
`;
