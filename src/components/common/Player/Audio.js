import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { secondsToHms } from '@lib/parseFile'
import Icon from '@components/common/Icon'

const Audio = ({ src, image }) => {
  const audioPlayer = useRef()

  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [durationTime, setDurationTime] = useState(false)
  const [seekValue, setSeekValue] = useState(0)

  const play = () => {
    audioPlayer.current.play()
    setDurationTime(audioPlayer.current.duration.toFixed(0))
  }

  const pause = () => {
    audioPlayer.current.pause()
  }

  const stop = () => {
    audioPlayer.current.pause()
    audioPlayer.current.currentTime = 0
  }

  const setSpeed = speed => {
    audioPlayer.current.playbackRate = speed
  }

  const onPlaying = () => {
    setCurrentTime(audioPlayer.current.currentTime.toFixed(0))
    setSeekValue(
      (audioPlayer.current.currentTime / audioPlayer.current.duration) * 100
    )

    if (audioPlayer.current.ended) {
      setSeekValue(0)
      setCurrentTime(0)
      setIsPlaying(false)
    }
  }

  const onSeek = e => {
    const seekto = audioPlayer.current.duration * (+e.target.value / 100)
    audioPlayer.current.currentTime = seekto
    setSeekValue(e.target.value)
    audioPlayer.current.play()
  }

  const handleClick = e => {
    if (!isPlaying) play()
    else pause()

    setIsPlaying(!isPlaying)
  }

  let albumImage
  if (image) {
    albumImage = <Image src={image} alt="" width="400px" height="400px" />
  } else {
    albumImage = (
      <Icon
        type="AlbumDefault"
        viewBox="0 0 128 128"
        width="400px"
        height="400px"
      />
    )
  }

  return (
    <Wrapper>
      <ImageBox>
        {albumImage}
        <PlayButton onClick={handleClick}>
          <Icon
            type="PlayButton"
            viewBox="0 0 256 256"
            width="256px"
            height="256px"
          />
        </PlayButton>
      </ImageBox>

      <audio src={src} ref={audioPlayer} onTimeUpdate={onPlaying}>
        Your browser does not support the
        <code>audio</code> element.
      </audio>

      {durationTime && (
        <TimeBar>
          {secondsToHms(currentTime)} / {secondsToHms(durationTime)}
          <Input
            type="range"
            varient="audioPlayer"
            min="0"
            max="100"
            step="1"
            value={seekValue}
            onChange={onSeek}
          />
        </TimeBar>
      )}
    </Wrapper>
  )
}

export default Audio

const Wrapper = styled.div`
  position: relative;
`

const TimeBar = styled.div`
  position: absolute;
  bottom: 20px;
  left: calc(50%);
  transform: translate(-50%, -50%);
  z-index: 10;

  font-size: 14px;
  width: 80%;

  background: ${props => props.theme.colors.gray12};
  backdrop-filter: blur(30px);
  border-radius: 10px;
  padding: 6px 10px;
  color: #ffffff;
`

const ImageBox = styled.div`
  box-shadow: 10px 10px 10px 0px rgb(170 171 171 / 60%);
  position: relative;
`

const PlayButton = styled.div`
  position: absolute;
  top: calc(50% + 30px);
  left: calc(50% + 17px);
  transform: translate(-50%, -50%);
  z-index: 10;
  cursor: pointer;
`

const Input = styled.input`
  height: 25px;
  -webkit-appearance: none;
  margin: 0px 0;
  width: 100%;
  background: transparent;

  &:focus {
    outline: none;
  }

  & ::-webkit-slider-runnable-track {
    width: 100%;
    height: 5px;
    cursor: pointer;
    animate: 0.2s;
    background: ${props => props.theme.slider.audioPlayer.trackColor};
    border-radius: 3px;
  }

  & ::-webkit-slider-thumb {
    border: 1px solid ${props => props.theme.slider.audioPlayer.circleColor};
    height: 18px;
    width: 18px;
    border-radius: 25px;
    background: ${props => props.theme.slider.audioPlayer.thumbColor};
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -7px;
  }

  &:focus::-webkit-slider-runnable-track {
    background: ${props => props.theme.slider.audioPlayer.trackColor};
  }

  & ::-moz-range-track {
    width: 100%;
    height: 5px;
    cursor: pointer;
    animate: 0.2s;
    background: ${props => props.theme.slider.audioPlayer.trackColor};
    border-radius: 3px;
  }

  & ::-moz-range-track {
    border: 1px solid ${props => props.theme.slider.audioPlayer.trackColor};
    height: 18px;
    width: 18px;
    border-radius: 25px;
    background: ${props => props.theme.slider.audioPlayer.circleColor};
    cursor: pointer;
  }

  & ::-ms-track {
    width: 100%;
    height: 5px;
    cursor: pointer;
    animate: 0.2s;
    background: transparent;
    border-color: transparent;
    color: transparent;
  }

  & ::-ms-fill-lower {
    background: ${props => props.theme.slider.audioPlayer.trackColor};
    border-radius: 3px;
  }

  & ::-ms-fill-lower {
    background: ${props => props.theme.slider.audioPlayer.trackColor};
    border-radius: 3px;
  }

  & ::-ms-thumb {
    margin-top: 1px;
    border: 1px solid ${props => props.theme.slider.audioPlayer.circleColor};
    height: 18px;
    width: 18px;
    border-radius: 25px;
    background: ${props => props.theme.slider.audioPlayer.thumbColor};
    cursor: pointer;
  }

  &:focus::-ms-fill-lower {
    background: ${props => props.theme.slider.audioPlayer.trackColor};
  }

  &:focus::-ms-fill-upper {
    background: ${props => props.theme.slider.audioPlayer.trackColor};
  }
`
