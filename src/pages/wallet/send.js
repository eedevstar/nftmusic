import { useState, useEffect } from 'react'
import styled from 'styled-components'
import Layout from '@components/Layout'
import SideBar from '@components/Layout/SideBar'
import WalletSideBar from '@components/Wallet/SideBar'
import LatestTx from '@components/Wallet/LatestTx'
import AccountBanner from '@components/Wallet/AccountBanner'
import SendForm from '@components/Wallet/SendForm'
import { checkAuth } from '@lib/auth'

const SendFormBox = styled.div`
  margin-top: 80px;
`

const Send = () => {
  const [step, setStep] = useState(0)

  const accountData = {
    label: 'AAAA',
    title: '0.0000000000AAAA',
    usd: '0.000000',
    address: 'Ox3239r10204010301231...',
  }

  return (
    <Layout
      title="Wallet History"
      sideBar={
        <SideBar title="Wallet">
          <WalletSideBar />
        </SideBar>
      }
    >
      <AccountBanner data={accountData} />

      <SendFormBox>
        <SendForm />
      </SendFormBox>
    </Layout>
  )
}

export default Send

export async function getServerSideProps(context) {
  const props = await checkAuth(context)
  return props
}
