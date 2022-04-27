import styled from 'styled-components'
import Link from 'next/link'
import { Caption2, StyledLink } from '@components/common/Text'

const BottomParagraph = styled(Caption2)`
  margin-left: 40px;
  margin-right: 5px;
`

const BottomSignUp = () => {
  return (
    <>
      <Link href="/signin" passHref>
        <StyledLink>Sign In</StyledLink>
      </Link>
    </>
  )
}

export default BottomSignUp
