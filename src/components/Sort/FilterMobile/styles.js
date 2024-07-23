import css from "styled-jsx/css";

export const filterMobileStyles = css`
  .filter__mobile {
    display: none;
  }

  @media only screen and (max-width: 768px) {
    .filter__mobile {
      display: flex;
      flex-direction: row-reverse;
    }
    /* make search box visible */
    .filter__mobile :global(.ub-pst_relative.ub-f-wght_400) {
      display: inline-flex !important;
    }
  }
`;
