import styled from 'styled-components'
import ReleaseTypeItem from './ReleaseTypeItem'
import React from 'react';
import Modal from 'react-modal';

const Wrapper = styled.div`
  width: 560px;

  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background: ${props => props.theme.colors.white};
  filter: ${props => props.theme.shadows.releaseTypeBoxShadow};
`

const ReleaseTypeItemBox = styled.div``

const typeItems = [
  {
    title: 'Single',
    content:
      'The release has a total of 1 (one) or more tracks, and entire release is less than 30 minutes.',
  },
  {
    title: 'EP',
    content:
      'The release has a total of four to six (4-6) tracks, and/or entire release is more than 30 minutes.',
  },
  {
    title: 'Album',
    content:
      'The release has a total of more than 6 tracks, and/or entire release is more than 60 minutes.',
  },
]

const FirstStep = props => {


  const handleClick = (item) => {
    //console.log(item)

    //props.setStepData(item)
    //props.setStep(1)
  }

  return (
    <Wrapper>
      {typeItems.map((item, i) => {
        return (
          <ReleaseTypeItemBox key={i} onClick={() => handleClick(item)}>
            <ReleaseTypeItem data={item} />
          </ReleaseTypeItemBox>
        )
      })}
    </Wrapper>
  )
}

export default FirstStep
