import css from 'styled-jsx/css';

export const brandsStyles = css`
  .brands {
    padding: 16px;
    padding-top: 0;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 16px;
    grid-auto-rows: minmax(100px, auto);
  }

  @media only screen and (max-width: 1280px) {
    .brands {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media only screen and (max-width: 1024px) {
    .brands {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  @media only screen and (max-width: 768px) {
    .brands {
      margin-top: -16px;
      display: block;
    }
  }
`;
