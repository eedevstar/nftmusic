import { useState, useEffect } from 'react'
import styled from 'styled-components'
import Layout from '@components/Layout'
import SideBar from '@components/Layout/SideBar'
import LibrarySideBar from '@components/Library/SideBar'
import Library from '@components/Library'

const IndexPage = () => {
  const [step, setStep] = useState(0)

  return (
    <Layout
      title="Library Dashboard"
      sideBar={
        <SideBar title="Library">
          <LibrarySideBar />
        </SideBar>
      }
    >
      <Library />
    </Layout>
  )
}

export default IndexPage
