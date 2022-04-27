import styled from 'styled-components'
import { SubTitle } from '@components/common/Text'
import { SeeAll } from '@components/common/Button'
import RecentView from './RecentView'
import Tokens from './Tokens'
import Wishlist from './Wishlist'

const Index = () => {
  return (
    <Wrapper>
      <SubTitle varient="gray36" bold>
        Recently Viewed
      </SubTitle>
      <RecentView />

      <SubTitle varient="gray36" bold>
        Your Tokens
      </SubTitle>
      <Tokens />

      <SubTitle varient="gray36" bold>
        Your Wishlist
        <SeeAll href="#" />
      </SubTitle>
      <Wishlist />

      <SubTitle varient="gray36" bold>
        Suggestions for You
        <SeeAll href="#" />
      </SubTitle>
      <Wishlist />
    </Wrapper>
  )
}

export default Index

const Wrapper = styled.div`
  user-select: none;

  ${SubTitle} {
    display: flex;
    justify-content: space-between;

    &: first-of-type {
      margin-top: 0px;
    }
    margin-top: 50px;
    margin-bottom: 20px;
  }
`
