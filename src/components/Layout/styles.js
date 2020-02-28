/* styles.js */
import css from 'styled-jsx/css';
import { colors } from '../../config/constants';

export const body = css.global`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
      'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overscroll-behavior-y: contain;
    overflow-x: hidden;
  }

  ul li {
    list-style: none;
    padding: 0;
    float: left;
    margin-right: 24px;
  }

  ul li:last-child {
    margin-right: 0;
  }

  ul li a,
  ul li a:link,
  ul li a:visited {
    color: #df704b;
    text-decoration: none;
  }

  ul li a:hover {
    text-decoration: none;
  }

  a,
  a:visited,
  a:link,
  a:hover {
    text-decoration: none;
    color: #df704b !important;
    cursor: pointer;
  }

  .buttonPrimary {
    background-image: linear-gradient(
      to top,
      ${colors.secondary},
      ${colors.secondarySoft}
    ) !important;
    border-color: ${colors.secondary} !important;
  }

  .lazy-load-image-background.opacity {
    background-image: none !important;
    opacity: 0;
  }

  .lazy-load-image-background.opacity.lazy-load-image-loaded {
    opacity: 1;
    transition: opacity 0.3s;
  }
`;
