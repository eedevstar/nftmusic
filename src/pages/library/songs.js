import { useState, useEffect } from 'react'
import styled from 'styled-components'
import Layout from '@components/Layout'
import SideBar from '@components/Layout/SideBar'
import LibrarySideBar from '@components/Library/SideBar'
import LibrarySongs from '@components/Library/Songs'

const SongsPage = () => {
  const [step, setStep] = useState(0)

  return (
    <Layout
      title="Library Albums"
      sideBar={
        <SideBar title="Library">
          <LibrarySideBar />
        </SideBar>
      }
    >
      <LibrarySongs />
    </Layout>
  )
}

export default SongsPage
