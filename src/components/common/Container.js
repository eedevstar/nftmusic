import styled from 'styled-components'

export default styled.div`
  margin: 0 20px;

  @media (min-width: ${props => props.theme.breakpoints.tablet}px) {
    margin: 0 64px;
  }

  @media (min-width: ${props => props.theme.breakpoints.large}px) {
    width: 1200px;
    margin: auto;
  }
`
