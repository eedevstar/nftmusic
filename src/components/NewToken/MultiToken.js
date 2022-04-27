import { useState, useEffect } from 'react'
import styled from 'styled-components'
import dynamic from 'next/dynamic'
const DatePicker = dynamic(() => import('@components/common/DatePicker'));
import { Input } from '@components/common/Input/index'
import Icon from '@components/common/Icon'
import { Caption2 } from '@components/common/Text'
import { Button } from '@components/common/Button';
import { useForm, Controller, useWatch } from 'react-hook-form'

const MultiToken = props => {
  const { setStep, setTokenData } = props
  const [values, setValues] = useState({
    type: 'multi',
    eth: '0.0',
    amount: '',
  })

  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())

  const { control, handleSubmit, watch, register, setValue, setError, setFocus } = useForm()

  const handleChange = event => {
    setValues({ ...values, [event.target.name]: event.target.value })
  }

  useEffect(() => {
    props.setTokenData({
      ...values,
      startDate: startDate,
      endDate: endDate
    })
  }, [values, startDate, endDate])

  const onSubmit = data => {

    setTokenData({
      type: 'multi',
      ...data
    })
    setStep(3)
  }

  return (
    <Wrapper>
      <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <EthBox>
          <Controller
            name="eth"
            control={control}
            defaultValue=""
            rules={{
              required: 'You must type Token Price',
            }}
            render={({ field: { value, onChange }, fieldState: { error } }) => (
              <TokenPrice>
                <LabelBox>
                  <Caption2>Token Price</Caption2>
                  <Caption2 varient="gray28">($0.00)</Caption2>
                </LabelBox>
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
              </TokenPrice>
            )}
          />

          <Controller
            name="amount"
            control={control}
            defaultValue=""
            rules={{
              required: 'You must type Token Amount',
            }}
            render={({ field: { value, onChange }, fieldState: { error } }) => (
              <TokenAmount>
                <LabelBox>
                  <Caption2>Token Amount</Caption2>
                </LabelBox>
                <Input
                  type="number"
                  varient="grey"
                  name="amount"
                  value={value}
                  onChange={onChange}
                  msgType={error && 'Info'}
                  msgText={error?.message}
                  placeholder="0"
                />
              </TokenAmount>
            )}
          />
        </EthBox>
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

export default MultiToken

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const EthBox = styled.div`
  display: flex;
  margin-top: 50px;
  flex: 1;
`

const TokenPrice = styled.div`
  flex: 50%;
  display: flex;
  flex-direction: column;
`

const LabelBox = styled.div`
  display: flex;
  margin-bottom: 0px;
  ${Caption2} {
    margin-right: 10px;
  }
`

const TokenAmount = styled.div`
  flex: 50%;
  display: flex;
  flex-direction: column;
  margin-left: 30px;

  ${LabelBox} {
    margin-bottom: 18px;
  }
`

const DatePickerBox = styled.div`
  z-index: 10;
`

const EthIconBox = styled.div`
  margin-top: 20px;
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
