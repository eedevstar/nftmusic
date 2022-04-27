import styled, { css } from 'styled-components'
import Link from 'next/link'
import React from 'react'
import Icon from '@components/common/Icon'
import TextButton from './TextButton'

/**
 * Parameters
 * Text Button Type : varient ("service", "favorite")
 */

const SeeAllButton = React.forwardRef(({ onClick, ...props }, ref) => {
  return (
    <Link href={props.href} passHref>
      <TextButton varient="service">
        SEE ALL
        <IconWrapper>
          <Icon type="RightArrow" />
        </IconWrapper>
      </TextButton>
    </Link>
  )
})

SeeAllButton.displayName = 'SeeAllButton'

export default SeeAllButton

const IconWrapper = styled.div`
  margin: auto 0px auto 9px;
`
