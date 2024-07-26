import css from "styled-jsx/css";

export const { className, styles } = css.resolve`
  @media only screen and (max-width: 768px) {
    .team-member {
      flex-direction: column !important;
    }
  }
  @media only screen and (max-width: 600px) {
    .team-member {
      text-align: center;
      align-items: center;
    }
    .team-member :global(img) {
      margin-right: 0 !important;
    }
  }
`;
