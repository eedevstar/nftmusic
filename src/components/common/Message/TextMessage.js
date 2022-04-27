import { useState, useEffect } from 'react'
import styled, { css } from 'styled-components'
import Icon from '@components/common/Icon'

/**
 * Parameters
 * iconName : Icon Name
 * msgText : Text Content
 * msgSize : Text Font Size
 * msgColor : Text Color
 */

const MessageWrapper = styled.span`
  margin-top: 12px;
  padding-left: 2px;
  display: flex;
`

const Text = styled.span`
  color: ${props => props.color};
  font-size: ${props => props.size};
  margin-left: 8px;
`

const TextMessage = ({ icon, text, size, color }) => {
  return (
    <MessageWrapper>
      <Icon type={icon} />
      {text !== '' && (
        <Text size={size} color={color}>
          {text}
        </Text>
      )}
    </MessageWrapper>
  )
}

export default TextMessage
