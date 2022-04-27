import styled, { css, useTheme } from "styled-components";
import { useState } from 'react';
import Modal from 'react-modal';
import { useMetamask } from '@contexts/metamaskContext';
import Icon from '@components/common/Icon'
import { SubTitle, Caption1 } from '@components/common/Text'
import { TextButton } from '@components/common/Button'

const MetaMaskModal = () => {
  const theme = useTheme();
  const {metamaskIsOpen, openMetamask} = useMetamask()

  const closeModal = () => {
    openMetamask(false)
  }

  const customStyles = {
    overlay: {
      background: theme.colors.gray36,
      backdropFilter: 'blur(32px)',
      zIndex: 9999,
    },
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  }

  return (
    <Modal
      isOpen={metamaskIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Metamask"
      ariaHideApp={false}
    >
      <Wrapper>
        <CloseButton onClick={closeModal}>
          <Icon type="CrossGrey" />
        </CloseButton>
        <SubTitle align="center" bold>
          Please, connect wallet to continue
        </SubTitle>

        <IconWrapper>
          <Icon type="Metamask" />
          <Caption1>Meta Mask</Caption1>
        </IconWrapper>
      </Wrapper>
    </Modal>
  )
}

export default MetaMaskModal

const Wrapper = styled.div`
  padding: 172px 28px;
  max-width: 300px;
  ${SubTitle} {
    margin-bottom: 20px;
  }
`

const CloseButton = styled.div`
  position: absolute;
  right: 28px;
  top: 28px;
  cursor: pointer;
  transform: translate(50%, -50%);
`

const IconWrapper = styled.div`
  width: 100%;
  padding-top: 20x;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 19px;
  cursor: pointer;
`
