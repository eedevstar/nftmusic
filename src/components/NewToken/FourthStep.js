import { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { TextLimit, Select } from '@components/common/Input/index'
import { Button } from '@components/common/Button'
import Album from '@components/Library/AlbumWide'
import { useForm, Controller, useWatch } from 'react-hook-form'

const FourthStep = props => {
  const inputRef = useRef(null)

  const [text, setText] = useState('')
  const [textLimit, setTextLimit] = useState(800)

  useEffect(() => {
    inputRef.current?.focus()
  })

  const { control, handleSubmit, watch, register, setValue, setError, setFocus } = useForm()

  const onSubmit = data => {
    props.setStepData(data)
    props.setStep(4)
  }

  const handleChange = text => {
    setText(text)
  }

  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

  return (
    <Wrapper>
      <AlbumItemBox>
        <Album data={props.album} updateAlbumData={props.updateAlbumData} editAble />
      </AlbumItemBox>

      <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <Controller
            name="desc"
            control={control}
            defaultValue=""
            rules={{
              required: 'You must type description',
            }}
            render={({ field: { value, onChange }, fieldState: { error } }) => (
              <TextLimitBox>
                <TextLimit
                  limit={textLimit}
                  rows={9}
                  ref={inputRef}
                  value={value}
                  onChange={onChange}
                  msgType={error && 'Info'}
                  msgText={error?.message}
                />
              </TextLimitBox>
          )}
        />

        <Controller
          name="genre"
          control={control}
          defaultValue=""
          rules={{
            required: 'You must choose genre',
          }}
          render={({ field: { value, onChange }, fieldState: { error } }) => (
            <Select
              options={options}
              placeholder="Select a genre"
              value={value}
              onChange={onChange}
              msgType={error && 'Info'}
              msgText={error?.message}
            />
          )}
        />

        <ButtonBox>
          <Button
            type="submit"
            varient="primary"
            fullWidth
            disabled={text.length > textLimit}
          >
            Mint
          </Button>
        </ButtonBox>
      </form>
    </Wrapper>
  )
}

export default FourthStep

const Wrapper = styled.div`
  width: 560px;
  margin: auto;
  padding-top: 20px;
`

const AlbumItemBox = styled.div`
  margin-top: 60px;
`

const ButtonBox = styled.div`
  margin: 50px auto;
  z-index: 2;
  position: relative;
`

const TextLimitBox = styled.div`
  margin-top: 50px;
  margin-bottom: 20px;
`
