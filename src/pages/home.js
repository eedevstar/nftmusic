import styled from 'styled-components'

import Layout from '@components/Layout'
import SideBar from '@components/Layout/SideBar'
import Home from '@components/Home'

const HomeSideBar = styled.div``

const HomePage = () => {
  return (
    <Layout title="Home" isHome>
      <Home />
    </Layout>
  )
}

export default HomePage
