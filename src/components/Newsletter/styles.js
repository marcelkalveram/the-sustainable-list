import css from 'styled-jsx/css';
import { majorScale } from 'evergreen-ui/commonjs/scales';
import { colors } from '../../config/constants';

export const { styles, className } = css.resolve`
  .newsletter {
  }

  @media only screen and (max-width: 1550px) {
    .newsletter {
      flex-direction: column;
    }
    .newsletter :global(.newsletter__left) {
      margin-bottom: ${majorScale(1)}px;
    }
    .newsletter :global(.newsletter__right) {
    }
  }

  @media only screen and (max-width: 967px) {
    .newsletter {
    }
    .newsletter :global(.newsletter__left) {
      flex-direction: column;
      text-align: center;
    }
    .newsletter :global(.newsletter__left svg) {
      margin-bottom: ${majorScale(1)}px;
    }
    .newsletter :global(.newsletter__right) {
      width: 100%;
      justify-content: center;
    }
    .newsletter :global(.newsletter__right p) {
      display: none;
    }
  }
  @media only screen and (max-width: 768px) {
    margin-left: ${majorScale(2)}px;
    margin-bottom: ${majorScale(1)}px;
  }
  @media only screen and (max-width: 464px) {
    .newsletter :global(.newsletter__right input) {
      width: 58%;
    }
  }
`;
