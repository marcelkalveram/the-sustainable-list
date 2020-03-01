import css from 'styled-jsx/css';
import { colors } from '../../../config/constants';

export const { className, styles } = css.resolve`
  .footer :global(ul li a),
  .footer :global(ul li a:link),
  .footer :global(ul li a:visited) {
    color: ${colors.white};
  }

  .footer :global(a),
  .footer :global(a:visited),
  .footer :global(a:link),
  .footer :global(a:hover) {
    color: ${colors.white} !important;
  }
`;
