import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'

import Container from '@components/common/Container'
import Text from './Text'
import Button from './Button'

const Wrapper = styled.div`
  color: ${props => props.theme.colors.white};
  padding: 64px 0 0 0;
  background: ${props => props.theme.gradients.secondary};
`

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;

  @media (max-width: ${props => props.theme.breakpoints.tablet}px) {
    align-items: flex-start;s
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}px) {
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
  }
`

const Logo = styled.div``

const DocButtons = styled.div`
  @media (max-width: ${props => props.theme.breakpoints.tablet}px) {
    display: flex;
    flex-direction: column;
  }
`

const DocButton = styled(Button)`
  width: 200px;
  margin-left: 24px;

  @media (max-width: ${props => props.theme.breakpoints.tablet}px) {
    margin-bottom: 20px;
    margin-left: 0;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}px) {
    width: 100%;
  }
`

const List = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: ${props => props.theme.breakpoints.mobile}px) {
    justify-content: center;
    text-align: center;
  }
`

const NavLink = styled.div`
  margin-left: 24px;
  cursor: pointer;

  @media (max-width: ${props => props.theme.breakpoints.tablet}px) {
    margin-left: 0;
    margin-right: 24px;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}px) {
    margin: 12px;
  }
`

const Desktop = styled.div`
  display: none;

  @media (min-width: ${props => props.theme.breakpoints.tablet}px) {
    display: block;
  }
`

const Tablet = styled.div`
  display: none;
  width: 100%;

  @media (max-width: ${props => props.theme.breakpoints.tablet}px) {
    display: block;
  }
`

const Mobile = styled.div`
  display: none;

  @media (max-width: ${props => props.theme.breakpoints.mobile}px) {
    display: block;
  }
`

const NotMobile = styled.div`
  display: block;

  @media (max-width: ${props => props.theme.breakpoints.mobile}px) {
    display: none;
  }
`

const Footer = () => {
  const languages = (
    <List>
      <Link href="/user" passHref>
        <NavLink>
          <Text type="body3" opacity="0.7">EN</Text>
        </NavLink>
      </Link>
      <Link href="/" passHref>
        <NavLink>
          <Text type="body3" opacity="0.7">CN</Text>
        </NavLink>
      </Link>
      <Link href="/" passHref>
        <NavLink>
          <Text type="body3" opacity="0.7">KR</Text>
        </NavLink>
      </Link>
      <Link href="/" passHref>
        <NavLink>
          <Text type="body3" opacity="0.7">RU</Text>
        </NavLink>
      </Link>
    </List>
  )

  const policies = (
    <List>
      <Link href="/" passHref>
        <NavLink>
          <Text type="body3" opacity="0.7">Terms & Conditions</Text>
        </NavLink>
      </Link>
      <Link href="/" passHref>
        <NavLink>
          <Text type="body3" opacity="0.7">Privacy policy</Text>
        </NavLink>
      </Link>
    </List>
  )

  const logo = (
    <Logo>
      <Image src="/images/logo.png" width="200" height="48" alt="MeMusic" />
    </Logo>
  )

  const copyright = (
    <Text
      type="body3"
      opacity="0.7"
    >{`© ${new Date().getFullYear()} MeMusic`}</Text>
  )

  const buttons = (
    <DocButtons>
      <DocButton type="secondary">Whitepaper</DocButton>
      <DocButton type="secondary">Pitch Deck</DocButton>
    </DocButtons>
  )

  return (
    <Wrapper>
      <Container>
        <Row>
          <Tablet>
            {logo}
            {languages}
            <Mobile>{buttons}</Mobile>
            {policies}
            {copyright}
          </Tablet>
          <Desktop>{logo}</Desktop>
          <NotMobile>{buttons}</NotMobile>
        </Row>
        <Desktop>
          <Row>
            <List>
              {copyright}
              {policies}
            </List>
            {languages}
          </Row>
        </Desktop>
      </Container>
    </Wrapper>
  )
}

export default Footer
