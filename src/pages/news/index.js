import { useState, useEffect } from 'react'
import styled from 'styled-components'
import Layout from '@components/Layout'
import SideBar from '@components/Layout/SideBar'
import NewsSideBar from '@components/News/SideBar'
import News from '@components/News'

const Index = () => {
  const [step, setStep] = useState(0)

  return (
    <Layout
      title="News Dashboard"
      sideBar={
        <SideBar title="News">
          <NewsSideBar />
        </SideBar>
      }
    >
      <News />
    </Layout>
  )
}

export default Index
