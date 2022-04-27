import styled from 'styled-components'

const SecondaryButton = styled.button`
  background: ${props => props.theme.colors.whiteLight};
  backdrop-filter: blur(30px);
  border-radius: 16px;
  padding: 16px;
  color: ${props => props.theme.colors.white};
  border: none;
  cursor: pointer;
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;

  &:hover {
    outline: 2px solid ${props => props.theme.colors.primary};
  }
`

export default SecondaryButton
