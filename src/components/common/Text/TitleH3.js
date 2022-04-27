import styled from 'styled-components'

export default styled.h2`
  font-family: 'Nexa';
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 46px;
  height: 50px;
  width: ${props => (props.fullWidth ? '100%' : 'fit-content')};
  text-align: center;
  text-transform: uppercase;
  letter-spacing: -1px;
  margin: 0px;

  color: ${props =>
    props.varient
      ? props.theme.colors[props.varient]
      : props.theme.colors.black};

  @media (max-width: ${props => props.theme.breakpoints.tablet}px) {
  }
  @media (max-width: ${props => props.theme.breakpoints.mobile}px) {
  }
`
