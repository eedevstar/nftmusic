import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useDebounce } from '@hooks/useDebounce'
import styled from 'styled-components'
import { MultiRangeSlider } from '@components/common/Slider/index'
import { Caption1, Caption2, StyledLink } from '@components/common/Text'
import { Input } from '@components/common/Input/index'

const FilterPrice = props => {
  const router = useRouter()

  const minKey = props.category + '-min'
  const maxKey = props.category + '-max'
  const sliderMinValue = 0
  const sliderMaxValue = 99999
  let minValue = router.query[minKey] ? router.query[minKey] : sliderMinValue
  let maxValue = router.query[maxKey] ? router.query[maxKey] : sliderMaxValue

  const [values, setValues] = useState({
    fromPrice: minValue,
    toPrice: maxValue,
    fromPriceError: '',
    toPriceError: '',
  })

  const debouncedFromPrice = useDebounce(values.fromPrice)
  const debouncedToPrice = useDebounce(values.toPrice)

  const handleChange = event => {
    setValues({ ...values, [event.target.name]: event.target.value })
  }

  const filterPrice = () => {
    router.push({
      pathname: router.pathname,
      query: {
        ...router.query,
        [minKey]: debouncedFromPrice,
        [maxKey]: debouncedToPrice,
      }
    }, null, { scroll: false })
  }
  
  useEffect(() => {
    if(debouncedFromPrice != minValue && debouncedToPrice == maxValue) {
      filterPrice()
    }
  }, [debouncedFromPrice])

  useEffect(() => {
    if(debouncedFromPrice == minValue && debouncedToPrice != maxValue) {
      filterPrice()
    }
  }, [debouncedToPrice])
  
  useEffect(() => {
    setValues({ 
        ...values, 
        fromPrice: parseFloat(minValue), 
        toPrice: parseFloat(maxValue) 
    })
  }, [minValue, maxValue])
  

  const onKeyUp = event => {
    if (event.charCode === 13) {
      if (
        event.target.name == 'fromPrice' &&
        event.target.value > values.toPrice
      )
        setValues({ ...values, fromPriceError: 'Invalid Number' })
      else setValues({ ...values, fromPriceError: '' })

      if (
        event.target.name == 'toPrice' &&
        event.target.value < values.fromPrice
      )
        setValues({ ...values, toPriceError: 'Invalid Number' })
      else setValues({ ...values, toPriceError: '' })
    }
  }

  return (
    <Wrapper>
      <PriceRangeBox>
        <PriceBox>
          <Caption2>From</Caption2>
          <InputBox>
            <Input
              type="number"
              name="fromPrice"
              varient="grey"
              min={minValue}
              max={maxValue}
              msgType={values.fromPriceError ? 'Error' : ''}
              msgText={values.fromPriceError}
              value={values.fromPrice}
              onChange={handleChange}
              onKeyPress={onKeyUp}
            />
          </InputBox>
        </PriceBox>
        <PriceBox>
          <Caption2>To</Caption2>
          <InputBox>
            <Input
              type="number"
              name="toPrice"
              varient="grey"
              min={minValue}
              max={maxValue}
              msgType={values.toPriceError ? 'Error' : ''}
              msgText={values.toPriceError}
              value={values.toPrice}
              onChange={handleChange}
              onKeyPress={onKeyUp}
            />
          </InputBox>
        </PriceBox>
      </PriceRangeBox>

      <MultiRangeSliderBox>
        <MultiRangeSlider
          min={sliderMinValue}
          max={sliderMaxValue}
          from={values.fromPrice}
          to={values.toPrice}
          onChange={({ min, max }) => {
            setValues({ ...values, fromPrice: min, toPrice: max })
          }}
        />
      </MultiRangeSliderBox>
    </Wrapper>
  )
}

export default FilterPrice

const Wrapper = styled.div``

const MultiRangeSliderBox = styled.div`
  margin-top: 15px;
  padding-bottom: 20px;
  width: 90%;
`

const PriceRangeBox = styled.div`
  margin-top: 12px;
  display: flex;
  justify-content: space-between;
  padding-right: 40px;
`

const PriceBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 140px;
`

const InputBox = styled.div``
