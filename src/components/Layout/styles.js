/* styles.js */
import css from 'styled-jsx/css';
import { colors } from '../../config/constants';

export const body = css.global`
  html,
  body {
    overflow-x: hidden;
  }
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
      'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overscroll-behavior-y: contain;
  }

  .mc-modal {
    width: 505px !important;
  }

  ul.ul li {
    list-style: none;
    padding: 0;
    float: left;
    margin-right: 24px;
  }

  ul.ul li:last-child {
    margin-right: 0;
  }

  ul.ul li a,
  ul.ul li a:link,
  ul.ul li a:visited {
    text-decoration: none;
  }

  ul.ul li a:hover {
    text-decoration: none;
  }

  a,
  a:visited,
  a:link,
  a:hover {
    text-decoration: none;
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

  /* terms and conditions */
  .iub_container h1 {
    border-bottom-color: rgb(238, 238, 238);
    border-bottom-style: solid;
    border-bottom-width: 1px;
    color: rgb(60, 110, 113);
    font-size: 24px;
    font-weight: 500;
    letter-spacing: -0.07px;
    line-height: 28px;
    margin-bottom: 24px;
    margin-top: 0px;
    padding-bottom: 28px;
  }

  .iub_container h2 {
    color: rgb(60, 110, 113);
    font-size: 18px;
    font-weight: 500;
    letter-spacing: -0.05px;
    line-height: 20px;
    margin-bottom: 0px;
    margin-top: 0px;
    padding-bottom: 8px;
    padding-top: 24px;
  }

  .iub_container h3 {
    color: rgb(60, 110, 113);
    font-size: 16px;
    font-weight: 600;
    letter-spacing: -0.05px;
    line-height: 20px;
    margin-bottom: 0px;
    margin-top: 0px;
    padding-bottom: 8px;
    padding-top: 16px;
  }

  .iub_container h4 {
    color: rgb(60, 110, 113);
    font-size: 14px;
    font-weight: 600;
    letter-spacing: -0.05px;
    line-height: 20px;
    margin-bottom: 0px;
    margin-top: 0px;
    padding-bottom: 4px;
    padding-top: 16px;
  }

  .iub_container p {
    box-sizing: border-box;
    color: rgb(66, 90, 112);
    font-size: 14px;
    font-weight: 400;
    letter-spacing: -0.05px;
    line-height: 21px;
    margin-bottom: 0px;
    margin-top: 0px;
  }

  .iub_container ul {
    list-style-image: none;
    list-style-position: outside;
    list-style-type: disc;
    margin-bottom: 0px;
    margin-left: 17.6px;
    margin-right: 0px;
    margin-top: 0px;
    padding-bottom: 4px;
    padding-top: 4px;
  }

  .iub_container ul li {
    color: rgb(66, 90, 112);
    display: list-item;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: -0.05px;
    line-height: 20px;
    list-style-image: none;
    list-style-position: outside;
    list-style-type: disc;
    margin-bottom: 7px;
    margin-top: 7px;
    text-align: left;
  }

  .iub_container hr {
    display: none;
  }

  .iub_footer {
    display: none;
  }
`;
