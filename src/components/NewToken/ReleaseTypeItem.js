import styled from 'styled-components'
import { Caption2, SubTitle } from '@components/common/Text'

const Wrapper = styled.div`
  width: 100%;
  padding: 24px;
  display: flex;
  box-sizing: border-box;
  border-bottom: 0.5px solid ${props => props.theme.colors.gray6};
  cursor: pointer;

  &:hover {
    background: ${props => props.theme.gradients.radient3};

    ${Caption2} {
      color: ${props => props.theme.colors.gray90};
    }
  }
`

const PinkBox = styled.div`
  min-width: 80px;
  min-height: 80px;
  background: ${props => props.theme.colors.pink};
  border-radius: 12px;
`

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 30px;

  ${SubTitle} {
    margin: 3px 0px 3px 0px;
    padding: 0px;
  }
  ${Caption2} {
    text-align: left;
  }
`

const ReleaseTypeItem = props => {
  const { title, content } = props.data
  return (
    <Wrapper>
      <PinkBox></PinkBox>
      <ContentBox>
        <SubTitle>{title}</SubTitle>
        <Caption2 varient="gray64">{content}</Caption2>
      </ContentBox>
    </Wrapper>
  )
}

export default ReleaseTypeItem
