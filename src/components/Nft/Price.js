import styled from 'styled-components'
import { TitleH1, Caption2 } from '@components/common/Text'
import Progress from '@components/common/Progress'

const Price = props => {
  const { eth, dollar, tokenAmount, tokenSold } = props.data
  return (
    <Wrapper>
      <LeftSide>
        <TitleH1>{eth} ETH</TitleH1>
        <Caption2>$ {dollar}</Caption2>
      </LeftSide>
      <RightSide>
        <Caption2 varient="gray50">
          {tokenSold} / {tokenAmount} tokens available
        </Caption2>
        <ProgressBox>
          <Progress value={tokenSold} max={tokenAmount} />
        </ProgressBox>
      </RightSide>
    </Wrapper>
  )
}

export default Price

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  ${Caption2} {
    margin-top: 0px;
  }
`

const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
`

const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 10%;
`

const ProgressBox = styled.div`
  width: 120%;
  margin-top: 7px;
`
