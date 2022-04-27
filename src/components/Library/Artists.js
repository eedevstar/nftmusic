import { useRouter } from 'next/router'
import styled from 'styled-components'
import Link from 'next/link'
import { SubTitle } from '@components/common/Text'
import Artist from '@components/Library/Artist'
import { ArtistsBox, ArtistsItemBox } from '@components/Layout/Artists'

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

const Artists = props => {
  return (
    <Wrapper>
      <BoxWrapper>
        <SubTitle bold>Artists</SubTitle>
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

export default Artists

const Wrapper = styled.div`
  margin-top: 25px;
  display: flex;
  flex-direction: column;
`

const BoxWrapper = styled.div`
  margin-bottom: 30px;
`
