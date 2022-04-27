import { useState, useEffect } from 'react'
import styled, { useTheme } from 'styled-components'
import { useForm, Controller } from 'react-hook-form'
import { useRouter } from 'next/router'

import Layout from './Layout'
import { Input } from '@components/common/Input/index'
import { Button } from '@components/common/Button'
import { TitleH1, StyledLink } from '@components/common/Text'
import Tooltip from '@components/common/Tooltip'
import Icon from '@components/common/Icon'
import userApi from '@lib/userApi'

const ResetPasswordForm = () => {
  const theme = useTheme()
  const router = useRouter()
  const [resetStarted, setResetStarted] = useState(false)

  const { control, handleSubmit, setError } = useForm()

  const onSubmit = async data => {
    data.resetToken = router.query.resetToken
    console.log(data)
    setResetStarted(true)

    const result = await userApi.resetPassword(data)

    console.log(result)

    if (result.status == 'success') {
      setError('password', {
        type: 'Success',
        message: 'Reset password successfully',
      })
    } else {
      setError('password', {
        type: 'Error',
        message: result.message,
      })
    }

    setResetStarted(false)
  }

  return (
    <>
      <TitleH1 fullWidth>Reset password</TitleH1>
      <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <PasswordBox>
          <Controller
            name="password"
            control={control}
            rules={{
              required: 'You must specify a password',
              minLength: {
                value: 8,
                message: 'Password must have at least 8 characters',
              },
              pattern: {
                value: /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/,
                message:
                  'Password must include at least one number and one uppercase and one lowercase',
              },
            }}
            render={({ field: { onChange }, fieldState: { error } }) => (
              <Input
                type="password"
                msgType={
                  error?.type == 'Error' || error?.type == 'Success'
                    ? error.type
                    : error?.message
                    ? 'Info'
                    : ''
                }
                msgText={error?.message}
                onChange={onChange}
                label="New Password"
              />
            )}
          />
        </PasswordBox>

        <TooltipBox>
          <StyledLink>Password requirements</StyledLink>
          <Tooltip left="58" bottom="22">
            <Li>Minimum 8 characters</Li>
            <Li>One number</Li>
            <Li>One uppercase character</Li>
            <Li>One lowercase character</Li>
          </Tooltip>
        </TooltipBox>

        <ButtonBox>
          <Button
            varient="primary"
            type="submit"
            fullWidth
            disabled={resetStarted}
          >
            Set New Password
          </Button>
        </ButtonBox>
      </form>
    </>
  )
}

const ResetPassword = () => {
  return (
    <Layout bottom="Reset">
      <ResetPasswordForm />
    </Layout>
  )
}

export default ResetPassword

const PasswordBox = styled.div`
  width: 100%;
  margin-top: 130px;
  padding: 0px 0px 0px 0px;
`
const TooltipBox = styled.div`
  position: relative;
  margin-top: 5px;
  & ${StyledLink}:hover {
    cursor: help;
    text-decoration: none;
  }
  & ${StyledLink}:hover + ${Tooltip} {
    visibility: visible;
    opacity: 1;
  }
`
const Li = styled.li`
  list-style-type: none;
  &:before {
    display: inline-block;
    content: '';
    border-radius: 50%;
    height: 4px;
    width: 4px;
    float: left;
    margin-top: 10px;
    margin-right: 10px;
    background-color: ${props => props.theme.colors.white};
  },
`
const ButtonBox = styled.div`
  margin: 33px auto 110px auto;
`
