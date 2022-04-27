import styled from 'styled-components'
import Link from 'next/link'
import { SubTitle } from '@components/common/Text'
import { TextButton, SeeAll } from '@components/common/Button'
import Icon from '@components/common/Icon'
import Album from '@components/Library/Album'
import { AlbumsBox, AlbumsItemBox } from '@components/Layout/Albums'

const Index = props => {
  return (
    <Wrapper>
      <BoxWrapper>
        <SubTitle bold>
          [Batch Name]
          <SeeAll href="/market?batchname=" />
        </SubTitle>
        <AlbumsBox>
          {props.albums.map((item, i) => (
            <AlbumsItemBox key={i}>
              <Album data={item} />
            </AlbumsItemBox>
          ))}
        </AlbumsBox>
      </BoxWrapper>

      <BoxWrapper>
        <SubTitle bold>
          [Batch Name]
          <SeeAll href="/market?batchname=" />
        </SubTitle>
        <AlbumsBox>
          {props.albums.map((item, i) => (
            <AlbumsItemBox key={i}>
              <Album data={item} />
            </AlbumsItemBox>
          ))}
        </AlbumsBox>
      </BoxWrapper>
    </Wrapper>
  )
}

export default Index

const Wrapper = styled.div`
  margin-top: 25px;
  display: flex;
  flex-direction: column;
`

const BoxWrapper = styled.div`
  margin-bottom: 30px;
`
