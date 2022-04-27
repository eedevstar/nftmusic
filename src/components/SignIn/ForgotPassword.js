import { useState, useEffect } from 'react'
import styled from 'styled-components'

import Layout from './Layout'
import { Input } from '@components/common/Input/index'
import { Button } from '@components/common/Button'
import { Caption2, TitleH1 } from '@components/common/Text'
import userApi from '@lib/userApi'
import ForgotPasswordConfirm from './ForgotPasswordConfirm'

const ForgotPasswordForm = () => {
  const [values, setValues] = useState({
    email: '',
  })
  const [isSubmitStarted, setSubmitStarted] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [errors, setErrors] = useState({ type: '', message: '' })

  const handleChange = event => {
    setValues({ ...values, [event.target.name]: event.target.value })
  }

  const handleSubmit = async e => {
    e.preventDefault()

    setSubmitStarted(true)

    const result = await userApi.sendPasswordReset({ email: values.email })

    if (result.status == 'success') {
      setShowConfirm(true)
    } else {
      setErrors({ type: 'Error', message: result.message })
    }

    setSubmitStarted(false)
  }

  return (
    <>
      {showConfirm && <ForgotPasswordConfirm />}

      {!showConfirm && (
        <>
          <TitleH1 fullWidth>Reset password</TitleH1>
          <form autoComplete="off" onSubmit={handleSubmit}>
            <ParagraphBox>
              <Caption2 varient="gray64" center>
                We will send instructions to reset your password <br />
                to your email
              </Caption2>
            </ParagraphBox>

            <UserEmailBox>
              <Input
                type="text"
                name="email"
                value={values.email}
                onChange={handleChange}
                msgType={errors.type}
                msgText={errors.message}
                label="Email"
              />
            </UserEmailBox>

            <ButtonBox>
              <Button varient="primary" type="submit" fullWidth>
                Send Email
              </Button>
            </ButtonBox>
          </form>
        </>
      )}
    </>
  )
}

const ForgotPassword = () => {
  return (
    <Layout bottom="Reset">
      <ForgotPasswordForm />
    </Layout>
  )
}

export default ForgotPassword

const UserEmailBox = styled.div`
  width: 100%;
`
const ParagraphBox = styled.div`
  margin: 55px auto 40px auto;
`
const ButtonBox = styled.div`
  margin: 56px auto 93px auto;
`
