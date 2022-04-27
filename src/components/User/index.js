import styled from 'styled-components'
import Link from 'next/link'
import { SubTitle } from '@components/common/Text'
import { TextButton, SeeAll } from '@components/common/Button'
import Icon from '@components/common/Icon'
import Album from '@components/Library/Album'
import Artist from '@components/Library/Artist'
import { AlbumsBox, AlbumsItemBox } from '@components/Layout/Albums'
import { ArtistsBox, ArtistsItemBox } from '@components/Layout/Artists'
import LatestTx from '@components/Wallet/LatestTx'

const Index = props => {
  return (
    <Wrapper>
      <BoxWrapper>
        <SubTitle bold>
          Your Latest Releases
          <SeeAll href="#" />
        </SubTitle>
        <AlbumsBox>
          {props.albums.map((item, i) => (
            <AlbumsItemBox key={i}>
              <Album data={item} />
            </AlbumsItemBox>
          ))}
        </AlbumsBox>
      </BoxWrapper>
      
      <LatestTx data={props.txs} />
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
