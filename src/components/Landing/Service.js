import Image from 'next/image'
import styled from 'styled-components'

import Container from '@components/common/Container'
import Text from './Text'

const Wrapper = styled(Container)`
  padding: 64px 0;
  color: ${props => props.theme.colors.white};
`

const Section = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 64px 0;
  position: relative;
  color: ${props => props.theme.colors.white};

  @media (max-width: ${props => props.theme.breakpoints.tablet}px) {
    padding: 40px 0;
  }
`

const ServiceImage = styled.div`
  min-width: 540px;
  margin-left: 50px;

  @media (max-width: ${props => props.theme.breakpoints.desktop}px) {
    min-width: 100%;
    text-align: center;
    margin: 0;
  }
`

const ServiceContent = styled(Text)`
  min-width: 450px;

  @media (max-width: ${props => props.theme.breakpoints.tablet}px) {
    min-width: auto;
  }
`

const MultiChainImage = styled.div`
  min-width: 580px;
  margin-right: 60px;

  @media (max-width: ${props => props.theme.breakpoints.large}px) {
    min-width: 500px;
  }

  @media (max-width: ${props => props.theme.breakpoints.desktop}px) {
    position: absolute;
    right: 500px;
  }

  @media (max-width: ${props => props.theme.breakpoints.tablet}px) {
    position: relative;
    right: auto;
    margin: 0;
    margin-bottom: 20px;
    text-align: center;
    min-width: 100%;
  }
`

const MultiChainContent = styled(ServiceContent)`
  @media (max-width: ${props => props.theme.breakpoints.desktop}px) {
    width: 500px;
  }

  @media (max-width: ${props => props.theme.breakpoints.tablet}px) {
    min-width: 100%;
    width: 100%;
  }
`

const MultiChainSection = styled(Section)`
  @media (max-width: ${props => props.theme.breakpoints.desktop}px) {
    justify-content: right;
  }

  @media (max-width: ${props => props.theme.breakpoints.tablet}px) {
    flex-direction: column;
  }
`

const FirstSection = styled(Section)`
  &:before {
    content: ' ';
    position: absolute;
    width: 1600px;
    height: 1000px;
    top: -100px;
    left: -1000px;
    background: ${props => props.theme.gradients.radient1};
  }

  @media (max-width: ${props => props.theme.breakpoints.tablet}px) {
    flex-direction: column-reverse;

    &:before {
      width: 100%;
      height: 100%;
      top: 0px;
      left: 0px;
    }
  }
`

const SecondSection = styled(Section)`
  &:after {
    content: ' ';
    position: absolute;
    width: 1600px;
    height: 1000px;
    top: -200px;
    right: -1000px;
    background: ${props => props.theme.gradients.radient2};
  }

  @media (max-width: ${props => props.theme.breakpoints.tablet}px) {
    flex-direction: column-reverse;
  }

  @media (max-width: ${props => props.theme.breakpoints.desktop}px) {
    &:after {
      width: 0px;
      height: 0px;
      top: 0px;
      right: 0px;
    }
  }
`

export default function Service() {
  return (
    <Wrapper>
      <Container>
        <FirstSection>
          <ServiceContent type="body1">
            MeMusic provides a multitude of services including streaming, artist
            tokens, NFTs, and more. At the core of our services, user experience
            is the key factor in building the product.
          </ServiceContent>
          <ServiceImage>
            <Image
              src="/images/services.png"
              width="540"
              height="370"
              alt="MeMusic provides a multitude of services including streaming, artist tokens, NFTs, and more"
            />
          </ServiceImage>
        </FirstSection>

        <MultiChainSection>
          <MultiChainImage>
            <Image
              src="/images/multichain.png"
              width="580"
              height="550"
              alt="MeMusic utilizes a multi-chain approach to provide chain-agnostic services"
            />
          </MultiChainImage>
          <MultiChainContent type="body1">
            MeMusic utilizes a multi-chain approach to provide chain-agnostic
            services, and a hybrid data structure utilizing IPFS and CDNs. Our
            applications and services will be cross-compatible on various
            operating systems and platforms.
          </MultiChainContent>
        </MultiChainSection>

        <SecondSection>
          <ServiceContent type="body1">
            Artist tokens allow for artists to tokenize their various assets
            such as album art, limited edition, merchandise, and more. Artists
            can build a tailored, interactive experience with their fans.
          </ServiceContent>
          <ServiceImage />
        </SecondSection>
      </Container>
    </Wrapper>
  )
}
