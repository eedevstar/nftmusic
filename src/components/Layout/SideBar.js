import styled from 'styled-components'

import TitleH1 from '@components/common/Text/TitleH1'

const sizes = {
  medium: 380,
  large: 600,
}

const Wrapper = styled.div`
  width: 26%;
  background: ${props => props.theme.gradients.sideBar};
  padding: 70px 0px 0px 50px;
  box-sizing: border-box;

  @media (max-width: ${props => props.theme.breakpoints.desktop}px) {
    padding: 70px 0px 0px 20px;
  }

  @media (max-width: ${props => props.theme.breakpoints.tablet}px) {
    padding: 30px 0px 0px 10px;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}px) {
    padding: 30px 0px 0px 10px;
  }
`

const SideBar = ({ title, size, children }) => {
  const width = sizes[size]

  return (
    <Wrapper>
      <TitleH1>{title}</TitleH1>
      {children}
    </Wrapper>
  )
}

SideBar.defaultProps = {
  size: 'medium',
}

export default SideBar
