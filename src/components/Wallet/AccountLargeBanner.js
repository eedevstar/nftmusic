import { useState, useEffect } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import {
  TitleH1,
  SubTitle,
  Caption1,
  Caption2,
  Caption3,
} from '@components/common/Text'
import CopyIcon from '@components/common/Tooltip/CopyIcon'
import Icon from '@components/common/Icon'
import { TextButton } from '@components/common/Button'

const AccountLargeBanner = props => {
  const { label, title, usd, address } = props.data

  return (
    <>
      <Wrapper>
        <AccountNameBox>
          <SubTitle varient="white">Account Name</SubTitle>
        </AccountNameBox>
        <AmountBox>
          <TitleH1 varient="white">0.00000000 UUUU</TitleH1>
          <Caption1 varient="white">(US$ 0000000000000000000.00)</Caption1>
        </AmountBox>
        <AddressBox>
          <Caption1 varient="white">{address}</Caption1>
          <CopyIcon varient="WhiteCopy" value={address} />
        </AddressBox>
      </Wrapper>

      <Controller>
        <Control>
          <TextButton varient="favorite">
            <Icon type="Exchange" />
            <LabelBox>Exchange</LabelBox>
          </TextButton>
        </Control>
        <Control>
          <Link href="/wallet/send" passHref>
            <TextButton varient="favorite">
              <Icon type="Send" />
              <LabelBox>Send</LabelBox>
            </TextButton>
          </Link>
        </Control>
      </Controller>
    </>
  )
}

export default AccountLargeBanner

const Wrapper = styled.div`
  background-image: url(/images/barcode.png), url(/images/account-bg.png);
  background-repeat: no-repeat, no-repeat;
  background-position: calc(100% - 20px) calc(100% - 20px), center top;
  background-size: 100px, cover;
  width: 100%;
  padding: 20px 25px;
  box-sizing: border-box;
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

const Controller = styled.div`
  display: flex;
  margin: 40px auto 80px auto;
  justify-content: center;
`

const LabelBox = styled.div`
  margin-left: 15px;
`

const Control = styled.div`
  display: flex;
  margin-right: 70px;
  cursor: pointer;
`
