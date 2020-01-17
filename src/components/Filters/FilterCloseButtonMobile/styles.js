import css from 'styled-jsx/css';
import { majorScale } from 'evergreen-ui';

export const { className, styles } = css.resolve`
  .filters__close-button-mobile {
    display: none !important;
    position: fixed !important;
    right: ${majorScale(1) - 1}px;
    top: ${majorScale(2) + 5}px;
    line-height: 38px;
  }

  @media only screen and (max-width: 768px) {
    .filters__close-button-mobile {
      display: block !important;
    }
  }
`;
