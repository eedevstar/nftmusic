import React, { useCallback, useEffect, useState, useRef } from 'react'
import styled from 'styled-components'

const MultiRange = ({ min, max, from, to, onChange }) => {

  const minValRef = useRef(null)
  const maxValRef = useRef(null)
  const range = useRef(null)

  const getPercent = useCallback(
    value => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  )

  const [minVal, setMinVal] = useState(from)

  useEffect(() => {
     if(from != minVal )
       setMinVal(from)
  }, [from])

  const [maxVal, setMaxVal] = useState(to)

  useEffect(() => {
      if(to != maxVal )
         setMaxVal(to)
  }, [to])

  useEffect(() => {
    if (maxValRef.current) {
      let minPercent = getPercent(minVal)
      const maxPercent = getPercent(+maxValRef.current.value)

      if (range.current) {
        if(minPercent>100)
          minPercent = 100;
        range.current.style.left = `${minPercent}%`
        range.current.style.width = `${maxPercent - minPercent}%`
      }
    }
  }, [minVal, getPercent])

  useEffect(() => {
    if (minValRef.current) {
      const minPercent = getPercent(+minValRef.current.value)
      const maxPercent = getPercent(maxVal)

      if (range.current) {
        range.current.style.width = `${maxPercent - minPercent}%`
      }
    }
  }, [maxVal, getPercent])

  useEffect(() => {
    onChange({ min: minVal, max: maxVal })
  }, [minVal, maxVal])

  const changeMinValue = event => {
    const value = Math.min(+event.target.value, maxVal - 1)
    setMinVal(value)
    event.target.value = value.toString()
  }

  const changeMaxValue = event => {
    const value = Math.max(+event.target.value, minVal + 1)
    setMaxVal(value)
    event.target.value = value.toString()
  }

  return (
    <Wrapper>
      <InputMin
        type="range"
        min={min}
        max={max}
        value={minVal}
        ref={minValRef}
        onChange={changeMinValue}
        overFlow={minVal > max - 100}
      />
      <InputMax
        type="range"
        min={min}
        max={max}
        value={maxVal}
        ref={maxValRef}
        onChange={changeMaxValue}
      />

      <Slider>
        <SliderTrack />
        <SliderRange ref={range} />
      </Slider>
    </Wrapper>
  )
}

export default MultiRange

const Wrapper = styled.div`
  position: relative;
`

const Slider = styled.div`
  position: relative;
  width: 100%;

`

const SliderBar = styled.div`
  border-radius: 5px;
  height: 4px;
  position: absolute;
`

const SliderTrack = styled(SliderBar)`
  background: ${(props) => props.varient ?
    props.theme.slider[props.varient].trackColor :
    props.theme.slider.default.trackColor};

  width: 100%;
  z-index: 1;
`

const SliderRange = styled(SliderBar)`
  background: ${(props) => props.varient ?
    props.theme.slider[props.varient].thumbColor :
    props.theme.slider.default.thumbColor};
  z-index: 2;
`

const Input = styled.input`
  pointer-events: none;
  position: absolute;
  height: 0;
  width: ${(props) => props.width ? props.width+"px" : "250px"};
  outline: none;

  & ::-webkit-slider-thumb {
    -webkit-appearance: none;
    -webkit-tap-highlight-color: transparent;

    background-color: ${(props) => props.varient ?
    props.theme.slider[props.varient].circleColor :
    props.theme.slider.default.circleColor};

    border: none;
    border-radius: 50%;
    box-shadow: ${(props) => props.theme.shadows.shadow10};
    cursor: pointer;
    height: 16px;
    width: 16px;
    margin-top: 4px;
    pointer-events: all;
    position: relative;
  }

  & ::-moz-range-thumb {
    background-color: ${(props) => props.varient ?
    props.theme.slider[props.varient].circleColor :
    props.theme.slider.default.circleColor};

    border: none;
    border-radius: 50%;
    box-shadow: ${(props) => props.theme.shadows.shadow10};
    cursor: pointer;
    height: 16px;
    width: 16px;
    margin-top: 6px;
    pointer-events: all;
    position: relative;
  }
`

const InputMin = styled(Input)`
  z-index: ${props => (props.overFlow ? 5 : 3)};
  width: 100%;
`

const InputMax = styled(Input)`
  z-index: 4;
  width: 100%;
`
