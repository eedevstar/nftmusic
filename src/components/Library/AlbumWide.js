import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import Icon from '@components/common/Icon'
import { Input } from '@components/common/Input/index'
import {
  Caption1,
  Caption2,
  StyledLink,
} from '@components/common/Text'
import { MinuteSeconds } from '@utils'
import { useDropzone } from 'react-dropzone'

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  position: relative;
`

const AlbumContents = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  margin-left: 30px;
  justify-content: center;
  align-items: flex-start;

  ${Caption1} {
    margin-bottom: 7px;
  }
  ${Caption2} {
    margin-bottom: 6px;
  }
`

const NameBox = styled.div`
  display: flex;
`

const EditActions = styled.div`
  display: flex;
  direction: row;
  margin-top: 20px;
  justify-content: space-evenly;
`

const EditBox = styled.div`
  margin-left: 15px;
  margin-top: 2px;
  display: flex;
  direction: row;
  gap: 10px;
  cursor: pointer;
  justify-content: center;
  align-items: center;
`

const AlbumWide = props => {
  const { image, trackName, name, artist, tracks, time } = props.data
  const [prevValues, setPrevValues] = useState('')

  let albumImage
  if (image) {
    albumImage = <Image src={image} alt="" width="128" height="128" />
  } else {
    albumImage = (
      <Icon
        type="AlbumDefault"
        viewBox="0 0 128 128"
        width="128"
        height="128"
      />
    )
  }

  const [values, setValues] = useState({
    name: name,
    trackName: trackName,
    changeName: false,
  })

  const inputRef = useRef(null)

  useEffect(() => {
    if (values.changeName)
      inputRef.current?.focus()
    else {
      props.updateAlbumData && props.updateAlbumData(values)
    }
  }, [values.changeName])

  const onChange = event => {
    setValues({ ...values, [event.target.name]: event.target.value })
  }

  const onKeyUp = event => {
    if (event.charCode === 13) {
      setValues({
        ...values,
        changeName: false,
      })
    }
  }

  const handleClickEdit = event => {
    setValues({
      ...values,
      changeName: true,
    })
    setPrevValues({...values})
  }

  const onCancelEvent = event => {
    setValues({
      ...prevValues,
      changeName: false,
    })
  }

  const onBlurEvent = event => {
    setValues({
      ...values,
      changeName: false,
    })
  }

  const {
    acceptedFiles,
    fileRejections,
    getRootProps,
    getInputProps,
    isFocused,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    accept: 'image/jpeg,image/png',
  })

  useEffect(() => {
    const acceptedImages = acceptedFiles.filter(function (file) {
      return file.type.startsWith('image')
    })

    if (acceptedImages.length > 0) {
      const albumImg = {
        file: acceptedImages[0],
        image: URL.createObjectURL(acceptedImages[0]),
      }

      props.updateAlbumData && props.updateAlbumData(albumImg)
    }

  }, [acceptedFiles])

  return (
    <>
      <Wrapper>
        {albumImage}
        <AlbumContents>
          <NameBox>
            {values.changeName ? (
              <Input
                ref={inputRef}
                type="text"
                msgType=""
                msgText=""
                name="trackName"
                value={values.trackName}
                onChange={onChange}

              />
            ) : (
              <>
                {values.trackName && <Caption1>{values.trackName}</Caption1>}
              </>
            )}
          </NameBox>
          <NameBox>
            {values.changeName ? (
              <Input
                type="text"
                msgType=""
                msgText=""
                name="name"
                value={values.name}
                onChange={onChange}

              />
            ) : (
              <>
                {values.name && <Caption2>{values.name}</Caption2>}
              </>
            )}
          </NameBox>

          { !values.changeName && <Caption2>by {artist}, {MinuteSeconds(time)}</Caption2>}
        </AlbumContents>
      </Wrapper>
      { (props.editAble && !values.changeName) && (
        <EditActions>
          <EditBox {...getRootProps({ isFocused, isDragAccept, isDragReject })}>
            <Icon type="Cover" />
            <Caption1 varient="gray64" >
              Change cover image
            </Caption1>
          </EditBox>
          <EditBox onClick={handleClickEdit}>
            <Icon type="Edit" />
            <Caption1 varient="gray64" >
              Edit song info
            </Caption1>
          </EditBox>
        </EditActions>
      )}
      {
        (props.editAble && values.changeName) && (
          <EditActions>
            <EditBox onClick={onCancelEvent}>
              <Icon type="CrossGrey" />
              <Caption1 varient="gray64" >
                Cancel
              </Caption1>
            </EditBox>
            <EditBox onClick={onBlurEvent}>
              <Icon type="Ok" />
              <Caption1 varient="green70" >
                Confirm
              </Caption1>
            </EditBox>
          </EditActions>
        )
      }
    </>
  )
}

export default AlbumWide
