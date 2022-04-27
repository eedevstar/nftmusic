import { useRouter } from 'next/router'
import styled from 'styled-components'
import { SubTitle } from '@components/common/Text'
import { TextButton, SeeAll } from '@components/common/Button'
import Album from '@components/Library/Album'
import Song from '@components/Library/Song'
import Artist from '@components/Library/Artist'
import { AlbumsBox, AlbumsItemBox } from '@components/Layout/Albums'
import { ArtistsBox, ArtistsItemBox } from '@components/Layout/Artists'
import { SongsBox, SongsItemBox } from '@components/Layout/Songs'

const albums = [
  {
    image: '',
    name: 'Album Name 1',
    artist: 'Artist 1',
    tracks: '5',
    time: '0:00',
  },
  {
    image: '',
    name: 'Album Name 2',
    artist: 'Artist 2',
    tracks: '5',
    time: '0:00',
  },
  {
    image: '',
    name: 'Album Name 3',
    artist: 'Artist 3',
    tracks: '5',
    time: '0:00',
  },
]

const songs = [
  {
    image: '',
    name: 'Album Name 1',
    artist: 'Artist 1',
    albumName: 'Album 1',
    time: '0:00',
  },
  {
    image: '',
    name: 'Album Name 2',
    artist: 'Artist 2',
    albumName: 'Album 2',
    time: '0:00',
  },
  {
    image: '',
    name: 'Album Name 3',
    artist: 'Artist 3',
    albumName: 'Album 3',
    time: '0:00',
  },
]

const artists = [
  {
    image: '',
    name: 'Artist Name 1',
    userName: '@username1',
  },
  {
    image: '',
    name: 'Artist Name 2',
    userName: '@username2',
  },
  {
    image: '',
    name: 'Artist Name 3',
    userName: '@username3',
  },
  {
    image: '',
    name: 'Artist Name 4',
    userName: '@username4',
  },
  {
    image: '',
    name: 'Artist Name 5',
    userName: '@username5',
  },
]

const Index = props => {
  const router = useRouter()
  console.log(router.query)
  
  return (
    <Wrapper>
      <BoxWrapper>
        <SubTitle bold>
          Albums
          <SeeAll href="/library/albums" />
        </SubTitle>
        <AlbumsBox>
          {albums.map((item, i) => (
            <AlbumsItemBox key={i}>
              <Album data={item} />
            </AlbumsItemBox>
          ))}
        </AlbumsBox>
      </BoxWrapper>

      <BoxWrapper>
        <SubTitle bold>
          Songs
          <SeeAll href="/library/songs" />
        </SubTitle>
        <SongsBox>
          {songs.map((item, i) => (
            <SongsItemBox key={i}>
              <Song data={item} />
            </SongsItemBox>
          ))}
        </SongsBox>
      </BoxWrapper>

      <BoxWrapper>
        <SubTitle bold>
          Artists
          <SeeAll href="/library/artists" />
        </SubTitle>
        <ArtistsBox>
          {artists.map((item, i) => (
            <ArtistsItemBox key={i}>
              <Artist data={item} />
            </ArtistsItemBox>
          ))}
        </ArtistsBox>
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
