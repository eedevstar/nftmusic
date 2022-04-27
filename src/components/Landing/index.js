import styled from 'styled-components'

import Hero from './Hero'
import Service from './Service'
import Nft from './Nft'
import Token from './Token'
import Team from './Team'
import Investor from './Investor'
import Roadmap from './Roadmap'
import ContactUs from './ContactUs'
import Footer from './Footer'

const IndexWrapper = styled.div`
  background: ${props => props.theme.colors.bg};
`

const Index = () => {
  return (
    <IndexWrapper>
      <Hero />
      <Service />
      <Nft />
      <Token />
      <Team />
      <Investor />
      <Roadmap />
      <ContactUs />
      <Footer />
    </IndexWrapper>
  )
}

export default Index
