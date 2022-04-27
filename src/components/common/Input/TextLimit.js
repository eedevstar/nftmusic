import { useState, useEffect, useRef, forwardRef } from 'react'
import { TextMessage } from "@components/common/Message";
import styled, { css, useTheme } from "styled-components";

const TextLimit = forwardRef((props, ref) => {
  const theme = useTheme();
  const {value, onChange, rows, limit, msgType, msgText} = props
  // const [value, setValue] = useState('')

  // const handleChange = event => {
  //   setValue(event.target.value)
  //   getText(event.target.value)
  // }

  return (
    <Wrapper>
      <OutDiv>
        <TextWarn limit={value.length > limit}>{value.length}</TextWarn>/
        {limit}
      </OutDiv>

      <StyledDiv>
        <TextArea
          rows={rows >= 3 ? rows : 3}
          value={value}
          ref={ref}
          onChange={onChange}
        />
      </StyledDiv>
      <TextMessage
        icon={msgType}
        text={msgText}
        color={theme.message.input.color[msgType]}
        size={theme.message.input.size}
       ></TextMessage>
    </Wrapper>
  )
})

TextLimit.displayName = 'TextLimit'

export default TextLimit

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
`

const StyledDiv = styled('div')`
  border-radius: 2px;
  padding: 15px;
  box-shadow: ${props => props.theme.shadows.shadow10};
  background: ${props => props.theme.colors.white};
`

const TextArea = styled('textarea')`
  flex: 1;
  width: 100%;
  border: none;
  outline: none;
  resize: none;
  color: ${props =>
    props.varient
      ? props.theme.textArea[props.varient].color
      : props.theme.textArea.default.color};

  scrollbar-color: ${props =>
    props.varient
      ? props.theme.textArea[props.varient].scrollThumbColor +
        ' ' +
        props.theme.textArea[props.varient].scrollTrackColor
      : props.theme.textArea.default.scrollThumbColor +
        ' ' +
        props.theme.textArea.default.scrollTrackColor};

  scrollbar-width: thin;

  &::-webkit-scrollbar {
    width: 9px;
    background-color: ${props =>
      props.varient
        ? props.theme.textArea[props.varient].scrollTrackColor
        : props.theme.textArea.default.scrollTrackColor};
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 3px;
    background-color: ${props =>
      props.varient
        ? props.theme.textArea[props.varient].scrollThumbColor
        : props.theme.textArea.default.scrollThumbColor};
  }
`

const OutDiv = styled('div')`
  display: flex;
  justify-content: flex-end;
  position: relative;
  color: ${props => props.theme.colors.grey60};
  margin-bottom: 15px;
`

const TextWarn = styled('p')`
  padding: 0px;
  margin: 0px;
  color: ${props =>
    props.limit ? props.theme.colors.red50 : props.theme.colors.grey60};

  transition: color 0.5s;
`
