import { useState, useEffect } from 'react'
import styled from 'styled-components'
import Layout from '@components/Layout'
import SideBar from '@components/Layout/SideBar'
import LibrarySideBar from '@components/Library/SideBar'
import LibraryArtists from '@components/Library/Artists'

const ArtistsPage = () => {
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
      <LibraryArtists />
    </Layout>
  )
}

export default ArtistsPage
