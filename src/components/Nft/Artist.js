import styled from 'styled-components'
import Image from 'next/image'
import Icon from '@components/common/Icon'
import { Caption1 } from '@components/common/Text'

const Artist = props => {
  const { image, name } = props.data

  let artistImage
  if (image) {
    artistImage = <Image src={image} alt="" width="24px" height="24px" />
  } else {
    artistImage = (
      <Icon
        type="ArtistDefault"
        viewBox="0 0 64 64"
        width="24px"
        height="24px"
      />
    )
  }

  return (
    <Wrapper>
      <ImageBox>{artistImage}</ImageBox>
      <Contents>
        <NameBox>{name && <Caption1>{name}</Caption1>}</NameBox>
      </Contents>
    </Wrapper>
  )
}

export default Artist

const ImageBox = styled.div`
  margin-right: 15px;
`

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  cursor: pointer;

  &:hover {
    ${Caption1} {
      color: ${props => props.theme.colors.blue60};
    }
  }
`

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  justify-content: center;
  align-items: flex-start;
`

const NameBox = styled.div`
  display: flex;
`
