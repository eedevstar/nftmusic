import styled from 'styled-components'
import { TitleH1, Caption2 } from '@components/common/Text'

const Header = props => {
  const { title, address, date, genre } = props.data
  return (
    <Wrapper>
      <TitleH1>{title}</TitleH1>
      <Caption2>{address}</Caption2>
      <Caption2 varient="black">
        {date} . {genre}
      </Caption2>
    </Wrapper>
  )
}

export default Header

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  ${Caption2} {
    margin-top: 10px;
  }
`
