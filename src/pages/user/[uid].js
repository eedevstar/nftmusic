import { useRouter } from 'next/router'

import styled from 'styled-components'
import Layout from '@components/Layout'
import SideBar from '@components/Layout/SideBar'
import UserSideBar from '@components/User/SideBar'
import User from '@components/User/User'

const UserPage = props => {
  const router = useRouter()

  const nid = router.query.nid;
  console.log(nid); // nft item id

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
  
  const artists = [
    {
      image: '',
      name: 'Artist Name 1',
      userName: '@username1',
    },
    {
      image: '',
      name: 'Artist Name 2',
      userName: '@username2',
    },
    {
      image: '',
      name: 'Artist Name 3',
      userName: '@username3',
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
      <User albums={albums} artists={artists} />
    </Layout>
  )
}

export default UserPage

export async function getServerSideProps(context) {
  const props = await checkAuth(context)
  return props
}
