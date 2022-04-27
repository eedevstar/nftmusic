import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'

import Layout from './Layout'
import { Caption2, TitleH1, StyledLink } from '@components/common/Text'

const ImageBox = styled.div`
  position: relative;
  margin: 15px auto 0px auto;
`
const ParagraphBox = styled.div`
  margin-bottom: 30px;
`

const ForgotPasswordConfirm = () => {
  return (
    <>
      <TitleH1 fullWidth>Reset password</TitleH1>
      <ImageBox>
        <Image
          src="/images/forgot-pwd-confirm.png"
          alt="Forgot Password Confirm"
          layout="fixed"
          width={256}
          height={256}
        />
      </ImageBox>

      <ParagraphBox>
        <Caption2 varient="gray64">
          Check your email! <br />
          {`If you don't see the email, check the spam folder.`}
          <br />
          {`If you don't have access to email, please`}
          <br />
          <Link href="/contact" passHref>
            <StyledLink>contact our support</StyledLink>
          </Link>{' '}
          to resolve forgot password.
        </Caption2>
      </ParagraphBox>
    </>
  )
}

export default ForgotPasswordConfirm
