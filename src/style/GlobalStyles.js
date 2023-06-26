import { createGlobalStyle } from "styled-components";


export const GlobalStyles = createGlobalStyle`

  html{
    scroll-behavior: smooth;
  }
  body {
    background: #404d54;
  }
  * {    
    font-family: 'Oswald', sans-serif;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Noto Sans', sans-serif;
    text-decoration: none;
    list-style-type: none;
}
`