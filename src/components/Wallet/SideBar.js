import { useState, useEffect } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { TextButton } from '@components/common/Button'
import AccountItem from './AccountItem'

const Wrapper = styled.div`
  margin-top: 90px;
`
const MenuBox = styled.div`
  margin-bottom: 20px;
`
const AccountList = styled.div`
  margin-top: 70px;
`

const AccountItemBox = styled.div`
  margin-bottom: 30px;
  padding: 10px;
  border-radius: 5px;
  &:hover {
    cursor: pointer;
    background: ${props => props.theme.gradients.sideBarHover};
  }
`

const SideBar = props => {
  const router = useRouter()

  const accountData = {
    label: 'AAAA',
    title: '0.0000000000AAAA',
    usd: '0.000000',
    address: 'Ox3239r10204010301231...',
  }

  return (
    <Wrapper>
      <MenuBox>
        <Link href="/wallet" passHref>
          <TextButton
            varient="black"
            active={router.pathname == '/wallet' ? 'active' : ''}
          >
            Dashboard
          </TextButton>
        </Link>
      </MenuBox>
      <MenuBox>
        <Link href="/wallet/history" passHref>
          <TextButton
            varient="black"
            active={router.pathname == '/wallet/history' ? 'active' : ''}
          >
            Transaction History
          </TextButton>
        </Link>
      </MenuBox>
      <MenuBox>
        <Link href="/wallet/send" passHref>
          <TextButton
            varient="black"
            active={router.pathname == '/wallet/send' ? 'active' : ''}
          >
            Send Money
          </TextButton>
        </Link>
      </MenuBox>

      <AccountList>
        <AccountItemBox>
          <AccountItem data={accountData} />
        </AccountItemBox>
        <AccountItemBox>
          <AccountItem data={accountData} />
        </AccountItemBox>
      </AccountList>
    </Wrapper>
  )
}

export default SideBar
