import styled from 'styled-components'
import Album from '@components/Library/AlbumInner'
import { AlbumsBox, AlbumsItemBox } from '@components/Layout/Albums'

const albums = [
  {
    image: '',
    name: 'Album Name 1',
    artist: 'Artist 1',
    price: '0.005',
    type: 'Auction',
  },
  {
    image: '',
    name: 'Album Name 2',
    artist: 'Artist 2',
    price: '0.003',
    type: 'Auction',
  },
  {
    image: '',
    name: 'Album Name 3',
    artist: 'Artist 3',
    trprice: '0.015',
    type: 'Auction',
  },
  {
    image: '',
    name: 'Album Name 1',
    artist: 'Artist 1',
    price: '0.005',
    type: 'Auction',
  },
  {
    image: '',
    name: 'Album Name 2',
    artist: 'Artist 2',
    price: '0.003',
    type: 'Auction',
  },
]

const Wishlist = props => {
  return (
    <Wrapper>
      <BoxWrapper>
        <AlbumsBox>
          {albums.map((item, i) => (
            <AlbumsItemBox fullWidth key={i}>
              <Album data={item} />
            </AlbumsItemBox>
          ))}
        </AlbumsBox>
      </BoxWrapper>
    </Wrapper>
  )
}

export default Wishlist

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const BoxWrapper = styled.div`
  margin-bottom: 30px;
`
