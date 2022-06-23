import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100vh;
  }
  body {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    font-family:Open-Sans, Helvetica, Sans-Serif, serif;
    box-sizing: border-box;
    scroll-behavior: smooth;
    background: rgb(190,242,245);
    background: radial-gradient(circle, rgba(190,242,245,1) 0%, rgba(238,251,248,1) 100%);
  }
  #root {
    min-height: 100vh;
    padding: 25px;
  }
`