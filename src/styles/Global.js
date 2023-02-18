import { createGlobalStyle } from "styled-components";

import Brother1816Woff from "../fonts/Brother1816.woff";
import Brother1816Woff2 from "../fonts/Brother1816.woff2";

import { devices } from "./deviceWidth";

export const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing: border-box;
    color: black
}
@font-face {
    font-family: 'Brother1816' ;
    src: 
    url(${Brother1816Woff}) format('woff'),
    url(${Brother1816Woff2}) format('woff2');
    font-weight: 400;
}

html{
    font-size: 7px;
      @media ${devices.tablet} {
    font-size: 10px;
  }
}

body{
    font-family: 'Brother1816';
    font-size: 2rem;
    line-height: 1;
}
ol, ul {
    list-style: none outside none;
}
`;
