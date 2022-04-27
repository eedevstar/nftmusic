import styled from 'styled-components'

import Layout from '@components/Layout'
import SideBar from '@components/Layout/SideBar'
import SignUp from '@components/SignIn/SignUp'

const SignUpPage = () => {
  return (
    <Layout title="SignUp" footer>
      <SignUp />
    </Layout>
  )
}

export default SignUpPage
