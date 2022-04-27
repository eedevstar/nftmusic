import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useDropzone } from 'react-dropzone'

import { SubTitle } from '@components/common/Text'
import { Button } from '@components/common/Button'
import { parseSongsData } from '@lib/parseFile'
import DropFile from './DropFile'
import Album from '@components/Library/AlbumWide'
import SongItem from './SongItem'

const SecondStep = props => {
  const [albumData, setAlbumData] = useState(
    !!props.contents ? props.contents.album : {
      file: '',
      image: '',
      trackName: '[Track Name]',
      name: '[Album Name]',
      artist: '[Artist]',
      tracks: 0,
      time: 0,
    }
  )

  const [songs, setSongs] = useState( !!props.contents ? props.contents.songs : [] )

  const {
    acceptedFiles,
    fileRejections,
    getRootProps,
    getInputProps,
    isFocused,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    accept: 'image/jpeg,image/png,audio/*',
  })

  const sumTimeOfArray = arr => {
    if(arr && arr.length > 0) // need to return minutes
      return Math.ceil(arr.map(item => item.time).reduce((prev, next) => prev + next) / 60)
    else
      return 0
  }

  // Automatically send step 3 after choose the file(image or music file)
  useEffect(() => {
    if( (!!props.contents && props.contents.album.image != albumData.image) ||
        (!props.contents && albumData.image != "") )
      handleClick()

    if( (!!props.contents && props.contents.songs.length > 0 && props.contents.songs[0] != songs[0]) ||
        (!!props.contents && props.contents.songs.length == 0 && songs.length > 0) ||
        (!props.contents && songs.length > 0) )
      handleClick()

  }, [albumData.image, songs])

  useEffect(() => {
    const ids = new Set(songs.map(d => d.file.path))

    const acceptedImages = acceptedFiles.filter(function (file) {
      return file.type.startsWith('image')
    })

    const acceptedSongs = acceptedFiles.filter(function (file) {
      return file.type.startsWith('audio')
    })

    let albumImg;

    if (acceptedImages.length > 0) {
      albumImg = {
        file: acceptedImages[0],
        image: URL.createObjectURL(acceptedImages[0]),
      }
      if(acceptedSongs.length === 0) {
        setAlbumData({
          ...albumData,
          ...albumImg,
        })
      }
    }

    parseSongsData(acceptedSongs).then(acceptedSongsMetaData => {

      var mergedSongs = [
        ...songs,
        ...acceptedSongsMetaData.filter(d => !ids.has(d.file.path)),
      ]

      if(mergedSongs.length === 0)
        return

      //setSongs(mergedSongs)

      // accept only one song
      setSongs(mergedSongs.length == 0 ? [] : [mergedSongs.at(-1)])
      setAlbumData({
        ...albumData,
        tracks: mergedSongs.length,
        //time: sumTimeOfArray(mergedSongs),
        time: (mergedSongs.length == 0 ? 0 : mergedSongs[0].time),
        ...albumImg,
      })

    })

  }, [acceptedFiles])

  const fileRejectionItems = fileRejections.map(({ file, errors }) => (
    <li key={file.path}>
      {file.path} - {file.type}
      <ul>
        {errors.map(e => (
          <li key={e.code}>{e.message}</li>
        ))}
      </ul>
    </li>
  ))

  const handleClick = event => {
    // console.log(songs)
    // console.log(albumData)

    props.setStepData({
      album: albumData,
      songs: songs
    })
    props.setStep(2)

  }

  const removeSong = filePath => {
    const mergedSongs = songs.filter(function (song) {
      return song.file.path != filePath
    })

    //console.log(mergedSongs)

    setSongs(mergedSongs)

    setAlbumData({
      ...albumData,
      tracks: mergedSongs.length,
      time: sumTimeOfArray(mergedSongs),
    })
  }

  const updateSong = (filePath, itemAttributes) => {
    const idx = songs.findIndex(x => x.file.path == filePath)

    if(idx === -1) {
      console.log("Handle song update error")
    } else {
      setSongs([
        ...songs.slice(0, idx),
        Object.assign({}, songs[idx], itemAttributes),
        ...songs.slice(idx + 1)
      ])
    }
  }

  return (
    <Wrapper>
      <DropContainer
        {...getRootProps({ isFocused, isDragAccept, isDragReject })}
      >
        <input {...getInputProps()} />
        <DropFile />
      </DropContainer>

      {fileRejectionItems.length > 0 && (
        <aside>
          <h4>Error</h4>
          <ul>{fileRejectionItems}</ul>
        </aside>
      )}
      <HiddenWrapper>
        <AlbumItemBox>
          <Album data={albumData} editAble />
        </AlbumItemBox>

        <SongsBox>
          {songs.map((item, i) => (
            <SongsItemBox key={i}>
              <SongItem data={item} remove={removeSong} update={updateSong} />
            </SongsItemBox>
          ))}
        </SongsBox>

        <ButtonBox>
          <Button type="submit" varient="primary" fullWidth onClick={handleClick}>
            Continue
          </Button>
        </ButtonBox>
      </HiddenWrapper>

    </Wrapper>
  )
}

export default SecondStep

const HiddenWrapper = styled.div`
  display: none;
`

const Wrapper = styled.div`
  margin: auto;
  padding-top: 80px;
`

const DropFileBox = styled.div`
  margin-top: 28px;
`

const AlbumItemBox = styled.div`
  margin-top: 60px;
`

const SongsBox = styled.div`
  margin-top: 60px;
`

const SongsItemBox = styled.div`
  margin-bottom: 30px;
`

const ButtonBox = styled.div`
  margin: 100px auto 140px auto;
  z-index: 2;
  position: relative;
`

const getColor = props => {
  if (props.isDragAccept) {
    return 'rgba(0, 0, 0, 0.26)'
  }
  if (props.isDragReject) {
    return '#ff1744'
  }
  if (props.isFocused) {
    return 'rgba(0, 0, 0, 0.26)'
  }
  return 'rgba(0, 0, 0, 0.12)'
}

const DropContainer = styled.div`
  width: 560px;
  height: 360px;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-width: 2px;
  border-radius: 4px;
  border-color: ${props => getColor(props)};
  border-style: dashed;
  outline: none;
  transition: border 0.24s ease-in-out;
  padding: 40px 90px;
  box-sizing: border-box;
  text-align: center;
`
