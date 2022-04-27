import { useRouter } from 'next/router'
import styled from 'styled-components'

import Layout from '@components/Layout'
import SideBar from '@components/Layout/SideBar'
import SignIn from '@components/SignIn'

const SignInPage = () => {
  return (
    <Layout title="SignIn">
      <SignIn />
    </Layout>
  )
}

export default SignInPage
