import { useState, useEffect } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import dynamic from 'next/dynamic'
const DatePicker = dynamic(() => import('@components/common/DatePicker'));
import { Input } from '@components/common/Input/index'
import Icon from '@components/common/Icon'
import { Caption2 } from '@components/common/Text'
import { useForm, Controller, useWatch } from 'react-hook-form'
import { Button } from '@components/common/Button';

const SingleToken = props => {
  const { setStep, setTokenData } = props

  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())

  const { control, handleSubmit, watch, register, setValue, setError, setFocus } = useForm()

  const onSubmit = data => {
    setTokenData({
      type: 'single',
      ...data
    })
    setStep(3)
  }

  return (
    <Wrapper>
      <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="eth"
          control={control}
          defaultValue=""
          rules={{
            required: 'You must type Token Price',
          }}
          render={({ field: { value, onChange }, fieldState: { error } }) => (
            <EthBox>
              <EthLabelBox>
                <Caption2>Token Price</Caption2>
                <Caption2 varient="gray28">($0.00)</Caption2>
              </EthLabelBox>
              <Input
                type="number"
                varient="eth"
                name="eth"
                value={value}
                onChange={onChange}
                msgType={error && 'Info'}
                msgText={error?.message}
                placeholder="0.00"
                endAdornment={
                  <EthIconBox>
                    <Icon type="ETH" />
                  </EthIconBox>
                }
              />
            </EthBox>
          )}
        />

        <DateBox>
          <StartDateBox>
            <Caption2>Sale Start</Caption2>
            <Controller
              name="startDate"
              control={control}
              defaultValue={startDate}
              render={({ field: { value, onChange }, fieldState: { error } }) => (
                <DatePickerBox>
                  <DatePicker
                    selected={value}
                    onChange={onChange}
                    showTimeSelect
                    timeIntervals={15}
                    timeCaption="time"
                    dateFormat="MMM dd, yyyy, h:mm aa"
                    wrapperClassName="date_picker"
                  />
                </DatePickerBox>
              )}
            />

          </StartDateBox>
          <EndDateBox>
            <Caption2>Sale End</Caption2>
            <Controller
              name="endDate"
              control={control}
              defaultValue={endDate}
              render={({ field: { value, onChange }, fieldState: { error } }) => (
                <DatePickerBox>
                  <DatePicker
                    selected={value}
                    onChange={onChange}
                    showTimeSelect
                    timeIntervals={15}
                    timeCaption="time"
                    dateFormat="MMM dd, yyyy, h:mm aa"
                    wrapperClassName="date_picker"
                  />
                </DatePickerBox>
              )}
            />
          </EndDateBox>
        </DateBox>
        <ButtonBox>
          <Button type="submit" varient="primary" fullWidth>
            Continue
          </Button>
        </ButtonBox>
      </form>
    </Wrapper>
  )
}

export default SingleToken

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const EthBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`

const EthLabelBox = styled.div`
  display: flex;
  margin-bottom: 0px;
  ${Caption2} {
    margin-right: 10px;
  }
`

const EthIconBox = styled.div`
  margin-top: 20px;
`

const DatePickerBox = styled.div`
  z-index: 10;
`

const DateBox = styled.div`
  display: flex;
  flex: 1;
  margin: 40px 0px 0px 0px;

  ${Caption2} {
    margin-bottom: 20px;
  }
`

const StartDateBox = styled.div`
  display: flex;
  flex: 50%;
  flex-direction: column;
`

const EndDateBox = styled.div`
  display: flex;
  flex: 50%;
  flex-direction: column;
  margin-left: 30px;
`
const ButtonBox = styled.div`
  margin: 50px auto;
  z-index: 2;
  position: relative;
`
