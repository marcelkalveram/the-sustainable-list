import css from "styled-jsx/css";
import { majorScale } from "evergreen-ui";

export const { className, styles } = css.resolve`
  @media only screen and (max-width: 1140px) {
    .section {
      width: 100%;
      padding-right: 0;
      margin-bottom: ${majorScale(7)}px;
    }
  }
`;
