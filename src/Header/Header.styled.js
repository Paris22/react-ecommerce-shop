import styled from 'styled-components'
import {baseTheme} from "../Configs/BaseTheme";
import {device} from "../Configs/MediaQueries";

export const UpperHeader = styled.div`
  background: ${baseTheme.colors.lightYellow};
  border-radius: 10px;
  box-shadow: 0 5px 10px 0 ${baseTheme.colors.shadowBlack};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  min-height: 70px;
  @media ${device.mobileS}, ${device.mobileM}, ${device.mobileL} {
    display: flex;
    flex-direction: column;
    padding: 5px;
  }
`

export const LogoImageWidth = styled.div`
  min-width: 200px;
`
