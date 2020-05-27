import css from 'styled-jsx/css';

export const mainStyles = css`
  .main {
    margin-left: 200px;
    min-height: 2790px;
  }

  @media only screen and (max-width: 768px) {
    .main {
      margin-left: 0;
      min-height: auto;
    }
  }
`;
