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

  const handleSearch = (key, value) => {
    router.push({
      pathname: router.pathname,
      query: {
        ...router.query,
        [key]: value,
      }
    }, null, { scroll: false })
  }

  const type = router.query.type;

  return (
    <Wrapper>
      <SearchBox>
        <SearchInput placeholder="Song name, artist, album, etc." />
      </SearchBox>

      <MenusBox>
        <MenuBox>
          <Link href="/market" passHref>
            <TextButton
              varient="black"
              active={ typeof type === 'undefined' ? 'active' : ''}
            >
              Dashboard
            </TextButton>
          </Link>
        </MenuBox>
        <MenuBox>
          <TextButton
            varient="black"
            onClick={() => handleSearch('type', 'auctions')}
            active={type === 'auctions' ? 'active' : ''}
          >
            Auctions
          </TextButton>
        </MenuBox>
        <MenuBox>
          <TextButton
            varient="black"
            onClick={() => handleSearch('type', 'token-sales')}
            active={type === 'token-sales' ? 'active' : ''}
          >
            Token Sales
          </TextButton>
        </MenuBox>
      </MenusBox>

      <SearchFilter />
    </Wrapper>
  )
}

export default SideBar
