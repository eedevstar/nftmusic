import styled from 'styled-components'
import Link from 'next/link'
import { Caption2, StyledLink } from '@components/common/Text'

const BottomParagraph = styled(Caption2)`
  margin-left: 40px;
  margin-right: 5px;
`

const BottomSignIn = () => {
  return (
    <>
      <Link href="/signin/forgot-password" passHref>
        <StyledLink>Forgot Password</StyledLink>
      </Link>

      <BottomParagraph>Not a member?</BottomParagraph>

      <Link href="/signup" passHref>
        <StyledLink>Sign Up</StyledLink>
      </Link>
    </>
  )
}

export default BottomSignIn
