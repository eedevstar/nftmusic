import styled from 'styled-components'

export default styled.p`
  font-size: 20px;
  line-height: 24px;
  font-weight: normal;

  @media (max-width: ${props => props.theme.breakpoints.tablet}px) {
    font-size: 18px;
    line-height: 24px;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}px) {
    font-size: 18px;
    line-height: 24px;
  }
`
