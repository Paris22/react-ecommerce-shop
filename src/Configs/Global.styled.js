import styled, {createGlobalStyle} from "styled-components"
import {baseTheme} from "./BaseTheme";

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
    display: flex;
  }

  #root {
    min-height: 100vh;
  }
`
export const BoldText = styled.div`
  padding: 5px 0 5px 0;
  font-weight: 600;
`

export const MarginWrapper = styled.div`
  margin: 15px;
`

export const PaddingWrapper = styled.div`
  padding: ${props => props.padding}
`

export const Description = styled(PaddingWrapper)`
  font-weight: bold;
`
