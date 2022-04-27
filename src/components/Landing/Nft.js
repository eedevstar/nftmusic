import Image from 'next/image'
import styled from 'styled-components'

import Container from '@components/common/Container'
import Icon from '@components/common/Icon'
import Text from './Text'

const FEATURES = [
  { name: 'Multichain NFT', memusic: true, opulous: false, opensea: false },
  { name: 'NFT Premier', memusic: true, opulous: false, opensea: false },
  { name: 'NFT Exchange', memusic: true, opulous: true, opensea: true },
  { name: 'Copyright backed NFT', memusic: true, opulous: true, opensea: false },
  { name: 'Fractional NFTs', memusic: true, opulous: true, opensea: false },
  { name: 'Artist Tokens', memusic: true, opulous: false, opensea: false },
  { name: 'DeFI Options', memusic: true, opulous: true, opensea: false }
]

const Wrapper = styled(Container)`
  padding: 64px 0;
  color: ${props => props.theme.colors.white}
`

const Title = styled(Text)`
  background: url(/images/nft.svg);
  background-repeat: no-repeat;
  background-position: 0% center;
  font-weight: normal;

  @media (max-width: ${props => props.theme.breakpoints.large}px) {
    font-size: 56px;
    line-height: 68px;
  }

  @media (max-width: ${props => props.theme.breakpoints.desktop}px) {
    font-size: 48px;
    line-height: 60px;
  }
`

const Table = styled.div`
  display: none;
  flex-direction: column;
  align-items: flex-start;
  background: ${props => props.theme.colors.grayLight};
  border: 2px solid ${props => props.theme.colors.whiteLight};
  backdrop-filter: blur(200px);
  border-radius: 32px;

  @media (min-width: ${props => props.theme.breakpoints.tablet}px) {
    display: flex;
  }
`

const MobileTable = styled(Table)`
  display: none;
  margin-bottom: 16px;

  @media (max-width: ${props => props.theme.breakpoints.tablet}px) {
    display: block;
  }
`

const Feature = styled.div`
  flex-grow: 1;
  margin-left: 64px;

  @media (max-width: ${props => props.theme.breakpoints.tablet}px) {
    font-size: 18px;
    line-height: 28px;
    margin-left: 32px;
  }
`

const Subject = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 200px;
  height: 48px;
  position: relative;
  margin: 40px 30px;

  @media (max-width: ${props => props.theme.breakpoints.desktop}px) {
    min-width: 110px;
    height: 25px;
  }

  @media (max-width: ${props => props.theme.breakpoints.tablet}px) {
    min-width: 110px;
    height: 25px;
  }
`

const Value = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 200px;
  height: 48px;
  position: relative;
  margin: 0 30px;

  @media (max-width: ${props => props.theme.breakpoints.desktop}px) {
    min-width: 110px;
    height: 25px;
  }

  @media (max-width: ${props => props.theme.breakpoints.tablet}px) {
    min-width: 110px;
    height: 25px;
  }
`

const Row = styled.div`
  background: transparent;
  display: flex;
  align-items: center;
  width: 100%;

  @media (max-width: ${props => props.theme.breakpoints.tablet}px) {
    justify-content: center;
  }
`

const DarkRow = styled(Row)`
  background: ${props => props.theme.colors.darkLight};
`

const Nft = () =>{
  const renderRow = (feature, index) => {
    const Component = index % 2 === 0 ? DarkRow : Row;
    return (
      <Component key={feature.name}>
        <Feature>
          <Text type="body1" opacity="0.7">{feature.name}</Text>
        </Feature>
        {['memusic', 'opulous', 'opensea'].map(name => (
          <Value key={name}>
            <Icon type={feature[name] ? 'Check' : 'Cross'} />
          </Value>
        ))}
      </Component>
    )
  }

  const renderMobileRow = (name, feature, index) => {
    const Component = index % 2 === 0 ? DarkRow : Row;
    return (
      <Component key={feature.name}>
        <Feature>
          <Text type="body1" opacity="0.7">{feature.name}</Text>
        </Feature>
        <Value key={name}>
          <Icon type={feature[name] ? 'Check' : 'Cross'} />
        </Value>
      </Component>
    )
  }

  return (
    <Wrapper>
      <Title>
        MeMusic enables music as
        <br />
        an investment class through
        <br />
        using NFTs
      </Title>
      <Table>
        <Row>
          <Feature></Feature>
          <Subject>
            <Image src="/images/logo.png" alt="MeMusic" layout="fill" />
          </Subject>
          <Subject>
            <Image src="/images/opulous.png" alt="OPULOUS" layout="fill" />
          </Subject>
          <Subject>
            <Image src="/images/opensea.png" alt="OpenSea" layout="fill" />
          </Subject>
        </Row>
        { FEATURES.map(renderRow) }
      </Table>
      {['memusic', 'opulous', 'opensea'].map(name => (
          <MobileTable key={name}>
            <Row>
              <Subject>
                { name === 'memusic' && <Image src="/images/logo.png" alt="MeMusic" layout="fill" /> }
                { name !== 'memusic' && <Image src={`/images/${name}.png`} alt={name} layout="fill" /> }
              </Subject>
            </Row>
            { FEATURES.map((feature, index) => renderMobileRow(name, feature, index)) }
          </MobileTable>
        ))}
    </Wrapper>
  )
}

export default Nft;
