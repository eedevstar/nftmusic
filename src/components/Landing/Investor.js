import Image from 'next/image'
import styled from 'styled-components'

import Container from '../common/Container'
import Text from './Text'

const Wrapper = styled.div`
  border: 1px solid ${props => props.theme.colors.whiteLight};
  box-sizing: border-box;
  border-radius: 32px;
  color: ${props => props.theme.colors.white};
`

const Title = styled(Text)`
  text-align: center;
`

const InvestorWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const InvestorItem = styled.div`
  width: 136px;
  height: 72px;
  position: relative;
  margin: 8px;

  @media (min-width: ${props => props.theme.breakpoints.desktop}px) {
    width: 250px;
    height: 88px;
  }

  @media (min-width: ${props => props.theme.breakpoints.mobile}px) {
    width: 175px;
    height: 80px;
    margin: 20px;
  }
`

const Investor = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Our Investors</Title>

        <InvestorWrapper>
          <InvestorItem>
            <Image src="/images/outlier-ventures.png" layout="fill" alt="Outlier Ventures" />
          </InvestorItem>
          <InvestorItem>
            <Image src="/images/zbs-capital.png" layout="fill" alt="ZBS Capital" />
          </InvestorItem>
          <InvestorItem>
            <Image src="/images/alves-ventures.png" layout="fill" alt="ALVES VENTURES" />
          </InvestorItem>
          <InvestorItem>
            <Image src="/images/alves-ventures.png" layout="fill" alt="ALVES VENTURES" />
          </InvestorItem>
          <InvestorItem>
            <Image src="/images/alves-ventures.png" layout="fill" alt="ALVES VENTURES" />
          </InvestorItem>
          <InvestorItem>
            <Image src="/images/alves-ventures.png" layout="fill" alt="ALVES VENTURES" />
          </InvestorItem>
          <InvestorItem>
            <Image src="/images/alves-ventures.png" layout="fill" alt="ALVES VENTURES" />
          </InvestorItem>
          <InvestorItem>
            <Image src="/images/alves-ventures.png" layout="fill" alt="ALVES VENTURES" />
          </InvestorItem>
        </InvestorWrapper>
      </Wrapper>
    </Container>
  )
}

export default Investor
