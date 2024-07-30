import css from "styled-jsx/css";
import { majorScale } from "evergreen-ui/commonjs/scales";
import { colors } from "theme/constants";

export const filtersStyles = css`
  .filters {
    float: left;
    width: 200px;
    text-align: left;
    padding: ${majorScale(2)}px;
    margin-top: ${majorScale(1)}px;
  }

  .filters :global(.filters__cta) {
    display: none;
  }

  @media only screen and (max-width: 768px) {
    .filters {
      -webkit-transform: translate3d(0, 0, 0);
      float: none;
      display: none;
      position: fixed;
      background: ${colors.white};
      overflow-y: scroll;
      -webkit-overflow-scrolling: touch;
      width: 100%;
      height: calc(100% - ${majorScale(10)}px);
      margin-top: 0;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 3;
    }
    .filters--visible {
      display: block;
    }
    .filters :global(.filters__cta) {
      display: flex;
    }
  }

  /* checkbox gradient */
  .filters :global(label div) {
    background-image: none;
  }
  .filters :global(label :checked + div) {
    background-image: linear-gradient(to bottom, #509195, #3c6e71) !important;
  }
`;
