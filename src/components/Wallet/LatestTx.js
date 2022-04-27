import styled from 'styled-components'
import Link from 'next/link'
import { SubTitle } from '@components/common/Text'
import TxItem from './TxItem'
import { TextButton, SeeAll } from '@components/common/Button'
import Icon from '@components/common/Icon'

const Wrapper = styled.div`
  width: 100%;
`

const TxsBox = styled.div`
  margin-top: 40px;
`

const TxItemBox = styled.div`
  margin-top: 15px;
`

const LatestTx = props => {
  const txs = props.data
  return (
    <Wrapper>
      <SubTitle bold>
        Latest Transactions
        <SeeAll href="/wallet/history" />
      </SubTitle>

      <TxsBox>
        {txs.map((item, i) => (
          <TxItemBox key={i}>
            <TxItem data={item} />
          </TxItemBox>
        ))}
      </TxsBox>
    </Wrapper>
  )
}

export default LatestTx
