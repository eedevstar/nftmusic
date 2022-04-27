import { useState, useEffect, useRef, forwardRef } from 'react'
import styled, { useTheme } from 'styled-components'
import Link from 'next/link'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import { Caption2, SubTitle, Title, StyledLink } from '@components/common/Text'
import Icon from '@components/common/Icon'
import Album from '@components/Library/AlbumWide'

const AlbumList = styled.div`
  display: flex;
  flex-direction: column;
`

const AlbumItem = styled.div`
  margin: 10px 10px;
`

const responsive = {
  0: { items: 1 },
  768: { items: 2 },
  1024: { items: 3 },
}

const albumData = {
  image: '',
  name: 'Album Name 1',
  artist: 'Artist 1',
}

const items = [
  <AlbumList key="1">
    <AlbumItem>
      <Album data={albumData} />
    </AlbumItem>
    <AlbumItem>
      <Album data={albumData} />
    </AlbumItem>
  </AlbumList>,
  <AlbumList key="2">
    <AlbumItem>
      <Album data={albumData} />
    </AlbumItem>
    <AlbumItem>
      <Album data={albumData} />
    </AlbumItem>
  </AlbumList>,
  <AlbumList key="3">
    <AlbumItem>
      <Album data={albumData} />
    </AlbumItem>
    <AlbumItem>
      <Album data={albumData} />
    </AlbumItem>
  </AlbumList>,
  <AlbumList key="4">
    <AlbumItem>
      <Album data={albumData} />
    </AlbumItem>
    <AlbumItem>
      <Album data={albumData} />
    </AlbumItem>
  </AlbumList>,
  <AlbumList key="5">
    <AlbumItem>
      <Album data={albumData} />
    </AlbumItem>
    <AlbumItem>
      <Album data={albumData} />
    </AlbumItem>
  </AlbumList>,
  <AlbumList key="6">
    <AlbumItem>
      <Album data={albumData} />
    </AlbumItem>
    <AlbumItem>
      <Album data={albumData} />
    </AlbumItem>
  </AlbumList>,
]

const Tokens = () => {
  const theme = useTheme()
  let slideRef = useRef(null)

  const [slideIndex, setSlideIndex] = useState(0)
  const [nextDisabled, setNextDisabled] = useState(false)
  const [prevDisabled, setPrevDisabled] = useState(true)

  const onSlideChanged = e => {
    setNextDisabled(e.isNextSlideDisabled)
    setPrevDisabled(e.isPrevSlideDisabled)
    setSlideIndex(e.item)
  }

  return (
    <Wrapper>
      <AliceCarousel
        mouseTracking
        disableDotsControls
        disableButtonsControls
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
        onSlideChanged={onSlideChanged}
        ref={el => (slideRef = el)}
      />
      {!prevDisabled && (
        <LeftArrow>
          <Icon
            type="SlideLeftArrow"
            viewBox="0 0 48 48"
            width="48"
            height="48"
            onClick={() => slideRef.slidePrev()}
          />
        </LeftArrow>
      )}

      {!nextDisabled && (
        <RightArrow>
          <Icon
            type="SlideRightArrow"
            viewBox="0 0 48 48"
            width="48"
            height="48"
            onClick={() => slideRef.slideNext()}
          />
        </RightArrow>
      )}
    </Wrapper>
  )
}

export default Tokens

const Wrapper = styled.div`
  position: relative;
`

const RightArrow = styled.div`
  position: absolute;
  top: 44%;
  right: 0px;
  z-index: 10;
  cursor: pointer;

  @media (min-width: ${props => props.theme.breakpoints.tablet}px) {
    right: -30px;
  }
`

const LeftArrow = styled.div`
  position: absolute;
  top: 44%;
  left: 0px;
  z-index: 10;
  cursor: pointer;

  @media (min-width: ${props => props.theme.breakpoints.tablet}px) {
    left: -30px;
  }
`
