import styled from 'styled-components'

export default styled.p`
  font-size: 18px;
  line-height: 28px;
  font-weight: normal;
  opacity: ${props => props.opacity || 1};

  @media (max-width: ${props => props.theme.breakpoints.tablet}px) {
    font-size: 18px;
    line-height: 28px;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}px) {
    font-size: 13px;
    line-height: 20px;
  }
`
