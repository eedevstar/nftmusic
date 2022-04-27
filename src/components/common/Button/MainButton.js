import styled from "styled-components";

/**
 * Parameters
 * Text Button Type : varient ("primary", "secondary", "default")
 */

const Button = styled.button`
  background: ${(props) => props.theme.button[props.varient].background};
  box-shadow: ${(props) => props.theme.shadows.shadow50};
  border-radius: 2px;
  padding: 12px 16px;
  width: ${(props) => props.fullWidth ? "100%" : "auto"};
  border:none;
  font-weight: bold;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${(props) => props.theme.button[props.varient].color};

  &:hover {
    background: ${(props) => props.theme.button.hover[props.varient].background};
    box-shadow: ${(props) => props.theme.shadows.shadow60};
    cursor: pointer;
  }

  &:disabled {
    background: ${(props) => props.theme.button.disabled.background};
    box-shadow: none;
  }
`;

export default Button;
