import { useState, useEffect, useRef, forwardRef } from 'react'
import styled, { useTheme } from 'styled-components'
import Link from 'next/link'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import Icon from '@components/common/Icon'
import Album from '@components/Library/AlbumEffect'

const AlbumItem = styled.div`
  margin: 0px 10px;
`

const responsive = {
  0: { items: 1 },
  768: { items: 3 },
  1024: { items: 6 },
}

const albumData = {
  image: '',
  name: 'Album Name 1',
  artist: 'Artist 1',
}

const items = [
  <AlbumItem key="1">
    <Album data={albumData} />
  </AlbumItem>,
  <AlbumItem key="2">
    <Album data={albumData} />
  </AlbumItem>,
  <AlbumItem key="3">
    <Album data={albumData} />
  </AlbumItem>,
  <AlbumItem key="4">
    <Album data={albumData} />
  </AlbumItem>,
  <AlbumItem key="5">
    <Album data={albumData} />
  </AlbumItem>,
  <AlbumItem key="6">
    <Album data={albumData} />
  </AlbumItem>,
  <AlbumItem key="7">
    <Album data={albumData} />
  </AlbumItem>,
  <AlbumItem key="8">
    <Album data={albumData} />
  </AlbumItem>,
  <AlbumItem key="9">
    <Album data={albumData} />
  </AlbumItem>,
  <AlbumItem key="10">
    <Album data={albumData} />
  </AlbumItem>,
]

const RecentView = () => {
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

export default RecentView

const Wrapper = styled.div`
  position: relative;

  @media (max-width: ${props => props.theme.breakpoints.desktop}px) {
  }
  @media (max-width: ${props => props.theme.breakpoints.tablet}px) {
    width: 280px;
    margin: auto;
  }
`

const RightArrow = styled.div`
  position: absolute;
  top: calc((100% - 90px) / 2);
  right: 0px;
  z-index: 10;
  cursor: pointer;

  @media (min-width: ${props => props.theme.breakpoints.tablet}px) {
    right: -30px;
  }
`

const LeftArrow = styled.div`
  position: absolute;
  top: calc((100% - 90px) / 2);
  left: 0px;
  z-index: 10;
  cursor: pointer;

  @media (min-width: ${props => props.theme.breakpoints.tablet}px) {
    left: -30px;
  }
`
