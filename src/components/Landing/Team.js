import Image from 'next/image'
import styled from 'styled-components'

import Container from '@components/common/Container'
import Text from './Text'

const Wrapper = styled(Container)`
  padding: 64px 0;
  color: ${props => props.theme.colors.white};

  @media (max-width: ${props => props.theme.breakpoints.tablet}px) {
    padding: 0;
  }
`

const Title = styled(Text)`
  text-align: center;
`

const TeamWrapper = styled.div`
  margin-top: 64px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const Member = styled.div`
  position: relative;
  width: 48%;
  margin-bottom: 40px;

  @media (max-width: ${props => props.theme.breakpoints.mobile}px) {
    width: 100%;
  }
`

const MemberImage = styled.div`
  width: 127px;
  height: 160px;
  position: absolute;
  top: 2px;

  @media (max-width: ${props => props.theme.breakpoints.tablet}px) {
    width: 80px;
    height: 120px;
    position: relative;
    top: 0;
  }
`

const Content = styled.div`
  padding-left: 150px;

  @media (max-width: ${props => props.theme.breakpoints.tablet}px) {
    padding: 0;
  }
`

const MemberTitle = styled.div`
  @media (max-width: ${props => props.theme.breakpoints.tablet}px) {
    position: absolute;
    left: 100px;
    top: 0;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}px) {
    top: 20px;
  }
`

const MemberName = styled(Text)`
  margin: 0;

  @media (max-width: ${props => props.theme.breakpoints.mobile}px) {
    word-spacing:9999px;
  }
`

const MemberRole = styled(Text)`
  margin: 0;
  margin-bottom: 16px;
  color: ${props => props.theme.colors.greenLight};
`

const MemberDetail = styled.ul`
  margin: 0;
  color: ${props => props.theme.colors.gray};
  padding-left: 20px;

  @media (max-width: ${props => props.theme.breakpoints.tablet}px) {
    margin-top: 10px;
  }
`

const MemberDetailItem = styled.li`
`

const MemberDetailValue = styled(Text)`
  margin: 0;
`

const Team = () => {
  return (
    <Wrapper>
      <Title>Core Team</Title>

      <TeamWrapper>
        <Member>
          <MemberImage>
            <Image src="/images/kyongsok.png" layout="fill" alt="Kyongsok Chong" />
          </MemberImage>
          <Content>
            <MemberTitle>
              <MemberName type="h3">Kyongsok Chong</MemberName>
              <MemberRole type="body2">CEO</MemberRole>
            </MemberTitle>
            <MemberDetail>
              <MemberDetailItem>
                <MemberDetailValue type="body2">Renowned practicing entertainment lawyer.</MemberDetailValue>
              </MemberDetailItem>
              <MemberDetailItem>
                <MemberDetailValue type="body2">Representative of multiple K-POP labels, celebrities and companies.</MemberDetailValue>
              </MemberDetailItem>
            </MemberDetail>
          </Content>
        </Member>
        <Member>
          <MemberImage>
            <Image src="/images/youngsung.png" layout="fill" alt="Youngsung" />
          </MemberImage>
          <Content>
            <MemberTitle>
              <MemberName type="h3">Youngsung</MemberName>
              <MemberRole type="body2">COO</MemberRole>
            </MemberTitle>
            <MemberDetail>
              <MemberDetailItem>
                <MemberDetailValue type="body2">CEO of Blockchain Design & Development Firm.</MemberDetailValue>
              </MemberDetailItem>
              <MemberDetailItem>
                <MemberDetailValue type="body2">Former consultant to 10+ blockchain companies.</MemberDetailValue>
              </MemberDetailItem>
            </MemberDetail>
          </Content>
        </Member>
        <Member>
          <MemberImage>
            <Image src="/images/andrew.png" layout="fill" alt="Andrew Danilov" />
          </MemberImage>
          <Content>
            <MemberTitle>
              <MemberName type="h3">Andrew Danilov</MemberName>
              <MemberRole type="body2">CDO</MemberRole>
            </MemberTitle>
            <MemberDetail>
              <MemberDetailItem>
                <MemberDetailValue type="body2">6+ years of experience in Fintech & Blockchain Companies.</MemberDetailValue>
              </MemberDetailItem>
              <MemberDetailItem>
                <MemberDetailValue type="body2">Designed the National Bank of Ukraine coin store.</MemberDetailValue>
              </MemberDetailItem>
            </MemberDetail>
          </Content>
        </Member>
        <Member>
          <MemberImage>
            <Image src="/images/woosung.png" layout="fill" alt="Woosung Kim" />
          </MemberImage>
          <Content>
            <MemberTitle>
              <MemberName type="h3">Woosung Kim</MemberName>
              <MemberRole type="body2">CSO</MemberRole>
            </MemberTitle>
            <MemberDetail>
              <MemberDetailItem>
                <MemberDetailValue type="body2">Multifaceted Performer of 1.1M+ Followers.</MemberDetailValue>
              </MemberDetailItem>
              <MemberDetailItem>
                <MemberDetailValue type="body2">{"One of Billboard's \"New K-pop Artists to Watch\"."}</MemberDetailValue>
              </MemberDetailItem>
            </MemberDetail>
          </Content>
        </Member>
      </TeamWrapper>
    </Wrapper>
  )
}

export default Team
