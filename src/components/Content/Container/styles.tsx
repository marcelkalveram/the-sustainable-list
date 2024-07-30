import css from "styled-jsx/css";
import { majorScale } from "evergreen-ui";

export const { className, styles } = css.resolve`
  @media only screen and (max-width: 1140px) {
    .content-container {
      display: block;
    }
  }
  @media only screen and (max-width: 560px) {
    .content-container {
      padding: ${majorScale(4)}px;
    }
  }
`;
