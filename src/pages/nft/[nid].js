import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import NftItem from '@components/Nft/Item'
import Layout from '@components/Layout'

const Item = () => {
  const router = useRouter()

  const nid = router.query.nid;
  console.log(nid); // nft item id
  
  const nftData = {
    image: '',
    song: '/songs/sample3s.mp3',
    header: {
      title: 'Track Name',
      address: '0xD533a949740bb3306d119CC777fa900bA034cd52',
      date: 'MONTH 1, 2022',
      genre: 'Genre',
    },
    artists: [
      { image: '', name: 'Artist Name' },
      { image: '', name: 'Artist Name' },
    ],
    description: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
      Aenean commodo ligula eget dolor. Aenean massa. 
      Cum sociis natoque penatibus et magnis dis parturient montes, 
      nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, 
      pretium quis`,
    price: {
      eth: '4.012',
      dollar: '15,742.35',
      tokenAmount: '250',
      tokenSold: '50',
    },
  }

  const buyItem = () => {
    console.log('Buy Item');
  }

  const addWhishes = () => {
    console.log("Add Wishes")
  }

  const shareItem = () => {
    console.log("Share Item")
  }

  return (
    <Layout title="NFT Item">
      <NftItem nftData={nftData} buyItem={buyItem} addWhishes={addWhishes} shareItem={shareItem} />
    </Layout>
  )
}

export default Item
