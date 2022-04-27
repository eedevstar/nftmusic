import { useState, useEffect } from 'react'
import styled from 'styled-components'
import Layout from './Layout'
import { Input } from '@components/common/Input/index'
import { Button, TextButton, Back } from '@components/common/Button'
import { Caption2, TitleH1 } from '@components/common/Text'

const BackBox = styled.div`
  position: absolute;
`
const CodeInputBox = styled.div`
  display: flex;
  margin: auto;
  width: 100%;
`
const InputBox = styled.div`
  width: 45px;
  position: relative;
  margin-right: 25px;
`
const LastInputBox = styled.div`
  width: 45px;
  position: relative;
`
const ParagraphBox = styled.div`
  margin: 25px auto 70px auto;
`
const ButtonBox = styled.div`
  margin: 50px auto 125px auto;
`
const BottomBox = styled.div`
  margin-bottom: 70px;
`

const SignConfirmForm = () => {
  return (
    <>
      <BackBox>
        <Back href="/signin" />
      </BackBox>

      <TitleH1 fullWidth>Sign In</TitleH1>
      <form autoComplete="off">
        <ParagraphBox>
          <Caption2 varient="gray64" center>
            We have sent one-time code to [useremail]
          </Caption2>
        </ParagraphBox>

        <CodeInputBox>
          <InputBox>
            <Input type="text" name="code1" placeholder="-" align="center" />
          </InputBox>
          <InputBox>
            <Input type="text" name="code2" placeholder="-" align="center" />
          </InputBox>
          <InputBox>
            <Input type="text" name="code3" placeholder="-" align="center" />
          </InputBox>
          <InputBox>
            <Input type="text" name="code4" placeholder="-" align="center" />
          </InputBox>
          <InputBox>
            <Input type="text" name="code5" placeholder="-" align="center" />
          </InputBox>
          <LastInputBox>
            <Input type="text" name="code6" placeholder="-" align="center" />
          </LastInputBox>
        </CodeInputBox>

        <ButtonBox>
          <Button varient="primary" fullWidth>
            Log In
          </Button>
        </ButtonBox>

        <BottomBox>
          <Caption2 varient="gray64">We can re-send you the code in</Caption2>
        </BottomBox>
      </form>
    </>
  )
}

const SignConfirm = () => {
  return (
    <Layout>
      <SignConfirmForm />
    </Layout>
  )
}

export default SignConfirm
