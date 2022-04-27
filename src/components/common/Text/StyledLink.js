import styled, {css}  from "styled-components";

const StyledLink = styled.a`
  color: ${(props) => props.varient ?
    props.theme.styledLink[props.varient].color :
    props.theme.styledLink.default.color};
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
  text-decoration: none;
  cursor: pointer;
  letter-spacing: 0.01em;

  &:hover {
    text-decoration: underline;
    color: ${(props) => props.varient ?
      props.theme.styledLink.hover[props.varient].color :
      props.theme.styledLink.hover.default.color};
  }

  ${props => props.active == 'active' && css`
    color: ${(props) => props.varient ?
      props.theme.styledLink.hover[props.varient].color :
      props.theme.styledLink.hover.default.color};
  `}

`;

export default StyledLink;
