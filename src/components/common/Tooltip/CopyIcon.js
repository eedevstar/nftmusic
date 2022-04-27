import { useState, useEffect } from 'react'
import styled, { css, useTheme } from 'styled-components'
import Icon from '@components/common/Icon'

const IconWrapper = styled.div`
  cursor: pointer;
  margin-left: 10px;
  position: relative;
`

const CopyTooltipBox = styled.div`
  background: ${props => props.theme.tooltip.copyIcon.background};
  border-radius: 4px;
  backdrop-filter: ${props => props.theme.tooltip.copyIcon.backdropFilter};
  padding: 7px 8px;
  display: flex;
  align-items: flex-start;
  color: ${props => props.theme.tooltip.copyIcon.color};
  font-size: 14px;
`

const TooltipBox = styled.div`
  position: absolute;
  top: -35px;
  z-index: -1;
  right: 0px;
  white-space: nowrap;

  opacity: 0;
  transition: opacity 0.3s ease-in-out;

  ${({ showTooltip }) =>
    showTooltip &&
    css`
      opacity: 1;
      z-index: 10;
    `}
`

const CopyIcon = props => {
  const theme = useTheme()

  const copyTooltip = <CopyTooltipBox>Copy to clipboard</CopyTooltipBox>

  const copiedTooltip = (
    <CopyTooltipBox>
      Copied
      <Icon />
    </CopyTooltipBox>
  )

  const [tooltip, setTooltip] = useState(copyTooltip)
  const [showTooltip, setShowTooltip] = useState(false)

  const onMouseEnter = event => {
    event.preventDefault()
    event.stopPropagation()
    setShowTooltip(true)
    setTooltip(copyTooltip)
  }

  const onMouseLeave = event => {
    event.preventDefault()
    event.stopPropagation()
    setShowTooltip(false)
  }

  const onClickCopy = event => {
    event.preventDefault()
    event.stopPropagation()
    navigator.clipboard.writeText(props.value)
    setTooltip(copiedTooltip)
    setShowTooltip(true)
  }

  return (
    <IconWrapper>
      <Icon
        type={props.varient}
        viewBox="0 0 24 24"
        width="24"
        height="24"
        hoverColor={theme.Icon.hover[props.varient]}
        onClick={onClickCopy}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      />
      <TooltipBox showTooltip={showTooltip}>{tooltip}</TooltipBox>
    </IconWrapper>
  )
}

export default CopyIcon
