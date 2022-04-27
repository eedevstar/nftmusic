import { useState, useEffect } from 'react'
import styled from 'styled-components'
import Layout from '@components/Layout'
import SideBar from '@components/Layout/SideBar'
import LibrarySideBar from '@components/Library/SideBar'
import LibraryAlbums from '@components/Library/Albums'

const AlbumsPage = () => {
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
      <LibraryAlbums />
    </Layout>
  )
}

export default AlbumsPage
