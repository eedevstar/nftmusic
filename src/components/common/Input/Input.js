import { useState, useEffect, useRef, forwardRef } from "react";
import styled, { css, useTheme } from "styled-components";
import { TextMessage } from "@components/common/Message";
import Icon from '@components/common/Icon'

/**
 * Parameters
 * include original parameters of Input tag.
 * Floating Label : label (string)
 * Adorment : startAdornment, endAdornment (component)
 * Info Text Type : msgType ("Success", "Info", "Error")
 * Info Text Content : msgText (string)
 */

const Input = forwardRef( (props, ref) => {
  const theme = useTheme();

  const {
    value,
    label,
    varient,
    type,
    disabled,
    msgType,
    msgText,
    startAdornment,
    endAdornment,
    ...rest } = props;

  const [active, setActive] = useState(rest.noFloat || (value && value.length) > 0);

  const [inputType, setInputType] = useState(type);
  const [showPassword, setShowPassword] = useState(true);

  useEffect(() => {
    setActive(rest.noFloat || (value && value.length) > 0);
  }, [value]);

  const onFocusEvent = () => {
    setActive(true);
  };

  const onBlurEvent = (event) => {
    setActive(rest.noFloat || event.target.value.length !== 0);
  };

  const handleClickShowPassword = (event) => {
    event.preventDefault()

    if(showPassword)
      setInputType("text")
    else
      setInputType("password")

    setShowPassword(!showPassword)
  }

  return (
    <InputWrapper>

      <StartAdornment>
        {startAdornment && startAdornment}
      </StartAdornment>

      <Wrapper disabled={disabled} varient={varient}>

        <LabelInputContainer>
          <Label active={active}>{label}</Label>

          <FloatingInput
            type={inputType}
            ref={ref}
            varient={varient}
            value={value}
            active={active}
            disabled={disabled}
            onBlur={onBlurEvent}
            onFocus={onFocusEvent}
            autoComplete="off"
            hasAdornment={startAdornment || endAdornment || type ==="password"}
            {...rest}
          />

        </LabelInputContainer>

      </Wrapper>


      <EndAdornment>
        {type == "password" && showPassword &&
          <Icon
            type="Show"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            hoverColor={theme.Icon.hover.blue}
            onClick={handleClickShowPassword}
          />
        }
        {type == "password" && !showPassword &&
          <Icon
            type="Hide"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            hoverColor={theme.Icon.hover.blue}
            onClick={handleClickShowPassword}
          />
        }

        {endAdornment && endAdornment}

      </EndAdornment>

      <TextMessage
        icon={msgType}
        text={msgText}
        color={theme.message.input.color[msgType]}
        size={theme.message.input.size}
       ></TextMessage>
    </InputWrapper>
  );
});

Input.displayName = 'Input'

export default Input;


const InputWrapper = styled.div`
  position: relative;
`

const Wrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  position: relative;
  alignitems: center;

  padding: ${(props) => props.varient ?
    props.theme.input[props.varient].padding :
    props.theme.input.default.padding};
  color: ${(props) => props.varient ?
    props.theme.input[props.varient].color :
    props.theme.input.default.color};

  border-bottom: ${(props) => props.varient ?
      props.theme.input[props.varient].borderBottom :
      props.theme.input.default.borderBottom};

  ${props => props.disabled && css`
     color: ${(props) => props.varient ?
      props.theme.input[props.varient].disabled.color :
      props.theme.input.default.disabled.color};

    border-bottom: ${(props) => props.varient ?
      props.theme.input[props.varient].disabled.borderBottom :
      props.theme.input.default.disabled.borderBottom};
  `}

  ${props => !props.disabled && css`
     &:hover{
      color: ${(props) => props.varient ?
        props.theme.input[props.varient].hover.color :
        props.theme.input.default.hover.color};

      border-bottom: ${(props) => props.varient ?
        props.theme.input[props.varient].hover.borderBottom :
        props.theme.input.default.hover.borderBottom};
    }
    &:focus-within{
      color: ${(props) => props.varient ?
          props.theme.input[props.varient].focus.labelColor :
          props.theme.input.default.focus.labelColor
      };
      border-bottom: ${(props) => props.varient ?
        props.theme.input[props.varient].focus.borderBottom :
        props.theme.input.default.focus.borderBottom};
    }
  `}

`;

const Label = styled.label`
  padding: 0;
  margin: 0;
  border: 0;
  position: absolute;
  font-size: ${(props) => props.active ? "20px" : "18px"};
  line-height: ${(props) => props.active ? "28px" : "24px"};
  top: 0;
  transition: transform 0.2s ease-in-out;
  transform-origin: left top;
  cursor: none;
  pointer-events: none;
  width: 100%;
  transform: ${(props) =>
    props.active ? "translate3d(0, -70%, 0) scale(0.70)" : "none"};
`;

const LabelInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
  height: 100%;
  width: 100%;
  font-size: inherit;
`;

const FloatingInput = styled.input`
  padding: 0px;
  ${(props) => props.hasAdornment && css`
    padding-right: 40px;
  `}
  margin: 0;
  width: 100%;
  border: none;
  outline: none;
  line-height: 24px;
  font-size: ${(props) => props.varient ?
    props.theme.input[props.varient].fontSize :
    props.theme.input.default.fontSize
  };

  background: ${(props) => props.varient ?
    props.theme.input[props.varient].background :
    props.theme.input.default.background
  };
  color: ${(props) => props.varient ?
    props.theme.input[props.varient].color :
    props.theme.input.default.color
  };

  ${(props) => props.align && css `
    text-align: ${(props) => props.align};
  `}

  &::placeholder {
    color: ${(props) => props.theme.colors.gray36};

  }
  &:hover{
    color: ${(props) => props.varient ?
      props.theme.input[props.varient].hover.color :
      props.theme.input.default.hover.color
    };
  }
  &:focus{
    color: ${(props) => props.varient ?
        props.theme.input[props.varient].focus.color :
        props.theme.input.default.focus.color
    };
  }
  &:disabled {
    color: ${(props) => props.varient ?
      props.theme.input[props.varient].disabled.color :
      props.theme.input.default.disabled.color
    };
  }
`;

const EndAdornment = styled.div`
  position: absolute;
  right: 0px;
  top: 10px;
`

const StartAdornment = styled.div`
  position: absolute;
  right: leftpx;
  top: 10px;
`
