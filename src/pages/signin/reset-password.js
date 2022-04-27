import styled from 'styled-components'

import Layout from '@components/Layout'
import SideBar from '@components/Layout/SideBar'
import ResetPassword from '@components/SignIn/ResetPassword'

const ResetPasswordPage = () => {
  return (
    <Layout title="Sign In" footer>
      <ResetPassword />
    </Layout>
  )
}

export default ResetPasswordPage
