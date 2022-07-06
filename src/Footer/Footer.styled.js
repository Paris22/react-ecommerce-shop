import styled from 'styled-components'
import {baseTheme} from '../Configs/BaseTheme'

export const FooterWrapper = styled.div`
  margin: 20px 0;
  padding: 0;
  height: 0;
  border-top: 1px solid ${baseTheme.colors.black};
  width: 100%;
  position: relative;
  flex-shrink: 0;
`