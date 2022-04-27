import styled from 'styled-components'
import Image from 'next/image'
import Icon from '@components/common/Icon'
import {
  Caption1,
  Caption2,
} from '@components/common/Text'

const Album = props => {
  const { image, name, artist, tracks, time, price, type } = props.data

  let albumImage
  if (image) {
    albumImage = <Image src={image} alt="" width="100%" height="100%" />
  } else {
    albumImage = (
      <Icon
        type="AlbumDefault"
        viewBox="0 0 128 128"
        width="100%"
        height="100%"
      />
    )
  }

  return (
    <Wrapper>
      <ImageBox>{albumImage}</ImageBox>
      <ImageCaption>
        <Caption2 varient="white">Ends in 23h 45m 13s</Caption2>
      </ImageCaption>
      <AlbumContents>
        <NameBox>{name && <Caption1>{name}</Caption1>}</NameBox>

        {artist && <Caption2>by {artist}</Caption2>}
        <Caption2>
          {tracks && tracks + ' tracks, '}
          {time && time + ' minutes'}
        </Caption2>

        <Caption1>{price && price + ' ETH '}</Caption1>

        <RoundBox>
          {type == 'Auction' && (
            <Caption2 varient="GreenRound">Auction</Caption2>
          )}
          {type == 'TokenSales' && (
            <Caption2 varient="BlueRound">Token Sales</Caption2>
          )}
        </RoundBox>
      </AlbumContents>
    </Wrapper>
  )
}

export default Album

const ImageBox = styled.div`
  width: 100%;
  max-width: 250px;
`

const ImageCaption = styled.div`
  position: absolute;
  background: ${props => props.theme.colors.gray12};
  backdrop-filter: blur(30px);
  border-radius: 2px;
  padding: 6px 8px;
  color: ${props => props.theme.colors.white};
  top: 15px;
  left: 5px;
`

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  cursor: pointer;

  &:hover {
    ${ImageBox} {
      box-shadow: ${props => props.theme.shadows.albumHover};
    }

    ${Caption1} {
      color: ${props => props.theme.colors.blue60};
    }
  }
`

const AlbumContents = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  margin-top: 12px;
  justify-content: center;
  align-items: flex-start;
  position: relative;

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

const RoundBox = styled.div`
  position: absolute;
  top: -45px;
  left: 8px;

  @media (max-width: ${props => props.theme.breakpoints.desktop}px) {
    flex-direction: column;
    align-items: flex-start;
  }
`
