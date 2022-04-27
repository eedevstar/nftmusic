import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Caption1, Caption2, StyledLink } from '@components/common/Text'
import FilterMenu from './FilterMenu'
import FilterPrice from './FilterPrice'

const releaseTypeItems = [
  { link: '#', label: 'All Items', value: '' },
  { link: '#', label: 'Album', value: 'album' },
  { link: '#', label: 'EP', value: 'ep' },
]

const saleTypeItems = [
  { link: '#', label: 'All Items', value: '' },
  { link: '#', label: 'Owned', value: 'owned' },
  { link: '#', label: 'Single token', value: 'singleToken' },
  { link: '#', label: 'Multiple tokens', value: 'multipleTokens' },
  { link: '#', label: 'Auction', value: 'auction' },
]

const saleStatusItems = [
  { link: '#', label: 'All Items', value: '' },
  { link: '#', label: 'Upcoming', value: 'upcoming' },
  { link: '#', label: 'Ongoing', value: 'ongoing' },
]

const genresItems = [
  { link: '#', label: 'All', value: '' },
  { link: '#', label: 'Album', value: 'album' },
  { link: '#', label: 'Rock', value: 'rock' },
]

const Filter = porps => {
  return (
    <Wrapper>
      <FilterItem>
        <FilterMenu title="Release Type" category="ReleaseType" menus={releaseTypeItems} />
      </FilterItem>
      <FilterItem>
        <FilterMenu title="Sale Type" category="SaleType" menus={saleTypeItems} />
      </FilterItem>
      <FilterItem>
        <FilterMenu title="Sale Status" category="SaleStatus" menus={saleStatusItems} />
      </FilterItem>
      <FilterItem>
        <Caption1 varient="gray90">Token Price</Caption1>
        <FilterPrice category="price" />
      </FilterItem>
      <FilterItem>
        <FilterMenu title="Genres" category="Genres" menus={genresItems} />
      </FilterItem>
    </Wrapper>
  )
}

export default Filter

const Wrapper = styled.div``

const FilterItem = styled.div`
  margin-top: 25px;
`
