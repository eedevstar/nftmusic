import styled from 'styled-components'

const PrimaryButton = styled.button`
  background: ${props => props.theme.colors.primary};
  box-shadow: ${props => props.theme.shadows.btn};
  border-radius: 16px;
  padding: 16px;
  color: ${props => props.theme.colors.white};
  border: none;
  cursor: pointer;
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;

  &:hover {
    background: ${props => props.theme.colors.greenLight};
    box-shadow: ${props => props.theme.shadows.btnHover};
  }
`

export default PrimaryButton
