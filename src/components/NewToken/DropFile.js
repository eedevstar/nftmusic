import styled from 'styled-components'
import Icon from '@components/common/Icon'
import { Caption2, StyledLink } from '@components/common/Text'

const DropFile = () => {
  return (
    <>
      <Caption2Box>
        <Caption2>
          Drop your Song Files and Album Cover here or{' '}
          <StyledLink varient="green">Browse</StyledLink>
        </Caption2>
      </Caption2Box>
      <Caption2>
        Support MP3, OGG, WAV, M4A, JPEG, PNG & WebP files
      </Caption2>
    </>
  )
}

export default DropFile

const Wrapper = styled.div`
  border: 2px dashed rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  padding: 40px 90px;
  box-sizing: border-box;
  text-align: center;
`

const IconBox = styled.div`
  width: 64px;
  margin: 0px auto 20px auto;
`

const Caption2Box = styled.div`
  margin-bottom: 15px;
  ${Caption2} {
    font-weight: bold;
  }
`
