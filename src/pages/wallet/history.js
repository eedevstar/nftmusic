import { useState, useEffect } from 'react'
import styled from 'styled-components'
import Layout from '@components/Layout'
import SideBar from '@components/Layout/SideBar'
import WalletSideBar from '@components/Wallet/SideBar'
import LatestTx from '@components/Wallet/LatestTx'
import AccountBanner from '@components/Wallet/AccountBanner'
import TxItem from '@components/Wallet/TxItem'
import { checkAuth } from '@lib/auth'

const TxsBox = styled.div`
  margin-top: 40px;
`

const TxItemBox = styled.div`
  margin-top: 15px;
`

const History = () => {
  const [step, setStep] = useState(0)

  const accountData = {
    label: 'AAAA',
    title: '0.0000000000AAAA',
    usd: '0.000000',
    address: 'Ox3239r10204010301231...',
  }

  const txs = [
    {
      name: '[Transaction Name1]',
      data: '[Data]',
      address: '0x12131313123',
      amount: '314.125452',
      time: '2h 30m ago',
    },
    {
      name: '[Transaction Name2]',
      data: '[Data]',
      address: '0x12131313123',
      amount: '34.125452',
      time: '2h 40m ago',
    },
    {
      name: '[Transaction Name3]',
      data: '[Data]',
      address: '0x12131313123',
      amount: '14.125452',
      time: '2h 50m ago',
    },
    {
      name: '[Transaction Name2]',
      data: '[Data]',
      address: '0x12131313123',
      amount: '34.125452',
      time: '2h 40m ago',
    },
    {
      name: '[Transaction Name3]',
      data: '[Data]',
      address: '0x12131313123',
      amount: '14.125452',
      time: '2h 50m ago',
    },
  ]

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

      <TxsBox>
        {txs.map((item, i) => (
          <TxItemBox key={i}>
            <TxItem data={item} />
          </TxItemBox>
        ))}
      </TxsBox>
    </Layout>
  )
}

export default History

export async function getServerSideProps(context) {
  const props = await checkAuth(context)
  return props
}
