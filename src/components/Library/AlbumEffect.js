import styled from 'styled-components'
import Image from 'next/image'
import Icon from '@components/common/Icon'
import {
  Caption1,
  Caption2,
} from '@components/common/Text'

const AlbumEffect = props => {
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
        <Caption2 varient="white">Ends in 45 m 13 s</Caption2>
      </ImageCaption>
      <AlbumContents>
        <NameBox>{name && <Caption1>{name}</Caption1>}</NameBox>

        {artist && <Caption2>by {artist}</Caption2>}
        <Caption2>
          {tracks && tracks + ' tracks, '}
          {time && time + ' minutes'}
        </Caption2>

        <RoundBox>
          <Caption1>{price && price + ' ETH '}</Caption1>
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

export default AlbumEffect

const ImageBox = styled.div`
  width: 100%;
  max-width: 250px;
`

const ImageCaption = styled.div`
  width: content-fit;
  position: absolute;
  background: ${props => props.theme.colors.gray12};
  backdrop-filter: blur(30px);
  border-radius: 2px;
  padding: 6px;
  color: #ffffff;
  top: 35px;
  left: 3px;
  box-sizing: border-box;
`

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  cursor: pointer;
  padding-top: 20px;

  ${ImageBox} {
    transform: scale(1);
    transition: 0.3s ease-in-out;
  }

  &:hover ${ImageBox} {
    transform: scale(1.1) translateY(-10px);
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media (max-width: ${props => props.theme.breakpoints.desktop}px) {
    flex-direction: column;
    align-items: flex-start;
  }
`
