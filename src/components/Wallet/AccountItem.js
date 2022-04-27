import { useState, useEffect } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { Caption2, Caption3 } from '@components/common/Text'
import CopyIcon from '@components/common/Tooltip/CopyIcon'

const Wrapper = styled.div``

const AccountNameBox = styled.div`
  display: flex;
`

const BlueBox = styled.div`
  width: fit-content;
  box-sizing: border-box;
  background: #2f93c4;
  border-radius: 4px;
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
  color: #ffffff;
  text-align: center;
  padding: 10px 8px;
  margin-right: 20px;
`
const AmountBox = styled.div`
  display: flex;
  flex-direction: column;
`
const AddressBox = styled.div`
  margin-top: 15px;
  display: flex;
`

const AccountItem = props => {
  const { label, title, usd, address } = props.data

  return (
    <Wrapper>
      <AccountNameBox>
        <BlueBox>{label}</BlueBox>
        <AmountBox>
          <Caption2 varient="gray90" bold>
            {title}
          </Caption2>
          <Caption2>(${usd})</Caption2>
        </AmountBox>
      </AccountNameBox>
      <AddressBox>
        <Caption3>{address}</Caption3>
        <CopyIcon varient="LightGreyCopy" value={address} />
      </AddressBox>
    </Wrapper>
  )
}

export default AccountItem
