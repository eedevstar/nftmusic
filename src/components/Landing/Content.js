import Image from 'next/image'
import styled from 'styled-components'

import Button from './Button'
import Text from './Text'

const ContentWrapper = styled.div`
  padding: 90px 0;
  display: flex;
  justify-content: space-between;

  @media (max-width: ${props => props.theme.breakpoints.tablet}px) {
    padding: 40px 0;
    flex-direction: column-reverse;
    justify-content: center;
    text-align: center;
    align-items: center;
  }
`

const HeroContent = styled.div`
  max-width: 650px;
  z-index: 2;
`

const ImageWrapper = styled.div`
  z-index: 2;
  width: 500px;

  @media (max-width: ${props => props.theme.breakpoints.large}px) {
    position: absolute;
    left: 800px;
  }

  @media (max-width: ${props => props.theme.breakpoints.tablet}px) {
    position: initial;
    width: 100%;
  }
`

const ButtonWrapper = styled.div`
  margin-top: 50px;
`

const MainButton = styled(Button)`
  width: 240px;
  margin: 0 12px;

  @media (max-width: ${props => props.theme.breakpoints.tablet}px) {
    width: 100%;
    margin: 10px 0;
  }
`

export default function Content() {
  return (
    <ContentWrapper>
      <HeroContent>
        <Text type="h1">
          Personalized Music Experience Through MeMusic
        </Text>
        <Text type="body2" opacity="0.7">
          Memusic is a blockchain-based platform to provide an inclusive ecosystem through a multitude of services
        </Text>
        <ButtonWrapper>
          <MainButton type="primary">Read Whitepaper</MainButton>
          <MainButton type="secondary">Learn More</MainButton>
        </ButtonWrapper>
      </HeroContent>
      <ImageWrapper>
        <Image src="/images/hero-img.png" width="500" height="500" alt="Personalized Music Experience Through MeMusic" />
      </ImageWrapper>
    </ContentWrapper>
  )
}
