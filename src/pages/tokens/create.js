import { useState, useEffect } from 'react'
import styled from 'styled-components'

import Layout from '@components/Layout'
import SideBar from '@components/Layout/SideBar'
import {
  FirstStep,
  SecondStep,
  ThirdStep,
  FourthStep,
} from '@components/NewToken'
import { VerticalTimeLine } from '@components/common/TimeLine'
import { TextButton } from '@components/common/Button'
import { useMetamask } from '@contexts/metamaskContext';


const timeLineLabels = ['Wallet connected', 'Contents', 'Tokens & Sale', 'About']

const CreatePage = () => {
  const {metamaskIsOpen, openMetamask} = useMetamask()
  const [step, setStep] = useState(1) // step 0 : metamask connection
  const [type, setType] = useState(null)
  const [contents, setContents] = useState(null)
  const [tokens, setTokens] = useState(null)
  const [about, setAbout] = useState(null)

  useEffect(() => {
    openMetamask(true)
  }, [])

  const handleBack = event => {
    setStep(step - 1)
  }

  const handleCancel = event => {
    setStep(0)
  }

  const handleStep = step => {
    setStep(step)

    if(step === 4) { // Final Step : Submit
      console.log(type);
      console.log(contents);
      console.log(tokens);
      console.log(about);
    }
  }

  const updateAlbumData = (value) => {
    setContents(
      {
        ...contents,
        album: {
          ...contents.album,
          ...value,
        }
      }
    )
  }

  return (
    <Layout
      title="New Token"
      sideBar={
        <SideBar title="New Token">
          <VerticalTimeLineBox>
            <VerticalTimeLine labels={timeLineLabels} index={step} />
          </VerticalTimeLineBox>

          <Controllers>
            <BackBox>
              {step > 0 && (
                <TextButton varient="back" onClick={handleBack}>
                  BACK
                </TextButton>
              )}
            </BackBox>
            <CancelBox>
              {step > 0 && (
                <TextButton varient="cancel" onClick={handleCancel}>
                  CANCEL
                </TextButton>
              )}
            </CancelBox>
          </Controllers>
        </SideBar>
      }
    >
      {step == 0 && <FirstStep setStep={handleStep} setStepData={setType} />}
      {step == 1 && <SecondStep contents={contents} setStep={handleStep} setStepData={setContents} />}
      {step == 2 && <ThirdStep album={contents.album} updateAlbumData={updateAlbumData} setStep={handleStep} setStepData={setTokens} />}
      {step == 3 && <FourthStep album={contents.album} updateAlbumData={updateAlbumData} setStep={handleStep} setStepData={setAbout} />}
    </Layout>
  )
}

export default CreatePage

const NewTokenSideBar = styled.div``

const VerticalTimeLineBox = styled.div`
  margin: 140px 0px 0px 0px;
`

const Controllers = styled.div`
  box-sizing: border-box;
  margin-top: 90px;
`

const BackBox = styled.div`
  width: 100px;
`

const CancelBox = styled.div`
  margin-top: 30px;
  width: 100px;
`
