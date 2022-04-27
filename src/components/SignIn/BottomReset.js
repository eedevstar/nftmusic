import styled from 'styled-components'
import Link from 'next/link'
import { Caption2, StyledLink } from '@components/common/Text'

const BottomParagraph = styled(Caption2)`
  margin-left: 40px;
  margin-right: 5px;
`

const BottomReset = () => {
  return (
    <>
      <Link href="/signin" passHref>
        <StyledLink>Sign In</StyledLink>
      </Link>

      <BottomParagraph varient="gray64">Not a member?</BottomParagraph>

      <Link href="/signup" passHref>
        <StyledLink>Sign Up</StyledLink>
      </Link>
    </>
  )
}

export default BottomReset
