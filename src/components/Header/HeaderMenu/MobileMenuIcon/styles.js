import css from "styled-jsx/css";
import { colors } from "../../../../config/constants.js";

export const { styles, className } = css.resolve`
  .header__menu__mobile-menu-icon {
    display: none;
  }
  .header__menu__mobile-menu-icon :global(svg) {
    fill: ${colors.primary} !important;
  }
  @media only screen and (max-width: 768px) {
    .header__menu__mobile-menu-icon {
      display: block;
    }
  }
`;
