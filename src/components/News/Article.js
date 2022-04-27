import styled from 'styled-components'
import Image from 'next/image'
import Icon from '@components/common/Icon'
import {
  Caption1,
  Caption2,
  SubTitle,
  StyledLink,
} from '@components/common/Text'

const Album = props => {
  const { title, content, date, tags } = props.data

  let tag = ''
  const styledTags = tags.map(item => {
    if (item == 'Auction')
      tag = (
        <Caption2 varient="GreenRound" key={item}>
          {item}
        </Caption2>
      )
    else if (item == 'Token Sale')
      tag = (
        <Caption2 varient="GreenRound" key={item}>
          {item}
        </Caption2>
      )
    else
      tag = (
        <Caption2 varient="GrayRound" key={item}>
          {item}
        </Caption2>
      )

    return tag
  })

  return (
    <Wrapper>
      <SubTitle>{title}</SubTitle>
      <Caption1 varient="gray64">
        {content.substr(0, 140)}... <StyledLink>Read More</StyledLink>
      </Caption1>
      <TagBox>
        <Caption2 varient="gray50">{date}</Caption2>
        <Tags>{styledTags}</Tags>
      </TagBox>
    </Wrapper>
  )
}

export default Album

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;

  ${SubTitle} {
    margin-bottom: 15px;
  }
`

const TagBox = styled.div`
  display: flex;
  margin-top: 15px;
  align-items: baseline;

  ${Caption2} {
    white-space: nowrap;
  }
`

const Tags = styled.div`
  margin-left: 20px;
  display: flex;
  flex-wrap: wrap;
  column-gap: 20px;
  row-gap: 10px;
`
