import css from 'styled-jsx/css';
import { majorScale } from 'evergreen-ui';

export const { className, styles } = css.resolve`
  @media only screen and (max-width: 768px) {
    .team-member {
      flex-direction: column !important;
      /* align-items: center; */
      /* text-align: center; */
    }
  }
`;
