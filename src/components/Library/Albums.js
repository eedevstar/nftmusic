import { useRouter } from 'next/router'
import styled from 'styled-components'
import Link from 'next/link'
import { SubTitle } from '@components/common/Text'
import { TextButton, SeeAll } from '@components/common/Button'
import Album from '@components/Library/Album'
import { AlbumsBox, AlbumsItemBox } from '@components/Layout/Albums'

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

const Albums = props => {
  const router = useRouter()
  console.log(router.query)
  
  return (
    <Wrapper>
      <BoxWrapper>
        <SubTitle bold>Albums</SubTitle>
        <AlbumsBox>
          {albums.map((item, i) => (
            <AlbumsItemBox key={i}>
              <Album data={item} />
            </AlbumsItemBox>
          ))}
        </AlbumsBox>
      </BoxWrapper>
    </Wrapper>
  )
}

export default Albums

const Wrapper = styled.div`
  margin-top: 25px;
  display: flex;
  flex-direction: column;
`

const BoxWrapper = styled.div`
  margin-bottom: 30px;
`
