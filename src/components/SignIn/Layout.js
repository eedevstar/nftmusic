import styled from 'styled-components'
import Container from '@components/common/Container'
import BottomSignIn from './BottomSignIn'
import BottomReset from './BottomReset'
import BottomSignUp from './BottomSignUp'

const Layout = ({ back, title, children, bottom }) => {
  return (
    <ContentWrapper>
      <FormWrapper>{children}</FormWrapper>
      <Border />
      {(bottom == 'SignIn' || bottom == 'Reset' || bottom == 'SignUp') && (
        <BottomWrapper>
          {bottom == 'SignIn' && <BottomSignIn />}
          {bottom == 'Reset' && <BottomReset />}
          {bottom == 'SignUp' && <BottomSignUp />}
        </BottomWrapper>
      )}
    </ContentWrapper>
  )
}

export default Layout

const ContentWrapper = styled(Container)`
  width: ${props => props.theme.contentWrapper.width};
  box-sizing: border-box;

  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  box-shadow: ${props => props.theme.contentWrapper.boxShadow};
  border-radius: 2px;
  background: ${props => props.theme.contentWrapper.background};
  filter: ${props => props.theme.contentWrapper.dropShadow};
`

const FormWrapper = styled(Container)`
  position: relative;
  width: 100%;
  box-sizing: border-box;
  padding: 58px 40px 40px 40px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Border = styled.div`
  border-bottom: ${props => props.theme.contentWrapper.signInFrom.bottomBorder};
  height: 1px;
`

const BottomWrapper = styled.div`
  box-sizing: border-box;
  padding: 30px 0px;
  margin: auto;
  display: flex;
  justify-content: content;
`
