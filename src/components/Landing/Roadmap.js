import styled from 'styled-components'

import Container from '@components/common/Container'
import Icon from '@components/common/Icon'
import Text from './Text'


const Roadmap = () => {
  return (
    <Wrapper>
      <Title type="h2">Roadmap</Title>
      <List>
        <Item type="primary">
          <ItemTitle>
            <ItemTitleText type="caption">2019</ItemTitleText>
            <Icon type="CheckCircle" />
          </ItemTitle>
          <ItemDetail type="body3">Market research</ItemDetail>
          <ItemDetail type="body3">Project ideation</ItemDetail>
        </Item>
        <Item type="primary">
          <ItemTitle>
            <ItemTitleText type="caption">2020</ItemTitleText>
            <Icon type="CheckCircle" />
          </ItemTitle>
          <ItemDetail type="body3">Product research</ItemDetail>
        </Item>
        <Item type="primary">
          <ItemTitle>
            <ItemTitleText type="caption">Nov. 2020 — May 2021</ItemTitleText>
            <Icon type="CheckCircle" />
          </ItemTitle>
          <ItemDetail type="body3">UX design</ItemDetail>
        </Item>
        <Item type="primary">
          <ItemTitle>
            <ItemTitleText type="caption">June — Aug. 2021</ItemTitleText>
            <Icon type="CheckCircle" />
          </ItemTitle>
          <ItemDetail type="body3">UI Design & Development</ItemDetail>
          <ItemDetail type="body3">Algorithmic incentive system research</ItemDetail>
          <ItemDetail type="body3">NFT Marketplace Research</ItemDetail>
        </Item>
        <Item type="secondary">
          <ItemTitle>
            <ItemTitleText type="caption">Oct. - Dec. 2021</ItemTitleText>
          </ItemTitle>
          <ItemDetail type="body3">NFT Marketplace Beta Release</ItemDetail>
          <ItemDetail type="body3">MeMusician Initial Launch</ItemDetail>
          <ItemDetail type="body3">MeMusic Token Launch</ItemDetail>
        </Item>
        <Item type="secondary">
          <ItemTitle>
            <ItemTitleText type="caption">Jan. 2022</ItemTitleText>
          </ItemTitle>
          <ItemDetail type="body3">Artist Token Release</ItemDetail>
          <ItemDetail type="body3">Streaming Application</ItemDetail>
          <ItemDetail type="body3">Alpha Release</ItemDetail>
        </Item>
        <Item type="secondary">
          <ItemTitle>
            <ItemTitleText type="caption">Jun. 2022</ItemTitleText>
          </ItemTitle>
          <ItemDetail type="body3">Product Private Beta</ItemDetail>
        </Item>
        <Item type="secondary">
          <ItemTitle>
            <ItemTitleText type="caption">Oct. 2022</ItemTitleText>
          </ItemTitle>
          <ItemDetail type="body3">Product Release</ItemDetail>
        </Item>
      </List>
    </Wrapper>
  )
}

export default Roadmap


const Wrapper = styled(Container)`
  color: ${props => props.theme.colors.white};
  padding: 64px 0;
`

const Title = styled(Text)`
  text-align: center;
`

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`

const Item = styled.div`
  width: 20%;
  margin-bottom: 24px;
  padding: 24px 16px;
  position: relative;
  border-top: 4px solid ${props => props.theme.colors[props.type]};
  background: ${props => props.theme.gradients[props.type]};

  @media (max-width: ${props => props.theme.breakpoints.desktop}px) {
    width: 28%;
  }

  @media (max-width: ${props => props.theme.breakpoints.tablet}px) {
    width: 41%;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}px) {
    width: 100%;
  }
`

const ItemTitle = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0;
  margin-bottom: 16px;
`
const ItemTitleText = styled(Text)`
  margin: 0;
`

const ItemDetail = styled(Text)`
  opacity: 0.7;
  margin: 6px 0;
`
