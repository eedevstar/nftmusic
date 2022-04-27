import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import Layout from '@components/Layout'
import SideBar from '@components/Layout/SideBar'
import MarketSideBar from '@components/Market/SideBar'
import Market from '@components/Market'
import FilterAlbums from '@components/Market/FilterAlbums'
import DatePicker from '@components/common/DatePicker'

const Index = () => {
  const router = useRouter()
  const [step, setStep] = useState(0)
  const type = router.query.type

  console.log(router.query)
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

  return (
    <Layout
      title="Market Dashboard"
      sideBar={
        <SideBar title="Market">
          <MarketSideBar />
        </SideBar>
      }
    >
      {
        typeof type === 'undefined' || type === 'dashboard' ? (
          <Market albums={albums} />
        ) : (
          <FilterAlbums albums={albums} />
        )
      }

    </Layout>
  )
}

export default Index
