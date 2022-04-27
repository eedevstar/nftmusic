import { useState, useEffect } from 'react'
import { signIn } from 'next-auth/react'
import styled, { useTheme } from 'styled-components'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Layout from './Layout'
import { Input } from '@components/common/Input/index'
import { Button } from '@components/common/Button'
import Icon from '@components/common/Icon'
import Tooltip from '@components/common/Tooltip'
import { Caption2, TitleH1, StyledLink } from '@components/common/Text'
import SocialIcons from './SocialIcons'

const SignInForm = () => {
  const theme = useTheme()
  const router = useRouter()

  const [values, setValues] = useState({
    email: '',
    password: '',
  })

  const [error, setError] = useState({
    email: { type: '', text: '' },
    password: { type: '', text: '' },
  })

  const [isLoginStarted, setIsLoginStarted] = useState(false)

  const handleChange = event => {
    setValues({ ...values, [event.target.name]: event.target.value })
  }

  const handleSubmit = async e => {
    e.preventDefault()

    setError({
      email: { type: '', text: '' },
      password: { type: '', text: '' },
    })

    setIsLoginStarted(true)

    const data = await signIn('credentials', {
      email: values.email,
      password: values.password,
      redirect: false,
    })

    if (!data.error) {
      router.push(router.query.next || '/user')
    } else {
      const error = data.error

      if (error.indexOf('email') !== -1) {
        setError(prevState => {
          prevState.email.type = 'Error'
          prevState.email.text = error
          return {
            ...prevState,
          }
        })
      } else if (error.indexOf('password') !== -1) {
        setError(prevState => {
          prevState.password.type = 'Error'
          prevState.password.text = error
          return {
            ...prevState,
          }
        })
      } else {
        setError(prevState => {
          prevState.email.type = 'Error'
          prevState.email.text = error
          return {
            ...prevState,
          }
        })
      }

      setIsLoginStarted(false)
    }
  }

  return (
    <>
      <TitleH1 fullWidth>Sign In</TitleH1>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <EmailBox>
          <Input
            type="text"
            name="email"
            msgType={error.email.type}
            msgText={error.email.text}
            value={values.email}
            label="Login"
            onChange={handleChange}
          />
        </EmailBox>

        <PasswordBox>
          <Input
            type="password"
            name="password"
            msgType={error.password.type}
            msgText={error.password.text}
            value={values.password}
            label="Password"
            onChange={handleChange}
          />
        </PasswordBox>

        <ButtonBox>
          <Button
            type="submit"
            varient="primary"
            disabled={isLoginStarted}
            fullWidth
          >
            Log In
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

const SignIn = () => {
  return (
    <Layout bottom="SignIn">
      <SignInForm />
    </Layout>
  )
}

export default SignIn

const EmailBox = styled.div`
  width: 100%;
  margin: 12px 0px 37px 0px;
`
const PasswordBox = styled.div`
  width: 100%;
  margin: 0px 0px 0px 0px;
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
