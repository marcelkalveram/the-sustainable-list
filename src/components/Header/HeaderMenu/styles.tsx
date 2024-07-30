import css from "styled-jsx/css";
import { colors } from "theme/constants";
import { majorScale } from "evergreen-ui";

export const { styles, className } = css.resolve`
  .header__menu :global(ul li a, ul li a:link, ul li a:visited) {
    color: ${colors.primary};
    font-weight: 500;
  }

  .header__menu :global(a, a:visited, a:link, a:hover) {
    color: ${colors.primary} !important;
  }

  @media only screen and (max-width: 768px) {
    .header__menu {
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      background-color: ${colors.primarySoft};
      z-index: 2;
    }
    .header__menu--isVisible {
      display: block;
    }
    .header__menu :global(.header__menu__ul) {
      display: flex;
      height: 100%;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .header__menu :global(.header__menu__li) {
      width: 100%;
      text-align: center;
      margin: ${majorScale(2)}px 0;
      margin-top: 0;
      padding-top: ${majorScale(2)}px;
      padding-bottom: ${majorScale(3)}px;
      border-bottom: 1px solid rgba(87.5%, 43.9%, 29.4%, 0.2);
    }
    .header__menu :global(.header__menu__li:last-child) {
      border-bottom: 0;
    }
    .header__menu :global(.header__menu__li a) {
      font-size: 24px;
    }
  }
`;
