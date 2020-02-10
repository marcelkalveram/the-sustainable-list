import css from 'styled-jsx/css';

export const { styles, className } = css.resolve`
  @media only screen and (max-width: 480px) {
    .brand-details :global(.brand-details__meta__styles) {
      white-space: nowrap;
    }
    .brand-details :global(.brand-details__meta__styles .badge span) {
      font-size: 10px;
    }
`;
