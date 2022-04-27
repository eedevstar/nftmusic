import { useState, useEffect } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import Icon from '@components/common/Icon'
import { useRouter } from 'next/router'
import { TextButton } from '@components/common/Button'
import { Input, SearchInput } from '@components/common/Input/index'
import SearchFilter from '@components/Search/Filter'

const Wrapper = styled.div`
  margin-top: 30px;
`

const MenusBox = styled.div`
  margin-left: -10px;
`

const MenuBox = styled.div`
  margin-bottom: 10px;
`

const SearchBox = styled.div`
  width: 80%;
  margin: 0px auto 10px 0px;
`

const SideBar = props => {
  const router = useRouter()

  return (
    <Wrapper>
      <SearchBox>
        <SearchInput placeholder="Song name, artist, album, etc." />
      </SearchBox>

      <MenusBox>
        <MenuBox>
          <Link href="/library" passHref>
            <TextButton
              varient="black"
              active={router.pathname == '/library' ? 'active' : ''}
            >
              Dashboard
            </TextButton>
          </Link>
        </MenuBox>
        <MenuBox>
          <Link href="/library/albums" passHref>
            <TextButton
              varient="black"
              active={router.pathname == '/library/albums' ? 'active' : ''}
            >
              Albums
            </TextButton>
          </Link>
        </MenuBox>
        <MenuBox>
          <Link href="/library/artists" passHref>
            <TextButton
              varient="black"
              active={router.pathname == '/library/artists' ? 'active' : ''}
            >
              Artists
            </TextButton>
          </Link>
        </MenuBox>
        <MenuBox>
          <Link href="/library/songs" passHref>
            <TextButton
              varient="black"
              active={router.pathname == '/library/songs' ? 'active' : ''}
            >
              Songs
            </TextButton>
          </Link>
        </MenuBox>
      </MenusBox>

    </Wrapper>
  )
}

export default SideBar
