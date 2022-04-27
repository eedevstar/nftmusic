import { useState, useEffect } from 'react'
import { getSession, useSession } from 'next-auth/react'

import styled from 'styled-components'
import Layout from '@components/Layout'
import SideBar from '@components/Layout/SideBar'
import UserSideBar from '@components/User/SideBar'
import Creator from '@components/User'
import { checkAuth } from '@lib/auth'
import { Title } from '@components/common/Text'

const Index = props => {
  const [step, setStep] = useState(0)

  const { data: session } = useSession()

  const albums = [
    {
      image: '',
      name: 'Album Name 1',
      artist: 'Artist 1',
      price: '0.005',
      type: 'Auction',
    },
    {
      image: '',
      name: 'Album Name 2',
      artist: 'Artist 2',
      price: '0.003',
      type: 'TokenSales',
    },
    {
      image: '',
      name: 'Album Name 3',
      artist: 'Artist 3',
      price: '0.015',
      type: 'Auction',
    },
  ]

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
  ]
  
  return (
    <Layout
      title="Profile"
      sideBar={
        <SideBar title="">
          <UserSideBar />
        </SideBar>
      }
    >
      <Creator albums={albums} txs={txs} />
    </Layout>
  )
}

export default Index
export async function getServerSideProps(context) {
  const props = await checkAuth(context)
  return props
}
