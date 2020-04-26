import css from 'styled-jsx/css';

export const brandsStyles = css`
  .brands {
    padding: 16px;
    padding-top: 0;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 32px;
    grid-auto-rows: minmax(100px, auto);
  }

  @media only screen and (max-width: 2200px) {
    .brands {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  @media only screen and (max-width: 1680px) {
    .brands {
      grid-gap: 16px;
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media only screen and (max-width: 1200px) {
    .brands {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media only screen and (max-width: 800px) {
    .brands {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  @media only screen and (max-width: 768px) {
    .brands {
      grid-template-columns: repeat(2, 1fr);
      margin-top: -16px;
      /* display: block; */
    }
  }
  @media only screen and (max-width: 600px) {
    .brands {
      grid-template-columns: repeat(1, 1fr);
      display: block;
    }
  }
`;
