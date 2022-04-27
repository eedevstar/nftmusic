import { useState, useEffect } from 'react'

import styled from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'
import Icon from '@components/common/Icon'
import { SubTitle, Caption1, Caption2, Caption3 } from '@components/common/Text'
import { authUser } from '@hooks/useAuth'

const SideBar = props => {
  const user = authUser()

  const userInfo = {
    following: 120,
    followers: 10,
    sale: {
      highestSalePrice: 69.97,
      highestSalePriceNo: 42,
      totalSales: 13312.95,
      totalSalesNo: 3,
      totalNFTsSoldToken: 420,
      totalNFTsSold: 3,
    },
    memberSince: 'Feb 13 2022'
  }

  let avatarImage

  if (user?.avatar) {
    avatarImage = (
      <Image src={user.avatar} alt="" width="100px" height="100px" />
    )
  } else {
    avatarImage = (
      <Icon
        type="ArtistDefault"
        viewBox="0 0 64 64"
        width="100px"
        height="100px"
      />
    )
  }

  return (
    <Wrapper>
      <ImageBox>{avatarImage}</ImageBox>
      <NameBox>
        <SubTitle>{user?.name}</SubTitle>
        <Caption1>@{user?.name}</Caption1>
      </NameBox>
      <IconBox>
        <Icon
          type="TwitterSamll"
          viewBox="0 0 24 24"
          width="24px"
          height="24px"
        />
        <Icon
          type="FacebookSamll"
          viewBox="0 0 24 24"
          width="24px"
          height="24px"
        />
        <Icon
          type="KakaotalkSamll"
          viewBox="0 0 24 24"
          width="24px"
          height="24px"
        />
      </IconBox>

      <Link href="/user/follow?type=following" passHref>
        <FollowingBox>
          <Caption1 varient="gray90">Following: </Caption1>
          <Caption2 bold varient="gray90">{userInfo.following}</Caption2>
        </FollowingBox>
      </Link>

      <Link href="/user/follow?type=follower" passHref>
        <FollowerBox>
          <Caption1 varient="gray90">Followers: </Caption1>
          <Caption2 bold varient="gray90">{userInfo.followers}</Caption2>
        </FollowerBox>
      </Link>

      <BioBox>
        <Caption1 varient="gray90">Bio</Caption1>
        <Caption2 varient="gray64">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
          pharetra sodales bibendum. Integer et posuere risus. Nulla aliquet
          dignissim risus, eget fermentum turpis molestie
        </Caption2>
      </BioBox>

      <StatisticsBox>
        <Caption1 varient="gray90">Sale Statistics</Caption1>
        <ItemBox>
          <Caption2 varient="gray64">Highest Sale Price: {userInfo.sale.highestSalePrice} ETH</Caption2>
          <Caption3 varient="GreenRound">#{userInfo.sale.highestSalePriceNo}</Caption3>
        </ItemBox>
        <ItemBox>
          <Caption2 varient="gray64">Total Sales: {userInfo.sale.totalSales} ETH</Caption2>
          <Caption3 varient="GreenRound">#{userInfo.sale.totalSalesNo}</Caption3>
        </ItemBox>
        <ItemBox>
          <Caption2 varient="gray64">
            Total NFTs Sold: {userInfo.sale.totalNFTsSoldToken} Tokens, {userInfo.sale.totalNFTsSold} NFTs
          </Caption2>
        </ItemBox>
      </StatisticsBox>

      <DateBox>
        <Caption2 varient="gray64">Member since {userInfo.memberSince}</Caption2>
      </DateBox>
    </Wrapper>
  )
}

export default SideBar

const Wrapper = styled.div`
  margin-top: 0px;
`

const ImageBox = styled.div``

const NameBox = styled.div`
  margin: 20px 0px 25px 0px;

  ${SubTitle} {
    margin: 1px 0px;
  }
`

const IconBox = styled.div`
  margin-bottom: 25px;
  display: flex;
  column-gap: 25px;
`

const FollowingBox = styled.div`
  display: flex;
  column-gap: 10px;
  align-items: center;
  cursor: pointer;
`

const FollowerBox = styled.div`
  display: flex;
  column-gap: 10px;
  align-items: center;
  margin-top: 25px;
  margin-bottom: 25px;
  cursor: pointer;
`

const BioBox = styled.div`
  width: 80%;
  margin-bottom: 25px;
  ${Caption1} {
    margin-bottom: 10px;
  }
`

const StatisticsBox = styled.div`
  display: flex;
  flex-direction: column;
`

const ItemBox = styled.div`
  display: flex;
  margin: 10px 0px 0px 0px;
  align-items: center;
  column-gap: 10px;
`

const DateBox = styled.div`
  margin-top: 100px;
`
