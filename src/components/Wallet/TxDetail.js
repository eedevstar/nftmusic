import { useState, useEffect } from 'react'
import styled, { useTheme } from 'styled-components'
import Image from 'next/image'
import { Input, CopyInput } from '@components/common/Input/index'
import Icon from '@components/common/Icon'
import CopyIcon from '@components/common/Tooltip/CopyIcon'
import { Caption2, Caption3 } from '@components/common/Text'

const Wrapper = styled.div`
  padding: 25px 40px 30px 40px;
`

const AddressBox = styled.div`
  margin-top: 18px;
  margin-bottom: 30px;
`

const AmountBox = styled.div`
  display: flex;
  margin-bottom: 11px;

  ${Caption2} {
    margin-right: 10px;
  }
`

const SenderBox = styled.div`
  margin-top: 25px;
  margin-bottom: 18px;
  display: flex;
  align-items: center;
`

const ReceiverBox = styled.div`
  display: flex;
  align-items: center;
  margin-left: 5px;
  ${Caption3} {
    margin-left: 10px;
  }
`

const TxDetail = props => {
  const theme = useTheme()

  const { name, data, address, amount, time } = props.data

  return (
    <Wrapper>
      <Caption2 varient="gray90" bold>
        {time}
      </Caption2>
      <AddressBox>
        <Caption3 varient="secondary">{address}</Caption3>
      </AddressBox>
      <AmountBox>
        <Caption2 varient="gray90" bold>
          Transaction amount: {amount} ETH
        </Caption2>
        <Caption2>($0000000)</Caption2>
      </AmountBox>
      <AmountBox>
        <Caption2 varient="gray90" bold>
          Transaction fee: {amount} ETH
        </Caption2>
        <Caption2>($0000000)</Caption2>
      </AmountBox>
      <AmountBox>
        <Caption2 varient="gray90" bold>
          Block:{' '}
        </Caption2>
        <Caption3 varient="secondary">000000000</Caption3>
      </AmountBox>
      <SenderBox>
        <Caption3 varient="secondary">
          0xb5906c3920f38a9ba1a14cf524985ead29f90db3
        </Caption3>
        <CopyIcon
          varient="Copy"
          value="0xb5906c3920f38a9ba1a14cf524985ead29f90db3"
        />
      </SenderBox>
      <ReceiverBox>
        <Icon type="TxReceive" />
        <Caption3 varient="secondary">
          0xb5906c3920f38a9ba1a14cf524985ead29f90db3
        </Caption3>
        <CopyIcon
          varient="Copy"
          value="0xb5906c3920f38a9ba1a14cf524985ead29f90db3"
        />
      </ReceiverBox>
    </Wrapper>
  )
}

export default TxDetail
