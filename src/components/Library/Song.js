import styled from 'styled-components'
import Image from 'next/image'
import Icon from '@components/common/Icon'
import {
  Caption1,
  Caption2,
} from '@components/common/Text'

const Song = props => {
  const { image, name, artist, albumName, time } = props.data

  let songImage
  if (image) {
    songImage = <Image src={image} alt="" width="64px" height="64px" />
  } else {
    songImage = (
      <Icon
        type="AlbumDefault"
        viewBox="0 0 128 128"
        width="64px"
        height="64px"
      />
    )
  }

  return (
    <Wrapper>
      <ImageBox>{songImage}</ImageBox>
      <ImageHoverBox>{songImage}</ImageHoverBox>

      <AlbumContents>
        <NameBox>{name && <Caption1>{name}</Caption1>}</NameBox>

        {artist && <Caption2>by {artist}</Caption2>}
      </AlbumContents>

      <TimeBox>
        <Caption2>{time && time + ' minutes'}</Caption2>
      </TimeBox>
    </Wrapper>
  )
}

export default Song

const ImageBox = styled.div``
const ImageHoverBox = styled.div`
  display: none;
`

const Wrapper = styled.div`
  display: flex;
  position: relative;
  cursor: pointer;
  align-items: center;
  column-gap: 25px;

  &:hover {
    background: ${props => props.theme.gradients.txItemHover};

    ${ImageBox} {
      opacity: 0;
    }

    ${ImageHoverBox} {
      display: block;
      position: absolute;
      left: 0;
      top: -5px;
    }

    ${Caption1} {
      color: ${props => props.theme.colors.blue60};
    }
  }
`

const AlbumContents = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  justify-content: center;
  align-items: flex-start;

  ${Caption1} {
    margin-bottom: 3px;
  }
  ${Caption2} {
    margin-bottom: 5px;
  }
`

const NameBox = styled.div`
  display: flex;
`

const TimeBox = styled.div`
  white-space: nowrap;
`
