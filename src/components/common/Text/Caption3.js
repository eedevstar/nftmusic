import styled, { css } from 'styled-components'

export default styled.p`
  font-size: 12px;
  line-height: 20px;
  font-weight: bold;
  margin: 0;
  width: fit-content;
  text-transform: uppercase;

  color: ${props =>
    props.varient
      ? props.theme.colors[props.varient]
      : props.theme.colors.gray28};

  font-weight: ${props => (props.bold ? 'bold' : 'normal')};

  ${props =>
    props.varient == 'GreenRound' &&
    css`
      color: ${props => props.theme.colors.green80};
      background: ${props => props.theme.colors.green10};
      padding: 2px 12px;
      border-radius: 62px;
      white-space: nowrap;
    `}

  ${props =>
    props.varient == 'BlueRound' &&
    css`
      color: ${props => props.theme.colors.blue80};
      background: ${props => props.theme.colors.blue101};
      padding: 2px 12px;
      border-radius: 62px;
      white-space: nowrap;
    `}

  ${props =>
    props.varient == 'GrayRound' &&
    css`
      color: ${props => props.theme.colors.gray64};
      background: ${props => props.theme.colors.gray12};
      padding: 2px 12px;
      border-radius: 62px;
      white-space: nowrap;
    `}

  @media (max-width: ${props => props.theme.breakpoints.tablet}px) {
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}px) {
  }
`
