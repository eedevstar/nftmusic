import styled from 'styled-components'
import Link from 'next/link'
import { TextButton } from '@components/common/Button'
import Icon from '@components/common/Icon'

const ShareItem = props => {
  return (
    <Wrapper>
      <TextButton varient="favorite" onClick={() => props.shareItem()}>
        <IconWrapper>
          <Icon type="Share" />
        </IconWrapper>
        Share Item
      </TextButton>
    </Wrapper>
  )
}

export default ShareItem

const Wrapper = styled.div``

const IconWrapper = styled.div`
  margin: auto 9px auto 0px;
`
