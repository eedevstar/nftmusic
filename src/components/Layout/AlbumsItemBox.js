import styled from 'styled-components'

const AlbumsItemBox = styled.div`
  flex: 0 ${props => (props.fullWidth ? '16%' : '30%')};
  margin-bottom: 25px;

  @media (max-width: ${props => props.theme.breakpoints.desktop}px) {
    flex: 0 ${props => (props.fullWidth ? '30%' : '30%')};
  }
  @media (max-width: ${props => props.theme.breakpoints.tablet}px) {
    flex: 0 45%;
  }
  @media (max-width: ${props => props.theme.breakpoints.mobile}px) {
    flex: 0 90%;
  }
`

export default AlbumsItemBox
