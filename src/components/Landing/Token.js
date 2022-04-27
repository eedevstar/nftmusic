import Image from 'next/image'
import styled from 'styled-components'

import Container from '@components/common/Container'
import Text from './Text'
import Button from './Button'

const SUPPLY_VALUES = [
  { name: 'Strategic Sale', value: 15 },
  { name: 'Public Sale', value: 0.5 },
  { name: 'Partners', value: 10 },
  { name: 'Liquidity', value: 1 },
  { name: 'Seed Round', value: 7 },
  { name: 'Ecosystem / Incentives', value: 30 },
  { name: 'Marketing', value: 10 },
  { name: 'Reserves', value: 4.5 },
  { name: 'Team', value: 15 },
  { name: 'Advisors', value: 5 },
  { name: 'Private Sale', value: 2 }
]

const Wrapper = styled(Container)`
  padding: 64px 0;
  color: ${props => props.theme.colors.white};
`

const FeatureWrapper = styled.div`
  margin-top: 64px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const Feature = styled.div`
  position: relative;
  width: 48%;
  margin-bottom: 24px;

  @media (max-width: ${props => props.theme.breakpoints.tablet}px) {
    width: 100%;
  }
`

const FeatureImage = styled.div`
  width: 80px;
  height: 80px;
  position: absolute;
  top: 2px;

  @media (max-width: ${props => props.theme.breakpoints.mobile}px) {
    position: relative;
    width: 40px;
    height: 40px;
    top: 0;
  }
`

const Content = styled.div`
  padding-left: 104px;

  @media (max-width: ${props => props.theme.breakpoints.mobile}px) {
    padding: 0;
  }
`

const ContentTitle = styled(Text)`
  margin-top: 0;

  @media (max-width: ${props => props.theme.breakpoints.mobile}px) {
    position: absolute;
    top: 0;
    left: 50px;
  }
`

const SupplyWrapper = styled.div`
  margin-top: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: url(/images/donut.png);
  background-repeat: no-repeat;
  background-position: center;
  min-height: 600px;

  @media (max-width: ${props => props.theme.breakpoints.tablet}px) {
    display: none;
  }

  @media (max-width: ${props => props.theme.breakpoints.desktop}px) {
    min-height: auto;
    background-size: contain;
  }
`

const SupplyList = styled.div`
`

const SupplyListRight = styled(SupplyList)`
  text-align: right;
`

const SupplyTitle = styled(Text)`
  opacity: 0.7;
  margin: 0;
`

const SupplyValue = styled(Text)`
  margin: 0;
`

const SupplyItem = styled.div`
  padding: 8px 16px;
  width: 250px;
  margin-bottom: 10px;
  cursor: pointer;

  &:hover {
    background: ${props => props.theme.colors.whiteLight};
    border-radius: 8px;

    ${SupplyTitle} {
      color: ${props => props.theme.colors.greenLight};
    }
  }
`

const MobileSupply = styled.div`
  display: none;

  @media (max-width: ${props => props.theme.breakpoints.tablet}px) {
    display: block;
  }
`

const Table = styled.div`
  display: flex;
  flex-direction: column;
  background: ${props => props.theme.colors.grayLight};
  border: 2px solid ${props => props.theme.colors.whiteLight};
  backdrop-filter: blur(200px);
  border-radius: 32px;
`

const Row = styled.div`
  background: transparent;
  display: flex;
  flex: 1;
  justify-content: space-between;
  padding: 0 16px;
`

const DarkRow = styled(Row)`
  background: ${props => props.theme.colors.darkLight};
`

const ButtonWrapper = styled.div`
  margin-top: 100px;
  text-align: center;

  @media (max-width: ${props => props.theme.breakpoints.tablet}px) {
    margin-top: 40px;
  }
`

const InfoButton = styled(Button)`
  width: 280px;
`

const Token = () => {
  const renderMobile = () => {
    return (
      SUPPLY_VALUES.map((item, index) => {
        const Component = index % 2 === 0 ? Row : DarkRow
        return (
          <Component key={item.name}>
            <Text type="body2">{item.name}</Text>
            <Text type="h3">{`${item.value}%`}</Text>
          </Component>
        )
      })
    )
  }

  return (
    <Wrapper>
      <Text type="h2">Token</Text>
      <Text type="body1" opacity="0.7">
        MeMusic token powers the tokenized platform through various utilities.
        <br />
        From minting creator tokens to purchasing NFTs, MeMu
      </Text>

      <FeatureWrapper>
        <Feature>
          <FeatureImage>
            <Image src="/images/governance.png" layout="fill" alt="Governance" />
          </FeatureImage>
          <Content>
            <ContentTitle type="h3">Governance</ContentTitle>
            <Text type="body2" opacity="0.7">
              Using MeMusic tokens, users are able to participate in community governance.
              MeMusic aims for a maximized community involvement within the platform.
              Users can vote for the next cohort of MeMusicians, NFT airdrop, and more using the MeMusic token.
            </Text>
          </Content>
        </Feature>
        <Feature>
          <FeatureImage>
            <Image src="/images/streaming-mining.png" layout="fill" alt="Governance" />
          </FeatureImage>
          <Content>
            <ContentTitle type="h3">Streaming & Mining</ContentTitle>
            <Text type="body2" opacity="0.7">
              Using MeMusic’s streaming application, users can mine MeMusic tokens without special plugin or hardware.
              By simply listening to music, users are able to mine for MeMusic tokens on any device.
            </Text>
          </Content>
        </Feature>
        <Feature>
          <FeatureImage>
            <Image src="/images/artist-tokens.png" layout="fill" alt="Governance" />
          </FeatureImage>
          <Content>
            <ContentTitle type="h3">Artist Tokens</ContentTitle>
            <Text type="body2" opacity="0.7">
              On MeMusic, artists can tokenize their assets using artist tokens.
              From exclusive merchandise to special music editions, artists can leverage the services provided by the platform to increase their revenue stream.
            </Text>
          </Content>
        </Feature>
        <Feature>
          <FeatureImage>
            <Image src="/images/commerce.png" layout="fill" alt="Governance" />
          </FeatureImage>
          <Content>
            <ContentTitle type="h3">Commerce</ContentTitle>
            <Text type="body2" opacity="0.7">
              On MeMusic, artists can tokenize their assets using artist tokens.
              From exclusive merchandise to special music editions, artists can leverage the services provided by the platform to increase their revenue stream.
            </Text>
          </Content>
        </Feature>
      </FeatureWrapper>

      <SupplyWrapper>
        <SupplyList>
          {SUPPLY_VALUES.slice(0, 6).map(item => (
            <SupplyItem key={item.name}>
              <SupplyTitle type="body2">{item.name}</SupplyTitle>
              <SupplyValue type="h3">{`${item.value}%`}</SupplyValue>
            </SupplyItem>
          ))}
        </SupplyList>
        <SupplyListRight>
          {SUPPLY_VALUES.slice(6).map(item => (
            <SupplyItem key={item.name}>
              <SupplyTitle type="body2">{item.name}</SupplyTitle>
              <SupplyValue type="h3">{`${item.value}%`}</SupplyValue>
            </SupplyItem>
          ))}
        </SupplyListRight>
      </SupplyWrapper>

      <MobileSupply>
        <Table>
          {renderMobile()}
        </Table>
      </MobileSupply>

      <ButtonWrapper>
        <InfoButton type="secondary">Read Whitepaper</InfoButton>
      </ButtonWrapper>
    </Wrapper>
  );
}

export default Token
