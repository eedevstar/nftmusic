import { useState, useEffect } from 'react'
import { useRouter } from 'next/router' 
import { useDebounce } from '@hooks/useDebounce'
import styled from 'styled-components'
import Icon from '@components/common/Icon'
import { Input } from '@components/common/Input/index'

/**
 * Parameters
 * include original parameters of Input tag.
 * PlaceHolder : placeholder (string)
 * Varient : varient ( value in theme.input )
 * Info Text Type : msgType ("Success", "Info", "Error")
 * Info Text Content : msgText (string)
 */

const IconBox = styled.div`
  margin-top: 8px;
`

const Wrapper = styled.div`
  position: relative;
`

const SearchInput = props => {
  const router = useRouter()

  const varient = props.varient ? props.varient : 'bigGreySearch'

  const [value, setValue] = useState('')
  const defaultValue = router.query.search ? router.query.search : '';

  const [remove, setRemove] = useState(false)

  const debouncedValue = useDebounce(value)

  const handleChange = event => {
    setValue(event.target.value)
  }

  const handleRemove = () => {
    setValue("")
  }

  // router query is blank at first, and get real value, need to check if it has value
  useEffect(() => {
    if(defaultValue != debouncedValue) {
      router.push({
        pathname: router.pathname,
        query: {
          ...router.query,
          search: debouncedValue,
        }
      }, null, { scroll: false })
    }
  }, [debouncedValue])

  // get blank first, and then get the query value, need to update here
  useEffect(() => {
    setValue(defaultValue)
  }, [defaultValue])

  return (
    <Wrapper>
      <Input
        type="text"
        varient={varient}
        name="search"
        msgType=""
        msgText=""
        value={value}
        placeholder={props.placeholder}
        onChange={handleChange}
        onFocus={()=>setRemove(true)}
        onBlur={()=>setRemove(false)}
        endAdornment={
          <IconBox onMouseDown={()=>handleRemove()}>
            <Icon type={remove && value?"CrossGrey":"Search"} />
          </IconBox>
        }
      />
    </Wrapper>
  )
}

SearchInput.displayName = 'SearchInput'

export default SearchInput
