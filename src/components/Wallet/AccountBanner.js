import { useState, useEffect } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import {
  SubTitle,
  Caption1,
  Caption2,
  Caption3,
} from '@components/common/Text'
import CopyIcon from '@components/common/Tooltip/CopyIcon'

const Wrapper = styled.div`
  background: ${props => props.theme.gradients.accountBanner};
  border-radius: 8px;
  padding: 10px 25px 15px 25px;
  box-shadow: ${props => props.theme.shadows.accountBanner};
`

const AccountNameBox = styled.div`
  display: flex;
`

const AmountBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5px;
`
const AddressBox = styled.div`
  margin-top: 15px;
  display: flex;
`

const BannerLeft = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`

const AccountBanner = props => {
  const { label, title, usd, address } = props.data

  return (
    <Wrapper>
      <BannerLeft>
        <AccountNameBox>
          <SubTitle varient="white">Account Name</SubTitle>
        </AccountNameBox>
        <AmountBox>
          <Caption1 varient="white">0.00000000 UUUU</Caption1>
          <Caption2 varient="white">(US$ 0000000000000000000.00)</Caption2>
        </AmountBox>
      </BannerLeft>
      <AddressBox>
        <Caption1 varient="white">{address}</Caption1>
        <CopyIcon varient="WhiteCopy" value={address} />
      </AddressBox>
    </Wrapper>
  )
}

export default AccountBanner
