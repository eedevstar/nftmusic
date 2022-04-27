import styled from 'styled-components'

import Container from '@components/common/Container'
import Header from './Header'
import Content from './Content'
import Partership from './Partnership'

const HeroWrapper = styled.div`
  color: ${props => props.theme.colors.white};
  background: url(/images/hero-back.png);
  background-repeat: no-repeat;
  background-position: left 320px top 200px;
  background-size: 1400px 500px;
  position: relative;
  overflow: hidden;

  &:before {
    content: ' ';
    position: absolute;
    top: -80px;
    right: 0;
    left: 400px;
    width: 1300px;
    height: 533px;
    background: radial-gradient(
      ellipse at bottom,
      rgba(59, 204, 93, 0.4) 17%,
      transparent,
      transparent
    );
    z-index: 1;
  }
  &:after {
    content: ' ';
    position: absolute;
    right: 0;
    top: 453px;
    left: 400px;
    width: 1300px;
    height: 533px;
    background: radial-gradient(
      ellipse at top,
      rgba(82, 205, 242, 0.4) 17%,
      transparent,
      transparent
    );
    z-index: 1;
  }

  @media (max-width: ${props => props.theme.breakpoints.tablet}px) {
    background-position: left -200px top 200px;

    &:before,
    &:after {
      left: auto;
    }
  }
`

const Divider = styled.hr`
  color: ${props => props.theme.colors.white};
  opacity: 0.2;
`

const Hero = () => {
  return (
    <HeroWrapper>
      <Container>
        <Header />
        <Content />

        <Divider />
        <Partership />
        <Divider />
      </Container>
    </HeroWrapper>
  )
}

export default Hero
