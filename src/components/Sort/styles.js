import css from "styled-jsx/css";

export const { styles, className } = css.resolve`
  .sort :global(a:hover) {
    color: #3c6e71 !important;
    opacity: 0.75;
  }

  .sort :global(input) {
    padding-bottom: 1px;
    border: 0;
    box-shadow: none;
    background: #f1f1f1;
  }

  .sort :global(.sortPane__searchInput) {
    display: inline;
  }

  @media only screen and (max-width: 1024px) {
    .sort :global(.sortPane) {
      justify-content: space-between;
    }
  }

  @media only screen and (max-width: 768px) {
    .sort {
      margin-left: 0;
      margin-right: 0;
      padding: 8px;
      padding-left: 0;
      padding-right: 0;
    }
    .sort :global(button) {
      color: #3c6e71;
    }

    /* hide desktop search field */
    .sort :global(.sortPane__searchInput) {
      display: none;
    }
  }
`;
