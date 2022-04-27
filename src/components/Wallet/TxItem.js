import { useState, useEffect } from 'react'
import Image from 'next/image'
import styled, { useTheme, css } from 'styled-components'
import Icon from '@components/common/Icon'
import {
  Caption1,
  Caption2,
  Title,
  SubTitle,
  StyledLink,
} from '@components/common/Text'
import CopyIcon from '@components/common/Tooltip/CopyIcon'
import TxDetail from './TxDetail'

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 0px 0px;
`

const TxBriefBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  cursor: pointer;
  padding: 10px 15px 5px 20px;
  border-radius: 5px;
  box-sizing: border-box;

  ${SubTitle} {
    margin: 0px;
  }

  &: hover {
    background: ${props => props.theme.gradients.txItemHover};
  }
`

const TxDetailBox = styled.div`
  margin-top: 1px;
  box-sizing: border-box;
  border-radius: 3px;
  display: flex;
  background: ${props => props.theme.colors.gray6};
  position: relative;
  overflow:hidden;
  height: 0;
  transition: all 0.5s ease;
  opacity: 0;

  ${({ open }) =>
    open &&
    css`
      height: 320px;
      opacity: 1;
    `}
`

const TxContents = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  margin-left: 30px;
  justify-content: center;
  align-items: flex-start;

  ${Caption1} {
    margin-bottom: 3px;
  }
  ${Caption2} {
    margin-bottom: 2px;
  }
`

const ControllerBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  & > * {
    margin-left: 15px;
  }
`

const TxNameBox = styled.div`
  display: flex;
`

const AddressBox = styled.div`
  display: flex;
  align-items: baseline;
  margin-top: 10px;
  justify-content: space-between;
`

const DateBox = styled.div`
  white-space: nowrap;
`

const AddressIconBox = styled.div`
  display: flex;
`

const TxItem = props => {
  const theme = useTheme()

  const { name, data, address, amount, time } = props.data

  const [open, setOpen] = useState(false)
  const [status, setStatus] = useState('')

  const handleClickOpen = event => {
    event.preventDefault()
    setOpen(!open)
  }

  return (
    <Wrapper>
      <TxBriefBox onClick={handleClickOpen}>
        <TxNameBox>
          <Icon type="Tx" />

          <TxContents>
            {name && <Caption1>{name}</Caption1>}
            <Caption2>{data && data}</Caption2>
          </TxContents>

          <DateBox>
            <Caption2>{time && time}</Caption2>
          </DateBox>
        </TxNameBox>

        <AddressBox>
          <AddressIconBox>
            <Caption1 varient="gray50">{address}</Caption1>
            <CopyIcon varient="Copy" value={address} />
          </AddressIconBox>

          <SubTitle bold>{amount && amount} ETH</SubTitle>
        </AddressBox>
      </TxBriefBox>

      <TxDetailBox open={open}>
        <TxDetail data={props.data} />
      </TxDetailBox>
    </Wrapper>
  )
}

export default TxItem
