import styled from 'styled-components'

const Input = styled.input.attrs`
  background: ${props => props.theme.colors.whiteLight};
  backdrop-filter: blur(30px);
  border-radius: 16px;
  outline: none;
  border: none;
  font-size: 20px;
  line-height: 28px;
  padding: 14px;
  color: ${props => props.theme.colors.white};
  opacity: 0.7;
`

export default Input
