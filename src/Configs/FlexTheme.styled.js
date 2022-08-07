import styled from "styled-components";
import {device} from "./MediaQueries";

export const FlexWrapper = styled.div`
  display: flex;
  align-items: ${props => props.align};
  justify-content: ${props => props.justify};
  @media ${device.mobileL} {
    flex-direction: ${props => props.direction};
  }
`

export const FlexWrapperDirection = styled(FlexWrapper)`
  @media ${device.laptopL} {
    flex-direction: ${props => props.direction};
  }
`

export const FlexWrapperCard = styled(FlexWrapper)`
  flex-direction: ${props => props.direction};
`

export const FlexGrowWrapper = styled.div`
  display: flex;
  flex-grow: 1;
`

