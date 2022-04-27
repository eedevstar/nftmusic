import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { getSession, useSession } from 'next-auth/react'
import styled from 'styled-components'
import Layout from '@components/Layout'
import SideBar from '@components/Layout/SideBar'
import UserSideBar from '@components/User/SideBar'
import Follow from '@components/User/Follow'

const FollowPage = props => {
  const [step, setStep] = useState(0)

  const { query } = useRouter()

  const { data: session } = useSession()

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
      <Follow artists={artists} type={query.type} />
    </Layout>
  )
}

export default FollowPage
