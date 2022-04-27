import { useState } from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import Link from 'next/link'
import { Caption1, StyledLink } from '@components/common/Text'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  ${Caption1} {
    margin-bottom: 12px;
    letter-spacing: 0.01em;
  }

  ${StyledLink} {
    margin-bottom: 8px;
    letter-spacing: 0.01em;
  }
`

const FilterMenu = props => {
  const router = useRouter()

  const handleClick = value => {
    router.push({
      pathname: router.pathname,
      query: {
        ...router.query,
        [props.category]: value,
      }
    }, null, { scroll: false })
  }

  const filterValue = router.query[props.category];

  return (
    <Wrapper>
      <Caption1 varient="gray90">{props.title}</Caption1>
      {props.menus.map((item, i) => {
        return (
          <StyledLink key={i}  
            active={ (typeof filterValue === 'undefined' && item.value == '') || filterValue === item.value ? 'active' : '' }
            onClick={() => handleClick(item.value)} 
            varient="heavyGrey">
              {item.label}
          </StyledLink>
        )
      })}
    </Wrapper>
  )
}

export default FilterMenu
