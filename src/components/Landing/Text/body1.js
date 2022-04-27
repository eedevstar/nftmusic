import styled from 'styled-components'

export default styled.p`
  font-size: 26px;
  line-height: 34px;
  font-weight: normal;
  opacity: ${props => props.opacity || 1};

  @media (max-width: ${props => props.theme.breakpoints.desktop}px) {
    font-size: 22px;
    line-height: 30px;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}px) {
    font-size: 20px;
    line-height: 28px;
  }
`
