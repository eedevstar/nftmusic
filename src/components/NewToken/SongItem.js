import { useState, useEffect } from 'react'
import Image from 'next/image'
import styled, { useTheme, css } from 'styled-components'
import Icon from '@components/common/Icon'
import {
  Caption1,
  Caption2,
} from '@components/common/Text'
import SongDetail from './SongDetail'

const SongItem = props => {
  const theme = useTheme()

  const { image, file, name, ft, genre, time } = props.data

  const [open, setOpen] = useState(false)
  const [status, setStatus] = useState('')

  const secondsToHms = (seconds) => {
    const d = Number(seconds)
  
    var time = new Date(d * 1000).toISOString();
    
    // hh:mm:ss, mm:ss
    return time.substring(d > 3600 ? 11 : 14, 19); 
  }

  let songImage
  if (image) {
    songImage = <Image src={image} alt={name} width="64" height="64" />
  } else {
    songImage = (
      <Icon type="AlbumDefault" viewBox="0 0 128 128" width="64" height="64" />
    )
  }

  const handleClickOpen = event => {
    event.preventDefault()
    setOpen(!open)
  }

  const handleClickRemove = event => {
    event.preventDefault()
    event.stopPropagation()

    //setStatus('removed')
    props.remove(file.path)
  }

  const handleUpdate = (attr) => {
    props.update(file.path, attr)
  }

  return (
    <>
      {status != 'removed' && (
        <Wrapper>
          <SongBriefBox onClick={handleClickOpen}>
            {songImage}

            <SongContents>
              {name && <Caption1>{name}</Caption1>}

              <Caption2>
                {ft && 'ft. ' + ft}
                {genre && ' genre. ' + genre}
              </Caption2>
            </SongContents>

            <ControllerBox>
              <Caption2 varient="gray64">{time && secondsToHms(time)}</Caption2>
              {open ? (
                <Icon
                  type="UpArrow"
                  viewBox="0 0 14 9"
                  width="14"
                  height="9"
                  onClick={handleClickOpen}
                />
              ) : (
                <Icon
                  type="BottomArrow"
                  viewBox="0 0 14 9"
                  width="14"
                  height="9"
                  onClick={handleClickOpen}
                />
              )}

              <Icon
                type="Remove"
                viewBox="0 0 20 14"
                width="20"
                height="14"
                onClick={handleClickRemove}
              />
            </ControllerBox>
          </SongBriefBox>

          <SongDetailBox open={open}>
            <SongDetail name={name} ft={ft} genre={genre} update={handleUpdate} />
          </SongDetailBox>
        </Wrapper>
      )}
    </>
  )
}

export default SongItem

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
`

const SongBriefBox = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  cursor: pointer;
`

const SongDetailBox = styled.div`
  padding-left: 95px;
  display: flex;
  flex-direction: column;
  position: relative;
  height: 0;
  transition: all 0.5s ease;
  opacity: 0;

  ${({ open }) =>
    open &&
    css`
      height: 300px;
      opacity: 1;
    `}
`

const SongContents = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  margin-left: 30px;
  justify-content: center;
  align-items: flex-start;

  ${Caption1} {
    margin-bottom: 3px;
  }
  ${Caption2} {
    margin-bottom: 2px;
  }
`

const ControllerBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  & > * {
    margin-left: 15px;
  }
`
