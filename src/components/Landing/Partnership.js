import Image from 'next/image'
import styled from 'styled-components'

import Text from './Text'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 40px 0;

  @media (max-width: ${props => props.theme.breakpoints.desktop}px) {
    padding: 24px 0;
    justify-content: space-between;
  }

  @media (max-width: ${props => props.theme.breakpoints.tablet}px) {
    padding-bottom: 0;
  }
`

const ImageWrapper = styled.div`
  margin-left: 30px;

  @media (max-width: ${props => props.theme.breakpoints.tablet}px) {
    flex: 0 0 100%;
    text-align: center;
    margin: 0;
    margin-bottom: 40px;
  }
`

const Title = styled(Text)`
  @media (max-width: ${props => props.theme.breakpoints.desktop}px) {
    flex: 0 0 100%;
    text-align: center;
    margin: 0;
    margin-bottom: 20px;
  }

  @media (max-width: ${props => props.theme.breakpoints.tablet}px) {
    margin-bottom: 40px;
  }
`

export default function Partership() {
  return (
    <Wrapper>
      <Title opacity="0.7">In partership with</Title>
      <ImageWrapper>
        <Image src="/images/yg-plus.png" alt="YG PLUS" width="147" height="40" />
      </ImageWrapper>
      <ImageWrapper>
        <Image src="/images/weblock.png" alt="WeBlock" width="160" height="48" />
      </ImageWrapper>
      <ImageWrapper>
        <Image src="/images/cryptodiffer.png" alt="CryptoDiffer" width="215" height="40" />
      </ImageWrapper>
    </Wrapper>
  )
}
