import React, { useCallback, useEffect, useState, useRef } from 'react'
import styled from 'styled-components'

const Index = ({ value, max }) => {
  const [percent, setPercent] = useState(0)

  const getPercent = useCallback(
    value => Math.round((value / max) * 100),
    [value, max]
  )

  useEffect(() => {
    setPercent(getPercent(value))
  }, [value, getPercent])

  return (
    <Wrapper>
      <Background />
      <Progress percent={percent} />
    </Wrapper>
  )
}

export default Index

const Wrapper = styled.div`
  height: 6px;
  width: 100%;
  position: relative;
`

const BaseBox = styled.div`
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 5px;
  transition: width 0.5s ease-in-out;
`

const Background = styled(BaseBox)`
  background: ${props => props.theme.colors.gray6};
  width: 100%;
`

const Progress = styled(BaseBox)`
  background: ${props => props.theme.gradients.progressbar};
  width: ${({ percent }) => percent}%;
`
