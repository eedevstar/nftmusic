import { useState, useEffect } from "react";
import Link from 'next/link'
import styled from 'styled-components'
import Image from 'next/image'
import Icon from '@components/common/Icon'
import {
  Caption1,
  Caption2,
} from '@components/common/Text'

const Artist = props => {
  const { image, uid, name, userName } = props.data
  const [ follow, setFollow ] = useState(false)

  let artistImage
  if (image) {
    artistImage = <Image src={image} alt="" width="64px" height="64px" />
  } else {
    artistImage = (
      <Icon
        type="ArtistDefault"
        viewBox="0 0 64 64"
        width="64px"
        height="64px"
      />
    )
  }

  return (
    <Wrapper>
      <ImageBox>{artistImage}</ImageBox>
      <ImageHoverBox>{artistImage}</ImageHoverBox>

      <Contents>
        <Link href={`/user/${uid}`} passHref>
          <NameBox>{name && <Caption1>{name}</Caption1>}</NameBox>
        </Link>

        <Caption2>{userName && userName}</Caption2>
        {
          follow ? (
            <>
              <Unfollow onClick={() => setFollow(false)}>
                <Caption2 varient="red50">Unfollow</Caption2>
              </Unfollow>
              <Following>
                <Caption2 varient="green50">Following</Caption2>
              </Following>
            </>
          ) : (
            <Following onClick={() => setFollow(true)}>
              <Caption2 varient="blue50">+ Follow</Caption2>
            </Following>
          )
        }
      </Contents>
    </Wrapper>
  )
}

export default Artist

const Following = styled.div`
  cursor: pointer;
`
const Unfollow = styled.div`
  cursor: pointer;
`

const ImageBox = styled.div`
  margin-right: 15px;
  cursor: pointer;
`

const ImageHoverBox = styled.div`
  cursor: pointer;
  display: none;
`

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  position: relative;

  ${Unfollow} {
    display: none;
  }

  &:hover {
    background: ${props => props.theme.gradients.txItemHover};
    border-radius: 64px 0 0 64px; 

    ${ImageBox} {
      opacity: 0;
    }

    ${ImageHoverBox} {
      display: block;
      position: absolute;
      left: 0;
      top: -5px;
    }

    ${Caption1} {
      color: ${props => props.theme.colors.blue60};
      cursor: pointer;
    }

    ${Unfollow} + ${Following} {
      display: none;
    }

    ${Unfollow} {
      display: inline-block;
    }
  }
`

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  justify-content: center;
  align-items: flex-start;

  ${Caption2} {
    margin-bottom: 2px;
  }
`

const NameBox = styled.div`
  display: flex;
`
