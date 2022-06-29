import styled from "styled-components";

export const FlexTheme = styled.div`
  display: flex;
  align-items: ${props => props.align};
  justify-content: ${props => props.justify};
  flex-direction: ${props => props.direction};
`