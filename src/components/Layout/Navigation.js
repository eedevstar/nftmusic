import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'
import NavButton from './NavButton'
import UserSetting from '@components/User/Setting'
import { authUser } from '@hooks/useAuth'

const navList = [
  { icon: 'home', label: 'Home', path: '/home' },
  { icon: 'market', label: 'Market', path: '/market' },
  { icon: 'library', label: 'Library', path: '/library' },
  { icon: 'news', label: 'News', path: '/news' },
  { icon: 'wallet', label: 'Wallet', path: '/wallet' },
]

const Navigation = () => {
  let user = authUser()

  if (user) {
    user.active = true
    user.avatar = '/images/artist-default.svg'
  }

  const [showSetting, setShowSetting] = useState(false)

  const handleShowSetting = () => {
    setShowSetting(!showSetting)
  }

  return (
    <Header>
      <Logo>
        <Image src="/images/logo-icon.png" alt="MeMusic" layout="fill" />
      </Logo>
      <Navs>
        {navList.map(nav => (
          <NavButton key={nav.icon} {...nav} />
        ))}
      </Navs>
      
      <Link href="/user" passHref>
        <Avatar onMouseLeave={handleShowSetting} onMouseEnter={handleShowSetting}>
          {user && <Image src={user.avatar} alt={user.name} layout="fill" />}

          {showSetting && <UserSetting />}
        </Avatar>
      </Link>
    </Header>
  )
}

export default Navigation

const Header = styled.header`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 96px;
  min-width: 96px;
  height: 100vh;
  padding: 24px 0;
  box-sizing: border-box;
  z-index: 10;
`

const Logo = styled.div`
  width: 48px;
  height: 48px;
  position: relative;
`

const Navs = styled.div`
  display: flex;
  flex-direction: column;
`

const Avatar = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  position: relative;
  cursor: pointer;
`
