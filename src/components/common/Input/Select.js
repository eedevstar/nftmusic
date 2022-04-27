import styled, { css, useTheme } from "styled-components";
import ReactSelect from 'react-select'
import { TextMessage } from '../Message'

const customStyles = {
  control: () => ({
    alignItems: 'center',
    border: 0,
    borderBottom: '1px solid black',
    borderColor: 'hsl(0, 0%, 80%)',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    minHeight: '38px',
    outline: '0!important',
    position: 'relative',
    transition: 'all 100ms',
    boxSizing: 'border-box',
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  menu: () => ({
    top: '100%',
    backgroundColor: 'hsl(0, 0%, 100%)',
    borderRadius: '4px',
    boxShadow: '0 0 0 1px hsl(0deg 0% 0% / 10%), 0 4px 11px hsl(0deg 0% 0% / 10%)',
    marginBottom: '8px',
    marginTop: '8px',
    position: 'absolute',
    width: '100%',
    zIndex: 999,
    boxSizing: 'border-box',
  })
}

const Select = (props) => {
  const theme = useTheme();

  return (
    <>
      <ReactSelect
        styles={customStyles}
        {...props}
      />
      <TextMessage
        icon={props.msgType}
        text={props.msgText}
        color={theme.message.input.color[props.msgType]}
        size={theme.message.input.size}
       ></TextMessage>
    </>
  )
}

export default Select
