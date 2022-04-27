import styled from 'styled-components'

export default styled.h2`
  font-size: 56px;
  line-height: 68px;
  font-weight: normal;
  margin-top: 32px;
  margin-bottom: 32px;

  @media (max-width: ${props => props.theme.breakpoints.tablet}px) {
    font-size: 48px;
    line-height: 60px;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}px) {
    font-size: 28px;
    line-height: 34px;
  }
`
