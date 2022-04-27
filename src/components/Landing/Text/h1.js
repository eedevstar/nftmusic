import styled from 'styled-components'

export default styled.h1`
  font-size: 76px;
  line-height: 92px;
  font-weight: 300;

  @media (max-width: ${props => props.theme.breakpoints.tablet}px) {
    font-size: 64px;
    line-height: 72px;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}px) {
    font-size: 36px;
    line-height: 48px;
  }
`
