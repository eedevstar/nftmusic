import { useState, useEffect } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import Icon from '@components/common/Icon'
import { useRouter } from 'next/router'
import { Input, SearchInput } from '@components/common/Input/index'
import FilterMenu from '@components/Search/FilterMenu'

const newsTypeItems = [
  { link: '#', label: 'All Items', value: '' },
  { link: '#', label: 'Announcements', value: 'announcements' },
  { link: '#', label: 'News', value: 'news' },
]

const dateItems = [
  { link: '#', label: 'All', value: '' },
  { link: '#', label: 'Today', value: 'today' },
  { link: '#', label: 'Last week', value: 'lastweek' },
  { link: '#', label: 'Last month', value: 'lastmonth' },
  { link: '#', label: 'Last 3 months', value: 'last3months' },
  { link: '#', label: 'Last year', value: 'lastyear' },
]

const SideBar = props => {
  const router = useRouter()

  

  return (
    <Wrapper>
      <SearchBox>
        <SearchInput placeholder="Song name, artist, album, etc." />
      </SearchBox>

      <FilterItem>
        <FilterMenu title="Type" category="Type" menus={newsTypeItems} />
      </FilterItem>
      <FilterItem>
        <FilterMenu title="Date" category="Date" menus={dateItems} />
      </FilterItem>
    </Wrapper>
  )
}

export default SideBar

const Wrapper = styled.div`
  display: flex;
  margin-top: 30px;
  flex-direction: column;
`

const FilterItem = styled.div`
  margin-top: 25px;
`

const SearchBox = styled.div`
  width: 80%;
  margin: 0px auto 10px 0px;
`
