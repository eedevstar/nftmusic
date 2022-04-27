import styled, {css} from "styled-components";
import React from "react";
import Icon from "@components/common/Icon";

/**
 * Parameters
 * Text Button Type : varient ("service", "favorite")
 */

const Button = styled.a`
  text-decoration: none;
  position: relative;
  display: flex;

  background: ${(props) => props.theme.button[props.varient].background};
  color: ${(props) => props.theme.button[props.varient].color};
  font-size: ${(props) => props.theme.button[props.varient].fontSize};
  padding: ${(props) => props.theme.button[props.varient].padding};
  border: none;
  width: ${(props) => (props.fullWidth ? "100%" : "fit-content")};
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.01em;
  justify-content: center;
  border-radius: 2px;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme.button.hover[props.varient].background};
    color: ${(props) => props.theme.button.hover[props.varient].color};
    ${props => props.varient == "service" && css`
      path {
        fill: ${(props) => props.theme.button.hover[props.varient].color};
        fill-opacity: 1;
      }
    `}
  }

  ${props => props.active && css`
    background: ${(props) => props.theme.button.hover[props.varient].background};
    color: ${(props) => props.theme.button.hover[props.varient].color};
    ${props => props.varient == "service" && css`
      path {
        fill: ${(props) => props.theme.button.hover[props.varient].color};
        fill-opacity: 1;
      }
    `}
  `}

  &:disabled {
    background: ${(props) => props.theme.button.disabled[props.varient].background};
    box-shadow: none;
  }
`;

const TextButton = React.forwardRef(({ onClick, ...props }, ref) => {
  return (
    <Button {...props} onClick={onClick} ref={ref}>
      {props.children}
    </Button>
  );
});

TextButton.displayName = "TextButton";

export default TextButton;
