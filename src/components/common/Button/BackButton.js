import styled, { css } from 'styled-components'
import Link from 'next/link'
import React from 'react'
import Icon from '@components/common/Icon'
import TextButton from './TextButton'

/**
 * Parameters
 * Text Button Type : varient ("service", "favorite")
 */

const BackButton = React.forwardRef(({ onClick, ...props }, ref) => {
  return (
    <Link href={props.href} passHref>
      <TextButton varient="service">
        <IconWrapper>
          <Icon type="LeftArrow" />
        </IconWrapper>
        BACK
      </TextButton>
    </Link>
  )
})

BackButton.displayName = 'BackButton'

export default BackButton

const IconWrapper = styled.div`
  margin: auto 9px auto 0;
`
