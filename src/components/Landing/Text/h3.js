import styled from 'styled-components'

export default styled.h2`
  font-size: 32px;
  line-height: 44px;
  margin-top: 16px;
  margin-bottom: 16px;

  @media (max-width: ${props => props.theme.breakpoints.tablet}px) {
    font-size: 28px;
    line-height: 40px;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}px) {
    font-size: 24px;
    line-height: 32px;
  }
`
