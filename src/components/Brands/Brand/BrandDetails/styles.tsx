import css from "styled-jsx/css";

export const { styles, className } = css.resolve`
    .brand-details :global(.brand-details__meta__styles) {
      max-width: 75%;
      max-height: 19px;
      overflow: hidden;
    }
  @media only screen and (max-width: 480px) {
    .brand-details :global(.brand-details__meta__styles .badge span) {
      font-size: 10px;
    }
`;
