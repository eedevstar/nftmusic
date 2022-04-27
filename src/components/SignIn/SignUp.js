import { useState, useEffect } from 'react'
import styled, { useTheme } from 'styled-components'
import { useForm, Controller } from 'react-hook-form'
import { useRouter } from 'next/router'
import Image from 'next/image'

import Layout from './Layout'
import { Input } from '@components/common/Input/index'
import { Button } from '@components/common/Button'
import Icon from '@components/common/Icon'
import Tooltip from '@components/common/Tooltip'
import { Caption2, TitleH1, StyledLink } from '@components/common/Text'
import userApi from '@lib/userApi'
import SocialIcons from './SocialIcons'

const SignUpForm = () => {
  const theme = useTheme()

  const router = useRouter()

  const [signUpStarted, setSignUpStarted] = useState(false)

  const { control, handleSubmit, setError, setFocus } = useForm()

  const onSubmit = async data => {
    setSignUpStarted(true)

    const result = await userApi.signUp(data)

    if (result.error) {
      setError('email', {
        type: 'Error',
        message: result.errorMessage,
      })
    } else {
      router.push(router.query.next || '/user')
    }

    setSignUpStarted(false)
  }

  return (
    <>
      <TitleH1 fullWidth>Sign Up</TitleH1>
      <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <EmailBox>
          <Controller
            name="email"
            control={control}
            rules={{
              required: 'You must specify a email',
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: 'Entered value does not match email format',
              },
            }}
            render={({ field: { onChange }, fieldState: { error } }) => (
              <Input
                onChange={onChange}
                label="Email"
                msgType={
                  error?.message
                    ? error?.type == 'Error'
                      ? 'Error'
                      : 'Info'
                    : ''
                }
                msgText={error?.message}
              />
            )}
          />
        </EmailBox>

        <EmailBox>
          <Controller
            name="name"
            control={control}
            rules={{
              required: 'You must specify a name',
            }}
            render={({ field: { onChange }, fieldState: { error } }) => (
              <Input
                onChange={onChange}
                label="Name"
                msgType={error && 'Info'}
                msgText={error?.message}
              />
            )}
          />
        </EmailBox>

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
                msgType={error && 'Info'}
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
            type="submit"
            varient="primary"
            fullWidth
            disabled={signUpStarted}
          >
            Sign Up
          </Button>
        </ButtonBox>
      </form>

      <Caption2 varient="gray64" center>
        Or continue via third-party services
      </Caption2>

      <SocialIconsBox>
        <SocialIcons />
      </SocialIconsBox>
    </>
  )
}

const SignUp = () => {
  return (
    <Layout bottom="SignUp">
      <SignUpForm />
    </Layout>
  )
}

export default SignUp

const EmailBox = styled.div`
  width: 100%;
  margin: 12px 0px 37px 0px;
`
const PasswordBox = styled.div`
  width: 100%;
  margin: 0px 0px 0px 0px;
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
  margin: 35px auto 40px auto;
`
const SocialIconsBox = styled.div`
  margin: 20px auto 0px auto;
`
