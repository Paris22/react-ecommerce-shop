import styled, {createGlobalStyle} from "styled-components"
import {baseTheme} from "./BaseTheme.styled";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    height: 100vh;
  }

  body {
    min-height: 100vh;
    font-family: Open-Sans, Helvetica, Sans-Serif, serif;
    scroll-behavior: smooth;
    background: ${baseTheme.colors.gradDullBlue};
  }

  #root {
    min-height: 100vh;
    padding: 25px;
  }
`

export const MarginHeader = styled.div`
  margin: 10px;
`