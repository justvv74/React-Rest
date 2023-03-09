import {createGlobalStyle}from 'styled-components';
import UbuntuBold from './fonts/UbuntuBold.woff2';
import UbuntuMedium from './fonts/UbuntuMedium.woff2';
import UbuntuRegular from './fonts/UbuntuRegular.woff2';

export default createGlobalStyle`
  @font-face {
    font-family: 'Ubuntu';
    font-display: swap;
    src: url(${UbuntuBold}) format('woff2');
    font-weight: 700;
    font-style: normal;
  };

  @font-face {
    font-family: 'Ubuntu';
    font-display: swap;
    src: url(${UbuntuMedium}) format('woff2');
    font-weight: 500;
    font-style: normal;
  };

  @font-face {
    font-family: 'Ubuntu';
    font-display: swap;
    src: url(${UbuntuRegular}) format('woff2');
    font-weight: 400;
    font-style: normal;
  };



  body {
    position: relative;
    padding: 0;
    min-width: 320px;
    font-size: 14px;
    line-height: 16px;
    font-family: 'Ubuntu', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: greyscale;
    color: var(--black);
  }

  :root {
    --black:       #2C2C2C;
    --blue:        #00A0AB;
    --blue-dark:   #ABCFD0;
    --green:       #A4CC33;
    --white:       #fff;
    --greyE8:      #E8E8E8;
    --greyEA:      #EAEAEA;
    --greyC7:      #C7C7C7;
    --greyF8:      #F8F8F8;

  }



  * {
    color: var(--black);
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: greyscale;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  p {
    margin: 0;
  }

  button {
    padding: 0;
    border: 0;
    background: transparent;
    cursor: pointer;
  }
`;
