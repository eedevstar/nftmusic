import React, { useState } from 'react'
import styled from 'styled-components'

import { SubTitle } from '@components/common/Text'
import { Button } from '@components/common/Button'
import Album from '@components/Library/AlbumWide'
import { Tab } from '@components/common/Tab'
import SingleToken from './SingleToken'
import MultiToken from './MultiToken'
import Auction from './Auction'

const Item = styled.div``

const ThirdStep = props => {
  const [token, setToken] = useState()
  const { setStep, setStepData, album, updateAlbumData  } = props

  const handleClick = event => {
    setStepData(token)
    setStep(3)
  }

  return (
    <Wrapper>
      <AlbumItemBox>
        <Album data={album} updateAlbumData={updateAlbumData} editAble />
      </AlbumItemBox>

      <TabBox>
        <Tab>
          <Item label="Single Token">
            <SingleToken setTokenData={setToken} setStep={setStep} />
          </Item>
          <Item label="Multiple Tokens">
            <MultiToken setTokenData={setToken} setStep={setStep} />
          </Item>
          <Item label="Auction">
            <Auction setTokenData={setToken} setStep={setStep} />
          </Item>
        </Tab>
      </TabBox>
    </Wrapper>
  )
}

export default ThirdStep

const Wrapper = styled.div`
  width: 560px;
  margin: auto;
  padding-top: 20px;
`

const AlbumItemBox = styled.div`
  margin-top: 60px;
`

const TabBox = styled.div`
  margin-top: 60px;
`
