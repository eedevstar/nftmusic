import { useState, useEffect, useRef, forwardRef } from "react";
import styled, { css, useTheme } from "styled-components";
import { TextMessage } from "@components/common/Message";
import Tooltip from "@components/common/Tooltip";
import Icon from "@components/common/Icon";

/**
 * Parameters
 * include original parameters of Input tag.
 * Floating Label : label (string)
 * Info Text Type : msgType ("Success", "Info", "Error")
 * Info Text Content : msgText (string)
 */

const CopyInput = forwardRef( (props, ref) => {
  const theme = useTheme();

  const {
    id,
    value,
    label,
    varient,
    type,
    disabled,
    className,
    msgType,
    msgText,
    ...rest
  } = props;

  const [active, setActive] = useState(value && value.length > 0);
  const [showTooltip, setShowTooltip] = useState(false);

  const copyTooltip =
    <CopyTooltipBox>
      Copy to clipboard
    </CopyTooltipBox>;

  const copiedTooltip =
    <CopyTooltipBox>
      Copied
      <Icon/>
    </CopyTooltipBox>;

  const [tooltip, setTooltip] = useState(copyTooltip);

  useEffect(() => {
    setActive(value && value.length > 0);
  }, [value]);


  const onFocusEvent = (event) => {
    setActive(true);
  };

  const onBlurEvent = (event) => {
    setActive(event.target.value.length !== 0);
  };

  const onMouseEnter = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setShowTooltip(true);
    setTooltip(copyTooltip);
  };

  const onMouseLeave = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setShowTooltip(false);
  };

  const onClickCopy = (event) => {
    event.preventDefault();
    event.stopPropagation();
    navigator.clipboard.writeText(value)
    setTooltip(copiedTooltip);
    setShowTooltip(true);
  };

  return (
    <InputWrapper>
      <Wrapper disabled={disabled} varient={varient}>
        <LabelInputContainer>
          <Label active={active}>{label}</Label>
          <FloatingInput
            value={value}
            active={active}
            disabled={disabled}
            className={className}
            onBlur={onBlurEvent}
            onFocus={onFocusEvent}
            ref={ref}
            type={type}
            {...rest}
          />
        </LabelInputContainer>

        <TooltipBox showTooltip={showTooltip}>
          {tooltip}
        </TooltipBox>
      </Wrapper>

      <EndAdornment>
        <Icon
          type="Copy"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          hoverColor={theme.Icon.hover.blue}
          onClick={onClickCopy}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />
      </EndAdornment>

      <TextMessage
        icon={msgType}
        text={msgText}
        color={theme.message.input.color[msgType]}
        size={theme.message.input.size}
      />
    </InputWrapper>
  );
});

CopyInput.displayName = 'CopyInput'

export default CopyInput;

const InputWrapper = styled.div`
  position: relative;
`

const Wrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  position: relative;
  alignitems: center;
  padding: 11px 0px 8px 0px;
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
  bottom: 0;
  transition: all 0.2s ease-in-out;
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
  padding: 0;
  margin: 0;
  border: none;
  outline: none;
  font-size: 18px;
  line-height: 24px;
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

const TooltipBox = styled.div`
  position: absolute;
  top: -27px;
  right: 0px;

  opacity: 0;
  transition: opacity 0.5s ease-in-out;

  ${({ showTooltip }) =>
    showTooltip &&
    css`
      opacity: 1;
    `}
`;

const CopyTooltipBox = styled.div`
  background: ${(props) => props.theme.tooltip.input.background};
  border-radius: 4px;
  backdrop-filter: ${(props) => props.theme.tooltip.input.backdropFilter};
  padding: 7px 8px;
  display: flex;
  align-items: flex-start;
  color: ${(props) => props.theme.tooltip.input.color};
  font-size: 14px;
`
