import styled from 'styled-components'

export default styled.h3`
  font-size: 24px;
  line-height: 28px;
  font-weight: 400;
  margin: 10px 0;

  color: ${props =>
    props.varient
      ? props.theme.colors[props.varient]
      : props.theme.colors.black};

  text-align: ${ props => props.align || 'left' };

  font-weight: ${props => (props.bold ? 'bold' : 'normal')};

  display: flex;
  justify-content: space-between;

  @media (max-width: ${props => props.theme.breakpoints.tablet}px) {
    flex-direction: column;
    row-gap: 5px;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}px) {
  }
`
