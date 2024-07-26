import css from "styled-jsx/css";
import { colors } from "../../../config/constants";
import { minorScale } from "evergreen-ui";

export const { className, styles } = css.resolve`
  .footer :global(ul li a),
  .footer :global(ul li a:link),
  .footer :global(ul li a:visited) {
    color: ${colors.white};
  }

  .footer :global(a),
  .footer :global(a:visited),
  .footer :global(a:link),
  .footer :global(a:hover) {
    color: ${colors.white} !important;
  }

  @media only screen and (max-width: 560px) {
    .footer {
      height: 50vw;
    }

    .footer :global(.footer__menu) {
      flex-direction: column-reverse !important;
      text-align: center;
      justify-content: center;
      align-items: center;
    }

    .footer :global(ul) {
      margin: 0;
      margin-top: ${minorScale(1)}px;
    }
  }
`;
