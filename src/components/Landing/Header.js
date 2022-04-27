import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'

import Icon from '@components/common/Icon'
import Text from './Text'

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 0;
  z-index: 2;
`

const MenuWrapper = styled.div`
  display: flex;

  @media (max-width: ${props => props.theme.breakpoints.tablet}px) {
    display: none;
  }
`

const MenuItem = styled.a`
  color: white;
  font-size: 20px;
  line-height: 28px;
  margin: 0 20px;
  text-decoration: none;

  @media (max-width: ${props => props.theme.breakpoints.desktop}px) {
    margin: 0 10px;
  }

  @media (max-width: ${props => props.theme.breakpoints.tablet}px) {
    margin: 20px 0;
  }
`

const Icons = styled.div`
  display: flex;
  z-index: 2;
`

const SocialIcons = styled.div`
  display: flex;
  margin-right: 30px;

  @media (max-width: ${props => props.theme.breakpoints.desktop}px) {
    display: none;
  }
`

const IconLink = styled.a`
  display: flex;
  align-items: center;
  margin: 0 10px;
  cursor: pointer;
`

const LangIcon = styled(IconLink)`
  @media (max-width: ${props => props.theme.breakpoints.tablet}px) {
    display: none;
  }
`

const MenuIcon = styled(IconLink)`
  display: none;

  @media (max-width: ${props => props.theme.breakpoints.tablet}px) {
    display: block;
  }
`

const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: ${props => props.theme.colors.bg};
  z-index: 3;
  padding: 40px 20px;
`

const MobileHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

`

const CloseIcon = styled(Icon)`
  cursor: pointer;
`

const MobileContent = styled.div`
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  text-align: center;
`

const MobileFooter = styled.div`
  margin-top: 20px;
`

const MobileRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const NavLink = styled.a`
  margin: 0 12px;
  color: ${props => props.theme.colors.white};
  opacity: 0.7;
  text-decoration: none;
`

const ImgLink = styled.a`
  color: ${props => props.theme.colors.white};
  text-decoration: none;  
`

const Header = () => {
  const [menu, setMenu] = useState(false)

  const menuItems = (
    <>
      <MenuItem href="#" type="body2">About</MenuItem>
      <MenuItem href="#" type="body2">Features</MenuItem>
      <MenuItem href="#" type="body2">Token</MenuItem>
      <MenuItem href="#" type="body2">Team</MenuItem>
      <MenuItem href="#" type="body2">Blog</MenuItem>
    </>
  )

  const logo = (
    <Link href="/" passHref>
      <ImgLink href="#">
        <Image src="/images/logo.png" alt="MeMusic" width="168" height="40" />
      </ImgLink>
    </Link>
  )

  return (
    <HeaderWrapper>
      {logo}
      <MenuWrapper>
        {menuItems}
      </MenuWrapper>
      <Icons>
        <SocialIcons>
          <IconLink href="#"><Icon type="Twitter" /></IconLink>
          <IconLink href="#"><Icon type="Telegram" /></IconLink>
          <IconLink href="#"><Icon type="Linkedin" /></IconLink>
        </SocialIcons>
        <LangIcon href="#"><Icon type="Lang" /></LangIcon>
        <MenuIcon href="#" onClick={() => setMenu(true)}><Icon type="Menu" /></MenuIcon>
      </Icons>

      { menu && (
        <MobileMenu>
          <MobileHeader>
            {logo}
            <CloseIcon
              type="Cross"
              width="24"
              height="24"
              viewBox="0 0 48 48"
              onClick={() => setMenu(false)}
            />
          </MobileHeader>
          <MobileContent>
            {menuItems}
          </MobileContent>
          <MobileFooter>
            <MobileRow>
              <Link href="/" passHref>
                <NavLink><Text type="body3">EN</Text></NavLink>
              </Link>
              <Link href="/" passHref>
                <NavLink><Text type="body3">CN</Text></NavLink>
              </Link>
              <Link href="/" passHref>
                <NavLink><Text type="body3">KR</Text></NavLink>
              </Link>
              <Link href="/" passHref>
                <NavLink><Text type="body3">RU</Text></NavLink>
              </Link>
            </MobileRow>
            <MobileRow>
              <Link href="/" passHref>
                <NavLink><Text type="body3">Terms & Conditions</Text></NavLink>
              </Link>
              <Link href="/" passHref>
                <NavLink><Text type="body3">Privacy policy</Text></NavLink>
              </Link>
            </MobileRow>
            <MobileRow>
              <Text type="body3" opacity="0.7">{`© ${new Date().getFullYear()} MeMusic`}</Text>
            </MobileRow>
          </MobileFooter>
        </MobileMenu>
      )}
    </HeaderWrapper>
  )
}

export default Header
