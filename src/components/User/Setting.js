import { useState, useEffect } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import { useSession, signOut } from 'next-auth/react'
import { Caption1 } from '@components/common/Text'
import { checkLoggedIn } from '@hooks/useAuth'

const Setting = () => {
  const router = useRouter()
  const isLoggedIn = checkLoggedIn()

  const handleSignOut = () => {
    if (isLoggedIn) {
      signOut({ redirect: false }).then(() => router.push('/signin'))
    } else {
      router.push('/signin')
    }
  }

  return (
    <Wrapper>
      <Caption1 varient="heavyGrey">Settings</Caption1>
      <Caption1 varient="heavyGrey">Support</Caption1>
      <Caption1 varient="heavyGrey" onClick={handleSignOut}>
        Log Out
      </Caption1>
    </Wrapper>
  )
}

export default Setting

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  background: ${props => props.theme.colors.white};
  box-shadow: ${props => props.theme.shadows.shadow30};
  border-radius: 2px;
  position: absolute;
  top: -120px;
  left: 28px;

  ${Caption1} {
    padding: 12px 25px;
  }

  & ${Caption1}:hover {
    background: ${props => props.theme.gradients.radient3};
  }
`
