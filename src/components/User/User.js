import styled from 'styled-components'
import Link from 'next/link'
import { SubTitle } from '@components/common/Text'
import { TextButton, SeeAll } from '@components/common/Button'
import Icon from '@components/common/Icon'
import Album from '@components/Library/Album'
import Artist from '@components/Library/Artist'
import { AlbumsBox, AlbumsItemBox } from '@components/Layout/Albums'
import { ArtistsBox, ArtistsItemBox } from '@components/Layout/Artists'

const User = props => {
  return (
    <Wrapper>
      <BoxWrapper>
        <SubTitle bold>
          Releases by [Artist Name]
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

      <BoxWrapper>
        <SubTitle bold>
          Features [Artist Name]
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

      <BoxWrapper>
        <SubTitle bold>More like [Artist Name]</SubTitle>
        <ArtistsBox>
          {props.artists.map((item, i) => (
            <ArtistsItemBox key={i}>
              <Artist data={item} />
            </ArtistsItemBox>
          ))}
        </ArtistsBox>
      </BoxWrapper>
    </Wrapper>
  )
}

export default User

const Wrapper = styled.div`
  margin-top: 25px;
  display: flex;
  flex-direction: column;
`

const BoxWrapper = styled.div`
  margin-bottom: 30px;
`
