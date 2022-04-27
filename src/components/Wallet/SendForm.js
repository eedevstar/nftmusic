import { useState, useEffect } from 'react'
import styled, { useTheme } from 'styled-components'
import Link from 'next/link'
import { useForm, Controller, useWatch } from 'react-hook-form'
import { Input } from '@components/common/Input/index'
import { Button, TextButton } from '@components/common/Button'
import { Caption1, Caption2 } from '@components/common/Text'

const ControlBox = styled.div`
  width: 100%;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;

  &: first-of-type {
    margin-top: 30px;
  }
`

const ButtonBox = styled.div`
  margin-top: 80px;
  justify-content: space-between;
  display: flex;
`

const CancelBox = styled.div`
  margin-left: 20px;
`

const ButtonLabel = styled.div`
  padding: 0px 50px;
`

const RecentBox = styled.div`
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;

  ${Caption2} {
    margin-right: 20px;
  }

  ${Caption1} {
    cursor: pointer;
    margin-right: 20px;
    margin-bottom: 10px;
  }
`

const RecentAdressBox = styled.div``

const SendForm = props => {
  const theme = useTheme()

  const { control, handleSubmit, watch, register, setValue, setError, setFocus } = useForm()

  const feePercent = 0.01
  const watchAmount = watch(["amount"]) * feePercent
  
  const setAddress = address => event => {
    setValue("address", address)
  }

  const onSubmit = data => {
    console.log(data)
  }

  return (
    <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
      <ControlBox>
        <Controller
          name="amount"
          control={control}
          defaultValue=""
          rules={{
            required: 'You must type amount',
          }}
          render={({ field: { value, onChange }, fieldState: { error } }) => (
            <Input
              type="number"
              value={value}
              onChange={onChange}
              label="Amount"
              msgType={error && 'Info'}
              msgText={error?.message}
              varient="bigGrey"
              noFloat
              placeholder="0.0000"
            />
          )}
        />
        <Caption2 varient="gray90">Payment fee: {watchAmount}</Caption2>
      </ControlBox>
      
      <ControlBox>
        <Controller
          name="address"
          control={control}
          defaultValue=""
          rules={{
            required: 'You must type address',
          }}
          render={({ field: { value, onChange }, fieldState: { error } }) => (
            <Input
              value={value}
              onChange={onChange}
              label="Send to"
              msgType={error && 'Info'}
              msgText={error?.message}
              noFloat
              placeholder="Enter ERC200 Address"
            />
          )}
        />
        
        <RecentBox>
          <Caption2 varient="gray90">Recent: </Caption2>
          <Caption1
            varient="BlueRound"
            onClick={setAddress('0xb5906c3920')}
          >
            0xb5906c3920...
          </Caption1>
          
        </RecentBox>
      </ControlBox>

      <ButtonBox>
        <CancelBox>
          <Link href="/wallet" passHref>
            <TextButton varient="service">Cancel</TextButton>
          </Link>
        </CancelBox>

        <Button type="submit" varient="secondary">
          <ButtonLabel>Proceed</ButtonLabel>
        </Button>
      </ButtonBox>
    </form>
  )
}

export default SendForm
