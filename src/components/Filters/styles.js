import css from 'styled-jsx/css';

export const filtersStyles = css`
  .filters {
    float: left;
    width: 200px;
    text-align: left;
    padding: 16px;
    margin-top: 8px;
  }

  .filters :global(.filters__cta) {
    display: none;
  }

  @media only screen and (max-width: 768px) {
    .filters {
      display: none;
      position: fixed;
      background: #fff;
      overflow-y: scroll;
      -webkit-overflow-scrolling: touch;
      width: calc(100vw - 32px);
      height: calc(100vh - 32px);
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
  .filters :global(label :checked + .📦bblr_3px) {
    background-image: linear-gradient(to bottom, #509195, #3c6e71) !important;
  }
`;
