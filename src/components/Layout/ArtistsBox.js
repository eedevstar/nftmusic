import styled from 'styled-components'

const ArtistsBox = styled.div`
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  column-gap: 4%;

  @media (max-width: ${props => props.theme.breakpoints.desktop}px) {
    column-gap: 4%;
  }
  @media (max-width: ${props => props.theme.breakpoints.tablet}px) {
    column-gap: 9%;
  }
  @media (max-width: ${props => props.theme.breakpoints.mobile}px) {
    column-gap: 2%;
  }
`

export default ArtistsBox
