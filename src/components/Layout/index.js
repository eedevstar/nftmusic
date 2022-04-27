import styled from 'styled-components'
import Navigation from './Navigation'
import MetaMaskModal from './MetaMaskModal'

const Layout = ({ sideBar, children, isHome }) => {
  return (
    <Wrapper>
      <Navigation />
      <Content>
        {sideBar ? (
          <>
            {sideBar}
            <ContentWithSide>
              <ContentFixed>{children}</ContentFixed>
            </ContentWithSide>
          </>
        ) : isHome ? (
          <ContentFullHome>{children}</ContentFullHome>
        ) : (
          <ContentFull>{children}</ContentFull>
        )}
      </Content>
      <MetaMaskModal />
    </Wrapper>
  )
}

export default Layout

const Wrapper = styled.div`
  display: flex;
`

const Content = styled.div`
  margin-left: 96px;
  display: flex;
  width: 100%;
  min-height: 100vh;
  padding: 0px;
  position: relative;
  box-sizing: border-box;
`

const ContentWithSide = styled.div`
  width: 100%;
  background: ${props => props.theme.gradients.content};
  position: relative;
`

const ContentFixed = styled.div`
  max-width: 960px;
  margin: auto;
  padding: 65px 55px;
  box-sizing: border-box;

  @media (max-width: ${props => props.theme.breakpoints.desktop}px) {
    padding: 65px 35px;
  }
  @media (max-width: ${props => props.theme.breakpoints.tablet}px) {
    padding: 65px 25px;
  }
  @media (max-width: ${props => props.theme.breakpoints.mobile}px) {
    padding: 65px 15px;
  }
`

const ContentFull = styled.div`
  width: 100%;
`

const ContentFullHome = styled.div`
  max-width: calc(100vw - 90px);
  width: 100%;
  padding: 65px 70px;
  box-sizing: border-box;
  background: ${props => props.theme.gradients.content};

  @media (max-width: ${props => props.theme.breakpoints.tablet}px) {
    width: 100vw;
    padding: 20px 20px;
  }
  @media (max-width: ${props => props.theme.breakpoints.mobile}px) {
    width: 100vw;
    padding: 10px 10px;
  }
`
