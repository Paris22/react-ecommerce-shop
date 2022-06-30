import styled from "styled-components";
import {baseTheme} from '../Configs/BaseTheme'
import {device} from "../Configs/MediaQueries";

export const CardWrapper = styled.div`
  box-shadow: 0 15px 20px ${baseTheme.colors.shadowBlack};
  border: 1px solid ${baseTheme.colors.white};
  padding: 15px;
  border-radius: 10px;
  @media ${device.laptop} {
    display: flex;
    flex-direction:column;
    padding: 5px;
  }
`