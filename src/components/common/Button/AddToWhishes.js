import styled from 'styled-components'
import Link from 'next/link'
import { TextButton } from '@components/common/Button'
import Icon from '@components/common/Icon'

const AddToWhishes = props => {
  return (
    <Wrapper>
      <TextButton varient="favorite" onClick={() => props.addWhishes()}>
        <IconWrapper>
          <Icon type="Star" />
        </IconWrapper>
        Add to Whishes
      </TextButton>
    </Wrapper>
  )
}

export default AddToWhishes

const Wrapper = styled.div``

const IconWrapper = styled.div`
  margin: auto 9px auto 0px;
`
