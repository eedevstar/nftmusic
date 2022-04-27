import { useState } from 'react'
import Image from 'next/image'
import styled from 'styled-components'

import Container from '@components/common/Container'
import Icon from '@components/common/Icon'
import { Input } from '@components/common/Input/index'
import Button from './Button'
import Text from './Text'

const Wrapper = styled.div`
  background: url(/images/waves.png);
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: contain;

  @media (max-width: ${props => props.theme.breakpoints.tablet}px) {
    background-size: cover;
  }
`

const ContentWrapper = styled(Container)`
  color: ${props => props.theme.colors.white};
  padding: 64px 0;
  display: flex;
  justify-content: space-between;
`

const Content = styled.div`
  @media (max-width: ${props => props.theme.breakpoints.tablet}px) {
    text-align: center;
    width: 100%;
  }
`

const SubscribeForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;

  @media (min-width: ${props => props.theme.breakpoints.tablet}px) {
    min-width: 580px;
    flex-direction: row;
  }
`

const SubscribeButton = styled(Button)`
  width: 100%;
  margin-top: 20px;

  @media (min-width: ${props => props.theme.breakpoints.tablet}px) {
    width: 200px;
    margin-left: 24px;
    margin-top: 0;
  }
`

const EmailInput = styled(Input)`
  @media (min-width: ${props => props.theme.breakpoints.tablet}px) {
    width: 272px;
  }
`

const ImageWrapper = styled.div`
  min-width: 500px;
  height: 500px;
  position: relative;

  @media (max-width: ${props => props.theme.breakpoints.tablet}px) {
    display: none;
  }
`

const SocialWrapper = styled.div`
  @media (min-width: ${props => props.theme.breakpoints.tablet}px) {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`

const Socials = styled.div`
  display: flex;
`

const SocialLink = styled.a`
  margin-right: 24px;

  @media (max-width: ${props => props.theme.breakpoints.tablet}px) {
    margin: 0 12px;
  }
`

const ContactUs = () => {
  const [email, setEmail] = useState('')

  return (
    <Wrapper>
      <ContentWrapper>
        <Content>
          <Text type="h2">Stay Tuned</Text>
          <Text type="body2">
            Subscribe to our newsletter and never miss our updates.
          </Text>
          <Text type="body3" opacity="0.7">
            Only one mail a month
          </Text>

          <SubscribeForm>
            <EmailInput
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Your email"
            />
            <SubscribeButton type="primary">Subscribe</SubscribeButton>
          </SubscribeForm>

          <SocialWrapper>
            <Text type="body3" opacity="0.7">
              Or follow us on socials:
            </Text>
            <Socials>
              <SocialLink href="#">
                <Icon
                  type="Twitter"
                  viewBox="0 0 24 24"
                  width="40"
                  height="40"
                />
              </SocialLink>
              <SocialLink href="#">
                <Icon
                  type="Telegram"
                  viewBox="0 0 24 24"
                  width="40"
                  height="40"
                />
              </SocialLink>
              <SocialLink href="#">
                <Icon type="Medium" />
              </SocialLink>
              <SocialLink href="#">
                <Icon
                  type="Linkedin"
                  viewBox="0 0 24 24"
                  width="40"
                  height="40"
                />
              </SocialLink>
            </Socials>
          </SocialWrapper>
        </Content>

        <ImageWrapper>
          <Image src="/images/hero-img.png" layout="fill" alt="Contact Us" />
        </ImageWrapper>
      </ContentWrapper>
    </Wrapper>
  )
}

export default ContactUs
