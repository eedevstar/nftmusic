import { useRouter } from 'next/router'
import styled from 'styled-components'
import Link from 'next/link'
import { SubTitle } from '@components/common/Text'
import { TextButton, SeeAll } from '@components/common/Button'
import Icon from '@components/common/Icon'
import Song from '@components/Library/Song'
import { SongsBox, SongsItemBox } from '@components/Layout/Songs'

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

const Songs = props => {
  const router = useRouter()
  console.log(router.query)
  
  return (
    <Wrapper>
      <BoxWrapper>
        <SubTitle bold>Songs</SubTitle>
        <SongsBox>
          {songs.map((item, i) => (
            <SongsItemBox key={i}>
              <Song data={item} />
            </SongsItemBox>
          ))}
        </SongsBox>
      </BoxWrapper>
    </Wrapper>
  )
}

export default Songs

const Wrapper = styled.div`
  margin-top: 25px;
  display: flex;
  flex-direction: column;
`

const BoxWrapper = styled.div`
  margin-bottom: 30px;
`
