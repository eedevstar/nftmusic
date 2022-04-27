import React, { useEffect, useState, useRef } from 'react'
import styled from 'styled-components'
import { Button, Back, AddToWhishes, Share } from '@components/common/Button'
import { SubTitle, Caption2 } from '@components/common/Text'
import AudioPlayer from '@components/common/Player/Audio'
import Header from './Header'
import Artist from './Artist'
import Price from './Price'

const Item = props => {
  const { nftData, buyItem, addWhishes, shareItem } = props
  return (
    <Wrapper>
      <LeftContent>
        <AudioPlayerBox>
          <AudioPlayer src={nftData.song} image={nftData.image} />
          <ShareButtonBox>
            <AddToWhishes addWhishes={addWhishes} />
            <Share shareItem={shareItem} />
          </ShareButtonBox>
        </AudioPlayerBox>
      </LeftContent>

      <RightContent>
        <BackBox>
          <Back href="/home" />
        </BackBox>

        <HeaderBox>
          <Header data={nftData.header} />
        </HeaderBox>

        <ArtistsBox>
          {nftData.artists.map((item, i) => (
            <ArtistsItemBox key={i}>
              <Artist data={item} />
            </ArtistsItemBox>
          ))}
        </ArtistsBox>

        <DescriptionBox>
          <Caption2>{nftData.description}</Caption2>
        </DescriptionBox>

        <PriceBox>
          <Price data={nftData.price} />
        </PriceBox>

        <ButtonBox>
          <Button type="submit" onClick={() => buyItem()} varient="primary" fullWidth>
            BUY ITEM
          </Button>
        </ButtonBox>

        <SubTitle varient="gray50">NFT Transactions Histoty</SubTitle>
      </RightContent>
    </Wrapper>
  )
}

export default Item

const Wrapper = styled.div`
  display: flex;
`

const LeftContent = styled.div`
  width: 40%;
  position: relative;
  box-sizing: border-box;
  min-height: 100vh;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(242, 242, 242, 1) 42%,
    rgba(224, 224, 224, 1) 100%
  );
`

const AudioPlayerBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const RightContent = styled.div`
  width: 60%;
  padding: 80px 6%;
  box-sizing: border-box;
`

const HeaderBox = styled.div`
  margin-top: 65px;
`

const ButtonBox = styled.div`
  margin: 50px auto 70px auto;
  z-index: 2;
  position: relative;
`

const BackBox = styled.div`
  width: 100px;
`

const ShareButtonBox = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
`

const ArtistsBox = styled.div`
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  column-gap: 1%;

  @media (max-width: ${props => props.theme.breakpoints.desktop}px) {
    column-gap: 4%;
  }
  @media (max-width: ${props => props.theme.breakpoints.tablet}px) {
    column-gap: 9%;
  }
  @media (max-width: ${props => props.theme.breakpoints.mobile}px) {
    column-gap: 2%;
  }
`

const ArtistsItemBox = styled.div`
  flex: 0 30%;
  margin-bottom: 25px;

  @media (max-width: ${props => props.theme.breakpoints.desktop}px) {
    flex: 0 45%;
  }
  @media (max-width: ${props => props.theme.breakpoints.tablet}px) {
    flex: 0 45%;
  }
  @media (max-width: ${props => props.theme.breakpoints.mobile}px) {
    flex: 0 90%;
  }
`

const DescriptionBox = styled.div`
  margin-top: 35px;
  margin-bottom: 55px;
  padding-bottom: 35px;
  border-bottom: 1px solid ${props => props.theme.colors.gray12};
`

const PriceBox = styled.div``
